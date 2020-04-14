import React from "react";

import NavLogo from "../NavLogo";
import UserInfo from "../UserInfo";
import MainNav from "../MainNav";
import "./DesktopNav.scss";

import { users } from "../../../api/api";

const DesktopNav = () => {
  return (
    <nav className="desktop-nav">
      <NavLogo />
      <div className="desktop-nav__menu">
        <MainNav />
        <UserInfo user={users["alicethomas"]} />
      </div>
    </nav>
  );
};

export default DesktopNav;
