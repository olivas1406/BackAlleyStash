import React, { Component } from 'react';
import Expenses from "../../components/Expenses";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Chart from "../../components/Chart";


// import Stash from "../../components/Stash";


class Home extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Header />
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