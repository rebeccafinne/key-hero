import { useState } from 'react';
import './App.css';
import { Game } from './components/Game';
import { MainMenu } from './components/MainMenu';
import { useKeyHero } from './hooks/useKeyHero';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LevelPicker } from './components/LevelPicker';
import { HowToPlay } from './components/HowToPlay';

function App() {
  const handleStartGame = () => {
    startGame();
  };

  const {
    startGame,
    board,
    points,
    misses,
    clickedKey,
    showMissed,
    isGameOver,
    resetGame,
    setTickSpeed,
  } = useKeyHero();

  const handleBackToMenu = () => {
    resetGame(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainMenu
              startGame={handleStartGame}
              setDifficultyLevel={() => console.log('hanterar nivå')}
            />
          }
        />
        <Route
          path="/game"
          element={
            <Game
              board={board}
              points={points}
              misses={misses}
              clickedKey={clickedKey}
              showMissed={showMissed}
              isGameOver={isGameOver}
              resetGame={resetGame}
              backToMenu={handleBackToMenu}
            />
          }
        />
        <Route
          path="/level"
          element={<LevelPicker setTickSpeed={setTickSpeed} />}
        />
        <Route path="/how-to-play" element={<HowToPlay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
