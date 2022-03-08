import React from 'react'
import "./Footer.css"
import BannerFooter from "../../img/bannerFooter.jpg"

const Footer = () => {
  return (
    <div>
      <img src={BannerFooter} alt="banner" className="BannerFooter"></img>
      <div className="footer">
            <p>Ivan Alvarez - Front-end Dev</p>
            <p>alvarez.iv64@gmail.com</p>
            <div>My <a href="https://www.linkedin.com/in/ivan-alvarez-0ba4231b3/" target="_blank" rel="noreferrer">LinkedIn</a> profile</div>
            <p className="gracias">Thanks for watching!</p>
        </div>
    </div>

  )
}

export default Footer