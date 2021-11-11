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

export const Menu: React.FC<Props> = (props) => {
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
  }, []);

  return (
    <main className="Menu App__Menu box">
      <div className="Menu__button-container">
        <Button
          name="Update list"
          onClick={getListOfPosts}
        />
        <Button
          name={isListVisible ? 'Hide list of posts' : 'Show list of posts'}
          onClick={changeVisibilityOfList}
        />
        <Button
          name="New post"
          onClick={onCreateVisible}
          disabled={isUpdateVisible || isDeleteVisible}
        />
        <Button
          name="Update post"
          onClick={onUpdateVisible}
          disabled={isCreateVisible || isDeleteVisible}
        />
        <Button
          name="Delete post"
          onClick={onDeleteVisible}
          disabled={isCreateVisible || isUpdateVisible}
        />
      </div>
      {isListVisible && (
        <ListOfPosts posts={listOfPosts} />
      )}
    </main>
  );
};
