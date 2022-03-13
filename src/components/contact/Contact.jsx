import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp,BsMessenger} from 'react-icons/bs'



const Contact = () => {
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
            <h5>jorge@gmail.com</h5>
            <a href="mailto:jorge@gmail.com" target="_blank">Mandame un Correo</a>
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
        
        <form action="">
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