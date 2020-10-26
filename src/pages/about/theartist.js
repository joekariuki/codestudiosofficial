import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import artistImage from "../../assets/images/artist.png";

function TheArtistPage() {
  return (
    <Layout>
      <SEO
        keywords={[`The Code Studios`, `About`, `The Artist`, `Peyton Euriah`]}
        title="The Artist"
      />
      <section className="body-font">
        <h1 className="text-center uppercase text-2xl tracking-wide">The Artist</h1>
        <div className="container mx-auto flex pt-10 pb-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center mb-4"
              alt="Image of the artist and founder, Peyton Euriah"
              src={artistImage}
            />
            <span className="text-lg uppercase leading-relaxed tracking-wider">Peyton Euriah, Founder of The Code Studios</span>
          </div>

          <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center text-lg">
            <p className="mb-4 leading-relaxed">
              My name is Peyton, the Artist, and I’ve been a creator for pretty
              much all my life. I was born to an interior designer/event planner
              and architect in Los Angeles, California, and am a self-taught
              visual artist. I earned a B.S. degree in Studio Art with a double
              minor in fashion merchandising and business in 2020, and have
              continued to pursue my creative endeavors through my platform, The
              Code Studios.
            </p>
            <p className="mb-4 leading-relaxed">
              Growing up in a household that fostered family, God, the arts, and
              vision, my passion for art, design, and fashion was fueled at a
              fairly young age. My vision for The Code Studios came about when I
              was only twelve years old after being influenced by unconventional
              artists and fashion designers such as my father, Patrick Nagel,
              Jean-Michel Basquiat, Paco Rabanne, and Alexander McQueen.
            </p>
            <p className="mb-4 leading-relaxed">
              Since that moment, I have stopped at nothing to see to it that
              that vision was fulfilled. My desire in creating this platform is
              to bridge the gap between art, design, and fashion through my
              creations and collaborations with other groundbreaking creatives.
              However, more importantly, I hope to help my generation of
              creators grow more accustomed to coming together to share ideas,
              cross/integrate mediums, and produce bodies of art that speak to
              our experiences as living, walking canvases with unique
              identities, abilities, and stories to tell.
            </p>            
          </div>
        </div>
      </section>
    </Layout>
  );
}

{
  /* <section className="text-black body-font overflow-hidden">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="text-center w-full">
            <h1 className="uppercase pb-12 text-2xl">The Artist</h1>
            <div className="flex flex-wrap">
              <img
                src={artistImage}
                className="lg:w-3/5 w-full lg:h-auto h-auto object-cover object-center"
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                My name is Peyton, the Artist, and I’ve been a creator for
                pretty much all my life. I was born to an interior
                designer/event planner and architect in Los Angeles, California,
                and am a self-taught visual artist. I earned a B.S. degree in
                Studio Art with a double minor in fashion merchandising and
                business in 2020, and have continued to pursue my creative
                endeavors through my platform, The Code Studios.
              </div>
            </div>
          </div>
        </div>
      </section> */
}

export default TheArtistPage;
