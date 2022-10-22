import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = () => {
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushu", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {CartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>35.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Cancel</button>
        <button className={classes.bottun}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
