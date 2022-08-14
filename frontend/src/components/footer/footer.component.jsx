import React from "react";
import { useStateValue } from "../../stateManagement/stateProvider.state";

// styles
import "./footer.styles.scss";

import Logo from "../../assets/images/logo.png";
import { titleToSlug } from "../../utils/functions";

import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const [{ catagories }, dispatch] = useStateValue();

  function goToHome() {
    navigate("/");
  }

  return (
    <div className="footer">
      <div className="footer__links__logo">
        <div className="footer__left">
          <div onClick={goToHome} className="logo">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__catagories">
            <ul>
              {catagories.length
                ? catagories.map((catagory) => (
                    <li key={Date.now + Math.random()}>
                      <Link to={`/catagory/${titleToSlug(catagory)}`}>
                        {catagory}
                      </Link>
                    </li>
                  ))
                : ""}
            </ul>
          </div>
        </div>
      </div>
      <p>All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
