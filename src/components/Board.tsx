import { BoardShape, ClickedKeyOptions } from '../types/types';
import { Cell } from './Cell';
import { LastRow } from './LastRow';

interface BoardProps {
  currentBoard: BoardShape;
  clickedKey: ClickedKeyOptions;
}

export const Board = ({ currentBoard, clickedKey }: BoardProps) => {
  return (
    <div className="board">
      {currentBoard.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <Cell key={`${rowIndex}-${cellIndex}`} type={cell} />
          ))}
        </div>
      ))}
      <LastRow clickedKey={clickedKey} />
    </div>
  );
};
