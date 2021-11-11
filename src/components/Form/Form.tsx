import React, { useState } from 'react';
import { Button } from '../Button';
import { SubmitButton } from '../SubmitButton';
import {
  createNewPostOnServer,
  updatePostByIdOnServer,
  deletePostByIdFromServer,
} from '../../requests';

type Props = {
  isCreateVisible: boolean;
  isUpdateVisible: boolean;
  isDeleteVisible: boolean;
  onCreateHidden: () => void;
  onUpdateHidden: () => void;
  onDeleteHidden: () => void;
};

type Event = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;

export const Form: React.FC<Props> = (props) => {
  const {
    isCreateVisible,
    isUpdateVisible,
    isDeleteVisible,
    onCreateHidden,
    onUpdateHidden,
    onDeleteHidden,
  } = props;

  const [creatingData, setCreatingData] = useState<Partial<Post>>({
    userId: 0,
    title: '',
    body: '',
  });
  const [updatingData, setUpdatingData] = useState<Partial<Post>>({
    id: 0,
    title: '',
    body: '',
  });
  const [deleteData, setDeleteData] = useState(0);

  const createPost = () => {
    const { userId, title, body } = creatingData;

    createNewPostOnServer(userId, title, body);
    onCreateHidden();
  };

  const handleCreateChange = (event: Event) => {
    const { name, value } = event.target;

    setCreatingData({
      ...creatingData,
      [name]: value,
    });
  };

  const updatePost = () => {
    const { id, title, body } = updatingData;

    updatePostByIdOnServer(id, title, body);
    onUpdateHidden();
  };

  const handleUpdateChange = (event: Event) => {
    const { name, value } = event.target;

    setUpdatingData({
      ...updatingData,
      [name]: value,
    });
  };

  const deletePost = () => {
    deletePostByIdFromServer(deleteData);
    onDeleteHidden();
  };

  const handleDeleteChange = (event: Event) => {
    setDeleteData(Number(event.target.value));
  };

  return (
    <form className="Form field">
      {isCreateVisible && (
        <>
          <input
            type="number"
            name="userId"
            placeholder="Enter user id"
            className="Form__input input"
            value={creatingData.userId}
            onChange={handleCreateChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Enter the title"
            className="Form__input input"
            value={creatingData.title}
            onChange={handleCreateChange}
          />
          <textarea
            name="body"
            placeholder="Enter the body"
            className="Form__input input"
            value={creatingData.body}
            onChange={handleCreateChange}
          />
          <div className="Form__buttons-container">
            <Button
              name="Cancel"
              onClick={onCreateHidden}
            />
            <SubmitButton onClick={createPost} />
          </div>
        </>
      )}
      {isUpdateVisible && (
        <>
          <input
            type="number"
            name="id"
            placeholder="Enter post id"
            className="Form__input input"
            value={updatingData.id}
            onChange={handleUpdateChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Enter the title"
            className="Form__input input"
            value={updatingData.title}
            onChange={handleUpdateChange}
          />
          <textarea
            name="body"
            placeholder="Enter the body"
            className="Form__input input"
            value={updatingData.body}
            onChange={handleUpdateChange}
          />
          <div className="Form__buttons-container">
            <Button
              name="Cancel"
              onClick={onUpdateHidden}
            />
            <SubmitButton onClick={updatePost} />
          </div>
        </>
      )}
      {isDeleteVisible && (
        <>
          <input
            type="number"
            name="id"
            placeholder="Enter id"
            className="Form__input input"
            value={deleteData}
            onChange={handleDeleteChange}
          />
          <div className="Form__buttons-container">
            <Button
              name="Cancel"
              onClick={onDeleteHidden}
            />
            <SubmitButton onClick={deletePost} />
          </div>
        </>
      )}
    </form>
  );
};
