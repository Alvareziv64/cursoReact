import React from "react";
// COMPONENTS
import BuyForm from "../../BuyForm/BuyForm";
import Divisor from "../../Divisor/Divisor";
import Footer from "../../Footer/Footer";

const Buy = () => {
  return (
    <div style={{ backgroundColor: "rgb(27, 26, 26)" }}>
      <Divisor text="CHECKOUT" />
      <BuyForm />
      <Footer />
    </div>
  );
};

export default Buy;
