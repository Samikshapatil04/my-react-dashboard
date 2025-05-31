// import React, { useState } from "react";
// import Cart from './Cart'; // Default import for Cart component
// import "./Header.css";
// import 'boxicons/css/boxicons.min.css'; // Import Boxicons CSS

// const Header = () => {
//   const [isCartOpen, setCartOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([
   
//   ]);

//   const toggleCart = () => {
//     setCartOpen(!isCartOpen);
//   };

//   const closeCart = () => {
//     setCartOpen(false);
//   };

// console.log("Header rendered");

// return (
//   <>
//     <header className="header">
//       <h1>Amazon Clone</h1>
//       <div className="cart-icon" onClick={toggleCart}>
//         {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
//       </div>
//       {isCartOpen && <Cart cartItems={cartItems} onClose={closeCart} />}
//     </header>
//   </>
// );
// };

//  export default Header;

// import React from "react";
// import "./Header.css";
// import { BiCartAlt } from "react-icons/bi";

// const Header = ({ cartCount, onCartClick }) => {
//   return (
//     <header className="header">
//       <h1>Amazon Clone</h1>
//       <div className="cart-icon" onClick={onCartClick}>
//         <BiCartAlt size={30} />
//         <span className="cart-count">{cartCount}</span>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import "./Header.css";
import { BiCartAlt } from "react-icons/bi";

const Header = ({ cartCount, onCartClick }) => {
  return (
    <header className="header">
      <h1 className="logo">Amazon Clone</h1>
      <div className="cart-icon" onClick={onCartClick}>
        <BiCartAlt size={30} />
        {cartCount > 0 && (
          <span className="cart-count">{cartCount}</span>
        )}
      </div>
    </header>
  );
};

export default Header;

