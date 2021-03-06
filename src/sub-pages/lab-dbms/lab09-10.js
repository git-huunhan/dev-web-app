import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap'; 
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import termsFrPath from '../lab-dbms/lab09-10.md';

import gfm from 'remark-gfm';

import ScrollArrow from "../../pages/ScrollArrow";
import AllPostDBMS2 from '../../components/all-post/AllPostDBMS2';

class lab07 extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: [],
      terms: null,
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
          <h2>Lab 7. Sử dụng DDL định nghĩa dữ liệu</h2>
          <div>
            <Breadcrumb tag="nav" listTag="div">
              <BreadcrumbItem tag="a">
                <Link to="/">Trang chủ</Link>
              </BreadcrumbItem>
              <BreadcrumbItem tag="a">
                <Link to="/dbms">Hệ quản trị cơ sở dữ liệu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem tag="a">
                <Link to="/dbms2">Kiến trúc DBMS</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active tag="span">Lab 7</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <Row>
            <Col className="p-0" sm="12" md="12" lg="12" xl="8">
                <Col className="mb-4" sm="12" md="12" lg="12" xl="12">
                  <Card id="card" className="border-0 h-100 flex-row">
                    <Col className="pt-3 pb-3 pr-4 pl-4">
                      <CardBody className="d-flex flex-column md-img md-text md-table md-body">
                        <ReactMarkdown plugins={[gfm]} source={this.state.terms} />
                      </CardBody>
                    </Col>
                  </Card>
                </Col>
            </Col>
            <AllPostDBMS2></AllPostDBMS2>
          </Row>

          <ScrollArrow></ScrollArrow>
        </Container>
      </div>
    );
  }
}

export default lab07; 