import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import axios from "axios";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products/")
    //   .then((response) => response.json())
    axios("https://fakestoreapi.com/products/").then((json) =>
      setProducts(json.data)
    );
  }, []);

  return (
    <div className="container">
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
