import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap'; 
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Badge } from 'reactstrap';

import ScrollArrow from "./ScrollArrow";
import AllPostDBMS2 from '../components/all-post/AllPostDBMS2'

class DBMS2 extends Component {
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
        "imageUrl": "https://techvccloud.mediacdn.vn/zoom/650_406/2018/11/30/crud-15435683934502144104962-crop-1543568398584927543865.png",
        "link": "/lab-dbms-08"
      },{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Lab 9. Thực hiện các thao tác CRUD bằng ngôn ngữ lập trình và HQTCSDL",
        "description": "",
        "imageUrl": "https://images.viblo.asia/6c18b19b-2bca-4039-91b7-c2d286d4802e.png",
        "link": "/lab-dbms-09"
      },{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Lab 10. Thực hiện các thao tác CRUD bằng công cụ trung gian và HQTCSDL",
        "description": "",
        "imageUrl": "https://logopond.com/logos/70a5a28358a0f80718ac4f6737f018ae.png",
        "link": "/lab-dbms-10"
      }]
    };  
  }

  render(){
    const { products } =this.state;

    return(
      <div>
        <Container>
          <h2>Kiến trúc DBMS</h2>
          <div>
            <Breadcrumb tag="nav" listTag="div">
              <BreadcrumbItem tag="a">
                <Link to="/">Trang chủ</Link>
              </BreadcrumbItem>
              <BreadcrumbItem tag="a">
                <Link to="/dbms">Hệ quản trị cơ sở dữ liệu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active tag="span">Kiến trúc DBMS</BreadcrumbItem>
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
            <AllPostDBMS2></AllPostDBMS2>
            
          </Row>

          <ScrollArrow></ScrollArrow>
        </Container>
      </div>
    );
  }
}

export default DBMS2; 