// import { setRegisterFormListener } from "./handlers/register.mjs";
// import { setLoginFormListener } from "./handlers/login.mjs";

import * as listeners from "./handlers/index.mjs";
import { redirectBasedOnLogin } from "./api/helpers/auth.mjs";
import { updatePost } from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
// import { renderPostTemplate } from "./templates/index.mjs";
import { createPost } from "./api/posts/index.mjs";
import { isloggedIn } from "./api/helpers/storage.mjs";

import { removePost } from "./api/posts/index.mjs";

import * as storage from "../js/storage/index.mjs";

import { getName } from "./api/helpers/storage.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
  listeners.setLoginFormListener();
} else if (path === "/profile/register/") {
  listeners.setRegisterFormListener();
} else if (path === "/post/create/") {
  listeners.setCreatePostFormListener();
  listeners.logoutListener();
} else if (path === "/post/index.html") {
  listeners.setUpdatePostListener();
  listeners.removePostListener();
  listeners.logoutListener();
} else if (path === "/posts/") {
  listeners.logoutListener();
} else if (path === "/profile/") {
  listeners.logoutListener();
}
redirectBasedOnLogin(path);

export async function serchById() {
  const form = document.querySelector("searchById");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      console.log("id button here");
      console.log(post);
    });
  }
}
serchById();
