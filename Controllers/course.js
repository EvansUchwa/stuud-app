const { mysql_selectOne,mysql_selectAll,
	mysql_findOne, mysql_notFound, 
    mysql_Insert,mysql_updateOne } = require('./databases/query')
const multer  = require('multer')
const fs = require('fs');
const uniqId = require('uniqid')
const SCHOOL_SUBJECT = require('./school_subject.js')


const storageConfig = multer.diskStorage({
  destination: function(req,file,cb){
  	const { user_id } = req.body
      const path = `./uploads/courses/usr-`+user_id
      fs.mkdirSync(path, { recursive: true })
  	cb(null, path);
  },
  filename: function (req, file, cb) {
  	const {date_now} = req.body;
    cb(null,  date_now+"-" + file.originalname);
  },
});
const upload = multer( { storage: storageConfig } );

function addCourse(req,res){
	try{
		upload.array("courseFiles")(req,res, async () =>{

			if(req.files && req.files.length > 0){
				let school_subject_id = null;
				const {type,user_id,title,school_subject,number,year,description,date_now}= req.body;
				const course_unique_id = user_id+"-cr-"+uniqId()

				let filesUrlArray = [];
				for(let i = 0;i < req.files.length;i++){
					const fileFinalName = date_now+"-"+req.files[i].originalname
					filesUrlArray.push(fileFinalName);
				}
				filesUrlArray = JSON.stringify(filesUrlArray)
				try{
		
						const schoolSubjectExist = await SCHOOL_SUBJECT.alreadyExist(school_subject)
							if(schoolSubjectExist){
								school_subject_id = schoolSubjectExist[0].id;
							}else{
								const addSchoolSubject = await mysql_Insert("school_subjects",
								"name",
								" '"+school_subject+"' ")
								school_subject_id = addSchoolSubject.insertId
							}

						const addCourse = await mysql_Insert("courses",
						"unique_id,status,type,user_id,title,school_subject_id,number,year,description,courseFiles",
						" '"+course_unique_id+"','Publié','"+type+"','"+user_id+"','"+title+"','"+school_subject_id+"','"+number+"','"+year+"','"+description+"','"+filesUrlArray+"' ")
						res.status(200).json({courseAdded: true,id: course_unique_id})
				}catch(err){
					res.send({message: "Oups! Une erreur s'est produite pendant l'ajout du cours",type: err})
				}
			}else{
				res.status(400).json({message: 'Oups!! Pas de fichiers uploadé,ajoute des fichiers a ton cours bg'})
			}
		})

	}catch(error){
		res.status(400).json({message: "Oups! Une erreur s'est produite pendant l'upload de fichier",type: error})
	}
}



async function getAllCourse(req,res){
	try{
		const allCoursesRequest = await mysql_selectAll('courses','*','ORDER BY id');
		res.send(allCoursesRequest);

	}catch(err){
		console.log(err)
	}
}

module.exports = {addCourse,getAllCourse}