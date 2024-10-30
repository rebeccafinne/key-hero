import './App.css';
import { Board } from './components/Board';
import { useKeyHero } from './hooks/useKeyHero';

function App() {
  const { board, startGame, isPlaying, stopGame, points, misses } =
    useKeyHero();

  return (
    <div className="App">
      <h1>Key-Hero!</h1>
      <Board currentBoard={board} />
      <div className="controls">
        <div>Du har: {points} poäng</div>
        <div>Antalet missar: {misses}</div>
        {isPlaying ? (
          <button onClick={stopGame}>Stop</button>
        ) : (
          <button onClick={startGame}>New Game</button>
        )}
      </div>
    </div>
  );
}

export default App;
