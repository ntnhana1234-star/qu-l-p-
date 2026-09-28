const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

const sidebar = $("#sidebar");
const mobileMenu = $("#mobileMenu");
const themeToggle = $("#themeToggle");
const content = $("#content");
const pageHeading = $("#pageHeading");
const pageDate = $("#pageDate");
const modalRoot = $("#modalRoot");
const notificationButton = $("#notificationButton");
const notificationPanel = $("#notificationPanel");

/* =========================================================
   STUDENTS
   - Danh sách dự phòng.
   - Khi backend hoạt động, dữ liệu backend sẽ được dùng làm
     nguồn chính.
========================================================= */

let students = [
  { id: 1, code: "B2608082", name: "TRẦN HOÀI AN" },
  { id: 2, code: "B2608083", name: "ĐINH NHẬT ANH" },
  { id: 3, code: "B2608084", name: "LÊ ĐỨC ANH" },
  { id: 4, code: "B2608085", name: "PHẠM THỊ HUỲNH ANH" },
  { id: 5, code: "B2608086", name: "LÊ MINH ÂU" },
  { id: 6, code: "B2608087", name: "DƯƠNG GIA BẢO" },
  { id: 7, code: "B2608088", name: "LÊ HOÀNG QUỐC BẢO" },
  { id: 8, code: "B2608089", name: "PHẠM GIA BẢO" },
  { id: 9, code: "B2608090", name: "NGUYỄN NHỰT BĂNG" },
  { id: 10, code: "B2608091", name: "MAI CHÍ BẰNG" },
  { id: 11, code: "B2608092", name: "NGUYỄN THẾ DĨ" },
  { id: 12, code: "B2608094", name: "ĐỖ MINH ĐẠT" },
  { id: 13, code: "B2608095", name: "LƯU THANH ĐẠT" },
  { id: 14, code: "B2608096", name: "PHẠM GIA ĐẠT" },
  { id: 15, code: "B2608097", name: "LÊ HOÀNG GIA" },
  { id: 16, code: "B2608098", name: "PHẠM VĂN GIỎI" },
  { id: 17, code: "B2608100", name: "PHAN CHÍ HẢI" },
  { id: 18, code: "B2608101", name: "NGÔ TRUNG HẬU" },
  { id: 19, code: "B2608103", name: "LÊ MINH HIỂN" },
  { id: 20, code: "B2608104", name: "NGUYỄN MINH HIỂN" },
  { id: 21, code: "B2608105", name: "NGUYỄN PHƯỚC HIỆP" },
  { id: 22, code: "B2608102", name: "NGUYỄN HOÀNG TRUNG HIẾU" },
  { id: 23, code: "B2608106", name: "LÊ THỊ XUÂN HOA" },
  { id: 24, code: "B2608107", name: "NGUYỄN QUỐC HUY" },
  { id: 25, code: "B2608108", name: "ĐINH QUANG HƯỞNG" },
  { id: 26, code: "B2608109", name: "TRỊNH TẤN HỮU" },
  { id: 27, code: "B2608110", name: "NGUYỄN VŨ KHA" },
  { id: 28, code: "B2608111", name: "THÁI NGỌC MINH KHA" },
  { id: 29, code: "B2608112", name: "NGUYỄN MINH KHANG" },
  { id: 30, code: "B2608113", name: "NGUYỄN TUẤN KHANG" },
  { id: 31, code: "B2608114", name: "PHAN HỮU GIA KHÁNH" },
  { id: 32, code: "B2608115", name: "NGUYỄN TRỌNG KHÔI" },
  { id: 33, code: "B2608116", name: "TRẦN QUỐC KIỆT" },
  { id: 34, code: "B2608117", name: "TRƯƠNG TRUNG TUẤN KIỆT" },
  { id: 35, code: "B2608118", name: "LÊ NHẬT LÂM" },
  { id: 36, code: "B2608119", name: "PHẠM DƯƠNG BÍCH LOAN" },
  { id: 37, code: "B2608120", name: "NGÔ THIỆN LỘC" },
  { id: 38, code: "B2608121", name: "NGUYỄN TẤN LỘC" },
  { id: 39, code: "B2608122", name: "THÁI PHƯỚC LỘC" },
  { id: 40, code: "B2608123", name: "NGUYỄN THÀNH LỢI" },
  { id: 41, code: "B2608124", name: "NGUYỄN MINH LƯƠNG" },
  { id: 42, code: "B2608125", name: "PHAN HOÀNG ĐỨC MINH" },
  { id: 43, code: "B2608126", name: "THÁI NGÂN" },
  { id: 44, code: "B2608129", name: "TÔ VĂN HỮU NGHỊ" },
  { id: 45, code: "B2608128", name: "NGUYỄN TRỌNG NGHĨA" },
  { id: 46, code: "B2608127", name: "VÕ THANH NGHIÊM" },
  { id: 47, code: "B2608130", name: "NGUYỄN THANH NHÀN" },
  { id: 48, code: "B2608131", name: "NGUYỄN HOÀNG NHÂN" },
  { id: 49, code: "B2608132", name: "DƯƠNG NGỌC NHI" },
  { id: 50, code: "B2608133", name: "HỒ TRẦN PHÁT" },
  { id: 51, code: "B2608134", name: "HỒ VỦ PHONG" },
  { id: 52, code: "B2608135", name: "HUỲNH HOÀNG PHONG" },
  { id: 53, code: "B2608136", name: "LÊ AN PHÚ" },
  { id: 54, code: "B2608137", name: "NGUYỄN GIA PHÚ" },
  { id: 55, code: "B2608138", name: "LÊ HOÀNG QUÂN" },
  { id: 56, code: "B2608139", name: "LÊ PHÚ QUÝ" },
  { id: 57, code: "B2608140", name: "PHẠM THÁI SƠN" },
  { id: 58, code: "B2608141", name: "NGUYỄN VĂN TÀI" },
  { id: 59, code: "B2608143", name: "LÂM MINH THÁI" },
  { id: 60, code: "B2608142", name: "LÊ CHÍ THANH" },
  { id: 61, code: "B2608144", name: "LỮ TUẤN THÀNH" },
  { id: 62, code: "B2608145", name: "PHAN VĂN ĐÔNG THÀNH" },
  { id: 63, code: "B2608146", name: "TRƯƠNG TUẤN THÀNH" },
  { id: 64, code: "B2608147", name: "ĐỖ TRUNG THẬT" },
  { id: 65, code: "B2608148", name: "LÊ ĐỨC THIỆN" },
  { id: 66, code: "B2608149", name: "LÊ MINH THIỆN" },
  { id: 67, code: "B2608150", name: "NGUYỄN CHÍ THIỆN" },
  { id: 68, code: "B2608151", name: "NGUYỄN HOÀNG THIỆN" },
  { id: 69, code: "B2608152", name: "NGUYỄN TRẦN THANH THIỆN" },
  { id: 70, code: "B2608153", name: "CAO NGUYỄN MINH THUẬN" },
  { id: 71, code: "B2608154", name: "LỮ MINH THỨC" },
  { id: 72, code: "B2608155", name: "TRẦN TRUNG TÍN" },
  { id: 73, code: "B2608156", name: "NGUYỄN CHÍ TÌNH" },
  { id: 74, code: "B2608157", name: "HỒ THANH TOÀN" },
  { id: 75, code: "B2608158", name: "LÊ THANH TRỌNG" },
  { id: 76, code: "B2608159", name: "NGUYỄN NGÔ QUANG TRUNG" },
  { id: 77, code: "B2608160", name: "NGUYỄN MINH TRỰC" },
  { id: 78, code: "B2608161", name: "NGUYỄN PHẠM DUY TUẤN" },
  { id: 79, code: "B2608162", name: "VÕ TRẦN ANH TUẤN" },
  { id: 80, code: "B2608163", name: "VÕ TRUNG VIỆT" },
  { id: 81, code: "B2608164", name: "LÊ QUANG VINH" },
  { id: 82, code: "B2608165", name: "NGUYỄN CHÍ VỈNH" },
  { id: 83, code: "B2608166", name: "LƯU CHÍ VỸ" }
];

/* =========================================================
   API CONFIG
========================================================= */

const DEFAULT_API_BASE =
  window.CLASS_FUND_API_URL ||
  localStorage.getItem("classFundApiUrl") ||
  "https://quylop.vercel.app";

const API_POLL_MS = 15000;

const state = {
  page: "Dashboard",
  currentEvent: null,
  currentStatus: "all",
  currentKeyword: "",
  memberView: "table",

  paymentData: {},
  events: {},

  apiBaseUrl: DEFAULT_API_BASE.replace(/\/$/, ""),
  apiConnected: false,
  lastSyncAt: null,

  compact: localStorage.getItem("compact") === "1",
  notifications: localStorage.getItem("notifications") !== "0",
  deviceMode: localStorage.getItem("deviceMode") || ""
};

/* =========================================================
   GENERAL HELPERS
========================================================= */

