import PropTypes from "prop-types";
import React from "react";

import "../css/index.css";

import Header from "./header";
import Footer from "./footer";

function IndexLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans" id="background">
      <Header />
      <main className="body-font">{children}</main>
      <Footer />
    </div>
  );
}


IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IndexLayout;
