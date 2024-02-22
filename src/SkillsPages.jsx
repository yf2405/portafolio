import React from 'react'
import './styles/app.css';
import {DiJavascript1, DiHtml5, DiCss3,DiBootstrap, DiReact, DiGithubBadge  } from 'react-icons/di';
export const SkillsPages = () => {
  return (
   <> 
  {/*=============== SKILLS ===============*/}

  <div className="skills__area">
    <h3 className="skills__title">Frontend Developer</h3>
    <div className="skills__box">
      <div className="skills__group">
        <div className="skills__data">
          <i ><DiHtml5 /></i>
          <div>
            <h3 className="skills__name">HTML</h3>
            <span className="skills__level">Basic</span>
          </div>
        </div>
        <div className="skills__data">
          <i > <DiCss3 /> </i>
          <div>
            <h3 className="skills__name">CSS</h3>
            <span className="skills__level">Advanced</span>
          </div>
        </div>
        <div className="skills__data">
        <i ><DiJavascript1 /></i>
          <div>
            <h3 className="skills__name">JavaScript</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>
      </div>
      <div className="skills__group">
        <div className="skills__data">
        <i > <DiReact /> </i>
          <div>
            <h3 className="skills__name">React</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>
        <div className="skills__data">
        <i > <DiBootstrap/> </i>
          <div>
            <h3 className="skills__name">Bootstrap</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>
        <div className="skills__data">
        <i > <DiGithubBadge/> </i>
          <div>
          <h3 className="skills__name">Github</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>
      </div>
    </div>
  </div>


   </>
  )
}
