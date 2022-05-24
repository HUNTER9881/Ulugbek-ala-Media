const mongoose = require("mongoose");

const commentModel = mongoose.Schema({
        user_ID: {
            type: mongoose.Schema.ObjectId,
            ref: "user",
        },
        serial_ID: {
            type: mongoose.Schema.ObjectId,
            ref: "serial",
        },
        kino_ID: {
            type: mongoose.Schema.ObjectId,
            ref: "kino",
        },
        multik_ID: {
            type: mongoose.Schema.ObjectId,
            ref: "mult_serial",
        }, 
        message: {
            type: String,
            required: true,
        },
        like: {
            type: Number,  
            default: 0,
        },
        dislike: {
            type: Number,
            default: 0,
        },
    }, {
        timestamps: true
    }

);
module.exports= mongoose.model('comment', commentModel)