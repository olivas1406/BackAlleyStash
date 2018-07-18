import React from "react";
import "../style.css";

const Assets = () => (
  <div className="Assets">
    <h2 className="ExpenseText">Assets</h2>
    <hr />
    <br />

    <table className="StocksTable">
        <tbody>
            <tr>
                <th className="stockLink">Asset</th>
                <th className="stockLink">Current Value</th>
            </tr>
            <tr>
          <td>Home Equity</td>
          <td>$60,000</td>
        </tr>
        <tr>
          <td>Netflix Stock (NFLX)</td>
          <td>$398.18/share</td>
        </tr>
        <tr>
          <td>General Electric Stock (GE)</td>
          <td>$14.10/share</td>
        </tr>
        <tr>
          <td>Microsoft Stock (MFST)</td>
          <td>$101.92/share</td>
        </tr>
        <tr>
          <td>Gold</td>
          <td>$1253/ounce</td>
        </tr>
        <tr>
          <td>Bitcoin</td>
          <td>$1.00</td>
        </tr>
        </tbody>
    </table>
    <br />
  </div>
);

export default Assets;