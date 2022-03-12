import React from 'react'
import './Porfolio.css'
import {porfolioDb} from '../data/porfolioDB'

const Porfolio = () => {
  return (
    <section id="porfolio">
      <h5>Mi trabajo reciente</h5>
      <h2>Porfolio</h2>
      <div className="container porfolio__container">

        {
          porfolioDb.map(({id,image,title,github,demo})=>{
            return (
              <article className="porfolio__item">
              <div className="porfolio__item-image">
                <img src={image} alt={id +'img'} />
              </div>
              <h3>{title}</h3>
              <div className="porfolio__item-cta">
              <a href={github} className='btn' target="_blank"> Github</a>
              <a href={demo} className='btn btn-primary' target="_blank">Mira la Demo</a>           
                </div>
            </article> 
    
            )
          })
        }
      </div>
    </section>
  )
}

export default Porfolio