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
import care from '../img/care.svg';
import suggestImg from '../img/suggest-img.jpg';

class Profile extends Component {
  constructor (props){
    super(props);

    this.state = {
      user: [{
        "name": "Profile Cute Lovely",
        "title": "Cuteeeeeeeeee",
        "intro": "Giới thiệu",
        introsub: [{
          "icon": "fas fa-graduation-cap",
          "activity": "Học",
          "job": "Công Nghệ Thông Tin",
          "at": "tại",
          "place": "Đại học Đà Lạt",
        }, {
          "icon": "fas fa-graduation-cap",
          "activity": "Đã học tại",
          "place": "Trường THPT Đức Trọng - Lâm Đồng"
        },{
          "icon": "fas fa-home",
          "activity": "Sống tại",
          "place": "Đà Lạt"
        }],
        "suggest": suggestImg,
        post: [{
          "name": "Profile Cute Lovely",
          "time": "27 tháng 9 lúc 16:24",
          "caption": "Ảnh bìa này",
          "image": wall,
          "reaction": "Khoa Ryu, Quốc Trung và 1 tỉ người khác",
          "like": "Thích",
          "comment": "Bình luận",
          "share": "Chia sẻ",
          "commentInput": "Viết bình luận..." 
        },{
          "name": "Profile Cute Lovely",
          "time": "27 tháng 9 lúc 16:24",
          "caption": "Ảnh gợi ý này",
          "image": suggestImg,
          "reaction": "Khoa Ryu, Quốc Trung và 108 người khác",
          "like": "Thích",
          "comment": "Bình luận",
          "share": "Chia sẻ",
          "commentInput": "Viết bình luận..." 
        }]  
      }]
    }
  }

  render(){
    const { user } = this.state;

    return( 
      <Col className="p-0 margin-head">
          <Container className="p-0 mb-4 mw-100">
            <div>
              <Card id="card" className="card-wall text-color">
                <div className="wall-container mw-100 mx-auto">
                  <img className="mw-100 wall-img border-wall" src={wall} alt="wallpaper"/>
                </div>
                <img className="avatar mx-auto margin-wall" src={avatar} alt="avatar" />
                {user.map(user =>
                   <CardBody className="mx-auto">
                   <CardTitle id="card-title" className="text-center font-weight-bold h4">{user.name}</CardTitle>
                   <CardText className="text-center">{user.title}</CardText>
                   <Col className="d-flex justify-content-center" sm="6" md="4" lg="3" xl="12">
                     <a href="https://www.facebook.com/huunhan1910/" className="button" target="_blank"><i class="fab fa-facebook button-icon"></i></a>
                     <a href="https://github.com/git-huunhan" className="button" target="_blank"><i class="fab fa-github button-icon github"></i></a>
                     <a href="https://www.instagram.com/ig_huunhan/" className="button" target="_blank"><i class="fab fa-instagram button-icon instagram"></i></a>
                   </Col>
                 </CardBody>
                )}
              </Card>
            </div>
          </Container>
        

        <Col className="d-flex mb-4 justify-content-center" sm="12" md="12" lg="12" xl="12">
          <Col className="p-0" sm="12" md="12" lg="3" xl="3">
            <Container>
              <div className="text-color">
              {user.map(user =>
                <Card id="card" className="profile">
                  <CardBody>
                    <CardTitle id="card-title" className="font-weight-bold h5">{user.intro}</CardTitle>
                    { user.introsub.map(intro =>
                      <CardText><i class={intro.icon}></i> {intro.activity} <b>{intro.job}</b> {intro.at} <b>{intro.place}</b></CardText>
                    )}
                     <img className="mw-100 border-suggest-img" src={user.suggest} alt="suggest-img"/> 
                  </CardBody>
                </Card>
              )}
              </div>
            </Container>
          </Col>

          <Col className="p-0" sm="12" md="12" lg="5" xl="5">
            {user.map(user =>
              user.post.map(post =>
                <Container className="mb-4">
                  <Card id="card" className="profile">
                    <CardBody className="p-0 text-color">
                      <Col className="p-0 d-flex mb-2 justify-content-center" sm="12" md="12" lg="12" xl="12">
                        <Col sm="12" md="12" lg="12" xl="1">
                          <img className="avatar-blog" src={avatar} alt=""/>
                        </Col>
                        <Col className="blog-info">
                          <CardTitle id="card-title" className="ml-2 mb-0 font-weight-bold blog-user-name">{post.name}</CardTitle>
                          <CardText className="ml-2 post-time smooth-text">{post.time} · <i class="fas fa-globe-americas"></i></CardText>
                        </Col>
                      </Col>
                      
                      <CardText className="ml-4">{post.caption} </CardText>

                      <div>
                        <img className="image-blog" src={post.image} alt="wall-blog"/>
                      </div>

                      <Col className="pl-4 pr-4" sm="12" md="12" lg="12" xl="12">
                        <Col className="p-0 d-flex mt-2 mb-2 reaction-cal" sm="12" md="12" lg="12" xl="12">
                          <Col className="pl-0 pr-0 d-flex reaction-container" sm="12" md="12" lg="12" xl="1">
                            <img className="reaction" src={love} alt="sad"/>
                            <img className="reaction" src={sad} alt="sad"/>
                            <img className="reaction" src={care} alt="sad"/>
                          </Col>
                          <Col className="p-0 ml-4">
                            <CardText> {post.reaction}</CardText>
                          </Col>
                        </Col>
                      
                      
                        <Col className="d-flex mt-3 mb-2 p-2 border-tool" sm="12" md="12" lg="12" xl="12">
                          <Col className="d-flex justify-content-center" sm="12" md="12" lg="12" xl="4">
                            <CardText className="smooth-text-1"><i class="far fa-thumbs-up mr-1 "></i>{post.like}</CardText>
                          </Col>
                          <Col className="d-flex justify-content-center" sm="12" md="12" lg="12" xl="4">
                            <CardText className="smooth-text-1"><i class="far fa-comment mr-1"></i>{post.comment}</CardText>
                          </Col>
                          <Col className="d-flex justify-content-center" sm="12" md="12" lg="12" xl="4">
                            <CardText className="d-flex smooth-text-1"><img className="share mr-1" src={share} alt="share"/>{post.share}</CardText>
                          </Col>
                        </Col>

                        <Col className="p-0 d-flex mb-2 justify-content-center" sm="12" md="12" lg="12" xl="12">
                          <Col className="p-0" sm="12" md="12" lg="12" xl="1">
                            <img className="avatar-blog mt-0" src={avatar} alt=""/>
                          </Col>
                          <Col className="pr-0">
                            <Input className="input-post" type="text" placeholder={post.commentInput} />
                          </Col>
                        </Col>
                      </Col>
                    </CardBody>
                  </Card>
              </Container>
              ) 
            )}
          </Col>
        </Col>

        
      </Col>
      
    );
  }
}

export default Profile;