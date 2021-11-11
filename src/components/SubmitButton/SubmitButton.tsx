import React from 'react';

type Props = {
  onClick: () => void
};

export const SubmitButton: React.FC<Props> = (props) => {
  const { onClick } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className="button is-dark"
    >
      Ok
    </button>
  );
};
