import React /*{useContext} */ from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import { Link } from "react-router-dom";
const ItemList = ({ comicsData }) => {

  return (
    <div className="gridDiv">
      {comicsData.map((data) => {
        return(       
        <Link className="gridItem" to={`/item/${data.id}`} style={{ textDecoration: "none" }}>
         <Item data={data} key={data.id} />
        </Link>)
      })}
    </div>
  );
};

export default ItemList;
