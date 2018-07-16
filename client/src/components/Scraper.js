import React from "react";
import "../style.css";

const Scraper = () => (
  <div className="Scraper">
    <h2 className="ExpenseText">Financial Headlines</h2>
    <hr />
    <br />
    <table className="StocksTable">
      <tbody>
        <tr>
          <th>Headline</th>
          <th>Summary</th>
          <th>Link to Article</th>
        </tr>
        <tr>
          <td>Dow clears 25K as the Nasdaq sits at a record high</td>
          <td>U.S. stocks wrapped a winning week on Friday with the Dow Jones Industrial Average closing above the psychologically significant 25,000-point milestone</td>
          <a href="_blank"><td>Click Me</td></a>
        </tr>
        <tr>
          <td>Fed emphasizes 'solid' US economic growth, repeats gradual approach</td>
          <td>The Fed has raised interest rates seven times since it began a tightening cycle back in December 2015 and last lifted its benchmark lending rate by a quarter percentage point in mid June.</td>
          <a href="_blank"><td>Click Me</td></a>
        </tr>
        <tr>
          <td>Papa John’s CEO Attempts Damage Control But Not An Apology</td>
          <td>Papa John’s CEO Steve Ritchie had one job on Friday: Do damage control for the company after reports surfaced this week that founder John Schnatter used a racial slur in a conference call in May.</td>
          <a href="_blank"><td>Click Me</td></a>
        </tr>
        <tr>
          <td>Citigroup Earnings Lifted by Growing Loans</td>
          <td>New York bank’s trading revenue falls about 1% in latest quarter; per-share earnings beat analysts’ expectations</td>
          <a href="_blank"><td>Click Me</td></a>
        </tr>
        </tbody>
    </table>
    <br />
  </div>
);

export default Scraper;