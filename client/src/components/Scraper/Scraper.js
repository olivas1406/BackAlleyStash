import React from "react";
import "./Scraper.css";

const Scraper = () => (
  <div className="Scraper">
    <h2 className="ExpenseText">Financial Headlines</h2>
    <hr />
    <br />
    <table className="Scraper">
      <tbody>
        <tr>
          <th>Headline</th>
          <th>Summary</th>
          <th>Link to Article</th>
        </tr>
        <tr>
          <td>Healine</td>
          <td>words words words words words</td>
          <td>Click Me</td>
        </tr>
        <tr>
          <td>Healine</td>
          <td>words words words words words</td>
          <td>Click Me</td>
        </tr>
        <tr>
          <td>Healine</td>
          <td>words words words words words</td>
          <td>Click Me</td>
        </tr>
        <tr>
          <td>Healine</td>
          <td>words words words words words</td>
          <td>Click Me</td>
        </tr>
        <tr>
          <td>Healine</td>
          <td>words words words words words</td>
          <td>Click Me</td>
        </tr>
        </tbody>
    </table>
    <br />
  </div>
);

export default Scraper;