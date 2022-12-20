const mongoose = require('mongoose');
const pass = process.env.DBPASS;
const mongoUri = "mongodb://127.0.0.1:27017/library?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0";
const mongoUri2 = `mongodb+srv://msingh111:${pass}@cluster0.myt71op.mongodb.net/?retryWrites=true&w=majority`;
const connectToMongo = () => {
    mongoose.connect(mongoUri, (err) => {
        if(err){
            console.log("Error in connection to mongo DB");
            return;
        }
        console.log("successfully connected to mongo db");
    });
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:") );
}
module.exports = connectToMongo;


