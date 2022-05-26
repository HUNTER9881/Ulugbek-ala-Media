const express = require('express');
const router = express.Router()
const Model = require('../models/kino_model');
const HelloClass = require('../config/class')
const callback = require("../config/callback");
const multer = require('multer');
const md5 = require('md5')
const path = require('path')
const storage = multer.diskStorage({
    destination: function (req, file, cb) { cb(null, './public/kino') },
    filename: function (req, file, cb) { cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`) }
})
const upload = multer({ storage: storage })


router.post('/create', upload.array("files", 12), async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.CREATE_WITH_IMAGE("kino_images")
})
router.get('/all', async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.GET_ALL([
        "category_ID",
        "director_ID",
        "tag_ID",
        "quality_ID",
        "genre_ID",
        "year_ID",
        "actor_ID",
        "country_ID",
    ])
})
router.get('/filter/:id', async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.FILTER_BY_ID()
})
router.get('/:id', async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.GET_ONE([
        "category_ID",
        "director_ID",
        "tag_ID",
        "quality_ID",
        "genre_ID",
        "year_ID",
        "actor_ID",
        "country_ID",
    ])
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