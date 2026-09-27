const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

const sidebar = $("#sidebar");
const mobileMenu = $("#mobileMenu");
const themeToggle = $("#themeToggle");
const content = $("#content");
const pageHeading = $("#pageHeading");
const pageDate = $("#pageDate");
const modalRoot = $("#modalRoot");
const notificationButton = $("#notificationButton");
const notificationPanel = $("#notificationPanel");

const students = [
  { "id": 1, "code": "B2608082", "name": "TRẦN HOÀI AN" },
  { "id": 2, "code": "B2608083", "name": "ĐINH NHẬT ANH" },
  { "id": 3, "code": "B2608084", "name": "LÊ ĐỨC ANH" },
  { "id": 4, "code": "B2608085", "name": "PHẠM THỊ HUỲNH ANH" },
  { "id": 5, "code": "B2608086", "name": "LÊ MINH ÂU" },
  { "id": 6, "code": "B2608087", "name": "DƯƠNG GIA BẢO" },
  { "id": 7, "code": "B2608088", "name": "LÊ HOÀNG QUỐC BẢO" },
  { "id": 8, "code": "B2608089", "name": "PHẠM GIA BẢO" },
  { "id": 9, "code": "B2608090", "name": "NGUYỄN NHỰT BĂNG" },
  { "id": 10, "code": "B2608091", "name": "MAI CHÍ BẰNG" },
  { "id": 11, "code": "B2608092", "name": "NGUYỄN THẾ DĨ" },
  { "id": 12, "code": "B2608094", "name": "ĐỖ MINH ĐẠT" },
  { "id": 13, "code": "B2608095", "name": "LƯU THANH ĐẠT" },
  { "id": 14, "code": "B2608096", "name": "PHẠM GIA ĐẠT" },
  { "id": 15, "code": "B2608097", "name": "LÊ HOÀNG GIA" },
  { "id": 16, "code": "B2608098", "name": "PHẠM VĂN GIỎI" },
  { "id": 17, "code": "B2608100", "name": "PHAN CHÍ HẢI" },
  { "id": 18, "code": "B2608101", "name": "NGÔ TRUNG HẬU" },
  { "id": 19, "code": "B2608103", "name": "LÊ MINH HIỂN" },
  { "id": 20, "code": "B2608104", "name": "NGUYỄN MINH HIỂN" },
  { "id": 21, "code": "B2608105", "name": "NGUYỄN PHƯỚC HIỆP" },
  { "id": 22, "code": "B2608102", "name": "NGUYỄN HOÀNG TRUNG HIẾU" },
  { "id": 23, "code": "B2608106", "name": "LÊ THỊ XUÂN HOA" },
  { "id": 24, "code": "B2608107", "name": "NGUYỄN QUỐC HUY" },
  { "id": 25, "code": "B2608108", "name": "ĐINH QUANG HƯỞNG" },
  { "id": 26, "code": "B2608109", "name": "TRỊNH TẤN HỮU" },
  { "id": 27, "code": "B2608110", "name": "NGUYỄN VŨ KHA" },
  { "id": 28, "code": "B2608111", "name": "THÁI NGỌC MINH KHA" },
  { "id": 29, "code": "B2608112", "name": "NGUYỄN MINH KHANG" },
  { "id": 30, "code": "B2608113", "name": "NGUYỄN TUẤN KHANG" },
  { "id": 31, "code": "B2608114", "name": "PHAN HỮU GIA KHÁNH" },
  { "id": 32, "code": "B2608115", "name": "NGUYỄN TRỌNG KHÔI" },
  { "id": 33, "code": "B2608116", "name": "TRẦN QUỐC KIỆT" },
  { "id": 34, "code": "B2608117", "name": "TRƯƠNG TRUNG TUẤN KIỆT" },
  { "id": 35, "code": "B2608118", "name": "LÊ NHẬT LÂM" },
  { "id": 36, "code": "B2608119", "name": "PHẠM DƯƠNG BÍCH LOAN" },
  { "id": 37, "code": "B2608120", "name": "NGÔ THIỆN LỘC" },
  { "id": 38, "code": "B2608121", "name": "NGUYỄN TẤN LỘC" },
  { "id": 39, "code": "B2608122", "name": "THÁI PHƯỚC LỘC" },
  { "id": 40, "code": "B2608123", "name": "NGUYỄN THÀNH LỢI" },
  { "id": 41, "code": "B2608124", "name": "NGUYỄN MINH LƯƠNG" },
  { "id": 42, "code": "B2608125", "name": "PHAN HOÀNG ĐỨC MINH" },
  { "id": 43, "code": "B2608126", "name": "THÁI NGÂN" },
  { "id": 44, "code": "B2608129", "name": "TÔ VĂN HỮU NGHỊ" },
  { "id": 45, "code": "B2608128", "name": "NGUYỄN TRỌNG NGHĨA" },
  { "id": 46, "code": "B2608127", "name": "VÕ THANH NGHIÊM" },
  { "id": 47, "code": "B2608130", "name": "NGUYỄN THANH NHÀN" },
  { "id": 48, "code": "B2608131", "name": "NGUYỄN HOÀNG NHÂN" },
  { "id": 49, "code": "B2608132", "name": "DƯƠNG NGỌC NHI" },
  { "id": 50, "code": "B2608133", "name": "HỒ TRẦN PHÁT" },
  { "id": 51, "code": "B2608134", "name": "HỒ VỦ PHONG" },
  { "id": 52, "code": "B2608135", "name": "HUỲNH HOÀNG PHONG" },
  { "id": 53, "code": "B2608136", "name": "LÊ AN PHÚ" },
  { "id": 54, "code": "B2608137", "name": "NGUYỄN GIA PHÚ" },
  { "id": 55, "code": "B2608138", "name": "LÊ HOÀNG QUÂN" },
  { "id": 56, "code": "B2608139", "name": "LÊ PHÚ QUÝ" },
  { "id": 57, "code": "B2608140", "name": "PHẠM THÁI SƠN" },
  { "id": 58, "code": "B2608141", "name": "NGUYỄN VĂN TÀI" },
  { "id": 59, "code": "B2608143", "name": "LÂM MINH THÁI" },
  { "id": 60, "code": "B2608142", "name": "LÊ CHÍ THANH" },
  { "id": 61, "code": "B2608144", "name": "LỮ TUẤN THÀNH" },
  { "id": 62, "code": "B2608145", "name": "PHAN VĂN ĐÔNG THÀNH" },
  { "id": 63, "code": "B2608146", "name": "TRƯƠNG TUẤN THÀNH" },
  { "id": 64, "code": "B2608147", "name": "ĐỖ TRUNG THẬT" },
  { "id": 65, "code": "B2608148", "name": "LÊ ĐỨC THIỆN" },
  { "id": 66, "code": "B2608149", "name": "LÊ MINH THIỆN" },
  { "id": 67, "code": "B2608150", "name": "NGUYỄN CHÍ THIỆN" },
  { "id": 68, "code": "B2608151", "name": "NGUYỄN HOÀNG THIỆN" },
  { "id": 69, "code": "B2608152", "name": "NGUYỄN TRẦN THANH THIỆN" },
  { "id": 70, "code": "B2608153", "name": "CAO NGUYỄN MINH THUẬN" },
  { "id": 71, "code": "B2608154", "name": "LỮ MINH THỨC" },
  { "id": 72, "code": "B2608155", "name": "TRẦN TRUNG TÍN" },
  { "id": 73, "code": "B2608156", "name": "NGUYỄN CHÍ TÌNH" },
  { "id": 74, "code": "B2608157", "name": "HỒ THANH TOÀN" },
  { "id": 75, "code": "B2608158", "name": "LÊ THANH TRỌNG" },
  { "id": 76, "code": "B2608159", "name": "NGUYỄN NGÔ QUANG TRUNG" },
  { "id": 77, "code": "B2608160", "name": "NGUYỄN MINH TRỰC" },
  { "id": 78, "code": "B2608161", "name": "NGUYỄN PHẠM DUY TUẤN" },
  { "id": 79, "code": "B2608162", "name": "VÕ TRẦN ANH TUẤN" },
  { "id": 80, "code": "B2608163", "name": "VÕ TRUNG VIỆT" },
  { "id": 81, "code": "B2608164", "name": "LÊ QUANG VINH" },
  { "id": 82, "code": "B2608165", "name": "NGUYỄN CHÍ VỈNH" },
  { "id": 83, "code": "B2608166", "name": "LƯU CHÍ VỸ" }
];

