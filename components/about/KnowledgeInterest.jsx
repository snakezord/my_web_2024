import Image from "next/image";
import React from "react";

const KnowledgeInterest = () => {
  const knowledgeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Knowledge",
      content: [
        " Bootstrap, Angular",
        " React, Vue, Laravel",
        " Stylus, Sass, Less",
        " Gulp, Webpack, Grunt",
        " Tweenmax, GSAP",
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Interests",
      content: [
        " Make UI/UX Design",
        " Create Mobile App",
        " Site Optimization",
        " Custom Website",
        "Learn Ecommerce",
      ],
    },
  ];

  return (
    <>
      {knowledgeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tm_skill_list">
            <ul>
              {item.content.map((val, i) => (
                <li key={i}>
                  <span>
                    <Image
                      width={10}
                      height={10}
                      className="svg"
                      src="/img/svg/rightarrow.svg"
                      alt="arrow"
                    />
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default KnowledgeInterest;
