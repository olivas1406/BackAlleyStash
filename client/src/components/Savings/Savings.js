import React, { Component } from 'react';
import Chart from "chart.js";
import "./Savings.css";

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
                data: [3],
                backgroundColor: [
                    "#181b7f"
                ],
                hoverBackgroundColor: [
                    "#e8ff8c"
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