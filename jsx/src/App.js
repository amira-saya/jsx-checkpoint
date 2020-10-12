import React from 'react';
import logo from './logo.svg';
import './App.css';
import imageInSrc from './imageInSrc.jpg'
import myVideo from './myVideo.mp4'
import css from './style.css'

function App() {
  return (
    <>
    
    <h1 className="title red">welcome</h1>
    <div>

                   <img src={imageInSrc} alt='imageInSrc' className="srcImage"/>
       
                    <img src="/imageInPublic.jpg" alt ="imageInPublic" className="publicImage"/>
   
  
   
   <video className="video" width="150" height="150" controls >
   
    <source src={myVideo.mp4} type="video/mp4" />
   
   </video>
   </div>
   </>
  );
}

export default App;
