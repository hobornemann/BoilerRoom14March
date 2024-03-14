import "./Game.css";
import { useState } from "react";

function Box({ id, onClick, currentPlayer, marker }) {
    return (
    <div className="box" id={id} onClick={() => onClick(id)}>
      {marker}
    </div>
  );
}

export default Box;
