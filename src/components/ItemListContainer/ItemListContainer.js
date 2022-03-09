import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { Skeleton, Stack } from "@mui/material";
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
            <Stack spacing={1}>
              <Skeleton variant="rectangular" width={260} height={280} />
              <Skeleton variant="text" width={260} />
              <Skeleton variant="text" width={260} />
            </Stack>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" width={260} height={280} />
              <Skeleton variant="text" width={260} />
              <Skeleton variant="text" width={260} />
            </Stack>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" width={260} height={280} />
              <Skeleton variant="text" width={260} />
              <Skeleton variant="text" width={260} />
            </Stack>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" width={260} height={280} />
              <Skeleton variant="text" width={260} />
              <Skeleton variant="text" width={260} />
            </Stack>
          </div>
          <div className="skeleton">
            <Stack spacing={1}>
              <Skeleton variant="rectangular" width={260} height={280} />
              <Skeleton variant="text" width={260} />
              <Skeleton variant="text" width={260} />
            </Stack>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" width={260} height={280} />
              <Skeleton variant="text" width={260} />
              <Skeleton variant="text" width={260} />
            </Stack>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" width={260} height={280} />
              <Skeleton variant="text" width={260} />
              <Skeleton variant="text" width={260} />
            </Stack>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" width={260} height={280} />
              <Skeleton variant="text" width={260} />
              <Skeleton variant="text" width={260} />
            </Stack>
          </div>
        </div>
      ) : (
        <ItemList comicsData={comicsData} />
      )}
    </div>
  );
};

export default ItemListContainer;
