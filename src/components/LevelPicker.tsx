import { useContext } from 'react';
import { TickSpeed } from '../types/types';
import { Header } from './Header';
import { GameContext } from '../context/GameContext';

export const LevelPicker = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error(
      'DisplayCurrentLevel must be used within a CurrentLevelContext.Provider'
    );
  }
  const { setCurrentLevel } = context;

  const setDifficultyLevel = (value: React.MouseEvent<HTMLButtonElement>) => {
    switch (value.target.value) {
      case 'Easy':
        setCurrentLevel(TickSpeed.Easy);
        break;
      case 'Medium':
        setCurrentLevel(TickSpeed.Normal);
        break;
      case 'Hard':
        setCurrentLevel(TickSpeed.Hard);
        break;
      case 'Extreme':
        setCurrentLevel(TickSpeed.Extreme);
        break;
    }
  };
  return (
    <>
      <Header title="Pick a difficulty level" />

      <div className="page-container">
        <div className="button-container">
          <button
            className="light-button"
            onClick={(e) => setDifficultyLevel(e)}
            value={'Easy'}
          >
            Easy
          </button>
          <button
            className="light-button"
            onClick={(e) => setDifficultyLevel(e)}
            value={'Medium'}
          >
            Medium
          </button>
          <button
            className="light-button"
            onClick={(e) => setDifficultyLevel(e)}
            value={'Hard'}
          >
            Hard
          </button>
          <button
            className="light-button"
            onClick={(e) => setDifficultyLevel(e)}
            value={'Extreme'}
          >
            Extreme
          </button>
        </div>
      </div>
    </>
  );
};
