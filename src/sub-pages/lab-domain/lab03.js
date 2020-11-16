import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap'; 
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";

import ScrollArrow from "../../pages/ScrollArrow";

import pavietnam from '../../img/domain-lab03/pavietnam.png';
import bkhost from '../../img/domain-lab03/bkhost.png';
import matbao from '../../img/domain-lab03/matbao.png';
import webhost from '../../img/domain-lab03/000webhost.png';
import domain from '../../img/domain-lab03/domain.png';
import dodaddy from '../../img/domain-lab03/dodaddy.png';

class lab03 extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: [{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Trong nước",
        description: [{
          "deschild": "pavietnam.vn",
          "imageUrl": pavietnam
        },{
          "deschild": "bkhost.vn",
          "imageUrl": bkhost
        },{
          "deschild": "matbao.net",
          "imageUrl": matbao
        }],
      },{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Ngoài nước",
        description: [{
          "deschild": "000webhost.com",
          "imageUrl": webhost
        },{
          "deschild": "domain.com",
          "imageUrl": domain
        },{
          "deschild": "dodaddy.com",
          "imageUrl": dodaddy
        }],
      }],
    }; 
  }

  render(){
    const { products } =this.state;
 
    return(
      <div>
        <Container>
          <h2>Lab 3. Đăng ký tên miền có phí</h2>
          <div>
            <Breadcrumb tag="nav" listTag="div">
              <BreadcrumbItem tag="a">
                <Link to="/">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem tag="a">
                <Link to="/domain">Domain name & Hosting</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active tag="span">Lab 03</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <Row>
            { products.map(products =>(
              <Col className="mb-4" sm="12" md="12" lg="12" xl="12">
                <Card id="card" className="border-0 h-100 flex-row">
                  <Col className="m-4">
                    <CardBody className="d-flex flex-column">
                      <CardTitle id="card-title">{products.name}</CardTitle>
                      <CardText>
                        {products.description.map(description =>(
                            <li>{description.deschild}
                              <img className="img-lab02" src={description.imageUrl} alt="img-lab03"></img>                            
                            </li>
                        ))}
                      </CardText>
                    </CardBody>
                  </Col>
                </Card>
              </Col>
            ))}
          </Row>
          <ScrollArrow></ScrollArrow>
        </Container>
      </div>
    );
  }
}

export default lab03; 