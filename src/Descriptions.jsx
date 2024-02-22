import React from 'react';
import './styles/app.css';
import img from './img/perfil(4).png';
export const Descriptions = () => {
  return (
   <>
   <div className='mx'>
<div  className='description'>
<div className= 'description__grid'>

  <div className='description__background'>

          {/*Insert your image, according to the example size of the portfolio*/} 
          <div className='description__imgmy'>
          <img src={img}  />
          </div>
        </div>
      
        <div className='description__reply'>
              <h2 className='description__title'>Algunas descripciones de mí mismo.</h2>
              <p className='description__paragraph'>
               
He estado estudiando y preparándome durante más de un año. 
Comencé con la universidad y soy autodidacta. 
También he trabajado en algunos proyectos personales que mostraré en esta página pronto. 
He tomado cursos principalmente en plataformas como Platzi y YouTube. 
En pocas palabras, amo aprender.
              </p>
   </div>
   </div>
   </div>
   </div>
   </>
  )
}
