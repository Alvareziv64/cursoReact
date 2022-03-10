import React from "react";
//COMPONENTS
import CartContainer from "../../CartContainer/CartContainer";
import Footer from "../../Footer/Footer";
import Divisor from "../../Divisor/Divisor";

const Cart = () => {
  return (
    <div style={{ backgroundColor: "rgb(27, 26, 26)" }}>
      <Divisor text="CART" />
      <CartContainer />
      <Footer />
    </div>
  );
};

export default Cart;
