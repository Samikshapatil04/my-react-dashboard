

import React from "react";
import "./DashBoard.css";
import Panel from "./Panel";
import PanelTwo from "./PanelTwo";

export default class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      CoinOne: 0,
      CoinTwo: 0,
      CoinFive: 0,
      CoinTen: 0,
      CoinTwenty: 0,
    };
  }

  totalCount = (value) => {
    switch (value) {
      case 1:
        this.setState((prev) => ({
          total: prev.total + 1,
          CoinOne: prev.CoinOne + 1,
        }));
        break;
      case 2:
        this.setState((prev) => ({
          total: prev.total + 2,
          CoinTwo: prev.CoinTwo + 1,
        }));
        break;
      case 5:
        this.setState((prev) => ({
          total: prev.total + 5,
          CoinFive: prev.CoinFive + 1,
        }));
        break;
      case 10:
        this.setState((prev) => ({
          total: prev.total + 10,
          CoinTen: prev.CoinTen + 1,
        }));
        break;
      case 20:
        this.setState((prev) => ({
          total: prev.total + 20,
          CoinTwenty: prev.CoinTwenty + 1,
        }));
        break;
      default:
        break;
    }
  };

  getCoinCount = (value) => {
    switch (value) {
      case 1: return this.state.CoinOne;
      case 2: return this.state.CoinTwo;
      case 5: return this.state.CoinFive;
      case 10: return this.state.CoinTen;
      case 20: return this.state.CoinTwenty;
      default: return 0;
    }
  };

  render() {
    return (
      <div className="dash-board">
        <h2 className="title">💰 Coin Collector Game</h2>
        <div className="counter">Total : ₹{this.state.total}</div>
        <div className="dash-board-body">
          <div className="dash-board-body-one">
            <Panel count={this.totalCount} getCount={this.getCoinCount} />
          </div>
          <div className="dash-board-body-two">
            <PanelTwo
              one={this.state.CoinOne}
              two={this.state.CoinTwo}
              five={this.state.CoinFive}
              ten={this.state.CoinTen}
              twenty={this.state.CoinTwenty}
            />
          </div>
        </div>
      </div>
    );
  }
}
