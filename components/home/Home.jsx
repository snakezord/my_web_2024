"use client";
import React from "react";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import Social from "../Social";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(/img/slider/b_w_cropped.png)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Roman Zhydyk</h3>
            <h4 className="typer">
              <ReactTyped
                startDelay={600}
                strings={[
                  "I build software",
                  "I build startups",
                  "I build experiences",
                ]}
                typeSpeed={40}
                backDelay={2000}
                smartBackspace
                loop
                loopCount={10}
                cursorChar="_"
              />
            </h4>

            <p className="job">
              Focused on building the future with Generative AI, RAGs, and AI
              Agents.{" "}
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 32,
          }}
        >
          <div
            style={{ width: "fit-content" }}
            className="button"
            data-position="left"
          >
            <Link href="/about">
              <span>More about me</span>
            </Link>
          </div>

          <div
            style={{ width: "fit-content" }}
            className="button"
            data-position="right"
          >
            <Link href="/portfolio">
              <span>My work</span>
            </Link>
          </div>
        </div>
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
