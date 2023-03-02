const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cc = mongoose.createConnection(process.env.MONGO_URL)
const messageModel = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    content: {
        type: String,
        trim: true,
    },
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},
    {
        timestamps: true
    }
)
const Message = cc.model("Message", messageModel)
moduele.export = Message