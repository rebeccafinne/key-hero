import { useState } from 'react';
import './App.css';
import { MainMenu } from './components/MainMenu';

import { CurrentPage, TickSpeed } from './types/types';
import { GameContext } from './context/GameContext';
import { Toaster } from 'react-hot-toast';

function App() {
  const [currentLevel, setCurrentLevel] = useState<TickSpeed>(TickSpeed.Normal);
  const [currentPage, setCurrentPage] = useState<CurrentPage>(
    CurrentPage.MAIN_MENU
  );

  return (
    <GameContext.Provider
      value={{ currentLevel, setCurrentLevel, currentPage, setCurrentPage }}
    >
      <Toaster />
      <MainMenu />
    </GameContext.Provider>
  );
}

export default App;
