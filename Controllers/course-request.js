const { mysql_selectOne,mysql_selectAll,
	mysql_findOne, mysql_notFound, 
    mysql_Insert,mysql_updateOne } = require('./databases/query')
const uniqId = require('uniqid')
const SCHOOL_SUBJECT = require('./school_subject.js')


async function addCourseRequest(req,res){
	try{
				let school_subject_id = null;
				const {type,user_id,title,school_subject,number,year,description,date_now}= req.body;
				const course_unique_id = user_id+"-cr-"+uniqId()

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

						const addCourse = await mysql_Insert("courses_requests",
						"unique_id,status,type,user_id,title,school_subject_id,number,year,description",
						" '"+course_unique_id+"','Publié','"+type+"','"+user_id+"','"+title+"','"+school_subject_id+"','"+number+"','"+year+"','"+description+"' ")
						res.status(200).json({added: true,id: course_unique_id})
				}catch(err){
					res.send({message: "Oups! Une erreur s'est produite pendant l'ajout du cours",type: err})
				}
			

	}catch(error){
		res.status(400).json({message: "Oups! Une erreur s'est produite pendant l'upload de fichier",type: error})
	}
}


async function getAllCourseRequest(req,res){
	try{
		const allCoursesRequest = await mysql_selectAll('courses_requests','*','ORDER BY id');
		res.send(allCoursesRequest);

	}catch(err){
		console.log(err)
	}
}

module.exports = {addCourseRequest,getAllCourseRequest}