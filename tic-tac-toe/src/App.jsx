import { useState } from "react";

const TURNS = {
  X: "X",
  O: "O"
};

const Square = ({ children, isSelected, updateBoard, index }) => {
  
  const className = `square`
  return (
    <div className={className}>
      {children}
    </div>
  )
};

function App() {

  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);
  

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {
          board.map(( _, index) => {
            return (
              <Square key={index} index={index}>
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <div className={turn === TURNS.X ? "selected" : ""}>
            {TURNS.X}
        </div>
        <div className={turn === TURNS.O ? "selected" : ""}>
            {TURNS.O}
        </div>
      </section>
    </main>
  )
}

export default App
