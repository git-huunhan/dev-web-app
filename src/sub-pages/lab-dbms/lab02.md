##### Tải và cài đặt SQL server trên docker.

- Đầu tiên ta phải tạo volume để chứa ánh xạ
  ```cmd
  docker volume create sqlserver
  ```

- Tiếp theo tạo/chạy container với lệnh sau:

  ```cmd
  docker run -e 'ACCEPT_EULA=Y' --name sqlserver -e 'SA_PASSWORD=Password789' -p 1433:1433 -v vmssql:/var/opt/mssql -d mcr.microsoft.com/mssql/server:2019-latest
  ```

- Để sử dụng SQL Server trên terminal

  ```cmd
  docker exec -it -sqlserver bash
  ```

- Thực hiện kết nối SQL Server

  ```cmd
  /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'Password789'
  ```

  ![image info](https://firebasestorage.googleapis.com/v0/b/dev-web-app-551e1.appspot.com/o/img%2Fdbms-lab01%2Fdbms1.png?alt=media&token=476087af-47ff-4787-aab8-f7dde163e2e1)

- Sử dụng Azure Data Studio để quản lý SQL Server trên docker dễ dàng

- Chọn new Connection, tiếp tục điền các thông tin cần thiết

  ![image info](https://firebasestorage.googleapis.com/v0/b/dev-web-app-551e1.appspot.com/o/img%2Fdbms-lab01%2Fdbms1.png?alt=media&token=476087af-47ff-4787-aab8-f7dde163e2e1)

- 'SA_PASSWORD=Password789' => username: SA, password=Password789

  ![image info](https://firebasestorage.googleapis.com/v0/b/dev-web-app-551e1.appspot.com/o/img%2Fdbms-lab01%2Fdbms1.png?alt=media&token=476087af-47ff-4787-aab8-f7dde163e2e1)