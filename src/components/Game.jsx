import "./Game.css";
import Box from "./Box";
import { useState } from "react";

function Game() {
  const winnerArrays = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let markerArray = [];
  let boxes = [];
  for (let i = 0; i < 9; i++) {
    boxes.push("hej" + i);
    markerArray.push("");
  }

  const [currentPlayer, setCurrentPlayer] = useState(true);
  const [turns, setTurns] = useState(0);
  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const [markers, setMarkers] = useState(markerArray);
  const [winner, setWinner] = useState("");

  const handleClick = (id) => {
    if (!markers[id]) {
      if (currentPlayer) {
        setCurrentPlayer(false);
        player1.push(id);
        setPlayer1;
        setTurns(turns + 1);
        markers[id] = "X";
        setMarkers;
      } else {
        setCurrentPlayer(true);
        player2.push(id);
        setPlayer2;
        setTurns(turns + 1);
        markers[id] = "O";
      }
    }
    checkWinner(player1, player2);
  };

  const checkWinner = (player1, player2) => {
    for (let i = 0; i < winnerArrays.length; i++) {
      const [a, b, c] = winnerArrays[i];
      if (player1.includes(a) && player1.includes(b) && player1.includes(c)) {
        setWinner("Player 1 wins");
        return;
      } else if (
        player2.includes(a) &&
        player2.includes(b) &&
        player2.includes(c)
      ) {
        setWinner("Player 2 wins");
        return;
      }
    }
  };

  function resetGame() {
    setCurrentPlayer(true);
    setTurns(0);
    setPlayer1([]);
    setPlayer2([]);
    setMarkers([]);
    setWinner("");
  }

  return (
    <>
      <h2>{winner}</h2>
      <p>Turns: {turns}</p>
      <div className="box-list">
        {boxes &&
          boxes.map((box, i) => {
            return (
              <Box
                key={i}
                id={i}
                marker={markers[i]}
                handleClick={handleClick}
                currentPlayer={currentPlayer}
              />
            );
          })}
      </div>
      <button onClick={resetGame}>Reset game</button>
    </>
  );
}

export default Game;
