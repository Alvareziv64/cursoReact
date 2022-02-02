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



  /*  
  const [counter , setCounter] = useState(1);
  
  const stock = 5;

  const handlerCounterUp = () => {
    if (counter < stock){
      setCounter(counter + 1);
    }
  }

  const handlerCounterDown = () => {
    if (counter > 1){
      setCounter(counter - 1);
    }
  }

  <ItemCount
                stock={stock}
                initial={counter}
                handlerCounterDown={handlerCounterDown}
                handlerCounterUp={handlerCounterUp}
                />
  */