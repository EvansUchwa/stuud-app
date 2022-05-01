const express = require('express')
const router = express.Router();
const { register, validateMail,login } = require('../../Models/auth')
// const mysqlConnexion = require('../../Models/databases/index.js')


router.post('/register', (req, res) => {
    register(req, res)
})

router.put('/validateMail', (req, res) => {
    validateMail(req, res)
})

router.post('/login', (req, res) => {
    login(req, res)
})

module.exports = router;

// $2b$12$fcuhFi/UlhjaVJi45M0kVefLlGCbjR/OeA79u2CXZ7mpMuE0mQjvq