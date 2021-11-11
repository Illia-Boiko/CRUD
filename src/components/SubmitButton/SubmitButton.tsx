import React from 'react';

type Props = {
  onClick: () => void
};

export const SubmitButton: React.FC<Props> = (props) => {
  const { onClick } = props;

  return (
    <button
      type="submit"
      onClick={onClick}
      className="button is-dark"
    >
      Ok
    </button>
  );
};
