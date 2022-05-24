const mongoose = require("mongoose")

const contactModel = mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        subject: {type: String, required: true},
        message: {type: String, required: true},
        status: {
            type:String, 
            enum: [
                "new",
                "pending",
                "done"
            ],
            default: "new"
        }
    },
    {
        timestapms: true
    }
)

module.exports = mongoose.model("contact", contactModel)