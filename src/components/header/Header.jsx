import React from 'react'
import './Header.css'
import Cv from './Cv'
import ME from '../../assets/goku ss2 png.png'
import HeaderSociales from './HeaderSociales'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>Hola soy </h5>
      <h1>Jorge Carlotto</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <Cv/>
      <HeaderSociales/>

      <div className="me">
        <img src= {ME} alt="mePhoto" />
        </div>

      <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header