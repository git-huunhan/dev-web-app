import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap'; 
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Badge } from 'reactstrap';

import ScrollArrow from "./ScrollArrow";
import AllPostDBMS1 from '../components/all-post/AllPostDBMS1'

class DBMS1 extends Component {
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
      <div>
        <Container>
          <h2>Tổng quan DBMS</h2>
          <div>
            <Breadcrumb tag="nav" listTag="div">
              <BreadcrumbItem tag="a">
                <Link to="/">Trang chủ</Link>
              </BreadcrumbItem>
              <BreadcrumbItem tag="a">
                <Link to="/dbms">Hệ quản trị cơ sở dữ liệu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active tag="span">Tổng quan DBMS</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <Row>
            <Col className="p-0" sm="12" md="12" lg="12" xl="8">
              { products.map(products =>(
                  <Col className="mb-4" sm="12" md="12" lg="12" xl="12">
                    <Card id="card" className="border-0 h-100 flex-row">
                      <Col className="m-4 p-0" sm="6" md="4" lg="3" xl="5">
                        <CardImg
                        className=""
                        id="card-img" 
                        src={products.imageUrl}
                        alt="Card image cap" />
                      </Col>
                      <Col className="m-4 p-0">
                        <CardBody className="d-flex flex-column">
                          <Link to={products.link}>
                            <CardTitle id="card-title">{products.name}</CardTitle>
                          </Link>
                          <div className="timePost">
                            <Badge className="timePostChild" color="primary" pill>1:39 AM</Badge>
                            <Badge className="timePostChild" color="secondary" pill>Sunday November 8</Badge>
                            <Badge color="secondary" pill>Huu Nhan</Badge>
                          </div>
                          <CardText>{products.description}</CardText>
                          <Link to={products.link}>
                            <Button className="mt-auto read-more" color="primary">Xem thêm</Button>
                          </Link>
                        </CardBody>
                      </Col>
                    </Card>
                  </Col>
              ))}
            </Col>
            <AllPostDBMS1></AllPostDBMS1>
            
          </Row>

          <ScrollArrow></ScrollArrow>
        </Container>
      </div>
    );
  }
}

export default DBMS1; 