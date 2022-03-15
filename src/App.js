import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ItemProvider } from "./CartContext";
//COMPONENTS
import NavBar from "./components/NavBar/Navbar";
import ItemDetailPage from "./components/Pages/ItemDetailPage/ItemDetailPage";
import Cart from "./components/Pages/Cart/Cart";
//VIEWS
import Home from "./components/Pages/Home/Home";
import Section from "./components/Pages/Section/Section";
import Buy from "./components/Pages/Buy/Buy"
import ErrorPage from "./components/Pages/ErrorPage/ErroPage";
//CSS
import "./App.css"

const App = () => {

  return (
    <>
      <Router>
        <ItemProvider>
          <NavBar />
          <Routes >
            <Route path="/" element={<Home/>} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/section/:filter" element={<Section title="filtro" />} />
            <Route
              path="/item/:id"
              element={<ItemDetailPage />}
            />
            <Route path="/cart" element={<Cart title="Carrito" />} />
          </Routes>
        </ItemProvider>
      </Router> 
    </>
  );
};

export default App;
