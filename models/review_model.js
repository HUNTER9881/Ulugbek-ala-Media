const mongoose = require("mongoose")

const reviewModel = mongoose.Schema({
    user_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    },
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },

}, {
    timestapms: true
})

module.exports = mongoose.model("review", reviewModel)