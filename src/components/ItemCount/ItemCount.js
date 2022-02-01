import React from 'react';

const ItemCount = ({initial, stock, handlerCounterUp, handlerCounterDown}) => {

  return  <div className="container">
              <h4>Cantidad (stock: {stock})</h4>
              <p>{initial}</p>
              <button onClick={handlerCounterUp} className="btn btn-info btn-sm">+</button>
              <button onClick={handlerCounterDown} className="btn btn-danger btn-sm">-</button>
          </div>;
          
};

export default ItemCount;
