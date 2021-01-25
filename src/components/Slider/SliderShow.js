import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderShow.css";


export const SliderShow = (props) => {

  const Arrow = (props => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", backgroundColor:"red" }}
        onClick={onClick}
      />
    );
  })


  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <Arrow/>,
    prevArrow: <Arrow/>
  };


    return (
      <div className="sliderContent">
        <Slider {...settings}>
            {
                props.pictures.map((element, key) => (
                    <img key={key} src={element.src} alt='phot'/>
                ))
            }
        </Slider>
      </div>
    );
  
}
