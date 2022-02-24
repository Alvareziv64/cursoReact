import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import { collection, where, getDocs, query } from "firebase/firestore";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Filter = () => {
  const [filterData, setFilterData] = useState([]);
  const { filter } = useParams;
  console.log(filter);

  return <div>Filter</div>;
};

export default Filter;
