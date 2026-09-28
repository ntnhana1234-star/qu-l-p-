const express = require("express");
const mongoose = require("mongoose");
const { Student, Event, Payment } = require("../models");

const router = express.Router();

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

async function setPayment(eventId, studentId, isPaid) {
  const event = await Event.findById(eventId);
  if (!event) return { error: 404, message: "Không tìm thấy khoản thu." };

  const student = await Student.findById(studentId);
  if (!student) return { error: 404, message: "Không tìm thấy học sinh." };

  const payment = await Payment.findOneAndUpdate(
    { eventId, studentId },
    {
      eventId,
      studentId,
      isPaid,
      paidAt: isPaid ? new Date() : null,
      amount: event.amount,
    },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );

  return { payment };
}

// GET /api/events/:id/payments
router.get("/events/:id/payments", async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "ID khoản thu không hợp lệ." });
    }

    const event = await Event.findById(id).lean();

    if (!event) {
      return res.status(404).json({ message: "Không tìm thấy khoản thu." });
    }

    const students = await Student.find({})
      .sort({ rollNumber: 1, name: 1 })
      .lean();

    const payments = await Payment.find({ eventId: id }).lean();

    const paymentMap = new Map();
    for (const payment of payments) {
      paymentMap.set(String(payment.studentId), payment);
    }

    const result = students.map((student) => {
      const payment = paymentMap.get(String(student._id));

      return {
        _id: payment?._id || null,
        eventId: event._id,
        studentId: student._id,
        studentName: student.name,
        rollNumber: student.rollNumber || "",
        isPaid: payment?.isPaid === true,
        paidAt: payment?.paidAt || null,
        amount: event.amount,
      };
    });

    res.json(result);
  } catch (error) {
    console.error("GET /api/events/:id/payments:", error);
    res.status(500).json({
      message: "Không thể lấy danh sách đóng tiền.",
      error: error.message,
    });
  }
});

// POST /api/events/:id/payments   body: { studentId, isPaid }
router.post("/events/:id/payments", async (req, res) => {
  try {
    const { id } = req.params;
    const { studentId } = req.body;
    const isPaid = req.body.isPaid === true || req.body.isPaid === "true";

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "ID khoản thu không hợp lệ." });
    }
    if (!isValidObjectId(studentId)) {
      return res.status(400).json({ message: "ID học sinh không hợp lệ." });
    }

    const result = await setPayment(id, studentId, isPaid);

    if (result.error) {
      return res.status(result.error).json({ message: result.message });
    }

    res.json({ success: true, payment: result.payment });
  } catch (error) {
    console.error("POST /api/events/:id/payments:", error);
    res.status(500).json({
      message: "Không thể cập nhật trạng thái đóng tiền.",
      error: error.message,
    });
  }
});

// POST /api/events/toggle-payment   (giữ lại cho app bản cũ)
router.post("/events/toggle-payment", async (req, res) => {
  try {
    const { eventId, studentId } = req.body;
    const isPaid = req.body.isPaid === true || req.body.isPaid === "true";

    if (!eventId || !studentId) {
      return res
        .status(400)
        .json({ message: "Thiếu eventId hoặc studentId." });
    }
    if (!isValidObjectId(eventId) || !isValidObjectId(studentId)) {
      return res.status(400).json({ message: "ID không hợp lệ." });
    }

    const result = await setPayment(eventId, studentId, isPaid);

    if (result.error) {
      return res.status(result.error).json({ message: result.message });
    }

    res.json({ success: true, payment: result.payment });
  } catch (error) {
    console.error("POST /api/events/toggle-payment:", error);
    res.status(500).json({
      message: "Không thể cập nhật trạng thái thanh toán.",
      error: error.message,
    });
  }
});

// GET /api/account/balance
router.get("/account/balance", async (req, res) => {
  try {
    const result = await Payment.aggregate([
      { $match: { isPaid: true } },
      { $group: { _id: null, balance: { $sum: "$amount" } } },
    ]);

    res.json({
      balance: result.length > 0 ? Number(result[0].balance || 0) : 0,
    });
  } catch (error) {
    console.error("GET /api/account/balance:", error);
    res.status(500).json({
      message: "Không thể lấy số dư.",
      error: error.message,
    });
  }
});

// GET /api/stats
router.get("/stats", async (req, res) => {
  try {
    const studentCount = await Student.countDocuments();
    const eventCount = await Event.countDocuments();

    const paidResult = await Payment.aggregate([
      { $match: { isPaid: true } },
      { $group: { _id: null, total: { $sum: "$amount" }, count: { $sum: 1 } } },
    ]);

    res.json({
      studentCount,
      eventCount,
      paymentCount: paidResult.length > 0 ? Number(paidResult[0].count || 0) : 0,
      totalPaid: paidResult.length > 0 ? Number(paidResult[0].total || 0) : 0,
    });
  } catch (error) {
    console.error("GET /api/stats:", error);
    res.status(500).json({
      message: "Không thể lấy thống kê.",
      error: error.message,
    });
  }
});

module.exports = router;