require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const studentsRouter = require("./routes/students");
const eventsRouter = require("./routes/events");
const paymentRouter = require("./routes/payment");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Trang chủ
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend quản lý quỹ lớp đang hoạt động.",
    api: {
      students: "/api/students",
      events: "/api/events",
      balance: "/api/account/balance",
    },
  });
});

app.get("/api", (req, res) => {
  res.json({ success: true, message: "Class Fund API is running" });
});

// Kiểm tra kết nối database
app.get("/api/health", async (req, res) => {
  try {
    await connectDB();
    res.json({ success: true, database: "connected" });
  } catch (error) {
    console.error("Health check error:", error);
    res.status(500).json({
      success: false,
      database: "error",
      message: error.message,
    });
  }
});

// Mọi route /api còn lại đều đảm bảo đã kết nối database trước
app.use("/api", async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("DB error:", error);
    res.status(500).json({
      message: "Không kết nối được database.",
      error: error.message,
    });
  }
});

app.use("/api/students", studentsRouter);
app.use("/api/events", eventsRouter);
app.use("/api", paymentRouter);

// 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route không tồn tại.",
    path: req.originalUrl,
  });
});

// Bắt lỗi chung
app.use((error, req, res, next) => {
  console.error("SERVER ERROR:", error);
  res.status(500).json({
    success: false,
    message: "Server xảy ra lỗi.",
    error: error.message,
  });
});

module.exports = app;