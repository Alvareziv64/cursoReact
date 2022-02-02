import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [data, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="container">
      <h1>{greeting}</h1>
      <ItemList products={data} />
    </div>
  );
};

export default ItemListContainer;
