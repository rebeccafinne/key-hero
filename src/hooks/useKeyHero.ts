import { useCallback, useContext, useEffect, useState } from 'react';
import { useInterval } from './useInterval';
import { useKeyHeroBoard } from './useKeyHeroBoard';
import { ClickedKeyOptions, TickSpeed } from '../types/types';
import { GameContext } from '../context/GameContext';

export function useKeyHero() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error(
      'DisplayCurrentLevel must be used within a CurrentLevelContext.Provider'
    );
  }
  const { currentLevel } = context;

  const [isGameOver, setIsGameOver] = useState(false);
  const [tickSpeed, setTickSpeed] = useState<TickSpeed | null>(null);
  const [clickedKey, setClickedKey] = useState<ClickedKeyOptions>('');
  const [showMissed, setShowMissed] = useState(false);

  const [{ board, points, misses }, dispatchBoardState] = useKeyHeroBoard();

  const startGame = useCallback(() => {
    setIsGameOver(false);
    setTickSpeed(currentLevel);
    window.addEventListener('keydown', handleKeyClick);

    dispatchBoardState({ type: 'start' });
  }, [dispatchBoardState, currentLevel]);

  const stopGame = () => {
    setTickSpeed(null);
    window.removeEventListener('keydown', handleKeyClick);
  };

  const resetGame = (newGame: boolean) => {
    setIsGameOver(false);
    setClickedKey('');
    setShowMissed(false);
    if (newGame) {
      startGame();
    }
  };

  const gameTick = useCallback(() => {
    setClickedKey('');
    setShowMissed(false);
    dispatchBoardState({ type: 'drop' });
  }, [dispatchBoardState]);

  useInterval(() => {
    if (isGameOver) {
      return;
    }
    gameTick();
  }, tickSpeed);

  useEffect(() => {
    if (misses > 0) {
      setShowMissed(true);
    }
    if (misses >= 10) {
      setIsGameOver(true);
      stopGame();
    }
  }, [misses]);

  const handleKeyClick = (event: KeyboardEvent) => {
    if (event.repeat) {
      return;
    }
    switch (event.key) {
      case 'ArrowLeft':
        setClickedKey('left');
        dispatchBoardState({ type: 'key-press-left' });
        break;
      case 'ArrowUp':
        setClickedKey('up');

        dispatchBoardState({ type: 'key-press-up' });
        break;
      case 'ArrowDown':
        setClickedKey('down');

        dispatchBoardState({ type: 'key-press-down' });
        break;
      case 'ArrowRight':
        setClickedKey('right');

        dispatchBoardState({ type: 'key-press-right' });
        break;
      default:
    }
  };

  return {
    board,
    startGame,
    points,
    misses,
    clickedKey,
    showMissed,
    isGameOver,
    resetGame,
    setTickSpeed,
  };
}
