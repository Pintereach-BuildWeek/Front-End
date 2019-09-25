import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
      <div className="navbar">

        <h1>Pintereach</h1>
        <h2>Organize Your Studies</h2>

        <NavLink to="/" className="NavBtn">  Signup  </NavLink>
        <NavLink to="/" className="NavBtn">  Login  </NavLink>
        <NavLink exact to="/home" className="NavBtn"> Your Profile  </NavLink>
        <NavLink to="/" className="NavBtn">  Must Reads  </NavLink>
        <NavLink to="/" className="NavBtn">  Logout  </NavLink>

      </div>
    );
  };
  
  export default NavBar;