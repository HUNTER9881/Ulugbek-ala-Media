const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')
const UserModel = mongoose.Schema({
    name: {
        type: String,  required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,  required: true
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
   
    role: {
        type: String,
        enum: [
            "admin",
            "user"
        ]
    },
    deadline: {
        type: String
    },
}, {
    timestamps: true
})

UserModel.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
});
;

module.exports = mongoose.model("user", UserModel)