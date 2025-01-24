const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchPosts() {
  const response = await fetch(`${BASE_URL}/posts`);
  if (!response.ok) throw new Error("Failed to fetch posts");
  return response.json();
}

export async function fetchPostById(id) {
  const response = await fetch(`${BASE_URL}/posts/${id}`);
  if (!response.ok) throw new Error("Failed to fetch post");
  return response.json();
}
