import React, { useState } from 'react'
import icon1 from "./Images/test.png";
import icon2 from "./Images/test1.jpeg"
import icon3 from "./Images/images.jpg"
 import TestingTeam from 'C:/Users/User/Desktop/React/mywebsite/src/Team/TestingTeam.js';
import icon4 from './Images/react.jpg';
import press from './Images/wordpress.png'

import ReactTeam from 'C:/Users/User/Desktop/React/mywebsite/src/Team/React.js';
import icon6 from './Images/ui1.jpg';
import icon7 from './Images/ui2.jpg';
import Wordpress from 'C:/Users/User/Desktop/React/mywebsite/src/Team/Wordpress.js';
import pyton from './Images/pyton.png'
import icon8 from './Images/phy.png'
import icon9 from "./Images/py.jpg"
import icon from "./Images/r1.jpeg"
// import icon10 from "./Images/r2.jpg"
// import code from "./Images/code.jpg"
// import code2 from "./Images/code2.jpg"
// import code3 from "./Images/code3.jpg"
 import Phython from 'C:/Users/User/Desktop/React/mywebsite/src/Team/Phython.js';
import Reactslide from 'C:/Users/User/Desktop/React/mywebsite/src/slides/Reactslide.js';

import Flash from 'react-reveal/Flash'

import { Fade ,LightSpeed,Zoom, Bounce,Slide} from 'react-reveal';








