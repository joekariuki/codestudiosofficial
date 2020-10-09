import React from "react";

import "../css/index.css";

import IndexLayout from "../components/indexLayout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <IndexLayout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-56 md:flex-row flex-col items-center">
          <div className="text-center w-full">
            <h1
              style={heroTitle}
              className="tracking-widest title-font sm:text-4xl font-medium text-white uppercase"
            >
              The Code
            </h1>
            <h1 className="title-font text-3xl mb-16 font-medium text-white uppercase">
              Studios
            </h1>
          </div>
        </div>
      </section>
    </IndexLayout>
  );
}

const heroTitle = {
  fontSize: `64px`,
  letterSpacing: `0.35em`,
};

export default IndexPage;
