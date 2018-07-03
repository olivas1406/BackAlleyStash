import React, { Component } from 'react';
import Expenses from "../../components/Expenses";
import Chart from "../../components/Chart";

class Home extends Component {
  render() {
    return (
   <div>
      <Expenses />
      <Chart /><br></br>
    </div>
    );
  }
}

export default Home;