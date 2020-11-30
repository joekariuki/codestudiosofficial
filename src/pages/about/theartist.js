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
        <h1 className="text-center uppercase text-2xl tracking-wide">
          The Artist
        </h1>
        <div className="container mx-auto flex pt-10 pb-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center mb-4"
              alt="Image of the artist and founder, Peyton Euriah"
              src={artistImage}
            />
            <span className="text-lg uppercase leading-relaxed tracking-wider">
              Peyton Euriah, Founder of The Code Studios
            </span>
          </div>

          <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center text-lg">
            <p className="mb-4 leading-relaxed">
              Peyton E. <span className="italic">“The Artist”</span> Burnett was
              born in Los Angeles, CA in 1997. She earned a B.S. in Studio Art
              with a concentration in painting, and a double minor in Fashion
              Merchandising and Business, at Marist College in 2020. Peyton’s
              art and focuses of study have allowed her to travel throughout 21
              countries along Southeast and East Asia, Europe, and Africa.
            </p>
            <p className="mb-4 leading-relaxed">
              Her works have been exhibited in the US and abroad including a
              student-organized exhibition at the 2019 Venice Biennale Festival,
              and various creative pop-up shops throughout Southern California.
              She has also been commissioned to do live painting for different
              types of events (including corporate) such as the Los Angeles
              Neighborhood Housing Services 35th Anniversary at the famed
              Paramount Studios NY set in 2019.Her works have been recognized in
              a number of news and media outlets such as Voyage LA magazine,
              Black Design Collective, and Marist College’s “For the Record”,
              curated by Marist Circle.
            </p>
            <p className="mb-4 leading-relaxed">
              Peyton currently resides in Los Angeles continuing her art,
              fashion &#38; designs through her company, THE CODE STUDIOS, with
              the intention of creating an immersive atmosphere for artists of
              all skillsets to create and collaborate in, empowering the Black
              community through art, and designing merchandise that combines her
              favorite mediums to express her avant garde style.
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
