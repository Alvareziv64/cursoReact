import React from "react";
//COMPONENTS
import NavBar from "./components/NavBar/Navbar";
//import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemDetailContainer
      title="Detalle"/>

      
    </>
  );
};

export default App;
//<ItemListContainer greeting="Tienda" />