import { Link } from "gatsby";
import React from "react";

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
              className="tracking-widest title-font sm:text-4xl mb-16 font-medium text-white uppercase"
            >
              The Code Studios
            </h1>
            <div className="flex justify-center mb-2">
              <Link
                to="/artwork"
                className="inline-flex text-gray-900 tracking-widest font-bold bg-white border-0 py-2 px-6 rounded-sm text-base uppercase focus:outline-none"
              >
                View artwork
              </Link>
            </div>
          </div>
        </div>
      </section>
    </IndexLayout>
  );
}

const heroTitle = {
  fontSize: `64px`,
};

export default IndexPage;