function money(value) {
  return new Intl.NumberFormat("vi-VN").format(Number(value || 0)) + "đ";
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function initials(name) {
  const w = String(name).trim().split(/\s+/);

  if (w.length === 1) {
    return w[0].slice(0, 2).toUpperCase();
  }

  return (w[0][0] + w[w.length - 1][0]).toUpperCase();
}

function statusLabel(s) {
  if (s === "paid") return "● Đã đóng";
  if (s === "pending") return "● Chờ đối soát";
  if (s === "unpaid") return "● Chưa đóng";
  return "— Chưa có dữ liệu";
}

function statusClass(s) {
  return ["paid", "pending", "unpaid"].includes(s) ? s : "unpaid";
}

function formatDate(value, fallback = "—") {
  if (!value) return fallback;

  const d = new Date(value);

  if (Number.isNaN(d.getTime())) {
    return String(value);
  }

  return d.toLocaleDateString("vi-VN");
}

function formatDateTime(value, fallback = "—") {
  if (!value) return fallback;

  const d = new Date(value);

  if (Number.isNaN(d.getTime())) {
    return String(value);
  }

  return d.toLocaleString("vi-VN", {
    dateStyle: "short",
    timeStyle: "short"
  });
}

function esc(v) {
  return String(v ?? "").replace(
    /[&<>"']/g,
    m => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[m])
  );
}

function getApiUrl(path = "") {
  const base = state.apiBaseUrl || "";

  return `${base}${path.startsWith("/") ? path : "/" + path}`;
}

function getEvent(name = state.currentEvent) {
  if (!name) {
    return {
      amount: 0,
      deadline: "—",
      total: students.length,
      status: "empty"
    };
  }

  return (
    state.events[name] || {
      amount: 0,
      deadline: "—",
      total: students.length,
      status: "empty"
    }
  );
}

/* =========================================================
   PAYMENT LOOKUP
   Quan trọng:
   - payment được tìm theo mã SV
   - payment data được map từ backendId
========================================================= */

function getPayment(code, eventName = state.currentEvent) {
  if (!eventName) {
    return {
      status: "unpaid",
      amount: 0,
      paidAt: "—",
      paidAtRaw: null,
      studentId: null
    };
  }

  return (
    state.paymentData?.[eventName]?.[code] || {
      status: "unpaid",
      amount: Number(getEvent(eventName).amount || 0),
      paidAt: "—",
      paidAtRaw: null,
      studentId: null
    }
  );
}

function getCounts(eventName = state.currentEvent) {
  const event = getEvent(eventName);

  if (!eventName || !state.events[eventName]) {
    return {
      paid: 0,
      unpaid: students.length,
      pending: 0
    };
  }

  const records = Object.values(
    state.paymentData?.[eventName] || {}
  );

  const paidCodes = new Set(
    records
      .filter(p => p?.status === "paid")
      .map(p => String(p.code || ""))
  );

  const pendingCodes = new Set(
    records
      .filter(p => p?.status === "pending")
      .map(p => String(p.code || ""))
  );

  const paid = students.filter(s =>
    paidCodes.has(String(s.code))
  ).length;

  const pending = students.filter(s =>
    pendingCodes.has(String(s.code))
  ).length;

  const total = Math.max(
    Number(event.total || students.length || 0),
    paid + pending
  );

  const unpaid = Math.max(total - paid - pending, 0);

  return {
    paid,
    unpaid,
    pending
  };
}

function eventProgress(eventName) {
  const e = getEvent(eventName);
  const c = getCounts(eventName);

  const total = Number(
    e.total || students.length || 0
  );

  const pct = total
    ? Math.min(
        100,
        Math.round((c.paid / total) * 10000) / 100
      )
    : 0;

  return {
    ...c,
    total,
    pct,
    completed: pct >= 100
  };
}

/* =========================================================
   UI HELPERS
========================================================= */

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function toast(message) {
  const el = document.createElement("div");

  el.className = "toast";
  el.textContent = message;

  document.body.appendChild(el);

  setTimeout(() => el.remove(), 2400);
}

function setHeader(title, subtitle) {
  if (pageHeading) pageHeading.textContent = title;
  if (pageDate) {
    pageDate.textContent =
      subtitle || "Năm học 2026–2027";
  }
}

function setActive(page) {
  $$(".menu-item").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.page === page
    );
  });
}

/* =========================================================
   THEME / DEVICE
========================================================= */

function applyTheme(theme) {
  document.body.classList.toggle(
    "dark",
    theme === "dark"
  );

  if (themeToggle) {
    themeToggle.textContent =
      theme === "dark" ? "☀" : "☾";

    themeToggle.title =
      theme === "dark"
        ? "Chuyển sang giao diện sáng"
        : "Chuyển sang giao diện tối";
  }

  localStorage.setItem("theme", theme);
}

function applyDeviceMode(mode) {
  state.deviceMode = mode;

  document.body.classList.toggle(
    "mobile-mode",
    mode === "mobile"
  );

  localStorage.setItem("deviceMode", mode);

  if (mode === "mobile") {
    state.memberView = "card";
  }
}

applyTheme(
  localStorage.getItem("theme") || "light"
);

if (state.compact) {
  document.body.classList.add("compact");
}

if (state.deviceMode) {
  applyDeviceMode(state.deviceMode);
}

if (mobileMenu) {
  mobileMenu.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    applyTheme(
      document.body.classList.contains("dark")
        ? "light"
        : "dark"
    );
  });
}

if (notificationButton) {
  notificationButton.addEventListener("click", () => {
    notificationPanel.hidden =
      !notificationPanel.hidden;
  });
}

document.addEventListener("click", e => {
  if (
    notificationPanel &&
    !notificationPanel.contains(e.target) &&
    e.target !== notificationButton
  ) {
    notificationPanel.hidden = true;
  }
});

/* =========================================================
   DEVICE ONBOARDING
========================================================= */

function askDeviceMode() {
  if (localStorage.getItem("deviceMode")) {
    return;
  }

  openModal(`
    <div class="device-choice">
      <div class="device-choice-icon">▣</div>

      <div class="modal-head">
        <div>
          <h2>Bạn đang sử dụng thiết bị nào?</h2>
          <p>
            Chọn cách hiển thị phù hợp để danh sách
            và nút bấm dễ thao tác hơn.
          </p>
        </div>
      </div>

      <div class="device-choice-grid">
        <button
          class="device-choice-btn"
          data-device="mobile"
        >
          <strong>Điện thoại</strong>
          <small>
            Giao diện gọn, nút lớn và danh sách dạng thẻ.
          </small>
        </button>

        <button
          class="device-choice-btn"
          data-device="desktop"
        >
          <strong>Máy tính</strong>
          <small>
            Giữ nguyên bố cục đầy đủ cho màn hình lớn.
          </small>
        </button>
      </div>

      <div class="device-choice-note">
        Bạn có thể đổi lại trong phần Cài đặt.
      </div>
    </div>
  `);

  $$("[data-device]").forEach(button => {
    button.onclick = () => {
      applyDeviceMode(button.dataset.device);
      closeModal();
      refreshCurrentPage();

      toast(
        button.dataset.device === "mobile"
          ? "Đã tối ưu giao diện cho điện thoại"
          : "Đã giữ giao diện máy tính"
      );
    };
  });
}

/* =========================================================
   API
========================================================= */

function apiConfigured() {
  return Boolean(state.apiBaseUrl);
}

function setSyncNotice(message, kind = "info") {
  const el = $("#syncStatus");

  if (el) {
    el.dataset.kind = kind;
    el.innerHTML = message;
  }

  const live =
    $("#apiLiveStatusTop") ||
    $("#apiLiveStatus");

  if (live) {
    live.textContent =
      kind === "ok"
        ? "● Đã đồng bộ"
        : kind === "error"
        ? "● API lỗi"
        : "● Đang kết nối";
  }
}

async function apiJSON(path, options = {}) {
  if (!apiConfigured()) {
    throw new Error("Chưa cấu hình URL backend");
  }

  const response = await fetch(
    getApiUrl(path),
    {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {})
      },
      ...options
    }
  );

  let payload = null;

  try {
    payload = await response.json();
  } catch (_) {}

  if (!response.ok) {
    throw new Error(
      payload?.message ||
      `HTTP ${response.status}`
    );
  }

  return payload;
}

/* =========================================================
   MAP STUDENT
========================================================= */

function mapStudent(raw, index) {
  const backendId =
    raw?._id ||
    raw?.id ||
    raw?.studentId ||
    null;

  const code = String(
    raw?.code ||
    raw?.rollNumber ||
    raw?.studentCode ||
    `SV-${index + 1}`
  ).trim();

  const name = String(
    raw?.name ||
    raw?.fullName ||
    raw?.studentName ||
    code
  ).trim();

  return {
    id: index + 1,
    code,
    name,
    backendId
  };
}

/* =========================================================
   PAYMENT RECORD MAPPING
   Đây là phần quan trọng nhất.
========================================================= */

function mapPaymentRecord(record, event, index) {
  if (!record) {
    return null;
  }

  const paymentStudentId =
    String(record.studentId || "").trim();

  const paymentRollNumber =
    String(
      record.rollNumber ||
      record.code ||
      record.studentCode ||
      ""
    ).trim();

  const paymentStudentName =
    normalizeText(
      record.studentName ||
      record.name ||
      record.fullName ||
      ""
    );

  /*
   * Ưu tiên:
   * 1. MongoDB studentId
   * 2. Mã sinh viên
   * 3. Họ tên
   */
  const student =
    students.find(s =>
      String(s.backendId || "").trim() ===
      paymentStudentId
    ) ||
    students.find(s =>
      String(s.code || "").trim() ===
      paymentRollNumber
    ) ||
    students.find(s =>
      normalizeText(s.name || "") ===
      paymentStudentName
    );

  const code = String(
    student?.code ||
    paymentRollNumber ||
    paymentStudentId ||
    `remote-${index}`
  ).trim();

  const isPaid =
    record.isPaid === true ||
    record.status === "paid";

  const status =
    isPaid
      ? "paid"
      : record.status === "pending"
      ? "pending"
      : "unpaid";

  return {
    code,

    status,

    amount: Number(
      record.amount ||
      event.amount ||
      0
    ),

    paidAt: formatDateTime(
      record.paidAt
    ),

    paidAtRaw:
      record.paidAt || null,

    studentId:
      record.studentId || null,

    backendPaymentId:
      record._id || null,

    studentName:
      record.studentName ||
      record.name ||
      student?.name ||
      "",

    rollNumber:
      record.rollNumber ||
      student?.code ||
      ""
  };
}

