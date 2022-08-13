import React, { useState } from "react";

import "./productCard.styles.scss";

function ProductCard({
  product: {
    image_url,
    brand_name,
    size,
    model_name,
    prices: [{ price }],
    tags,
    avgRating,
    hover_image_url,
  },
}) {

  const [hovered, sethovered] = useState(false)

  function setHoveredTrue(){
    sethovered(true);
  }

  function setHoveredfalse(){
    sethovered(false)
  }

  return (
    <div className="productCard">
      <div
        onMouseEnter={setHoveredTrue}
        onMouseLeave={setHoveredfalse}
        className="product__productImage"
      >
        <img src={ hovered ? hover_image_url : image_url} alt="Product Image" />
      </div>
      <div className="product__info">
        <div className="product__info__name model__info">
          <div className="name"> Model: </div>
          <div className="product__info__value">{model_name}</div>
        </div>
        <div className="product__info__name brand__info">
          <div className="name"> Brand: </div>
          <div className="product__info__value">{brand_name}</div>
        </div>
        <div className="product__info__name size__info">
          <div className="name"> Size: </div>
          <div className="product__info__value">{size}</div>
        </div>
        <div className="product__info__name price__info">
          <div className="name"> Price: </div>
          <div className="product__info__value">&#8377; {price}</div>
        </div>
        <div className="product__info__name rating__info">
          <div className="name"> Rating: </div>
          <div className="product__info__value">{avgRating}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
