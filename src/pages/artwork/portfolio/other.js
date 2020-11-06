import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

import maesta from "../../../assets/images/portfolio/other/maesta.png";
import southCentralGospel from "../../../assets/images/portfolio/other/south-central-gospel.png";
import saweetie from "../../../assets/images/portfolio/other/saweetie.png";
import skullStudy from "../../../assets/images/portfolio/other/skull-study.png";

function OtherPage() {
  // Other Artwork
  const portfolio = [
    {
      img: `${maesta}`,
      title: `“Maesta”`,
      description: `Acrylic paint, oil paint, and gold pigment on plywood`,
      size: `30” x 48”`,
    },
    {
      img: `${southCentralGospel}`,
      title: `“South Central Gospel”`,
      subtitle: `Inspired by the song “South Central Gospel” by TRU`,
      description: `Charcoal, graphite, acrylic paint, and Indian ink on watercolor paper`,
      size: `5” x 5”`,
    },
    {
      img: `${saweetie}`,
      title: `“Saweetie”`,
      description: `Oil paint, gold pigment, and 23k gold foil sheets on canvas`,
      size: `48” x 48”`,
    },
    {
      img: `${skullStudy}`,
      title: `“Skull Study”`,
      description: `Oil paint on paper`,
      size: `4” x 4F”`,
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
            Other
          </h1>

          {portfolio.map((artwork) => (
            <div className="pb-8" key={artwork.title}>
              <div className="artwork-image">
                <img src={artwork.img} />
              </div>
              <p className="uppercase pt-4 text-base font-bold">
                {artwork.title}
              </p>
              <p>{artwork.subtitle}</p>
              <p>{artwork.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default OtherPage;
