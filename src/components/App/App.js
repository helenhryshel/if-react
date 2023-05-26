import React from 'react';

import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import './App.css';
import { Container } from '../Container';


export const App = () => {
  return (
    <>
    <Container>
      <div className="guests-container__title">
        <h2 className="guests-container__heading-title">Homes guests loves</h2>
      </div>
      <div className="guests-container__navigation">
        < SimpleCarousel />
      </div>
    </Container>
      </>
  );
};

const SimpleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src='https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg' alt='slide-1' />
      </div>
      <div>
        <img src='https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg' alt='slide-2' />
      </div>
      <div>
        <img src='https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg' alt='slide-3' />
      </div>
    </Slider>
  );
};


