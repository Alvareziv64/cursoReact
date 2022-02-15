import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../CartContext";

const ItemList = ({ detail }) => {
  const [counter, setCounter] = useState(0);
  const [onAdd, setOnAdd] = useState(false);

  const [cart, setCart] = useContext(CartContext);
  const newState = [
    {'id' : detail.id, 'name' : detail.title, 'quantity' : counter}
  ];
  console.log(cart);

  const stock = 5;

  const addToCart = () => {
    if (counter > 0) {
      setOnAdd(true);
    }
  };

  const auxFuncion = () => {
    setCart(newState);
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
        <p class="card-text">{detail.description}</p>
        <h5>{"$" + detail.price}</h5>
        {onAdd === true ? (
          <div>
            <h5>Se agregaron {counter} articulos al carrito</h5>
            <Link to="/cart" class="btn btn-primary comprar">
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
            />
            {counter > 0 ? (
              <button onClick={ () => auxFuncion() } className="btn btn-success btn-sm">
                Agregar al carrito
              </button>
            ) : null}
            <p>Carrito vacio</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemList;

<p class="card-text"></p>;
