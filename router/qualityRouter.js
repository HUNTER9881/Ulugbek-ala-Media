const express = require('express');
const router = express.Router()
const Model = require('../models/quality_model');
const HelloClass = require('../config/class')
const callback = require("../config/callback");
const {
    checkToken,
    userRole,
    userStatus,
    userBalance
} = require('../middleware/auth')

router.post('/create',  checkToken, userRole("admin"),  async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.CREATE_DATA()
})
router.get('/all', async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.GET_ALL()
})
router.get('/:id', async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.GET_ONE()
})

router.put('/:id',  checkToken, userRole("admin"), async (req, res, next) => {
    const result = await Model.findByIdAndUpdate(req.params.id)
    result.name = req.body.name
    await result
        .save()
        .then(() => {
            res.json(callback.SUCCESS(result));
        })
        .catch((error) => {
            res.json(callback.ERROR(error));
        });
})
router.delete('/:id',  checkToken, userRole("admin"), async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.DELETE_ONE()
})


module.exports = router