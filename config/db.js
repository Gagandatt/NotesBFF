const mongoose = require('mongoose');
const uri ='mongodb+srv://tuhiyarmeragagan:Gagandatt321@cluster0.hjp9loq.mongodb.net/shatru' ;
const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
module.exports = connectDB;
