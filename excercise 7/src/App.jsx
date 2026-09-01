
import React, { useState, useEffect } from 'react';


function App () {

  const [countXandY, setCountXandY ] = useState({ x: 0, y: 0 });


  useEffect(()=>{
    const handleMouseTracker = (e) => {

   setCountXandY({ x: e.clientX, y: e.clientY });
     
    }
    
    window.addEventListener('mousemove', handleMouseTracker);

     return()=>{
      window.removeEventListener('mousemove', handleMouseTracker);
     };

  },[]);

  return (
    <>
     <p> mouseX: {countXandY.x} </p>

     <p> mouseY: {countXandY.y} </p>
     
    </>
  );
};

export default App
