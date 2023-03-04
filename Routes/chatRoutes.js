const express=require('express')
const { accessChat, fetchChat, createGroupChat, renameGroup, removeFromGroup, addToGroup } = require('../controllers/chatControlls')
const { protect } = require('../middleware/authMiddleware')
const chatRoutes=express.Router()

chatRoutes.route("/").post(protect, accessChat)
chatRoutes.route("/").get(protect, fetchChat)
chatRoutes.route("/group").post(protect, createGroupChat)
chatRoutes.route("/rename").put(protect, renameGroup)
chatRoutes.route("/groupadd").put(protect, addToGroup)
chatRoutes.route("/groupremove").put(protect, removeFromGroup)
module.exports=chatRoutes 