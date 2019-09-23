import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
      <div className="navbar">

        <h1>Pintereach</h1>

        <NavLink exact to="/home" ClassName="NavBtn"></NavLink>
        <NavLink to="/" ClassName="NavBtn"></NavLink>

      </div>
    );
  };
  
  export default NavBar;