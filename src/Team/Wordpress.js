import React from 'react'
import vinoth from "C:/Users/User/Desktop/React/mywebsite/src/Images/vinothbad.jpeg"

import kirthi from "C:/Users/User/Desktop/React/mywebsite/src/Images/kirthi.jpg"
import { Slide, Zoom } from 'react-reveal';

function Wordpress() {
  return (
    <div>
        
      <div class="row">
      <div class="card col-4" >
    <Zoom>
        <img src={vinoth} class="card-img-top"  alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Name:<b>vinoth</b></h5>
          <p class="card-text">Role:Ui Designer</p>
          <a href="https://instagram.com/vinoth.vijay.712161?igshid=MDE2OWE1N2Q=" 
          class="btn btn-primary" rel="noreferrer" target={'_blank'}>For More Details</a>
       
        </div>
       </Zoom>
      </div>
      <span class="col-8">
        <Slide right>
      <h4>His Name is<b>Mr.VinothKumar</b> from Manavadi village in karur.
      And he is 20 years old guy.
      He works in codenatives in the role of Ui Designer.
      He finished  his  BSC- Bachelor of Computer Science degree
      in Jairams collage of Arts And science with 79% . And he has completed more then four 
      courses like c, javascript and so on. her ambition is to become a 
       <b>  FullStack Developer.</b></h4>
  
       <h1 class="text-center text-primary">skills</h1>

       <h3 class="text-center text-info">
        HTML,Boostrap,JavaScript,JSON,Jquery,Nodejs,Css
        and Photoshop.
       
       </h3>
       <br></br>
       <h1><u>project Details</u></h1>

       <h4>He sucessfully completed more then 8 projecets.
        And he has one year experience UI Designer and Node js.
       </h4>

   </Slide>
     </span>




    
      </div>

<hr></hr>
<br></br>

      <div class="row">
     
      <span class="col-8">
        <Slide>
        <h4 class="text-left"> She's Name is <b> Miss.Kiruthika</b> from vellore village in karur.
      And he is 26 years old guy.
      she works in codenatives in the role of  Senior WordPress developer.
      She finished  his  BSc and MCA - Bachelor of Computer Science And Master of Computer
      Application  degree
      in Kumarasamy collage of Engeneering with 96% . And she has completed more then four 
      courses like c, javascript and so on. her ambition is to become a 
       <b>  Collector.</b></h4>
  
       <h1 class="text-center text-primary">skills</h1>

       <h3 class="text-center text-info">
        HTML,Boostrap,JavaScript,JSON,Jquery,WordPress,Php and Css.
        
       </h3>
       <br></br>
       
       <h4>She sucessfully testing more then 14 projecets.
        And She has one year experience in Automation Testing.
       </h4>

   </Slide>
     </span>
      <div class="card col-4"  >
        <Zoom>
        <img src={kirthi} class="card-img-top" height="350px" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Name:<b>Kiruthika</b></h5>
          <h6 class="card-text">Role:WordPress Developer<b></b></h6>
          <a href="https://instagram.com/balanagabalan?igshid=YmMyMTA2M2Y=" 
          class="btn btn-primary" rel="noreferrer" target={'_blank'}>For More Details</a>
        </div>
        </Zoom>
      </div>
      
      </div>
    </div>
  )
}

export default Wordpress;