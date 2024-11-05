export enum Keys {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export enum EmptyCell {
  EMPTY = 'empty',
}

export enum TickSpeed {
  Easy = 1500,
  Normal = 1000,
  Hard = 800,
  Extreme = 500,
}

export enum CurrentPage {
  MAIN_MENU = 'MAIN_MENU',
  GAME = 'GAME',
  LEVEL_PICK = 'LEVEL_PICK',
  HOW_TO = 'HOW_TO',
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
  keyPressed: boolean;
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

export type ClickedKeyOptions = 'left' | 'up' | 'down' | 'right' | '';
