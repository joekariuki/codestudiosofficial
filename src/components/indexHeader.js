import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

function IndexHeader() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery2 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-transparent font-sans">
      <div className="mx-auto flex flex-wrap pt-6 px-24 flex-col md:flex-row items-center">
      <button
          className="flex items-center block px-3 py-2 text-white border-none md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <Link to="/">
          <h1 className="flex items-center text-white no-underline">
            <span className="text-xl font-medium font-sans tracking-widest uppercase">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link>
        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto ml-auto uppercase`}
        >
          {[
            {
              route: `/about`,
              title: `About`,
            },
            {
              route: `/artwork`,
              title: `Artwork`,
            },
            {
              route: `/fashion`,
              title: `Fashion`,
            }
          ].map((link) => (
            <Link
              className="block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="px-16 mt-6">
        <hr className="border-solid border-1 border-white"></hr>
      </div>
    </header>
  );
}

export default IndexHeader;

