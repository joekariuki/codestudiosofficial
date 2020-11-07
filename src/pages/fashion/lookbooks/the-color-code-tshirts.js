import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

import colorCodeTshirt1 from "../../../assets/images/lookbooks/the-color-code-solo-drop-1.png";
import colorCodeTshirt2 from "../../../assets/images/lookbooks/the-color-code-solo-drop-2.png";
import colorCodeTshirt3 from "../../../assets/images/lookbooks/the-color-code-solo-drop-3.png";
import colorCodeTshirt4 from "../../../assets/images/lookbooks/the-color-code-solo-drop-4.png";
import colorCodeTshirt5 from "../../../assets/images/lookbooks/the-color-code-solo-drop-5.png";
import colorCodeTshirt6 from "../../../assets/images/lookbooks/the-color-code-solo-drop-6.png";
import colorCodeTshirt7 from "../../../assets/images/lookbooks/the-color-code-solo-drop-7.png";
import colorCodeTshirt8 from "../../../assets/images/lookbooks/the-color-code-solo-drop-8.png";

function TheColorCodeTshirtsPage() {
  const lookBook = [
    {
      id: `1`,
      src: `${colorCodeTshirt1}`,
    },
    {
      id: `2`,
      src: `${colorCodeTshirt2}`,
    },
    {
      id: `3`,
      src: `${colorCodeTshirt3}`,
    },
    {
      id: `4`,
      src: `${colorCodeTshirt4}`,
    },
    {
      id: `5`,
      src: `${colorCodeTshirt5}`,
    },
    {
      id: `6`,
      src: `${colorCodeTshirt6}`,
    },
    {
      id: `7`,
      src: `${colorCodeTshirt7}`,
    },
    {
      id: `8`,
      src: `${colorCodeTshirt8}`,
    },
  ];
  return (
    <Layout>
      <SEO
        keywords={[
          `The Code Studios`,
          `Fashion`,
          `Lookbooks`,
          `The Color Code - Tshirts`,
        ]}
        title="The Color Code - Tshirts"
      />
      <section className="text-black body-font">
        <div className="text-center w-full">
          <h1 className="uppercase pb-8 font-bold text-2xl tracking-wide">
            The Color Code - Tshirts
          </h1>
          {lookBook.map((image) => (
            <div className="pb-8" key={image.id}>
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

export default TheColorCodeTshirtsPage;
