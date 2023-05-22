import { isloggedIn } from "./storage.mjs";

export function redirectBasedOnLogin(path) {
  if (isloggedIn()) {
    if (path === "/profile/login/" || path === "/profile/register/") {
      location.href = "/posts/";
    }
  } else {
    if (path === "/posts/" || path === "/posts/index.html") {
      location.href = "/profile/login/";
    }
  }
}
