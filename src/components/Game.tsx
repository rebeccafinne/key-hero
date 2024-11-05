import { Board } from './Board';
import { Modal } from './Modal';
import { Header } from './Header';
import { BoardShape, ClickedKeyOptions } from '../types/types';

type GameProps = {
  board: BoardShape;
  points: number;
  misses: number;
  clickedKey: ClickedKeyOptions;
  showMissed: boolean;
  isGameOver: boolean;
  resetGame: (startNewGame: boolean) => void;
  backToMenu: (event: unknown) => void;
};

export const Game = ({
  board,
  points,
  misses,
  clickedKey,
  showMissed,
  isGameOver,
  resetGame,
  backToMenu,
}: GameProps) => {
  const handleBackToMenu = () => {
    backToMenu('MAIN');
  };
  return (
    <>
      <Header title="Key-Hero!" />
      <div className="App">
        <Modal isOpen={isGameOver}>
          <h2>Game over!</h2>
          <p>Score: {points}</p>
          <div className="button-container">
            <button onClick={() => resetGame(true)} className="dark-button">
              Retry
            </button>
            <button onClick={handleBackToMenu} className="dark-button">
              Main menu
            </button>
          </div>
        </Modal>

        {showMissed && <h2 className="miss">Miss!</h2>}
        <Board currentBoard={board} clickedKey={clickedKey} />
        <div className="controls">
          <p>Score: {points}</p>
          <p>Misses: {misses}/10</p>
        </div>
      </div>
    </>
  );
};
