

import React from "react";
import Card from "./Card";

export default function PanelTwo(props) {
  const coinData = [
    { value: 1, number: props.one },
    { value: 2, number: props.two },
    { value: 5, number: props.five },
    { value: 10, number: props.ten },
    { value: 20, number: props.twenty },
  ];

  return (
    <div className="panel-two">
      {coinData.map((coin) => (
        <Card key={coin.value} value={coin.value} number={coin.number} />
      ))}
    </div>
  );
}

