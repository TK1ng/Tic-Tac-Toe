import { useState } from 'react';
import Square from './components/Square';

function App() {
  const [player, setPlayer] = useState(true);
  const [squares, setSquares] = useState(Array.from({ length: 9 }, (v, i) => ''));

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Let's play Tic-Tac-Toe!
        </p>
      </header>
      <div className="container">
        {squares.map((v, i) =>
          <Square player={player} setPlayer={setPlayer} squareValue={v} index={i} key={i} />
        )}
      </div>
    </div>
  );
}

export default App;
