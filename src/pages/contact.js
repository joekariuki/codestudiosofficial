import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`the code studios`, `contact`]}
        title="Contact"
      />
      <section className="text-black body-font">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="text-center w-full">
            <h1 className="uppercase pb-12 text-2xl tracking-wide">Contact</h1>
            <p className="px-10 flex items-center mb-4">
              If you would like to contact me, for commission work or have any
              question or concerns. Please send an email to me{" "}
              <a
                className="underline"
                href="mailto:thecodestudios@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                here
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
