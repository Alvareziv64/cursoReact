import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//COMPONENTS
import NavBar from "./components/NavBar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemProvider } from "./CartContext";
//VIEWS
import Home from "./components/Pages/Home";
import CartContainer from "./components/CartContainer/CartContainer";
import Filter from "./components/Pages/Section";

const App = () => {

  return (
    <>
      <Router>
        <ItemProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/section/:filter" element={<Filter title="filtro" />} />
            <Route
              path="/item/:id"
              element={<ItemDetailContainer title="Detalle" />}
            />
            <Route path="/cart" element={<CartContainer title="Carrito" />} />
          </Routes>
        </ItemProvider>
      </Router>
    </>
  );
};

export default App;
