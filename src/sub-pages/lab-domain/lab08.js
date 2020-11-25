import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap'; 
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import termsFrPath from '../lab-domain/lab08.md';
import gfm from 'remark-gfm';

import ScrollArrow from "../../pages/ScrollArrow";
import AllPostDomain from '../../components/all-post/AllPostDomain'

class lab08 extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: [],
      terms: null
    }; 
  }

  componentWillMount() {
    fetch(termsFrPath).then((response) => response.text()).then((text) => {
      this.setState({ terms: text })
    })
  }

  render(){
    return(
      <div>
        <Container>
          <h2>Lab 8. Shared hosting miễn phí</h2>
          <div>
            <Breadcrumb tag="nav" listTag="div">
              <BreadcrumbItem tag="a">
                <Link to="/">Trang chủ</Link>
              </BreadcrumbItem>
              <BreadcrumbItem tag="a">
                <Link to="/webdev">Phát triển ứng dụng web</Link>
              </BreadcrumbItem>
              <BreadcrumbItem tag="a">
                <Link to="/domain">Domain name & Hosting</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active tag="span">Lab 8</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <Row>
            <Col className="p-0" sm="12" md="12" lg="12" xl="8">
                <Col className="mb-4" sm="12" md="12" lg="12" xl="12">
                  <Card id="card" className="border-0 h-100 flex-row">
                    <Col className="m-4">
                      <CardBody className="d-flex flex-column md-img md-text">
                        <ReactMarkdown plugins={[gfm]} source={this.state.terms} />
                      </CardBody>
                    </Col>
                  </Card>
                </Col>
            </Col>
            <AllPostDomain></AllPostDomain>
          </Row>

          <ScrollArrow></ScrollArrow>
        </Container>
      </div>
    );
  }
}

export default lab08; 