/* =========================================================
   REFRESH FROM API
========================================================= */

async function refreshFromAPI({
  silent = false
} = {}) {
  if (!apiConfigured()) {
    state.apiConnected = false;

    setSyncNotice(
      "Chưa cấu hình backend • Web đang chờ dữ liệu từ app thủ quỹ",
      "info"
    );

    refreshCurrentPage();

    return false;
  }

  try {
    setSyncNotice(
      "● Đang đồng bộ dữ liệu…",
      "info"
    );

    /* ---------------------------------------------
       1. STUDENTS
    --------------------------------------------- */

    let remoteStudents = [];

    try {
      remoteStudents =
        await apiJSON("/api/students");
    } catch (err) {
      if (!silent) {
        toast(
          `Không đọc được danh sách thành viên: ${err.message}`
        );
      }

      remoteStudents = null;
    }

    /*
     * Backend là nguồn chính.
     *
     * Nếu backend trả [] thì cũng dùng [].
     * Không giữ dữ liệu cũ một cách âm thầm.
     */
    if (Array.isArray(remoteStudents)) {
      students =
        remoteStudents.map(mapStudent);
    }

    /* ---------------------------------------------
       2. EVENTS
    --------------------------------------------- */

    const remoteEvents =
      await apiJSON("/api/events");

    const eventList =
      Array.isArray(remoteEvents)
        ? remoteEvents
        : [];

    const nextEvents = {};
    const nextPayments = {};

    /* ---------------------------------------------
       3. LOAD EVENTS + PAYMENTS
    --------------------------------------------- */

    await Promise.all(
      eventList.map(async event => {
        const name =
          String(event?.name || "").trim();

        if (!name) {
          return;
        }

        const eventId =
          event?._id ||
          event?.id ||
          null;

        nextEvents[name] = {
          id: eventId,

          amount: Number(
            event?.amount || 0
          ),

          deadline: formatDate(
            event?.dueDate ||
            event?.deadline
          ),

          startDate:
            event?.startDate ||
            null,

          dueDate:
            event?.dueDate ||
            null,

          total: Number(
            event?.studentCount ||
            students.length ||
            0
          ),

          paidCount: Number(
            event?.paidCount || 0
          ),

          unpaidCount: Number(
            event?.unpaidCount || 0
          ),

          status:
            event?.status ||
            "pending"
        };

        nextPayments[name] = {};

        if (!eventId) {
          return;
        }

        try {
          const payload =
            await apiJSON(
              `/api/events/${eventId}/payments`
            );

          const records =
            Array.isArray(payload)
              ? payload
              : [];

          records.forEach(
            (record, index) => {
              const mapped =
                mapPaymentRecord(
                  record,
                  event,
                  index
                );

              if (!mapped) {
                return;
              }

              nextPayments[name][
                mapped.code
              ] = mapped;
            }
          );
        } catch (paymentError) {
          console.error(
            `Không đọc được payments của event ${name}`,
            paymentError
          );
        }
      })
    );

    /* ---------------------------------------------
       4. COMMIT DATA
    --------------------------------------------- */

    state.events = nextEvents;
    state.paymentData = nextPayments;

    /*
     * Nếu event hiện tại không còn tồn tại,
     * chọn event đầu tiên từ backend.
     */
    if (
      !state.currentEvent ||
      !state.events[state.currentEvent]
    ) {
      state.currentEvent =
        Object.keys(state.events)[0] ||
        null;
    }

    state.apiConnected = true;
    state.lastSyncAt = new Date();

    setSyncNotice(
      `● Đã đồng bộ lúc ${state.lastSyncAt.toLocaleTimeString(
        "vi-VN",
        {
          hour: "2-digit",
          minute: "2-digit"
        }
      )}`,
      "ok"
    );

    updateNotificationPanel();
    refreshCurrentPage();

    return true;

  } catch (error) {
    console.error(
      "refreshFromAPI error:",
      error
    );

    state.apiConnected = false;

    setSyncNotice(
      `● Không kết nối được backend: ${esc(
        error.message
      )}`,
      "error"
    );

    if (!silent) {
      toast(
        `Đồng bộ thất bại: ${error.message}`
      );
    }

    refreshCurrentPage();

    return false;
  }
}

/* =========================================================
   COMPATIBILITY HOOKS
========================================================= */

window.receivePaymentData = function(data) {
  if (!data || typeof data !== "object") {
    return;
  }

  if (data.events || data.payments) {
    if (data.events) {
      state.events =
        normalizeIncomingEvents(
          data.events
        );
    }

    if (data.payments) {
      state.paymentData =
        data.payments;
    }
  } else if (Array.isArray(data)) {
    mergeIncomingPaymentRecords(data);
  }

  state.currentEvent =
    state.currentEvent ||
    Object.keys(state.events)[0] ||
    null;

  refreshCurrentPage();
};

window.applyPaymentUpdate = function(update) {
  if (
    !update?.studentCode ||
    !update?.eventName
  ) {
    return;
  }

  if (
    !state.paymentData[
      update.eventName
    ]
  ) {
    state.paymentData[
      update.eventName
    ] = {};
  }

  state.paymentData[
    update.eventName
  ][update.studentCode] = {
    code: update.studentCode,

    status:
      update.status || "paid",

    amount: Number(
      update.amount ||
      getEvent(update.eventName).amount ||
      0
    ),

    paidAt:
      update.paidAt
        ? formatDateTime(update.paidAt)
        : "—",

    paidAtRaw:
      update.paidAt || null
  };

  refreshCurrentPage();
};

function normalizeIncomingEvents(input) {
  if (Array.isArray(input)) {
    return Object.fromEntries(
      input.map(event => [
        event.name,
        {
          ...event,

          total: Number(
            event.total ||
            event.studentCount ||
            students.length
          ),

          deadline:
            event.deadline ||
            formatDate(event.dueDate),

          amount: Number(
            event.amount || 0
          ),

          id:
            event._id ||
            event.id ||
            null
        }
      ])
    );
  }

  return {
    ...input
  };
}

function mergeIncomingPaymentRecords(records) {
  records.forEach(record => {
    if (
      !record?.eventName ||
      !record?.studentCode
    ) {
      return;
    }

    if (
      !state.paymentData[
        record.eventName
      ]
    ) {
      state.paymentData[
        record.eventName
      ] = {};
    }

    state.paymentData[
      record.eventName
    ][record.studentCode] = {
      ...record,

      status:
        record.status ||
        "paid"
    };
  });
}

/* =========================================================
   NAVIGATION
========================================================= */

function navigate(page) {
  state.page = page;

  setActive(page);

  sidebar.classList.remove("open");

  ({
    Dashboard: showDashboard,
    "Khoản thu": showPayments,
    "Thành viên": showMembers,
    "Giao dịch": showTransactions,
    "Báo cáo": showReports,
    "Cài đặt": showSettings
  }[page] || showDashboard)();
}

$$(".menu-item").forEach(item => {
  item.addEventListener(
    "click",
    () => navigate(item.dataset.page)
  );
});

/* =========================================================
   EVENT HELPERS
========================================================= */

function eventCardsHTML() {
  const entries =
    Object.entries(state.events);

  if (!entries.length) {
    return `
      <div class="empty-state event-empty">
        <strong>Chưa có khoản thu nào</strong>
        <span>
          Sự kiện sẽ xuất hiện tại đây sau khi
          thủ quỹ tạo trên app quản lý.
        </span>
      </div>
    `;
  }

  return entries
    .map(([name, e]) => {
      const p = eventProgress(name);

      return `
        <button
          class="event ${
            name === state.currentEvent
              ? "active"
              : ""
          } ${p.completed ? "completed" : ""}"
          data-event="${esc(name)}"
          aria-label="${esc(name)}"
        >
          <div class="event-head">
            <div>
              <b>${esc(name)}</b>
              <small>
                ${
                  p.completed
                    ? "Đã hoàn thành"
                    : "Hạn đóng: " +
                      esc(e.deadline)
                }
              </small>
            </div>

            <strong>
              ${money(e.amount)}
            </strong>
          </div>

          <div class="progress-meta">
            <span>
              ${p.paid} / ${p.total} người
            </span>

            <b>${p.pct}%</b>
          </div>

          <div class="progress">
            <i style="width:${p.pct}%"></i>
          </div>

          ${
            p.completed
              ? `
                <div class="event-complete-label">
                  ✓ Đã đủ 100%
                </div>
              `
              : ""
          }
        </button>
      `;
    })
    .join("");
}

function quickFilterHTML() {
  const c = getCounts();

  const total = state.currentEvent
    ? Math.max(
        c.paid +
          c.unpaid +
          c.pending,
        students.length
      )
    : 0;

  return `
    <button
      class="filter-btn ${
        state.currentStatus === "all"
          ? "active"
          : ""
      }"
      data-status="all"
    >
      Tất cả <span>${total}</span>
    </button>

    <button
      class="filter-btn ${
        state.currentStatus === "paid"
          ? "active"
          : ""
      }"
      data-status="paid"
    >
      Đã đóng <span>${c.paid}</span>
    </button>

    <button
      class="filter-btn ${
        state.currentStatus === "unpaid"
          ? "active"
          : ""
      }"
      data-status="unpaid"
    >
      Chưa đóng <span>${c.unpaid}</span>
    </button>

    <button
      class="filter-btn ${
        state.currentStatus === "pending"
          ? "active"
          : ""
      }"
      data-status="pending"
    >
      Chờ đối soát <span>${c.pending}</span>
    </button>
  `;
}

