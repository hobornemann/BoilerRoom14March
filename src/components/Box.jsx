import "./Game.css";
import { useState } from "react";

function Box({ id, onClick, currentPlayer }) {
  return (
    <div className="box" id={id} onClick={() => onClick(id)}>
      {currentPlayer ? "hej" : "hejdå"}
    </div>
  );
}

export default Box;
