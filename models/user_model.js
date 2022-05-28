const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')
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
    role: {
        type: String,
        enum: [
            "admin",
            "moderator",
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
 

// // comparing password
// UserModel.methods.matchPassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
// };
module.exports = mongoose.model("user", UserModel)