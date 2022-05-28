const mongoose = require("mongoose")

const categoryModel = mongoose.Schema(
    {
        name: { type: String, required: true },
        surname: { type: String, required: true }
    },
    {
        timestamps: true
    }
)


module.exports = mongoose.model("category", categoryModel)