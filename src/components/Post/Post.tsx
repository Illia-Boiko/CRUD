import React from 'react';

type Props = {
  post: Post;
};

export const Post: React.FC<Props> = (props) => {
  const { post } = props;

  return (
    <li
      className="Post content is-normal"
    >
      <span className="Post__id">
        {`Post id: ${post.id}`}
      </span>
      <h2 className="Post__title">
        {post.title}
      </h2>
      <span className="Post__body">
        {post.body}
      </span>
    </li>
  );
};
