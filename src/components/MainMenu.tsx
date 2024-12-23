import { Header } from './Header';
import { useKeyHero } from '../hooks/useKeyHero';
import { useContext } from 'react';
import { CurrentPage } from '../types/types';
import { Game } from './Game';
import { HowToPlay } from './HowToPlay';
import { LevelPicker } from './LevelPicker';
import { GameContext } from '../context/GameContext';
import { Credits } from './Credits';

export const MainMenu = () => {
  const context = useContext(GameContext);

  const { currentPage, setCurrentPage } = context;

  const {
    board,
    startGame,
    points,
    misses,
    clickedKey,
    showMissed,
    isGameOver,
    resetGame,
  } = useKeyHero();

  const handleStartGame = (event: React.MouseEvent<HTMLButtonElement>) => {
    handleNavigation(event);
    startGame();
  };

  const handleNavigation = (event: React.MouseEvent<HTMLButtonElement>) => {
    switch ((event.target as HTMLInputElement).value) {
      case 'game':
        setCurrentPage(CurrentPage.GAME);
        break;
      case 'level':
        setCurrentPage(CurrentPage.LEVEL_PICK);
        break;
      case 'how-to-play':
        setCurrentPage(CurrentPage.HOW_TO);
        break;
      case 'credits':
        setCurrentPage(CurrentPage.CREDITS);
        break;
      default:
        setCurrentPage(CurrentPage.MAIN_MENU);
        break;
    }
  };

  return (
    <>
      {currentPage === CurrentPage.MAIN_MENU && (
        <>
          <Header title="Welcome to Key-Hero!" withBackButton={false} />
          <div className="page-container">
            <div className="button-container">
              <button
                className="light-button"
                onClick={(event) => handleStartGame(event)}
                value={'game'}
              >
                Start game
              </button>
              <button
                className="light-button"
                onClick={(event) => handleNavigation(event)}
                value={'level'}
              >
                Options
              </button>
              <button
                className="light-button"
                onClick={(event) => handleNavigation(event)}
                value={'how-to-play'}
              >
                How to play
              </button>
              <button
                className="light-button"
                onClick={(event) => handleNavigation(event)}
                value={'credits'}
              >
                Credits
              </button>
            </div>
          </div>
        </>
      )}
      {currentPage === CurrentPage.GAME && (
        <Game
          board={board}
          points={points}
          misses={misses}
          clickedKey={clickedKey}
          showMissed={showMissed}
          isGameOver={isGameOver}
          resetGame={resetGame}
        />
      )}
      {currentPage === CurrentPage.HOW_TO && <HowToPlay />}
      {currentPage === CurrentPage.LEVEL_PICK && <LevelPicker />}
      {currentPage === CurrentPage.CREDITS && <Credits />}
    </>
  );
};
