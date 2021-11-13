import React, { useState } from 'react';
import { Main } from './components/Main';
import { ModalWindow } from './components/ModalWindow';

export const App: React.FC = () => {
  const [isCreatePostFormVisible, setIsCreatePostFormVisible] = useState(false);
  const [isUpdatePostFormVisible, setIsUpdatePostFormVisible] = useState(false);
  const [isDeletePostFormVisible, setIsDeletePostFormVisible] = useState(false);

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
      <Main
        onCreateVisible={showCreateForm}
        onUpdateVisible={showUpdateForm}
        onDeleteVisible={showDeleteForm}
        isCreateVisible={isCreatePostFormVisible}
        isUpdateVisible={isUpdatePostFormVisible}
        isDeleteVisible={isDeletePostFormVisible}
      />
      {
        (isCreatePostFormVisible
        || isUpdatePostFormVisible
        || isDeletePostFormVisible)
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
