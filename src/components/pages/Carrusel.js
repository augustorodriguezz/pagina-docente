import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#a1d8f1", borderRadius:"50px" }}
      onClick={onClick}
    />
  );
}

function Carrusel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="card">
          <h3>1</h3>
        </div>
        <div className="card">
          <h3>2</h3>
        </div>
        <div className="card">
          <h3>3</h3>
        </div>
        <div className="card">
          <h3>4</h3>
        </div>
        <div className="card">
          <h3>5</h3>
        </div>
        <div className="card">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Carrusel;
