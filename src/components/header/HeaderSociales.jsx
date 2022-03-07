import React from 'react'
import {BsLinkedin,BsInstagram,BsGithub} from 'react-icons/bs'

const HeaderSociales = () => {
  return (
    <div className="header__socials">
        <a href="https://www.instagram.com/george_carlotto/" target="_blank"><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/jorge-matias-carlotto-68aa36212/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/JorgeCarlotto" target="_blank"><BsGithub/></a>

        </div>
  )
}

export default HeaderSociales