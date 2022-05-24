const mongoose = require("mongoose")
const retingModel = mongoose.Schema({
        serial_ID: {
            type: Schema.ObjectId,
            ref: "serial",
        }, 
        kino_ID: {
            type: Schema.ObjectId,
            ref: "kino",
        }, 
        multik_ID: {
            type: Schema.ObjectId,
            ref: "mult_serial",
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