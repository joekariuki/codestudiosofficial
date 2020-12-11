import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ShippingPage() {
  return (
    <Layout>
      <SEO keywords={[`The Code Studios`, `Shipping`]} title="Shipping" />
      <section className="container text-black body-font overflow-hidden">
        <div className="w-full">
          <h1 className="text-center uppercase font-bold text-2xl tracking-wide">
            Shipping
          </h1>

          <div className="container px-5 py-12 mx-auto text-lg">

            <p className="uppercase mb-4">
              ALL ORDERS, INCLUDING COMMISIONS, WILL BE PROCESSED WITHIN 3-5
              BUSINESS DAYS OF CONFIRMATION. INTERNATIONAL PURCHASES WILL BE
              SUBJECT TO ADDITIONAL TAXES AND FEES AND WILL BE PROCESSED WITHIN
              7 -10 BUSINESS DAYS OF CONFIRMATION. THE CODE STUDIOS WILL NOT BE
              RESPONSIBLE FOR THOSE FEES.
            </p>

            <p className="font-bold uppercase mb-4">WE SHIP ALL ITEMS VIA USPS.</p>
            <p className="uppercase mb-4">
              DUE TO COVID-19, YOUR ORDER MAY BE DELAYED. THANK YOU IN ADVANCE
              FOR YOUR PATIENCE AS WE ARE WORKING DILIGENTLY TO ENSURE THAT THE
              HIGH QUALITY AND MAINTENANCE OF OUR PRODUCTION REMAINS AS SUCH,
              AND DONE IN A TIMELY MANNER.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ShippingPage;
