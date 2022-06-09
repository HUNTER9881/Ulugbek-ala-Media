const express = require('express');
const router = express.Router()
const HelloClass = require('../config/class')

router.get('/1', async (req, res, next) => {
    const randoms = new HelloClass()
    randoms.randomElement(100, req, res, )
})

router.get('/2', async (req, res, next) => {
    const randoms = new HelloClass()
    randoms.randomElement(1000000, req, res, )
})
router.get('/3', async (req, res, next) => {
    const randoms = new HelloClass()
    randoms.task_2
})



module.exports = router