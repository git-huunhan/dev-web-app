import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap'; 
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";

import ScrollArrow from "../pages/ScrollArrow";

class Note extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: [{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Các từ chuyên ngành",
        description: [{
          "deschild": "Operating system (n): hệ điều hành",
        },{
          "deschild": "Multi-user (n) Đa người dùng",
        },{
          "deschild": "Alphanumeric data: Dữ liệu chữ số, dữ liệu cấu thành các chữ cái và bất kỳ chữ số từ 0 đến 9.",
        },{
          "deschild": "Broad classification: Phân loại tổng quát",
        },{
          "deschild": "Packet: Gói dữ liệu",
        },{
          "deschild": "Source Code: Mã nguồn (của của file hay một chương trình nào đó)",
        },{
          "deschild": "Port /pɔːt/: Cổng",
        },{
          "deschild": "ubject entry – thẻ chủ đề: công cụ truy cập thông qua chủ đề của ấn phẩm .",
        },{
          "deschild": "Microprocessor /ˌmaɪkrəʊˈprəʊsesə(r)/: bộ vi xử lý",
        },{
          "deschild": "Operationˌ/ɒpəˈreɪʃn/ : thao tác",
        },{
          "deschild": "Storage /ˈstɔːrɪdʒ/ : lưu trữ",
        },{
          "deschild": "Configuration /kənˌfɪɡəˈreɪʃn/: Cấu hình",
        },{
          "deschild": "Analysis /əˈnæləsɪs/: phân tích",
        },{
          "deschild": "Compatible /kəmˈpætəbl/: tương thích",
        },{
          "deschild": "Customer /ˈkʌstəmə(r)/: khách hàng",
        },{
          "deschild": "database/ˈdeɪtəbeɪs/: cơ sở dữ liệu",
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
          <h2>Sổ tay môn học</h2>
          <div>
            <Breadcrumb tag="nav" listTag="div">
              <BreadcrumbItem tag="a">
                <Link to="/">Trang chủ</Link>
              </BreadcrumbItem>

              <BreadcrumbItem active tag="span">Sổ tay môn học</BreadcrumbItem>
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
                            <ul>
                              <li>{description.deschild}</li>  
                            </ul>
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

export default Note; 