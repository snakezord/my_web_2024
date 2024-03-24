"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import "react-tooltip/dist/react-tooltip.css";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";

import Image from "next/image";
import { useTheme } from "next-themes";
import ModalOne from "./modal/ModalOne";
import ModalTwo from "./modal/ModalTwo";
import { Tooltip as ReactTooltip } from "react-tooltip";
// Modal.setAppElement("#__next");

const IMAGE_HEIGHT = 250;

const Portfolio = () => {
  const { resolvedTheme } = useTheme();
  // for popup video for youtube
  const [isOpenYoutube, setOpenYoutube] = useState(false);

  // popup video for vimeo
  const [isOpenVimeo, setOpenVimeo] = useState(false);

  // for modal details
  const [isOpenModalOne, setIsOpenModalOne] = useState(false);
  const [isOpenModalTwo, setIsOpenModalTwo] = useState(false);

  // for modal details method
  function toggleModalOne() {
    setIsOpenModalOne(!isOpenModalOne);
  }
  function toggleModalTwo() {
    setIsOpenModalTwo(!isOpenModalTwo);
  }

  return (
    <>
      <Gallery>
        <Tabs>
          {/* START FILTER TABLIST */}
          <TabList>
            <Tab>All</Tab>
          </TabList>
          {/* END FILTER TABLIST */}

          <div className="list_wrapper">
            {/* START ALL PORTFOLIO */}
            <TabPanel data-aos="fade-right">
              <ul
                className="portfolio_list"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <li>
                  <div className="inner">
                    <div className="entry portfolio_animation_wrap">
                      <Image
                        style={{
                          objectFit: "scale-down",
                          padding: 32,
                          height: IMAGE_HEIGHT - 30,
                        }}
                        width={300}
                        height={300}
                        src={
                          resolvedTheme === "dark"
                            ? "/img/portfolio/lets-white.png"
                            : "/img/portfolio/lets.png"
                        }
                        alt="Youtube"
                        data-tip
                        data-for="youtube"
                        data-tooltip-id={"youtube"}
                        onClick={() => setOpenYoutube(true)}
                      />
                      <ReactTooltip
                        style={{ maxWidth: 350 }}
                        id="youtube"
                        place="bottom"
                        variant="light"
                        float
                        render={() => (
                          <div className="tooltip-wrapper">
                            <h5>Lets web platform</h5>
                            <span>
                              B2B SAAS Platform for Corporate Volunteering &
                              Giving.
                            </span>
                          </div>
                        )}
                      />
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li>
                  <div className="inner">
                    <div className="entry portfolio_animation_wrap">
                      <Image
                        style={{
                          objectFit: "scale-down",
                          padding: 32,
                          height: IMAGE_HEIGHT,
                        }}
                        width={300}
                        height={300}
                        src="/img/portfolio/laso.svg"
                        alt="Details"
                        data-tip
                        data-for="detail2"
                        data-tooltip-id={"detail2"}
                        onClick={() =>
                          window.open(
                            "https://www.lasoexperience.com",
                            "__blank"
                          )
                        }
                      />

                      <ReactTooltip
                        style={{ maxWidth: 350 }}
                        id="detail2"
                        place="bottom"
                        variant="light"
                        float
                        render={() => (
                          <div className="tooltip-wrapper">
                            <h5>Lasoexperience.com</h5>
                            <span>
                              Highly configurable CMS for personalized Guest
                              Journeys and Revenue Growth.
                            </span>
                          </div>
                        )}
                      />
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}
              </ul>
              <div
                className="button"
                data-position="left"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div className="button" data-position="left">
                  <a
                    href="https://romanzhydyk.s3.eu-west-2.amazonaws.com/Roman_Zhydyk_-_Software_Engineer_2024.pdf"
                    target="__blank"
                    download
                  >
                    <span>More details</span>
                  </a>
                </div>
              </div>
            </TabPanel>

            {/* END ALL PORTFOLIO */}
          </div>
          {/* END LIST WRAPPER */}
        </Tabs>
      </Gallery>

      {/* START YOUTUBE VIDEO POPUP */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpenYoutube}
        videoId="Sw7GagW9IHo"
        onClose={() => setOpenYoutube(false)}
      />
      {/* EMD YOUTUBE VIDEO POPUP */}

      {/* START VIMEO VIDEO POPUP  */}
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpenVimeo}
        videoId="100171151"
        onClose={() => setOpenVimeo(false)}
      />
      {/* END VIMEO VIDEO POPUP */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        ariaHideApp={false}
        isOpen={isOpenModalOne}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}

          <ModalOne />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        ariaHideApp={false}
        isOpen={isOpenModalTwo}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <ModalTwo />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
    </>
  );
};

export default Portfolio;
