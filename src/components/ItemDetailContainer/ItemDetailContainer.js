import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import axios from "axios";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ title }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  let id = useParams();
  let productId = id.id;

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${productId}`).then((json) => {
      setProduct(json.data)
      setLoading(false);
   } );
  }, [productId]);

  return (
    <div className="container detail">
      <h1>{title}</h1>
      {loading ? <p>Cargando...</p> : <ItemDetail detail={product} />}
    </div>
  );
};

export default ItemDetailContainer;
