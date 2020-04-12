import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              HomePage
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" exact>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" exact>
              Leaderboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" exact>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
