import React, { Component } from "react";
import Lightbox from "lightbox-react";
import "lightbox-react/style.css";

import jacketImage1 from "../assets/images/shop/jacket-vest-1.jpg";
import jacketImage2 from "../assets/images/shop/jacket-vest-2.jpg";
import jacketImage3 from "../assets/images/shop/jacket-vest-3.jpg";
import jacketImage4 from "../assets/images/shop/jacket-vest-4.jpg";
import jacketImage5 from "../assets/images/shop/jacket-vest-5.jpg";
import jacketImage6 from "../assets/images/shop/jacket-vest-6.jpg";


const images = [jacketImage1, jacketImage2, jacketImage3, jacketImage4, jacketImage5, jacketImage6];
export default class LightboxExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <div>       
        <button type="button" onClick={() => this.setState({ isOpen: true })} className="h-auto">
        <figure>
            <img className="object-cover object-center" src={jacketImage1}/>         
        </figure>
        <figcaption className="font-medium text-gray-900">Click image to see more pictures.</figcaption>
        </button>                 
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}             
      </div>
    );
  }
}
