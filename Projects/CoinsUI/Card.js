
import React from "react";
import "./Card.css";

export default class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div><strong>₹{this.props.value} coin</strong></div>
        <div>x{this.props.number}</div>
      </div>
    );
  }
}