const events = {
  "Áo lớp 2026": { amount: 120000, deadline: "30/09/2026", paid: 47, total: 83 },
  "Dã ngoại tháng 10": { amount: 250000, deadline: "05/10/2026", paid: 35, total: 83 },
  "Quỹ lớp tháng 9": { amount: 50000, deadline: "30/09/2026", paid: 83, total: 83 }
};

const demoTransactions = [
  {name:"Nguyễn Văn An",description:"Áo lớp 2026",amount:120000,type:"income",time:"27/09/2026 • 19:31"},
  {name:"Trần Minh Đức",description:"Dã ngoại tháng 10",amount:250000,type:"income",time:"27/09/2026 • 19:12"},
  {name:"Phạm Hoàng Long",description:"Quỹ lớp tháng 9",amount:50000,type:"income",time:"27/09/2026 • 18:58"},
  {name:"Quỹ lớp 12A1",description:"Mua dụng cụ lớp",amount:350000,type:"expense",time:"26/09/2026 • 16:20"}
];

const state = {
  page:"Dashboard",
  currentEvent:"Áo lớp 2026",
  currentStatus:"all",
  currentKeyword:"",
  memberView:"table",
  paymentData: loadPaymentData(),
  events: loadEvents(),
  compact: localStorage.getItem("compact") === "1",
  notifications: localStorage.getItem("notifications") !== "0"
};

