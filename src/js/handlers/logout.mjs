import * as storage from "../storage/index.mjs";

export function logoutListener() {
  const logoutButton = document.querySelector("#logout");

  logoutButton.addEventListener("click", () => {
    console.log("logout button is connected");
    storage.remove("token");
    storage.remove("profile");
    location.href = "/";
  });
}
