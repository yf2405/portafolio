import React, { useState} from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import  {Header} from './Header';
import { Descriptions } from './Descriptions';
import './main.css';
import { Button} from './Button';
import { SkillsPages } from './SkillsPages';
import { Footer } from "./Footer";

function App() {


    
    const [change, setChange] = useState("ri-moon-line change-theme ri-sun-line");
      
      
      
    
      const changeTheme =() =>{
      if (change == "ri-moon-line change-theme ri-sun-line") {
         setChange('ri-moon-line change-theme');
      }
       else {setChange("ri-moon-line change-theme ri-sun-line")}
      }
    
    
    
    
      
  
      
         
        
       {/*Theme button*/}
      
      
     
   
   
   
  
  return (
    <>
    

    <HashRouter >
  
    
    <body  className={change === "ri-moon-line change-theme ri-sun-line" ? 'dark-theme' : ""}>
  <header className="profile container">
<i  onClick= {changeTheme}>  <i className= {change} > </i></i> 
     </header> 
    <Header/>
      
  
   
    <Button/> 
    
    
    <Routes>
     
     <Route path="/Description" element={ <Descriptions/>}/>
     <Route path="/SkillsPages" element={ <SkillsPages/>}/>
     
    </Routes>
    <Footer/>
   </body>
    </HashRouter>
 
    </>
  );
}

export default App;
