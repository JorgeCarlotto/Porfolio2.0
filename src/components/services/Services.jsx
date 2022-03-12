import React from 'react'
import './Services.css'
 import {BiCircle} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
    <h5>Que puedo ofrecer...</h5>
    <h2>Servicios</h2>
     
    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>Servicio 1</h3>
        </div>
      <ul className="service__list">
        <li>
          <BiCircle className="service__list-icon" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  </p>
        </li>
        <li>
          <BiCircle className="service__list-icon" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  </p>
        </li>
        <li>
          <BiCircle className="service__list-icon" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  </p>
        </li>
        <li>
          <BiCircle className="service__list-icon" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  </p>
        </li>
      </ul>
      </article>
      {/* Service 2 */}
      <article className="service">
        <div className="service__head">
          <h3>Servicio 2</h3>
        </div>
      <ul className="service__list">
        <li>
          <BiCircle className="service__list-icon" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  </p>
        </li>
        <li>
          <BiCircle className="service__list-icon" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  </p>
        </li>
        <li>
          <BiCircle className="service__list-icon" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  </p>
        </li>
        <li>
          <BiCircle className="service__list-icon" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  </p>
        </li>
      </ul>
      </article>
      {/* Service 3 */}
      <article className="service">
        <div className="service__head">
          <h3>Servicio 3</h3>
        </div>
      <ul className="service__list">
        <li>
          <BiCircle className="service__list-icon" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  </p>
        </li>
        <li>
          <BiCircle className="service__list-icon" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  </p>
        </li>
        <li>
          <BiCircle className="service__list-icon" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  </p>
        </li>
        <li>
          <BiCircle className="service__list-icon" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  </p>
        </li>
      </ul>
      </article>

    </div>
    
    </section>
  )
}

export default Services