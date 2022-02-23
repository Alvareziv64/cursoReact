import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
//import axios from "axios";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
//Firestore
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

const ItemDetailContainer = ({ title }) => {
  const [comicsData, setComicsData] = useState([]);
  const [loading, setLoading] = useState(true);

  let id = useParams();
  let productId = id.id;

  /*useEffect(() => {
    axios(`https://fakestoreapi.com/products/${productId}`).then((json) => {
      setProduct(json.data)
      setLoading(false);
   } );
  }, [productId]);*/

  useEffect(() => {
    const getComics = async () => {
      const q = query(collection(db, "comics"),
      where("id", "==", {productId}));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        setLoading(false);
      });
      setComicsData(docs);
    };
    getComics();
  }, [productId]);


  return (
    <div className="container detail">
      <h1>{title}</h1>
      {loading ? <p>Cargando...</p> : <ItemDetail detail={comicsData} />}
    </div>
  );
};

export default ItemDetailContainer;
