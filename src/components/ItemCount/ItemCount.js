import React from "react";
import "./ItemCount.css";

const ItemCount = ({
  handlerCounterDown,
  handlerCounterUp,
  stock,
  counter,
  addToCart,
}) => {
  /*const [counter, setCounter] = useState(1);

  const stock = 5;

  const handlerCounterUp = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const handlerCounterDown = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
*/
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
    </div>
  );
};

export default ItemCount;
