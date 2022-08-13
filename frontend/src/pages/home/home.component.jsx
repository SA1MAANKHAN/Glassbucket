import React from "react";
import Hero from "../../components/hero/hero.component";
import Nav from "../../components/nav/nav.component";
import Offers from "../../components/offers/offers.component";

import "./home.styles.scss";

function Home() {
  return (
    <div className="home">
      <Hero />
      <Offers />
    </div>
  );
}

export default Home;
