import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../CartContext";

const ItemList = ({ detail }) => {
  const [counter, setCounter] = useState(0);
  const [onAdd, setOnAdd] = useState(false);

  const { addItem } = useContext(CartContext);
  const newState = [
    {'id' : detail.id, 'name' : detail.title, 'quantity' : counter}
  ];

  const stock = 5;

  const addToCart = () => {
    if (counter > 0) {
      setOnAdd(true);
    }
  };

  const auxFuncion = () => {
    addItem(newState);
    addToCart();
  }

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
        <p className="card-text">{detail.description}</p>
        <h5>{"$" + detail.price}</h5>
        {onAdd === true ? (
          <div>
            <h5>Se agregaron {counter} articulos al carrito</h5>
            <Link to="/cart" className="btn btn-primary comprar">
              Ver carrito
            </Link>
          </div>
        ) : (
          <div>
            <ItemCount
              handlerCounterDown={handlerCounterDown}
              handlerCounterUp={handlerCounterUp}
              counter={counter}
              stock={stock}
              auxFuncion={auxFuncion}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemList;
