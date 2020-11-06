import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

import cremeDeLaCreme from "../../../assets/images/portfolio/demonsofamerikkka/creme-de-la-creme.png";
import artOfWar from "../../../assets/images/portfolio/demonsofamerikkka/art-of-war.png";
import kingAlfred from "../../../assets/images/portfolio/demonsofamerikkka/king-alfred-cold-game.png";
import demonsOfAmerikkka from "../../../assets/images/portfolio/demonsofamerikkka/demons-of-amerikkka.png";

function DemonsOfAmerikkkaPage() {
  // Demons of Amerikkka Artwork
  const portfolio = [
    {
      img: `${cremeDeLaCreme}`,
      title: `"Creme De La Creme”`,
      number: ``,
      description: `Charcoal, graphite, and color pencil on construction paper`,
      size: ``,
    },
    {
      img: `${artOfWar}`,
      title: `“Art of War”`,
      number: `(1/3)`,
      description: `Charcoal, graphite, copic markers, acrylic paint, and collage on construction paper`,
      size: `12” x 24”`,
    },
    {
      img: `${kingAlfred}`,
      title: `“King Alfred's Cold Game”`,
      number: `(2/3)`,
      description: `Oil paint and resin on two 36” x 36” canvases (diptic)`,
      size: `36” x 72”`,
    },
    {
      img: `${demonsOfAmerikkka}`,
      title: `“Demons of Amerikkka”`,
      number: `(3/3)`,
      description: `Oil paint on canvas`,
      size: `6” x 10”`,
    },
  ];
  return (
    <Layout>
      <SEO
        keywords={[
          `The Code Studios`,
          `Artwork`,
          `Portfolio`,
          `Demons of Amerikkka`,
        ]}
        title="Demons of Amerikkka"
      />
      <section className="container text-black body-font">
        <div className="text-center w-full">
          <h1 className="uppercase pb-8 font-bold text-xl tracking-wide">
            Demons of Amerikkka
          </h1>
          {portfolio.map((artwork) => (
            <div className="pb-8" key={artwork.title}>
              <div className="artwork-image">
                <img src={artwork.img} />
              </div>
              <p className="uppercase pt-4 text-base font-bold">
                {artwork.title}
              </p>
              <p>{artwork.number}</p>
              <p>{artwork.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default DemonsOfAmerikkkaPage;
