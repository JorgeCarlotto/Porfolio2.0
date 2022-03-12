import React from 'react'
import './Porfolio.css'
import Img1 from '../../assets/saya sayayin.jpg'
import Img2 from '../../assets/saga frezzer.jpg'
import Img3 from '../../assets/saga androides.jpg'
import Img4 from '../../assets/saga bu.jpg'
import Img5 from '../../assets/saga super.jpg'



const Porfolio = () => {
  return (
    <section id="porfolio">
      <h5>Mi trabajo reciente</h5>
      <h2>Porfolio</h2>
      <div className="container porfolio__container">
        {/* article1 */}
        <article className="porfolio__item">
          <div className="porfolio__item-image">
            <img src={Img1} alt="asd1" />
          </div>
          <h3>titulo del proyecto</h3>
          <div className="porfolio__item-cta">
          <a href="https://github.com/JorgeCarlotto" className='btn' target="_blank"> Github</a>
          <a href="https://dribbble.com/" className='btn btn-primary' target="_blank">Mira la Demo</a>
          </div>
        </article> 

        {/* article2 */}
        <article className="porfolio__item">
          <div className="porfolio__item-image">
            <img src={Img2} alt="asd1" />
          </div>
          <h3>titulo del proyecto</h3>
          <div className="porfolio__item-cta">
          <a href="https://github.com/JorgeCarlotto" className='btn' target="_blank"> Github</a>
          <a href="https://dribbble.com/" className='btn btn-primary' target="_blank">Mira la Demo</a>          
            </div>
        </article> 

        {/* article3 */}
        <article className="porfolio__item">
          <div className="porfolio__item-image">
            <img src={Img3} alt="asd1" />
          </div>
          <h3>titulo del proyecto</h3>
          <div className="porfolio__item-cta">
          <a href="https://github.com/JorgeCarlotto" className='btn' target="_blank"> Github</a>
          <a href="https://dribbble.com/" className='btn btn-primary' target="_blank">Mira la Demo</a>           
            </div> 
        </article> 

        {/* article4 */}
        <article className="porfolio__item">
          <div className="porfolio__item-image">
            <img src={Img4} alt="asd1" />
          </div>
          <h3>titulo del proyecto</h3>
          <div className="porfolio__item-cta">
          <a href="https://github.com/JorgeCarlotto" className='btn' target="_blank"> Github</a>
          <a href="https://dribbble.com/" className='btn btn-primary' target="_blank">Mira la Demo</a>          
            </div>
        </article> 

        {/* article5 */}
        <article className="porfolio__item">
          <div className="porfolio__item-image">
            <img src={Img5} alt="asd1" />
          </div>
          <h3>titulo del proyecto</h3>
          <div className="porfolio__item-cta">
          <a href="https://github.com/JorgeCarlotto" className='btn' target="_blank"> Github</a>
          <a href="https://dribbble.com/" className='btn btn-primary' target="_blank">Mira la Demo</a>           
            </div>
        </article> 
      </div>
    </section>
  )
}

export default Porfolio