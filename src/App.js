import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//COMPONENTS
import NavBar from "./components/NavBar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemProvider } from "./CartContext";
//VIEWS
import Home from "./components/Pages/Home";
import Electronics from "./components/Pages/Electronics";
import Mens from "./components/Pages/Mens";

const App = () => {
  return (
    <>
      <Router>
        <ItemProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/Mens" element={<Mens />} />
            <Route
              path="/item/:id"
              element={<ItemDetailContainer title="Detalle" />}
            />
            <Route path="/cart" />
          </Routes>
        </ItemProvider>
      </Router>
    </>
  );
};

export default App;
