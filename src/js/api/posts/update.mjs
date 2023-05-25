import { authFetch } from "../authFetch.mjs";

import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/posts";
const method = "put";

export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("Update requires a postId");
  }
  const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

  const response = await authFetch(updatePostURL, {
    method,
    body: JSON.stringify(postData),
  });
  console.log(response);
  return await response.json();
}
