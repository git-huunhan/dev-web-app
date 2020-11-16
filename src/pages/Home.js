import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap'; 
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Badge } from 'reactstrap';

import ScrollArrow from "./ScrollArrow";
import Slide from '../components/Slide'

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: [{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Lab 1. Hiểu về DNS",
        "description": "",
        "imageUrl": "https://webhostingtrace.com/wp-content/uploads/2008/03/domain-and-hosting1.jpg",
        "link": "/lab-domain-01",
      }, {
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Lab 2. Đăng ký tên miền miễn phí",
        "description": "",
        "imageUrl": "https://i1.wp.com/wpwebsmartz.com/wp-content/uploads/2018/09/Register-Free-Domains.png?fit=760%2C473&ssl=1",
        "link": "/lab-domain-02"
      },{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Lab 3. Đăng ký tên miền có phí",
        "description": "",
        "imageUrl": "https://optech.vn/upload/news/cach-dang-ky-ten-mien.png",
        "link": "/lab-domain-03"
      },{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Lab 4. Hiểu về web server",
        "description": "",
        "imageUrl": "https://tintuc.tenten.vn/wp-content/uploads/2019/07/625942-for-more-on-web-hosting.jpg",
        "link": "/lab-domain-03"
      },{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Lab 5. Cài đặt và cấu hình XAMPP",
        "description": "",
        "imageUrl": "https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_900/https://lcdung.top/wp-content/uploads/2013/06/xampp-la-gi.jpg",
        "link": "/lab-domain-03"
      },{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Lab 6. Tìm hiểu về các loại hosting",
        "description": "",
        "imageUrl": "https://wiki.matbao.net/wp-content/uploads/2019/08/Hosting-la-gi-1200x675.jpg",
        "link": "/lab-domain-03"
      },{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Lab 7. Tìm hiểu các thông số liên quan đến một web hosting",
        "description": "",
        "imageUrl": "https://thietkeweb9999.com/data/upload/top-dich-vu-luu-tru-web-nuoc-ngoai-tot-nhat-2020-2.jpg",
        "link": "/lab-domain-03"
      },{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Lab 8. Shared hosting miễn phí",
        "description": "",
        "imageUrl": "https://ucompares.com/wp-content/uploads/2020/05/Free-Hosting.jpg",
        "link": "/lab-domain-03"
      },{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Lab 9. Shared hosting có phí",
        "description": "",
        "imageUrl": "https://shameem.me/wp-content/uploads/2019/10/buy-siteground-hosting.png",
        "link": "/lab-domain-03"
      }]
    }; 
  }

  render(){
    const { products } =this.state;

    return(
      <div>
        <Slide></Slide>
        <Container className="margin-bottom-card">
          <Row>
            <Col className="d-flex flex-column align-items-center" sm="12" md="12" lg="12" xl="4">
                <img className="image-card-home mb-3" top width="100%" src="https://vtc.edu.vn/wp-content/uploads/2017/11/vtc-academy-hoc-lap-trinh-web-nen-bat-dau-tu-dau.jpeg" alt="card-img" />
                <h4>Phát triển ứng dụng web</h4>
                <h6 className="text-card-home p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </h6>
            </Col>

            <Col className="d-flex flex-column align-items-center" sm="12" md="12" lg="12" xl="4">
                <img className="image-card-home mb-3" top width="100%" src="https://www.itsguru.com/wp-content/uploads/2020/05/The-Considerations-And-Perks-Of-Choosing-A-DBMS-ITs-Guru.png" alt="card-img" />
                <h4>Hệ quản trị CSDL</h4>
                <h6 className="text-card-home p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </h6>
            </Col>
            
            <Col className="d-flex flex-column align-items-center" sm="12" md="12" lg="12" xl="4">
                <img className="image-card-home mb-3" top width="100%" src="https://wallpaperaccess.com/full/1222968.jpg" alt="card-img" />
                <h4>Tấu hài là chính</h4>
                <h6 className="text-card-home p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </h6>
            </Col>
            
          </Row>

          <ScrollArrow></ScrollArrow>
        </Container>
        
      </div>
    );
  }
}

export default Home; 