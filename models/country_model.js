const mongoose = require("mongoose")

const countryModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("country", countryModel)