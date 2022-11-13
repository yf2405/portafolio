
import React from 'react';
import './main.css';
import img from './img/perfil(4).png';

function Header() {
  


  return (
   <>
   
   <header className="profile container"> 
  {/*Theme button*/}
 
 

  <div className="profile__container grid">
    <div className="profile__data">
      <div className="profile__border">
        <div className="profile__perfil">
          {/*Insert your image, according to the example size of the portfolio*/} 
          <img src={img} alt = 'image' />
        </div>
      </div>
      <h2 className="profile__name">Yerson Correa</h2>
      <h3 className="profile__profession">Web developer</h3>
      <ul className="profile__social">
        <a href=" https://www.instagram.com/invites/contact/?i=5qqte3eevu2l&utm_content=2khgjqt" target="_blank" className="profile__social-link">
          <i className="ri-instagram-line" />
        </a>
        <a href="https://www.linkedin.com/in/yerson-correa-angola-989142191/" target="_blank" className="profile__social-link">
          <i className="ri-linkedin-box-line" />
        </a>
        <a href="https://github.com/yf2405" target="_blank" className="profile__social-link">
          <i className="ri-github-line" />
        </a>
      </ul>
    </div>
    <div className="profile__info grid">
      <div className="profile__info-group">
        <h3 className="profile__info-number">1</h3>
        <p className="profile__info-description">
          Years of <br /> work
        </p>
      </div>
      <div className="profile__info-group">
        <h3 className="profile__info-number">+5</h3>
        <p className="profile__info-description">
          Completed <br /> projects
        </p>
      </div>
      
    </div>
    <div className="profile__buttons">
      {/*Insert your CV*/} 
      <a download href="https://drive.google.com/file/d/1VJb87Pe99AoxzqYICEEX_O9ZjMoFWPCQ/view?usp=sharing" className="button">
        Download CV <i className="ri-download-line" />
      </a>
      <div className="profile__buttons-small">
        {/* Insert a real number plus country code*/}
        <a href="https://wa.link/nghbeu" target="_blank" className="button button__small button__gray">
          <i className="ri-whatsapp-line" />
        </a>
        {/*Insert your brand name or profile*/}
        <a href="https://t.me/Yersonc24" target="_blank" className="button button__small button__gray">
          <i className="ri-telegram-line" />
        </a>
      </div>
    </div>
  </div>
</header>

   </>
  )
}

export { Header };
