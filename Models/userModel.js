const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const bcrypt = require("bcryptjs")
// const cc = mongoose.createConnection(process.env.MONGO_URL)
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        default: "https://www.shareicon.net/data/2016/05/24/770139_man_512x512.png"
    }

},
    {
        timestamps: true
    }
);
userSchema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});
//to create a method in a schema***************
userSchema.methods.matchPassword=async function (enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}
const User =mongoose.model("User", userSchema)

module.exports = User
