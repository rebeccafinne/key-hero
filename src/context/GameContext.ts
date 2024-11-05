import { createContext } from 'react';
import { CurrentPage, TickSpeed } from '../types/types';

interface GameContextType {
  currentLevel: TickSpeed; // currentLevel är av typen TickSpeed
  setCurrentLevel: React.Dispatch<React.SetStateAction<TickSpeed>>; // setCurrentLevel är en funktion
  currentPage: CurrentPage;
  setCurrentPage: React.Dispatch<React.SetStateAction<CurrentPage>>;
}

const defaultContext: GameContextType = {
  currentLevel: TickSpeed.Normal,
  setCurrentLevel: () => {},
  currentPage: CurrentPage.MAIN_MENU,
  setCurrentPage: () => {},
};

// Skapa en Context
export const GameContext = createContext<GameContextType>(defaultContext);