function loadPaymentData(){
  try { return JSON.parse(localStorage.getItem("paymentData") || "{}") || {}; } catch { return {}; }
}
function savePaymentData(){ localStorage.setItem("paymentData", JSON.stringify(state.paymentData)); }
function loadEvents(){
  try { return {...events,...JSON.parse(localStorage.getItem("events") || "{}")}; } catch { return {...events}; }
}
function saveEvents(){ localStorage.setItem("events", JSON.stringify(state.events)); }
function money(value){ return new Intl.NumberFormat("vi-VN").format(Number(value||0))+"đ"; }
function normalizeText(value){return String(value||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim();}
function initials(name){const w=String(name).trim().split(/\s+/);return w.length===1?w[0].slice(0,2).toUpperCase():(w[0][0]+w[w.length-1][0]).toUpperCase();}
function statusLabel(s){return s==="paid"?"● Đã đóng":s==="pending"?"● Chờ đối soát":"● Chưa đóng";}
function statusClass(s){return ["paid","pending","unpaid"].includes(s)?s:"unpaid";}
function getEvent(name=state.currentEvent){return state.events[name] || events[name] || {amount:0,deadline:"—",paid:0,total:students.length};}
function getPayment(code,eventName=state.currentEvent){
  return state.paymentData?.[code]?.[eventName] || {status:"unpaid",amount:getEvent(eventName).amount,paidAt:"—"};
}
function getCounts(eventName=state.currentEvent){
  return students.reduce((r,s)=>{const st=getPayment(s.code,eventName).status;r[st]=(r[st]||0)+1;return r},{paid:0,unpaid:0,pending:0});
}
function scrollTop(){window.scrollTo({top:0,behavior:"smooth"});}
function toast(message){
  const el=document.createElement("div");el.className="toast";el.textContent=message;document.body.appendChild(el);
  setTimeout(()=>el.remove(),2400);
}
function setHeader(title,subtitle){
  pageHeading.textContent=title;
  pageDate.textContent=subtitle || "27 tháng 9, 2026";
}
function setActive(page){
  $$(".menu-item").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
}
function esc(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));}

/* ---------- theme / mobile ---------- */
function applyTheme(theme){
  document.body.classList.toggle("dark",theme==="dark");
  themeToggle.textContent=theme==="dark"?"☀":"☾";
  themeToggle.title=theme==="dark"?"Chuyển sang giao diện sáng":"Chuyển sang giao diện tối";
  localStorage.setItem("theme",theme);
}
applyTheme(localStorage.getItem("theme")||"light");
if(state.compact) document.body.classList.add("compact");
mobileMenu.addEventListener("click",()=>sidebar.classList.toggle("open"));
themeToggle.addEventListener("click",()=>applyTheme(document.body.classList.contains("dark")?"light":"dark"));
notificationButton.addEventListener("click",()=>notificationPanel.hidden=!notificationPanel.hidden);
document.addEventListener("click",e=>{
  if(!notificationPanel.contains(e.target) && e.target!==notificationButton) notificationPanel.hidden=true;
});

/* ---------- navigation ---------- */
function navigate(page){
  state.page=page; setActive(page); sidebar.classList.remove("open");
  ({Dashboard:showDashboard,"Khoản thu":showPayments,"Thành viên":showMembers,"Giao dịch":showTransactions,"Báo cáo":showReports,"Cài đặt":showSettings}[page]||showDashboard)();
}
$$(".menu-item").forEach(item=>item.addEventListener("click",()=>navigate(item.dataset.page)));

