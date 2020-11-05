import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

import redGirl from "../../../assets/images/portfolio/colors/red-girl.png";
import blueGirl from "../../../assets/images/portfolio/colors/blue-girl.png";
import brown from "../../../assets/images/portfolio/colors/brown.png";

function ColorsPage() {
  // Colors Artwork
  const portfolio = [
    {
      img: `${blueGirl}`,
      title: `“Blue Girl”`,
      description: `Acrylic paint on canvas`,
      size: `24” x 18”`,
    },
    {
      img: `${redGirl}`,
      title: `“Red Girl”`,
      description: `Acrylic paint on canvas`,
      size: `20” x 16”`,
    },
    {
      img: `${brown}`,
      title: `“Brown”`,
      description: `Acrylic paint on canvas`,
      size: `16” x 20”`,
    },
  ];

  return (
    <Layout>
      <SEO
        keywords={[`The Code Studios`, `Artwork`, `Portfolio`, `Colors`]}
        title="Colors"
      />
      <section className="container text-black body-font">
        <div className="text-center w-full">
          <h1 className="uppercase pb-8 font-bold text-xl tracking-wide">
            Colors
          </h1>

          {portfolio.map((artwork) => (
            <div className="pb-8" key={artwork.title}>
              <div className="artwork-image">
                <img src={artwork.img} />
              </div>
              <p className="uppercase pt-4 text-base font-bold">
                {artwork.title}
              </p>
              <p>{artwork.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default ColorsPage;
