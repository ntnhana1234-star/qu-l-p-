require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

/* =========================================================
   CONFIG
========================================================= */

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

/* =========================================================
   DATABASE
========================================================= */

const MONGODB_URI = process.env.MONGODB_URI;

let cachedConnection = null;

async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error(
      "Chưa cấu hình MONGODB_URI. Hãy tạo file .env hoặc thêm MONGODB_URI trên Vercel."
    );
  }

  if (cachedConnection) {
    return cachedConnection;
  }

  cachedConnection = await mongoose.connect(MONGODB_URI);

  console.log("MongoDB connected");

  return cachedConnection;
}

/* =========================================================
   MODELS
========================================================= */

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    rollNumber: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    startDate: {
      type: Date,
      required: true,
    },

    dueDate: {
      type: Date,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
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

    isPaid: {
      type: Boolean,
      default: false,
    },

    paidAt: {
      type: Date,
      default: null,
    },

    amount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

paymentSchema.index(
  {
    eventId: 1,
    studentId: 1,
  },
  {
    unique: true,
  }
);

const Student =
  mongoose.models.Student ||
  mongoose.model("Student", studentSchema);

const Event =
  mongoose.models.Event ||
  mongoose.model("Event", eventSchema);

const Payment =
  mongoose.models.Payment ||
  mongoose.model("Payment", paymentSchema);

/* =========================================================
   HELPERS
========================================================= */

function isValidObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

function normalizeDate(value) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date;
}

/* =========================================================
   HOME
========================================================= */

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend quản lý quỹ lớp đang hoạt động.",
    api: {
      students: "/api/students",
      events: "/api/events",
    },
  });
});

/* =========================================================
   API HOME
========================================================= */

app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "Class Fund API is running",
  });
});

/* =========================================================
   HEALTH CHECK
========================================================= */

app.get("/api/health", async (req, res) => {
  try {
    await connectDB();

    res.json({
      success: true,
      database: "connected",
    });
  } catch (error) {
    console.error("Health check error:", error);

    res.status(500).json({
      success: false,
      database: "error",
      message: error.message,
    });
  }
});

/* =========================================================
   STUDENTS
========================================================= */

/*
GET /api/students
*/

