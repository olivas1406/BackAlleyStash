import React, { Component } from 'react';
import Stash from "../../components/Stash";
import "./Stash.css";

class YourStash extends Component {
  render() {
    return (
      <div>
        <div className="StashTitle">Your Stash
        </div>{this.props.children}
        <Stash />
      </div>
    );
  }
}

export default YourStash;