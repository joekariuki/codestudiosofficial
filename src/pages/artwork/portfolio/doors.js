import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

import visions from "../../../assets/images/portfolio/doors/visions.png";

function DoorsPage() {
  // Doors Artwork
  const portfolio = [
    {
      img: `${visions}`,
      title: `“Visions”`,
      description: `Indian ink on watercolor paper`,
      size: `25.5”x 19.5”`,
    },
  ];
  return (
    <Layout>
      <SEO
        keywords={[`The Code Studios`, `Artwork`, `Portfolio`, `Doors`]}
        title="Doors"
      />
      <section className="container text-black body-font">
        <div className="text-center w-full">
          <h1 className="uppercase pb-8 font-bold text-xl tracking-wide">
            Doors
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

export default DoorsPage;