/* ---------- dashboard ---------- */
function dashboardStats(){
  const balance=4820000,totalIncome=2450000,totalExpense=350000;
  const c=getCounts();
  const unpaid=students.reduce((sum,s)=>{const p=getPayment(s.code);return p.status==="unpaid"?sum+Number(p.amount||getEvent().amount):sum},0);
  return {balance,totalIncome,totalExpense,unpaid,pending:c.pending};
}
function renderDashboard(){
  const s=dashboardStats();
  content.innerHTML=`
    <div class="stats">
      <article class="stat-card"><div class="stat-top"><span>SỐ DƯ TÀI KHOẢN</span><b>₫</b></div><strong>${money(s.balance)}</strong><small>Cập nhật lúc 19:45</small></article>
      <article class="stat-card"><div class="stat-top"><span>ĐÃ THU THÁNG NÀY</span><b>↗</b></div><strong>${money(s.totalIncome)}</strong><small>+12% so với tháng trước</small></article>
      <article class="stat-card"><div class="stat-top"><span>KHOẢN CHƯA THU</span><b>!</b></div><strong>${money(s.unpaid)}</strong><small id="dashUnpaid">${getCounts().unpaid} thành viên chưa đóng</small></article>
      <article class="stat-card"><div class="stat-top"><span>GIAO DỊCH CHỜ XỬ LÝ</span><b>?</b></div><strong>${s.pending}</strong><small>Cần thủ quỹ kiểm tra</small></article>
    </div>
    <div class="grid-2">
      <section class="card">
        <div class="card-head"><div><h2>Tài khoản quỹ lớp</h2><p>Thông tin tài khoản ngân hàng</p></div><button class="link-btn" id="bankDetail">Chi tiết</button></div>
        <div class="balance"><span>Số dư khả dụng</span><strong>${money(s.balance)}</strong><div><span>VCB •••• 8821</span><span>● Đã kết nối</span></div></div>
        <div class="info"><span>Ngân hàng</span><b>Vietcombank</b></div><div class="info"><span>Số tài khoản</span><b>••••••8821</b></div><div class="info"><span>Chủ tài khoản</span><b>QUỸ LỚP 12A1</b></div><div class="info"><span>Đồng bộ giao dịch</span><b class="success-text">Đang hoạt động</b></div>
      </section>
      <section class="card">
        <div class="card-head"><div><h2>Khoản thu đang mở</h2><p>Các khoản lớp đang thu</p></div><button class="link-btn" id="allPayments">Xem tất cả</button></div>
        <div class="events">${Object.entries(state.events).map(([name,e])=>{
          const c=getCounts(name), pct=students.length?Math.round(c.paid/students.length*10000)/100:0;
          return `<button class="event ${name===state.currentEvent?"active":""}" data-event="${esc(name)}"><div class="event-head"><div><b>${esc(name)}</b><small>Hạn đóng: ${esc(e.deadline)}</small></div><strong>${money(e.amount)}</strong></div><div class="progress-meta"><span>${c.paid} / ${students.length} người</span><b>${pct}%</b></div><div class="progress"><i style="width:${pct}%"></i></div></button>`;
        }).join("")}</div>
      </section>
    </div>
    <section class="card"><div class="card-head"><div><h2>Giao dịch gần đây</h2><p>Các giao dịch mới nhất của tài khoản quỹ</p></div><button class="link-btn" id="allTransactions">Xem tất cả</button></div><div class="transactions">${renderRecentTransactions()}</div></section>
    <section class="card">
      <div class="card-head table-head"><div><h2>Danh sách thành viên</h2><p>Trạng thái đóng tiền • bấm vào tên để xem chi tiết</p></div><div class="table-tools"><div class="search"><span>⌕</span><input id="dashSearch" type="search" placeholder="Tìm tên hoặc mã SV..."></div><select id="dashStatus"><option value="all">Tất cả</option><option value="paid">Đã đóng</option><option value="unpaid">Chưa đóng</option><option value="pending">Chờ đối soát</option></select></div></div>
      <div class="quick-filters" id="dashFilters">${quickFilterHTML()}</div>
      <div class="table-wrap"><table><thead><tr><th>STT</th><th>Sinh viên</th><th>Mã SV</th><th>Mã thanh toán</th><th>Số tiền</th><th>Trạng thái</th><th>Thời gian</th></tr></thead><tbody id="dashTable"></tbody></table></div>
      <div class="table-footer" id="dashFooter"></div>
    </section>
    <footer>© 2026 Quỹ lớp 12A1 • Giao diện hợp nhất</footer>`;
  $("#bankDetail").onclick=()=>openBankModal();
  $("#allPayments").onclick=()=>navigate("Khoản thu");
  $("#allTransactions").onclick=()=>navigate("Giao dịch");
  $("#dashSearch").addEventListener("input",e=>{state.currentKeyword=e.target.value;renderDashboardTable()});
  $("#dashStatus").addEventListener("change",e=>{state.currentStatus=e.target.value;renderDashboardTable()});
  $$("#dashFilters .filter-btn").forEach(b=>b.onclick=()=>{state.currentStatus=b.dataset.status;$("#dashStatus").value=state.currentStatus;renderDashboardTable()});
  $$(".event").forEach(b=>b.onclick=()=>{state.currentEvent=b.dataset.event;state.currentStatus="all";navigate("Thành viên")});
  renderDashboardTable();
}
function quickFilterHTML(){const c=getCounts();return `<button class="filter-btn ${state.currentStatus==="all"?"active":""}" data-status="all">Tất cả <span>${students.length}</span></button><button class="filter-btn ${state.currentStatus==="paid"?"active":""}" data-status="paid">Đã đóng <span>${c.paid}</span></button><button class="filter-btn ${state.currentStatus==="unpaid"?"active":""}" data-status="unpaid">Chưa đóng <span>${c.unpaid}</span></button><button class="filter-btn ${state.currentStatus==="pending"?"active":""}" data-status="pending">Chờ đối soát <span>${c.pending}</span></button>`}
function filteredStudents(){
  return students.filter(s=>{
    const p=getPayment(s.code);
    const k=normalizeText(state.currentKeyword);
    return (!k||normalizeText(s.name).includes(k)||normalizeText(s.code).includes(k))&&(state.currentStatus==="all"||p.status===state.currentStatus);
  });
}
function studentRows(list){
  return list.map((s,i)=>{const p=getPayment(s.code);return `<tr><td>${String(i+1).padStart(2,"0")}</td><td><div class="student"><span class="student-avatar">${initials(s.name)}</span><div><button class="student-name" data-code="${s.code}">${esc(s.name)}</button><small>Mã SV: ${s.code}</small></div></div></td><td>${s.code}</td><td>${p.status==="unpaid"?"—":s.code}</td><td>${money(p.amount)}</td><td><span class="badge ${statusClass(p.status)}">${statusLabel(p.status)}</span></td><td>${esc(p.paidAt||"—")}</td></tr>`}).join("")}
function renderDashboardTable(){const list=filteredStudents();const t=$("#dashTable");if(!t)return;t.innerHTML=list.length?studentRows(list):`<tr><td colspan="7"><div class="empty-state">Không tìm thấy thành viên phù hợp.</div></td></tr>`;$("#dashFooter").textContent=`Hiển thị ${list.length} / ${students.length} thành viên • Khoản thu: ${state.currentEvent}`;$$(".student-name",t).forEach(b=>b.onclick=()=>openStudentModal(b.dataset.code));}

