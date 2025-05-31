import React, { useState } from "react";
import "./BulbProject.css";

export default function WithoutState() {
  const [bulbState, setBulbState] = useState("off");

  const bulbImages = {
    on: "https://img.freepik.com/premium-photo/several-light-bulbs-lit_863013-157376.jpg",
    off: "https://media.istockphoto.com/id/502789173/photo/light-bulb-concept.jpg?s=612x612&w=0&k=20&c=vJfSDuFJf_4UsQcUsdMNUfDkkNU6Bf9cTHF-n4-Zwvs=",
  };

  const handleButtonClick = (state) => {
    console.log("onClick");
    setBulbState(state);
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Bulb is: {bulbState.toUpperCase()}</h2>
      <img
        src={bulbImages[bulbState]}
        alt={`Bulb is ${bulbState}`}
        className="bulb-image"
      />
      <div className="button-container">
        <button
          style={{ backgroundColor: "green" }}
          className="btn"
          onClick={() => handleButtonClick("on")}
        >
          ON
        </button>
        <button
          style={{ backgroundColor: "red" }}
          className="btn"
          onClick={() => handleButtonClick("off")}
        >
          OFF
        </button>
      </div>
    </div>
  );
}
