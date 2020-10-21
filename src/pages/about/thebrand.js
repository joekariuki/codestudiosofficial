import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo"; 
import logo from "../../assets/images/brand-logo.png"

function TheBrandPage() {
  return (
    <Layout>
      <SEO
        keywords={[`The Code Studios`, `About`, `The Brand`]}
        title="The Brand"
      />
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-56 md:flex-row flex-col items-center">
          <div className="text-center w-full">
            <h1 className="uppercase pb-12 text-2xl">The Brand</h1>
            <p className="flex items-center mb-4">
              The Code Studios is a contemporary art, design, and fashion brand
              founded by Peyton, the Artist. We are built upon the principle of
              producing artistic clothing, art, and content, “For creatives, by
              creatives,” and are represented by those who dare to create with
              purpose in their own unique way. Through this platform, we aim to
              connect creatives and audiences through various artistic mediums,
              skill sets, and backgrounds. Guided by Peyton, the Artist, this
              network of creative voices will work in synergy to produce
              merchandise and content that is raw, expressive and pierces
              through the “normal atmosphere” of creativity. Music, film,
              fashion, painting, drawing, sculpting, graffiti, dance, and other
              forms of expression all fall under this umbrella, and are the
              sound pieces that we use to create and establish our identities in
              a world that has high-jacked truth and authenticity.
            </p>
            <p className="mb-4">
              Our art cannot be copied nor perverted. This is our thumbprint.
              Our identity. Our truth. Our code.
            </p>
            <p>We are The Code Studios</p>
            <div className="flex items-center">
              <img src={logo} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default TheBrandPage;
