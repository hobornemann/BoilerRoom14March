import "./Game.css";
import Box from "./Box";
import { useState } from "react";

function Game() {
  let markerArray = []; 
  let boxes = [];
  for (let i = 0; i < 9; i++) {
    boxes.push("hej" + i);
    markerArray.push("")
  }

  const [currentPlayer, setCurrentPlayer] = useState(true);
  const [turns, setTurns] = useState(0);
  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const [markers, setMarkers] = useState(markerArray);
   

  const handleClick = (id) => {
    console.log(id);
    if (currentPlayer) {
      console.log("player 1:");
      setCurrentPlayer(false);
      setPlayer1([...player1, id]);
      console.log(player1);
      setTurns(turns + 1);
      markers[id] = "X"
      setMarkers
    } else {
      console.log("player 2:");
      setCurrentPlayer(true);
      setPlayer2([...player2, id]);
      setTurns(turns + 1);
      markers[id] = "O"
    }
  };

  function handleTurns(id) {
    if (turns % 2 === 0) {
      player1;
    } else console.log("player två");
  }

  
  return (
    <>
      <p>Turns: {turns}</p> 
      <div className="box-list">
         {boxes &&
          boxes.map((box, i) => {
            return (
              <Box
                key={i}
                id={i}
                marker={markers[i]}
                onClick={handleClick}
                currentPlayer={currentPlayer}
              />
            );
          })}
      </div>
    </>
  );
}

export default Game;
