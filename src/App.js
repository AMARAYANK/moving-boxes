import React, {useEffect, useRef, useState} from 'react';
import './App.css';

export default function App() {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  
  const canvasRef = useRef(null)

 // set the height and width of canvas 
  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    context.canvas.height = window.innerHeight;
    context.canvas.width = window.innerWidth;
  },[])

  // move the box if x or y changes
  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    context.clearRect(0, 0, window.innerHeight, window.innerWidth)
    context.fillRect(x, y, 100, 100)
  },[x,y])


  return (
    <div className="app">
      <canvas ref={canvasRef}/>

      <div className="arrows">
        <button onClick={() => setY((y) => ( y > 0 ? y - 20 : 0))}>Up</button>
        <button onClick={() => setX((x) => x - 20)}>Left</button>
        <button onClick={() => setY((y) => y + 20)}>Down</button>
        <button onClick={() => setX((x) => x + 20)}>Right</button>
      </div>

      <div className="images">
        <img src="https://i.imgur.com/JYUB0m3.png" alt="Down" />
        <img src="https://i.imgur.com/GEXD7bk.gif" alt="Right" />
        <img src="https://i.imgur.com/XSA2Oom.gif" alt="Up" />
        <img src="https://i.imgur.com/4LGAZ8t.gif" alt="Left" />
      </div>
    </div>
  );
}
