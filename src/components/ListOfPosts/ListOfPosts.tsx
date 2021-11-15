import React, { Fragment } from 'react';
import { Post } from '../Post';

type Props = {
  posts: Post[] | null;
};

export const ListOfPosts: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <ul className="ListOfPosts">
      {posts?.map(post => (
        <Fragment key={post.id}>
          <Post post={post} />
        </Fragment>
      ))}
    </ul>
  );
};
