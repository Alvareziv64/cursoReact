import React, { useState, useEffect } from "react";
import ItemList from "../../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase/firebaseConfig";
import { collection, where, getDocs, query } from "firebase/firestore";

const Section = () => {
  const [filterData, setFilterData] = useState([]);
  const { filter } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getComicsFilterData = async () => {
      const q = query(collection(db, "comics"), where("filter", "==", filter));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        setLoading(false);
      });
      setFilterData(docs);
    };
    getComicsFilterData();
  }, [filter]);

  return (
    <div className="container">
      <h1>{filter.toUpperCase()}</h1>
      {loading ? <p>Cargando...</p> : <ItemList comicsData={filterData} />}
    </div>
  );
};

export default Section;
