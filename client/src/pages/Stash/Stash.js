import React, { Component } from 'react';
import Stash from "../../components/Stash";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import "./Stash.css";

class YourStash extends Component {
  render() {
    return (
      <div>
        <Navbar />
      <Header />
        <div className="StashTitle">Your Stash
        </div>{this.props.children}
        <Stash />
      </div>
    );
  }
}

export default YourStash;