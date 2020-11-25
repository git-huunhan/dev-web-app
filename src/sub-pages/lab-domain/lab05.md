#### 5.1. Cài đặt và cấu hình XAMPP
##### 1. Cách cài đặt XAMPP trên Windows
  - Bước 1: Download XAMPP ở www.apachefriends.org

  - Bước 2: Nhấp vào file có đuôi .exe trên file tải xuống.

  - Bước 3: Trên cửa sổ Setup, tích chọn các phần mềm mà bạn muốn cài đặt. Nếu bạn muốn cài WordPress trên XAMPP, các phần mềm bắt buộc phải chọn là MySQL, Apache, PHPMyAdmin. Sau khi chọn xong, nhấn Next.

  - Bước 4: Chọn thư mục cài đặt và nhấn Next.

  - Bước 5: Chờ cài đặt và hoàn tất.

##### 2. Cách cấu hình XAMPP
  - Xampp Control Panel bao gồm 3 phần chính. Trong phần Modules hiển thị danh sách tất cả các service có sẵn. Bạn có thể chạy từng service một bằng cách click chọn nút Start.

  - Khi chạy một số dịch vụ, như Apache và MySQL, ở cột bên phải bạn sẽ nhìn thấy số ID của process và số cổng TCP/IP mà từng dịch vụ đang sử dụng. Ví dụ, mặc định Apache sử dụng cổng TCP/IP 80 và 443 còn MySQL sử dụng cổng TCP/IP 3306.

  - Ngoài ra bạn có thể click chọn nút Admin để truy cập bảng điều khiển Admin cho từng dịch vụ và xác minh mọi thứ đang hoạt động đúng cách.

    ![image info](https://firebasestorage.googleapis.com/v0/b/dev-web-app-551e1.appspot.com/o/img%2Fdomain-lab05%2Funnamed.jpg?alt=media&token=6063a6f6-13d4-4f8a-bc6f-4906c78210de)
    &nbsp;
  - Ở cột bên phải hiển thị danh sách các nút để cấu hình Xampp, bao gồm nút Config để cấu hình các module tự động khởi động khi chạy Xampp.

    ![image info](https://firebasestorage.googleapis.com/v0/b/dev-web-app-551e1.appspot.com/o/img%2Fdomain-lab05%2Funnamed1.jpg?alt=media&token=1225b86b-2831-4de3-a6f5-4231bbabda16)
    &nbsp;
  - Netstart cung cấp danh sách các dịch vụ hiện đang truy cập hệ thống mạng, thông tin process ID và cổng TCP/IP.

    ![image info](https://firebasestorage.googleapis.com/v0/b/dev-web-app-551e1.appspot.com/o/img%2Fdomain-lab05%2Funnamed2.jpg?alt=media&token=64e42cb2-a768-465c-aba3-d855c7399de9)
    &nbsp;
  - Các nút truy cập nhanh bao gồm mở tiện ích dòng lệnh shell, thư mục cài đặt Xampp, services, ... .

  - Cuối cùng là phần logs. Tại đây bạn có thể xem những thay đổi cài đặt hoặc những gì diễn ra khi chạy module. Ngoài ra đây cũng là nơi để tìm ra thủ phạm gây ra các vấn đề, sự cố.

    ![image info](https://firebasestorage.googleapis.com/v0/b/dev-web-app-551e1.appspot.com/o/img%2Fdomain-lab05%2Funnamed3.jpg?alt=media&token=dd6743d1-5e2d-41f6-bc86-1e14c98a2816)
    &nbsp;
  - Các cài đặt mặc định Xampp tạo môi trường thử nghiệm cho người dùng chạy một trang web cá nhân hoặc client . Tuy nhiên tùy thuộc vào cấu hình cài đặt, người dùng có thể sẽ phải thay đổi số cổng TCP/IP cho máy chủ Apache, kích thước tải lên cơ sở dữ liệu hoặc đặt mật khẩu cho phpMyAdmin.

  - Để thay đổi các cài đặt này, sử dụng nút Config của các dịch vụ tương ứng. Chẳng hạn như file httpd.conf để thay đổi cài đặt máy chủ Apache và file my.ini để thay đổi cài đặt cho MySQL.

#### 5.2. Cài đặt và cấu hình WAMP
##### 1. Cài đặt WAMP
- Truy cập vào trang chủ WampServer và tải phiên bản 64bit hoặc 32bit phù hợp với máy. Sửa lỗi cài đặt thường gặp:

  ![image info](https://firebasestorage.googleapis.com/v0/b/dev-web-app-551e1.appspot.com/o/img%2Fdomain-lab05%2Fpasted1.png?alt=media&token=bab9a843-afce-4eb4-b0fc-5cb079e7d11a)
  &nbsp;
- Nếu gặp lỗi trên, ta làm như sau:
  
  - Bước 1: Gỡ bỏ WampServer.
  
  - Bước 2: Download và cài đặt Visual C++ Redistributable for Visual Studio.
  
  - Bước 3: Cài đặt đặt lại WampServer là OK.

##### 2. Cấu hình
- **Thay đổi thư mục chạy localhost:** Mặc định sau khi cài đặt, các project của các bạn muốn chạy thì phải copy trong thư mục wamp/www. Tuy nhiên, các bạn có thể thay đổi bằng cách sau:

  - Bước 1: Click chuột trái vào icon WampServer ở thanh taskbar -> Chọn Apache -> Mở file httpd.conf.
  
  - Bước 2: Tìm kiếm từ khóa DocumentRoot và thay đổi đường dẫn mặc định wamp/www  phía sau sang thư mục bạn muốn.

  - Bước 3: Tìm kiếm từ khóa Directory và thay đổi đường dẫn mặc định wamp/www phía sau sang thư mục bạn muốn.
  
  - Bước 4: Restart lại Apache.

- **Bật module rewrite:** Đối với những trang web có sử dụng htaccess  để cấu hình máy chủ Apache thì phải bật module rewrite, nếu không sẽ bị lỗi.
  
  - Bước 1: Click chuột trái vào icon WampServer ở thanh taskbar -> Chọn Apache -> Apache modules -> Tích chọn rewrite_module.

  - Bước 2: Restart lại Apache.
