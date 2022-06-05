const express = require('express')
const router = express.Router();
const { getAll } = require('../Controllers/faculty.js')

router.get('/all', (req, res) => {
    getAll(req, res)
})


module.exports = router;