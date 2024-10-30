import { BoardShape } from '../types/types';
import { Cell } from './Cell';

interface BoardProps {
  currentBoard: BoardShape;
}

export const Board = ({ currentBoard }: BoardProps) => {
  return (
    <div className="board">
      {currentBoard.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <Cell key={`${rowIndex}-${cellIndex}`} type={cell} />
          ))}
        </div>
      ))}
    </div>
  );
};
