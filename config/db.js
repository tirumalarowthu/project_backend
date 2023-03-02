const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const colors=require("colors")
const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)

        console.log(`Mongo Db connection:${mongoose.connection.host} & DB name:${mongoose.connection.name}`.yellow)
        // const db=mongoose.connection
        // db.on('error', console.error.bind(console, 'connection error:'));
        // db.once('open', function () {
        //     console.log('Connected to MongoDB Atlas database.');
        // });
    }
    catch (err) {
        console.log(err.message)
        process.exit()
    }
}
module.exports = connectDb