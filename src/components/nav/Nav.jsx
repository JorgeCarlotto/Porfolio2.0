import React from 'react'
import './Nav.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import { BsBook } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { useState } from 'react';


const Nav = () => {

  const [activeNav,setActiveNav] = useState('#');


  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={ activeNav === "#" ? 'active' : ''}> <AiOutlineHome /> </a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={ activeNav === "#about" ? 'active' : ''}><AiOutlineUser /> </a>
      <a href="#experiencie" onClick={()=> setActiveNav('#experiencie')} className={ activeNav === "#experiencie" ? 'active' : ''}><BsBook /> </a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={ activeNav === "#services" ? 'active' : ''}><FaReact /> </a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={ activeNav === "#contact" ? 'active' : ''}><BiMessageDetail /> </a>
    </nav>
  )
}

export default Nav