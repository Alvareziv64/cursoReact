import React, { useContext } from "react";
import "./CartWidget.css";
import { CartContext } from "../../CartContext";

const CartWidget = () => {
  const { nCantidad } = useContext(CartContext);
  return (
    <div className="cartC">
      <div>
        <i className="fa-solid fa-cart-shopping fa-xs"></i>
      </div>
        {nCantidad > 0 ? <div className="cartNum"><div className="num">{nCantidad}</div></div> : null}
    </div>
  );
};

export default CartWidget;
