import { Header } from './Header';

export const HowToPlay = () => {
  return (
    <>
      <Header title="How to play" />
      <div className="how-to-container">
        <p className="how-to-p">
          Arrows will fall down on the game board and your task is to click the
          corresponding key on the keyboard when the arrow hits the last row.
        </p>
        <img src="src/assets/game-board.png" width="300" />
        <p className="how-to-p">
          You get one point for each correct click. You are allowed to miss or
          misclick ten times before the game is over. Try to get as many points
          as possible!
        </p>
      </div>
    </>
  );
};
