import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo"; 

function DemonsOfAmerikkkaPage() {
  return (
    <Layout>
      <SEO
        keywords={[`The Code Studios`, `About`, `The Brand`]}
        title="The Brand"
      />
      <section className="text-black body-font">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="text-center w-full">
            <h1 className="uppercase pb-12 text-2xl tracking-wide">Demons of Amerikkka</h1>
            
            
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default DemonsOfAmerikkkaPage;
