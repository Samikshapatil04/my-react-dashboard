

import React from "react";
import "./Coin.css";

export default class Coin extends React.Component {
  render() {
    return (
      <div className="coin" onClick={() => this.props.count(this.props.value)}>
        <span className="coin-value">₹{this.props.value}</span>
        <span className="coin-count">x{this.props.getCount(this.props.value)}</span>
      </div>
    );
  }
}
