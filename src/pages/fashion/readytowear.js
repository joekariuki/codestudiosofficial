import React from "react";
import Checkout from "../../components/checkout";


import jacketImage from "../../assets/images/shop/demonsofamerikka-vest-and-jacket.jpg";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

function ReadyToWearPage() {
  return (
    <Layout>
      <SEO
        keywords={[`The Code Studios`, `Fashion`, `Ready To Wear`]}
        title="Ready To Wear"
      />
      <section className="container text-black body-font overflow-hidden">
        <div className="w-full">
          <h1 className="text-center uppercase font-bold text-2xl tracking-wide">
            Ready to Wear
          </h1>

          <div className="container px-5 py-12 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center"
                src={jacketImage}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-black text-4xl title-font font-bold mb-1">
                  “ART OF WAR” Vest and Jacket Set
                </h1>

                <h2 className="mt-4 title-font font-medium text-3xl">
                  $100.00
                </h2>

                <p className="leading-relaxed py-8">
                  100% Nylon Unisex vest and jacket set inspired by the drawing
                  , “Art of War,” from the political series “Demons of
                  Amerikkka” by Peyton, The Artist.
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

export default ReadyToWearPage;
