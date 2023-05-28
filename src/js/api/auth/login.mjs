import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "post";
// fetching and posting access token and user data
export async function login(profile) {
  const loginURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const { accessToken, ...user } = await response.json();
  // saving token and profile to the storage
  storage.save("token", accessToken);
  storage.save("profile", user);

  if (!response.ok) {
    alert("Password or Username is wrong");
    throw new Error("Password or Username is wrong");
  }
  location.href = "/posts";
}
