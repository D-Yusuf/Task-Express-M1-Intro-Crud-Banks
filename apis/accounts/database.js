const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Successfully connected with database")
    } catch (err) {
        console.log("Error connecting with database", err)
    }

}

module.exports = connectDB