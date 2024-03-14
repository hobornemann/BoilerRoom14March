import "./Game.css";


function Game() {
  let boxes;
  for (let i = 0; i < 9; i++){
    boxes = array.push(i)
  }

  return (
    <>
      <div className="box-list">
        {boxes.map((box) => {
          <Box 
            key={i}
            id={i}
          />
        })}
      </div>
    </>
  )
};

export default Game;