function filteredStudents() {
  return students.filter(student => {
    const keyword =
      normalizeText(
        state.currentKeyword
      );

    const payment =
      getPayment(student.code);

    const keywordMatch =
      !keyword ||
      normalizeText(
        student.name
      ).includes(keyword) ||
      normalizeText(
        student.code
      ).includes(keyword);

    const statusMatch =
      state.currentStatus === "all" ||
      payment.status ===
        state.currentStatus;

    return (
      keywordMatch &&
      statusMatch
    );
  });
}

/* =========================================================
   STUDENT ROWS
========================================================= */

function studentRows(list) {
  return list
    .map((student, index) => {
      const payment =
        getPayment(student.code);

      const hasEvent = Boolean(
        state.currentEvent &&
        state.events[state.currentEvent]
      );

      return `
        <tr>
          <td>
            ${String(index + 1).padStart(2, "0")}
          </td>

          <td>
            <div class="student">
              <span class="student-avatar">
                ${initials(student.name)}
              </span>

              <div>
                <button
                  class="student-name"
                  data-code="${esc(student.code)}"
                >
                  ${esc(student.name)}
                </button>

                <small>
                  Mã SV: ${esc(student.code)}
                </small>
              </div>
            </div>
          </td>

          <td>
            ${esc(student.code)}
          </td>

          <td>
            ${
              hasEvent &&
              payment.status !== "unpaid"
                ? esc(
                    payment.code ||
                      student.code
                  )
                : "—"
            }
          </td>

          <td>
            ${
              hasEvent
                ? money(payment.amount)
                : "—"
            }
          </td>

          <td>
            <span
              class="badge ${statusClass(
                hasEvent
                  ? payment.status
                  : "none"
              )}"
            >
              ${
                hasEvent
                  ? statusLabel(
                      payment.status
                    )
                  : "— Chưa có khoản thu"
              }
            </span>
          </td>

          <td>
            ${
              hasEvent
                ? esc(
                    payment.paidAt ||
                      "—"
                  )
                : "—"
            }
          </td>
        </tr>
      `;
    })
    .join("");
}

/* =========================================================
   DASHBOARD
========================================================= */

function dashboardStats() {
  const c = getCounts();

  const active =
    state.currentEvent
      ? getEvent()
      : null;

  return {
    eventCount:
      Object.keys(state.events).length,

    paid: c.paid,
    unpaid: c.unpaid,
    pending: c.pending,

    active
  };
}

function renderDashboardTable() {
  const list =
    filteredStudents();

  const table =
    $("#dashTable");

  if (!table) {
    return;
  }

  table.innerHTML = list.length
    ? studentRows(list)
    : `
      <tr>
        <td colspan="7">
          <div class="empty-state">
            Không tìm thấy thành viên phù hợp.
          </div>
        </td>
      </tr>
    `;

  const footer =
    $("#dashFooter");

  if (footer) {
    footer.textContent =
      state.currentEvent
        ? `Hiển thị ${list.length} / ${students.length} thành viên • Khoản thu: ${state.currentEvent}`
        : `Hiển thị ${list.length} / ${students.length} thành viên • Chưa có khoản thu`;
  }

  $$(".student-name", table)
    .forEach(button => {
      button.onclick = () =>
        openStudentModal(
          button.dataset.code
        );
    });
}

function renderDashboard() {
  const stats =
    dashboardStats();

  content.innerHTML = `
    <div class="stats">

      <article class="stat-card">
        <div class="stat-top">
          <span>SỰ KIỆN ĐANG CÓ</span>
          <b>◫</b>
        </div>

        <strong>
          ${stats.eventCount}
        </strong>

        <small>
          Sự kiện do app thủ quỹ tạo
        </small>
      </article>

      <article class="stat-card">
        <div class="stat-top">
          <span>ĐÃ ĐÓNG</span>
          <b>✓</b>
        </div>

        <strong class="income">
          ${stats.paid}
        </strong>

        <small>
          ${
            state.currentEvent
              ? "Trong sự kiện đang chọn"
              : "Chưa có sự kiện"
          }
        </small>
      </article>

      <article class="stat-card">
        <div class="stat-top">
          <span>CHƯA ĐÓNG</span>
          <b>!</b>
        </div>

        <strong class="expense">
          ${
            state.currentEvent
              ? stats.unpaid
              : 0
          }
        </strong>

        <small>
          Chỉ tính theo sự kiện đang chọn
        </small>
      </article>

      <article class="stat-card">
        <div class="stat-top">
          <span>CHỜ ĐỐI SOÁT</span>
          <b>?</b>
        </div>

        <strong>
          ${stats.pending}
        </strong>

        <small>
          Dữ liệu từ app thủ quỹ
        </small>
      </article>

    </div>

    <div class="grid-2">

      <section class="card">
        <div class="card-head">
          <div>
            <h2>Khoản thu của lớp</h2>
            <p>
              Dữ liệu ảo theo từng sự kiện,
              không phải số dư ngân hàng.
            </p>
          </div>

          <button
            class="link-btn"
            id="allPayments"
          >
            Xem tất cả
          </button>
        </div>

        <div class="events">
          ${eventCardsHTML()}
        </div>
      </section>

      <section class="card sync-card">

        <div class="card-head">
          <div>
            <h2>Đồng bộ dữ liệu</h2>
            <p>
              Web này chỉ đọc dữ liệu
              từ app của thủ quỹ.
            </p>
          </div>

          <button
            class="link-btn"
            id="manualSync"
          >
            Đồng bộ
          </button>
        </div>

        <div class="sync-panel">
          <div class="sync-icon">
            ↻
          </div>

          <div>
            <strong id="apiLiveStatus">
              ${
                state.apiConnected
                  ? "● Đã đồng bộ"
                  : "● Chưa kết nối"
              }
            </strong>

            <p id="syncStatus">
              ${
                apiConfigured()
                  ? "Đang chờ đồng bộ…"
                  : "Chưa cấu hình backend • Web đang chờ dữ liệu từ app thủ quỹ"
              }
            </p>
          </div>
        </div>

        <div class="notice">
          <b>Luồng dữ liệu:</b>
          App thủ quỹ → Backend API →
          Web quỹ lớp.
        </div>

      </section>

    </div>

    <section class="card">

      <div class="card-head">

        <div>
          <h2>Cập nhật đóng tiền gần đây</h2>

          <p>
            Chỉ hiển thị khi backend ghi nhận
            học sinh đã đóng trong một sự kiện.
          </p>
        </div>

        <button
          class="link-btn"
          id="allTransactions"
        >
          Xem tất cả
        </button>

      </div>

      <div class="transactions">
        ${renderRecentTransactions()}
      </div>

    </section>

    <section class="card">

      <div class="card-head table-head">

        <div>
          <h2>Danh sách thành viên</h2>

          <p>
            ${
              state.currentEvent
                ? `Trạng thái đóng tiền • <b>${esc(
                    state.currentEvent
                  )}</b>`
                : "Chưa có sự kiện để theo dõi trạng thái đóng tiền"
            }
          </p>
        </div>

        <div class="table-tools">

          <div class="search">
            <span>⌕</span>

            <input
              id="dashSearch"
              type="search"
              placeholder="Tìm tên hoặc mã SV..."
            >
          </div>

          <select id="dashStatus">
            <option value="all">
              Tất cả
            </option>

            <option value="paid">
              Đã đóng
            </option>

            <option value="unpaid">
              Chưa đóng
            </option>

            <option value="pending">
              Chờ đối soát
            </option>
          </select>

        </div>

      </div>

      <div
        class="quick-filters"
        id="dashFilters"
      >
        ${quickFilterHTML()}
      </div>

      <div class="table-wrap">
        <table>

          <thead>
            <tr>
              <th>STT</th>
              <th>Sinh viên</th>
              <th>Mã SV</th>
              <th>Mã thanh toán</th>
              <th>Số tiền</th>
              <th>Trạng thái</th>
              <th>Thời gian</th>
            </tr>
          </thead>

          <tbody id="dashTable"></tbody>

        </table>
      </div>

      <div
        class="table-footer"
        id="dashFooter"
      ></div>

    </section>

    <footer>
      © 2026 Quỹ lớp Kỹ thuật Cơ điện tử K52
      • Dữ liệu sự kiện đồng bộ từ app thủ quỹ
    </footer>
  `;

  $("#allPayments").onclick =
    () => navigate("Khoản thu");

  $("#allTransactions").onclick =
    () => navigate("Giao dịch");

  $("#manualSync").onclick =
    () => refreshFromAPI();

  $("#dashSearch").addEventListener(
    "input",
    e => {
      state.currentKeyword =
        e.target.value;

      renderDashboardTable();
    }
  );

  $("#dashStatus").addEventListener(
    "change",
    e => {
      state.currentStatus =
        e.target.value;

      renderDashboardTable();
    }
  );

  $$("#dashFilters .filter-btn")
    .forEach(button => {
      button.onclick = () => {
        state.currentStatus =
          button.dataset.status;

        $("#dashStatus").value =
          state.currentStatus;

        renderDashboardTable();
      };
    });

  $$(".event").forEach(button => {
    button.onclick = () => {
      state.currentEvent =
        button.dataset.event;

      state.currentStatus = "all";

      navigate("Thành viên");
    };
  });

  renderDashboardTable();
}

