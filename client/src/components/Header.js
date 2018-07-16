import React from "react";
import "../style.css";

const Header = props => (
    <div className="header">{props.children}
        <div className="jumbotron">
            <h1 className="jumboText">Back Alley Stash</h1> 
            <p className="jumboSmall">The Importance of Paying Yourself</p> 
        </div>
    </div>
);

export default Header;