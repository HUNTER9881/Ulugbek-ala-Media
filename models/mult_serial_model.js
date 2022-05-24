const {
    Schema,
    model
} = require("mongoose");

const multikSerial = Schema({
        multik_ID: {
            type: Schema.ObjectId,
            ref: "multik_model"
        },
        rating: {
            type: Number, 
            default: 0
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        video: {
            type: String,
            required: true
        },
        like: {
            type: Number,
            required: true
        },
        dslike: {
            type: Number,
            required: true
        },
        view: {
            type: String,
            required: true
        },
        images: [{
            type: String,
            required: true
        }]


    }, {
        timestamps: true
    }

);

exports = model("mult_serial", multikSerial)