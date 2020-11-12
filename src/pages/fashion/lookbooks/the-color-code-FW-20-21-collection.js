import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";


import colorCodeFW1 from "../../../assets/images/lookbooks/the-color-code-FW-20-21-collection-1.png";
import colorCodeFW2 from "../../../assets/images/lookbooks/the-color-code-FW-20-21-collection-2.png";
import colorCodeFW3 from "../../../assets/images/lookbooks/the-color-code-FW-20-21-collection-3.png";
import colorCodeFW4 from "../../../assets/images/lookbooks/the-color-code-FW-20-21-collection-4.png";
import colorCodeFW5 from "../../../assets/images/lookbooks/the-color-code-FW-20-21-collection-5.png";
import colorCodeFW6 from "../../../assets/images/lookbooks/the-color-code-FW-20-21-collection-6.png";
import colorCodeFW7 from "../../../assets/images/lookbooks/the-color-code-FW-20-21-collection-7.png";
import colorCodeFW8 from "../../../assets/images/lookbooks/the-color-code-FW-20-21-collection-8.png";
import colorCodeFW9 from "../../../assets/images/lookbooks/the-color-code-FW-20-21-collection-9.png";
import colorCodeFW10 from "../../../assets/images/lookbooks/the-color-code-FW-20-21-collection-10.png";
import colorCodeFW11 from "../../../assets/images/lookbooks/the-color-code-FW-20-21-collection-11.png";
import colorCodeFW12 from "../../../assets/images/lookbooks/the-color-code-FW-20-21-collection-12.png";
import colorCodeFW13 from "../../../assets/images/lookbooks/the-color-code-FW-20-21-collection-13.png";
import colorCodeFW14 from "../../../assets/images/lookbooks/the-color-code-FW-20-21-collection-14.png";

function TheColorCodeFWCollectionPage() {
  const lookBook = [
    {
      id: `1`,
      src: `${colorCodeFW1}`,
    },
    {
      id: `2`,
      src: `${colorCodeFW2}`,
    },
    {
      id: `3`,
      src: `${colorCodeFW3}`,
    },
    {
      id: `4`,
      src: `${colorCodeFW4}`,
    },
    {
      id: `5`,
      src: `${colorCodeFW5}`,
    },
    {
      id: `6`,
      src: `${colorCodeFW6}`,
    },
    {
      id: `7`,
      src: `${colorCodeFW7}`,
    },
    {
      id: `8`,
      src: `${colorCodeFW8}`,
    },
    {
      id: `9`,
      src: `${colorCodeFW9}`,
    },
    {
      id: `10`,
      src: `${colorCodeFW10}`,
    },
    {
      id: `11`,
      src: `${colorCodeFW11}`,
    },
    {
      id: `12`,
      src: `${colorCodeFW12}`,
    },
    {
      id: `13`,
      src: `${colorCodeFW13}`,
    },
    {
      id: `14`,
      src: `${colorCodeFW14}`,
    },
  ];
  return (
    <Layout>
      <SEO
        keywords={[
          `The Code Studios`,
          `Fashion`,
          `Lookbooks`,
          `The Color Code F:W '20-21 Collection`,
        ]}
        title="The Color Code - Tshirts"
      />
      <section className="text-black body-font">
        <div className="text-center w-full">
          <h1 className="uppercase pb-2 font-bold text-2xl tracking-wide">
            The Color Code F:W &apos;20-21 Collection
          </h1>
          {lookBook.map((image) => (
            <div className="pb-2" key={image.id}>
              <div className="artwork-image">
                <img src={image.src} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default TheColorCodeFWCollectionPage;
