import { useState } from 'react';
import Square from './components/Square';

function App() {
  const [player, setPlayer] = useState(true);
  const [gameboard, setGameboard] = useState(Array.from({ length: 9 }, (v, i) => ''));

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Let's play Tic-Tac-Toe!
        </p>
      </header>
      <Square player={player} gameboard={gameboard} />
    </div>
  );
}

export default App;
