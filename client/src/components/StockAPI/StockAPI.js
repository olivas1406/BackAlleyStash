import React from "react";
import "./StockAPI.css";

const StockAPI = () => (
  <div className="Stocks">
    <h2 className="ExpenseText">Stocks</h2>
    <hr />
    <br />
    <table className="StocksTable">
        <tbody>
            <tr>
                <th>Stock</th>
                <th>Ticker Symbol</th>
                <th>Change</th>
                <th>Value</th>
            </tr>
            <tr>
                <td>Test</td>
                <td>TST</td>
                <td>+</td>
                <td>$1.00</td>
            </tr>
            <tr>
                <td>Test</td>
                <td>TST</td>
                <td>+</td>
                <td>$1.00</td>
            </tr>
            <tr>
                <td>Test</td>
                <td>TST</td>
                <td>+</td>
                <td>$1.00</td>
            </tr>
            <tr>
                <td>Test</td>
                <td>TST</td>
                <td>+</td>
                <td>$1.00</td>
            </tr>
            <tr>
                <td>Test</td>
                <td>TST</td>
                <td>+</td>
                <td>$1.00</td>
            </tr>
        </tbody>
    </table>
    <br />
  </div>
);

export default StockAPI;