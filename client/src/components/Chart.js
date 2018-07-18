import React from "react";
import "../style.css";

const Chart = props => (
    <div className="header">{props.children}
        <div className="chart">
            <canvas id="CategoryChart"></canvas>
        </div>
    </div>
);

export default Chart;