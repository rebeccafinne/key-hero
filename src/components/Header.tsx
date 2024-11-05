import { BackButton } from './BackButton';

type HeaderProps = {
  title: string;
  withBackButton?: boolean;
};

export const Header = ({ title, withBackButton = true }: HeaderProps) => {
  return (
    <div className="header-container">
      {withBackButton && <BackButton />}
      <h1>{title}</h1>
    </div>
  );
};
