import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import axios from "axios";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ title }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  let id = useParams();
  let userId = id.id;

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${userId}`).then((json) =>
      setProduct(json.data)
    );
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container detail">
      <h1>{title}</h1>
      {loading ? <p>Cargando...</p> : <ItemDetail detail={product} />}
    </div>
  );
};

export default ItemDetailContainer;
