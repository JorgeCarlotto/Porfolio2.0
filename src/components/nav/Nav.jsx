import React from 'react'
import './Nav.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import { BsBook } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { useState } from 'react';


const Nav = () => {
  return (
    <nav>
      <a href="#" className="active"><AiOutlineHome /> </a>
      <a href="#about"><AiOutlineUser /> </a>
      <a href="#experiencie"><BsBook /> </a>
      <a href="#services"><FaReact /> </a>
      <a href="#contact"><BiMessageDetail /> </a>
    </nav>
  )
}

export default Nav