app.get("/api/students", async (req, res) => {
  try {
    await connectDB();

    const students = await Student.find({})
      .sort({
        rollNumber: 1,
        name: 1,
      })
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

/*
POST /api/students

Body:
{
  "name": "Nguyễn Văn A",
  "rollNumber": "01"
}
*/

app.post("/api/students", async (req, res) => {
  try {
    await connectDB();

    const name = String(req.body.name || "").trim();
    const rollNumber = String(
      req.body.rollNumber || ""
    ).trim();

    if (!name) {
      return res.status(400).json({
        message: "Tên học sinh không được để trống.",
      });
    }

    const student = await Student.create({
      name,
      rollNumber,
    });

    res.status(201).json(student);
  } catch (error) {
    console.error("POST /api/students:", error);

    res.status(500).json({
      message: "Không thể thêm học sinh.",
      error: error.message,
    });
  }
});

/*
PUT /api/students/:id
*/

app.put("/api/students/:id", async (req, res) => {
  try {
    await connectDB();

    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        message: "ID học sinh không hợp lệ.",
      });
    }

    const update = {};

    if (req.body.name !== undefined) {
      update.name = String(req.body.name).trim();
    }

    if (req.body.rollNumber !== undefined) {
      update.rollNumber = String(
        req.body.rollNumber
      ).trim();
    }

    const student = await Student.findByIdAndUpdate(
      id,
      update,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!student) {
      return res.status(404).json({
        message: "Không tìm thấy học sinh.",
      });
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

/*
DELETE /api/students/:id
*/

app.delete("/api/students/:id", async (req, res) => {
  try {
    await connectDB();

    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        message: "ID học sinh không hợp lệ.",
      });
    }

    const student = await Student.findByIdAndDelete(id);

    if (!student) {
      return res.status(404).json({
        message: "Không tìm thấy học sinh.",
      });
    }

    await Payment.deleteMany({
      studentId: id,
    });

    res.json({
      success: true,
      message: "Đã xóa học sinh.",
    });
  } catch (error) {
    console.error("DELETE /api/students/:id:", error);

    res.status(500).json({
      message: "Không thể xóa học sinh.",
      error: error.message,
    });
  }
});

/* =========================================================
   EVENTS
========================================================= */

/*
GET /api/events
*/

app.get("/api/events", async (req, res) => {
  try {
    await connectDB();

    const events = await Event.find({})
      .sort({
        createdAt: -1,
      })
      .lean();

    const studentsCount =
      await Student.countDocuments();

    const result = [];

    for (const event of events) {
      const paidCount =
        await Payment.countDocuments({
          eventId: event._id,
          isPaid: true,
        });

      const unpaidCount = Math.max(
        studentsCount - paidCount,
        0
      );

      let status = "pending";

      if (
        studentsCount > 0 &&
        paidCount >= studentsCount
      ) {
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
        unpaidCount,
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

/*
POST /api/events

Body:
{
  "name": "Quỹ lớp tháng 10",
  "startDate": "2026-10-01",
  "dueDate": "2026-10-10",
  "amount": 50000
}
*/

app.post("/api/events", async (req, res) => {
  try {
    await connectDB();

    const name = String(req.body.name || "").trim();

    const startDate = normalizeDate(
      req.body.startDate
    );

    const dueDate = normalizeDate(
      req.body.dueDate
    );

    const amount = Number(req.body.amount);

    if (!name) {
      return res.status(400).json({
        message: "Tên khoản thu không được để trống.",
      });
    }

    if (!startDate) {
      return res.status(400).json({
        message: "Ngày bắt đầu không hợp lệ.",
      });
    }

    if (!dueDate) {
      return res.status(400).json({
        message: "Hạn đóng không hợp lệ.",
      });
    }

    if (dueDate < startDate) {
      return res.status(400).json({
        message:
          "Hạn đóng phải sau ngày bắt đầu.",
      });
    }

    if (!Number.isFinite(amount) || amount < 0) {
      return res.status(400).json({
        message: "Số tiền không hợp lệ.",
      });
    }

    const event = await Event.create({
      name,
      startDate,
      dueDate,
      amount,
    });

    res.status(201).json(event);
  } catch (error) {
    console.error("POST /api/events:", error);

    res.status(500).json({
      message: "Không thể tạo khoản thu.",
      error: error.message,
    });
  }
});

/*
GET /api/events/:id
*/

app.get("/api/events/:id", async (req, res) => {
  try {
    await connectDB();

    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        message: "ID khoản thu không hợp lệ.",
      });
    }

    const event = await Event.findById(id).lean();

    if (!event) {
      return res.status(404).json({
        message: "Không tìm thấy khoản thu.",
      });
    }

    const studentsCount =
      await Student.countDocuments();

    const paidCount =
      await Payment.countDocuments({
        eventId: id,
        isPaid: true,
      });

    res.json({
      ...event,
      studentCount: studentsCount,
      paidCount,
      unpaidCount: Math.max(
        studentsCount - paidCount,
        0
      ),
      status:
        studentsCount > 0 &&
        paidCount >= studentsCount
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

/*
DELETE /api/events/:id
*/

app.delete("/api/events/:id", async (req, res) => {
  try {
    await connectDB();

    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        message: "ID khoản thu không hợp lệ.",
      });
    }

    const event = await Event.findByIdAndDelete(id);

    if (!event) {
      return res.status(404).json({
        message: "Không tìm thấy khoản thu.",
      });
    }

    await Payment.deleteMany({
      eventId: id,
    });

    res.json({
      success: true,
      message: "Đã xóa khoản thu.",
    });
  } catch (error) {
    console.error(
      "DELETE /api/events/:id:",
      error
    );

    res.status(500).json({
      message: "Không thể xóa khoản thu.",
      error: error.message,
    });
  }
});

/* =========================================================
   PAYMENTS
========================================================= */

/*
GET /api/events/:id/payments
*/

app.get(
  "/api/events/:id/payments",
  async (req, res) => {
    try {
      await connectDB();

      const { id } = req.params;

      if (!isValidObjectId(id)) {
        return res.status(400).json({
          message: "ID khoản thu không hợp lệ.",
        });
      }

      const event = await Event.findById(id).lean();

      if (!event) {
        return res.status(404).json({
          message: "Không tìm thấy khoản thu.",
        });
      }

      const students = await Student.find({})
        .sort({
          rollNumber: 1,
          name: 1,
        })
        .lean();

      const payments = await Payment.find({
        eventId: id,
      }).lean();

      const paymentMap = new Map();

      for (const payment of payments) {
        paymentMap.set(
          String(payment.studentId),
          payment
        );
      }

      const result = students.map((student) => {
        const payment = paymentMap.get(
          String(student._id)
        );

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
      console.error(
        "GET /api/events/:id/payments:",
        error
      );

      res.status(500).json({
        message:
          "Không thể lấy danh sách đóng tiền.",
        error: error.message,
      });
    }
  }
);

/*
POST /api/events/:id/payments

Body:
{
  "studentId": "...",
  "isPaid": true
}
*/

app.post(
  "/api/events/:id/payments",
  async (req, res) => {
    try {
      await connectDB();

      const { id } = req.params;

      const studentId = req.body.studentId;

      const isPaid =
        req.body.isPaid === true ||
        req.body.isPaid === "true";

      if (!isValidObjectId(id)) {
        return res.status(400).json({
          message: "ID khoản thu không hợp lệ.",
        });
      }

      if (!isValidObjectId(studentId)) {
        return res.status(400).json({
          message: "ID học sinh không hợp lệ.",
        });
      }

      const event = await Event.findById(id);

      if (!event) {
        return res.status(404).json({
          message: "Không tìm thấy khoản thu.",
        });
      }

      const student = await Student.findById(
        studentId
      );

      if (!student) {
        return res.status(404).json({
          message: "Không tìm thấy học sinh.",
        });
      }

      const payment =
        await Payment.findOneAndUpdate(
          {
            eventId: id,
            studentId,
          },
          {
            eventId: id,
            studentId,
            isPaid,
            paidAt: isPaid ? new Date() : null,
            amount: event.amount,
          },
          {
            new: true,
            upsert: true,
            setDefaultsOnInsert: true,
          }
        );

      res.json({
        success: true,
        payment,
      });
    } catch (error) {
      console.error(
        "POST /api/events/:id/payments:",
        error
      );

      res.status(500).json({
        message:
          "Không thể cập nhật trạng thái đóng tiền.",
        error: error.message,
      });
    }
  }
);

/* =========================================================
   OLD APP COMPATIBILITY
========================================================= */

app.post(
  "/api/events/toggle-payment",
  async (req, res) => {
    try {
      await connectDB();

      const {
        eventId,
        studentId,
        isPaid,
      } = req.body;

      if (!eventId || !studentId) {
        return res.status(400).json({
          message:
            "Thiếu eventId hoặc studentId.",
        });
      }

      if (
        !isValidObjectId(eventId) ||
        !isValidObjectId(studentId)
      ) {
        return res.status(400).json({
          message: "ID không hợp lệ.",
        });
      }

      const event = await Event.findById(eventId);

      if (!event) {
        return res.status(404).json({
          message: "Không tìm thấy khoản thu.",
        });
      }

      const student =
        await Student.findById(studentId);

      if (!student) {
        return res.status(404).json({
          message: "Không tìm thấy học sinh.",
        });
      }

      const paid =
        isPaid === true ||
        isPaid === "true";

      const payment =
        await Payment.findOneAndUpdate(
          {
            eventId,
            studentId,
          },
          {
            eventId,
            studentId,
            isPaid: paid,
            paidAt: paid ? new Date() : null,
            amount: event.amount,
          },
          {
            new: true,
            upsert: true,
            setDefaultsOnInsert: true,
          }
        );

      res.json({
        success: true,
        payment,
      });
    } catch (error) {
      console.error(
        "POST /api/events/toggle-payment:",
        error
      );

      res.status(500).json({
        message:
          "Không thể cập nhật trạng thái thanh toán.",
        error: error.message,
      });
    }
  }
);

/* =========================================================
   STATS
========================================================= */

app.get("/api/stats", async (req, res) => {
  try {
    await connectDB();

    const studentCount =
      await Student.countDocuments();

    const eventCount =
      await Event.countDocuments();

    const paidResult =
      await Payment.aggregate([
        {
          $match: {
            isPaid: true,
          },
        },
        {
          $group: {
            _id: null,
            total: {
              $sum: "$amount",
            },
            count: {
              $sum: 1,
            },
          },
        },
      ]);

    const totalPaid =
      paidResult.length > 0
        ? Number(paidResult[0].total || 0)
        : 0;

    const paymentCount =
      paidResult.length > 0
        ? Number(paidResult[0].count || 0)
        : 0;

    res.json({
      studentCount,
      eventCount,
      paymentCount,
      totalPaid,
    });
  } catch (error) {
    console.error("GET /api/stats:", error);

    res.status(500).json({
      message: "Không thể lấy thống kê.",
      error: error.message,
    });
  }
});

/* =========================================================
   404
========================================================= */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route không tồn tại.",
    path: req.originalUrl,
  });
});

/* =========================================================
   ERROR HANDLER
========================================================= */

app.use((error, req, res, next) => {
  console.error("SERVER ERROR:", error);

  res.status(500).json({
    success: false,
    message: "Server xảy ra lỗi.",
    error: error.message,
  });
});

/* =========================================================
   EXPORT
========================================================= */

module.exports = app;