import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ReturnsAndExchangesPage() {
  return (
    <Layout>
      <SEO
        keywords={[`The Code Studios`, `Returns & Exchanges`]}
        title="Returns &amp; Exchanges"
      />
      <section className="container text-black body-font overflow-hidden">
        <div className="w-full">
          <h1 className="text-center uppercase font-bold text-2xl tracking-wide">
            Returns &amp; Exchanges
          </h1>

          <div className="container px-5 py-12 mx-auto text-lg">
            <h2 className="font-bold text-xl tracking-wide uppercase underline mb-4">
              Products
            </h2>

            <p className="uppercase mb-4">
              DUE TO COVID-19, ALL SALES ARE FINAL. IF YOU HAVE ANY QUESTIONS
              REGARDING A PURCHASE, PLEASE EMAIL{" "}
              <a
                className="underline font-bold"
                href="mailto:thecodestudios@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                THECODESTUDIOSOFFICIAL@GMAIL.COM.
              </a>
            </p>

            <h2 className="font-bold text-xl tracking-wide uppercase underline mb-4">
              Artwork
            </h2>
            <p className="uppercase mb-4">
              IF YOU HAVE ANY QUESTIONS REGARDING THE PURCHASE OF COMMISIONED
              ARTWORK, PLEASE EMAIL{" "}
              <a
                className="underline font-bold"
                href="mailto:thecodestudios@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                PEYTON.E.THEARTIST@GMAIL.COM.
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ReturnsAndExchangesPage;
