##### Tải và cài đặt Mysql trên docker
- Tải image mysql
  ```
  docker pull mysql
  ```

- Chạy docker container
  ```
  docker run — name=mysqldb -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=quanlysinhvien -p 3305:3306 -d mysql
  ```

- username: root
- password: 12345678
- database: quanlysinhvien
- port: 3305

- Thử kết nối với MysqlWordbench

  ![image info](https://firebasestorage.googleapis.com/v0/b/dev-web-app-551e1.appspot.com/o/img%2Fdbms-lab03%2Fmysql1.png?alt=media&token=ae872b7e-c67d-43e8-94ae-4e92e5d2e826)

  ![image info](https://firebasestorage.googleapis.com/v0/b/dev-web-app-551e1.appspot.com/o/img%2Fdbms-lab03%2Fmysql.png?alt=media&token=e5a4801f-eecb-4a7e-a73f-2acbe309717d)