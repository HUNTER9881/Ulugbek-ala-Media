const mongoose = require("mongoose")

const yearModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("year", yearModel)