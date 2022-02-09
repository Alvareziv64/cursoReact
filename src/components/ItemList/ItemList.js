import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import { Link } from "react-router-dom";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id} className="Cards">
            <Link to={`/item/${product.id}`}>
              <Item data={product} key={product.id} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
