import { TickSpeed } from '../types/types';
import { Header } from './Header';

type LevelPickerProps = {
  setTickSpeed: (tickspeed: TickSpeed) => void;
};

export const LevelPicker = ({ setTickSpeed }: LevelPickerProps) => {
  const setDifficultyLevel = (value: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value.target.value);
    setTickSpeed(value.target.value);
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
