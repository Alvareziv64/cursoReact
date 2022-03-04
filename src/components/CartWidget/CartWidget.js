import React, {useContext} from 'react';
import "./CartWidget.css"
import { CartContext } from "../../CartContext";

const CartWidget = () => {
  const { nCantidad } = useContext(CartContext);
  return <div className='cartC'>
      <i className="fa-solid fa-cart-shopping"></i>
      {nCantidad > 0 ? <div className='cartNum'>{nCantidad}</div> : null}
      
  </div>
  ;
};

export default CartWidget;
