const express = require('express')
const router = express.Router();
const Course = require('../Controllers/course.js')
const { authMiddleware } = require('../Controllers/auth')
// const mysqlConnexion = require('../../Models/databases/index.js')


router.post('/add', authMiddleware,(req, res) => {
    // res.send('ajout de cours')
    Course.addCourse(req,res)
})

router.get('/all',(req, res) => {
    // res.send('ajout de cours')
    Course.getAllCourse(req,res)
})

module.exports = router;

