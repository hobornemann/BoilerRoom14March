import Game from "./components/Game";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Tic Tac Toe!</h1>
      <Game />
      <p>Result: </p>
      <div>
        <button>Restart game</button>
      </div>
    </div>
  );
}

export default App;
