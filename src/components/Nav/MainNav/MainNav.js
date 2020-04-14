import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

import "./MainNav.scss";

const MainNav = ({ mode = "horizontal", theme = "dark" }) => {
  return (
    <Menu mode={mode} theme={theme}>
      <Menu.Item key="/">
        <Link to="/">HomePage</Link>
      </Menu.Item>
      <Menu.Item key="/add">
        <Link to="/add">New Question</Link>
      </Menu.Item>
      <Menu.Item key="/leaderboard">
        <Link to="/leaderboard">Leaderboard</Link>
      </Menu.Item>
    </Menu>
  );
};

export default MainNav;
