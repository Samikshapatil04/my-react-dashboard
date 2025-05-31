
import React from "react";
import "./Cards.css";

const Cards = ({ send, addCart }) => {
  return (
    <div className="card-one">
      <div className="card-container-one">
        <img
          src={send.image}
          alt={`Image of ${send.name}`}
          className="image-one"
        />
        <h2 className="title-one" style={{color: "#0B192C"}}>
  {send.name}
</h2>


        <p className="description-one">{send.description}</p>
        <h3 className="price-one">₹{send.price}</h3>
        <button
          className="button-one"
          onClick={() => addCart(send)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cards;

