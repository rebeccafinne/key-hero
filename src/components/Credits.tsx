import { Header } from './Header';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Credits = () => {
  return (
    <>
      <Header title="Credits" />
      <div className="page-container">
        <img
          src="src/assets/Rebecca_square.jpg"
          width="200"
          className="round-img"
        />
        <p>This game is made by Rebecca Finne.</p>
        <p>Fullstack software engineer.</p>
        <p>Reach out to me!</p>
        <a target="_blank" href="https://www.linkedin.com/in/rebecca-finne/">
          <FaLinkedin />
          Linkedin
        </a>
        <a target="_blank" href="https://github.com/rebeccafinne">
          <FaGithub />
          GitHub
        </a>
      </div>
    </>
  );
};
