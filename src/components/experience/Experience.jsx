import React from "react";
import "./Experience.css";
import { FaReact} from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experiencie">
      <h5>Que habilidades tengo?</h5>
      <h2>Mi Experiencia</h2>

      <div className="conteiner experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaReact className="experience-detail-icon" />
              <div>
              <h4>Html</h4>
              <small className="text-light">Experiencia..</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience-detail-icon" />
              <div>
              <h4>CSS</h4>
              <small className="text-light">Experiencia..</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience-detail-icon" />
              <div>
              <h4>JavaScript</h4>
              <small className="text-light">Experiencia..</small>

              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience-detail-icon" />
              <div>
              <h4>BootsTrap</h4>
              <small className="text-light">Experiencia..</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience-detail-icon" />
              <div>
              <h4>React</h4>
              <small className="text-light">Experiencia..</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience-detail-icon" />
              <div>
              <h4>ASD</h4>
              <small className="text-light">Experiencia..</small>

              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaReact className="experience-detail-icon" />
              <div>
              <h4>NodeJs</h4>
              <small className="text-light">Experiencia..</small>
 
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience-detail-icon" />
              <div>
              <h4>MySql</h4>
              <small className="text-light">Experiencia..</small>
              </div>
            </article>
          </div>
          </div>
      </div>
    </section>
  );
};

export default Experience;
