const mongoose = require ('mongoose')

const mongoURI = "mongodb://127.0.0.1:27017/project"

const connectToMongo=async()=>{
    await mongoose.connect(mongoURI)
    console.log("Connected to mongoDB")
}

module.exports = connectToMongo