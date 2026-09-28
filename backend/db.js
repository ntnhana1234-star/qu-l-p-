const mongoose = require("mongoose");

let cachedConnection = null;

async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      "Chưa cấu hình MONGODB_URI. Hãy tạo file .env hoặc thêm MONGODB_URI trên Vercel."
    );
  }

  if (cachedConnection) return cachedConnection;

  cachedConnection = await mongoose.connect(uri);
  console.log("MongoDB connected");
  return cachedConnection;
}

module.exports = connectDB;