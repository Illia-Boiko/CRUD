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
  onHideForm: () => void;
};

type Event = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;

export const Form: React.FC<Props> = (props) => {
  const {
    isCreateVisible,
    isUpdateVisible,
    isDeleteVisible,
    onHideForm,
  } = props;

  const [postData, setPostData] = useState<Partial<Post>>({
    id: 0,
    userId: 0,
    title: '',
    body: '',
  });

  const clearState = () => {
    setPostData({
      id: 0,
      userId: 0,
      title: '',
      body: '',
    });
  };

  const onCancelButton = () => {
    clearState();
    onHideForm();
  };

  const handleChange = (event: Event) => {
    const { name, value } = event.target;

    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const createPost = () => {
    const { userId, title, body } = postData;

    createNewPostOnServer(userId, title, body);
    clearState();
    onHideForm();
  };

  const updatePost = () => {
    const { id, title, body } = postData;

    updatePostByIdOnServer(id, title, body);
    clearState();
    onHideForm();
  };

  const deletePost = () => {
    deletePostByIdFromServer(postData.id);
    clearState();
    onHideForm();
  };

  return (
    <form className="Form field">
      {isCreateVisible && (
        <>
          <h2>Create new post</h2>
          <input
            type="number"
            name="userId"
            placeholder="Enter user id"
            className="Form__input input"
            value={postData.userId}
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Enter the title"
            className="Form__input input"
            value={postData.title}
            onChange={handleChange}
          />
          <textarea
            name="body"
            placeholder="Enter the body"
            className="Form__input input"
            value={postData.body}
            onChange={handleChange}
          />
          <div className="Form__buttons-container">
            <Button
              name="Cancel"
              onClick={onCancelButton}
            />
            <SubmitButton onClick={createPost} />
          </div>
        </>
      )}
      {isUpdateVisible && (
        <>
          <h2>Update post</h2>
          <input
            type="number"
            name="id"
            placeholder="Enter post id"
            className="Form__input input"
            value={postData.id}
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Enter the title"
            className="Form__input input"
            value={postData.title}
            onChange={handleChange}
          />
          <textarea
            name="body"
            placeholder="Enter the body"
            className="Form__input input"
            value={postData.body}
            onChange={handleChange}
          />
          <div className="Form__buttons-container">
            <Button
              name="Cancel"
              onClick={onCancelButton}
            />
            <SubmitButton onClick={updatePost} />
          </div>
        </>
      )}
      {isDeleteVisible && (
        <>
          <h2>Delete post</h2>
          <input
            type="number"
            name="id"
            placeholder="Enter post id"
            className="Form__input input"
            value={postData.id}
            onChange={handleChange}
          />
          <div className="Form__buttons-container">
            <Button
              name="Cancel"
              onClick={onCancelButton}
            />
            <SubmitButton onClick={deletePost} />
          </div>
        </>
      )}
    </form>
  );
};
