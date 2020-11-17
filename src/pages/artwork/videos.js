import React from "react";
// import "../../css/"

import Layout from "../../components/layout";
import SEO from "../../components/seo";

function ArtworkVideosPage() {
  const videos = [
    {
      id: `1`,
      name: `Saweetie Painting`,
      url: `https://www.youtube.com/embed/RObFdEGrD7Q`,
    },
    {
      id: `2`,
      name: `Tommy Sketch Painting`,
      url: `https://www.youtube.com/embed/BhRY-1ZlGfE`,
    },
  ];

  return (
    <Layout>
      <SEO
        keywords={[`The Code Studios`, `Artwork`, `Videos`]}
        title="Artwork Videos"
      />
      <section className="container text-black body-font">
        <div className="text-center w-full">
          <h1 className="uppercase pb-8 font-bold text-2xl tracking-wide">
            Artwork Videos
          </h1>

          {videos.map((video) => (
            <div className="pb-8" key={video.id}>
              <div className="video-container">
                {" "}
                <iframe
                  src={video.url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullscreen
                ></iframe>
              </div>

              <p className="uppercase pt-4 text-lg font-bold">{video.name}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default ArtworkVideosPage;
