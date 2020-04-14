import React from "react";
import { Link } from "react-router-dom";

import "./NavLogo.scss";

const NavLogo = ({ path = "/", title = "Would You Rather" }) => {
  return (
    <div className="logo">
      <Link to={path}>{title}</Link>
    </div>
  );
};

export default NavLogo;
