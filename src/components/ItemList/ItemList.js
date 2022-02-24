import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import { Link } from "react-router-dom";

const ItemList = ({ comicsData }) => {
  return (
    <div>
      {comicsData.map((data) => {
        return (
          <div key={data.id} className="Cards">
            <Link to={`/item/${data.id}`}>
              <Item data={data} key={data.id} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
