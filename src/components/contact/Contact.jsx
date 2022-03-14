import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp,BsMessenger} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cts2irn', 'template_fx303j5', form.current, 'oFXR7UlfmdkqO1MQf')

    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Vamos a hablar?</h5>
      <h2>Contactame</h2>

      <div className= "container contact__container">
        <div className= "contact__options">
          {/* Email */}
          <article className= "contact__option">
            <AiOutlineMail className= "contact__options-icon"/>
            <h4>Email</h4>
            <h5>jorgemcarlotto2@gmail.com</h5>
            <a href="mailto:jorgemcarlotto2@gmail.com" target="_blank">Mandame un Correo</a>
          </article>

          
          <article className= "contact__option">
            <BsMessenger className= "contact__options-icon"/>
            <h4>Messenger</h4>
            <h5>George_Carlotto</h5>
            <a href="https://www.messenger.com/t/17842168553737507" target="_blank">Mandame a Message</a>
          </article>

          {/* mail */}

          <article className= "contact__option">
            <BsWhatsapp className= "contact__options-icon"/>
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=+123456789" target="_blank">Mandame un Whatsapp</a>
          </article>

        </div>
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Tu nombre completo " required />
          <input type="email" name="email" placeholder=" Tu Email" required /> 
          <textarea name="message" rows="7" placeholder="Tu mensaje" required />
          <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}



export default Contact