const express = require('express');
const router = express.Router()
const Rating = require('../models/rating_model');
const HelloClass = require('../config/class')

const Kino= require('../models/kino_model')
const Season = require('../models/season_model')
const Serial = require('../models/serial_model')
const Multik = require('../models/multfilm_model')
const MultikSerial = require('../models/mult_serial_model')



router.post('/kino', async (req, res, next) => {
    const result = new HelloClass(Rating, req, res, next)
    result.RATING("kino_ID", Kino)
})
router.post('/season', async (req, res, next) => {
    const result = new HelloClass(Rating, req, res, next)
    result.RATING("season_ID", Season)
})
router.post('/serial', async (req, res, next) => {
    const result = new HelloClass(Rating, req, res, next)
    result.RATING("serial_ID", Serial)
})
router.post('/multfilm', async (req, res, next) => {
    const result = new HelloClass(Rating, req, res, next)
    result.RATING("multfilm_ID", Multik)
})
router.post('/mult_serial', async (req, res, next) => {
    const result = new HelloClass(Rating, req, res, next)
    result.RATING("mult_serial_ID", MultikSerial)
})


module.exports = router