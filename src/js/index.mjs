// import * as constants from "./api/constants.mjs";

// console.log(constants.API_SOCIAL_URL);

import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import * as post from "./api/posts/index.mjs";

// import * as posts from "./api/posts/index.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
  setLoginFormListener();
} else if (path === "/profile/register/") {
  setRegisterFormListener();
}

// post.createPost();
// post.updatePost();
// post.removePost();
// post.getPost();
// post.getPosts().then(console.log);

post.getPost(6066).then(console.log);
