import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import axios from "axios";
import "./ItemDetailContainer.css";

const ItemDetailContainer = ({ title }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://fakestoreapi.com/products/1").then((json) =>
      setProduct(json.data)
    );
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  return (
    <div className="container detail">
      <h1>{title}</h1>
      {loading ? <p>Cargando...</p> : <ItemDetail detail={product} />}
    </div>
  );
};

export default ItemDetailContainer;
