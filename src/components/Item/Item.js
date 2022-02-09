import React from "react";
import './Item.css';

const Item = ({ data }) => {
  return (
    <div className="card">
      <img src={data.image} className="card-img-top img" alt="Producto"></img>
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
      </div>
    </div>
  );
};

export default Item;
