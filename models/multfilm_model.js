const {
    Schema,
    model
} = require("mongoose")


const multikModel = Schema({
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
    description: {
        type: String,
        required: true
    },
     // 1-element: trailer
    // 1-element: image
    trailer_image: [{
        type: String,
        required: true
    }],
    imbd: {
        type: String,
        required: true
    },
    

}, {
    timestamps: true
})

module.exports = model("multfilm", multikModel)