const mongoose = require('mongoose');
const uri = "mongodb+srv://amansamaiya90:anushka@cluster0.vohgonv.mongodb.net/authdatabase?retryWrites=true&w=majority&appName=Cluster0";

async function run() {

    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error("Connection error:", err.message);
    }
}

run();
