const express = require("express");
const mongoose = require("mongoose");
const { Student, Event, Payment } = require("../models");

const router = express.Router();

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

function normalizeDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

// GET /api/events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find({}).sort({ createdAt: -1 }).lean();
    const studentsCount = await Student.countDocuments();

    const result = [];

    for (const event of events) {
      const paidCount = await Payment.countDocuments({
        eventId: event._id,
        isPaid: true,
      });

      let status = "pending";

      if (studentsCount > 0 && paidCount >= studentsCount) {
        status = "completed";
      }

      if (
        event.dueDate &&
        new Date(event.dueDate) < new Date() &&
        paidCount < studentsCount
      ) {
        status = "overdue";
      }

      result.push({
        ...event,
        studentCount: studentsCount,
        paidCount,
        unpaidCount: Math.max(studentsCount - paidCount, 0),
        status,
      });
    }

    res.json(result);
  } catch (error) {
    console.error("GET /api/events:", error);
    res.status(500).json({
      message: "Không thể lấy danh sách khoản thu.",
      error: error.message,
    });
  }
});

// POST /api/events
router.post("/", async (req, res) => {
  try {
    const name = String(req.body.name || "").trim();
    const startDate = normalizeDate(req.body.startDate);
    const dueDate = normalizeDate(req.body.dueDate);
    const amount = Number(req.body.amount);

    if (!name) {
      return res
        .status(400)
        .json({ message: "Tên khoản thu không được để trống." });
    }
    if (!startDate) {
      return res.status(400).json({ message: "Ngày bắt đầu không hợp lệ." });
    }
    if (!dueDate) {
      return res.status(400).json({ message: "Hạn đóng không hợp lệ." });
    }
    if (dueDate < startDate) {
      return res
        .status(400)
        .json({ message: "Hạn đóng phải sau ngày bắt đầu." });
    }
    if (!Number.isFinite(amount) || amount < 0) {
      return res.status(400).json({ message: "Số tiền không hợp lệ." });
    }

    const event = await Event.create({ name, startDate, dueDate, amount });
    res.status(201).json(event);
  } catch (error) {
    console.error("POST /api/events:", error);
    res.status(500).json({
      message: "Không thể tạo khoản thu.",
      error: error.message,
    });
  }
});

// GET /api/events/:id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "ID khoản thu không hợp lệ." });
    }

    const event = await Event.findById(id).lean();

    if (!event) {
      return res.status(404).json({ message: "Không tìm thấy khoản thu." });
    }

    const studentsCount = await Student.countDocuments();
    const paidCount = await Payment.countDocuments({
      eventId: id,
      isPaid: true,
    });

    res.json({
      ...event,
      studentCount: studentsCount,
      paidCount,
      unpaidCount: Math.max(studentsCount - paidCount, 0),
      status:
        studentsCount > 0 && paidCount >= studentsCount
          ? "completed"
          : "pending",
    });
  } catch (error) {
    console.error("GET /api/events/:id:", error);
    res.status(500).json({
      message: "Không thể lấy khoản thu.",
      error: error.message,
    });
  }
});

// DELETE /api/events/:id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "ID khoản thu không hợp lệ." });
    }

    const event = await Event.findByIdAndDelete(id);

    if (!event) {
      return res.status(404).json({ message: "Không tìm thấy khoản thu." });
    }

    await Payment.deleteMany({ eventId: id });

    res.json({ success: true, message: "Đã xóa khoản thu." });
  } catch (error) {
    console.error("DELETE /api/events/:id:", error);
    res.status(500).json({
      message: "Không thể xóa khoản thu.",
      error: error.message,
    });
  }
});

module.exports = router;