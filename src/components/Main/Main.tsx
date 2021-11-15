import React, { useEffect, useState } from 'react';
import { getListOfPostsFromServer } from '../../requests';
import { Button } from '../Button';
import { ListOfPosts } from '../ListOfPosts';

type Props = {
  onCreateVisible: () => void;
  onUpdateVisible: () => void;
  onDeleteVisible: () => void;
  isFormVisible: boolean;
};

export const Main: React.FC<Props> = (props) => {
  const {
    onCreateVisible,
    onDeleteVisible,
    onUpdateVisible,
    isFormVisible,
  } = props;

  const [listOfPosts, setListOfPosts] = useState<Post[] | null>([]);
  const [isListVisible, setIsListVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const changeVisibilityOfList = () => {
    setIsListVisible(!isListVisible);
  };

  const getListOfPosts = (async () => {
    const posts = await getListOfPostsFromServer();

    if (posts) {
      const postsList = posts.reverse();

      setListOfPosts(postsList);
    }
  });

  useEffect(() => {
    getListOfPosts();

    const updateList = async () => {
      setIsLoading(true);
      await getListOfPosts();
      setIsLoading(false);
    };

    updateList();
  }, [isFormVisible]);

  return (
    <main className="Main App__Main box">
      <div className="Main__button-container">
        <Button
          name={isListVisible ? 'Hide list of posts' : 'Show list of posts'}
          onClick={changeVisibilityOfList}
          className={isLoading ? 'is-loading' : 'is-link'}
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
