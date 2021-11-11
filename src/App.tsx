import React, { useState } from 'react';
import { Menu } from './components/Menu';
import { Sidebar } from './components/Sidebar';

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

  const hideCreateForm = () => {
    setIsCreatePostFormVisible(false);
  };

  const hideUpdateForm = () => {
    setIsUpdatePostFormVisible(false);
  };

  const hideDeleteForm = () => {
    setIsDeletePostFormVisible(false);
  };

  return (
    <div className="App content">
      <h1 className="App__title">
        CRUD
      </h1>
      <Menu
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
          <Sidebar
            isCreateVisible={isCreatePostFormVisible}
            isUpdateVisible={isUpdatePostFormVisible}
            isDeleteVisible={isDeletePostFormVisible}
            onCreateHidden={hideCreateForm}
            onUpdateHidden={hideUpdateForm}
            onDeleteHidden={hideDeleteForm}
          />
        )
      }
    </div>
  );
};
