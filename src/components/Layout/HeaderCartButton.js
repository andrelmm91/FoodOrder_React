import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/Cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighed, setBtnIsHighlighed] = useState(false);

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighed ? classes.bump : ''}`;
  const { items } = cartCtx;

  useEffect(() => {
    if (cartCtx.items.length === 0) {return;}
    setBtnIsHighlighed(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighed(false);
    }, 300);//remove animation class to be played again

    return (() => {
      clearTimeout(timer)
    })
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart </span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