/* =========================================================
   PAYMENTS
========================================================= */

function showPayments() {
  setHeader(
    "Khoản thu",
    "Các sự kiện do app của thủ quỹ tạo"
  );

  const entries =
    Object.entries(state.events);

  const paidTotal =
    entries.reduce(
      (sum, [name, event]) =>
        sum +
        getCounts(name).paid *
          Number(event.amount || 0),
      0
    );

  content.innerHTML = `
    <div class="page-title">

      <div>
        <h1>Khoản thu</h1>

        <p>
          Mỗi khoản thu là dữ liệu ảo để
          theo dõi ai đã đóng tiền.
        </p>
      </div>

      <div class="toolbar-actions">
        <button
          class="secondary-btn"
          id="exportPayments"
        >
          Xuất tất cả CSV
        </button>
      </div>

    </div>

    <div class="stats">

      <div class="stat-card">
        <div class="stat-top">
          <span>KHOẢN THU</span>
          <b>◫</b>
        </div>

        <strong>
          ${entries.length}
        </strong>

        <small>
          Do app thủ quỹ tạo
        </small>
      </div>

      <div class="stat-card">
        <div class="stat-top">
          <span>ĐÃ XÁC NHẬN</span>
          <b>✓</b>
        </div>

        <strong class="income">
          ${money(paidTotal)}
        </strong>

        <small>
          Tổng theo trạng thái sự kiện
        </small>
      </div>

      <div class="stat-card">
        <div class="stat-top">
          <span>ĐÃ ĐÓNG</span>
          <b>✓</b>
        </div>

        <strong>
          ${entries.reduce(
            (n, [name]) =>
              n +
              getCounts(name).paid,
            0
          )}
        </strong>

        <small>
          Tổng lượt đã đóng
        </small>
      </div>

      <div class="stat-card">
        <div class="stat-top">
          <span>NGUỒN DỮ LIỆU</span>
          <b>↻</b>
        </div>

        <strong style="font-size:14px">
          APP THỦ QUỸ
        </strong>

        <small>
          ${
            state.apiConnected
              ? "Đang đồng bộ"
              : "Chưa kết nối"
          }
        </small>
      </div>

    </div>

    <div class="card">

      <div class="card-head">
        <div>
          <h2>Danh sách khoản thu</h2>

          <p>
            Sự kiện chỉ xuất hiện sau khi
            được tạo trên app quản lý.
          </p>
        </div>
      </div>

      <div class="payment-events">

        ${
          entries.length
            ? entries
                .map(
                  ([name, event], index) => {
                    const p =
                      eventProgress(name);

                    return `
                      <article
                        class="payment-event ${
                          p.completed
                            ? "completed"
                            : ""
                        }"
                      >

                        <div class="payment-event-icon">
                          ${index + 1}
                        </div>

                        <div class="payment-event-info">

                          <h3>
                            ${esc(name)}
                          </h3>

                          <p>
                            ${
                              p.completed
                                ? "Đã hoàn thành"
                                : "Hạn đóng: " +
                                  esc(
                                    event.deadline
                                  )
                            }
                          </p>

                          <div class="progress">
                            <i
                              style="width:${p.pct}%"
                            ></i>
                          </div>

                          <small>
                            ${p.paid}/${p.total}
                            học sinh đã đóng
                            • ${p.unpaid}
                            chưa đóng
                            • ${p.pending}
                            chờ đối soát
                          </small>

                        </div>

                        <div class="payment-event-money">

                          <strong>
                            ${money(event.amount)}
                          </strong>

                          <span>
                            ${p.pct}%
                          </span>

                          <div class="event-actions">

                            <button
                              class="event-open-btn"
                              data-event-open="${esc(
                                name
                              )}"
                            >
                              ${
                                p.completed
                                  ? "Xem danh sách"
                                  : "Mở danh sách"
                              }
                            </button>

                            <button
                              class="event-csv-btn"
                              data-event-csv="${esc(
                                name
                              )}"
                            >
                              CSV
                            </button>

                          </div>

                        </div>

                        ${
                          p.completed
                            ? `
                              <div class="event-complete-label">
                                ✓ Đã đủ 100%
                              </div>
                            `
                            : ""
                        }

                      </article>
                    `;
                  }
                )
                .join("")
            : `
              <div class="empty-state">
                <strong>
                  Chưa có khoản thu nào
                </strong>

                <span>
                  Hãy tạo sự kiện trên app
                  của thủ quỹ; sau khi backend
                  nhận được, sự kiện sẽ tự xuất hiện
                  ở đây.
                </span>
              </div>
            `
        }

      </div>
    </div>
  `;

  $$("[data-event-open]")
    .forEach(button => {
      button.onclick = () => {
        state.currentEvent =
          button.dataset.eventOpen;

        state.currentStatus = "all";

        navigate("Thành viên");
      };
    });

  $$("[data-event-csv]")
    .forEach(button => {
      button.onclick = () =>
        exportCSV(
          "event",
          button.dataset.eventCsv
        );
    });

  $("#exportPayments").onclick =
    () => exportCSV("payments");

  scrollTop();
}

/* =========================================================
   MEMBERS
========================================================= */

function showMembers() {
  if (
    state.deviceMode === "mobile"
  ) {
    state.memberView = "card";
  }

  setHeader(
    `Danh sách • ${
      state.currentEvent ||
      "Chưa có sự kiện"
    }`,
    `${students.length} sinh viên • dữ liệu từ app thủ quỹ`
  );

  const counts = getCounts();

  content.innerHTML = `
    <div class="page-title">

      <div>
        <h1>Thành viên</h1>

        <p>
          ${
            state.currentEvent
              ? `Danh sách và trạng thái của <b>${esc(
                  state.currentEvent
                )}</b>`
              : "Chưa có sự kiện để theo dõi đóng tiền"
          }
        </p>
      </div>

      <div class="toolbar-actions">

        <button
          class="secondary-btn"
          id="exportMembers"
        >
          Xuất CSV
        </button>

        <span class="member-count">
          ${students.length} thành viên
        </span>

      </div>

    </div>

    <div class="stats">

      <div class="stat-card">
        <div class="stat-top">
          <span>TỔNG SINH VIÊN</span>
          <b>👥</b>
        </div>

        <strong>
          ${students.length}
        </strong>

        <small>
          Danh sách lớp
        </small>
      </div>

      <div class="stat-card">
        <div class="stat-top">
          <span>ĐÃ ĐÓNG</span>
          <b>✓</b>
        </div>

        <strong class="income">
          ${counts.paid}
        </strong>

        <small>
          Trong sự kiện đang chọn
        </small>
      </div>

      <div class="stat-card">
        <div class="stat-top">
          <span>CHƯA ĐÓNG</span>
          <b>!</b>
        </div>

        <strong class="expense">
          ${
            state.currentEvent
              ? counts.unpaid
              : 0
          }
        </strong>

        <small>
          Trong sự kiện đang chọn
        </small>
      </div>

      <div class="stat-card">
        <div class="stat-top">
          <span>CHỜ ĐỐI SOÁT</span>
          <b>?</b>
        </div>

        <strong>
          ${counts.pending}
        </strong>

        <small>
          Do backend cung cấp
        </small>
      </div>

    </div>

    <div class="card">

      <div class="card-head member-toolbar">

        <div>
          <h2>Danh sách thành viên</h2>

          <p>
            Bấm tên để xem hồ sơ và lịch sử
            theo từng sự kiện.
          </p>
        </div>

        <div class="table-tools">

          <div class="search">
            <span>⌕</span>

            <input
              id="memberSearch"
              type="search"
              placeholder="Tìm học sinh hoặc mã SV..."
            >
          </div>

          <select id="memberStatus">
            <option value="all">
              Tất cả
            </option>

            <option value="paid">
              Đã đóng
            </option>

            <option value="unpaid">
              Chưa đóng
            </option>

            <option value="pending">
              Chờ đối soát
            </option>
          </select>

          <div class="view-toggle">

            <button
              id="tableView"
              class="${
                state.memberView === "table"
                  ? "active"
                  : ""
              }"
            >
              ☷ Bảng
            </button>

            <button
              id="cardView"
              class="${
                state.memberView === "card"
                  ? "active"
                  : ""
              }"
            >
              ▦ Thẻ
            </button>

          </div>

        </div>

      </div>

      <div
        class="quick-filters"
        id="memberFilters"
      >
        ${quickFilterHTML()}
      </div>

      <div id="memberList"></div>

      <div
        class="table-footer"
        id="memberFooter"
      ></div>

    </div>
  `;

  const search =
    $("#memberSearch");

  const filter =
    $("#memberStatus");

  search.value =
    state.currentKeyword;

  filter.value =
    state.currentStatus;

  search.oninput = e => {
    state.currentKeyword =
      e.target.value;

    renderMemberList();
  };

  filter.onchange = e => {
    state.currentStatus =
      e.target.value;

    renderMemberList();
  };

  $$("#memberFilters .filter-btn")
    .forEach(button => {
      button.onclick = () => {
        state.currentStatus =
          button.dataset.status;

        filter.value =
          state.currentStatus;

        renderMemberList();
      };
    });

  $("#tableView").onclick =
    () => {
      state.memberView = "table";
      showMembers();
    };

  $("#cardView").onclick =
    () => {
      state.memberView = "card";
      showMembers();
    };

  $("#exportMembers").onclick =
    () => exportCSV("members");

  renderMemberList();

  scrollTop();
}

