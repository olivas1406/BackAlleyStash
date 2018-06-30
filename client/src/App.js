import React, { Component } from 'react';
import './App.css';
// import Container from "./components/Container";  // REMOVE ME - DLO
import Header from "./components/Header";
import Expenses from "./components/Expenses";
import Chart from "./components/Chart";
import Stash from "./components/Stash";


class App extends Component {
  render() {
    return (
   <div>
      <Header />
      <Expenses />
      <Chart /><br></br>
      <Stash />
    </div>
    );
  }
}

export default App;
