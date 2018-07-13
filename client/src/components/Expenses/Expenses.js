import React, { Component } from "react";
import "./Expenses.css";
import API from "../../utils/API.js";

class Expenses extends Component {
  state = {
    transaction: []
  };
  // When this component mounts, should grab all transactions
  componentDidMount() {
    console.log("component mounted");
    API.getTransactions()
      .then(res => {
        this.setState({ transaction: res.data });
        console.log(this.state.transaction);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="Expenses">
        <div className="ExpenseText">Current Budget</div>
        <hr />
        <br />
        <table className="Transactions">
          <tbody>
            <tr>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
            {/* Loop through data from this.state.transaction
            make a new td for each data */}
            {this.state.transaction.map(data => (
              <tr>
                <td>{data.transactionDesc}</td>
                <td>{data.categoryDesc}</td>
                <td>{data.amount}</td>
                {/* <td>{data.balance}</td> */}
              </tr>
            ))}
            <tr>
              <td className="expenseTotal">Total</td>
              <td />
              <td />
              {/*Add algorithm to get sum of all amount*/}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Expenses;