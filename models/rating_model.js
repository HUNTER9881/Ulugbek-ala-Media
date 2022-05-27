const mongoose = require("mongoose")
const retingModel = mongoose.Schema({
        kino_ID: {
            type: mongoose.Schema.ObjectId,
            ref: "kino",
        }, 
        mult_serial_ID: {
            type:  mongoose.Schema.ObjectId,
            ref: "mult_serial",
        }, 
        multfilm_ID: {
            type: mongoose.Schema.ObjectId,
            ref: "multfilm",
        }, 
        serial_ID: {
            type:  mongoose.Schema.ObjectId,
            ref: "serial",
        }, 
        season_ID: {
            type:  mongoose.Schema.ObjectId,
            ref: "season",
        },
        rating: {
            type: Number,
            enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            required: true
        },
    }, {
        timestapms: true
    }

)

module.exports = mongoose.model("rating", retingModel)