const mongoose = require("mongoose");

const directorModel = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports  = mongoose.model("director", directorModel)