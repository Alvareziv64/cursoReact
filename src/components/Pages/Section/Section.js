import React, { useState, useEffect } from "react";
import ItemList from "../../ItemList/ItemList";
import Divisor from "../../Divisor/Divisor";
import Footer from "../../Footer/Footer";
import "./Section.css";
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
    <div style={{ backgroundColor: "rgb(27, 26, 26)" }} >
      <Divisor text={filter.toUpperCase()} />
      <div className="main">
        {loading ? <p>Cargando...</p> : <ItemList comicsData={filterData} />}
      </div>
      <Footer />
    </div>
  );
};

export default Section;
