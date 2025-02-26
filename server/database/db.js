const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("database connected successfully");
    } catch (error) {
        console.log("database is not connected",error);
    }
}

module.exports = connectDb;