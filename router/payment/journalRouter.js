const express = require('express');
const router = express.Router()

const Jounal = require('../../models/payment/journalModel')
const User = require('../../models/user_model')
const config = require('../../config/index')



router.post('/check', async (req, res, next) => {
    const userToken = req.headers.authorization
    const {
        method,
        account
    } = req.body

    if (userToken == "" || !userToken || userToken == undefined) {
        res.status(400).json({
            success: false,
            data: error,
            state: 3
        })
    } else {
        if (method == "check") {
            const user = await User.findOne({
                uuid: account
            })
            if (!user) {
                res.status(400).json({
                    success: false,
                    data: 'User not found'
                })
            } else {
                res.status(200).json({
                    success: true
                })
            }

        } else {
            res.status(400).json({
                success: false,
                data: 'Invalid token'
            })
        }
    }
})

router.post('/pay', async (req, res, next) => {
    const osonToken = req.headers.authorization
    const {
        method,
        account
    } = req.body

    if (config.token === osonToken) {
        if (method == "pay") {
            const user = await User.findOne({
                uuid: account
            })
            if (!user) {
                res.status(400).json({
                    success: false,
                    data: 'User not found'
                })
            } else {
                const result = new Jounal({
                    userID: user._id,
                    system: "Oson Payment",
                    amount: req.body.amount
                })
                result.save()
                    .then(() => {
                        res.status(200).json({
                            success: true,
                            state: 1,
                            transaction_id: result._id
                        })
                    })
                    .catch((error) => {
                        res.status(400).json({
                            success: false,
                            state: -1,
                            data: error
                        })
                    })
            }
        } else {
            res.status(400).json({
                success: false,
                data: 'Invalid token'
            })
        }

    } else {
        res.status(400).json({
            success: false,
            data: error
        })
    }
})




module.exports = router