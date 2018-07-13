import React, { Component } from 'react';
import withAuthorization from './withAuthorization';
import { db } from '../firebase';
import Header from "./Header";
import Savings from "./Savings";
import Assets from "./Assets";
import StockAPI from "./StockAPI";
import Scraper from "./Scraper";
import Expenses from './Expenses';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
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
  
const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);