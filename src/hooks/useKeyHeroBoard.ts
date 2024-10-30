import { Dispatch, useReducer } from 'react';
import {
  GameState,
  Keys,
  Action,
  EmptyCell,
  Row,
  BoardShape,
} from '../types/types';

export function useKeyHeroBoard(): [GameState, Dispatch<Action>] {
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
}

export function getRandomKey(): Keys {
  const keyValues = Object.values(Keys);
  return keyValues[Math.floor(Math.random() * keyValues.length)] as Keys;
}

export function getEmptyBoard() {
  const emptyRow: Row = [
    EmptyCell.EMPTY,
    EmptyCell.EMPTY,
    EmptyCell.EMPTY,
    EmptyCell.EMPTY,
  ];
  const board: BoardShape = Array(10).fill(emptyRow);

  return board;
}

function getNewRow(newKey: Keys): Row {
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
}

function calcPoints(newState: GameState, index: number, keyPressed: Keys) {
  if (newState.lastRow[index] === keyPressed) {
    newState.points++;
  } else {
    newState.misses++;
  }
}

function boardReducer(state: GameState, action: Action): GameState {
  let newState = { ...state };

  switch (action.type) {
    case 'start': {
      const emptyBoard = getEmptyBoard();
      return {
        board: emptyBoard,
        lastRow: emptyBoard[emptyBoard.length - 1],
        points: 0,
        misses: 0,
      };
    }
    case 'drop': {
      const newKey = getRandomKey();

      const newRow = getNewRow(newKey);
      const newBoard = [
        newRow,
        ...newState.board.slice(0, newState.board.length - 1),
      ];
      newState.board = newBoard;
      newState.lastRow = newState.board[newState.board.length - 1];
      break;
    }
    case 'key-press-left':
      calcPoints(newState, 0, Keys.LEFT);
      break;
    case 'key-press-up':
      calcPoints(newState, 1, Keys.UP);
      break;
    case 'key-press-down':
      calcPoints(newState, 2, Keys.DOWN);
      break;
    case 'key-press-right':
      calcPoints(newState, 3, Keys.RIGHT);
      break;
    default: {
      const unhandledType: never = action.type;
      throw new Error(`Unhandled action type: ${unhandledType}`);
    }
  }

  return newState;
}
