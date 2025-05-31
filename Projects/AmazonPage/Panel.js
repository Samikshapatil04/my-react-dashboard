// import React from "react";
// import "./Panel.css";
// import Cards from "./Cards";

// export default class Panel extends React.Component {
//   render() {
//     const { passArray, addCart } = this.props; 

//     return (
//       <div className="bottom">
//         {passArray.map((item, index) => (
//           <Cards key={index} send={item} addCart={addCart} />
//         ))}
//       </div>
//     );
//   }
// }

// import React from "react";
// import "./Panel.css";

// const Panel = ({ isOpen, cartItems, onClose }) => {
//   return (
//     <div className={`panel ${isOpen ? "open" : ""}`}>
//       <button className="close-button" onClick={onClose}>X</button>
//       <h2>Cart Items</h2>
//       <ul>
//         {cartItems.map((item, index) => (
//           <li key={index}>{item.name} - ₹{item.price}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Panel;
// === src/amazonpage/Panel.js ===
// import React from "react";
// import "./Panel.css";

// const Panel = ({ isOpen, cartItems, onClose, removeItem, clearCart }) => {
//   return (
//     <div className={`panel ${isOpen ? "open" : ""}`}>
//       <button className="close-button" onClick={onClose}>X</button>
//       <h2>Cart Items</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <ul className="cart-list">
//             {cartItems.map((item, index) => (
//               <li key={index} className="cart-item">
//                 {item.name} - ₹{item.price}
//                 <button className="remove-button" onClick={() => removeItem(item.id)}>Remove</button>
//               </li>
//             ))}
//           </ul>
//           <button className="clear-cart-button" onClick={clearCart}>Clear Cart</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Panel;

import React from "react";
import "./Panel.css";

const Panel = ({ isOpen, cartItems, onClose, removeItem, clearCart }) => (
  <div className={`panel-one ${isOpen ? "open-one" : ""}`}>
    <button className="close-button-one" onClick={onClose}>×</button>
    <h2 style={{color: "#0B192C"}}>Cart Items</h2>

    {cartItems.length === 0 ? (
      <p style={{color: "#0B192C"}}>Your cart is empty.</p>
    ) : (
      <>
        <ul className="cart-list-one">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item-one">
              {item.name} — ₹{item.price}
              <button
                className="remove-button-one"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <button
          className="clear-cart-button-one"
          onClick={clearCart}
        >Clear Cart</button>
      </>
    )}
  </div>
);

export default Panel;
