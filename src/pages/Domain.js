import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap'; 
import { Link } from "react-router-dom";

import ScrollArrow from "./ScrollArrow";

class Domain extends Component {
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
        <Container>
          <h2>Domain name & Hosting</h2>
          <Row>
            { products.map(products =>(
              <Col className="mb-4" sm="12" md="12" lg="12" xl="12">
                <Card id="card" className="border-0 h-100 flex-row">
                  <Col className="m-4" sm="6" md="4" lg="3" xl="4">
                    <CardImg
                    className=""
                    id="card-img" 
                    src={products.imageUrl}
                    alt="Card image cap" />
                  </Col>
                  <Col className="m-4">
                    <CardBody className="d-flex flex-column">
                      <Link to={products.link}>
                        <CardTitle id="card-title">{products.name}</CardTitle>
                      </Link>
                      
                      <CardText>{products.description}</CardText>
                      <Link to={products.link}>
                        <Button className="mt-auto read-more" color="primary">Xem thêm</Button>
                      </Link>
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

export default Domain; 