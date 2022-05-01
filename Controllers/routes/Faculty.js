const express = require('express')
const router = express.Router();
const { getAll } = require('../../Models/faculty.js')

router.get('/all', (req, res) => {
    getAll(req, res)
})


module.exports = router;