const mongoose = require('mongoose') //require mongoose

const connectDB = async() => { //connecting to mongo using async
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI) //connecting to mongo 

        console.log(`MongoDB connected: ${conn.connection.host}`)
    }catch(err){
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB