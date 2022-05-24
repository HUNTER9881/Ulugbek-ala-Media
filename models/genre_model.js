const mongoose = require("mongoose")

const genreModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
}, {
    timestaps: true
})
module.exports = mongoose.model("genre", genreModel);