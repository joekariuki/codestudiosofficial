import React from "react";
import Checkout from "../../components/checkout";

import Lightbox from "../../components/lightbox";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

function ShopPage() {
  return (
    <Layout>
      <SEO keywords={[`The Code Studios`, `Fashion`, `Shop`]} title="Shop" />
      <section className="container text-black body-font overflow-hidden">
        <div className="w-full">
          <h1 className="text-center uppercase font-bold text-2xl tracking-wide">
            Shop
          </h1>

          <div className="container px-5 pt-4 pb-12 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <div className="lg:w-1/2 w-full lg:mt-0">
                <Lightbox />
              </div>

              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-black text-4xl title-font font-bold mb-1">
                  LIMITED EDITION: “ART OF WAR” VEST + JACKET SET
                </h1>

                <h2 className="mt-4 title-font font-medium text-3xl">
                  $80.00
                </h2>
                <span className="mt-2 text-sm italic font-bold">
                  *Shipping costs included*
                </span>

                <p className="mt-4 text-sm">
                  <ul className="list-inside list-disc">
                    <li>UNISEX</li>
                    <li>ONE SIZE</li>
                    <li>LARGE FIT</li>
                    <li>100% NYLON</li>
                    <li>DRY CLEAN</li>
                  </ul>
                </p>

                <p className="leading-relaxed py-6">
                  Detachable vest and jacket set inspired by the drawing, “Art
                  of War,” from the political series “Demons of Amerikkka” by
                  Peyton, The Artist. View the whole series under the “ARTWORK”
                  tab.
                </p>

                <div className="flex">
                  <Checkout />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ShopPage;
