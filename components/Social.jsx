import React from "react";

const SocialShare = [
  { iconName: "x", link: "https://x.com/roman_zhydyk" },
  {
    iconName: "in",
    link: "https://www.linkedin.com/in/roman-zhydyk-5a3374203/",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
