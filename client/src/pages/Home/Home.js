import React, { Component } from 'react';
import Expenses from "../../components/Expenses";
import Chart from "../../components/Chart";


// import Stash from "../../components/Stash";


class Home extends Component {
  render() {
    return (
      <div>
        <div className="AtTitle">Budget
        </div>
        <br />
        <Expenses />
        <Chart />


        {/* <Stash /> */}



        <br />
      </div>
    );
  }
}

export default Home;