/* ---------- payments ---------- */
function showPayments(){
  setHeader("Khoản thu","Quản lý các khoản tiền cần thu của lớp");
  content.innerHTML=`<div class="page-title"><div><h1>Khoản thu</h1><p>Quản lý các khoản tiền cần thu của lớp</p></div><div class="toolbar-actions"><button class="secondary-btn" id="exportPayments">Xuất CSV</button></div></div>
  <div class="stats"><div class="stat-card"><div class="stat-top"><span>KHOẢN THU</span><b>₫</b></div><strong>${Object.keys(state.events).length}</strong><small>Khoản thu đang mở</small></div><div class="stat-card"><div class="stat-top"><span>ĐÃ THU</span><b>✓</b></div><strong class="income">${money(2450000)}</strong><small>Tổng tiền đã nhận</small></div><div class="stat-card"><div class="stat-top"><span>CHƯA THU</span><b>!</b></div><strong class="expense">${money(dashboardStats().unpaid)}</strong><small>Cần thu thêm</small></div><div class="stat-card"><div class="stat-top"><span>CHỜ ĐỐI SOÁT</span><b>?</b></div><strong>${getCounts().pending}</strong><small>Giao dịch cần kiểm tra</small></div></div>
  <div class="card"><div class="card-head"><div><h2>Danh sách khoản thu</h2><p>Bấm vào từng khoản để mở danh sách người đóng/chưa đóng</p></div></div><div class="payment-events">${Object.entries(state.events).map(([name,e],i)=>{const c=getCounts(name),pct=students.length?Math.round(c.paid/students.length*100):0;return `<button class="payment-event" data-event="${esc(name)}"><div class="payment-event-icon">${i+1}</div><div class="payment-event-info"><h3>${esc(name)}</h3><p>Hạn đóng: ${esc(e.deadline)}</p><div class="progress"><i style="width:${pct}%"></i></div><small>${c.paid}/${students.length} học sinh đã đóng • ${c.unpaid} chưa đóng • ${c.pending} chờ đối soát</small></div><div class="payment-event-money"><strong>${money(e.amount)}</strong><span>${pct}%</span></div></button>`}).join("")}</div></div>`;
  $$(".payment-event").forEach(b=>b.onclick=()=>{state.currentEvent=b.dataset.event;state.currentStatus="all";navigate("Thành viên")});
  $("#exportPayments").onclick=()=>exportCSV("payments");
  scrollTop();
}

/* ---------- members ---------- */
function showMembers(){
  setHeader(`Danh sách • ${state.currentEvent}`,`${students.length} sinh viên • tìm kiếm theo tên hoặc mã SV`);
  const c=getCounts();
  content.innerHTML=`<div class="page-title"><div><h1>Thành viên</h1><p>Danh sách học sinh và trạng thái khoản thu: <b>${esc(state.currentEvent)}</b></p></div><div class="toolbar-actions"><button class="secondary-btn" id="exportMembers">Xuất CSV</button><span class="member-count">${students.length} thành viên</span></div></div>
  <div class="stats"><div class="stat-card"><div class="stat-top"><span>TỔNG HỌC SINH</span><b>👥</b></div><strong>${students.length}</strong><small>Thành viên trong lớp</small></div><div class="stat-card"><div class="stat-top"><span>ĐÃ ĐÓNG</span><b>✓</b></div><strong class="income">${c.paid}</strong><small>Đã hoàn thành khoản thu</small></div><div class="stat-card"><div class="stat-top"><span>CHƯA ĐÓNG</span><b>!</b></div><strong class="expense">${c.unpaid}</strong><small>Cần nhắc đóng tiền</small></div><div class="stat-card"><div class="stat-top"><span>CHỜ ĐỐI SOÁT</span><b>?</b></div><strong>${c.pending}</strong><small>Đang chờ kiểm tra</small></div></div>
  <div class="card"><div class="card-head member-toolbar"><div><h2>Danh sách thành viên</h2><p>Bấm tên để xem hồ sơ và lịch sử các khoản thu</p></div><div class="table-tools"><div class="search"><span>⌕</span><input id="memberSearch" type="search" placeholder="Tìm học sinh hoặc mã SV..."></div><select id="memberStatus"><option value="all">Tất cả</option><option value="paid">Đã đóng</option><option value="unpaid">Chưa đóng</option><option value="pending">Chờ đối soát</option></select><div class="view-toggle"><button id="tableView" class="${state.memberView==="table"?"active":""}">☷ Bảng</button><button id="cardView" class="${state.memberView==="card"?"active":""}">▦ Thẻ</button></div></div></div>
  <div class="quick-filters" id="memberFilters">${quickFilterHTML()}</div>
  <div id="memberList"></div><div class="table-footer" id="memberFooter"></div></div>`;
  const search=$("#memberSearch"),filter=$("#memberStatus");
  search.value=state.currentKeyword;filter.value=state.currentStatus;
  search.oninput=e=>{state.currentKeyword=e.target.value;renderMemberList()};
  filter.onchange=e=>{state.currentStatus=e.target.value;renderMemberList()};
  $$("#memberFilters .filter-btn").forEach(b=>b.onclick=()=>{state.currentStatus=b.dataset.status;filter.value=state.currentStatus;renderMemberList()});
  $("#tableView").onclick=()=>{state.memberView="table";showMembers()};
  $("#cardView").onclick=()=>{state.memberView="card";showMembers()};
  $("#exportMembers").onclick=()=>exportCSV("members");
  renderMemberList();scrollTop();
}
function renderMemberList(){
  const list=filteredStudents(),box=$("#memberList");if(!box)return;
  if(state.memberView==="table"){
    box.innerHTML=`<div class="table-wrap"><table><thead><tr><th>STT</th><th>Sinh viên</th><th>Mã SV</th><th>Mã thanh toán</th><th>Số tiền</th><th>Trạng thái</th><th>Thời gian</th></tr></thead><tbody>${list.length?studentRows(list):`<tr><td colspan="7"><div class="empty-state">Không tìm thấy thành viên phù hợp.</div></td></tr>`}</tbody></table></div>`;
    $$(".student-name",box).forEach(b=>b.onclick=()=>openStudentModal(b.dataset.code));
  }else{
    box.innerHTML=list.length?`<div class="member-grid">${list.map(s=>{const p=getPayment(s.code);return `<div class="member-card"><span class="student-avatar">${initials(s.name)}</span><div class="member-info"><button class="student-name" data-code="${s.code}">${esc(s.name)}</button><small>Mã: ${s.code}</small></div><div class="member-payment"><span class="badge ${statusClass(p.status)}">${statusLabel(p.status)}</span><small>${money(p.amount)} • ${esc(p.paidAt||"—")}</small></div></div>`}).join("")}</div>`:`<div class="empty-state">Không tìm thấy thành viên phù hợp.</div>`;
    $$(".student-name",box).forEach(b=>b.onclick=()=>openStudentModal(b.dataset.code));
  }
  $("#memberFooter").textContent=`Hiển thị ${list.length} / ${students.length} thành viên • Khoản thu: ${state.currentEvent}`;
}

