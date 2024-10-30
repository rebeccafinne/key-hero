import { useCallback, useState } from 'react';
import { useInterval } from './useInterval';
import { useKeyHeroBoard } from './useKeyHeroBoard';

enum TickSpeed {
  Normal = 800,
}

export function useKeyHero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [tickSpeed, setTickSpeed] = useState<TickSpeed | null>(null);

  const [{ board, lastRow, points, misses }, dispatchBoardState] =
    useKeyHeroBoard();

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

  const gameTick = useCallback(() => {
    dispatchBoardState({ type: 'drop' });
  }, [dispatchBoardState]);

  useInterval(() => {
    if (!isPlaying) {
      return;
    }
    gameTick();
  }, tickSpeed);

  const handleKeyClick = (event: KeyboardEvent) => {
    if (event.repeat) {
      return;
    }
    switch (event.key) {
      case 'ArrowLeft':
        dispatchBoardState({ type: 'key-press-left' });
        break;
      case 'ArrowUp':
        dispatchBoardState({ type: 'key-press-up' });
        break;
      case 'ArrowDown':
        dispatchBoardState({ type: 'key-press-down' });
        break;
      case 'ArrowRiht':
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
  };
}
