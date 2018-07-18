import axios from "axios";

const API = {
  // Gets all transactions
  getTransactions: function() {
    return axios.get("/api/transaction");
  },
  // Gets the transaction with the given id
  getTransactionsAmount: function() {
    return axios.get("/api/transaction/amt");
  },
  // Deletes the transaction with the given id
  deleteTransaction: function(id) {
    return axios.delete("/api/transaction/" + id);
  },
  // Saves a transaction to the database
  saveTransaction: function(transactionData) {
    return axios.post("/api/transaction", transactionData);
  }
};

export default API;
