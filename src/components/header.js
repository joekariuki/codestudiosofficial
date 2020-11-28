import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";

function Header() {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-black font-sans pb-32" id="header">
      <div className="mx-auto flex flex-wrap pt-6 px-24 flex-col md:flex-row items-center">

        <Link to="/">
          <h1 className="flex items-center text-white no-underline">
            <span className="text-xl font-medium font-sans tracking-widest uppercase">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link>
        
        <nav>
          <label htmlFor="drop" className="toggle text-white ml-2">
            &#8801; Menu
          </label>
          <input type="checkbox" id="drop" />
          <ul className="menu">
            <li>
              {/* <!-- First Tier Drop Down --> */}
              <label htmlFor="drop-1" className="toggle">
                About
              </label>
              <a href="#" className="text-white">
                About
              </a>
              <input type="checkbox" id="drop-1" />
              <ul>
                <li className="bg-white text-black hover:bg-black hover:text-white">
                  <Link to="/about/theartist">The Artist</Link>
                </li>
                <li className="bg-white text-black hover:bg-black hover:text-white">
                  <Link to="/about/thebrand">The Brand</Link>
                </li>
              </ul>
            </li>
            <li>
              {/* <!-- First Tier Drop Down --> */}
              <label htmlFor="drop-2" className="toggle">
                Artwork
              </label>
              <a href="#" className="text-white">
                Artwork
              </a>
              <input type="checkbox" id="drop-2" />
              <ul>
                <li>
                  {/* <!-- Second Tier Drop Down --> */}
                  <label htmlFor="drop-3" className="toggle">
                    Portfolio
                  </label>
                  <a
                    href="#"
                    className="bg-white text-black hover:bg-black hover:text-white"
                  >
                    Portfolio
                  </a>
                  <input type="checkbox" id="drop-3" />
                  <ul>
                    <li className="bg-white text-black hover:bg-black hover:text-white w-64">
                      <Link to="/artwork/portfolio/demonsofamerikkka">
                        Demons of Amerikkka
                      </Link>
                    </li>
                    <li className="bg-white text-black hover:bg-black hover:text-white w-64">
                      <Link to="/artwork/portfolio/colors">Colors</Link>
                    </li>
                    <li className="bg-white text-black hover:bg-black hover:text-white w-64">
                      <Link to="/artwork/portfolio/doors">Doors</Link>
                    </li>
                    <li className="bg-white text-black hover:bg-black hover:text-white w-64">
                      <Link to="/artwork/portfolio/other">Other</Link>
                    </li>
                  </ul>
                </li>
                <li className="bg-white text-black hover:bg-black hover:text-white">
                  <Link to="/artwork/videos">Videos</Link>
                </li>
              </ul>
            </li>
            <li>
              {/* <!-- First Tier Drop Down --> */}
              <label htmlFor="drop-2" className="toggle">
                Fashion
              </label>
              <a href="#" className="text-white">
                Fashion
              </a>
              <input type="checkbox" id="drop-2" />
              <ul>
                <li className="bg-white text-black hover:bg-black hover:text-white">
                  {/* <!-- Second Tier Drop Down --> */}
                  <label htmlFor="drop-3" className="toggle">
                    Lookbooks
                  </label>
                  <a href="#">Lookbooks</a>
                  <input type="checkbox" id="drop-3" />
                  <ul>
                    <li className="bg-white text-black hover:bg-black hover:text-white w-64">
                      <Link to="/fashion/lookbooks/limited-edition-20">
                        Limited Edition &apos;20
                      </Link>
                    </li>
                    <li className="bg-white text-black hover:bg-black hover:text-white w-64">
                      <Link to="/fashion/lookbooks/the-color-code-FW-20-21-collection">
                        The Color Code FW &apos;20-21
                      </Link>
                    </li>
                    <li className="bg-white text-black hover:bg-black hover:text-white w-64">
                      <Link to="/fashion/lookbooks/the-color-code-tshirts">
                        The Color Code Tshirts
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="bg-white text-black hover:bg-black hover:text-white">
                  <Link to="/fashion/readytowear">Ready to Wear</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className="px-16 mt-6">
        <hr className="border-solid border-1 border-white"></hr>
      </div>
    </header>
  );
}

const header = {
  background: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url('../assets/images/background.jpg')`,
};

export default Header;
