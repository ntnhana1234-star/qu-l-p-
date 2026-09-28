const express = require("express");
const mongoose = require("mongoose");
const { Student, Payment } = require("../models");

const router = express.Router();

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// GET /api/students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find({})
      .sort({ rollNumber: 1, name: 1 })
      .lean();
    res.json(students);
  } catch (error) {
    console.error("GET /api/students:", error);
    res.status(500).json({
      message: "Không thể lấy danh sách học sinh.",
      error: error.message,
    });
  }
});

// POST /api/students
router.post("/", async (req, res) => {
  try {
    const name = String(req.body.name || "").trim();
    const rollNumber = String(req.body.rollNumber || "").trim();

    if (!name) {
      return res
        .status(400)
        .json({ message: "Tên học sinh không được để trống." });
    }

    const student = await Student.create({ name, rollNumber });
    res.status(201).json(student);
  } catch (error) {
    console.error("POST /api/students:", error);
    res.status(500).json({
      message: "Không thể thêm học sinh.",
      error: error.message,
    });
  }
});

// PUT /api/students/:id
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "ID học sinh không hợp lệ." });
    }

    const update = {};
    if (req.body.name !== undefined) {
      update.name = String(req.body.name).trim();
    }
    if (req.body.rollNumber !== undefined) {
      update.rollNumber = String(req.body.rollNumber).trim();
    }

    const student = await Student.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true,
    });

    if (!student) {
      return res.status(404).json({ message: "Không tìm thấy học sinh." });
    }

    res.json(student);
  } catch (error) {
    console.error("PUT /api/students/:id:", error);
    res.status(500).json({
      message: "Không thể cập nhật học sinh.",
      error: error.message,
    });
  }
});

// DELETE /api/students/:id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "ID học sinh không hợp lệ." });
    }

    const student = await Student.findByIdAndDelete(id);

    if (!student) {
      return res.status(404).json({ message: "Không tìm thấy học sinh." });
    }

    await Payment.deleteMany({ studentId: id });

    res.json({ success: true, message: "Đã xóa học sinh." });
  } catch (error) {
    console.error("DELETE /api/students/:id:", error);
    res.status(500).json({
      message: "Không thể xóa học sinh.",
      error: error.message,
    });
  }
});

module.exports = router;