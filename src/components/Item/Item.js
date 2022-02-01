import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({data}) => {

    
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


  return    <div className="card" width="60px">
                <img src={data.image} className="card-img-top" alt="Producto" ></img>
                <div className="card-body">
                   <h5 className="card-title">{data.title}</h5>                   
                </div>
                <ItemCount
                stock={stock}
                initial={counter}
                handlerCounterDown={handlerCounterDown}
                handlerCounterUp={handlerCounterUp}
                />

            </div>;

};

export default Item;
