import { isloggedIn } from "./storage.mjs";
import { logoutListener } from "../../handlers/logout.mjs";

export function redirectBasedOnLogin(path) {
  if (isloggedIn()) {
    if (path === "/profile/login/" || path === "/profile/register/") {
      location.href = "/posts/";
    }
  } else {
    if (
      path !== "/" &&
      path !== "/profile/login/" &&
      path !== "/profile/register/"
    ) {
      location.href = "/";
    }
  }
}
