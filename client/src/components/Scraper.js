import React, { Component } from "react";
import "../style.css";

class Scraper extends Component {
    constructor() {
        super();
        this.state = {
            scraper: [], 
        };
    }

  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=5&apiKey=929c659d639b40d4a37427546431b819')
    .then(results => {
        console.log(`results:`, results);
        return results.json();
    }).then(data => {
        let scraper = data.articles.map((scrapeMe) => {
            return(
                    <tr key={scrapeMe.articles}>
                    <td>{scrapeMe.title}</td>
                    <td>{scrapeMe.description}</td>
                    <td><button><a href={scrapeMe.url} target="_blank">Click Me</a></button></td>
                    </tr>
            )
        })
        this.setState({scraper: scraper});
    })
  }

  render() {
    return (
      <div>
        <div className="Scraper">
          <h2 className="ExpenseText">Business Headlines</h2>
          <hr />
          <br />
          <table className="StocksTable">
            <tbody>
              <tr>
                <th className="stockLink">Headline</th>
                <th className="stockLink">Summary</th>
                <th className="stockLink">Link</th>
              </tr>
              {this.state.scraper}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Scraper;