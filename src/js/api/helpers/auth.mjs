import { isloggedIn } from "./storage.mjs";

// This function is checking if the path ("location.pathname")
// is matching with one of those pathname in case is Loggedin will show the posts page,
// if is not it will be sent to the page where can login or register
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
