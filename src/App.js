
import React, {useState} from "react";
//COMPONENTS
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

const App = () =>  {

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

  return (
    <>
      <NavBar/> 

      <ItemListContainer 
       greeting='Tienda'
      />

      <ItemCount
      stock={stock}
      initial={counter}
      handlerCounterDown={handlerCounterDown}
      handlerCounterUp={handlerCounterUp}
      />


    </>
  );
}

export default App;
