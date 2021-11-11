import React from 'react';

type Props = {
  onClick: () => void;
  name: string;
  disabled?: boolean;
};

export const Button: React.FC<Props> = (props) => {
  const { onClick, name, disabled } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className="button is-light"
      disabled={disabled}
    >
      {name}
    </button>
  );
};
