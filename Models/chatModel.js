//i need a chat model which is having following details
//is group chat 
//users
//latest messages
//

const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const cc = mongoose.createConnection(process.env.MONGO_URL)
const chatModel = new mongoose.Schema({
    chatName: {
        type: String,
        trim: true
    },
    isGroupChat: {
        type: Boolean,
        default: false
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "message"
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
},
    {
        timestamps: true
    }
)
const Chat= cc.model("",chatModel)
module.exports =Chat
