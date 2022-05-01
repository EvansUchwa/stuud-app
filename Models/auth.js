require('dotenv').config()
const bcrypt = require('bcrypt');
const uniqId = require("uniqid");
const jwt = require('jsonwebtoken');
const { setRegistrationMail } = require('./mailUtil')
const { mysql_findOne, mysql_notFound, 
    mysql_Insert,mysql_updateOne } = require('./databases/query')





async function authToken(req,res,next){
    if(req.headers['authorization']){
        const token = req.headers['authorization'].split(' ')[1];

        if(token){
            try{
                const tokenAuthed = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
                if(tokenAuthed){
                    req.userId = tokenAuthed.id;
                    next();
                        }
            }catch(error){
                    res.status(401).json({message: 'token invalid'})
            }
        }else{
            res.status(401).json({message: 'token not found'})
        }
    }else{
        res.status(401).json({message: 'header autorisation not found'})
    }
}



async function register(req, res) {
    const { pseudo, mail, password } = req.body;
    const default_profil_pic = req.protocol+'://'+req.get('Host')+'/Uploads/profils/default.png';

    let hashPass = await bcrypt.hash(password, 12);

    let mailToken = mail + "-" + uniqId();
    let hashMailToken = await bcrypt.hash(mailToken, 12);
    hashMailToken = hashMailToken.replaceAll('','');
    let user_uniqId = uniqId();

    try {
        let userAlreadyExist = await mysql_notFound('users', 'pseudo',
            '= "' + pseudo + '" OR mail = "' + mail + '" ')
        try {
            let insertUser = await mysql_Insert('users',
                'unique_id,pseudo,mail,password,profil_picture',
                ' "' + user_uniqId + '","' + pseudo + '","' + mail + '","' + hashPass + '","'+default_profil_pic+'" ')
            let { insertId } = insertUser;
            try {
                let insertMail = await mysql_Insert('mails',
                    'user_id,type,token',
                    ' "' + insertId + '","inscription","' + hashMailToken + '" ')

                setRegistrationMail(req,mail, hashMailToken)
                res.status(200).json({ message: 'Compte créé avec success' })
            } catch (error) {
                res.status(400).json({ message:"Une erreur s'est produite pendant l'envois du mail de validation....", error})
            }

        } catch (error) {
            res.status(400).json({ message:"Une erreur s'est produite pendant ton inscription,essais de rafraichir la page et recommence....", error})
        }
    } catch (error) {
        res.status(400).json({ message:'Un utilisateur avec ton pseudo/email existe deja', error })
    }

}

async function validateMail(req,res){
    const {mailToken} = req.body
    try{
        let findMailToken = await mysql_findOne('mails', 'token',
            '= "' + mailToken + '" ')

        const {user_id} = findMailToken[0];
        try{

            let updateAccountVerification = await mysql_updateOne('users','verify_at','NOW()' ,'WHERE id = '+user_id )

            res.send({message: "Mail validé"})
        }catch(error){
            res.status(400).json({ message:'Activation impossible', error })
        }
        
    }catch(error) {
        res.status(400).json({ message:'Activation impossible', error })

    }
}


async function login(req, res) {
    const { pseudoORmail, password } = req.body;

    try {
        let findUser = await mysql_findOne('users', 'pseudo',
            '= "' + pseudoORmail + '" OR mail = "' + pseudoORmail + '" ')

        let comparePass = await bcrypt.compare(password, findUser[0].password)

        if (comparePass) {
            let generatedToken = jwt.sign({ id: findUser[0].id }, process.env.ACCESS_TOKEN_SECRET)

            try{
                let con_count_now = 0;
                await mysql_updateOne('users','last_connexion','NOW()' ,'WHERE id = '+findUser[0].id )

                if(findUser[0].count_connexion == null){
                    con_count_now = 1;
                }else{
                    con_count_now = parseInt(findUser[0].count_connexion) + 1;
                }


                await mysql_updateOne('users','count_connexion',con_count_now,'WHERE id = '+findUser[0].id)

                res.send({ token: generatedToken })
            } catch(error){
                res.status(400).json({ message: error })
            }

        } else {
            res.status(400).json({ message: 'Mot de passe incorrect' })
        }
    } catch (error) {
        res.status(400).json({ message: 'Identifiant ou Mot de passe incorrect' })
    }

    // let comparePass = await bcrypt.compare(hashPass)

}

module.exports = { register, validateMail,login,authToken }