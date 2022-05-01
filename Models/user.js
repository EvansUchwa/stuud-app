
const { mysql_findOne,mysql_leftJoinSelect, mysql_notFound, mysql_Insert,mysql_updateOne } = require('./databases/query');


async function getUser(req,res){
	const {userId} = req;
	try{
		let user = await mysql_findOne('users','id','='+userId)
		res.send(user[0])
	}catch(error){
		res.status(400).json({message: error})
	}
}


async function getUserAllInformation(req,res){
	const {userId} = req;
	try{
		let user = await mysql_leftJoinSelect('users','*','user_other_infos','users.id = user_other_infos.user_id',' WHERE users.id =  '+userId)
		res.send(user[0])
	}catch(error){
		console.log(error)
		res.status(400).json(error)
	}
}

async function finaliseUserProfil(req,res){
	const {userId} = req;
	const {age ,sexe,university, faculty,study_level, school_year,user_id} = req.body

	try{
		let userOtherInfoAlreadyExist = await mysql_notFound('user_other_infos', 'user_id','= "' + userId + '"  ')
		try{
		let insertUserOtherInfos = await mysql_Insert('user_other_infos',
			'age ,sexe,university, faculty,study_level, school_year,user_id',
	' "'+age+'","'+sexe+'","'+university+'","'+faculty+'","'+study_level+'","'+school_year+'","'+userId+'" ')


		await mysql_updateOne('users','profil_completed',1,'WHERE id = '+userId)
				res.json({finalised: true})

		}
		catch(error) {
			res.status(401).json({message: 'Error lors de la finalisation,veuillez reesayer'})
		}
		
	
	}catch(error){
		res.status(401).json({message: 'Profil deja complété'})
	}

}

module.exports = {getUser,getUserAllInformation,finaliseUserProfil}