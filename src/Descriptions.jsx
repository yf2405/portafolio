import React from 'react';
import './main.css';
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
   <h2 className='description__title'> A few description of my</h2>
   <p className='description__paragraph'>
   I have been studying and preparing for more than a year, I started with the university and I am self-taught, and 
   I have done some one personal work tha in few time i will up in this page. corses principally in platzi and youtube. "simply i love learn" </p>
   </div>
   </div>
   </div>
   </div>
   </>
  )
}
