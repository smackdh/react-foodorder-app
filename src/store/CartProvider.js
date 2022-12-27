// import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};

  const CartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider>{props.child}</CartContext.Provider>;
};

export default CartProvider;

/// SOMETHING HERE _____ LINE 14?
/// You've made a component inside a component. Check CartContext -----
