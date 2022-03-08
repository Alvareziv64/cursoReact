import React from "react";
import ItemDetailContainer from "../../ItemDetailContainer/ItemDetailContainer";
import Divisor from "../../Divisor/Divisor";
import Footer from "../../Footer/Footer";
import "./ItemDetailPage"



const ItemDetailPage = () => {
  return (
    <div style={{ backgroundColor: "rgb(27, 26, 26)" }}>
      <Divisor text="DETAIL" />
      <div className="main">      <ItemDetailContainer /></div>
      <Footer />
    </div>
  );
};

export default ItemDetailPage;
