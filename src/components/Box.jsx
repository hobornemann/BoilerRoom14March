import "./Game.css";
import { useState } from "react";

function Box({ id, handleClick, currentPlayer, marker }) {
    return (
        <div
            className="box"
            id={id}
            onClick={() => {
                console.log(id), handleClick(id);
            }}
        >
            {marker}
        </div>
    );
}

export default Box;
