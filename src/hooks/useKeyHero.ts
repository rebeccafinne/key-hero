import { useCallback, useEffect, useState } from 'react';
import { useInterval } from './useInterval';
import { useKeyHeroBoard } from './useKeyHeroBoard';
import { ClickedKeyOptions } from '../types/types';

enum TickSpeed {
  Normal = 800,
}

export function useKeyHero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [tickSpeed, setTickSpeed] = useState<TickSpeed | null>(null);
  const [clickedKey, setClickedKey] = useState<ClickedKeyOptions>('');
  const [showMissed, setShowMissed] = useState(false);

  const [{ board, points, misses }, dispatchBoardState] = useKeyHeroBoard();

  const startGame = useCallback(() => {
    setIsPlaying(true);
    setTickSpeed(TickSpeed.Normal);
    window.addEventListener('keydown', handleKeyClick);

    dispatchBoardState({ type: 'start' });
  }, [dispatchBoardState]);

  const stopGame = () => {
    setIsPlaying(false);
    setTickSpeed(null);
    window.removeEventListener('keydown', handleKeyClick);
  };

  const resetGame = () => {
    setIsGameOver(false);
    setClickedKey('');
    setShowMissed(false);
    startGame();
  };

  const gameTick = useCallback(() => {
    setClickedKey('');
    setShowMissed(false);
    dispatchBoardState({ type: 'drop' });
  }, [dispatchBoardState]);

  useInterval(() => {
    if (!isPlaying || isGameOver) {
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
        console.log('Must press an arrow key to play');
    }
  };

  return {
    board,
    startGame,
    isPlaying,
    stopGame,
    points,
    misses,
    clickedKey,
    showMissed,
    isGameOver,
    resetGame,
  };
}
