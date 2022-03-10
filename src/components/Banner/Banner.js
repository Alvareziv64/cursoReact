import React, { useContext } from 'react';
// CSS
import "./Banner.css"
// IMAGENES
import Bnr from "../../img/bnr1.jpg";
import BnrC from "../../img/bnr1C.jpg";
// CONTEXT
import { CartContext } from "../../CartContext";


const Banner = () => {

  const { useWindowSize } = useContext(CartContext);
    const [width] = useWindowSize();

  return (
    <div>
        {width > 640 ? (<img src={Bnr} alt="logo" className='bnr'></img>) : (<img src={BnrC} alt="logo" className='bnr'></img>)}

        </div>
  )
}

export default Banner





 
