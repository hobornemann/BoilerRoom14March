import "./Game.css";
import Box from "./Box";
import { useState } from "react";

function Game() {
    const [currentPlayer, setCurrentPlayer] = useState(true);
    const [player1, setPlayer1] = useState([]);
    const [player2, setPlayer2] = useState([]);

    const handleClick = (e) => {
        console.log(e.target.id);
        if (currentPlayer) {
            console.log("player 1:");
            setCurrentPlayer(false);
            setPlayer1([...player1, e.target.id])
            console.log(player1)
        } else {
          console.log("player 2:");
            setCurrentPlayer(true);
            setPlayer2([...player2, e.target.id])
        }
    };

    let boxes = [];
    for (let i = 0; i < 9; i++) {
        boxes.push("hej" + i);
    }

    return (
        <>
            <div className="box-list">
                {boxes &&
                    boxes.map((box, i) => {
                        return <Box key={i} id={i + 1} onClick={handleClick} />;
                    })}
            </div>
        </>
    );
}

export default Game;
