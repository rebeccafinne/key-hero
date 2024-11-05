import { useNavigate } from 'react-router-dom';
import { Header } from './Header';

type MainMenuProps = {
  startGame: () => void;
  setDifficultyLevel: () => void;
};

export const MainMenu = ({ startGame, setDifficultyLevel }: MainMenuProps) => {
  const navigate = useNavigate();

  const handleStartGame = (event) => {
    handleNavigation(event);
    startGame();
  };

  const handleNavigation = (event) => {
    navigate(`/${event.target.value}`);
  };

  return (
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
            Choose level
          </button>
          <button
            className="light-button"
            onClick={(event) => handleNavigation(event)}
            value={'how-to-play'}
          >
            How to play
          </button>
        </div>
      </div>
    </>
  );
};
