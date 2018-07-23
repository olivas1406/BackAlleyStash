import React, { Component } from "react";
import "../style.css";
import API from "../utils/API.js";
import {
  NotificationManager,
  NotificationContainer
} from "react-notifications";
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
    totalamount: [],
    totalbalance: [],
    transactionDesc: "",
    categoryDesc: "",
    amount: "",
    balance: ""
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      (this.state.description && this.state.category && this.state.amount,
      this.state.balance)
    ) {
      API.saveTransaction({
        transactionDesc: this.state.transactionDesc,
        categoryDesc: this.state.categoryDesc,
        amount: this.state.amount,
        balance: this.state.balance
      })
        .then(res => this.loadTransaction())
        .then(() =>
          // this.setState({
          //   transactionDesc: "",
          //   categoryDesc: "",
          //   amount: "",
          //   balance: ""
          // })
          console.log(this.state)
        );
    }
  };

  loadTransaction = () => {
    API.getTransactions().then(res => {
      this.setState({
        transaction: res.data,
        transactionDesc: "",
        categoryDesc: "",
        amount: "",
        balance: ""
      });
      res.data.forEach(result => {
        let amount = this.state.totalamount.concat(result.amount);
        this.setState({ totalamount: amount });
        // console.log(result.amount);
      });
      res.data.forEach(result => {
        let balance = this.state.totalbalance.concat(result.balance);
        this.setState({ totalbalance: balance });
        // console.log(result.balance);
        // console.log(this.state);
      });
    });
  };
  // When this component mounts, should grab all transactions
  componentDidMount() {
    // console.log("component mounted");
    this.loadTransaction();
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
                <td>${data.balance}</td>
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
                ${this.state.totalbalance.reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                  0
                ) -
                  this.state.totalamount.reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                    0
                  )}
              </td>
            </tr>
            <tr>{/* <Form />{" "} */}</tr>
          </tbody>
        </table>
        <form id="form1" className="ExpenseForm">
          <h5 className="formHeader">Add New Transaction</h5>
          Description:{" "}
          <input
            value={this.state.transactionDesc}
            onChange={this.handleInput}
            name="transactionDesc"
            placeholder="Required"
            className="formJS1"
            required
            size="75"
          />
          Category:{" "}
          <select
            value={this.state.categoryDesc}
            onChange={this.handleInput}
            name="categoryDesc"
            placeholder="Required"
            className="formJS2"
            required
          >
            {/* <option>Required</option> */}
            <option value="" disabled selected>
              Required
            </option>
            <option>Miscellaneous</option>
            <option>Mortgage/Rent</option>
            <option>Utilities</option>
            <option>Transportation</option>
            <option>Personal</option>
            <option>Credit Card/Loan</option>
            <option>Income</option>
          </select>
          <br />
          Expense:{" "}
          <input
            value={this.state.amount}
            onChange={this.handleInput}
            name="amount"
            placeholder="Required"
            className="formJS3"
            required
          />
          or Income:{" "}
          <input
            value={this.state.balance}
            onChange={this.handleInput}
            name="balance"
            placeholder="Required"
          />
          <button
            className="transSubmit formJS4"
            type="Submit"
            form="form1"
            value="Submit"
            onClick={this.handleSubmit}
          >
            Add Transaction
          </button>
          <br />
        </form>
      </div>
    );
  }
}

export default Expenses;
