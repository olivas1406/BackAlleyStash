import React, { Component } from "react";
import withAuthorization from "./withAuthorization";
import { db } from "../firebase";
import Header from "./Header.js";
import Savings from "./Savings.js";
import Assets from "./Assets.js";
import StockAPI from "./StockAPI.js";
import Scraper from "./Scraper.js";
import Expenses from "./Expenses.js";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Expenses />
        <Savings />
        <Assets />
        <StockAPI />
        <Scraper />
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);
