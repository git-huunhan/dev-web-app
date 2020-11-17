import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap'; 
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Badge } from 'reactstrap';

import ScrollArrow from "./ScrollArrow";

class HomeWebDev extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: [{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Tổng quan DBMS",
        "description": "",
        "imageUrl": "https://lh6.googleusercontent.com/QGKdQtkdztm7tbLBc6juMj7qhdt5WuXPq6-0Kfs5zvKsmOa4XU0lASeiNZGMFyENSqvPd8qrAAeHCLNYeS75eF_WxgQQoi44ZRZbtOuzSctt-RlRj6fiLdmqDNZb_65aZhgpcpmB",
        "link": "/dbms1",
      }, {
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Kiến trúc DBMS",
        "description": "",
        "imageUrl": "https://www.onlinenotesnepal.com/wp-content/uploads/2020/05/dbms-architecture.png",
        "link": "/dbms2"
      }]
    }; 
  }

  render(){
    const { products } =this.state;

    return(
      <div>
        <Container>
          <h2>Hệ quản trị cơ sở dữ liệu</h2>
          <div>
            <Breadcrumb tag="nav" listTag="div">
              <BreadcrumbItem tag="a">
                <Link to="/">Trang chủ</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active tag="span">Hệ quản trị cơ sở dữ liệu</BreadcrumbItem>
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
            <Col className="p-0" sm="12" md="12" lg="12" xl="4">
                  <Col className="mb-4" sm="12" md="12" lg="12" xl="12">
                    <Card id="card" className="border-0 h-100 flex-row">
                      <Col className="m-4">
                        <CardBody className="d-flex flex-column p-0">
                          <h4 className="mb-3">Tất cả chủ đề</h4>
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
            
          </Row>

          <ScrollArrow></ScrollArrow>
        </Container>
      </div>
    );
  }
}

export default HomeWebDev; 