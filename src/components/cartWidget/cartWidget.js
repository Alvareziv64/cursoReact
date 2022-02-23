import React, {useContext} from 'react';
import "./CartWidget.css"
import { CartContext } from "../../CartContext";

const CartWidget = () => {
  const { nCantidad } = useContext(CartContext);
  return <div className='cartC'>
      <img src="https://assets.webiconspng.com/uploads/2017/09/Shopping-Cart-PNG-Image-72455.png"
       alt="logo"  width="25px"
      />
      {nCantidad > 0 ? <div className='cartNum'>{nCantidad}</div> : null}
      
  </div>
  ;
};

export default CartWidget;
