import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import axios from "axios";
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://fakestoreapi.com/products/").then((json) =>
      setProducts(json.data)
    );
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }, []);

  return (
    <div className="container">
      <h1>{greeting}</h1>
      {loading ? <p>Cargando...</p> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