function renderMemberList() {
  const list =
    filteredStudents();

  const box =
    $("#memberList");

  if (!box) {
    return;
  }

  if (
    state.memberView === "table"
  ) {
    box.innerHTML = `
      <div class="table-wrap">

        <table>

          <thead>
            <tr>
              <th>STT</th>
              <th>Sinh viên</th>
              <th>Mã SV</th>
              <th>Mã thanh toán</th>
              <th>Số tiền</th>
              <th>Trạng thái</th>
              <th>Thời gian</th>
            </tr>
          </thead>

          <tbody>
            ${
              list.length
                ? studentRows(list)
                : `
                  <tr>
                    <td colspan="7">
                      <div class="empty-state">
                        Không tìm thấy thành viên phù hợp.
                      </div>
                    </td>
                  </tr>
                `
            }
          </tbody>

        </table>

      </div>
    `;
  } else {
    box.innerHTML =
      list.length
        ? `
          <div class="member-grid">

            ${list
              .map(student => {
                const payment =
                  getPayment(
                    student.code
                  );

                const hasEvent =
                  Boolean(
                    state.currentEvent &&
                    state.events[
                      state.currentEvent
                    ]
                  );

                return `
                  <div class="member-card">

                    <span class="student-avatar">
                      ${initials(
                        student.name
                      )}
                    </span>

                    <div class="member-info">

                      <button
                        class="student-name"
                        data-code="${esc(
                          student.code
                        )}"
                      >
                        ${esc(
                          student.name
                        )}
                      </button>

                      <small>
                        Mã:
                        ${esc(
                          student.code
                        )}
                      </small>

                    </div>

                    <div class="member-payment">

                      <span
                        class="badge ${statusClass(
                          hasEvent
                            ? payment.status
                            : "none"
                        )}"
                      >
                        ${
                          hasEvent
                            ? statusLabel(
                                payment.status
                              )
                            : "— Chưa có khoản thu"
                        }
                      </span>

                      <small>
                        ${
                          hasEvent
                            ? money(
                                payment.amount
                              ) +
                              " • " +
                              esc(
                                payment.paidAt ||
                                  "—"
                              )
                            : ""
                        }
                      </small>

                    </div>

                  </div>
                `;
              })
              .join("")}

          </div>
        `
        : `
          <div class="empty-state">
            Không tìm thấy thành viên phù hợp.
          </div>
        `;

  $$(".student-name", box)
    .forEach(button => {
      button.onclick = () =>
        openStudentModal(
          button.dataset.code
        );
    });

  const footer =
    $("#memberFooter");

  if (footer) {
    footer.textContent =
      state.currentEvent
        ? `Hiển thị ${list.length} / ${students.length} thành viên • Khoản thu: ${state.currentEvent}`
        : `Hiển thị ${list.length} / ${students.length} thành viên • Chưa có khoản thu`;
  }
}

/* =========================================================
   TRANSACTIONS
========================================================= */

function getEventTransactions() {
  const result = [];

  Object.entries(
    state.events
  ).forEach(
    ([eventName, event]) => {
      Object.entries(
        state.paymentData?.[
          eventName
        ] || {}
      ).forEach(
        ([code, payment]) => {
          if (
            payment?.status !== "paid"
          ) {
            return;
          }

          const student =
            students.find(
              item =>
                String(
                  item.code
                ) === String(code)
            );

          result.push({
            name:
              student?.name ||
              payment?.studentName ||
              code,

            description:
              eventName,

            amount: Number(
              payment.amount ||
              event.amount ||
              0
            ),

            time:
              payment.paidAt ||
              "—",

            timeRaw:
              payment.paidAtRaw ||
              null,

            eventName,

            code
          });
        }
      );
    }
  );

  return result.sort(
    (a, b) => {
      const bt =
        a.timeRaw
          ? new Date(
              a.timeRaw
            ).getTime()
          : 0;

      const at =
        b.timeRaw
          ? new Date(
              b.timeRaw
            ).getTime()
          : 0;

      return bt - at;
    }
  );
}

function renderRecentTransactions(
  limit = 5
) {
  const transactions =
    getEventTransactions()
      .slice(0, limit);

  if (!transactions.length) {
    return `
      <div class="empty-state">
        Chưa có dữ liệu học sinh
        đã đóng từ backend.
      </div>
    `;
  }

  return transactions
    .map(
      item => `
        <div class="transaction">

          <div class="tx-left">

            <div class="tx-icon">
              ✓
            </div>

            <div>
              <b>
                ${esc(item.name)}
              </b>

              <small>
                ${esc(
                  item.description
                )}
              </small>
            </div>

          </div>

          <div class="amount income">
            ${money(item.amount)}
          </div>

        </div>
      `
    )
    .join("");
}

function showTransactions() {
  setHeader(
    "Giao dịch",
    "Cập nhật đóng tiền theo từng sự kiện — không liên quan số dư ngân hàng"
  );

  const transactions =
    getEventTransactions();

  const events =
    Object.entries(
      state.events
    );

  content.innerHTML = `
    <div class="page-title">

      <div>
        <h1>Giao dịch</h1>

        <p>
          Chỉ là nhật ký trạng thái
          đóng tiền ảo theo sự kiện.
        </p>
      </div>

      <button
        class="secondary-btn"
        id="exportTx"
      >
        Xuất CSV
      </button>

    </div>

    <div class="stats">

      <div class="stat-card">
        <div class="stat-top">
          <span>CẬP NHẬT</span>
          <b>✓</b>
        </div>

        <strong>
          ${transactions.length}
        </strong>

        <small>
          Học sinh đã đóng tiền
        </small>
      </div>

      <div class="stat-card">
        <div class="stat-top">
          <span>SỰ KIỆN</span>
          <b>◫</b>
        </div>

        <strong>
          ${events.length}
        </strong>

        <small>
          Đang theo dõi
        </small>
      </div>

      <div class="stat-card">
        <div class="stat-top">
          <span>NĂM HỌC</span>
          <b>2026</b>
        </div>

        <strong style="font-size:18px">
          K52
        </strong>

        <small>
          Kỹ thuật Cơ điện tử
        </small>
      </div>

    </div>

    <div class="card">

      <div class="card-head">

        <div>
          <h2>Theo từng sự kiện</h2>

          <p>
            Mở từng sự kiện để xem danh sách
            người đã đóng và xuất CSV.
          </p>
        </div>

      </div>

      <div class="payment-events">

        ${
          events.length
            ? events
                .map(
                  ([name, event]) => {
                    const p =
                      eventProgress(name);

                    return `
                      <article
                        class="payment-event ${
                          p.completed
                            ? "completed"
                            : ""
                        }"
                      >

                        <div class="payment-event-icon">
                          ✓
                        </div>

                        <div class="payment-event-info">

                          <h3>
                            ${esc(name)}
                          </h3>

                          <p>
                            ${p.paid}/${p.total}
                            người đã đóng
                            • ${p.pct}%
                          </p>

                          <div class="progress">
                            <i
                              style="width:${p.pct}%"
                            ></i>
                          </div>

                        </div>

                        <div class="payment-event-money">

                          <strong>
                            ${money(
                              event.amount
                            )}
                          </strong>

                          <div class="event-actions">

                            <button
                              class="event-open-btn"
                              data-event-open="${esc(
                                name
                              )}"
                            >
                              Mở danh sách
                            </button>

                            <button
                              class="event-csv-btn"
                              data-event-csv="${esc(
                                name
                              )}"
                            >
                              CSV
                            </button>

                          </div>

                        </div>

                      </article>
                    `;
                  }
                )
                .join("")
            : `
              <div class="empty-state">

                <strong>
                  Chưa có giao dịch
                </strong>

                <span>
                  Giao dịch chỉ xuất hiện
                  sau khi app thủ quỹ cập nhật
                  trạng thái đã đóng.
                </span>

              </div>
            `
        }

      </div>
    </div>

    <div class="card">

      <div class="card-head">

        <div>
          <h2>Cập nhật gần đây</h2>

          <p>
            Không phải lịch sử tài khoản ngân hàng.
          </p>
        </div>

      </div>

      <div class="transaction-list">

        ${
          transactions.length
            ? transactions
                .map(
                  item => `
                    <div class="transaction-row">

                      <div class="transaction-icon income">
                        ✓
                      </div>

                      <div class="transaction-detail">

                        <strong>
                          ${esc(
                            item.name
                          )}
                        </strong>

                        <small>
                          ${esc(
                            item.description
                          )}
                        </small>

                      </div>

                      <div class="transaction-time">
                        ${esc(
                          item.time
                        )}
                      </div>

                      <strong class="transaction-amount income">
                        ${money(
                          item.amount
                        )}
                      </strong>

                    </div>
                  `
                )
                .join("")
            : `
              <div class="empty-state">
                Chưa có cập nhật.
              </div>
            `
        }

      </div>

    </div>
  `;

  $$("[data-event-open]")
    .forEach(button => {
      button.onclick = () => {
        state.currentEvent =
          button.dataset.eventOpen;

        state.currentStatus = "all";

        navigate("Thành viên");
      };
    });

  $$("[data-event-csv]")
    .forEach(button => {
      button.onclick = () =>
        exportCSV(
          "event",
          button.dataset.eventCsv
        );
    });

  $("#exportTx").onclick =
    () => exportCSV("transactions");

  scrollTop();
}

