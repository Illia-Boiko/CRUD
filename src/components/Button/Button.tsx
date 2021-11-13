import React from 'react';

type Props = {
  onClick: () => void;
  name: string;
};

export const Button: React.FC<Props> = (props) => {
  const { onClick, name } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className="Button button is-light"
    >
      {name}
    </button>
  );
};
