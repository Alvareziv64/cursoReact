import React from "react";
import ItemListContainer from "../../ItemListContainer/ItemListContainer";
import Banner from "../../Banner/Banner";
import Divisor from "../../Divisor/Divisor"


const Home = () => {
  return (
    <div style={{backgroundColor: "rgb(27, 26, 26)"}}>
      <Banner />
      <Divisor text="PRODUCTOS"/>
      <ItemListContainer/>
    </div>
  );
};

export default Home;
