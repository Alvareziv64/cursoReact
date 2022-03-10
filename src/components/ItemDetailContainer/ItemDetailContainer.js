import React, { useState, useEffect } from "react";
// COMPONENTS
import ItemDetail from "../ItemDetail/ItemDetail";
// CSS
import "./ItemDetailContainer.css";
// RRD
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
// MATERIAL UI
import { Skeleton, Stack, Card } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//Dark Theme for Card
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
  },
});

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
      {loading ? (
        <ThemeProvider theme={darkTheme}>
          {" "}
          <Card sx={{ maxWidth: 700 }}>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" width={260} height={280} />
              <Skeleton variant="text" width={260} />
              <Skeleton variant="text" width={260} />
            </Stack>
          </Card>
        </ThemeProvider>
      ) : (
        comicsData.map((data) => {
          return <ItemDetail detail={data} key={data.id} />;
        })
      )}
    </div>
  );
};

export default ItemDetailContainer;
