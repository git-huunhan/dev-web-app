import React, { Component } from 'react';
import { Container } from 'reactstrap'; 
import {
  Card, Row, Col, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import avatar from '../img/avatar.jpg'

class Index extends Component {
  render(){
    return(
      <Col className="mb-4 d-flex" sm="12" md="12" lg="12" xl="12">
        <Col className="mb-4" sm="12" md="12" lg="12" xl="3">
          <Container>
            <div>
              <Card id="card" className="profile">
                <CardBody >
                  <CardTitle id="card-title" className="font-weight-bold">Giới thiệu</CardTitle>
                  <CardText>Học Công Nghệ Thông Tin tại Trường Đại học Đà Lạt</CardText>
                  <CardText>Đã học tại Trường THPT Đức Trọng - Lâm Đồng</CardText>
                  <CardText>Sống tại Đà Lạt</CardText>
                </CardBody>
              </Card>
            </div>
          </Container>
        </Col>
        <Col className="m-0" sm="12" md="12" lg="12" xl="6">
          <Container>
            <div>
              <Card id="card" className="profile">
                <img className="avatar mx-auto" src={avatar} alt="avatar" />
                <CardBody className="mx-auto">
                  <CardTitle id="card-title" className="text-center font-weight-bold">Izu Cute Lovely</CardTitle>
                  <CardText>📖 ʙᴇᴛᴛᴇʀ ʟᴀᴛᴇ ᴛʜᴀɴ ɴᴇᴠᴇʀ ⌨️</CardText>
                  <Col className="d-flex justify-content-center" sm="6" md="4" lg="3" xl="12">
                    <a href="https://www.facebook.com/huunhan1910/" className="button" target="_blank"><i class="fab fa-facebook button-icon"></i></a>
                    <a href="https://github.com/git-huunhan" className="button" target="_blank"><i class="fab fa-github button-icon github"></i></a>
                    <a href="https://www.instagram.com/ig_huunhan/" className="button" target="_blank"><i class="fab fa-instagram button-icon instagram"></i></a>
                  </Col>
                </CardBody>
              </Card>
            </div>
          </Container>
        </Col>

        <Col className="mb-4" sm="12" md="12" lg="12" xl="3">
          <Container>
            <div>
              <Card id="card" className="profile">
                <CardBody className="mx-auto">
                  <CardTitle id="card-title" className="text-center font-weight-bold">Izu Cute Lovely</CardTitle>
                  <CardText>📖 ʙᴇᴛᴛᴇʀ ʟᴀᴛᴇ ᴛʜᴀɴ ɴᴇᴠᴇʀ ⌨️</CardText>
                  <Col className="d-flex justify-content-center" sm="6" md="4" lg="3" xl="12">
                 
                  </Col>
                </CardBody>
              </Card>
            </div>
          </Container>
        </Col>
      </Col>
      
    );
  }
}

export default Index;