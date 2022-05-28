const express = require('express');
const router = express.Router()
const Model = require('../models/user_model');
const HelloClass = require('../config/class')
const callback = require("../config/callback");
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const {
    token_key,
    token_time
} = require('../config/index')
const {
    checkToken,
    userRole,
    userStatus,
    userBalance
} = require('../middleware/auth')



router.post('/create', async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.CREATE_DATA()
})
router.post("/login", async (req, res, next) => {
    const {
        email,
        password
    } = req.body
    if (!email || email == "" || !password || password == "") {
        res.json({
            message: "Need to fill forms"
        })
    } else {
        const user = await Model.findOne({
            email: email
        })
        if (!user) {
            res.json({
                message: "Email is wrong"
            })
        } else {
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch || isMatch == false) {
                res.json({
                    message: "Password is wrong"
                })
            } else {
                const token = jwt.sign({
                    data: {
                        NAME: user.name,
                        STATUS: user.status,
                        ROLE: user.role,
                        ID: user._id
                    }
                }, token_key, {
                    expiresIn: token_time
                });



                res.header({
                    "Authorization": "Bearer " + token
                })
                res.json({
                    token: token
                })
            }
        }
    }
})
router.get('/decode', async (req, res, next) => {
    const token = req.headers.authorization
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    const decodeToken = JSON.parse(jsonPayload);
    res.json(decodeToken)
})
router.get('/all', checkToken, userRole("admin", "user"), userStatus("vip"), userBalance, async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.GET_ALL()
})
router.get('/:id', async (req, res, next) => {
    const result = new HelloClass(Model, req, res, next)
    result.GET_ONE()
})
router.put('/:id', async (req, res, next) => {
    const result = await Model.findByIdAndUpdate(req.params.id)
    result.name = req.body.name;
    result.price = req.body.price;
    result.time = req.body.time;
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