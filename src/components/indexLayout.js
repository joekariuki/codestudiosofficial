import PropTypes from "prop-types";
import React from "react";

import "../css/index.css";

import IndexHeader from "./indexHeader";
import IndexFooter from "./indexFooter";
import backgroundVideo from "../assets/videos/bts-video-edited.mp4";
import backgroundImage from "../assets/images/bg-image.png";

function IndexLayout({ children }) {
  return (

    <div>
      <div className="background-video-container">
        <video
          playsInline
          autoPlay
          muted
          loop
          poster={backgroundImage}
          id="bg-vid"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        <div className="background-video-overlay"></div>

        <div className="viewport-area">
          <div className="flex flex-col min-h-screen font-sans">
            <IndexHeader />
            <main className="px-4 py-6 md:px-8 md:py-12">{children}</main>
            <IndexFooter />
          </div>
        </div>


      </div>
    </div>
  );
}


IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IndexLayout;
