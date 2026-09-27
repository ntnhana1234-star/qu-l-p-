/* =========================================================
   ELEMENTS
========================================================= */

const sidebar = document.getElementById("sidebar");
const mobileMenu = document.getElementById("mobileMenu");
const themeToggle = document.getElementById("themeToggle");

const content = document.querySelector(".content");

let originalDashboard = "";

if (content) {
    originalDashboard = content.innerHTML;
}


/* =========================================================
   DATA DEMO
========================================================= */

const events = [
    {
        name: "Áo lớp 2026",
        deadline: "30/09/2026",
        amount: 120000,
        paid: 47,
        total: 80
    },
    {
        name: "Dã ngoại tháng 10",
        deadline: "05/10/2026",
        amount: 250000,
        paid: 35,
        total: 80
    },
    {
        name: "Quỹ lớp tháng 9",
        deadline: "30/09/2026",
        amount: 50000,
        paid: 80,
        total: 80
    }
];


const students = [
    {
        name: "Nguyễn Văn An",
        id: "A1M001",
        amount: 120000,
        status: "paid",
        time: "27/09/2026 • 19:31"
    },
    {
        name: "Trần Minh Đức",
        id: "A1M002",
        amount: 120000,
        status: "paid",
        time: "27/09/2026 • 19:12"
    },
    {
        name: "Lê Thành Nam",
        id: "A1M003",
        amount: 120000,
        status: "unpaid",
        time: "-"
    },
    {
        name: "Phạm Hoàng Long",
        id: "A1M004",
        amount: 120000,
        status: "paid",
        time: "27/09/2026 • 18:58"
    },
    {
        name: "Nguyễn Thị Mai",
        id: "A1M005",
        amount: 120000,
        status: "unpaid",
        time: "-"
    },
    {
        name: "Võ Minh Khôi",
        id: "A1M006",
        amount: 120000,
        status: "paid",
        time: "27/09/2026 • 18:40"
    },
    {
        name: "Đặng Gia Bảo",
        id: "A1M007",
        amount: 120000,
        status: "pending",
        time: "27/09/2026 • 18:32"
    }
];


const transactions = [
    {
        name: "Nguyễn Văn An",
        description: "Áo lớp 2026",
        amount: 120000,
        type: "income",
        time: "27/09/2026 • 19:31"
    },
    {
        name: "Trần Minh Đức",
        description: "Dã ngoại tháng 10",
        amount: 250000,
        type: "income",
        time: "27/09/2026 • 19:12"
    },
    {
        name: "Phạm Hoàng Long",
        description: "Quỹ lớp tháng 9",
        amount: 50000,
        type: "income",
        time: "27/09/2026 • 18:58"
    },
    {
        name: "Quỹ lớp 12A1",
        description: "Mua dụng cụ lớp",
        amount: 350000,
        type: "expense",
        time: "26/09/2026 • 16:20"
    }
];


/* =========================================================
   HELPER
========================================================= */

function money(value) {
    return value.toLocaleString("vi-VN") + "đ";
}


function statusBadge(status) {

    if (status === "paid") {
        return `<span class="badge paid">Đã đóng</span>`;
    }

    if (status === "unpaid") {
        return `<span class="badge unpaid">Chưa đóng</span>`;
    }

    return `<span class="badge pending">Chờ xử lý</span>`;
}


/* =========================================================
   MOBILE MENU
========================================================= */

mobileMenu?.addEventListener("click", () => {

    sidebar?.classList.toggle("open");

});


/* =========================================================
   THEME
========================================================= */

function applyTheme(theme) {

    document.body.classList.toggle(
        "dark",
        theme === "dark"
    );

    if (themeToggle) {

        themeToggle.textContent =
            theme === "dark"
                ? "☀"
                : "☾";

        themeToggle.setAttribute(
            "title",
            theme === "dark"
                ? "Chuyển sang giao diện sáng"
                : "Chuyển sang giao diện tối"
        );
    }

    localStorage.setItem(
        "theme",
        theme
    );
}


const savedTheme =
    localStorage.getItem("theme") || "light";

applyTheme(savedTheme);


themeToggle?.addEventListener("click", () => {

    const newTheme =
        document.body.classList.contains("dark")
            ? "light"
            : "dark";

    applyTheme(newTheme);

});


/* =========================================================
   DASHBOARD
========================================================= */

