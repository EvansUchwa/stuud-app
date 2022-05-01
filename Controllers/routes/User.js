const express = require('express')
const router = express.Router();
const { authToken } = require('../../Models/auth')
const {getUser,getUserAllInformation,finaliseUserProfil} = require('../../Models/user.js')
const mysqlConnexion = require('../../Models/databases/index.js')



router.get('/getUserConnected', authToken,(req, res) => {
    // console.log('les info utilisateur '+req.userId)
    getUser(req,res)
})

router.get('/getUserConnectedAllInfos', authToken,(req, res) => {
    // console.log('les info utilisateur '+req.userId)
    getUserAllInformation(req,res)
})

router.put('/finaliseUserProfil', authToken,(req, res) => {
    // console.log('les info utilisateur '+req.userId)
    finaliseUserProfil(req,res)
})


module.exports = router;