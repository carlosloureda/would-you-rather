import React from "react";

import "./Nav.scss";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Nav = () => {
  return (
    <header>
      <div className="desktop-menu">
        <DesktopNav />
      </div>
      <div className="mobile-menu">
        <MobileNav />
      </div>
    </header>
  );
};

export default Nav;
