import React from 'react'
import curriculum from './../../assets/cv.pdf'

const Cv = () => {
  return (
    <div className="cv">
        <a href={curriculum} download className="btn">Descargar Curriculum</a>
        <a href="#contact" className="btn btn-primary">Contacto</a>
    
    </div>
  )
}

export default Cv