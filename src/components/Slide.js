import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container, 
  Row, 
  Col, 
  Card, 
  CardImg, 
  CardText, 
  CardBody,
  CardTitle, 
  Button
} from 'reactstrap';

const items = [
  {
    src: 'https://wallpaperaccess.com/full/1111946.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }, 
  {
    src: 'https://wallpaperaccess.com/full/1567812.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'https://www.teahub.io/photos/full/21-217087_hd-desktop-wallpaper-for-developers.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://wallpaperset.com/w/full/4/1/6/517257.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  }, 
  {
    src: 'https://images.hdqwalls.com/wallpapers/get-back-to-code-km.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const Slide = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="image-home" src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <Col className="p-0 slide-header" sm="12" md="12" lg="12" xl="12">
        <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </Col>

      <Container>
        
      </Container>
    </div>
    
  );
}

export default Slide;