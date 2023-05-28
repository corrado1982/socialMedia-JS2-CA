import * as postMethods from "../api/posts/index.mjs";

function postTemplateB(postData) {
  const posts = document.createElement("div");
  posts.classList.add("posts");

  posts.innerHTML = `<div class="card">
  <a href="/post/index.html?id=${postData.id}" class="post-title" id=${postData.id}>${postData.title} </a> 
  <p class="post-body">${postData.body}</p>
  <div id="postsId" value="${postData.id}">ID: ${postData.id}</div>
 
  <p>created: ${postData.created}</p>
  </div>`;

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

async function templates() {
  const posts = await postMethods.getPosts();
  const container = document.querySelector("#post");
  renderPostTemplates(posts, container);
}

templates();
