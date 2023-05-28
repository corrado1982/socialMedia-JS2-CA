import { authFetch } from "../authFetch.mjs";

import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/posts";
const method = "post";

export async function createPost(postData) {
  const createPostURL = API_SOCIAL_URL + action;

  const response = await authFetch(createPostURL, {
    method,
    body: JSON.stringify(postData),
  });
  if (response.ok) {
    alert("Your post is been created");
    location.href = "/posts";
  }

  return await response.json();
}
