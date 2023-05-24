// import { setRegisterFormListener } from "./handlers/register.mjs";
// import { setLoginFormListener } from "./handlers/login.mjs";

import * as listeners from "./handlers/index.mjs";
import { redirectBasedOnLogin } from "./api/helpers/auth.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
// import { renderPostTemplate } from "./templates/index.mjs";
import { createPost } from "./api/posts/index.mjs";
import { isloggedIn } from "./api/helpers/storage.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
  listeners.setLoginFormListener();
} else if (path === "/profile/register/") {
  listeners.setRegisterFormListener();
} else if (path === "/post/create/") {
  listeners.setCreatePostFormListener();
  listeners.logoutListener();
} else if (path === "/post/edit/") {
  listeners.setUpdatePostListener();
  listeners.logoutListener();
} else if (path === "/posts/") {
  listeners.logoutListener();
} else if (path === "/profile/") {
  listeners.logoutListener();
}
redirectBasedOnLogin(path);

// createPost({
//   title: "heja2",
//   body: "another post2",
// });
