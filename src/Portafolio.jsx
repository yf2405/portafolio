import React from 'react'
import './main.css'
import img1 from "./img/project1.jpg";
import img2 from "./img/proyect2.jpg";
import img3 from "./img/project3.jpg";
import img4 from "./img/project4.jpg";
import img5 from "./img/project5.jpg";
import img6 from "./img/project6.jpg";
import { DiGithubBadge } from 'react-icons/di';
import { BsTools }from 'react-icons/BS'
export  function Portafolio() {
  return ( 
  <>
  {/*  <div className='portafolio'>
    <div>we are still working on this </div>
    <div className='portafolio__tools'>
    <i > <DiGithubBadge/> </i>
    <i><BsTools/> </i>
    </div>
    </div>
*/}

 {/*=============== PROJECTS ===============*/}

<div className="projects__content grid filters__active" data-content id="projects">
  <article className="projects__card">
    {/* Insert your image in a rectangular format (Ex: 600 x 400, 1000 x 800, 1200 x 1000, etc) */}
    <img src={img1} alt className="projects__img" />
    <div className="projects__modal">
      <div>
        <span className="projects__subtitle">Web</span>
        <h3 className="projects__title">Api-pokemon</h3>
        <a href="https://yf2405.github.io/api-pokemon/" className="projects__button button button__small">
          <i className="ri-link" />
        </a>
      </div>
    </div>
  </article>
  <article className="projects__card">
    <img src={img2} alt className="projects__img" />
    <div className="projects__modal">
      <div>
        <span className="projects__subtitle">Web</span>
        <h3 className="projects__title">api platzi</h3>
        <a href="#" className="projects__button button button__small">
          <i className="ri-link" />
        </a>
      </div>
    </div>
  </article>
  <article className="projects__card">
    <img src={img3} alt className="projects__img" />
    <div className="projects__modal">
      <div>
        <span className="projects__subtitle">responsive</span>
        <h3 className="projects__title">callenge</h3>
        <a href="https://yf2405.github.io/callenge.github.io/" className="projects__button button button__small">
          <i className="ri-link" />
        </a>
      </div>
    </div>
  </article>
  <article className="projects__card">
    <img src={img4} alt className="projects__img" />
    <div className="projects__modal">
      <div>
        <span className="projects__subtitle">responsive</span>
        <h3 className="projects__title">calculadora de deudas</h3>
        <a href="https://yf2405.github.io/calculadora-de-deudas/" className="projects__button button button__small">
          <i className="ri-link" />
        </a>
      </div>
    </div>
  </article>
  <article className="projects__card">
    <img src={img5} alt className="projects__img" />
    <div className="projects__modal">
      <div>
        <span className="projects__subtitle">Design api web</span>
        <h3 className="projects__title">api movie privada</h3>
        <a href="https://yf2405.github.io/api-movie/" className="projects__button button button__small">
          <i className="ri-link" />
        </a>
      </div>
    </div>
  </article>
  <article className="projects__card">
    <img src={img6} alt className="projects__img" />
    <div className="projects__modal">
      <div>
        <span className="projects__subtitle">Design</span>
        <h3 className="projects__title">rick and morty</h3>
        <a href="#" className="projects__button button button__small">
          <i className="ri-link" />
        </a>
      </div>
    </div>
  </article>
</div>
    </>
  )
}
