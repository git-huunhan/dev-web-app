import React, { Component } from 'react';
import { Container } from 'reactstrap'; 
import {
  Card, Row, Col, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import avatar from '../img/avatar.jpg';
import wall from '../img/wall.png';

class Index extends Component {
  render(){
    return(
      <Col className="p-0">
          <Container className="p-0 mb-4 mw-100">
            <div className="wall-container">
              <img className="mw-100 wall-img" src={wall} alt="wallpaper"/>
            </div>
            <div>
              <Card id="card" className="card-wall">
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
        

        <Col className="d-flex mb-4 justify-content-center" sm="12" md="12" lg="12" xl="12">
          <Col className="p-0" sm="12" md="12" lg="12" xl="4">
            <Container>
              <div className="text-color">
                <Card id="card" className="profile">
                  <CardBody>
                    <CardTitle id="card-title" className="font-weight-bold h5">Giới thiệu</CardTitle>
                    <CardText><i class="fas fa-graduation-cap"></i> Học <b>Công Nghệ Thông Tin</b> tại <b>Trường Đại học Đà Lạt</b></CardText>
                    <CardText><i class="fas fa-graduation-cap"></i> Đã học tại <b>Trường THPT Đức Trọng - Lâm Đồng</b></CardText>
                    <CardText><i class="fas fa-home"></i> Sống tại <b>Đà Lạt</b></CardText>
                  </CardBody>
                </Card>
              </div>
            </Container>
          </Col>

          <Col className="p-0" sm="12" md="12" lg="12" xl="6">
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

        
      </Col>
      
    );
  }
}

export default Index;