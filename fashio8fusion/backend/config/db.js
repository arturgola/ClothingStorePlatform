const mongoose = require('mongoose');
const config = require('../utils/config');

const connectDB = async () => {
  const conn = await mongoose.connect(config.MONGO_URI);
  console.log(`Connected to the database`);
};

module.exports = connectDB;
