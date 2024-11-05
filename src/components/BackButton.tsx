import { useContext } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { GameContext } from '../context/GameContext';
import { CurrentPage } from '../types/types';

export const BackButton = () => {
  const context = useContext(GameContext);

  const { setCurrentPage } = context;

  const handleBackClick = () => {
    setCurrentPage(CurrentPage.MAIN_MENU);
  };

  return (
    <button onClick={handleBackClick} className="back-button">
      <FaChevronLeft />
      Back
    </button>
  );
};
