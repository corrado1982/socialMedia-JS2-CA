import { API_SOCIAL_URL } from "../constants.mjs";

// fetching with POST method to get registered
const action = "/auth/register";
const method = "post";

// profile data will be stringified and sent as a POST method
export async function register(profile) {
  const registerURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();
  alert("You are now registered!");
  return result;
}
