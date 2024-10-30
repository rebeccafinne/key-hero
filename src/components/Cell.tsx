import { CellOptions } from '../types/types';
import right from '../assets/right-arrow.svg';
import down from '../assets/down-arrow.svg';
import left from '../assets/left-arrow.svg';
import up from '../assets/up-arrow.svg';
import { EmptyCell, Keys } from '../types/types';

interface CellProps {
  type: CellOptions;
}

export const Cell = ({ type }: CellProps) => {
  let imageSrc;

  switch (type) {
    case Keys.RIGHT:
      imageSrc = right;
      break;
    case Keys.DOWN:
      imageSrc = down;
      break;
    case Keys.LEFT:
      imageSrc = left;
      break;
    case Keys.UP:
      imageSrc = up;
      break;
    default:
      imageSrc = '';
  }

  return (
    <div className={`cell`}>
      {type !== EmptyCell.EMPTY && (
        <img
          src={`${imageSrc}`}
          alt={`${type.toString().toLowerCase()} arrow`}
        />
      )}{' '}
    </div>
  );
};
