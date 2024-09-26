const mongoose = require('mongoose');
require('dotenv').config();

// Replace this with your MongoDB Atlas connection string
// const uri = process.env.DBURI;

const uri = "mongodb+srv://abhinavtyagi0502:abhinav@cluster0.5ma9e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connectToMongoDB() {
    try {
        // Connect to MongoDB
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        console.log("CONNECTED");

        // Fetch  data from the collection
        const user = await mongoose.connection.db.collection("users").find({}).toArray();
        

        global.food_items = user;
        // console.log(user);

    } catch (error) {
        console.error("Error connecting to MongoDB Atlas", error);
    }
}

module.exports = connectToMongoDB;