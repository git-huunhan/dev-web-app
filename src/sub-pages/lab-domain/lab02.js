import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap'; 

import webhostImg from '../../img/domain-lab02/000webhost.png';
import wordpressImg from '../../img/domain-lab02/wordpress.png';
import bloggerImg from '../../img/domain-lab02/blogger.jpg';

class lab02 extends Component {
  constructor(props){
    super(props);

    this.myRef = React.createRef() 

    this.state = {
      products: [{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "1. Đăng ký tên miền miễn phí trên 000webhostapp.com",
        description: [{
          "deschild": webhostImg,
        }],
        "imageUrl": "https://webhostingtrace.com/wp-content/uploads/2008/03/domain-and-hosting1.jpg"
      }, {
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "2. Đăng ký tên miền miễn phí trên wordpress.com",
        description: [{
          "deschild": wordpressImg,
        }],
        "imageUrl": "https://webhostingtrace.com/wp-content/uploads/2008/03/domain-and-hosting1.jpg"
      }, {
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "3. Đăng ký tên miền miễn phí trên blogger.com",
        description: [{
          "deschild": bloggerImg,
        }],
        "imageUrl": "https://webhostingtrace.com/wp-content/uploads/2008/03/domain-and-hosting1.jpg"
      }],
    }; 
  }

  componentDidMount() {
    this.myRef.current.scrollTo(0, 0);
  }

  render(){
    const { products } =this.state;
 
    return(
      <div ref={this.myRef}>
        <Container>
          <h2>Lab 2. Đăng ký tên miền miễn phí</h2>
          <Row>
            { products.map(products =>(
              <Col className="mb-4" sm="12" md="12" lg="12" xl="12">
                <Card id="card" className="border-0 h-100 flex-row">
                  <Col className="m-4">
                    <CardBody className="d-flex flex-column">
                      <CardTitle id="card-title">{products.name}</CardTitle>
                      <CardText>
                        {products.description.map(description =>(
                          <img className="img-lab02" src={description.deschild} alt="img-lab02"></img>  
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

export default lab02; 