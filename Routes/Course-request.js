const express = require('express')
const router = express.Router();
const Course_request = require('../Controllers/course-request.js')
const { authMiddleware } = require('../Controllers/auth')
// const mysqlConnexion = require('../../Models/databases/index.js')


router.post('/add', authMiddleware,(req, res) => {
    // res.send('ajout de cours')
    Course_request.addCourseRequest(req,res)
})

router.get('/all',(req, res) => {
    // res.send('ajout de cours')
    Course_request.getAllCourseRequest(req,res)
})
module.exports = router;

