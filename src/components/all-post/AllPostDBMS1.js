import React, { Component } from 'react';
import { Col, Card, CardBody,
  CardTitle } from 'reactstrap'; 
import { Link } from "react-router-dom";


class AllPostDBMS1 extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: [{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Lab 1. Tải và cài đặt SQL server trên máy cục bộ",
        "description": "",
        "imageUrl": "https://ngocminhtran.files.wordpress.com/2016/12/enable-service-broker-trong-sql-server.png?w=510",
        "link": "/lab-dbms-01",
      }, {
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Lab 2. Tải và cài đặt SQL server trên Docker",
        "description": "",
        "imageUrl": "https://ericsmasal.com/wp-content/uploads/2018/06/docker-sql-3-740x414.png",
        "link": "/lab-dbms-02"
      },{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Lab 3. Tải và cài đặt MySQL trên máy cục bộ",
        "description": "",
        "imageUrl": "https://blog.tinohost.com/wp-content/uploads/2019/01/Pengertian-MySQL-Kegunaan-dan-Kelebihan.png",
        "link": "/lab-dbms-03"
      },{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Lab 4. Tải và cài đặt MySQL trên Docker",
        "description": "",
        "imageUrl": "https://www.cbtnuggets.com/blog/wp-content/uploads/2020/10/1fxcMvJYNSokKWz6brY9LFpa3cGQs4vbF_Blog-1024x572.jpg",
        "link": "/lab-dbms-04"
      },{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Lab 5. Tải và cài MongoDB trên máy cục bộ",
        "description": "",
        "imageUrl": "https://www.commvault.com/wp-content/uploads/2019/08/mongodb-logo2.jpg?quality=80&w=930",
        "link": "/lab-dbms-05"
      },{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Lab 6. Tải và cài đặt MongoDB trên Docker",
        "description": "",
        "imageUrl": "https://i.morioh.com/4b884c12df.png",
        "link": "/lab-dbms-06"
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

export default AllPostDBMS1; 