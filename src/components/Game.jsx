import "./Game.css";
import Box from './Box'
import { useState } from "react";

function Game() {
  let boxes = [];
  for (let i = 0; i < 9; i++){
    boxes.push("hej" + i)
    console.log(boxes);
  }

  const [player1, setPlayer1] = useState([])
  const [player2, setPlayer2] = useState([])

  return (
    <>
      <div className="box-list">
        {boxes && boxes.map((box, i) => {
        return (        
        <Box 
          key={i}
          id={i}
        />)

        })}
      </div>
    </>
  )
};

export default Game;