function setupDashboard() {

    const searchInput =
        document.getElementById("searchInput");

    const statusFilter =
        document.getElementById("statusFilter");

    const rows = [
        ...document.querySelectorAll(
            "#studentTable tbody tr"
        )
    ];


    function filterStudents() {

        const keyword =
            searchInput?.value
                .trim()
                .toLowerCase() || "";

        const selectedStatus =
            statusFilter?.value || "all";


        rows.forEach(row => {

            const name =
                row.dataset.name
                    ?.toLowerCase() || "";

            const status =
                row.dataset.status || "";


            const nameMatch =
                name.includes(keyword);

            const statusMatch =
                selectedStatus === "all" ||
                selectedStatus === status;


            row.hidden =
                !(nameMatch && statusMatch);

        });

    }


    searchInput?.addEventListener(
        "input",
        filterStudents
    );


    statusFilter?.addEventListener(
        "change",
        filterStudents
    );


    document
        .querySelectorAll(".event")
        .forEach(event => {

            event.addEventListener(
                "click",
                () => {

                    showMembers();

                }
            );

        });

}


/* =========================================================
   DASHBOARD PAGE
========================================================= */

function showDashboard() {

    if (!content) return;

    content.innerHTML =
        originalDashboard;

    setupDashboard();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   KHOẢN THU
========================================================= */

function showPayments() {

    if (!content) return;

    content.innerHTML = `

        <div class="page-title">

            <div>
                <h1>Khoản thu</h1>

                <p>
                    Quản lý các khoản tiền cần thu
                    của lớp
                </p>
            </div>

            <button
                class="primary-btn"
                id="addEventBtn"
            >
                + Tạo khoản thu
            </button>

        </div>


        <div class="stats">

            <div class="stat-card">

                <div class="stat-top">
                    <span>KHOẢN THU</span>
                    <b>₫</b>
                </div>

                <strong>3</strong>

                <small>
                    Khoản thu đang mở
                </small>

            </div>


            <div class="stat-card">

                <div class="stat-top">
                    <span>ĐÃ THU</span>
                    <b>✓</b>
                </div>

                <strong class="income">
                    2.450.000đ
                </strong>

                <small>
                    Tổng tiền đã nhận
                </small>

            </div>


            <div class="stat-card">

                <div class="stat-top">
                    <span>CHƯA THU</span>
                    <b>!</b>
                </div>

                <strong class="expense">
                    2.280.000đ
                </strong>

                <small>
                    Cần thu thêm
                </small>

            </div>

        </div>


        <div class="card">

            <div class="card-head">

                <div>
                    <h2>Danh sách khoản thu</h2>

                    <p>
                        Các khoản thu hiện tại
                    </p>
                </div>

            </div>


            <div class="payment-events">

                ${events.map((event, index) => {

                    const percent =
                        Math.round(
                            event.paid /
                            event.total *
                            100
                        );

                    return `

                        <div class="payment-event">

                            <div class="payment-event-icon">
                                ${index + 1}
                            </div>


                            <div class="payment-event-info">

                                <h3>
                                    ${event.name}
                                </h3>

                                <p>
                                    Hạn đóng:
                                    ${event.deadline}
                                </p>

                                <div class="progress">

                                    <i
                                        style="
                                            width:${percent}%;
                                        "
                                    ></i>

                                </div>

                                <small>
                                    ${event.paid}/${event.total}
                                    học sinh đã đóng
                                </small>

                            </div>


                            <div class="payment-event-money">

                                <strong>
                                    ${money(event.amount)}
                                </strong>

                                <span>
                                    ${percent}%
                                </span>

                            </div>

                        </div>

                    `;

                }).join("")}

            </div>

        </div>

    `;


    document
        .getElementById("addEventBtn")
        ?.addEventListener(
            "click",
            () => {

                alert(
                    "Chức năng tạo khoản thu sẽ được kết nối với backend sau."
                );

            }
        );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   THÀNH VIÊN
========================================================= */

function showMembers() {

    if (!content) return;

    const totalStudents = 80;
    const paidStudents = 47;
    const unpaidStudents = 33;


    content.innerHTML = `

        <div class="page-title">

            <div>

                <h1>Thành viên</h1>

                <p>
                    Danh sách học sinh trong lớp
                </p>

            </div>


            <div class="member-count">
                ${totalStudents} thành viên
            </div>

        </div>


        <div class="stats">

            <div class="stat-card">

                <div class="stat-top">
                    <span>TỔNG HỌC SINH</span>
                    <b>👥</b>
                </div>

                <strong>
                    ${totalStudents}
                </strong>

                <small>
                    Thành viên trong lớp
                </small>

            </div>


            <div class="stat-card">

                <div class="stat-top">
                    <span>ĐÃ ĐÓNG</span>
                    <b>✓</b>
                </div>

                <strong class="income">
                    ${paidStudents}
                </strong>

                <small>
                    Đã hoàn thành khoản thu
                </small>

            </div>


            <div class="stat-card">

                <div class="stat-top">
                    <span>CHƯA ĐÓNG</span>
                    <b>!</b>
                </div>

                <strong class="expense">
                    ${unpaidStudents}
                </strong>

                <small>
                    Cần nhắc đóng tiền
                </small>

            </div>

        </div>


        <div class="card">

            <div class="card-head member-toolbar">

                <div>

                    <h2>
                        Danh sách thành viên
                    </h2>

                    <p>
                        Thông tin thanh toán
                    </p>

                </div>


                <div class="tools">

                    <div class="search">

                        <span>⌕</span>

                        <input
                            id="memberSearch"
                            type="text"
                            placeholder="Tìm học sinh..."
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
                            Chờ xử lý
                        </option>

                    </select>

                </div>

            </div>


            <div class="member-grid">

                ${students.map(student => `

                    <div
                        class="member-card"
                        data-name="${student.name}"
                        data-status="${student.status}"
                    >

                        <div class="student-avatar">

                            ${student.name.charAt(0)}

                        </div>


                        <div class="member-info">

                            <strong>
                                ${student.name}
                            </strong>

                            <small>
                                Mã: ${student.id}
                            </small>

                        </div>


                        <div class="member-payment">

                            ${statusBadge(student.status)}

                            <small>
                                ${student.time}
                            </small>

                        </div>

                    </div>

                `).join("")}

            </div>

        </div>

    `;


    const search =
        document.getElementById(
            "memberSearch"
        );

    const filter =
        document.getElementById(
            "memberStatus"
        );

    const cards = [
        ...document.querySelectorAll(
            ".member-card"
        )
    ];


    function filterMembers() {

        const keyword =
            search.value
                .trim()
                .toLowerCase();

        const selected =
            filter.value;


        cards.forEach(card => {

            const name =
                card.dataset.name
                    .toLowerCase();

            const status =
                card.dataset.status;


            const nameMatch =
                name.includes(keyword);

            const statusMatch =
                selected === "all" ||
                selected === status;


            card.hidden =
                !(nameMatch && statusMatch);

        });

    }


    search.addEventListener(
        "input",
        filterMembers
    );

    filter.addEventListener(
        "change",
        filterMembers
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   GIAO DỊCH
========================================================= */

function showTransactions() {

    if (!content) return;

    const income =
        transactions
            .filter(t => t.type === "income")
            .reduce(
                (sum, t) => sum + t.amount,
                0
            );


    const expense =
        transactions
            .filter(t => t.type === "expense")
            .reduce(
                (sum, t) => sum + t.amount,
                0
            );


    content.innerHTML = `

        <div class="page-title">

            <div>

                <h1>Giao dịch</h1>

                <p>
                    Lịch sử tiền vào và tiền ra
                </p>

            </div>

        </div>


        <div class="stats">

            <div class="stat-card">

                <div class="stat-top">
                    <span>TIỀN VÀO</span>
                    <b>↓</b>
                </div>

                <strong class="income">
                    ${money(income)}
                </strong>

                <small>
                    Các khoản thu
                </small>

            </div>


            <div class="stat-card">

                <div class="stat-top">
                    <span>TIỀN RA</span>
                    <b>↑</b>
                </div>

                <strong class="expense">
                    ${money(expense)}
                </strong>

                <small>
                    Các khoản chi
                </small>

            </div>


            <div class="stat-card">

                <div class="stat-top">
                    <span>GIAO DỊCH</span>
                    <b>#</b>
                </div>

                <strong>
                    ${transactions.length}
                </strong>

                <small>
                    Giao dịch được ghi nhận
                </small>

            </div>

        </div>


        <div class="card">

            <div class="card-head">

                <div>

                    <h2>
                        Lịch sử giao dịch
                    </h2>

                    <p>
                        Tất cả giao dịch của quỹ
                    </p>

                </div>


                <select id="transactionFilter">

                    <option value="all">
                        Tất cả
                    </option>

                    <option value="income">
                        Tiền vào
                    </option>

                    <option value="expense">
                        Tiền ra
                    </option>

                </select>

            </div>


            <div class="transaction-list">

                ${transactions.map(transaction => `

                    <div
                        class="transaction-row"
                        data-type="${transaction.type}"
                    >

                        <div
                            class="
                                transaction-icon
                                ${transaction.type}
                            "
                        >

                            ${
                                transaction.type === "income"
                                    ? "↓"
                                    : "↑"
                            }

                        </div>


                        <div class="transaction-detail">

                            <strong>
                                ${transaction.name}
                            </strong>

                            <small>
                                ${transaction.description}
                            </small>

                        </div>


                        <div class="transaction-time">

                            ${transaction.time}

                        </div>


                        <strong
                            class="
                                transaction-amount
                                ${transaction.type}
                            "
                        >

                            ${
                                transaction.type === "income"
                                    ? "+"
                                    : "-"
                            }${money(transaction.amount)}

                        </strong>

                    </div>

                `).join("")}

            </div>

        </div>

    `;


    const filter =
        document.getElementById(
            "transactionFilter"
        );


    filter.addEventListener(
        "change",
        () => {

            const value =
                filter.value;


            document
                .querySelectorAll(
                    ".transaction-row"
                )
                .forEach(row => {

                    row.hidden =
                        value !== "all" &&
                        row.dataset.type !== value;

                });

        }
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   BÁO CÁO
========================================================= */

function showReports() {

    if (!content) return;

    const balance = 4820000;
    const totalIncome = 2450000;
    const totalExpense = 350000;


    content.innerHTML = `

        <div class="page-title">

            <div>

                <h1>Báo cáo</h1>

                <p>
                    Tổng quan tình hình tài chính
                    của lớp
                </p>

            </div>

        </div>


        <div class="stats">

            <div class="stat-card">

                <div class="stat-top">
                    <span>SỐ DƯ HIỆN TẠI</span>
                    <b>₫</b>
                </div>

                <strong>
                    ${money(balance)}
                </strong>

                <small>
                    Số tiền hiện có
                </small>

            </div>


            <div class="stat-card">

                <div class="stat-top">
                    <span>TỔNG THU</span>
                    <b>↓</b>
                </div>

                <strong class="income">
                    ${money(totalIncome)}
                </strong>

                <small>
                    Tổng tiền đã thu
                </small>

            </div>


            <div class="stat-card">

                <div class="stat-top">
                    <span>TỔNG CHI</span>
                    <b>↑</b>
                </div>

                <strong class="expense">
                    ${money(totalExpense)}
                </strong>

                <small>
                    Tổng tiền đã chi
                </small>

            </div>

        </div>


        <div class="report-grid">

            <div class="card">

                <div class="card-head">

                    <div>

                        <h2>
                            Tình hình thu tiền
                        </h2>

                        <p>
                            Tiến độ các khoản thu
                        </p>

                    </div>

                </div>


                <div class="report-items">

                    ${events.map(event => {

                        const percent =
                            Math.round(
                                event.paid /
                                event.total *
                                100
                            );

                        return `

                            <div class="report-item">

                                <div class="report-item-top">

                                    <strong>
                                        ${event.name}
                                    </strong>

                                    <span>
                                        ${percent}%
                                    </span>

                                </div>


                                <div class="progress">

                                    <i
                                        style="
                                            width:${percent}%;
                                        "
                                    ></i>

                                </div>


                                <small>
                                    ${event.paid}/${event.total}
                                    học sinh
                                </small>

                            </div>

                        `;

                    }).join("")}

                </div>

            </div>


            <div class="card">

                <div class="card-head">

                    <div>

                        <h2>
                            Tóm tắt tài chính
                        </h2>

                        <p>
                            Tháng 09/2026
                        </p>

                    </div>

                </div>


                <div class="report-summary">

                    <div>

                        <span>
                            Tiền vào
                        </span>

                        <strong class="income">
                            +${money(totalIncome)}
                        </strong>

                    </div>


                    <div>

                        <span>
                            Tiền ra
                        </span>

                        <strong class="expense">
                            -${money(totalExpense)}
                        </strong>

                    </div>


                    <div>

                        <span>
                            Số dư
                        </span>

                        <strong>
                            ${money(balance)}
                        </strong>

                    </div>


                    <div>

                        <span>
                            Tỷ lệ đã thu
                        </span>

                        <strong>
                            58.75%
                        </strong>

                    </div>

                </div>

            </div>

        </div>

    `;


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   NAVIGATION
========================================================= */

function navigate(page) {

    switch (page) {

        case "Dashboard":
            showDashboard();
            break;

        case "Khoản thu":
            showPayments();
            break;

        case "Thành viên":
            showMembers();
            break;

        case "Giao dịch":
            showTransactions();
            break;

        case "Báo cáo":
            showReports();
            break;

        case "Cài đặt":

            alert(
                "Bạn có thể đổi giao diện bằng nút ☀ / ☾ ở góc trên."
            );

            break;

    }

}


/* =========================================================
   SIDEBAR MENU
========================================================= */

document
    .querySelectorAll(".menu-item")
    .forEach(item => {

        item.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".menu-item")
                    .forEach(i => {
                        i.classList.remove("active");
                    });


                item.classList.add("active");


                const text =
                    item
                        .querySelector(
                            "span:last-child"
                        )
                        ?.textContent
                        .trim();


                navigate(text);


                sidebar?.classList.remove("open");

            }
        );

    });


/* =========================================================
   START
========================================================= */

setupDashboard();