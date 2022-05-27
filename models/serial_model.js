const expressLayouts = require("express-ejs-layouts");
const {
    Schema,
    model
} = require("mongoose");

const searialSchema = Schema({
        season_ID: {
            type: Schema.ObjectId,
            ref: "season"
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
        like: {
            type: Number,
            required: true
        },
        dislike: {
            type: Number,
            required: true
        },
        views: {
            type: String,
            required: true
        },

        // 1-element: video
        // 2 dan uyoqiga faqat rasm yuklash
        image_video: [{
            type: String,
            required: true
        }],
         rating: {
        type: Number,
        default: 0
    },
    }, {
        timestamps: true
    }

);

module.exports = model("serial", searialSchema)