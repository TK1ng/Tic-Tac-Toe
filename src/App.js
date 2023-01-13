import { useState, useContext } from 'react';
import PersonContext from './model/GameContext';
import Square from './components/Square';
import './App.css';

function App() {
  const [player, setPlayer] = useState(true);
  const [squares, setSquares] = useState(Array.from({ length: 9 }, (v, i) => ''));

  const handleReset = () => {
    setSquares(Array.from({ length: 9 }, (v, i) => ''));
    setPlayer(true);
  }

  const gameStatus = calculateWinner(squares);

  function calculateWinner(array) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return false;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Tic-Tac-Toe: A Game
        </h1>
      </header>
      <div class="game-status">{gameStatus === null ? 'In play...' : `The winner is ${gameStatus}`}</div>
      <button className="reset-btn" onClick={handleReset}>Reset</button>
      <div className="container">
        {squares.map((val, index) =>

          <Square gameStatus={gameStatus} player={player} setPlayer={setPlayer} squares={squares} setSquares={setSquares} squareValue={val} index={index} key={index} />
        )}
      </div>
    </div>
  );
}

export default App;
