import React, { Component } from "react";
import "../style.css";
import API from "../utils/API";

class Form extends Component {
  state = {
    transactionDesc: "",
    categoryDesc: "",
    amount: ""
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.description && this.state.category && this.state.amount) {
      API.saveTransaction({
        transactionDesc: this.state.transactionDesc,
        categoryDesc: this.state.categoryDesc,
        amount: this.state.amount
      });
    }
  };

  render() {
    return (
      <form id="form1">
        Description:{" "}
        <input
          value={this.state.transactionDesc}
          onChange={this.handleInput}
          name="transactionDesc"
          placeholder="Required"
        />
        Category:{" "}
        <select
          value={this.state.categoryDesc}
          onChange={this.handleInput}
          name="categoryDesc"
          placeholder="Required"
        >
          <option>Recurring Expense</option>
          <option>Mortgage</option>
        </select>
        Amount:{" "}
        <input
          value={this.state.amount}
          onChange={this.handleInput}
          name="amount"
          placeholder="Required"
        />
        <button
          type="button"
          className=""
          form="form1"
          value="Submit"
          onChange={this.handleSubmit}
        >
          Add Transaction
        </button>
      </form>
    );
  }
}

export default Form;
