import * as listeners from "./handlers/index.mjs";
import { redirectBasedOnLogin } from "./api/helpers/auth.mjs";

import * as templates from "./templates/index.mjs";

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
