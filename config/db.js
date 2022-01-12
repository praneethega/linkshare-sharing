require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    //Database connection
    try{
        mongoose.connect(
            process.env.MONGO_CONNECTION_URL,
            { useNewUrlParser: true,useUnifiedTopology: true},
            () => console.log(' mongoose is connected'),
        );
    } catch(e) {
        console.log('could not connected!');
    }    
}

const dbConnection = mongoose.connection;
dbConnection.on("error",(err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log('Connected to DB!'));
module.exports = connectDB;

