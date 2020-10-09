import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

function TheBrandPage() {
  return (
    <Layout>
      <SEO
        keywords={[`The Code Studios`, `About`, `The Brand`]}
        title="The Brand"
      />
      <header>
          Header
      </header>
      <section>
        <h1>THE BRAND</h1>
      </section>
    </Layout>
  );
}

export default TheBrandPage;
