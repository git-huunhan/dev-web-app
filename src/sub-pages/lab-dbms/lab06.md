### Tải và cài đặt Mongo trên docker
- Tải image mongo 
  ```
  docker pull mongo
  ```

- Kiểm tra image có trong docker
  ```
  docker image ls
  ``` 

- Chạy docker container
  ```
  docker run --name mongo -p 27016:27017 -d mongo
  ```

- Để khởi động container đã được tạo
  ```
  docker exec -it mongo bash
  ```


- Chú ý: lệnh trên để cổng 27016 để ko bị trùng với cổng mongo chính

- Kiểm tra kết nối với 3tmongo

  ![image info](https://firebasestorage.googleapis.com/v0/b/dev-web-app-551e1.appspot.com/o/img%2Fdbms-lab06%2Fmongo1.png?alt=media&token=6dbcee3d-c955-4737-94a5-a968091cb0d5)