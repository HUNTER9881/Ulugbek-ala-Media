const {
    Schema,
    model
} = require("mongoose")


const kinoModel = Schema({
    category_ID: [{
        type: Schema.ObjectId,
        ref: "category"
    }],
    director_ID: [{
        type: Schema.ObjectId,
        ref: "director"
    }],
    tag_ID: [{
        type: Schema.ObjectId,
        ref: "tag"
    }],
    quality_ID: [{
        type: Schema.ObjectId,
        ref: "quality"
    }],
    genre_ID: [{
        type: Schema.ObjectId,
        ref: "genre"
    }],
    year_ID: [{
        type: Schema.ObjectId,
        ref: "year"
    }],
    actor_ID: [{
        type: Schema.ObjectId,
        ref: "actor"
    }],
    country_ID: [{
        type: Schema.ObjectId,
        ref: "country"
    }],

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    like: {
        type: Number,
        default: 0
    },
    dislike: {
        type: Number,
        default: 0
    },
    // 1-element: kino
    // 2-element va undan uyogi: images
    kino_images: [{
        type: String,
        required: true
    }],
    imbd: {
        type: String,
        required: true
    },
    view: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})


module.exports = model("kino", kinoModel)