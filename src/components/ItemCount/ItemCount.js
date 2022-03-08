import React from "react";
import "./ItemCount.css";

const ItemCount = ({
  handlerCounterDown,
  handlerCounterUp,
  counter,
  auxFuncion,
  handleClose,
}) => {
  return (
    <div>
      <div className="divCantidad">
        <h5>Buy: {counter}</h5>
        <div className="btns">
          <button onClick={handlerCounterUp} className="btnAdd">
            +
          </button>
          <button onClick={handlerCounterDown} className="btnMinus">
            -
          </button>
        </div>
      </div>
      <div className="btnAddCart">
        <button onClick={auxFuncion} className="btn btn-success btn-sm">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ItemCount;

/*
 */
