import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemList = ({ detail }) => {
  const [counter, setCounter] = useState(0);

  const stock = 5;

  const handlerCounterUp = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const handlerCounterDown = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="div">
      <div className="card">
        <img
          src={detail.image}
          className="card-img-top image"
          alt="Producto"
        ></img>
      </div>
      <div className="card-body divInfo">
        <h4 className="card-title">{detail.title}</h4>
        <p class="card-text">{detail.description}</p>
        <h5>{"$" + detail.price}</h5>
        <ItemCount
          handlerCounterDown={handlerCounterDown}
          handlerCounterUp={handlerCounterUp}
          counter={counter}
          stock={stock}
        />
        {counter > 0 ? (
          <Link to="/cart" class="btn btn-primary comprar">
            Comprar
          </Link>
        ) : (
          <p>Carrito vacio</p>
        )}
      </div>
    </div>
  );
};

export default ItemList;

<p class="card-text"></p>;
