import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import logo from "../../assets/images/brand-logo.png";

function TheBrandPage() {
  return (
    <Layout>
      <SEO
        keywords={[`The Code Studios`, `About`, `The Brand`]}
        title="The Brand"
      />
      <section className="text-black body-font">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="text-center w-full">
            <h1 className="uppercase pb-12 text-2xl tracking-wide">
              The Brand
            </h1>
            <p className="px-10 flex items-center mb-4">
              The Code Studios is a contemporary art, design, and fashion brand
              founded by Peyton, the Artist. We are built upon the principle of
              producing unique clothing, art, and content, “For creatives, by
              creatives,” and are represented by those that create with purpose
              in their own way. Through this platform, we aim to connect
              creatives and audiences through various artistic mediums, skill
              sets, and backgrounds. Guided by Peyton, the Artist, this network
              of creative voices will work in synergy to produce merchandise and
              content that is raw, expressive and pierces through the “normal
              atmosphere” of creativity. Music, film, fashion, painting,
              drawing, sculpting, graffiti, dance, and other forms of expression
              all fall under this umbrella, and are the sound pieces that we use
              to create and establish our identities in a world that has
              high-jacked truth and authenticity.
            </p>
            <p className="mb-4">
              Our art cannot be copied nor perverted. This is our thumbprint.
              Our identity. Our truth. Our code.
            </p>
            <div style={brandImage}>
              <img src={logo} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

const brandImage = {
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
};

export default TheBrandPage;
