import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

import artOfWar1 from "../../../assets/images/lookbooks/art-of-war-limited-edition-1.png"
import artOfWar2 from "../../../assets/images/lookbooks/art-of-war-limited-edition-2.png"
import artOfWar3 from "../../../assets/images/lookbooks/art-of-war-limited-edition-3.png"


function LimitedEdition20Page() {
  const lookBook = [
    {
      number: `1`,
      src: `${artOfWar1}`
    },
    {
      number: `2`,
      src: `${artOfWar2}`
    },
    {
      number: `3`,
      src: `${artOfWar3}`
    },
  ]
  return (
    <Layout>
      <SEO
        keywords={[`The Code Studios`, `Fashion`, `Lookbooks`, `Limited Edition '20`]}
        title="Limited Edition '20"
      />
      <section className="text-black body-font">
        <div className="text-center w-full">
          <h1 className="uppercase pb-8 font-bold text-xl tracking-wide">
            Limited Edition &apos;20
          </h1>
          {lookBook.map((image) => (
            <div className="pb-8" key={image.number}>
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

export default LimitedEdition20Page;
