const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res.send("This is backend related to the chat application")
})






app.listen(5050,()=>{
    console.log(`app listening at port 5000`)
})  