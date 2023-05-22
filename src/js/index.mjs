// import { setRegisterFormListener } from "./handlers/register.mjs";
// import { setLoginFormListener } from "./handlers/login.mjs";

import { redirectBasedOnLogin } from "./api/helpers/auth.mjs";
import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
// import { renderPostTemplate } from "./templates/index.mjs";
import { createPost } from "./api/posts/index.mjs";

const path = location.pathname;

redirectBasedOnLogin(path);

if (path === "/profile/login/") {
  listeners.setLoginFormListener();
} else if (path === "/profile/register/") {
  listeners.setRegisterFormListener();
} else if (path === "/post/create/") {
  listeners.setCreatePostFormListener();
} else if (path === "/post/edit/") {
  listeners.setUpdatePostListener();
}

// async function testTemplate() {
//   const posts = await postMethods.getPosts();
//   const container = document.querySelector("#post");
//   templates.renderPostTemplates(posts, container);
// }

// testTemplate();

// createPost({
//   title: "heja2",
//   body: "another post2",
// });
