import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap'; 

class Git extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: [{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Wine - Casablanca Valley",
        "description": "tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus",
        "imageUrl": "https://www.hostinger.vn/huong-dan/wp-content/uploads/sites/10/2017/04/git-1.png"
      }]
    }; 
  }

  render(){
    const { products } =this.state;
 
    return(
      <div>
        <Container>
          <h2>Git</h2>
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
                      <CardTitle id="card-title">{products.name}</CardTitle>
                      <CardText>{products.description}</CardText>
                      <Button className="mt-auto read-more" color="primary">Xem thêm</Button>
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

export default Git; 