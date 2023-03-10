const asyncHandler = require("express-async-handler")
const generateToken = require("../config/generateToken")
const User = require("../Models/userModel")
const bcyrpt = require("bcryptjs")
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body
    if (!name && !email && !password) {
        res.status(400)
        throw new Error("Please Enter all the Feilds");
    }
    const UserExits = await User.findOne({
        email: email
    })
    if (UserExits) {
        res.status(400)
        throw new Error("User already exits")
    }
    const user = await User.create(req.body)
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            pic: user.pic,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error("Failed to create User")
    }
})
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({
        email: email
    })
    if (user && await user.matchPassword(password)) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(401)
        throw new Error("Invalid email or Password")
    }
})

//  this is for /api/user?search=veera search functionality
const allUsers = asyncHandler(async (req, res) => {
    const keyword = req.query.search
        ? {
            $or: [
                { name: { $regex: req.query.search, $options: "i" } },
                { email: { $regex: req.query.search, $options: "i" } },
            ],
        }
        : {};

    const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
    res.send(users);
})
module.exports = { registerUser, authUser, allUsers }

//facing problem regarding to the .find({ _id: { $ne: req.user._id } }) finding fails ****Have to do working fine what happend i to dont know  just copy code