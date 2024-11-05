import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

export const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleBackClick} className="back-button">
      <FaChevronLeft />
      Back
    </button>
  );
};
