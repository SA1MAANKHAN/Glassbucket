import React, { useState } from "react";

import { BsEyeglasses, BsSunglasses } from "react-icons/bs";
import { BiGlassesAlt, BiGlasses } from "react-icons/bi";
import { FaGlasses } from "react-icons/fa";
import { Gi3DGlasses, GiProtectionGlasses, GiSunglasses } from "react-icons/gi";

import "./filters.styles.scss"

function Filters() {
  const [glassIcons] = useState([
    <BsEyeglasses />,
    <BsSunglasses />,
    <BiGlassesAlt />,
    <BiGlasses />,
    <FaGlasses />,
    <Gi3DGlasses />,
    <GiProtectionGlasses />,
    <GiSunglasses />,
  ]);

  const [brands, setbrands] = useState([
    "Ray Ban",
    "John Jacobs",
    "Vincent Chase",
    "Tommy Hilfiger",
    "Boss Orange",
  ]);

  const [shapes, setshapes] = useState([
    "Rectange",
    "Round",
    "Hexagon",
    "Square",
  ]);
  const [sizes, setsizes] = useState([
    "Narrow",
    "Small",
    "Medium",
    "Wide",
    "Extra Wide",
  ]);
  const [person, setperson] = useState(["Men", "Women", "Kids"]);

  return (
    <div className="filters">
      <h2>Filters</h2>
      <div className="filters__types">
        <div className="filter__type">
          <h4>Glasses For</h4>
          <div className="filter__options" key={Date.now + Math.random()}>
            {person.map((item) => {
              return (
                <div className="filter__option" key={Date.now + Math.random()}>
                  <div className="icon">
                    {glassIcons[Math.floor(Math.random() * glassIcons.length)]}
                  </div>
                  <div className="option__value">{item}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="filter__type">
          <h4>Shapes</h4>
          <div className="filter__options" key={Date.now + Math.random()}>
            {shapes.map((item) => {
              return (
                <div className="filter__option" key={Date.now + Math.random()}>
                  <div className="icon">
                    {glassIcons[Math.floor(Math.random() * glassIcons.length)]}
                  </div>
                  <div className="option__value">{item}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="filter__type">
          <h4>Brands</h4>
          <div className="filter__options" key={Date.now + Math.random()}>
            {brands.map((item) => {
              return (
                <div className="filter__option">
                  <div className="icon">
                    {glassIcons[Math.floor(Math.random() * glassIcons.length)]}
                  </div>
                  <div className="option__value">{item}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="filter__type">
          <h4>Sizes</h4>
          <div className="filter__options" key={Date.now + Math.random()}>
            {sizes.map((item) => {
              return (
                <div className="filter__option">
                  <div className="icon">
                    {glassIcons[Math.floor(Math.random() * glassIcons.length)]}
                  </div>
                  <div className="option__value">{item}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
