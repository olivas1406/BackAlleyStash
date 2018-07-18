import React, { Component } from 'react';
import Chart from "chart.js";
import "../style.css";

export default class YourStash extends Component {
    componentDidMount() {
        debugger;
        const ctx = document.getElementById("chart");
        const data = {
            labels: [
                "What You've Paid Yourself",
            ],
            datasets: [{
                label: "$tash",
                data: [300],
                backgroundColor: [
                    "rgba(54, 162, 235, 0.4)"
                ],
                hoverBackgroundColor: [
                    "rgba(255, 205, 86, 0.2)"
                ]
            }]
        };
        const barChart = new Chart(ctx, {
            type: 'bar',
            data: data
        });
    }
    render() {
        return (
            <div className="Savings">
                <h2 className="ExpenseText">Your Stash</h2>
                <hr />
                <br />
                <div className="SavingsChart">
                <canvas id="chart"></canvas>
            </div>
            <br />
            </div> 
        );
    }
}