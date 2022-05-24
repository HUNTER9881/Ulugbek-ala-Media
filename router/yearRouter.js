const express = require('express');
const router = express.Router()
const Model = require('../models/year_Model');
const HelloClass = require('../config/class')
const callback = require("../config/callback");

router.post('/create', async (req, res, next) => {
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

router.put('/:id', async (req, res, next) => {
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
router.delete('/:id', async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.DELETE_ONE()
})


module.exports = router