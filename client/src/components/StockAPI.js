import React from "react";
import "../style.css";

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
                <td>Mastercard Inc</td>
                <td>NYSE: MA</td>
                <td>-1.94</td>
                <td>$205.91</td>
            </tr>
            <tr>
                <td>Thor Industries</td>
                <td>NYSE: THO</td>
                <td>+0.29</td>
                <td>$99.97</td>
            </tr>
            <tr>
                <td>Texas Instruments Incorporated</td>
                <td>NASDAQ: TXN</td>
                <td>-0.70</td>
                <td>$115.14</td>
            </tr>
            <tr>
                <td>NVIDIA Corporation</td>
                <td>NASDAQ: NVDA</td>
                <td>-1.91</td>
                <td>$249.32</td>
            </tr>
            <tr>
                <td>Evercore Inc</td>
                <td>NYSE: EVR</td>
                <td>-0.55</td>
                <td>$106.35</td>
            </tr>
        </tbody>
    </table>
    <br />
  </div>
);                       

export default StockAPI;