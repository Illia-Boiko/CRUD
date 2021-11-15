import React, { useState } from 'react';
import { Main } from './components/Main';
import { ModalWindow } from './components/ModalWindow';

export const App: React.FC = () => {
  const [isCreatePostFormVisible, setIsCreatePostFormVisible] = useState(false);
  const [isUpdatePostFormVisible, setIsUpdatePostFormVisible] = useState(false);
  const [isDeletePostFormVisible, setIsDeletePostFormVisible] = useState(false);

  const isFormVisible = (
    isCreatePostFormVisible
    || isUpdatePostFormVisible
    || isDeletePostFormVisible
  );

  const showCreateForm = () => {
    setIsCreatePostFormVisible(true);
  };

  const showUpdateForm = () => {
    setIsUpdatePostFormVisible(true);
  };

  const showDeleteForm = () => {
    setIsDeletePostFormVisible(true);
  };

  const hideForm = () => {
    setIsCreatePostFormVisible(false);
    setIsUpdatePostFormVisible(false);
    setIsDeletePostFormVisible(false);
  };

  return (
    <div className="App content">
      <div id="top"></div>
      <h1 className="App__title">
        CRUD
      </h1>
      <a
        href="#bottom"
        className="arrow-button button"
      >
        &#8595;
      </a>
      <Main
        onCreateVisible={showCreateForm}
        onUpdateVisible={showUpdateForm}
        onDeleteVisible={showDeleteForm}
        isFormVisible={isFormVisible}
      />
      {
        isFormVisible
        && (
          <ModalWindow
            isCreateVisible={isCreatePostFormVisible}
            isUpdateVisible={isUpdatePostFormVisible}
            isDeleteVisible={isDeletePostFormVisible}
            onHideForm={hideForm}
          />
        )
      }
    </div>
  );
};
