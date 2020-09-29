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
      }, {
        "id": "588502e8-f18e-4eaf-b4f2-34add369eab4",
        "name": "Wine - Barbera Alba Doc 2001",
        "description": "nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim",
        "imageUrl": "https://scontent.fdad3-1.fna.fbcdn.net/v/t1.15752-9/118174938_695726794345889_8585445004897495275_n.jpg?_nc_cat=106&_nc_sid=b96e70&_nc_ohc=sJo1oHbcXn8AX_-XnHG&_nc_ht=scontent.fdad3-1.fna&oh=b4cf64805258401b39a36b2219dcfd2c&oe=5F6BCE7A"
      }, {
        "id": "82c34cee-623d-4e26-ba58-d5d41aee7126",
        "name": "Truffle - Whole Black Peeled",
        "description": "faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti",
        "imageUrl": "https://scontent.fdad3-3.fna.fbcdn.net/v/t1.15752-9/118154928_309986713545295_3275948764959218194_n.jpg?_nc_cat=100&_nc_sid=b96e70&_nc_ohc=L-BpTkEFXw0AX82hN36&_nc_ht=scontent.fdad3-3.fna&oh=6d1c89526d2bd132929327cb148ac9bd&oe=5F6A6D6F"
      }, {
        "id": "b6595128-8e22-4080-9177-be178dc051de",
        "name": "Wine - Merlot Vina Carmen",
        "description": "eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus",
        "imageUrl": "https://scontent.fdad3-3.fna.fbcdn.net/v/t1.15752-9/118369395_3280503398684334_9090391866605974482_n.jpg?_nc_cat=108&_nc_sid=b96e70&_nc_ohc=v7dvC9WcWa0AX8cgrzT&_nc_ht=scontent.fdad3-3.fna&oh=1dfc37dcb970172f4542d835b378266e&oe=5F6A2880"
      }, {
        "id": "a1791500-7096-4d7f-a4fa-e9dde77d9550",
        "name": "Beer - Fruli",
        "description": "vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt",
        "imageUrl": "https://static01.nyt.com/images/2019/11/21/books/best-books-2019-05/best-books-2019-05-superJumbo.jpg?quality=90&auto=webp"
      }, {
        "id": "c59c4125-17ce-4da6-a6c2-e477344e9335",
        "name": "Spring Roll Veg Mini",
        "description": "consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi",
        "imageUrl": "https://static01.nyt.com/images/2019/11/21/books/best-books-2019-07/best-books-2019-07-superJumbo.jpg?quality=90&auto=webp"
      }, {
        "id": "6ac8d8e8-0f77-44d3-88ad-f9ebe84edbe9",
        "name": "Appetizer - Veg Assortment",
        "description": "urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam",
        "imageUrl": "https://static01.nyt.com/images/2019/11/21/books/best-books-2019-08/best-books-2019-08-superJumbo.jpg?quality=90&auto=webp"
      }, {
        "id": "bf6b9ab8-0346-437b-8fce-37546efeb2be",
        "name": "Food Colouring - Pink",
        "description": "consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien",
        "imageUrl": "https://static01.nyt.com/images/2019/11/21/books/best-books-2019-10/best-books-2019-10-superJumbo.jpg?quality=90&auto=webp"
      }, {
        "id": "b3aaa7f9-5ee7-4d18-92ce-4cb948078d68",
        "name": "Cheese - Pied De Vents",
        "description": "non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non",
        "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "aba5bd03-222c-4798-99d9-097769be6dd2",
        "name": "Table Cloth 53x69 White",
        "description": "lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec",
        "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
      }, {
        "id": "514ef453-cebc-4fbe-ae1a-8e2b38f2ad38",
        "name": "Milkettes - 2%",
        "description": "suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem",
        "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "cdc396d5-2a61-4432-b24c-93d17c203cde",
        "name": "Beef - Cow Feet Split",
        "description": "odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel",
        "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
      }, {
        "id": "9d756d5e-7e1d-4cd9-b8cf-3eef14be43e4",
        "name": "Soup - Knorr, French Onion",
        "description": "vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam",
        "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
      }, {
        "id": "d344fa58-5274-4047-a0e0-9d64ad32eb2d",
        "name": "Veal - Leg",
        "description": "in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris",
        "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
      }, {
        "id": "10855923-1765-46c2-8d7a-2a287d24bb77",
        "name": "Pepper - Roasted Red",
        "description": "sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate",
        "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
      }, {
        "id": "c8cb8747-8ce4-4838-8939-a4812a49d786",
        "name": "Pepper - Red Bell",
        "description": "integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla",
        "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "f566dad0-29ac-4bec-83b5-a7f5ebd8b99a",
        "name": "Lamb - Racks, Frenched",
        "description": "rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet",
        "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "81118717-d866-4ac1-8ac3-3cd1b36053e3",
        "name": "Lamb - Bones",
        "description": "est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin",
        "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
      }, {
        "id": "db64057a-4a67-4ef2-bca0-bac91bee1abc",
        "name": "Cheese - Shred Cheddar / Mozza",
        "description": "curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien",
        "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
      }, {
        "id": "2335b244-b512-422e-9ee4-4d5d927b0414",
        "name": "Pork - Smoked Back Bacon",
        "description": "sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus",
        "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
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