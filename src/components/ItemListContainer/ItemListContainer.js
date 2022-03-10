import React, { useState, useEffect } from "react";
// COMPONENTS
import ItemList from "../ItemList/ItemList";
import Placeholder from "../Placeholder/Placeholder";
// CSS
import "./ItemListContainer.css";

//Firestore
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
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
    <div>
      {loading ? (
        <div>
          <div className="skeleton">
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
          </div>
          <div className="skeleton">
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
          </div>
        </div>
      ) : (
        <ItemList comicsData={comicsData} />
      )}
    </div>
  );
};

export default ItemListContainer;
