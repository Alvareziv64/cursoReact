
import React from "react";
//COMPONENTS
import NavBar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () =>  {


  return (
    <>
      <NavBar/> 

      <ItemListContainer 
       greeting='Tienda'
      />


    </>
  );
}

export default App;
