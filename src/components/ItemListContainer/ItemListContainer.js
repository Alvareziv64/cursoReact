import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
//Firestore
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [comicsData, setComicsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getComics = async () => {
      const q = query(collection(db, "comics"));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        setLoading(false);
      });
      setComicsData(docs);
    };
    getComics();
  }, []);

  return (
    <div className="container">
      <h1>{greeting}</h1>
      {loading ? <p>Cargando...</p> : <ItemList products={comicsData} />}
    </div>
  );
};

export default ItemListContainer;
