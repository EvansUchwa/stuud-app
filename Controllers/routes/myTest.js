const express = require('express')
const router = express.Router();
const { mailSender } = require('../../Models/mails/query')

// const mysqlConnexion = require('../../Models/databases/index.js')


router.get('/mail', (req, res) => {
    

    try{
        mailSender("johnsonevans686@gmail.com", 'Votre inscription', "ok")
    }catch(error){
        console.log(error)
    }

    res.send('ok')
})

module.exports = router;