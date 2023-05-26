// import * as templates from "./templates/index.mjs";
import * as postMethods from "../api/posts/index.mjs";

function postTemplateB(postData) {
  const posts = document.createElement("div");
  posts.classList.add("posts");

  posts.innerHTML = `<a href="/post/index.html?id=${postData.id}" class="post" id=${postData.id}>${postData.title} </a> <p>created ${postData.created}</p>`;

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
