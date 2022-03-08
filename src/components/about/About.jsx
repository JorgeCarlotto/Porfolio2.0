import React from "react";
import "./About.css";
import phototwo from "../../assets/goku2.jpg";
import { FaAward } from "react-icons/fa";

const about = () => {
  return (
    <section id="about">
      <h5>Que te puedo contar...</h5>
      <h2>Sobre mi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about_me-image">
            <img src={phototwo} alt="About photo" />
          </div>
        </div>

        <div className="about__content">

          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencie</h5>
              <small> Pilot Sar</small>
            </article>
         

         
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencie</h5>
              <small> Programation</small>
            </article>
         

         
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Proyects</h5>
              <small> Proyectos</small>
            </article>
            </div>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Aspernatur earum molestias sunt voluptatem optio tempora cupiditate nemo quam, 
            exercitationem pariatur mollitia deleniti, voluptas recusandae sed nesciunt adipisci 
            quaerat labore eum.</p>

          <a href="#contact" className="btn btn-primary" >Hablemos un poco mas...</a>
        </div>

      </div>
    </section>
  );
};

export default about;
