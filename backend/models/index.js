const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    rollNumber: { type: String, default: "", trim: true },
  },
  { timestamps: true }
);

const eventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    startDate: { type: Date, required: true },
    dueDate: { type: Date, required: true },
    amount: { type: Number, required: true, min: 0 },
  },
  { timestamps: true }
);

const paymentSchema = new mongoose.Schema(
  {
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
      index: true,
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
      index: true,
    },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date, default: null },
    amount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Mỗi học sinh chỉ có 1 bản ghi cho mỗi sự kiện
paymentSchema.index({ eventId: 1, studentId: 1 }, { unique: true });

const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);
const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);
const Payment =
  mongoose.models.Payment || mongoose.model("Payment", paymentSchema);

module.exports = { Student, Event, Payment };