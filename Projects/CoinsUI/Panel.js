


import React from "react";
import "./Panel.css";
import Coin from "./Coin";

export default class Panel extends React.Component {
  render() {
    return (
      <div className="panel">
        <Coin value={1} count={this.props.count} getCount={this.props.getCount} />
        <Coin value={2} count={this.props.count} getCount={this.props.getCount} />
        <Coin value={5} count={this.props.count} getCount={this.props.getCount} />
        <Coin value={10} count={this.props.count} getCount={this.props.getCount} />
        <Coin value={20} count={this.props.count} getCount={this.props.getCount} />
      </div>
    );
  }
}

