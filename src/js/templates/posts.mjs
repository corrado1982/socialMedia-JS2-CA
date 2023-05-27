// import * as templates from "./templates/index.mjs";
import * as postMethods from "../api/posts/index.mjs";

function postTemplateB(postData) {
  const posts = document.createElement("div");
  posts.classList.add("posts");

  posts.innerHTML += `<div class="card">
  <a href="/post/index.html?id=${postData.id}" class="post-title" id=${postData.id}>${postData.title} </a> 
  <p class="post-body">${postData.body}</p>
  <div id="postsId" value="${postData.id}">ID: ${postData.id}</div>
 
  <p>created: ${postData.created}</p>
  </div>`;
  //<img class="image-size" src=${postData.media} alt="Image of ${postData.title}" ></img>
  if (postData.media) {
    const img = document.createElement("img");
    img.classList.add("image-size");
    img.src = postData.media;
    img.alt = `Image of ${postData.title}`;
    posts.append(img);
  }

  return posts;
}
function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplateB));
}

async function testTemplates() {
  const posts = await postMethods.getPosts();
  const container = document.querySelector("#post");
  renderPostTemplates(posts, container);
}

testTemplates();
//                SEARCH FORM
//             ---------------------------

const searchBar = document.getElementById("searchBar");
const postCards = document.getElementsByClassName("posts");

// function to perform the search
const searchPosts = () => {
  const searchTerm = searchBar.value.toLowerCase();

  // loop through all post cards
  Array.from(postCards).forEach((card) => {
    const postTitle = card
      .querySelector(".post-title")
      .textContent.toLowerCase();
    const postBody = card.querySelector(".post-body").textContent.toLowerCase();

    // checks if search matches
    if (postTitle.includes(searchTerm) || postBody.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};
// add event listener for search input
searchBar.addEventListener("input", searchPosts);
//                   SEARCH BY ID FORM

const searchIdForm = document.getElementById("searchBarId");

const searchId = () => {
  const idInput = searchIdForm.value;

  console.log(idInput);
  Array.from(postCards).forEach((card) => {
    const postId = card.querySelector("#postsId").textContent.toLowerCase();

    if (postId.includes(idInput)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};
searchIdForm.addEventListener("input", searchId);