/* =========================================================
   REPORTS
========================================================= */

function showReports() {
  setHeader(
    "Báo cáo",
    "Tổng hợp tiến độ đóng tiền theo từng sự kiện"
  );

  const entries =
    Object.entries(
      state.events
    );

  content.innerHTML = `
    <div class="page-title">

      <div>
        <h1>Báo cáo</h1>

        <p>
          Chỉ thống kê dữ liệu ảo
          của các sự kiện thu tiền.
        </p>
      </div>

      <button
        class="secondary-btn"
        id="exportReport"
      >
        Xuất CSV
      </button>

    </div>

    <div class="stats">

      <div class="stat-card">
        <div class="stat-top">
          <span>SỰ KIỆN</span>
          <b>◫</b>
        </div>

        <strong>
          ${entries.length}
        </strong>

        <small>
          Đang theo dõi
        </small>
      </div>

      <div class="stat-card">
        <div class="stat-top">
          <span>ĐÃ ĐÓNG</span>
          <b>✓</b>
        </div>

        <strong class="income">
          ${entries.reduce(
            (total, [name]) =>
              total +
              getCounts(name).paid,
            0
          )}
        </strong>

        <small>
          Tổng lượt đóng
        </small>
      </div>

      <div class="stat-card">
        <div class="stat-top">
          <span>CHƯA ĐÓNG</span>
          <b>!</b>
        </div>

        <strong class="expense">
          ${entries.reduce(
            (total, [name]) =>
              total +
              getCounts(name).unpaid,
            0
          )}
        </strong>

        <small>
          Tổng lượt chưa đóng
        </small>
      </div>

    </div>

    <div class="report-grid">

      <div class="card">

        <div class="card-head">

          <div>
            <h2>Tình hình thu tiền</h2>
            <p>
              Tiến độ theo từng sự kiện
            </p>
          </div>

        </div>

        <div class="report-items">

          ${
            entries.length
              ? entries
                  .map(
                    ([name]) => {
                      const p =
                        eventProgress(
                          name
                        );

                      return `
                        <div class="report-item">

                          <div class="report-item-top">

                            <strong>
                              ${esc(name)}
                            </strong>

                            <span>
                              ${p.pct}%
                            </span>

                          </div>

                          <div class="progress">
                            <i
                              style="width:${p.pct}%"
                            ></i>
                          </div>

                          <small>
                            ${p.paid}/${p.total}
                            học sinh •
                            ${p.unpaid}
                            chưa đóng •
                            ${
                              p.completed
                                ? "Đã hoàn thành"
                                : "Đang mở"
                            }
                          </small>

                        </div>
                      `;
                    }
                  )
                  .join("")
              : `
                <div class="empty-state">
                  Chưa có sự kiện để báo cáo.
                </div>
              `
          }

        </div>

      </div>

      <div class="card">

        <div class="card-head">

          <div>
            <h2>Ghi chú dữ liệu</h2>
            <p>
              Mô hình vận hành của web
            </p>
          </div>

        </div>

        <div class="report-summary">

          <div>
            <span>Nguồn dữ liệu</span>
            <strong>Backend API</strong>
          </div>

          <div>
            <span>Người tạo sự kiện</span>
            <strong>App thủ quỹ</strong>
          </div>

          <div>
            <span>Cách xác nhận</span>
            <strong>App thủ quỹ</strong>
          </div>

          <div>
            <span>Loại dữ liệu</span>
            <strong>Theo sự kiện</strong>
          </div>

        </div>

      </div>

    </div>
  `;

  $("#exportReport").onclick =
    () => exportCSV("report");

  scrollTop();
}

/* =========================================================
   SETTINGS
========================================================= */

function showSettings() {
  setHeader(
    "Cài đặt",
    "Thiết lập giao diện và kết nối dữ liệu"
  );

  content.innerHTML = `
    <div class="page-title">

      <div>
        <h1>Cài đặt</h1>

        <p>
          Giao diện và nguồn dữ liệu của web.
        </p>
      </div>

    </div>

    <div class="card">

      <div class="card-head">

        <div>
          <h2>Giao diện</h2>

          <p>
            Các tùy chọn được lưu trên trình duyệt này.
          </p>
        </div>

      </div>

      <div class="settings-list">

        <div class="setting-row">

          <div>
            <strong>
              Thiết bị hiển thị
            </strong>

            <p>
              Chọn bố cục tối ưu cho điện thoại
              hoặc máy tính.
            </p>
          </div>

          <div class="device-mode-setting">

            <button
              class="secondary-btn ${
                state.deviceMode === "mobile"
                  ? "active"
                  : ""
              }"
              id="mobileDeviceSetting"
            >
              Điện thoại
            </button>

            <button
              class="secondary-btn ${
                state.deviceMode !== "mobile"
                  ? "active"
                  : ""
              }"
              id="desktopDeviceSetting"
            >
              Máy tính
            </button>

          </div>

        </div>

        <div class="setting-row">

          <div>
            <strong>
              Giao diện tối
            </strong>

            <p>
              Chuyển nhanh giữa sáng và tối.
            </p>
          </div>

          <label class="switch">

            <input
              id="darkSetting"
              type="checkbox"
              ${
                document.body.classList.contains(
                  "dark"
                )
                  ? "checked"
                  : ""
              }
            >

            <span class="slider"></span>

          </label>

        </div>

        <div class="setting-row">

          <div>
            <strong>
              Giao diện gọn
            </strong>

            <p>
              Giảm khoảng cách để hiển thị
              nhiều dữ liệu hơn.
            </p>
          </div>

          <label class="switch">

            <input
              id="compactSetting"
              type="checkbox"
              ${
                state.compact
                  ? "checked"
                  : ""
              }
            >

            <span class="slider"></span>

          </label>

        </div>

        <div class="setting-row">

          <div>
            <strong>
              Thông báo
            </strong>

            <p>
              Hiển thị bảng thông báo ở góc trên.
            </p>
          </div>

          <label class="switch">

            <input
              id="notificationSetting"
              type="checkbox"
              ${
                state.notifications
                  ? "checked"
                  : ""
              }
            >

            <span class="slider"></span>

          </label>

        </div>

      </div>

    </div>

    <div class="card">

      <div class="card-head">

        <div>
          <h2>Kết nối backend</h2>

          <p>
            Đây là API mà app thủ quỹ dùng để
            tạo sự kiện và cập nhật ai đã đóng.
          </p>
        </div>

      </div>

      <div class="api-config">

        <label for="apiBaseUrl">
          URL backend API
        </label>

        <div class="api-config-row">

          <input
            id="apiBaseUrl"
            class="api-url-input"
            type="url"
            placeholder="https://ten-backend.vercel.app"
            value="${esc(
              state.apiBaseUrl
            )}"
          >

          <button
            class="primary-btn"
            id="saveApiUrl"
          >
            Lưu & đồng bộ
          </button>

        </div>

        <small>
          Để trống nếu frontend và backend
          chạy cùng một domain.
        </small>

      </div>

      <div
        id="syncStatus"
        class="sync-status"
        data-kind="${
          state.apiConnected
            ? "ok"
            : "info"
        }"
      >
        ${
          state.apiConnected
            ? "● Đã đồng bộ"
            : "Chưa đồng bộ"
        }
      </div>

      <div class="notice">

        <b>Luồng dữ liệu:</b>

        App thủ quỹ tạo sự kiện →
        backend lưu sự kiện + trạng thái
        từng sinh viên →
        web này đọc dữ liệu và hiển thị.

        Web không tạo khoản thu và không
        tự ghi nhận ai đã đóng.

      </div>

      <div class="toolbar-actions">

        <button
          class="secondary-btn"
          id="syncNow"
        >
          Đồng bộ ngay
        </button>

        <button
          class="secondary-btn"
          id="exportAll"
        >
          Xuất toàn bộ CSV
        </button>

      </div>

    </div>
  `;

  $("#mobileDeviceSetting").onclick =
    () => {
      applyDeviceMode("mobile");
      showSettings();
      toast(
        "Đã tối ưu giao diện cho điện thoại"
      );
    };

  $("#desktopDeviceSetting").onclick =
    () => {
      applyDeviceMode("desktop");
      showSettings();
      toast(
        "Đã giữ giao diện máy tính"
      );
    };

  $("#darkSetting").onchange =
    e =>
      applyTheme(
        e.target.checked
          ? "dark"
          : "light"
      );

  $("#compactSetting").onchange =
    e => {
      state.compact =
        e.target.checked;

      document.body.classList.toggle(
        "compact",
        state.compact
      );

      localStorage.setItem(
        "compact",
        state.compact
          ? "1"
          : "0"
      );
    };

  $("#notificationSetting").onchange =
    e => {
      state.notifications =
        e.target.checked;

      localStorage.setItem(
        "notifications",
        state.notifications
          ? "1"
          : "0"
      );

      notificationPanel.hidden =
        !state.notifications;
    };

  $("#saveApiUrl").onclick =
    async () => {
      state.apiBaseUrl =
        $("#apiBaseUrl")
          .value
          .trim()
          .replace(/\/$/, "");

      localStorage.setItem(
        "classFundApiUrl",
        state.apiBaseUrl
      );

      toast(
        state.apiBaseUrl
          ? "Đã lưu URL backend"
          : "Đã chuyển sang cùng domain"
      );

      await refreshFromAPI();
    };

  $("#syncNow").onclick =
    () => refreshFromAPI();

  $("#exportAll").onclick =
    () => exportCSV("all");

  scrollTop();
}

/* =========================================================
   MODAL
========================================================= */

