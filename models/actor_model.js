const mongoose = require("mongoose")

const actorModel = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("actor", actorModel)