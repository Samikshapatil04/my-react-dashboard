
// import React, { useState } from "react";
// import ProductData from "./ProductData";
// import Cards from "./Cards";
// import Cart from "./Cart";
// import Header from "./Header";
// import "./New.css";
// import "./Cart.css";

// const New = () => {
//   const [cart, setCart] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const addCart = (item) => {
//     setCart([...cart, item]);
//   };

//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen);
//   };

//   return (
//     <div className="new-page">
//       <Header />
//       <div className="cart-icon" onClick={toggleCart}>
//         <i className='bx bx-cart'></i>
//         {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
//       </div>
//       <div className="products">
//         {ProductData.map((product) => (
//           <Cards key={product.id} send={product} addCart={addCart} />
//         ))}
//       </div>
//       {isCartOpen && <Cart cartItems={cart} onClose={toggleCart} />}
//     </div>
//   );
// };

// export default New;

// import React, { useState } from "react";
// import ProductData from "./ProductData";
// import Cards from "./Cards";
// import Header from "./Header";
// import Cart from "./Cart";
// import "./New.css";

// const New = () => {
//   const [cart, setCart] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const addCart = (item) => {
//     const alreadyAdded = cart.some((cartItem) => cartItem.id === item.id);
//     if (alreadyAdded) {
//       alert("Item already in cart!");
//     } else {
//       setCart([...cart, item]);
//     }
//   };

//   return (
//     <div className="new-page">
//       <Header cartCount={cart.length} onCartClick={() => setIsCartOpen(true)} />
//       <div className="products">
//         {ProductData.map((product) => (
//           <Cards key={product.id} send={product} addCart={addCart} />
//         ))}
//       </div>
//       <Cart isOpen={isCartOpen} cartItems={cart} onClose={() => setIsCartOpen(false)} />
//     </div>
//   );
// };

// export default New;

// === src/amazonpage/New.js ===
// import React, { useState } from "react";
// import ProductData from "./ProductData";
// import Cards from "./Cards";
// import Header from "./Header";
// import Panel from "./Panel";
// import "./New.css";

// const New = () => {
//   const [cart, setCart] = useState([]);
//   const [isPanelOpen, setIsPanelOpen] = useState(false);

//   const addCart = (item) => {
//     const alreadyAdded = cart.some((cartItem) => cartItem.id === item.id);
//     if (alreadyAdded) {
//       alert("Item already in cart!");
//     } else {
//       setCart([...cart, item]);
//     }
//   };

//   return (
//     <div className="new-page">
//       <Header
//         cartCount={cart.length}
//         onCartClick={() => setIsPanelOpen(true)}
//       />
//       <div className="products">
//         {ProductData.map((product) => (
//           <Cards key={product.id} send={product} addCart={addCart} />
//         ))}
//       </div>
//       <Panel
//         isOpen={isPanelOpen}
//         cartItems={cart}
//         onClose={() => setIsPanelOpen(false)}
//       />
//     </div>
//   );
// };

// export default New;


// import React, { useState } from "react";
// import ProductData from "./ProductData";
// import Cards from "./Cards";
// import Header from "./Header";
// import Panel from "./Panel";
// import Cart from "./Cart"; // if you want to use both Panel and Cart
// import "./New.css";

// const New = () => {
//   const [cart, setCart] = useState([]);
//   const [isPanelOpen, setIsPanelOpen] = useState(false);

//   const addCart = (item) => {
//     if (cart.some(ci => ci.id === item.id)) {
//       alert("Item already in cart!");
//     } else {
//       setCart([...cart, item]);
//     }
//   };

//   const removeItem = (id) => {
//     setCart(cart.filter(item => item.id !== id));
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <div className="new-page">
//       <Header
//         cartCount={cart.length}
//         onCartClick={() => setIsPanelOpen(true)}
//       />

//       <div className="products">
//         {ProductData.map(product => (
//           <Cards
//             key={product.id}
//             send={product}
//             addCart={addCart}
//           />
//         ))}
//       </div>

//       {/* Side-drawer cart */}
//       <Panel
//         isOpen={isPanelOpen}
//         cartItems={cart}
//         onClose={() => setIsPanelOpen(false)}
//         removeItem={removeItem}
//         clearCart={clearCart}
//       />

//       {/* Optional overlay Cart component if you want a different style */}
//       {/* <Cart
//         isOpen={isPanelOpen}
//         cartItems={cart}
//         onClose={() => setIsPanelOpen(false)}
//       /> */}
//     </div>
//   );
// };

// export default New;
import React, { useState } from "react";
import ProductData from "./ProductData";
import Cards from "./Cards";
import Header from "./Header";
import Panel from "./Panel";
import "./New.css";

const New = () => {
  const [cart, setCart] = useState([]);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const addCart = (item) => {
    if (cart.some(ci => ci.id === item.id)) {
      alert("Item already in cart!");
    } else {
      setCart([...cart, item]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const togglePanel = () => setIsPanelOpen(prev => !prev);

  return (
    <div className="new-page">
      <Header
        cartCount={cart.length}
        onCartClick={togglePanel}      /* <-- toggle on click */
      />

      <div className="products">
        {ProductData.map(product => (
          <Cards
            key={product.id}
            send={product}
            addCart={addCart}
          />
        ))}
      </div>

      {/* ONLY this Panel – no Cart component anywhere */}
      <Panel
        isOpen={isPanelOpen}
        cartItems={cart}
        onClose={togglePanel}         /* use same toggle to close */
        removeItem={removeItem}
        clearCart={clearCart}
      />
    </div>
  );
};

export default New;

