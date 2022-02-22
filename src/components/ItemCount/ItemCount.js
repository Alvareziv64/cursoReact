import React from "react";
import "./ItemCount.css";

const ItemCount = ({
  handlerCounterDown,
  handlerCounterUp,
  stock,
  counter,
  auxFuncion,
}) => {

  return (
    <div>
      <div className="divCantidad">
        <p>(stock: {stock})</p>
        {counter > 0 ? <h5 className="cantidad">Cantidad: {counter}</h5> : null}
      </div>
      <h5>Agregar producto:</h5>
      <div>
        <button onClick={handlerCounterUp} className="btn btn-info btn-sm">
          +
        </button>
        <button onClick={handlerCounterDown} className="btn btn-danger btn-sm">
          -
        </button>
      </div>
      {counter > 0 ? (
        <button onClick={auxFuncion} className="btn btn-success btn-sm">
          Agregar al carrito
        </button>
      ) : null}
    </div>
  );
};

export default ItemCount;
