const express = require('express');
const router = express.Router()
const Model = require('../models/serial_model');
const HelloClass = require('../config/class')
const callback = require("../config/callback");
const multer = require('multer');
const md5 = require('md5')
const path = require('path')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/serial')
    },
    filename: function (req, file, cb) {
        cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`)
    }
})
const upload = multer({
    storage: storage
})

router.post('/create', upload.array("files", 12), async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.CREATE_WITH_IMAGE("image_video")
})
router.get('/all', async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.GET_ALL(
        ["season_ID"]
    )
})
router.get('/filter/:id', async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.FILTER_BY_ID()
})
router.get('/:id', async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.GET_ONE(
        ["season_ID"]
    )
})
router.put('/:id', upload.array("files", 12), async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.UPDTATE_WITH_IMAGE("serial", "image_video")
})
router.delete('/:id', async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.DELETE_WITH_IMAGE("serial", "image_video")
})




module.exports = router