function openStudentModal(code) {
  const student =
    students.find(
      item =>
        String(item.code) ===
        String(code)
    );

  if (!student) {
    return;
  }

  const payments =
    Object.entries(
      state.events
    )
      .map(
        ([name]) => {
          const payment =
            getPayment(
              student.code,
              name
            );

          return `
            <div class="detail-row">

              <span>
                ${esc(name)}
              </span>

              <b>

                <span
                  class="badge ${statusClass(
                    payment.status
                  )}"
                >
                  ${statusLabel(
                    payment.status
                  )}
                </span>

                ${
                  payment.status === "paid"
                    ? money(
                        payment.amount
                      )
                    : ""
                }

                ${
                  payment.status === "paid"
                    ? " • " +
                      esc(
                        payment.paidAt ||
                          "—"
                      )
                    : ""
                }

              </b>

            </div>
          `;
        }
      )
      .join("");

  openModal(`
    <div class="modal-head">

      <div>
        <h2>
          Chi tiết thành viên
        </h2>

        <p>
          Hồ sơ và lịch sử đóng tiền
          theo sự kiện
        </p>
      </div>

      <button
        class="close-btn"
        data-close
      >
        ×
      </button>

    </div>

    <div class="detail-profile">

      <div class="detail-avatar">
        ${initials(student.name)}
      </div>

      <div>

        <strong>
          ${esc(student.name)}
        </strong>

        <small>
          Mã sinh viên:
          ${esc(student.code)}
        </small>

      </div>

    </div>

    <div class="detail-list">

      <div class="detail-row">
        <span>STT</span>
        <b>${student.id}</b>
      </div>

      <div class="detail-row">
        <span>Mã sinh viên</span>
        <b>${esc(student.code)}</b>
      </div>

      ${
        payments ||
        `
          <div class="empty-state">
            Chưa có sự kiện nào.
          </div>
        `
      }

    </div>

    <div class="modal-actions">

      <button
        class="secondary-btn"
        data-close
      >
        Đóng
      </button>

    </div>
  `);
}

function openModal(inner) {
  modalRoot.innerHTML = `
    <div
      class="modal-backdrop"
      data-backdrop
    >
      <div class="modal">
        ${inner}
      </div>
    </div>
  `;

  $(".modal-backdrop")
    .addEventListener(
      "click",
      e => {
        if (
          e.target.matches(
            "[data-backdrop]"
          )
        ) {
          closeModal();
        }
      }
    );

  $$("[data-close]")
    .forEach(button => {
      button.onclick =
        closeModal;
    });
}

function closeModal() {
  modalRoot.innerHTML = "";
}

/* =========================================================
   NOTIFICATIONS
========================================================= */

function updateNotificationPanel() {
  if (!notificationPanel) {
    return;
  }

  const entries =
    Object.entries(
      state.events
    );

  notificationPanel.innerHTML = `
    <h3>Thông báo</h3>

    ${
      entries.length
        ? entries
            .slice(0, 4)
            .map(
              ([name, event]) => {
                const p =
                  eventProgress(name);

                return `
                  <div class="notification-item">

                    <b>
                      ${esc(name)}
                    </b>

                    <small>
                      ${
                        p.completed
                          ? "Đã đủ 100% • Hoàn thành"
                          : `${p.paid}/${p.total} người đã đóng • Hạn ${esc(
                              event.deadline
                            )}`
                      }
                    </small>

                  </div>
                `;
              }
            )
            .join("")
        : `
          <div class="notification-item">

            <b>
              Chưa có sự kiện
            </b>

            <small>
              Web đang chờ app thủ quỹ
              tạo khoản thu.
            </small>

          </div>
        `
    }
  `;
}

/* =========================================================
   CSV
========================================================= */

function csvEscape(value) {
  return `"${String(
    value ?? ""
  ).replace(/"/g, '""')}"`;
}

function downloadCSV(name, rows) {
  if (!rows.length) {
    toast(
      "Không có dữ liệu để xuất"
    );

    return;
  }

  const csv =
    "\uFEFF" +
    rows
      .map(row =>
        row
          .map(csvEscape)
          .join(",")
      )
      .join("\n");

  const blob =
    new Blob(
      [csv],
      {
        type:
          "text/csv;charset=utf-8"
      }
    );

  const url =
    URL.createObjectURL(
      blob
    );

  const a =
    document.createElement(
      "a"
    );

  a.href = url;
  a.download =
    name + ".csv";

  a.click();

  setTimeout(
    () =>
      URL.revokeObjectURL(
        url
      ),
    500
  );
}

function slugify(value) {
  return (
    normalizeText(value)
      .replace(
        /[^a-z0-9]+/g,
        "-"
      )
      .replace(
        /^-+|-+$/g,
        ""
      ) ||
    "su-kien"
  );
}

function exportCSV(
  type,
  eventName = null
) {
  if (type === "members") {
    const rows = [
      [
        "STT",
        "Họ tên",
        "Mã SV",
        "Sự kiện",
        "Số tiền",
        "Trạng thái",
        "Thời gian"
      ]
    ];

    students.forEach(
      (student, index) => {
        const payment =
          getPayment(
            student.code
          );

        rows.push([
          index + 1,
          student.name,
          student.code,
          state.currentEvent || "",
          state.currentEvent
            ? payment.amount
            : 0,
          state.currentEvent
            ? statusLabel(
                payment.status
              )
            : "—",
          state.currentEvent
            ? payment.paidAt
            : "—"
        ]);
      }
    );

    downloadCSV(
      "thanh-vien-" +
        slugify(
          state.currentEvent ||
            "chua-co-su-kien"
        ),
      rows
    );

  } else if (
    type === "payments" ||
    type === "all"
  ) {
    const rows = [
      [
        "STT",
        "Họ tên",
        "Mã SV",
        "Khoản thu",
        "Số tiền",
        "Trạng thái",
        "Thời gian"
      ]
    ];

    students.forEach(
      (student, index) => {
        Object.entries(
          state.events
        ).forEach(
          ([eventName]) => {
            const payment =
              getPayment(
                student.code,
                eventName
              );

            rows.push([
              index + 1,
              student.name,
              student.code,
              eventName,
              payment.amount,
              statusLabel(
                payment.status
              ),
              payment.paidAt
            ]);
          }
        );
      }
    );

    downloadCSV(
      "quy-lop-ky-thuat-co-dien-tu-k52-su-kien",
      rows
    );

  } else if (
    type === "event"
  ) {
    const event =
      getEvent(eventName);

    if (
      !event ||
      !state.events[eventName]
    ) {
      toast(
        "Không tìm thấy sự kiện"
      );

      return;
    }

    const rows = [
      [
        "STT",
        "Họ tên",
        "Mã SV",
        "Khoản thu",
        "Số tiền",
        "Trạng thái",
        "Thời gian"
      ]
    ];

    students.forEach(
      (student, index) => {
        const payment =
          getPayment(
            student.code,
            eventName
          );

        rows.push([
          index + 1,
          student.name,
          student.code,
          eventName,
          event.amount,
          statusLabel(
            payment.status
          ),
          payment.paidAt
        ]);
      }
    );

    downloadCSV(
      "su-kien-" +
        slugify(eventName),
      rows
    );

  } else if (
    type === "transactions"
  ) {
    downloadCSV(
      "cap-nhat-dong-tien",
      [
        [
          "Tên",
          "Sự kiện",
          "Mã SV",
          "Số tiền",
          "Thời gian"
        ],
        ...getEventTransactions()
          .map(item => [
            item.name,
            item.description,
            item.code,
            item.amount,
            item.time
          ])
      ]
    );

  } else if (
    type === "report"
  ) {
    downloadCSV(
      "bao-cao-su-kien",
      [
        [
          "Khoản thu",
          "Đã đóng",
          "Tổng",
          "Tỷ lệ",
          "Trạng thái"
        ],

        ...Object.entries(
          state.events
        ).map(
          ([name]) => {
            const p =
              eventProgress(
                name
              );

            return [
              name,
              p.paid,
              p.total,
              p.pct + "%",
              p.completed
                ? "Đã hoàn thành"
                : "Đang mở"
            ];
          }
        )
      ]
    );
  }

  toast(
    "Đã xuất file CSV"
  );
}

/* =========================================================
   REFRESH CURRENT PAGE
========================================================= */

function refreshCurrentPage() {
  ({
    Dashboard: showDashboard,
    "Khoản thu": showPayments,
    "Thành viên": showMembers,
    "Giao dịch": showTransactions,
    "Báo cáo": showReports,
    "Cài đặt": showSettings
  }[state.page] || showDashboard)();
}

/* =========================================================
   STARTUP
========================================================= */

function startPolling() {
  if (
    window.__classFundPoll
  ) {
    clearInterval(
      window.__classFundPoll
    );
  }

  window.__classFundPoll =
    setInterval(
      () =>
        refreshFromAPI({
          silent: true
        }),
      API_POLL_MS
    );
}

function showDashboard() {
  setHeader(
    "Tổng quan quỹ lớp",
    "Năm học 2026–2027"
  );

  renderDashboard();

  scrollTop();
}

/* =========================================================
   INIT
========================================================= */

updateNotificationPanel();

showDashboard();

/*
 * Đồng bộ ngay khi mở web.
 */
refreshFromAPI({
  silent: true
});

/*
 * Tự động đồng bộ mỗi 15 giây.
 */
startPolling();

/*
 * Hỏi thiết bị sau khi giao diện đã load.
 */
setTimeout(
  askDeviceMode,
  120
);
