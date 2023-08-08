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

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  // null = No hay ganador, false = Empate
  const [winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&  
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    // Si no hay ganador
    return null;
  };

  // Actualizar Board con los turnos
  const updateBoard = (index) => {
    // No actualizar si tiene indice
    if (board[index] || winner) return;

    // Actualizar Tablero
    const newBoard = [... board];
    newBoard[index] = turn  // X u O
    setBoard(newBoard);

    // Cambiar Turno del jugador
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn);

    // Revisar ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    }
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
