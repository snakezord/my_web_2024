"use client";

import Link from "next/link";

import Testimonial from "./Testimonial";
import Intro from "./Intro";
import Resume from "./Resume";

const AboutMain = () => {
  return (
    <>
      <div className="container">
        <div className="about">
          <div className="title">
            <div className="title_flex">
              <div className="left">
                <span>About</span>
                <h3>Who am I</h3>
              </div>
            </div>
          </div>
          {/* End title */}

          <Intro />
          {/* <div className="short_info">
            <PersonalInfo />
          </div> */}
          {/* End personal info */}

          <div
            className="button"
            data-position="left"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 32,
            }}
          >
            <div
              className="button"
              data-position="left"
              style={{
                width: "fit-content",
              }}
            >
              <div className="button" data-position="left">
                <a
                  href="https://romanzhydyk.s3.eu-west-2.amazonaws.com/Roman_Zhydyk_-_Software_Engineer_2024.pdf"
                  target="__blank"
                  download
                >
                  <span>Download My CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .container */}

      {/* <div className="progressbox">
        <div className="container">
          <div className="in">
            <Skills />
          </div>

        </div>

      </div> */}
      {/* End progressbox */}

      {/* <div className="skillbox">
        <div className="container">
          <div className="in">
            <KnowledgeInterest />
          </div>
        </div>
      </div> */}
      {/* End .skillbox */}

      <div className="resumebox">
        <div className="container">
          <div className="in">
            <Resume />
          </div>
        </div>
      </div>
      {/* End resumebox */}

      <div className="testimonials">
        <div className="container">
          <div className="section_title">
            <h3>Testimonials</h3>
          </div>
          <div className="list">
            <Testimonial />
          </div>
        </div>
      </div>
      {/* End testimonials */}

      {/* /ABOUT */}
    </>
  );
};

export default AboutMain;
