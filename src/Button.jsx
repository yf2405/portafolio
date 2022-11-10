import React from 'react'
import './main.css'
import { NavLink } from 'react-router-dom';



export const Button = () => {


 
  return (
 <>
 <main className="main">
            <section className="filters container">
 
  <ul className="filters__content">
   
   
     <NavLink  end className={( {isActive}) => isActive ? " buttonnav , filter-tab-active" : "buttonnav"}  to="/Description">Description</NavLink>
  
    
      <NavLink  end className={({isActive}) => isActive ? " buttonnav , filter-tab-active" : "buttonnav"} to="/SkillsPages">SkillsPages</NavLink>
    
    
  </ul>

</section>
</main> 
   </>
  );
}

