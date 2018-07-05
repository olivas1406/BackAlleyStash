import React from "react";

const Stash = props => (
    <div className="header">{props.children}
            <canvas id="Stash"></canvas>
        </div>
);

export default Stash;