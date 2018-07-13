import axios from "axios";

const API = {
  // Gets all transactions
  getTransactions: function() {
    return axios.get("/api/transaction");
  },
  // Gets the transaction with the given id
  getTransactionsId: function(id) {
    return axios.get("/api/transaction/" + id);
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
