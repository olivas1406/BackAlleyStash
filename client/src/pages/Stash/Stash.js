import React, { Component } from 'react';
import Header from "../../components/Header";
import Stash from "../../components/Stash";
import "./Stash.css";

class YourStash extends Component {
  render() {
    return (
   <div>
      <div className="StashTitle">Your Stash
      </div>
      <Stash />
      
    </div>
    );
  }
}

export default YourStash;