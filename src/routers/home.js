const express = require('express')
const router = new express.Router()
// const User = require('../models/user')
var mongoose = require('mongoose')

// Test
router.get('/', async (req, res) => {
    await res.render('test')
})

module.exports = router