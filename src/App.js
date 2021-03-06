import React, { useEffect, useRef} from "react";
import "./App.css";
import { useMovement } from "./useMovement";

export default function App() {
  const [x, y, move, direction] = useMovement()
  const canvasRef = useRef(null);
  const linkDownRef = useRef(null);
  const linkUpRef = useRef(null);
  const linkRightRef = useRef(null);
  const linkLeftRef = useRef(null);


  // set the height and width of canvas
  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.canvas.height = window.innerHeight;
    context.canvas.width = window.innerWidth;
  }, []);

  // move the box if x or y changes
  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, window.innerHeight, window.innerWidth);

    let theLinkRef;
    if (direction === "down") theLinkRef = linkDownRef;
    if (direction === "up") theLinkRef = linkUpRef;
    if (direction === "right") theLinkRef = linkRightRef;
    if (direction === "left") theLinkRef = linkLeftRef;

    context.drawImage(theLinkRef.current, x, y);
  }, [x, y, direction]);

  return (
    <div className="app">
      <canvas ref={canvasRef} />

      <div className="arrows">
        <button onClick={() => move("up")}>Up</button>
        <button onClick={() => move("left")}>Left</button>
        <button onClick={() => move("down")}>Down</button>
        <button onClick={() => move("right")}>Right</button>
      </div>

      <div className="images">
        <img
          src="https://i.imgur.com/JYUB0m3.png"
          alt="Down"
          ref={linkDownRef}
        />
        <img
          src="https://i.imgur.com/GEXD7bk.gif"
          alt="Right"
          ref={linkRightRef}
        />
        <img src="https://i.imgur.com/XSA2Oom.gif" alt="Up" ref={linkUpRef} />
        <img
          src="https://i.imgur.com/4LGAZ8t.gif"
          alt="Left"
          ref={linkLeftRef}
        />
      </div>
    </div>
  );
}
