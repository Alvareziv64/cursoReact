import React from "react";
import "./ItemDetail.css";

const ItemList = ({ detail }) => {
  return (
    <div className="card cardDiv">
      <img
        src={detail.image}
        className="card-img-top image"
        alt="Producto"
      ></img>
      <div className="card-body">
        <h4 className="card-title">{detail.title}</h4>
        <p class="card-text">{detail.description}</p>
        <h5>{"$" + detail.price}</h5>
        <a href="/" class="btn btn-primary">
          Comprar
        </a>
      </div>
    </div>
  );
};

export default ItemList;

<p class="card-text"></p>;
