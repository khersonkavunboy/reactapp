import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles-slidershow.css";


export const SliderShow = (props) => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable:true,
    // autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows:true
  };

    return (
      <div className="sliderContent">
        <Slider {...settings}>
            {
                 props.pictures.map((element, key) => (
                     <img key={key} src={element.src} alt='picture'/>
                 ))
            }
        </Slider>
      </div>
    );
};