export default function Save() {

  const click = () =>   {
     settesting(!testing)
  
  }
  const click1 = () =>   {
    setreact(!react)
 
 }
 const click2 = () =>   {
  setwordpress(!wordpress)

}
const click3 = () =>   {
  setphyton(!phyton)

}

  const [react,setreact]=useState(true)
  const [wordpress,setwordpress]=useState(true)
  const [testing,settesting]=useState(true)
  const [phyton,setphyton] = useState(true)
  return (
   
      <div class="container">
       
      
        <h1 class="text-center">Developinng Teams</h1>
        <br></br>
        <Fade right>
        <h3><u>Testing Team</u></h3>
        </Fade>
      
        
      <div class="row">
       
      
       <p class="col-9">
        <Slide left>
        top_banner_img
Home  Blog  Software Testing Help
Roles & Responsibilities in a Software Testing Team
Software Testing Career
Tuesday December 26, 2017


Software testing is an essential part of the
 software development life cycle (SDLC).
 Playing a significant role in defining 
 the success rate of a particular product,
  owing to the same reason the software
   testing team plays a crucial role even
    after the products development is completed
Therefore, it is important to ensure that
 this software testing team includes a 
 perfect mix of talented as well as 
 capable professionals who are also domain experts.
Being experts in the problem domain make
 it easier for them to create such test scripts
  that make it easier to identify the problem in the product.</Slide></p>

 <img  className="col-3 rounded-circle" src={icon1} loading="lazy"  alt="nothing"></img> 

      </div>
     
      <div class="row">
       
      <img class="col-3 rounded-circle"  src={icon2} loading="lazy"  alt="nothing"></img>
       <p class="col-9">
        <LightSpeed right>
        top_banner_img
Home  Blog  Software Testing Help
Roles & Responsibilities in a Software Testing Team
Software Testing Career
Tuesday December 26, 2017


Software testing is an essential part of the
 software development life cycle (SDLC).
 Playing a significant role in defining 
 the success rate of a particular product,
  owing to the same reason the software
   testing team plays a crucial role even
    after the products development is completed
Therefore, it is important to ensure that
 this software testing team includes a 
 perfect mix of talented as well as 
 capable professionals who are also domain experts.
Being experts in the problem domain make
 it easier for them to create such test scripts
  that make it easier to identify the problem in the product.
  </LightSpeed></p>


      </div>
      <div class="row">
       
      
       <p class="col-9"><Zoom left>
        top_banner_img
Home  Blog  Software Testing Help
Roles & Responsibilities in a Software Testing Team
Software Testing Career
Tuesday December 26, 2017


Software testing is an essential part of the
 software development life cycle (SDLC).
 Playing a significant role in defining 
 the success rate of a particular product,
  owing to the same reason the software
   testing team plays a crucial role even
    after the products development is completed
Therefore, it is important to ensure that
 this software testing team includes a 
 perfect mix of talented as well as 
 capable professionals who are also domain experts.
Being experts in the problem domain make
 it easier for them to create such test scripts
  that make it easier to identify the problem in the product.</Zoom></p>

  <img class="col-3 rounded-circle"  src={icon3}  loading="lazy"  alt="nothing"></img>
      </div>
<br></br>
<Flash>
      <button class="btn btn-primary btn-lg btn-block" onClick={click}>{testing ? "Click To See Our Testing Team" : "Click To Close"}</button>
  </Flash>
        <div>
        <br></br>
<br></br>
          {
        testing ?   null : <TestingTeam/>
          }
        </div>
        <hr></hr>
        <br></br>
       <h3><Slide right><u>React Developers</u></Slide></h3>
        <div class="container">
         
         
          <div class="row">
          <p class="col-9">
         <h1><Slide top>What is React?</Slide></h1>
         <br></br>
          <Zoom right>
          React is a declarative, efficient,
           and flexible JavaScript library for building user interfaces. 
           It lets you compose complex UIs from small and isolated
            pieces of code called “components”.
            React is a declarative, efficient,
           and flexible JavaScript library for building user interfaces. 
           It lets you compose complex UIs from small and isolated
            pieces of code called “components”.
            React is a declarative, efficient,
           and flexible JavaScript library for building user interfaces. 
           It lets you compose complex UIs from small and isolated
            pieces of code called “components”.

React has a few different kinds of components, 
but we’ll start with React.Component subclasses:
</Zoom>
          </p>

          <img class="col-3 rounded-circle" src={icon4}  loading="lazy" alt="nothing">

          </img>
        </div>
        <br></br>
        
<br></br>

    
<div class="container">
        <div class='row'>
 
  <span  class="col-12" ><Reactslide/> </span>

 </div>
 </div>
 <br></br>
 <br></br>
          <div class="row">
          <img class="col-3 rounded-circle" src={icon} loading="lazy"  alt="nothing">

</img>
          <p class="col-9">
          <Slide right>
         You can see what we’ll be building here: 
         Final Result. If the code doesn’t make 
         sense to you, or if you are unfamiliar
          with the code’s syntax, 
         don’t worry! The goal of 
         this tutorial is to help you 
         understand React and its syntax.
         You can see what we’ll be building here: 
         Final Result. If the code doesn’t make 
         sense to you, or if you are unfamiliar
          with the code’s syntax, 
         don’t worry! The goal of 
         this tutorial is to help you 
         understand React and its syntax.
         You can see what we’ll be building here: 
         Final Result. If the code doesn’t make 
         sense to you, or if you are unfamiliar
          with the code’s syntax, 
         don’t worry! The goal of 
         this tutorial is to help you 
         understand React and its syntax.
         You can see what we’ll be building here: 
         Final Result. If the code doesn’t make 
         sense to you, or if you are unfamiliar
          with the code’s syntax, 
         don’t worry! The goal of 
         this tutorial is to help you 
         understand React and its syntax.
<br></br>

You can close the tic-tac-toe
game once you’re familiar with it.
 We’ll be starting from a simpler template in this
  tutorial. Our next step is to set you up so that you
   can start building the game
   </Slide>
          </p>

         
        </div>
        <br></br>
 
        <br></br>
        <Flash>
      <button class="btn btn-primary btn-lg btn-block" onClick={click1}>{react ? "Click To See Our React Developer Team" : "Click To Close"}</button>
       </Flash>
      <div>
  <br></br>
    {
      react ? null : <ReactTeam />
    }
  </div>
<hr></hr>
<br></br>
<h3><u><Slide right>wordpress Developer</Slide></u></h3>   
 <div class="row">
  <p class="col-9"> 
  <LightSpeed left>

Design anything you imagine. Start with a blank canvas or choose from a wide variety of themes and patterns. Customize every detail, from color and fonts to layouts and functionality.



Make WordPress do whatever you need it to. Add a store, mailing list, portfolio, social feed, analytics; you’re in control with over 55,000 plugins.

 

Your content, your design, and your data always belong to you. With WordPress you’re free to tell your story, grow your brand, or simply be yourself.



Built by an open source community with decades of experience, its passionate contributors are committed to keeping WordPress as stable and secure as possible.
  </LightSpeed></p>
  <img class="col-3 thumbnail" src={icon6} loading="lazy"  alt="nothing"></img>
 </div>
 <br></br>
 <div class="row">
  <img class="col-3 rounded-circle" src={icon7}  loading="lazy" alt="nothing"></img>
  <p class="col-9">
    <Slide right>
Behind the technology is a diverse collective of people,
 collaborating from around the world. We’re united by the spirit of open source, 
and the freedom to build, transform, 
and share without barriers. 
<br></br>
<br></br>
From writing code and testing, to community outreach and translation,
 there are so many ways to contribute and everyone is welcome.
  Let’s shape the future of the web together.
  including structured (particularly procedural),
 object-oriented and functional programming.
  It is often described as a "batteries included"
   language due to its comprehensive standard library. We’re united by the spirit of open source, 
and the freedom to build, transform, 
and share without barriers. 
</Slide>  </p>
 </div>
 <br></br>
 <div  class="row">
  <p class="col-9">
    <Fade left>
  Design anything you imagine. Start with a blank canvas or choose from a wide variety of themes and patterns. Customize every detail, from color and fonts to layouts and functionality.



Make WordPress do whatever you need it to. Add a store, mailing list, portfolio, social feed, analytics; you’re in control with over 55,000 plugins.

 

Your content, your design, and your data always belong to you. With WordPress you’re free to tell your story, grow your brand, or simply be yourself.



Built by an open source community with decades of experience, its passionate contributors are committed to keeping WordPress as stable and secure as possible.
Design anything you imagine. Start with a blank canvas or choose from a wide variety of themes and patterns. Customize every detail, from color and fonts to layouts and functionality.




Built by an open source community with decades of experience, its passionate contributors are committed to keeping WordPress as stable and secure as possible.
 </Fade> </p>
  <img class="col-3" src={press}  loading="lazy" alt="nothing"></img>
 </div>
<Flash>
  <button class="btn btn-primary btn-lg btn-block" onClick={click2}>{ wordpress ?  "Click To See Our Wordpress Developer Team" : "Click to Close"}</button>
</Flash>
<br></br>
<div>
<br></br>

  {
    wordpress ? null : <Wordpress/>
  }
</div>
 </div>
<hr></hr>
 <br></br>
 <h3><u><Slide right>phython Developers</Slide></u></h3>
 <div class="row">
  <p class='col-9'>
    <Zoom left>
  Python is a high-level, general-purpose
   programming language. Its design 
   philosophy emphasizes code readability
    with the use of significant indentation.[33]

Python is dynamically-typed and 
garbage-collected. It supports 
multiple programming paradigms, 
including structured (particularly procedural),
 object-oriented and functional programming.
  It is often described as a "batteries included"
   language due to its comprehensive standard library.[34][35]


 such as list comprehensions, cycle-detecting garbage collection, 
 reference counting, and Unicode support. Python 3.0, released in 2008, 
 was a major revision that is not completely backward-compatible with earlier 
 versions. Python 2 was discontinued with version 2.7.18 in 2020.[37]

Python consistently ranks as one of the most popular programming languages.
 </Zoom> </p>
  <img class="col-3 " src={pyton} alt="nothing"></img>
 </div>
 <br></br>
 <br></br>
 <Zoom>
 <div class='row'>

 
  <span class="col-1"></span>
 
  <img  class="col-10" src={icon8}  loading="lazy" alt="nothing"></img>
 
  <span class="col-1"></span>
 </div>
 <br></br>
 <br></br>
</Zoom>
 <div class="row">
  <img class="col-3 rounded-circle" src={icon9}  loading="lazy" alt="nothing"></img>
  <p class="col-9"> <Bounce right> If you want to know whether a 
  particular application, or a library with
   particular functionality, is available in
    Python there are a number of possible sources of
     information. The Python web site provides a Python 
     Package Index (also known as the Cheese Shop, a 
     reference to the Monty Python script of that name). 
     There is also a search page for a number of sources 
     of Python-related information. Failing that, just Google 
     for a phrase including the word ''python'' and you may well 
     get the result you need. If all else fails, ask on the python 
     newsgroup and there's
   a good chance someone will put you on the right track.
   There is also a search page for a number of sources 
     of Python-related information. Failing that, just Google 
     for a phrase including the word ''python'' and you may well 
     get the result you need. If all else fails, ask on the python 
     newsgroup and there's
   a good chance someone will put you on the right track.</Bounce></p>
 </div>

 <br></br>
 <Flash>
 <button class="btn btn-primary btn-lg btn-block" onClick={click3}>{phyton ?  "Click To See Our Phython Developer Team" : "Click To Close"}</button>
 </Flash>
 <div>
  {
    phyton ? null : <Phython />

  }
</div>
<hr></hr>
<br></br>


      </div>
   
   
  )
}

