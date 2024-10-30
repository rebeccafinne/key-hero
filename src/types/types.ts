export enum Keys {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export enum EmptyCell {
  EMPTY = 'empty',
}

export type CellOptions = Keys | EmptyCell;

// Definiera specifika typer för varje kolumn
export type UpColumn = Keys.UP | EmptyCell.EMPTY;
export type DownColumn = Keys.DOWN | EmptyCell.EMPTY;
export type LeftColumn = Keys.LEFT | EmptyCell.EMPTY;
export type RightColumn = Keys.RIGHT | EmptyCell.EMPTY;

// Typa boardet
export type BoardShape = Row[];

export type Row = [LeftColumn, UpColumn, DownColumn, RightColumn];

export type GameState = {
  board: BoardShape;
  lastRow: Row;
  points: number;
  misses: number;
};

export type Action = {
  type:
    | 'start'
    | 'drop'
    | 'key-press-left'
    | 'key-press-up'
    | 'key-press-down'
    | 'key-press-right';
};
