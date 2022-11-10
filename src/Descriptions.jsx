import React from 'react';
import './main.css';
import img from './pdf/perfil.png';
export const Descriptions = () => {
  return (
   <>
<div  className='description'>
<div className= 'description__grid'>

  <div className='description__background'>

          {/*Insert your image, according to the example size of the portfolio*/} 
          <div className='description__imgmy'>
          <img src={img}  />
          </div>
        </div>
      
   <div className='description__reply'>
   <h2 className='description__title'> Mi forma de ser</h2>
   <p className='description__paragraph'>
   Gane tokens por ver Brave Ads privados y apoye a los creadores de contenido automáticamente. </p>
   </div>
   </div>
   </div>
   </>
  )
}
