import React, { Component } from 'react';
import { Container } from 'reactstrap'; 
import {
  Card, Row, Col, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Input
} from 'reactstrap';

import avatar from '../img/avatar.jpg';
import wall from '../img/wall.png';
import share from '../img/share.svg';
import sad from '../img/sad.svg';
import love from '../img/love.svg';

class Index extends Component {
  render(){
    return(
      <Col className="p-0 margin-head">
          <Container className="p-0 mb-4 mw-100">
            <div>
              <Card id="card" className="card-wall text-color">
                <div className="wall-container mw-100 mx-auto">
                  <img className="mw-100 wall-img border-wall" src={wall} alt="wallpaper"/>
                </div>
                <img className="avatar mx-auto margin-wall" src={avatar} alt="avatar" />
                <CardBody className="mx-auto">
                  <CardTitle id="card-title" className="text-center font-weight-bold h4">Izu Cute Lovely</CardTitle>
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
          <Col className="p-0" sm="12" md="12" lg="12" xl="3">
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

          <Col className="p-0" sm="12" md="12" lg="12" xl="5">
            <Container>
              <div>
                <Card id="card" className="profile">
                  <CardBody className="p-0 text-color">
                    <Col className="p-0 d-flex mb-2 justify-content-center" sm="12" md="12" lg="12" xl="12">
                      <Col sm="12" md="12" lg="12" xl="1">
                        <img className="avatar-blog" src={avatar} alt=""/>
                      </Col>
                      <Col className="blog-info">
                        <CardTitle id="card-title" className="ml-2 mb-0 font-weight-bold blog-user-name">Izu Cute Lovely</CardTitle>
                        <CardText className="ml-2 post-time">27 tháng 9 lúc 16:24 <i class="fas fa-globe-americas"></i></CardText>
                      </Col>
                    </Col>
                    
                    <CardText className="ml-4">Đăng cho vuôi </CardText>

                    <div>
                      <img className="image-blog" src={wall} alt="wall-blog"/>
                    </div>

                    <Col className="pl-4 pr-4" sm="12" md="12" lg="12" xl="12">
                      <Col className="p-0 d-flex mt-2 mb-2 reaction-cal" sm="12" md="12" lg="12" xl="12">
                        <Col className="mr-2 d-flex justify-content-center" sm="12" md="12" lg="12" xl="1">
                          <img className="reaction" src={love} alt="sad"/>
                          <img className="reaction" src={sad} alt="sad"/>
                        </Col>
                        <Col className="p-0">
                          <CardText> Khoa Ryu, Quốc Trung và 1 tỉ người khác</CardText>
                        </Col>
                      </Col>
                    
                    
                      <Col className="d-flex mt-3 mb-2 p-2 border-tool" sm="12" md="12" lg="12" xl="12">
                        <Col className="d-flex justify-content-center" sm="12" md="12" lg="12" xl="4">
                          <CardText ><i class="far fa-thumbs-up mr-1"></i>Thích</CardText>
                        </Col>
                        <Col className="d-flex justify-content-center" sm="12" md="12" lg="12" xl="4">
                          <CardText><i class="far fa-comment mr-1"></i>Bình luận</CardText>
                        </Col>
                        <Col className="d-flex justify-content-center" sm="12" md="12" lg="12" xl="4">
                          <CardText className="d-flex"><img className="share mr-1" src={share} alt="share"/>Chia sẻ</CardText>
                        </Col>
                      </Col>

                      <Col className="p-0 d-flex mb-2 justify-content-center" sm="12" md="12" lg="12" xl="12">
                        <Col className="p-0" sm="12" md="12" lg="12" xl="1">
                          <img className="avatar-blog mt-0" src={avatar} alt=""/>
                        </Col>
                        <Col className="pr-0">
                          <Input className="input-post" type="text" placeholder="Viết bình luận..." />
                        </Col>
                      </Col>
                    </Col>
                  </CardBody>
                </Card>
              </div>
            </Container>

            <Container className="mt-4">
              <div>
                <Card id="card" className="profile">
                  <CardBody className="p-0 text-color">
                    <Col className="p-0 d-flex mb-2 justify-content-center" sm="12" md="12" lg="12" xl="12">
                      <Col sm="12" md="12" lg="12" xl="1">
                        <img className="avatar-blog" src={avatar} alt=""/>
                      </Col>
                      <Col className="blog-info">
                        <CardTitle id="card-title" className="ml-2 mb-0 font-weight-bold blog-user-name">Izu Cute Lovely</CardTitle>
                        <CardText className="ml-2 post-time">27 tháng 9 lúc 16:24 <i class="fas fa-globe-americas"></i></CardText>
                      </Col>
                    </Col>
                    
                    <CardText className="ml-4">Đăng cho vuôi </CardText>

                    <div>
                      <img className="image-blog" src={wall} alt="wall-blog"/>
                    </div>

                    <Col className="pl-4 pr-4" sm="12" md="12" lg="12" xl="12">
                      <Col className="p-0 d-flex mt-2 mb-2" sm="12" md="12" lg="12" xl="12">
                        <Col className="mr-2 d-flex justify-content-center" sm="12" md="12" lg="12" xl="1">
                          <img className="reaction" src={love} alt="sad"/>
                          <img className="reaction" src={sad} alt="sad"/>
                        </Col>
                        <Col className="p-0">
                          <CardText> Khoa Ryu, Quốc Trung và 108 người khác</CardText>
                        </Col>
                      </Col>
                    
                    
                      <Col className="d-flex mt-3 mb-2 p-2 border-tool" sm="12" md="12" lg="12" xl="12">
                        <Col className="d-flex justify-content-center" sm="12" md="12" lg="12" xl="4">
                          <CardText ><i class="far fa-thumbs-up mr-1"></i>Thích</CardText>
                        </Col>
                        <Col className="d-flex justify-content-center" sm="12" md="12" lg="12" xl="4">
                          <CardText><i class="far fa-comment mr-1"></i>Bình luận</CardText>
                        </Col>
                        <Col className="d-flex justify-content-center" sm="12" md="12" lg="12" xl="4">
                          <CardText className="d-flex"><img className="share mr-1" src={share} alt="share"/>Chia sẻ</CardText>
                        </Col>
                      </Col>

                      <Col className="p-0 d-flex mb-2 justify-content-center" sm="12" md="12" lg="12" xl="12">
                        <Col className="p-0" sm="12" md="12" lg="12" xl="1">
                          <img className="avatar-blog mt-0" src={avatar} alt=""/>
                        </Col>
                        <Col className="pr-0 d-flex">
                          <Input className="input-post" type="text" placeholder="Viết bình luận..."/>
                        </Col>
                      </Col>
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