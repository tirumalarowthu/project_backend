const jwt =require("jsonwebtoken")
const generateToken=(id)=>{
    return jwt.sign({id},"veera",{expiresIn:"30d"})
}
module.exports=generateToken;