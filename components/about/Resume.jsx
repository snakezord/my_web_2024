import React from "react";

const Resume = () => {
  const resumeContent = [
    {
      id: 2,
      colClass: "right",
      title: "Experience",
      resume: [
        {
          id: 1,
          year: "2022 - 2024",
          institute: "Joinlets.de",
          degree: "Software engineer",
        },
        {
          id: 2,
          year: "2021 - 2022",
          institute: "Spicefactory.co",
          degree: "Software Engineer",
        },
        {
          id: 3,
          year: "2019 - now",
          institute: "Freelancing",
          degree: "Software Engineer",
        },
      ],
    },
    {
      id: 1,
      colClass: "left",
      title: "Education",
      resume: [
        {
          id: 1,
          year: "2019 - 2021",
          institute: "Coimbra University",
          degree: "Masters in Intelligent Systems",
        },
        {
          id: 2,
          year: "2016 - 2019",
          institute: "Coimbra University",
          degree: "Bachelor in Computer Science",
        },
      ],
    },
  ];
  return (
    <>
      {resumeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="resume_list">
            <ul>
              {item?.resume?.map((value) => (
                <li key={value.id}>
                  <div className="list_inner">
                    <div className="time">
                      <span>{value.year}</span>
                    </div>
                    <div className="place">
                      <h3>{value.institute}</h3>
                      <span>{value.degree}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
