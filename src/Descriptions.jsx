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
              <h2 className='description__title'>A few descriptions of myself</h2>
              <p className='description__paragraph'>
                I have been studying and preparing for more than a year. I started with the university and I am
                self-taught. I have also worked on some personal projects that I will showcase on this page soon. I
                have taken courses primarily on platforms like Platzi and YouTube. "Simply put, I love learning."
              </p>
   </div>
   </div>
   </div>
   </div>
   </>
  )
}
