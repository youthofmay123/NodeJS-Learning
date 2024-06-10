//Khai báo - khởi tạo
const express = require('express'); //Sử dụng thư viện express đã dược cài ở node_modeules
const app = express(); // Gọi tới function express, biến khởi tạo được dùng đại diện cho ứng dụng của chương trình
const port = 3000; // Số port


app.get('/tin-tuc', (req, res) => { // Định nghĩa tuyến đường (route) bằng dấu '/'
  res.send('Hello World!'); // Kết quả trên trang web
})

app.listen(port, () => { // Lắng nghe trển cổng trình duyệt của bạn
  console.log(`Example app listening at http://localhost:${port}`)
})