/* ---------- transactions ---------- */
function getTransactions(){
  const dynamic=[];
  Object.entries(state.paymentData).forEach(([code,ps])=>{const s=students.find(x=>x.code===code);if(!s)return;Object.entries(ps||{}).forEach(([eventName,p])=>{if(p?.status==="paid")dynamic.push({name:s.name,description:eventName,amount:Number(p.amount||getEvent(eventName).amount),type:"income",time:p.paidAt||"—"})})});
  return [...demoTransactions,...dynamic].slice(-100).reverse();
}
function renderRecentTransactions(limit=5){
  const tx=getTransactions().slice(0,limit);
  if(!tx.length) return `<div class="empty-state">Chưa có giao dịch.</div>`;
  return tx.map(x=>`<div class="transaction"><div class="tx-left"><div class="tx-icon">${x.type==="income"?"↓":"↑"}</div><div><b>${esc(x.name)}</b><small>${esc(x.description)}</small></div></div><div class="amount ${x.type}">${x.type==="income"?"+":"-"}${money(x.amount)}</div></div>`).join("");
}
function showTransactions(){
  setHeader("Giao dịch","Tất cả giao dịch của quỹ");
  const tx=getTransactions();
  content.innerHTML=`<div class="page-title"><div><h1>Giao dịch</h1><p>Theo dõi tiền vào, tiền ra và giao dịch thanh toán</p></div><button class="secondary-btn" id="exportTx">Xuất CSV</button></div>
  <div class="stats"><div class="stat-card"><div class="stat-top"><span>GIAO DỊCH</span><b>↕</b></div><strong>${tx.length}</strong><small>Trong dữ liệu hiện tại</small></div><div class="stat-card"><div class="stat-top"><span>TIỀN VÀO</span><b>↓</b></div><strong class="income">${money(tx.filter(x=>x.type==="income").reduce((a,x)=>a+x.amount,0))}</strong><small>Tổng các khoản thu</small></div><div class="stat-card"><div class="stat-top"><span>TIỀN RA</span><b>↑</b></div><strong class="expense">${money(tx.filter(x=>x.type==="expense").reduce((a,x)=>a+x.amount,0))}</strong><small>Tổng các khoản chi</small></div></div>
  <div class="card"><div class="card-head"><div><h2>Lịch sử giao dịch</h2><p>Tất cả giao dịch của quỹ</p></div><select id="transactionFilter"><option value="all">Tất cả</option><option value="income">Tiền vào</option><option value="expense">Tiền ra</option></select></div><div class="transaction-list">${tx.length?tx.map(x=>`<div class="transaction-row" data-type="${x.type}"><div class="transaction-icon ${x.type}">${x.type==="income"?"↓":"↑"}</div><div class="transaction-detail"><strong>${esc(x.name)}</strong><small>${esc(x.description)}</small></div><div class="transaction-time">${esc(x.time)}</div><strong class="transaction-amount ${x.type}">${x.type==="income"?"+":"-"}${money(x.amount)}</strong></div>`).join(""):`<div class="empty-state">Chưa có giao dịch.</div>`}</div></div>`;
  $("#transactionFilter").onchange=e=>$$(".transaction-row").forEach(r=>r.hidden=e.target.value!=="all"&&r.dataset.type!==e.target.value);
  $("#exportTx").onclick=()=>exportCSV("transactions");scrollTop();
}

