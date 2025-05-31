import React from "react";
import "./TableUI.css";

class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableNumber: "",
    };
  }

  tableMulti = (tableNumber, number) => {
    return (
      <div className="row" key={number}>
        <button className="btn">{tableNumber}</button>
        <text>X</text>
        <button className="btn">{number}</button>
        <text>=</text>
        <button className="btn">{tableNumber * number}</button>
      </div>
    );
  };

  renderTable = () => {
    let i = 1;
    let tableCellArray = [];
    while (i <= 10) {
      tableCellArray.push(this.tableMulti(this.state.tableNumber, i));
      i++;
    }
    return <div className="table-container">{tableCellArray}</div>;
  };

  tableButtons = () => {
    let i = 1;
    let array = [];
    while (i <= 10) {
      let index = i;
      array.push(
        <button
          key={index}
          className="btn"
          style={this.props.bgColor}
          onClick={() => this.buttonClicked(index)}
        >
          {index}
        </button>
      );
      i++;
    }
    return <div className="button-container">{array}</div>;
  };
  buttonClicked = (index) => {
    console.log("button==>", index);
    this.setState({ tableNumber: index });
  };

  render() {
    return (
      <div>
        {this.tableButtons()}
        {this.renderTable()}
      </div>
    );
  }
  
}
export default TableComponent;
