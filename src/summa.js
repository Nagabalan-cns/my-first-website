import React from 'react'
import move from "./Images/summer.mp4";
export default function Summa() {
  return (
    <div className='autoo'>

     
     
          <div className='back'>
            <video  controls  autoPlay loop muted plays-inline src={move} >

            </video>
           
            </div>
    </div>
  )
}
