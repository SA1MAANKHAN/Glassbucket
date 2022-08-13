import React from "react";

// react-responsive-carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// share state with context api
import { useStateValue } from "../../stateManagement/stateProvider.state";

// hero images
import Img1 from "../../assets/images/hero-section/img1.png";
import Img2 from "../../assets/images/hero-section/img2.png";
import Img3 from "../../assets/images/hero-section/img3.png";
import Img4 from "../../assets/images/hero-section/img4.png";

// styles
import "./hero.styles.scss";

import Catagories from "../catagories/catagories.component";

function Hero() {
  const [{ showCatagories }, dispatch] = useStateValue();

  return (
    <>
      {showCatagories ? <Catagories /> : ""}
      <div className="hero">
        <div className="imageCarousel">
          <Carousel
            infiniteLoop={true}
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            autoPlay={true}
            useKeyboardArrows={false}
            dynamicHeight={true}
            stopOnHover={false}
          >
            <div>
              <img className="carouselImage" src={Img1} />
            </div>
            <div>
              <img className="carouselImage" src={Img2} />
            </div>
            <div>
              <img className="carouselImage" src={Img3} />
            </div>
            <div>
              <img className="carouselImage" src={Img4} />
            </div>
          </Carousel>
        </div>
        <div className="carouselOverlay"></div>
        <div className="hero-text">
          <h1>
            Find Your <br /> Perfect Pair
          </h1>
        </div>
      </div>
    </>
  );
}

export default Hero;
