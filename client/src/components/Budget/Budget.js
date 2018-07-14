import React from "react";
import "./Budget.css";

const Budget = () => (
  <div className="Budget">
    <h2 className="BudgetTitle">Budget</h2>
    <hr />
    <br />
    <table className="StocksTable">
        <tbody>
            <tr>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
            <tr>
          <td>Mortgage</td>
          <td>Recurring</td>
          <td>$1100.00</td>
        </tr>
        <tr>
          <td>Car Payment</td>
          <td>Recurring</td>
          <td>$315.00</td>
        </tr>
        <tr>
          <td>Internet</td>
          <td>Recurring</td>
          <td>$75.00</td>
        </tr>
        <tr>
          <td>Cell Phone</td>
          <td>Recurring</td>
          <td>$125.00</td>
        </tr>
        <tr>
          <td>Salt River Project</td>
          <td>Recurring</td>
          <td>$375.00</td>
        </tr>
        <tr>
          <td>HOA Monthly Payment</td>
          <td>Recurring</td>
          <td>$55.00</td>
        </tr>
        </tbody>
    </table>
    <br />
  </div>
);

export default Budget;