import React, { Component } from "react";
import "./Expenses.css";
import { API } from "../../utils/API.js";

class Expenses extends Component {
  state = {
    transaction: []
  };
  // When this component mounts, should grab all transactions
  componentDidMount() {
    API.getTransactions()
      .then(res => {
        console.log(res);

        this.setState({ transaction: res.data });
      })
      .catch(err => console.log(err));
    console.log(this.state.transaction);
  }

  render() {
    console.log(API);
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
          </tbody>
        </table>
      </div>
    );
  }
}
// const Expenses = props => (
//   <div className="Expenses">
//     {props.children}
//     <div className="ExpenseText">Current Budget</div>
//     <hr />
//     <br />
//     <table className="Transactions">
//       <tbody>
//         <tr>
//           <th>Description</th>
//           <th>Category</th>
//           <th>Amount</th>
//         </tr>
//         <tr>
//           <td>Mortgage</td>
//           <td>Recurring</td>
//           <td>$1100.00</td>
//         </tr>
//         <tr>
//           <td>Car Payment</td>
//           <td>Recurring</td>
//           <td>$315.00</td>
//         </tr>
//         <tr>
//           <td>Internet</td>
//           <td>Recurring</td>
//           <td>$75.00</td>
//         </tr>
//         <tr>
//           <td>Cell Phone</td>
//           <td>Recurring</td>
//           <td>$125.00</td>
//         </tr>
//         <tr>
//           <td>Salt River Project</td>
//           <td>Recurring</td>
//           <td>$375.00</td>
//         </tr>
//         <tr>
//           <td>HOA Monthly Payment</td>
//           <td>Recurring</td>
//           <td>$55.00</td>
//         </tr>
//         <tr>
//           <td>HOA Fine (weeds)</td>
//           <td>One Time Expense</td>
//           <td>$25.00</td>
//         </tr>
//         <tr>
//           <td>Lunch with Bon</td>
//           <td>One Time Expense</td>
//           <td>$3.50</td>
//         </tr>
//         <tr>
//           <td>ER Visit (Food Poisoning)</td>
//           <td>Emergency</td>
//           <td>$400</td>
//         </tr>
//         <tr>
//           <strong>
//             <td>Total</td>
//             <td />
//             <td>$2473.50</td>
//           </strong>
//         </tr>
//       </tbody>
//     </table>
//     <br />
//   </div>
// );

export default Expenses;
