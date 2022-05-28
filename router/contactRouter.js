const express = require('express');
const router = express.Router()
const Contact = require('../models/contact_model');
const HelloClass = require('../config/class')


router.post('/create', async (req, res, next) => {
    const result = new HelloClass(Contact, req, res, next)
    result.CREATE_DATA()
})
router.get("/filter", async (req, res, next) => {
    async function returnCallback(MOdel,item) {
        const result = await MOdel.find({
            status: {
                $eq: item
            }
        })
        res.json(result)
    }
    const {
        name
    } = req.body
    
    if (name == "new") {
        returnCallback(Contact, name)
    }
    else if (name == "pending") {
        returnCallback(Contact, name)
    }
    else if (name == "done") {
        returnCallback(Contact, name)
    }
})
router.get('/:id', async (req, res, next) => {
    const result = new HelloClass(Contact, req, res, next)
    result.GET_ONE()
})
router.put('/:id', async (req, res, next) => {
    const result = new HelloClass(Contact, req, res, next)
    result.UPDATE_DATA()
})
router.delete('/:id', async (req, res, next) => {
    const result = new HelloClass(Contact, req, res, next)
    result.DELETE_ONE()
})



module.exports = router