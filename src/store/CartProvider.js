import { useReducer } from "react";
import CartContext from "./Cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// reducerFunction will get from the dispatch the type of operation to handle when an action was done and change the state.
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return { items: updateItems, totalAmount: updatedTotalAmount };
  }
  return defaultCartState;
};

// const [CurrentState, dispatchFunction] = useReducer(ReducerFunction, InitialState)
const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartState({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartState({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
