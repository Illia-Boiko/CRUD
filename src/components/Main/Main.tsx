import React, { useEffect, useState } from 'react';
import { getListOfPostsFromServer } from '../../requests';
import { Button } from '../Button';
import { ListOfPosts } from '../ListOfPosts';

type Props = {
  onCreateVisible: () => void;
  onUpdateVisible: () => void;
  onDeleteVisible: () => void;
  isCreateVisible: boolean;
  isUpdateVisible: boolean;
  isDeleteVisible: boolean;
};

export const Main: React.FC<Props> = (props) => {
  const {
    onCreateVisible,
    onDeleteVisible,
    onUpdateVisible,
    isCreateVisible,
    isUpdateVisible,
    isDeleteVisible,
  } = props;

  const [listOfPosts, setListOfPosts] = useState<Post[] | null>([]);
  const [isListVisible, setIsListVisible] = useState(false);

  const changeVisibilityOfList = () => {
    setIsListVisible(!isListVisible);
  };

  const getListOfPosts = (async () => {
    const posts = await getListOfPostsFromServer();

    setListOfPosts(posts);
  });

  useEffect(() => {
    getListOfPosts();

    // eslint-disable-next-line no-console
    console.log('test');
  }, [isCreateVisible, isUpdateVisible, isDeleteVisible]);

  return (
    <main className="Main App__Main box">
      <div className="Main__button-container">
        <Button
          name="Update list"
          onClick={getListOfPosts}
          className="is-info"
        />
        <Button
          name={isListVisible ? 'Hide list of posts' : 'Show list of posts'}
          onClick={changeVisibilityOfList}
        />
        <Button
          name="New post"
          onClick={onCreateVisible}
        />
        <Button
          name="Update post"
          onClick={onUpdateVisible}
        />
        <Button
          name="Delete post"
          onClick={onDeleteVisible}
        />
      </div>
      {isListVisible && (
        <>
          <ListOfPosts posts={listOfPosts} />
          <a
            href="#top"
            id="bottom"
            className="button to-start-button is-light"
          >
            To start
          </a>
        </>
      )}
    </main>
  );
};
