import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <div className="Navbar">
    <a className="Links" href="/">Home |</a>
    <a className="Links" href="/AssetTracker"> Asset Tracker |</a>
    <a className="Links" href="/Stash"> Your Stash |</a>
    <a className="Links" href="/Logout"> Logout</a>
  </div>
);

export default Navbar;