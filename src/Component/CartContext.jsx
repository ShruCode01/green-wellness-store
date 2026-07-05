import { createContext, useContext, useState } from "react";

const CCartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

 const addToCart = (product) => {
  setCartItems((prev) => {
    const exist = prev.find((item) => item.id === product.id);
    if (exist) {
      // alert("Item quantity increased ✅");
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    // alert("Item added to cart ✅");
    return [...prev, { ...product, quantity: 1 }];
  });
};


  // ✅ Remove only one quantity
  const removeOne = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // remove item if quantity becomes 0
    );
  };

  // ✅ Remove item completely
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
  setCartItems([]);
};

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <CCartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeOne,   // ✅ this was missing
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CCartContext.Provider>
  );
};

export const useCart = () => useContext(CCartContext);