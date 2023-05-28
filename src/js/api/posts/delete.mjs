import { authFetch } from "../authFetch.mjs";

import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/posts";
const method = "delete";

export async function removePost(id) {
  if (!id) {
    throw new Error("Delete requires a postId");
  }
  const deletePostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(deletePostURL, {
    method,
  });

  if (!response.ok) {
    alert("Sorry, you can delete only your posts...");
  } else {
    alert("Now your post is deleted");
    location.href = "/posts";
  }

  return await response.json();

  //   console.log(post);
}
