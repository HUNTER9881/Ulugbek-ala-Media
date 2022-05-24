const mongoose = require("mongoose")
const UserModel = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true, 
        required: true
    },
    balance: {
        type: Number,
        default: 0
    },
    uuid: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["vip", "none"],
        default: "none"
    },
    password: {
        type: String,
    },
    
    deadline: {
        type: String
    }, 
}, {
    timestamps: true
})
module.exports = mongoose.model("user", UserModel)