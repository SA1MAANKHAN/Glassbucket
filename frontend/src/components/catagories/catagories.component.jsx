import React from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../stateManagement/stateProvider.state";
import CONSTANTS from "../../utils/constants";
import { titleToSlug } from "../../utils/functions";

// styles
import "./catagories.styles.scss";

export default function Catagories() {
  
  const [{ catagories }, dispatch] = useStateValue();

  const navigate = useNavigate();

  function navigateToCatagory(e) {
    const slug = titleToSlug(e.target.textContent);

    navigate(`/catagory/${slug}`);
  }

  function hideCatagoiresMenu() {
    dispatch({
      type: CONSTANTS.ACTION_TYPES.SHOW_CATAGORIES,
      payload: false,
    });
  }

  return (
    <div onMouseLeave={hideCatagoiresMenu} className="catagories">
      {catagories.length
        ? catagories.map((catagory) => (
            <div
              className="catagory"
              key={Date.now + Math.random()}
              onClick={navigateToCatagory}
            >
              {catagory}
            </div>
          ))
        : ""}
    </div>
  );
}
