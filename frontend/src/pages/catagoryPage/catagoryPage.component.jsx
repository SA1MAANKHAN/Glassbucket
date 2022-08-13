import React from "react";
import { useParams } from "react-router-dom";
import Filters from "../../components/filters/filters.component";
import Nav from "../../components/nav/nav.component";
import Products from "../../components/Products/products.compnent";
import { slugToTitle } from "../../utils/functions";

// styles
import "./catagoryPage.styles.scss";

function CatagoryPage() {
  let { catagory } = useParams();

  console.log(catagory);

  return (
    <>
      <div className="catagoryPage">
        <h1>{slugToTitle(catagory)}</h1>
        <div className="filters_and_products">
          <Filters />
          <Products />
        </div>
      </div>
    </>
  );
}

export default CatagoryPage;
