const mongoose = require("mongoose")

const replyModel = mongoose.Schema({
        user_ID: {
            type: mongoose.Schema.ObjectId,
            ref: "user",
        },
        comment_ID: {
            type: mongoose.Schema.ObjectId,
            ref: "comment"
        },
        message: {
            type: String,
            required: true
        },
        like: {
            type: Number,
            default: 0
        },
        dislike: {
            type: Number,
            default: 0
        },
    },

    {
        timestamps: true

    })


module.exports = mongoose.model("reply", replyModel)