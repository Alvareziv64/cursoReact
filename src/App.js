import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ItemProvider } from "./CartContext";
//COMPONENTS
import NavBar from "./components/NavBar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Pages/Cart/Cart";
//VIEWS
import Home from "./components/Pages/Home/Home";
import Section from "./components/Pages/Section/Section";
import Buy from "./components/Pages/Buy/Buy"

const App = () => {

  return (
    <>
      <Router>
        <ItemProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/section/:filter" element={<Section title="filtro" />} />
            <Route
              path="/item/:id"
              element={<ItemDetailContainer title="Detalle" />}
            />
            <Route path="/cart" element={<Cart title="Carrito" />} />
          </Routes>
        </ItemProvider>
      </Router> 
    </>
  );
};

export default App;
