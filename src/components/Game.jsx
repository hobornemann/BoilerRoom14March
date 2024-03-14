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
            if (player1.includes(winnerArrays[i])) {
                console.log("Player 1 wins");
            } else if (player2.includes(winnerArrays[i])) {
                console.log("Player 2 wins");
            }
        }
    };

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
                                handleClick={handleClick}
                                currentPlayer={currentPlayer}
                            />
                        );
                    })}
            </div>
        </>
    );
}

export default Game;
