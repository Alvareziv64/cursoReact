import React from "react";

const Item = ({ data }) => {
  return (
    <div className="card" width="60px">
      <img src={data.image} className="card-img-top" alt="Producto"></img>
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
      </div>
    </div>
  );
};

export default Item;
