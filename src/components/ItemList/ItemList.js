import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="container">
      <div className="ItemList row">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Item data={product} key={product.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
