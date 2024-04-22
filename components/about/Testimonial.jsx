"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonialContent = [
    {
      id: 1,
      text: `Since day 1, Roman was bringing high value to the team. He really is out of the box thinker.`,
      avatar: "url(/img/testimonials/ludwig.jpeg)",
      name: "Ludwig Petersen",
      designation: "CEO at joinlets.de",
    },
    {
      id: 2,
      text: `Roman was always fast and responsive in delivering. Really enjoyed our 1on1 discussions. Great guy!`,
      avatar: "url(/img/testimonials/niclas_wastian.jpeg)",
      name: "Niclas Wastian",
      designation: "Product Manager at joinlets.de",
    },
    {
      id: 3,
      text: `Roman is an exceptional developer with whom I had a great time, built great things and learned a lot.`,
      avatar: "url(/img/testimonials/dima.jpeg)",
      name: "Dmytro Butovskyi",
      designation: "Team Lead at joinlets.de",
    },
    {
      id: 4,
      text: `We set very high standards; And Roman always delivered.`,
      avatar: "url(/img/testimonials/milos.jpeg)",
      name: "Milos Zikic",
      designation: "CEO at spicefactory.co",
    },
  ];

  return (
    <ul className="testimonila-slider-wrapper">
      <Slider {...settings} arrows={false}>
        {testimonialContent.map((item) => (
          <li key={item.id}>
            <div className="list_inner">
              <div className="text">
                <p>{item.text}</p>
              </div>
              <div className="details">
                <div className="image">
                  <div
                    className="main"
                    style={{
                      backgroundImage: item.avatar,
                    }}
                  />
                </div>
                <div className="info">
                  <h3>{item.name}</h3>
                  <span>{item.designation}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </Slider>
    </ul>
  );
};

export default Testimonial;
