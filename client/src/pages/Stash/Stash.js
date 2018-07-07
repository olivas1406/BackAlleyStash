import React, { Component } from 'react';
import Chart from "chart.js";
import Stash from "../../components/Stash";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import "./Stash.css";

// componentDidMount(
//   var ctx = document.getElementById('Stash').getContext('2d');
//   var chart = new Chart(ctx, {
//     type: 'line',
//     data: {
//       labels: ["Your Stash"],
//       datasets: [{
//         label: "Your Back Alley Stash",
//         backgroundColor: '#FFEE00',
//         borderColor: 'rgb(255,255,224)',
//         data: [3, 10, 12, 25],
//       }]
//     },
//     options: {}
//   });
// )


export default class YourStash extends Component {
  componentDidMount() {
      debugger;
      const ctx = document.getElementById("pie-chart");
      const data = {
          labels: [
              "Red",
              "Blue",
              "Yellow"
          ],
          datasets: [{
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF0000",
                  "#0000FF",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]
      };
      const pieChart = new Chart(ctx, {
          type: 'pie',
          data: data
      });
  }
  render() {
      return (
          <canvas id="pie-chart"></canvas>
      );
  }
}

// class YourStash extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar />
//       <Header />
//         <div className="StashTitle">Your Stash
//         </div>{this.props.children}
//         <Stash />
//       </div>
//     );
//   }
// }

// export default YourStash;