import React, { Component } from "react";
import "../style.css";

class Scraper extends Component {
    constructor() {
        super();
        this.state = {
            tickerSymbol: [],
            stockOpenPrice: [],
            stockClosePrice: [],
            stockVolume: [],
            tickerSymbol2: [],
            stockOpenPrice2: [],
            stockClosePrice2: [],
            stockVolume2: [],
            tickerSymbol3: [],
            stockOpenPrice3: [],
            stockClosePrice3: [],
            stockVolume3: [],
            tickerSymbol4: [],
            stockOpenPrice4: [],
            stockClosePrice4: [],
            stockVolume4: [],
            tickerSymbo5: [],
            stockOpenPrice5: [],
            stockClosePrice5: [],
            stockVolume5: [],
            tickerSymbol6: [],
            stockOpenPrice6: [],
            stockClosePrice6: [],
            stockVolume6: [],
        };
    }

  componentDidMount() {
    fetch ('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=15min&outputsize=full&apikey=Z92H22WV10EE6J3N')
        .then((response) => response.json())
        .then((responseJson) => {
            const lastRefreshed = responseJson['Meta Data']['3. Last Refreshed'];
            this.setState({
                tickerSymbol2: responseJson['Meta Data']['2. Symbol'],
                stockOpenPrice2:  responseJson['Time Series (15min)'][lastRefreshed]['1. open'],
                stockClosePrice2: responseJson['Time Series (15min)'][lastRefreshed]['4. close'],
                stockVolume2: responseJson['Time Series (15min)'][lastRefreshed]['5. volume']
            }, function(){
            });
        })
        .catch((error)=>{
            console.error(error);
        });
    fetch ('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=NFLX&interval=15min&outputsize=full&apikey=Z92H22WV10EE6J3N')
        .then((response) => response.json())
        .then((responseJson) => {
            const lastRefreshed = responseJson['Meta Data']['3. Last Refreshed'];
            this.setState({
                tickerSymbol: responseJson['Meta Data']['2. Symbol'],
                stockOpenPrice:  responseJson['Time Series (15min)'][lastRefreshed]['1. open'],
                stockClosePrice: responseJson['Time Series (15min)'][lastRefreshed]['4. close'],
                stockVolume: responseJson['Time Series (15min)'][lastRefreshed]['5. volume']
            }, function(){
            });
        })
        .catch((error)=>{
            console.error(error);
        });
        fetch ('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=ME&interval=15min&outputsize=full&apikey=Z92H22WV10EE6J3N')
        .then((response) => response.json())
        .then((responseJson) => {
            const lastRefreshed = responseJson['Meta Data']['3. Last Refreshed'];
            this.setState({
                tickerSymbol3: responseJson['Meta Data']['2. Symbol'],
                stockOpenPrice3:  responseJson['Time Series (15min)'][lastRefreshed]['1. open'],
                stockClosePrice3: responseJson['Time Series (15min)'][lastRefreshed]['4. close'],
                stockVolume3: responseJson['Time Series (15min)'][lastRefreshed]['5. volume']
            }, function(){
            });
        })
        .catch((error)=>{
            console.error(error);
        });
    fetch ('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=THO&interval=15min&outputsize=full&apikey=Z92H22WV10EE6J3N')
        .then((response) => response.json())
        .then((responseJson) => {
            const lastRefreshed = responseJson['Meta Data']['3. Last Refreshed'];
            this.setState({
                tickerSymbol4: responseJson['Meta Data']['2. Symbol'],
                stockOpenPrice4:  responseJson['Time Series (15min)'][lastRefreshed]['1. open'],
                stockClosePrice4: responseJson['Time Series (15min)'][lastRefreshed]['4. close'],
                stockVolume4: responseJson['Time Series (15min)'][lastRefreshed]['5. volume']
            }, function(){
            });
        })
        .catch((error)=>{
            console.error(error);
        });
    fetch ('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GE&interval=15min&outputsize=full&apikey=Z92H22WV10EE6J3N')
        .then((response) => response.json())
        .then((responseJson) => {
            const lastRefreshed = responseJson['Meta Data']['3. Last Refreshed'];
            this.setState({
                tickerSymbol5: responseJson['Meta Data']['2. Symbol'],
                stockOpenPrice5:  responseJson['Time Series (15min)'][lastRefreshed]['1. open'],
                stockClosePrice5: responseJson['Time Series (15min)'][lastRefreshed]['4. close'],
                stockVolume5: responseJson['Time Series (15min)'][lastRefreshed]['5. volume']
            }, function(){
            });
        })
        .catch((error)=>{
            console.error(error);
        });
    fetch ('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=NVDA&interval=15min&outputsize=full&apikey=Z92H22WV10EE6J3N')
        .then((response) => response.json())
        .then((responseJson) => {
            const lastRefreshed = responseJson['Meta Data']['3. Last Refreshed'];
            this.setState({
                tickerSymbol6: responseJson['Meta Data']['2. Symbol'],
                stockOpenPrice6:  responseJson['Time Series (15min)'][lastRefreshed]['1. open'],
                stockClosePrice6: responseJson['Time Series (15min)'][lastRefreshed]['4. close'],
                stockVolume6: responseJson['Time Series (15min)'][lastRefreshed]['5. volume']
            }, function(){
            });
        })
        .catch((error)=>{
            console.error(error);
        });
  }
  render() {
    return (
      <div>
        <div className="Scraper">
          <h2 className="ExpenseText">Stocks</h2>
          <hr />
          <br />
          <table className="StocksTable">
            <tbody>
                <tr>
                    <th className="stockLink">Ticker Symbol</th>
                    <th className="stockLink">Open Price</th>
                    <th className="stockLink">Close Price</th>
                    <th className="stockLink">Volume</th>
                </tr>
                <tr>
                    <td>{this.state.tickerSymbol}</td>
                    <td>{this.state.stockOpenPrice}</td>
                    <td>{this.state.stockClosePrice}</td>
                    <td>{this.state.stockVolume}</td>
                </tr>
                <tr>
                    <td>{this.state.tickerSymbol2}</td>
                    <td>{this.state.stockOpenPrice2}</td>
                    <td>{this.state.stockClosePrice2}</td>
                    <td>{this.state.stockVolume2}</td>
                </tr>
                <tr>
                    <td>{this.state.tickerSymbol3}</td>
                    <td>{this.state.stockOpenPrice3}</td>
                    <td>{this.state.stockClosePrice3}</td>
                    <td>{this.state.stockVolume3}</td>
                </tr>
                <tr>
                    <td>{this.state.tickerSymbol4}</td>
                    <td>{this.state.stockOpenPrice4}</td>
                    <td>{this.state.stockClosePrice4}</td>
                    <td>{this.state.stockVolume4}</td>
                </tr>
                <tr>
                    <td>{this.state.tickerSymbol5}</td>
                    <td>{this.state.stockOpenPrice5}</td>
                    <td>{this.state.stockClosePrice5}</td>
                    <td>{this.state.stockVolume5}</td>
                </tr>
                <tr>
                    <td>{this.state.tickerSymbol6}</td>
                    <td>{this.state.stockOpenPrice6}</td>
                    <td>{this.state.stockClosePrice6}</td>
                    <td>{this.state.stockVolume6}</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Scraper;