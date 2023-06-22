import { useState } from "react";

const TURNS = { // Turnos
  X: "X",
  O: "O"
};

const Square = ({ children, selected, updateBoard, index }) => {
  const className = `square`
  const handleClick = () => {
    updateBoard(index);
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);

  const updateBoard = (index) => {
    const newBoard = [... board];
    newBoard[index] = turn  // X u O
    setBoard(newBoard);
    
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn);
  }
  

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {
          board.map(( _, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <div className={turn === TURNS.X ? "square selected" : "square"}>
            {TURNS.X}
        </div>
        <div className={turn === TURNS.O ? "square selected" : "square"}>
            {TURNS.O}
        </div>
      </section>
    </main>
  )
}

export default App
