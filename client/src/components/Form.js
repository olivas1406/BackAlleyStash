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
      <form id="form1" className="ExpenseForm">
        Description:{" "}
        <input
          value={this.state.transactionDesc}
          onChange={this.handleInput}
          name="transactionDesc"
          placeholder="Required"
          className="formJS"
          required
        />
        Category:{" "}
        <select
          value={this.state.categoryDesc}
          onChange={this.handleInput}
          name="categoryDesc"
          placeholder="Required"
          className="formJS"
        >
          <option>Miscellaneous</option>
          <option>Mortgage</option>
          <option>Utilities</option>
          <option>Transportation</option>
          <option>Personal</option>
          <option>Credit Card</option>
        </select>
        Amount:{" "}
        <input
          value={this.state.amount}
          onChange={this.handleInput}
          name="amount"
          placeholder="Required"
          className="formJS"
          required
        />
        <button
          type="Submit"
          form="form1"
          value="Submit"
          onClick={this.handleSubmit}
        >
          Add Transaction
        </button>
        <hr />
        <br />
      </form>

    );
  }
}

export default Form;
