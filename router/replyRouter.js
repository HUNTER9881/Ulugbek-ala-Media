const express = require('express');
const router = express.Router()
const Model = require('../models/reply_model');
const HelloClass = require('../config/class')
const callback = require("../config/callback");
const {
    checkToken,
    userRole,
    userStatus,
    userBalance
} = require('../middleware/auth')
router.post('/create',  checkToken, userRole("admin","user"),   async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.CREATE_DATA()
})


router.get('/:id', checkToken, userRole("admin", "user"), async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.FILTER_BY_ID()
})



module.exports = router