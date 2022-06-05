const express = require('express')
const router = express.Router();
const axios = require("axios")
const { getAll } = require('../Controllers/school_subject.js')

router.get('/all', (req, res) => {
    getAll(req, res, axios)
})


module.exports = router;