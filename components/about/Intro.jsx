import React from "react";

const Intro = () => {
  const introContent = {
    image: "/img/slider/roman_4.jpg",
    name: "Roman Zhydyk",
    designation: "Software engineer",
    text: (
      <>
        <p>
          I'm pushing the limits of what's possible with Generative AI. I don't
          just use AI; I make it bend to my will. My focus? Innovation and
          entrepreneurship. I'm all about pushing limits, whether that's with my
          body or mind. This isn't about playing it safe. It's about dominating
          the game, transforming the digital landscape, and creating legacies
          that last. Every move is strategic. The bottom line? I'm here to use
          AI to carve out opportunities, to ensure that I, and those wise enough
          to follow, aren't just participants in the digital age but rulers of
          it. This is more than a job; It's a crusade against mediocrity. And I
          am in the lead.
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
