import React from "react";
import "./Stash.css";

const Stash = props => (
    <div className="header">{props.children}
            <canvas id="Stash"></canvas>
        </div>
);

export default Stash;