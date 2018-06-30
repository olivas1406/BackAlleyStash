import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <ul className="Navbar">{props.children}
        <li className="Links">
      <a onClick={() => props.handlePageChange("Home")} className="nav-link">
        Home {" "}
      </a>
    </li>
    <li className="Links">
      <a onClick={() => props.handlePageChange("Asset Tracker")} className="nav-link">
        | Asset Tracker {" "}
      </a>
    </li>
    <li className="Links">
      <a onClick={() => props.handlePageChange("Your Stash")} className="nav-link">
        | Your Stash {" "}
      </a>
    </li>
    <li className="Links">
      <a onClick={() => props.handlePageChange("Logout")} className="nav-link">
        | Logout
      </a>
    </li>
  </ul>
         
);

export default Navbar;