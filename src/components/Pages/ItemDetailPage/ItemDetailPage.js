import React from "react";
//COMPONENTS
import ItemDetailContainer from "../../ItemDetailContainer/ItemDetailContainer";
import Divisor from "../../Divisor/Divisor";
import Footer from "../../Footer/Footer";

const ItemDetailPage = () => {
  return (
    <div style={{ backgroundColor: "rgb(27, 26, 26)" }}>
      <Divisor text="DETAIL" />
      <div className="main">
        {" "}
        <ItemDetailContainer />
      </div>
      <Footer />
    </div>
  );
};

export default ItemDetailPage;
