import React, { useState} from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import  {Header} from './Header';
import { Descriptions } from './Descriptions';
import './styles/app.css';
import { Button} from './Button';
import { SkillsPages } from './SkillsPages';
import { Footer } from "./Footer";
import { Portafolio } from "./Portafolio";



function App() {


    
    const [change, setChange] = useState('ri-moon-line change-theme');
      
      
      
    
      const changeTheme =() =>{
      if (change == "ri-moon-line change-theme ri-sun-line") {
         setChange('ri-moon-line change-theme');
      }
       else {setChange("ri-moon-line change-theme ri-sun-line")}
      }
         
        
       {/*Theme button*/}
      
  return (
    
    <>
    
    
<body  className={change === "ri-moon-line change-theme ri-sun-line" ? 'dark-theme' : ""}>
    <HashRouter >
  
    
    
  <header className="profile container">
<i  onClick= {changeTheme}>  <i className= {change} > </i></i> 
     </header> 
    <Header/>
      
  
   
    <Button/> 
    
    
    <Routes>
     
     <Route path="/Description" element={ <Descriptions/>}/>
     <Route path="/SkillsPages" element={ <SkillsPages/>}/>
     <Route path="/Portafolio" element={ <Portafolio/>}/>
     
    </Routes>
    <Footer/>
   
    </HashRouter>
 </body>

    </>
  );
}

export default App;