/* ---------- reports ---------- */
function showReports(){
  setHeader("Báo cáo","Tổng quan tình hình tài chính của lớp");
  const balance=4820000,totalIncome=2450000,totalExpense=350000;
  content.innerHTML=`<div class="page-title"><div><h1>Báo cáo</h1><p>Tổng quan tình hình tài chính và tiến độ thu tiền</p></div><button class="secondary-btn" id="exportReport">Xuất CSV</button></div>
  <div class="stats"><div class="stat-card"><div class="stat-top"><span>SỐ DƯ HIỆN TẠI</span><b>₫</b></div><strong>${money(balance)}</strong><small>Số tiền hiện có</small></div><div class="stat-card"><div class="stat-top"><span>TỔNG THU</span><b>↓</b></div><strong class="income">${money(totalIncome)}</strong><small>Tổng tiền đã thu</small></div><div class="stat-card"><div class="stat-top"><span>TỔNG CHI</span><b>↑</b></div><strong class="expense">${money(totalExpense)}</strong><small>Tổng tiền đã chi</small></div></div>
  <div class="report-grid"><div class="card"><div class="card-head"><div><h2>Tình hình thu tiền</h2><p>Tiến độ các khoản thu</p></div></div><div class="report-items">${Object.entries(state.events).map(([name,e])=>{const c=getCounts(name),pct=Math.round(c.paid/students.length*10000)/100;return `<div class="report-item"><div class="report-item-top"><strong>${esc(name)}</strong><span>${pct}%</span></div><div class="progress"><i style="width:${pct}%"></i></div><small>${c.paid}/${students.length} học sinh • ${c.unpaid} chưa đóng • ${c.pending} chờ đối soát</small></div>`}).join("")}</div></div>
  <div class="card"><div class="card-head"><div><h2>Tóm tắt tài chính</h2><p>Tháng 09/2026</p></div></div><div class="report-summary"><div><span>Tiền vào</span><strong class="income">+${money(totalIncome)}</strong></div><div><span>Tiền ra</span><strong class="expense">-${money(totalExpense)}</strong></div><div><span>Số dư</span><strong>${money(balance)}</strong></div><div><span>Tỷ lệ đã thu • ${state.currentEvent}</span><strong>${Math.round(getCounts().paid/students.length*10000)/100}%</strong></div></div></div></div>`;
  $("#exportReport").onclick=()=>exportCSV("report");scrollTop();
}

/* ---------- settings ---------- */
function showSettings(){
  setHeader("Cài đặt","Thiết lập giao diện và dữ liệu cục bộ");
  content.innerHTML=`<div class="page-title"><div><h1>Cài đặt</h1><p>Quản lý tùy chọn hiển thị và dữ liệu demo</p></div></div>
  <div class="card"><div class="card-head"><div><h2>Giao diện</h2><p>Các tùy chọn được lưu trên trình duyệt này</p></div></div><div class="settings-list">
    <div class="setting-row"><div><strong>Giao diện tối</strong><p>Chuyển nhanh giữa sáng và tối.</p></div><label class="switch"><input id="darkSetting" type="checkbox" ${document.body.classList.contains("dark")?"checked":""}><span class="slider"></span></label></div>
    <div class="setting-row"><div><strong>Giao diện gọn</strong><p>Giảm khoảng cách để hiển thị nhiều dữ liệu hơn.</p></div><label class="switch"><input id="compactSetting" type="checkbox" ${state.compact?"checked":""}><span class="slider"></span></label></div>
    <div class="setting-row"><div><strong>Thông báo</strong><p>Hiển thị bảng thông báo ở góc trên.</p></div><label class="switch"><input id="notificationSetting" type="checkbox" ${state.notifications?"checked":""}><span class="slider"></span></label></div>
  </div></div>
  <div class="card"><div class="card-head"><div><h2>Dữ liệu thanh toán</h2><p>Có thể nhận dữ liệu từ backend/SEPAY bằng các hàm global được cung cấp.</p></div></div><div class="notice">Dữ liệu được lưu cục bộ trong trình duyệt. Khi tích hợp backend thật, có thể gọi <b>window.receivePaymentData(data)</b> hoặc <b>window.applyPaymentUpdate(update)</b>.</div><div class="toolbar-actions"><button class="secondary-btn" id="exportAll">Xuất toàn bộ CSV</button><button class="danger-btn" id="resetData">Xóa dữ liệu thanh toán cục bộ</button></div></div>`;
  $("#darkSetting").onchange=e=>applyTheme(e.target.checked?"dark":"light");
  $("#compactSetting").onchange=e=>{state.compact=e.target.checked;document.body.classList.toggle("compact",state.compact);localStorage.setItem("compact",state.compact?"1":"0")};
  $("#notificationSetting").onchange=e=>{state.notifications=e.target.checked;localStorage.setItem("notifications",state.notifications?"1":"0");notificationPanel.hidden=!state.notifications};
  $("#exportAll").onclick=()=>exportCSV("all");
  $("#resetData").onclick=()=>{if(confirm("Xóa toàn bộ dữ liệu thanh toán đã lưu trên trình duyệt?")){state.paymentData={};savePaymentData();toast("Đã xóa dữ liệu thanh toán cục bộ");showSettings();}};
  scrollTop();
}

