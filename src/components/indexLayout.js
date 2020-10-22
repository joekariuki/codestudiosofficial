import PropTypes from "prop-types";
import React from "react";

import "../css/index.css";

import IndexHeader from "./indexHeader";
import IndexFooter from "./indexFooter";

function IndexLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans" id="background">
      <IndexHeader />
      <main className="body-font">{children}</main>
      <IndexFooter />
    </div>
  );
}


IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IndexLayout;
