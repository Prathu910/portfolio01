import React from "react";
import Slider from "react-slick";
import { carouselData } from "../data";

const MainCarousel = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slickOne text-center px-2 pt-8">
      <Slider {...settings}>
        {carouselData.map((item) => {
          return (
            <div>
              <img
                className="overflow-hidden brand-img"
                src={item.img}
                alt="brand icon"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MainCarousel;