/* ---------- modals ---------- */
function openStudentModal(code){
  const s=students.find(x=>x.code===code);if(!s)return;
  const payments=Object.entries(state.events).map(([name,e])=>{const p=getPayment(code,name);return `<div class="detail-row"><span>${esc(name)}</span><b><span class="badge ${statusClass(p.status)}">${statusLabel(p.status)}</span> ${money(p.amount)} • ${esc(p.paidAt||"—")}</b></div>`}).join("");
  openModal(`<div class="modal-head"><div><h2>Chi tiết thành viên</h2><p>Hồ sơ và lịch sử đóng tiền</p></div><button class="close-btn" data-close>×</button></div><div class="detail-profile"><div class="detail-avatar">${initials(s.name)}</div><div><strong>${esc(s.name)}</strong><small>Mã sinh viên: ${s.code}</small></div></div><div class="detail-list"><div class="detail-row"><span>STT</span><b>${s.id}</b></div><div class="detail-row"><span>Mã sinh viên</span><b>${s.code}</b></div>${payments}</div><div class="modal-actions"><button class="secondary-btn" data-close>Đóng</button></div>`);
}
function openBankModal(){openModal(`<div class="modal-head"><div><h2>Tài khoản quỹ lớp</h2><p>Thông tin tài khoản ngân hàng</p></div><button class="close-btn" data-close>×</button></div><div class="detail-list"><div class="detail-row"><span>Ngân hàng</span><b>Vietcombank</b></div><div class="detail-row"><span>Số tài khoản</span><b>••••••8821</b></div><div class="detail-row"><span>Chủ tài khoản</span><b>QUỸ LỚP 12A1</b></div><div class="detail-row"><span>Đồng bộ giao dịch</span><b class="success-text">Đang hoạt động</b></div></div><div class="modal-actions"><button class="secondary-btn" data-close>Đóng</button></div>`)}
function openModal(inner){modalRoot.innerHTML=`<div class="modal-backdrop" data-backdrop><div class="modal">${inner}</div></div>`;$(".modal-backdrop").addEventListener("click",e=>{if(e.target.matches("[data-backdrop]"))closeModal()});$$("[data-close]").forEach(b=>b.onclick=closeModal)}
function closeModal(){modalRoot.innerHTML=""}

/* ---------- data hooks from project B ---------- */
window.receivePaymentData=function(data){state.paymentData=data&&typeof data==="object"?data:{};savePaymentData();refreshCurrentPage();};
window.applyPaymentUpdate=function(update){
  if(!update?.studentCode||!update?.eventName)return;
  if(!state.paymentData[update.studentCode])state.paymentData[update.studentCode]={};
  state.paymentData[update.studentCode][update.eventName]={status:update.status||"pending",amount:Number(update.amount||getEvent(update.eventName).amount||0),paidAt:update.paidAt||"—"};
  savePaymentData();refreshCurrentPage();toast(`Đã cập nhật ${update.studentCode}`);
};
function refreshCurrentPage(){({Dashboard:showDashboard,"Khoản thu":showPayments,"Thành viên":showMembers,"Giao dịch":showTransactions,"Báo cáo":showReports,"Cài đặt":showSettings}[state.page]||showDashboard)();}

/* ---------- CSV export ---------- */
function csvEscape(v){return `"${String(v??"").replace(/"/g,'""')}"`;}
function downloadCSV(name,rows){const csv="\uFEFF"+rows.map(r=>r.map(csvEscape).join(",")).join("\n");const blob=new Blob([csv],{type:"text/csv;charset=utf-8"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=name+".csv";a.click();setTimeout(()=>URL.revokeObjectURL(url),500);}
function exportCSV(type){
  if(type==="members"||type==="payments"){const rows=[["STT","Họ tên","Mã SV","Khoản thu","Số tiền","Trạng thái","Thời gian"]];students.forEach((s,i)=>{if(type==="members"){const p=getPayment(s.code);rows.push([i+1,s.name,s.code,state.currentEvent,p.amount,statusLabel(p.status),p.paidAt])}else Object.entries(state.events).forEach(([e])=>{const p=getPayment(s.code,e);rows.push([i+1,s.name,s.code,e,p.amount,statusLabel(p.status),p.paidAt])})});downloadCSV(type,rows)}
  else if(type==="transactions"){downloadCSV(type,[["Tên","Nội dung","Số tiền","Loại","Thời gian"],...getTransactions().map(x=>[x.name,x.description,x.amount,x.type,x.time])])}
  else if(type==="report"){downloadCSV(type,[["Khoản thu","Đã đóng","Tổng","Tỷ lệ"],...Object.entries(state.events).map(([n])=>{const c=getCounts(n);return[n,c.paid,students.length,Math.round(c.paid/students.length*10000)/100+"%"]})])}
  else {const rows=[["STT","Họ tên","Mã SV","Khoản thu","Số tiền","Trạng thái","Thời gian"]];students.forEach((s,i)=>Object.entries(state.events).forEach(([e])=>{const p=getPayment(s.code,e);rows.push([i+1,s.name,s.code,e,p.amount,statusLabel(p.status),p.paidAt])}));downloadCSV("quy-lop-12a1",rows)}
  toast("Đã xuất file CSV");
}

/* ---------- startup ---------- */
function showDashboard(){setHeader("Tổng quan quỹ lớp","27 tháng 9, 2026");state.currentKeyword="";renderDashboard();scrollTop();}
showDashboard();
