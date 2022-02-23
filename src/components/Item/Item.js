import React from "react";
import './Item.css';

const Item = ({ data }) => {
  return (
    <div className="card">
      <img src={data.img} className="card-img-top img" alt="Producto"></img>
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">{data.title}</p>
      </div>
    </div>
  );
};

export default Item;
