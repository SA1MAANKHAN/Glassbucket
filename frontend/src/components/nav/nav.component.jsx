import React, { useState } from "react";

import { useStateValue } from "../../stateManagement/stateProvider.state";

// icons
import { AiOutlineShoppingCart } from "react-icons/ai";

import LogoImg from "../../assets/images/logo.png";

// styles
import "./nav.styles.scss";
import CONSTANTS from "../../utils/constants";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const [catagoiresMenuVisible, setcatagoiresMenuVisible] = useState(false);
  const [{ showCatagories }, dispatch] = useStateValue();

  const navigate = useNavigate();

  function showCatagoiresMenu() {
    dispatch({
      type: CONSTANTS.ACTION_TYPES.SHOW_CATAGORIES,
      payload: true,
    });
  }

  function goToHome() {
    navigate("/");
  }

  return (
    <div className="nav">
      <div className="logo" onClick={goToHome}>
        <img src={LogoImg} alt="" />
      </div>
      <div className="options">
        <ul>
          <li onClick={showCatagoiresMenu}>Catagories</li>
          <li>Sign in</li>
          <li>Sign up</li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li className="nav__icons">
            <AiOutlineShoppingCart />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
