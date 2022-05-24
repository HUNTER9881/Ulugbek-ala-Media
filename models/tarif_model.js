const mongoose = require("mongoose")

const tarifSchema = mongoose.Schema({
    name: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    time: {
        type: String,
        enum: ["1", "2", "4", "6", "12"],
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("tarif", tarifSchema)