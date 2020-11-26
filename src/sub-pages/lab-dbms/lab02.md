##### Tải và cài đặt SQL server trên docker.

- Đầu tiên ta phải tạo volume để chứa ánh xạ
  ```cmd
  docker volume create vmssql
  ```

- Tiếp theo tạo/chạy container với lệnh sau:

  ```cmd
  docker run -e 'ACCEPT_EULA=Y' --name c-mssql -e 'SA_PASSWORD=Password789' -p 1433:1433 -v vmssql:/var/opt/mssql -d mcr.microsoft.com/mssql/server:2017-latest
  ```

- Để sử dụng SQL Server trên terminal

  ```cmd
  docker exec -it c-mssql bash
  ```

- Thực hiện kết nối SQL Server

  ```cmd
  /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'Password789'
  ```

  ![image info](https://firebasestorage.googleapis.com/v0/b/dev-web-app-551e1.appspot.com/o/img%2Fdbms-lab02%2FScreen%20Shot%202020-11-26%20at%2019.18.46.png?alt=media&token=bd379b47-caad-4899-b2e0-6024c61f0391)

  ![image info](https://firebasestorage.googleapis.com/v0/b/dev-web-app-551e1.appspot.com/o/img%2Fdbms-lab02%2FScreen%20Shot%202020-11-26%20at%2019.19.44.png?alt=media&token=eaeffe49-e7b4-4512-8ce1-885e83d4390c)