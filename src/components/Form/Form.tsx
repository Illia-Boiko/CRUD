import React, { useState } from 'react';
import { Button } from '../Button';
import { SubmitButton } from '../SubmitButton';
import {
//   createNewPostOnServer,
//   updatePostByIdOnServer,
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

export const Form: React.FC<Props> = (props) => {
  const {
    isCreateVisible,
    isUpdateVisible,
    isDeleteVisible,
    onCreateHidden,
    onUpdateHidden,
    onDeleteHidden,
  } = props;

  // const [creatingData, setCreatingData] = useState<Partial<Post>>({
  //   userId: 0,
  //   title: '',
  //   body: '',
  // });

  // const [updatingData, setUpdatingData] = useState<Partial<Post>>({
  //   id: 0,
  //   title: '',
  //   body: '',
  // });

  const [deleteData, setDeleteData] = useState(0);

  // const createPost = () => {
  //   const { userId, title, body } = creatingData;

  //   createNewPostOnServer(userId, title, body);
  // };

  // const updatePost = () => {
  //   const { id, title, body } = updatingData;

  //   updatePostByIdOnServer(id, title, body);
  // };

  const deletePost = () => {
    deletePostByIdFromServer(deleteData);
  };

  const handleDeleteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
            className="input"
          />
          <input
            type="text"
            name="title"
            placeholder="Enter the title"
            className="input"
          />
          <textarea
            name="body"
            placeholder="Enter the body"
            className="input"
          />
          <Button
            name="Cancel"
            onClick={onCreateHidden}
          />
        </>
      )}
      {isUpdateVisible && (
        <>
          <input
            type="text"
            name="title"
            placeholder="Enter the title"
            className="input"
          />
          <textarea
            name="body"
            placeholder="Enter the body"
            className="input"
          />
          <Button
            name="Cancel"
            onClick={onUpdateHidden}
          />
        </>
      )}
      {isDeleteVisible && (
        <>
          <input
            type="number"
            name="id"
            className="input"
            value={deleteData}
            onChange={handleDeleteChange}
          />
          <Button
            name="Cancel"
            onClick={onDeleteHidden}
          />
          <SubmitButton onClick={deletePost} />
        </>
      )}
    </form>
  );
};
