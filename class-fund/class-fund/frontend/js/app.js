const sidebar = document.getElementById("sidebar");
const mobileMenu = document.getElementById("mobileMenu");
const themeToggle = document.getElementById("themeToggle");
const searchInput = document.getElementById("searchInput");
const statusFilter = document.getElementById("statusFilter");
const memberTitle = document.getElementById("memberTitle");
const rows = [...document.querySelectorAll("#studentTable tr")];

mobileMenu?.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

document.querySelectorAll(".menu-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".menu-item").forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    sidebar.classList.remove("open");
  });
});

function applyTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  themeToggle.textContent = theme === "dark" ? "☀" : "☾";
  localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
  applyTheme(nextTheme);
});

function filterStudents() {
  const keyword = searchInput.value.trim().toLowerCase();
  const selectedStatus = statusFilter.value;

  rows.forEach(row => {
    const name = row.dataset.name || "";
    const status = row.dataset.status || "";
    const nameMatch = name.includes(keyword);
    const statusMatch = selectedStatus === "all" || status === selectedStatus;
    row.hidden = !(nameMatch && statusMatch);
  });
}

searchInput.addEventListener("input", filterStudents);
statusFilter.addEventListener("change", filterStudents);

document.querySelectorAll(".event").forEach(event => {
  event.addEventListener("click", () => {
    memberTitle.textContent = `Danh sách • ${event.dataset.event}`;
    document.querySelector(".table-head").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
