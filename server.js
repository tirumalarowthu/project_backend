const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const cors=require("cors")
const connectDb=require("./config/db")
const colors=require("colors")
connectDb()
const chats = require("./data")
const userRoutes = require("./Routes/userRoutes")
const { notFound, errorHandler } = require("./middleware/errorMiddleware")
const chatRoutes = require("./Routes/chatRoutes")
app.use(cors())
app.use(express.json()) //plays a vital role to which accept json data
app.get("/", (req, res) => {
    res.send("This is backend related to the chat application")
})
app.use("/api/user",userRoutes)  //for using user model 
// app.get("/api/chat", (req, res) => {
//     res.send(chats)
// })
//These Two are used for only handle errors first one for err indication &second one is for display that error message
app.use("/api/chat", chatRoutes)


app.get("/api/chat/:id", (req, res) => {
    const singlechat = chats.find(item => item._id === req.params.id)
    res.send(singlechat)
})
app.use(notFound)
app.use(errorHandler)
app.listen(process.env.PORT, () => {
    console.log(`app listening at port ${process.env.PORT}`.yellow)
})  