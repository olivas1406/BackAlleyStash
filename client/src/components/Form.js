// import React, { Component } from "react";
// import "../style.css";
// import API from "../utils/API";

// class Form extends Component {
//   state = {
//     transactionDesc: "",
//     categoryDesc: "",
//     amount: "",
//     balance: ""
//   };

//   handleInput = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     if (
//       (this.state.description && this.state.category && this.state.amount,
//       this.state.balance)
//     ) {
//       API.saveTransaction({
//         transactionDesc: this.state.transactionDesc,
//         categoryDesc: this.state.categoryDesc,
//         amount: this.state.amount,
//         balance: this.state.balance
//       }) 
//     }
//   };

//   render() {
//     return (
//       <form id="form1" className="ExpenseForm">
//         Description:{" "}
//         <input
//           value={this.state.transactionDesc}
//           onChange={this.handleInput}
//           name="transactionDesc"
//           placeholder="Required"
//           className="formJS1"
//           required 
//           size="55"
//         />
//         Category:{" "}
//         <select
//           value={this.state.categoryDesc}
//           onChange={this.handleInput}
//           name="categoryDesc"
//           placeholder="Required"
//           className="formJS2"
//           required 
//         >
//           <option>Required</option>
//           <option>Miscellaneous</option>
//           <option>Mortgage/Rent</option>
//           <option>Utilities</option>
//           <option>Transportation</option>
//           <option>Personal</option>
//           <option>Credit Card/Loan</option>
//           <option>Income</option>
//         </select>
//         <br />
//         Expense:{" "}
//         <input
//           value={this.state.amount}
//           onChange={this.handleInput}
//           name="amount"
//           placeholder="Required"
//           className="formJS3"
//           required 
//         />
//         Income:{" "}
//         <input
//           value={this.state.balance}
//           onChange={this.handleInput}
//           name="balance"
//           placeholder="Required"
//         />
//         <button
//         className="transSubmit formJS4"
//           type="Submit"
//           form="form1"
//           value="Submit"
//           onClick={this.handleSubmit}

//         >
//           Add Transaction
//         </button>
//         <hr />
//         <br />
//       </form>
//     );
//   }
// }

// export default Form;






import React, { Component } from "react";
import "../style.css";
import API from "../utils/API";

class Form extends Component {
  state = {
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
    }
  };

  render() {
    return (
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
          <option value="" disabled selected>Required</option>
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
    );
  }
}

export default Form;
