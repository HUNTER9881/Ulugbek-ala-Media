const express = require('express');
const router = express.Router();
const Model = require('../models/kino_model');
const HelloClass = require('../config/class');
const callback = require("../config/callback");
const multer = require('multer');
const md5 = require('md5');
const path = require('path');
const {
    checkToken,
    userRole,
    userStatus,
    userBalance
} = require('../middleware/auth')
const storage = multer.diskStorage({
    destination: function (req, file, cb) { cb(null, './public/kino') },
    filename: function (req, file, cb) { cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`) }
})

const upload = multer({ storage: storage })
router.post('/create', checkToken, userRole("admin", "user"), userStatus("vip"), userBalance, upload.array("files", 12), async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.CREATE_WITH_IMAGE("kino_images")
})
router.get('/all',  async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.GET_ALL(
        ["category_ID"],
        ["director_ID"],
        ["tag_ID"],
        ["quality_ID"],
        ["genre_ID"],
        ["year_ID"],
        ["actor_ID"],
        ["country_ID"],
    )
})
router.get('/filter/:id', async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.FILTER_BY_ID()
})
router.get('/:id', checkToken, userRole("admin"), async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.GET_ONE(
        ["category_ID"],
        ["director_ID"],
        ["tag_ID"],
        ["quality_ID"],
        ["genre_ID"],
        ["year_ID"],
        ["actor_ID"],
        ["country_ID"],
    )
})
router.put('/:id', checkToken, userRole("admin"), upload.array("files", 12), async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.UPDTATE_WITH_IMAGE("kino","kino_images")
})
router.delete('/:id', checkToken, userRole("admin"), async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.DELETE_WITH_IMAGE("kino","kino_images")
})
module.exports = router