import React, { useLayoutEffect, useState } from 'react';
import "./Banner.css"
import Bnr from "../../img/bnr1.jpg";
import BnrC from "../../img/bnr1C.jpg";

const useWindowSize = () => {
    const [size, setSize] = useState([0]);
    useLayoutEffect(() => {
      const updateSize = () => {
        setSize([window.innerWidth]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

const Banner = () => {

    const [width] = useWindowSize();

  return (
    <div>
        {width > 640 ? (<img src={Bnr} alt="logo" className='bnr'></img>) : (<img src={BnrC} alt="logo" className='bnr'></img>)}

        </div>
  )
}

export default Banner





 
