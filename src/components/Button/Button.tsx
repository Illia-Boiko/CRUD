import React from 'react';

type Props = {
  onClick: () => void;
  name: string;
  className?: string;
};

export const Button: React.FC<Props> = (props) => {
  const { onClick, name, className } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`Button button is-light ${className}`}
    >
      {name}
    </button>
  );
};
