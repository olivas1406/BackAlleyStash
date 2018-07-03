import React, { Component } from 'react';
import "./Asset.css"

class Asset extends Component {
  render() {
    return (
   <div className="AssetText">{this.props.children}</div>
    );
  }
}

export default Asset;