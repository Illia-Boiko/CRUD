import React from 'react';
import { Form } from '../Form';

type Props = {
  isCreateVisible: boolean;
  isUpdateVisible: boolean;
  isDeleteVisible: boolean;
  onCreateHidden: () => void;
  onUpdateHidden: () => void;
  onDeleteHidden: () => void;
};

export const Sidebar: React.FC<Props> = (props) => {
  const {
    isCreateVisible,
    isUpdateVisible,
    isDeleteVisible,
    onCreateHidden,
    onUpdateHidden,
    onDeleteHidden,
  } = props;

  return (
    <div className="eclipse">
      <section className="Sidebar box">
        <Form
          isCreateVisible={isCreateVisible}
          isUpdateVisible={isUpdateVisible}
          isDeleteVisible={isDeleteVisible}
          onCreateHidden={onCreateHidden}
          onUpdateHidden={onUpdateHidden}
          onDeleteHidden={onDeleteHidden}
        />
      </section>
    </div>
  );
};
