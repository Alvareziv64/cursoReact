import React from "react";
// COMPONENTS
import ItemListContainer from "../../ItemListContainer/ItemListContainer";
import Banner from "../../Banner/Banner";
import Divisor from "../../Divisor/Divisor";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div style={{ backgroundColor: "rgb(27, 26, 26)" }}>
      <Banner />
      <Divisor text="COMICS" />
      <ItemListContainer />
      <Footer />
    </div>
  );
};

export default Home;
