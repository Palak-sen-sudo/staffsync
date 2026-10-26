const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/staffsync_hrm', {
      serverSelectionTimeoutMS: 2000,
    });
    console.log(`[MongoDB] Connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`[MongoDB] Warning: Database connection failed (${error.message}). Continuing in resilient mode without active database.`);
  }
};

module.exports = connectDB;
