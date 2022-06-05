const express = require('express')
const router = express.Router();
const { authMiddleware } = require('../Controllers/auth')
const {getUser,getUserAllInformation,finaliseUserProfil} = require('../Controllers/user.js')
const mysqlConnexion = require('../Controllers/databases/index.js')



router.get('/getUserConnected', authMiddleware,(req, res) => {
    // console.log('les info utilisateur '+req.userId)
    getUser(req,res)
})

router.get('/getUserConnectedAllInfos', authMiddleware,(req, res) => {
    // console.log('les info utilisateur '+req.userId)
    getUserAllInformation(req,res)
})

router.put('/finaliseUserProfil', authMiddleware,(req, res) => {
    // console.log('les info utilisateur '+req.userId)
    finaliseUserProfil(req,res)
})


module.exports = router;