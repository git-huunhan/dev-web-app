import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap'; 

import webhostImg from '../../img/domain-lab02/000webhost.png';
import wordpressImg from '../../img/domain-lab02/wordpress.png';
import bloggerImg from '../../img/domain-lab02/blogger.jpg';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";

import ScrollArrow from "../../pages/ScrollArrow";
import AllPostDBMS1 from '../../components/all-post/AllPostDBMS1'

class lab02 extends Component {
  constructor(props){
    super(props);

    this.myRef = React.createRef() 

    this.state = {
      products: [{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "1. Đăng ký tên miền miễn phí trên 000webhostapp.com",
        description: [{
          "deschild": webhostImg,
        }],
      }, {
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "2. Đăng ký tên miền miễn phí trên wordpress.com",
        description: [{
          "deschild": wordpressImg,
        }],
      }, {
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "3. Đăng ký tên miền miễn phí trên blogger.com",
        description: [{
          "deschild": bloggerImg,
        }],
      }],
    }; 
  }

  componentDidMount() {
    this.myRef.current.scrollTo(0, 0);
  }

  render(){
    const { products } =this.state;
 
    return(
      <div ref={this.myRef}>
        <Container>
          <h2>Lab 2. Tải và cài đặt SQL server trên Docker</h2>
          <div>
            <Breadcrumb tag="nav" listTag="div">
              <BreadcrumbItem tag="a">
                <Link to="/">Trang chủ</Link>
              </BreadcrumbItem>
              <BreadcrumbItem tag="a">
                <Link to="/dbms">Hệ quản trị cơ sở dữ liệu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem tag="a">
                <Link to="/dbms1">Tổng quan DBMS</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active tag="span">Lab 2</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <Row>
            <Col className="p-0" sm="12" md="12" lg="12" xl="8">
              { products.map(products =>(
                <Col className="mb-4" sm="12" md="12" lg="12" xl="12">
                  <Card id="card" className="border-0 h-100 flex-row">
                    <Col className="m-4">
                      <CardBody className="d-flex flex-column">
                        <CardTitle id="card-title">{products.name}</CardTitle>
                        <CardText>
                          {products.description.map(description =>(
                            <img className="img-lab02" src={description.deschild} alt="img-lab02"></img>  
                          ))}
                        </CardText>
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

export default lab02; 