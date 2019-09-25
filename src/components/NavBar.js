import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
      <div className="navbar">

        <h1>Pintereach</h1>

        <NavLink exact to="/home" className="NavBtn">Profile</NavLink>
        <NavLink to="/" className="NavBtn">Signup</NavLink>

      </div>
    );
  };
  
  export default NavBar;