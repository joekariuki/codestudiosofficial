import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";


import cremeDeLaCreme from "../../../assets/images/portfolio/Demons-Of-Amerikkka/creme-de-la-creme.png";
import artOfWar from "../../../assets/images/portfolio/Demons-Of-Amerikkka/art-of-war.png";

function DemonsOfAmerikkkaPage() {
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

          <div className="pb-8">
            <div className="artwork-image">
              <img src={cremeDeLaCreme} />
            </div>
            <p className="uppercase pt-4 text-base font-bold">“Creme de la Creme”</p>
            <p>Charcoal, graphite, and color pencil on construction paper</p>
          </div>

          <div className="pb-8">
            <div className="artwork-image">
              <img src={artOfWar} />
            </div>
            <p className="uppercase pt-4 text-base font-bold">“Art of War”</p>
            <p>(1/3)</p>
            <p>Charcoal, graphite, copic markers, acrylic paint, and collage on construction paper</p>
            <p>12” x 24”</p>
          </div>


        </div>
      </section>
    </Layout>
  );
}

export default DemonsOfAmerikkkaPage;
