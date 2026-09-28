const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// 1. Route kiểm tra trang chủ (để tránh lỗi 404 khi vào link Vercel)
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Backend Quỹ Lớp đang hoạt động tốt!",
    status: "success",
  });
});

// 2. Định tuyến các API
// app.use("/api/students", studentRoutes);
// app.use("/api/events", eventRoutes);
// app.use("/api/sepay", sepayRoutes);

// Xử lý Route không tồn tại
app.use((req, res) => {
  res.status(404).json({ message: "Endpoint không tồn tại" });
});

// Chạy server khi ở môi trường Localhost (không ảnh hưởng Vercel)
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
  });
}

// Bắt buộc phải xuất module để Vercel Serverless nhận diện
module.exports = app;
