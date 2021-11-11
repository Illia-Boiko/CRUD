// const URL = 'https://jsonplaceholder.typicode.com/posts';
const URL = 'https://mate.academy/students-api/posts';

export async function getListOfPostsFromServer(): Promise<Post[] | null> {
  const listOfTodos = await fetch(URL);

  if (listOfTodos.ok) {
    return listOfTodos.json();
  }

  return null;
}

export const createNewPostOnServer = (postUserId = 0, postTitle = '', postBody = '') => {
  return (
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        userId: postUserId,
        title: postTitle,
        body: postBody,
      }),
    })
  );
};

export const deletePostByIdFromServer = (postId = 0) => {
  return (
    fetch(`${URL}/${postId}`, {
      method: 'DELETE',
    })
  );
};

export const updatePostByIdOnServer = (postId = 0, postTitle = '', postBody = '') => {
  return (
    fetch(`${URL}/${postId}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
      }),
    })
  );
};
