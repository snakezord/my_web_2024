import React from "react";

const Intro = () => {
  const introContent = {
    image: "/img/slider/roman_4.jpg",
    name: "Roman Zhydyk",
    designation: "Software engineer",
    text: (
      <>
        <p style={{ fontSize: "1rem" }}>
          I am dedicated to exploring the full potential of Generative AI,
          harnessing its capabilities to shape the future. <br /> My focus is on
          innovation and entrepreneurship, constantly challenging both physical
          and mental boundaries. <br />
          This journey isn't about adhering to the conventional; it’s about
          excelling and redefining the digital realm. <br />
          My approach is meticulously strategic, aiming to leverage AI to lead
          in the digital era, creating enduring legacies.
          <br />
          This endeavor goes beyond mere professional commitment—it’s a
          passionate pursuit of excellence. <br />
          And I am at the forefront of this transformative movement.
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>

      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
