import { Dispatch, useReducer } from 'react';
import {
  GameState,
  Keys,
  Action,
  EmptyCell,
  Row,
  BoardShape,
} from '../types/types';

export const useKeyHeroBoard = (): [GameState, Dispatch<Action>] => {
  const [boardState, dispatchBoardState] = useReducer(
    boardReducer,
    {
      board: [],
      lastRow: [
        EmptyCell.EMPTY,
        EmptyCell.EMPTY,
        EmptyCell.EMPTY,
        EmptyCell.EMPTY,
      ],
      points: 0,
      misses: 0,
      keyPressed: false,
    },

    (emptyState) => {
      const state = {
        ...emptyState,
        board: getEmptyBoard(),
      };
      return state;
    }
  );
  return [boardState, dispatchBoardState];
};

const getRandomKey = (): Keys => {
  const keyValues = Object.values(Keys);
  return keyValues[Math.floor(Math.random() * keyValues.length)] as Keys;
};

const getEmptyBoard = () => {
  const emptyRow: Row = [
    EmptyCell.EMPTY,
    EmptyCell.EMPTY,
    EmptyCell.EMPTY,
    EmptyCell.EMPTY,
  ];
  const board: BoardShape = Array(10).fill(emptyRow);

  return board;
};

const getNewRow = (newKey: Keys): Row => {
  switch (newKey) {
    case Keys.LEFT:
      return [Keys.LEFT, EmptyCell.EMPTY, EmptyCell.EMPTY, EmptyCell.EMPTY];
    case Keys.UP:
      return [EmptyCell.EMPTY, Keys.UP, EmptyCell.EMPTY, EmptyCell.EMPTY];
    case Keys.DOWN:
      return [EmptyCell.EMPTY, EmptyCell.EMPTY, Keys.DOWN, EmptyCell.EMPTY];
    case Keys.RIGHT:
      return [EmptyCell.EMPTY, EmptyCell.EMPTY, EmptyCell.EMPTY, Keys.RIGHT];
    default:
      return [
        EmptyCell.EMPTY,
        EmptyCell.EMPTY,
        EmptyCell.EMPTY,
        EmptyCell.EMPTY,
      ];
  }
};

const calcPoints = (newState: GameState, index: number, keyPressed: Keys) => {
  if (newState.lastRow[index] === keyPressed) {
    newState.points++;
  } else {
    newState.misses++;
  }
};

const updateBoard = (newState: GameState) => {
  const newKey = getRandomKey();
  const newRow = getNewRow(newKey);
  const newBoard = [
    newRow,
    ...newState.board.slice(0, newState.board.length - 1),
  ];
  newState.board = newBoard;
  newState.lastRow = newState.board[newState.board.length - 1];
};

const boardReducer = (state: GameState, action: Action): GameState => {
  let newState = { ...state };

  switch (action.type) {
    case 'start': {
      const emptyBoard = getEmptyBoard();
      return {
        board: emptyBoard,
        lastRow: emptyBoard[emptyBoard.length - 1],
        points: 0,
        misses: 0,
        keyPressed: false,
      };
    }
    case 'drop': {
      if (
        !newState.keyPressed &&
        !newState.lastRow.every((cell) => cell === EmptyCell.EMPTY)
      ) {
        newState.misses++;
      }
      updateBoard(newState);
      newState.keyPressed = false;
      break;
    }
    case 'key-press-left':
      calcPoints(newState, 0, Keys.LEFT);
      newState.keyPressed = true;
      break;
    case 'key-press-up':
      calcPoints(newState, 1, Keys.UP);
      newState.keyPressed = true;

      break;
    case 'key-press-down':
      calcPoints(newState, 2, Keys.DOWN);
      newState.keyPressed = true;

      break;
    case 'key-press-right':
      calcPoints(newState, 3, Keys.RIGHT);
      newState.keyPressed = true;
      break;
    default: {
      const unhandledType: never = action.type;
      throw new Error(`Unhandled action type: ${unhandledType}`);
    }
  }

  return newState;
};
