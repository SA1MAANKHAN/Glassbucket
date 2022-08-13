import React from "react";

import Img1 from "../../assets/offers/1.jpg";
import Img2 from "../../assets/offers/2.jpg";
import Img3 from "../../assets/offers/3.jpg";
import Img4 from "../../assets/offers/4.jpg";
import Img5 from "../../assets/offers/5.jpg";

import "./offers.styles.scss";

function Offers() {
  return (
    <div className="offers">
      <h1>End of Season Sale!</h1>
      <div className="offer__grid">
        <div className="offer">
          <img src={Img1} alt="" />
          <div className="offer__overlay"></div>
          <h1>Eye Glasses</h1>
        </div>
        <div className="offer">
          <img src={Img2} alt="" />
          <div className="offer__overlay"></div>
          <h1> Sunglasses</h1>
        </div>
        <div className="offer">
          <img src={Img3} alt="" />
          <div className="offer__overlay"></div>
          <h1> Power Glasses</h1>
        </div>
        <div className="offer">
          <img src={Img4} alt="" />
          <div className="offer__overlay"></div>
          <h1>Computer Glasses</h1>
        </div>
        <div className="offer">
          <img src={Img5} alt="" />
          <div className="offer__overlay"></div>
          <h1>Lenses</h1>
        </div>
      </div>
    </div>
  );
}

export default Offers;
