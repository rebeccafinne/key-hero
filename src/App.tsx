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
        <p>Du fick totalt {points} poäng!</p>
        <p>Spela igen?</p>
        <button onClick={resetGame}>Spela igen</button>
      </Modal>
      {showMissed && <h2 className="miss">Miss!</h2>}
      <Board currentBoard={board} clickedKey={clickedKey} />
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
