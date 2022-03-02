import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
//Firestore
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";

const ItemDetailContainer = ({ title }) => {
  const [comicsData, setComicsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();


  useEffect(() => {
    const getComics = async () => {
      const q = query(collection(db, "comics"), where(documentId(), "==", id));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        setLoading(false);
      });
      setComicsData(docs);
    };
    getComics();
  }, [id]);

  return (
    <div className="container detail">
      <h1>{title}</h1>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        comicsData.map((data) => {
          return <ItemDetail detail={data} key={data.id} />;
        })
      )}
    </div>
  );
};

export default ItemDetailContainer;



//Peticion con AXIOS:

//import axios from "axios";

  /*useEffect(() => {
    axios(`https://fakestoreapi.com/products/${productId}`).then((json) => {
      setProduct(json.data)
      setLoading(false);
   } );
  }, [productId]);*/