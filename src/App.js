import React, { useState } from "react";
import Contact from "./Contact";
import Form from "./Home";

import Education from "./Aboutus";
import Save from "./Team";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Footer from "./Footer";
// import { MaterialUISwitch } from "./Switch";
import {AiTwotoneHome} from 'react-icons/ai'
import {BiPaperPlane}from 'react-icons/bi'
import {RiTeamFill}from 'react-icons/ri'
import {IoIosContacts}from 'react-icons/io'
import {AiFillGitlab} from 'react-icons/ai'
import  Styled, { ThemeProvider } from "styled-components";
import { LightTheme,DarkTheme,GlobalStyles} from "./theme";
import { Switch, Zoom } from "@mui/material";
// import { Checkbox } from "@mui/material";
import "./App.css" ;
import Cursor from "./cursor";

const StyledApp= Styled.div`
color:${(props)=>props.theme.fontColor};
`;
 
export default function  Hello(){ 

 
const [theme,settheme] =useState("light");
const toogletheme= () =>{
  theme === "light" ? settheme("dark") : settheme("light")
}


  return (
  <ThemeProvider theme={theme === 'light'? LightTheme : DarkTheme }>
    <GlobalStyles/>
    <StyledApp>
   
  <div className="Container" id="containall">

    <Router>
   
     

      <nav  class="navbar  bg-info justify-content-center sticky-top" id="navbars">
     
    
    
    
      <div class="container-fluid">
        
      <Cursor />
         
          <p class="nav-itam" id="home"><Link to="/my-first-website/" ></Link><AiTwotoneHome/>&nbsp;Home</p>
          <p class="nav-item" ><Link to="/education"><BiPaperPlane/>&nbsp;About us</Link></p>
          <h1 id="head"><AiFillGitlab id="icon"/>Codenatives-Karur<AiFillGitlab id="icon"/></h1>
          <p class="nav-itam" ><Link to="/family" ><RiTeamFill/>&nbsp;Teams</Link></p>
          <p class="nav-itam" ><Link to="/contact" ><IoIosContacts/>&nbsp;Contacts</Link></p>
         

          <Switch
 
  onChange={toogletheme}
  inputProps={{ 'aria-label': 'controlled' }}></Switch>
</div>

          
          </nav> 
          <br></br>
          
     
         <Zoom right cascade> 
      <Routes>
 
        <Route path="/my-first-website/" element={<Form/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/family" element={<Save/>} />
        <Route path="/contact" element={<Contact/>} />
   
      
              
      </Routes>
     </Zoom>


  

    </Router>
    <br></br>
    <br></br>

   
<Footer />

  </div>
  </StyledApp>  
  </ThemeProvider>

  )
}

