# Quỹ lớp Kỹ thuật Cơ điện tử K52

Project gồm frontend web theo dõi và backend API. Mô hình dữ liệu mới là **theo từng sự kiện**, không có phần số dư tài khoản ngân hàng.

## Luồng hoạt động

1. App của thủ quỹ tạo sự kiện qua `POST /api/events`.
2. App của thủ quỹ kiểm tra từng sinh viên và cập nhật ai đã đóng qua `POST /api/events/:eventId/payments` hoặc `/api/events/toggle-payment`.
3. Frontend web đọc `GET /api/events`, sau đó đọc `GET /api/events/:eventId/payments` để hiển thị.
4. Frontend tự đồng bộ lại mỗi 15 giây; cũng có nút **Đồng bộ**.
5. Khi không có sự kiện nào trong backend, frontend hiển thị trạng thái **Chưa có khoản thu** và không tự tạo dữ liệu demo.

## API backend

- `GET /api/health` — kiểm tra backend + MongoDB
- `GET /api/students` — danh sách sinh viên
- `GET /api/events` — danh sách sự kiện + số người đã đóng
- `POST /api/events` — tạo sự kiện
- `GET /api/events/:id` — chi tiết sự kiện
- `DELETE /api/events/:id` — xóa sự kiện
- `GET /api/events/:id/payments` — danh sách trạng thái của tất cả sinh viên trong một sự kiện
- `POST /api/events/:id/payments` — cập nhật `isPaid` cho một sinh viên
- `POST /api/events/toggle-payment` — API tương thích app cũ
- `GET /api/stats` — thống kê theo sự kiện

API **không còn route số dư ngân hàng**.

## Kết nối frontend

Mở **Cài đặt → Kết nối backend**, nhập URL backend Vercel, ví dụ `https://ten-backend.vercel.app`, sau đó bấm **Lưu & đồng bộ**. Frontend chỉ đọc dữ liệu; không có nút tạo sự kiện hoặc tự đánh dấu đã đóng.

Có thể cấu hình trước bằng JavaScript trước khi load `script.js`:

```html
<script>window.CLASS_FUND_API_URL = "https://ten-backend.vercel.app";</script>
<script src="./js/script.js"></script>
```

## Deploy backend lên Vercel

- Đặt `MONGODB_URI` trong Environment Variables của Vercel.
- `vercel.json` đang trỏ `/` và toàn bộ API về `server.js`.
- `server.js` đã export `app` từ `backend/app.js`, nên các route `/api/...` hoạt động trên Vercel.

## CSV

Trang **Khoản thu** và **Giao dịch** có thể xuất CSV; mỗi sự kiện có nút **CSV** riêng và file chỉ chứa dữ liệu của sự kiện đó.
