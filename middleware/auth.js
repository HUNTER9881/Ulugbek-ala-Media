// tokenni tekshirish
const jwt = require("jsonwebtoken");
const {
    token_key
} = require('../config/index')
const User = require('../models/user_model')
// 1.tokenni mavjudligini teshirish
exports.checkToken = async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
        return next(
            res.json({
                message: "Sizda ushbu malumotni olish uchun huquq mavjud emas - 1"
            })
        );
    } else {
        try {
            const decoded = jwt.verify(token, token_key)
            req.user = await User.findById(decoded.data.ID);
            next();
        } catch (err) {
            return next({
                message: "Sizda ushbu malumotni olish uchun huquq mavjud emas - 2"
            });
        }
    }
}

// 2.role boyicha tekshirish
exports.userRole = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.json({
                message: "Ushbu ROLE egasi malumot olish huquqiga ega emas"
            })
        }
        next();
    };
};
//3.status boyicha tekshirish
exports.userStatus = (...status) => {
    return (req, res, next) => {
        if (!status.includes(req.user.status)) {
            return res.json({
                message: "Ushbu STATUS egasi malumot olish huquqiga ega emas"
            })
        }
        next();
    };
};
// 4.balance  boyicha tekshirish
exports.userBalance = async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return next(
            res.json({
                message: "Sizda ushbu malumotni olish uchun huquq mavjud emas - 1"
            })
        );
    } else {
        try {
            const decoded = jwt.verify(token, token_key)
            await User.findById(decoded.data.ID).exec((error, data) => {
                if (error) {
                    res.json(error)
                } else {
                    console.log(req.user.balance)
                    if (req.user.balance > 30000 && req.user.balance < 70000) {
                        return next();
                    } else {
                        return res.json({
                            message: "Balasingizni to'ldiring - 1"
                        })
                    }
                }
            })
        } catch (err) {
            return res.json({
                message: "Token mavjud emas"
            })

        }
    }
}