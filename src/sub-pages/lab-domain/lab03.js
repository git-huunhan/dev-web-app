import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap'; 

class lab03 extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: [{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "1. Tổng quan về DNS",
        description: [{
          "deschild": "DNS là Domain Name System, hệ thống tên miền hay Hệ thống phân giải (resolve) tên miền",
        },{
          "deschild": "DNS là Domain Name System, hệ thống tên miền hay Hệ thống phân giải (resolve) tên miền.DNS dùng để lưu trữ các tên miền (domain name, ví dụ www.google.com), cung cấp dịch vụ chuyển đổi từ địa chỉ dạng chuỗi (tên miền) sang địa chỉ dạng số (IP) và ngược lại (ví dụ www.google.com <> 216.58.221.228)",
        }],
        "imageUrl": "https://webhostingtrace.com/wp-content/uploads/2008/03/domain-and-hosting1.jpg"
      }, {
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "2. Tên miền cấp 1, 2, 3",
        description: [{
          "deschild": "Tên miền cấp 1 cũng là tên miền quốc tế, được dùng chung cho nhiều quốc gia, mỗi tên miền đại diện cho một lĩnh vực, một ngành nghề, hay một khu vực địa lý. Ví dụ: .com, .net, .org, .mil, .edu, .gov, .asia, .eu",
        },{
          "deschild": "Tên miền cấp 2 cũng là tên miền quốc gia, thông thường mỗi quốc gia sẽ có một tên miền riêng, gồm hai kí tự. Ví dụ: .vn (Việt Nam), .cn (Trung Quốc), .uk (Anh), .us (Mỹ).",
        },{
          "deschild": "Tên miền cấp 3 là tên miền kết hợp giữa tên miền cấp 2 và tên miền cấp 1. Ví dụ: .com.vn, .edu.vn, .edu.uk, .com.us"
        }],
        "imageUrl": "https://webhostingtrace.com/wp-content/uploads/2008/03/domain-and-hosting1.jpg"
      }, {
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "3. Tên miền quốc tế và tên miền nội địa",
        description: [{
          "deschild": "Tên miền quốc tế: do Trung tâm quản lý tên miền quốc tế cấp, ví dụ thường có đuôi là .com, .net, .biz, .info, .org",
        },{
          "deschild": "Tên miền quốc gia (nội địa): do Trung tâm quản lý tên miền của mỗi quốc gia quản lý. Ví dụ tên miền của Việt Nam có đuôi dạng .vn, .com.vn, edu.vn, gov.vn. Các tên miền này do VNNIC quản lý.",
        }],
        "imageUrl": "https://webhostingtrace.com/wp-content/uploads/2008/03/domain-and-hosting1.jpg"
      }],
    }; 
  }

  render(){
    const { products } =this.state;
 
    return(
      <div>
        <Container>
          <h2>Lab 3. Đăng ký tên miền có phí</h2>
          <Row>
            { products.map(products =>(
              <Col className="mb-4" sm="12" md="12" lg="12" xl="12">
                <Card id="card" className="border-0 h-100 flex-row">
                  <Col className="m-4">
                    <CardBody className="d-flex flex-column">
                      <CardTitle id="card-title">{products.name}</CardTitle>
                      <CardText>
                        {products.description.map(description =>(
                            <li>{description.deschild}</li>  
                        ))}
                      </CardText>
                    </CardBody>
                  </Col>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default lab03; 