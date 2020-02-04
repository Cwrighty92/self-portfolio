import React from "react";

const Nav = ({ updateScreenRoute }) => (
  <div className="app-nav">
    <span className="nav-item" onClick={() => updateScreenRoute("Home")}>
      Home
    </span>
    <span className="nav-item" onClick={() => updateScreenRoute("About")}>
      About Me
    </span>
    <span className="nav-item" onClick={() => updateScreenRoute("Work")}>
      My Work
    </span>
    <span className="nav-item" onClick={() => updateScreenRoute("Contact")}>
      Contact Me
    </span>
  </div>
);

export default Nav;
