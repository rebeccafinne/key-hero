import './App.css';
import { Board } from './components/Board';
import { Modal } from './components/Modal';
import { useKeyHero } from './hooks/useKeyHero';

function App() {
  const {
    board,
    startGame,
    isPlaying,
    stopGame,
    points,
    misses,
    clickedKey,
    showMissed,
    isGameOver,
    resetGame,
  } = useKeyHero();

  return (
    <div className="App">
      <h1>Key-Hero!</h1>
      <Modal isOpen={isGameOver}>
        <h2>Game over!</h2>
        <p>Score: {points}</p>
        <button onClick={resetGame} className="controls-button">
          Retry
        </button>
      </Modal>
      {showMissed && <h2 className="miss">Miss!</h2>}
      <Board currentBoard={board} clickedKey={clickedKey} />
      <div className="controls">
        <p>Score: {points}</p>
        <p>Misses: {misses}/10</p>
        {isPlaying ? (
          <button onClick={stopGame} className="controls-button">
            Stop
          </button>
        ) : (
          <button onClick={startGame} className="controls-button">
            New Game
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
