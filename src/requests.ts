const URL = 'https://yourtestapi.com/api/posts/';

export async function getListOfPosts(): Promise<Post[] | null> {
  const listOfTodos = await fetch(URL);

  if (listOfTodos.ok) {
    return listOfTodos.json();
  }

  return null;
}
