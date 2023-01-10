import Square from './components/Square';

function App() {
  const user = 'King';

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Let's play Tic-Tac-Toe!
        </p>
      </header>
      <Square propVar={user} />
    </div>
  );
}

export default App;
