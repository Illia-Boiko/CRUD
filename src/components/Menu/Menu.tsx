import React, { useState } from 'react';
import { getListOfPosts } from '../../requests';

export const Menu: React.FC = () => {
  const [listOfPodts, setListOfPosts] = useState<Post[] | null>([]);
  const list = (async () => {
    const posts = await getListOfPosts();

    setListOfPosts(posts);
  });

  return (
    <main className="Menu App__Menu box">
      <button type="button" onClick={list}>
        ok
      </button>
      <ul>
        {listOfPodts?.map(item => (
          <li key={item.id}>
            {item.id}
          </li>
        ))}
      </ul>
    </main>
  );
};
