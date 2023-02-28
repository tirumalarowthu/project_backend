const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const cors=require("cors")

const chats = require("./data")
app.use(cors())
app.get("/", (req, res) => {
    res.send("This is backend related to the chat application")
})
app.get("/api/chat", (req, res) => {
    res.send(chats)
})
app.get("/api/chat/:id", (req, res) => {
    const singlechat = chats.find(item => item._id === req.params.id)
    res.send(singlechat)
})






app.listen(process.env.PORT, () => {
    console.log(`app listening at port ${process.env.PORT}`)
})  