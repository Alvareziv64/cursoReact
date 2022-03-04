import React /*{useContext} */ from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import { Link } from "react-router-dom";
//import { CartContext } from "../../CartContext";
import Grid from "@mui/material/Grid";

const ItemList = ({ comicsData }) => {
  // const { useWindowSize } = useContext(CartContext);
  // const [width] = useWindowSize();

  return (
      <Grid container direction="row" justifyContent="flex-start" className="gridContainer">
        {comicsData.map((data) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={data.id} className="gridItem">
              <Link to={`/item/${data.id}`} style={{ textDecoration: "none" }}>
                <Item data={data} key={data.id} />
              </Link>
            </Grid>
          );
        })}
      </Grid>

  );
};

export default ItemList;
