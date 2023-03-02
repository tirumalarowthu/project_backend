const express= require('express')
const { authUser, registerUser } = require('../controllers/userControlls')
const userRoutes=express.Router()
userRoutes.route("/").post(registerUser)
userRoutes.post("/login",authUser)
module.exports=userRoutes