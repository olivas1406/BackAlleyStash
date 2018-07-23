import React, { Component } from "react";
import "../style.css";
import API from "../utils/API.js";
import {
  NotificationManager,
  NotificationContainer
} from "react-notifications";
import Form from "./Form.js";
import { timingSafeEqual } from "crypto";

class Expenses extends Component {
  createNotification = type => {
    return () => {
      switch (type) {
        case "info":
          NotificationManager.info("Updating Transaction", "", 500);
          break;
        case "success":
          NotificationManager.success("Success message");
          break;
        case "warning":
          NotificationManager.warning("Removing Transaction!", "", 500);
          break;
        case "error":
          NotificationManager.error(
            "Error message",
            "Close after 5s",
            5000,
            () => {
              alert("callback");
            }
          );
          break;
      }
    };
  };

  state = {
    transaction: [],
    amount: [],
    balance: []
  };

  // When this component mounts, should grab all transactions
  componentDidMount() {
    // console.log("component mounted");
    API.getTransactions().then(res => {
      this.setState({
        transaction: res.data
      });
      res.data.forEach(result => {
        let amount = this.state.amount.concat(result.amount);
        this.setState({ amount: amount });
        // console.log(result.amount);
      });
      res.data.forEach(result => {
        let balance = this.state.balance.concat(result.balance);
        this.setState({ balance: balance });
        // console.log(result.balance);
        // console.log(this.state);
      });
    });
  }

  render() {
    return (
      <div className="Expenses">
        <div className="ExpenseText">
          Current Budget
          <NotificationContainer />
        </div>
        <hr />
        <br />
        <table className="Transactions">
          <tbody>
            {/* <tr>
              <Form />{" "}
            </tr> */}
            <tr className="AmSpecialTable">
              <th className="stockLink">Description</th>
              <th className="stockLink">Category</th>
              <th className="stockLink">Spent</th>
              <th className="stockLink">Earned</th>
              <th className="stockLink">Edit</th>
            </tr>
            {/* Loop through data from this.state.transaction
            make a new td for each data */}
            {this.state.transaction.map(data => (
              <tr>
                <td>{data.transactionDesc}</td>
                <td>{data.categoryDesc}</td>
                <td className="amount">${data.amount}</td>
                <td>
                  ${data.balance}
                </td>
                <td className="tableButtons">
                  <button
                    className="btn btn-success EditButton"
                    onClick={this.createNotification("warning")}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-success DeleteButton"
                    onClick={this.createNotification("info")}
                  >
                    Edit &nbsp;
                  </button>
                </td>
              </tr>
            ))}
            {/* <button className="addTrans">Add Transaction</button> */}
            {/* <tr> */}
              {/* <td className="expenseTotal">Total</td> */}
              {/* <td /> */}
              {/* Use this code to add all the amount */}
              {/* <td> */}
                {/* ${this.state.amount.reduce( */}
                  {/* (accumulator, currentValue) => accumulator + currentValue, */}
                  {/* 0 */}
                {/* )} */}
              {/* </td> */}
              {/* <td> */}
                {/* ${this.state.balance.reduce( */}
                  {/* (accumulator, currentValue) => accumulator + currentValue, */}
                  {/* 0 */}
                {/* )} */}
              {/* </td> */}
            {/* </tr> */}

            <td colSpan="5" className="tableSpacer" />
            <tr>
              {/* <td>Your Stash</td> */}
              
              <td colSpan="4">Total</td>
              {/* <td />
              <td /> */}
              <td>
                ${this.state.balance.reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                  0
                ) -
                  this.state.amount.reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                    0
                  )}
              </td>
            </tr>
            <tr>
              {/* <Form />{" "} */}
            </tr>
          </tbody>
        </table>
        <Form />{" "}
      </div>
    );
  }
}

export default Expenses;
