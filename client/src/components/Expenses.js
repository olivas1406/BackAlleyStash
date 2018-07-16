import React, { Component } from "react";
import "../style.css";
import API from "../utils/API.js";
import {NotificationManager, NotificationContainer} from 'react-notifications';

class Expenses extends Component {

  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Updating Transaction', '', 500);
          break;
        case 'success':
          NotificationManager.success('Success message');
          break;
        case 'warning':
          NotificationManager.warning('Removing Transaction!', '', 500);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Close after 5s', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };

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
        <div className="ExpenseText">Current Budget
        <NotificationContainer/>
        </div>
        <hr />
        <br />
        <table className="Transactions">
          <tbody>
            <tr className="expenseTable">
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
                <td>{data.amount}
                <button className='btn btn-success EditButton' onClick={this.createNotification('warning')}>Delete</button>
                <button className='btn btn-success DeleteButton' onClick={this.createNotification('info')}>Edit &nbsp;</button></td>
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