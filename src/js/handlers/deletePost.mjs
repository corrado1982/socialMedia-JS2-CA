import { removePost } from "../api/posts/delete.mjs";

export async function removePostListener() {
  const form = document.querySelector("#editPost");
  const deleteButton = document.querySelector("#removeButton");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  //   if (form) {
  deleteButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("remove button here");
    removePost(id);
  });
  //   }
}
