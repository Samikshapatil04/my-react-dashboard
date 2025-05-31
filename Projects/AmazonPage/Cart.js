
// import React from "react";
// import "./Cart.css";

// const Cart = ({ cartItems, onClose }) => {
//   return (
//     <div className="cart-panel">
//       <div className="cart-header">
//         <h2>Cart</h2>
//         <button onClick={onClose} className="close-btn">×</button>
//       </div>
//       <ul className="cart-list">
//         {cartItems.map((item, index) => (
//           <li key={index} className="cart-item">
//             {item.name} - ₹{item.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cart;

// import React from "react";
// import "./Cart.css";

// const Cart = ({ isOpen, cartItems, onClose }) => {
//   return (
//     <div className={`cart-panel ${isOpen ? "open" : ""}`}>
//       <button className="close-button" onClick={onClose}>×</button>
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>No items added.</p>
//       ) : (
//         <ul>
//           {cartItems.map((item, index) => (
//             <li key={index}>{item.name} - ₹{item.price}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import "./Cart.css";

const Cart = ({ isOpen, cartItems, onClose }) => {
  return (
    <div className={`cart-panel ${isOpen ? "open" : ""}`}>
      <button className="close-button" onClick={onClose}>×</button>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items added.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-thumb" />
              <div className="cart-details">
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

