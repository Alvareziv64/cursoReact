
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

const App = () =>  {
  return (
    <>
       <NavBar/> 
       <ItemListContainer
       greeting='Soy un componente con props'
       />


     </>
  );
}

export default App;
