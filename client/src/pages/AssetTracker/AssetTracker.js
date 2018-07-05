import React, { Component } from 'react';
import Asset from "../../components/Asset";
import "./AssetTracker.css"

class AssetTracker extends Component {
  render() {
    return (
      <div>
        <div className="AtTitle">Asset Tracker
        </div>
        <br />
        <Asset>Home Equity $60,000</Asset><br />
        <Asset>Netflix Stock (NFLX) $398.18/share</Asset><br />
        <Asset>Gold $1253/ounce</Asset><br />
        <Asset>BitCoin $1</Asset><br />
      </div>
    );
  }
}

export default AssetTracker;