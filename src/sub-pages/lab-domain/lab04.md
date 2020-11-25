![image info](https://firebasestorage.googleapis.com/v0/b/dev-web-app-551e1.appspot.com/o/img%2Fdomain-lab04%2Fpasted%20image%200.png?alt=media&token=8b33f53d-d7a6-4f09-87df-6cb01435a449)
&nbsp;

##### 1. "Web server" có thể là phần cứng hoặc phần mềm, hoặc cả hai
- Ở khía cạnh phần cứng:
  - Một web server là một máy tính lưu trữ các file thành phần của một website (ví dụ: các tài liệu HTML, các file ảnh, CSS và các file JavaScript) và có thể phân phát chúng tới thiết bị của người dùng cuối (end-user). Nó kết nối tới mạng Internet và có thể truy cập tới thông qua một tên miền giống như mozilla.org.

- Ở khía cạnh phần mềm:
  - Một web server bao gồm một số phần để điều khiển cách người sử dụng web truy cập tới các file được lưu trữ trên một HTTP server(máy chủ HTTP). Một HTTP server là một phần mềm hiểu được các URL (các địa chỉ web) và HTTP (giao thức trình duyệt của bạn sử dụng để xem các trang web).

##### 2. Để xuất bản một website, bạn cần một static(tĩnh) hoặc dynamic(động) web server
- Một **static web server**, hoặc stack, bao gồm một máy tính (hardware) với một HTTP server (phần mềm). Chúng ta gọi nó là "static" bởi vì server (máy chủ) gửi các file nó lưu trữ "nguyên vẹn" (as-is) tới trình duyệt của bạn.

- Một **dynamic web server** bao gồm một static web server cộng với các phần mềm mở rộng, phổ biến nhất là một application server (máy chủ ứng dụng) và một database. Chúng ta gọi nó là "dynamic" bởi vì application server cập nhật các file được lưu trữ trước khi gửi chúng tới tình duyệt của bạn thông qua HTTP server.