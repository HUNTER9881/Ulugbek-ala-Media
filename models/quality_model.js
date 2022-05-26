const mongoose = require("mongoose")

const qualtyModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestapms: true
})
module.exports = mongoose.model("quality", qualtyModel)