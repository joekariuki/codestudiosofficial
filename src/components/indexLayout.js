import PropTypes from "prop-types";
import React from "react";

import "../css/index.css";

import IndexHeader from "./indexHeader";
import IndexFooter from "./indexFooter";
import backgroundVideo from "../assets/videos/bts-video-edited.mp4";
import videoPoster from "../assets/images/bg-image.png";

function IndexLayout({ children }) {
  return (
    <>
      <video
        playsInline
        autoPlay
        muted
        loop
        id="bg-video"
        poster={videoPoster}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>



        <div className="flex flex-col min-h-screen font-sans viewport-area">
          <IndexHeader />
          <main className="px-4 py-6 md:px-8 md:py-12 bg-video-text-overlay">
            {children}
          </main>
          <IndexFooter />
        </div>
    </>
  );
}

IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IndexLayout;
