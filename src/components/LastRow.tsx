import right from '../assets/right-arrow.svg';
import down from '../assets/down-arrow.svg';
import left from '../assets/left-arrow.svg';
import up from '../assets/up-arrow.svg';
import { ClickedKeyOptions } from '../types/types';

interface LastRowProps {
  clickedKey: ClickedKeyOptions;
}

export const LastRow = ({ clickedKey }: LastRowProps) => {
  return (
    <div className="static-last-row row">
      <span>
        <img
          className={`cell ${clickedKey === 'left' ? 'cell-clicked' : ''}`}
          src={`${left}`}
          alt={`left arrow`}
        />
      </span>
      <span className={`cell ${clickedKey === 'up' ? 'cell-clicked' : ''}`}>
        <img src={`${up}`} alt={`up arrow`} />
      </span>
      <span className={`cell ${clickedKey === 'down' ? 'cell-clicked' : ''}`}>
        <img src={`${down}`} alt={`down arrow`} />
      </span>
      <span className={`cell ${clickedKey === 'right' ? 'cell-clicked' : ''}`}>
        <img src={`${right}`} alt={`right arrow`} />
      </span>
    </div>
  );
};
