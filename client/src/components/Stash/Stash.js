import React from "react";
import "./Stash.css";

const Stash = props => (
    <div className="header">{props.children}
        {/* <div className="chart"> */}
            <canvas id="Stash"></canvas>
        </div>
    // </div>    
);

export default Stash;