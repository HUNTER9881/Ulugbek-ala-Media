const express = require('express');
const router = express.Router()
const Model = require('../models/review_model');
const HelloClass = require('../config/class')
const callback = require("../config/callback");

router.post('/create', async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.CREATE_DATA()
})


// router.get('/:id', async (req, res, next) => {
//     const result = new HelloClass(Model, req, res, next)
//     result.GET_ONE()
// })



module.exports = router