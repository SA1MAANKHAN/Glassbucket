import React from 'react'
import ProductCard from '../productCard/productCard.component'

import "./products.styles.scss"

import ProductData from "../../sampleData/products.json"

function Products() {

console.log(ProductData.length)
  return (
    <div className="products">
      {ProductData.map((product) => (
        <ProductCard key={Date.now + Math.random()} product={product} />
      ))}
    </div>
  );
}

export default Products