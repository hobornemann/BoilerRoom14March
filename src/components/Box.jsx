import "./Game.css";
import { useState } from "react";

function Box({ id, onClick }) {

    return <div className="box" id={id} onClick={onClick}></div>;
}

export default Box;
