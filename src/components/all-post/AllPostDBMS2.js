import React, { Component } from 'react';
import { Col, Card, CardBody,
  CardTitle } from 'reactstrap'; 
import { Link } from "react-router-dom";


class AllPostDBMS2 extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: [{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Lab 7. Sử dụng DDL định nghĩa dữ liệu",
        "description": "",
        "imageUrl": "https://www.datasunrise.com/wp-content/uploads/2017/03/12.jpg",
        "link": "/lab-dbms-07",
      }, {
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Lab 8. Thực hiện các thao tác CRUD trực tiếp trên CSDL",
        "description": "",
        "imageUrl": "https://ericsmasal.com/wp-content/uploads/2018/06/docker-sql-3-740x414.png",
        "link": "/lab-dbms-08"
      },{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Lab 9 & 10",
        "description": "",
        "imageUrl": "https://blog.tinohost.com/wp-content/uploads/2019/01/Pengertian-MySQL-Kegunaan-dan-Kelebihan.png",
        "link": "/lab-dbms-09-10"
      }]
    }; 
  }

  render(){
    const { products } =this.state;

    return(
      <Col className="p-0" sm="12" md="12" lg="12" xl="4">
        <Col className="mb-4" sm="12" md="12" lg="12" xl="12">
          <Card id="card" className="border-0 h-100 flex-row">
            <Col className="m-4">
              <CardBody className="d-flex flex-column p-0">
                <h4 className="mb-3">Tất cả bài viết</h4>
                { products.map(products =>
                  <Link to={products.link}>
                    <CardTitle id="card-title">{products.name}</CardTitle>
                  </Link>
                )}
              </CardBody>
            </Col>
          </Card>
      </Col>
    </Col>
);
  }
}

export default AllPostDBMS2; 