import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../assets/images/home/01.jpg";
import img2 from "../assets/images/home/02.jpg";
import img3 from "../assets/images/home/03.png";
import img4 from "../assets/images/home/04.jpg";
import img5 from "../assets/images/home/05.png";
import img6 from "../assets/images/home/06.png";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={img1} alt="Slide 1" />
        </div>
        <div>
          <img src={img2} alt="Slide 2" />
        </div>
        <div>
          <img src={img3} alt="Slide 3" />
        </div>
        <div>
          <img src={img4} alt="Slide 4" />
        </div>
        <div>
          <img src={img5} alt="Slide 5" />
        </div>
        <div>
          <img src={img6} alt="Slide 6" />
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
