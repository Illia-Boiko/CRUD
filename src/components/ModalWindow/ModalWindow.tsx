import React from 'react';
import { Form } from '../Form';

type Props = {
  isCreateVisible: boolean;
  isUpdateVisible: boolean;
  isDeleteVisible: boolean;
  onHideForm: () => void;
};

export const ModalWindow: React.FC<Props> = (props) => {
  const {
    isCreateVisible,
    isUpdateVisible,
    isDeleteVisible,
    onHideForm,
  } = props;

  return (
    <div className="eclipse">
      <section className="ModalWindow box">
        <Form
          isCreateVisible={isCreateVisible}
          isUpdateVisible={isUpdateVisible}
          isDeleteVisible={isDeleteVisible}
          onHideForm={onHideForm}
        />
      </section>
    </div>
  );
};
