const mongoose = require('mongoose');

const connectToMongoDB = (MONGODB_URI) => {
    mongoose.connect(MONGODB_URI).then((res) => {
        console.log("Connected to database...")
      })
      .catch((err) => {
        console.log(err.message)
      })
}

module.exports = { connectToMongoDB }