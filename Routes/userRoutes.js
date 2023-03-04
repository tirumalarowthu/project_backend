const express = require('express')
const { authUser, registerUser, allUsers } = require('../controllers/userControlls')
const { protect } = require('../middleware/authMiddleware')
const userRoutes = express.Router()
userRoutes.route("/").post(registerUser).get(protect,allUsers)
userRoutes.post("/login", authUser)
module.exports = userRoutes