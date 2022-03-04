import React from 'react'
import "./Footer.css"
import BannerFooter from "../../img/bannerFooter.jpg"

const Footer = () => {
  return (
    <div>
      <img src={BannerFooter} alt="banner" className="BannerFooter"></img>
      <div class="footer">
            <p>Ivan Alvarez - Front-end Dev</p>
            <p>alvarez.iv64@gmail.com</p>
            <div>Mi perfil en <a href="https://www.linkedin.com/in/ivan-alvarez-0ba4231b3/" target="_blank" rel="noreferrer">LinkedIn</a></div>
            <p class="gracias">¡Gracias!</p>
        </div>
    </div>

  )
}

export default Footer