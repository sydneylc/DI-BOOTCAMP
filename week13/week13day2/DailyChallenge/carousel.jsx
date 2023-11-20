// FIRST I INSTALLED THE CAROUSEL PACKAGE ON MY TERMINAL

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

  };

  return (
    <Slider {...settings}>
      <div>
        <a href="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg">
          <img src="image1.jpg" alt="Slide 1" />
        </a>
      </div>
      <div>
        <a href="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp">
          <img src="image2.jpg" alt="Slide 2" />
        </a>
      </div>
      <div>
        <a href="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp">
          <img src="image3.jpg" alt="Slide 3" />
        </a>
      </div>
      <div>
        <a href="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp">
          <img src="image4.jpg" alt="Slide 4" />
        </a>
      </div>
    </Slider>
  );
};

export default Carousel;