import * as postMethods from "../api/posts/index.mjs";

function postTemplateA(postData) {
  const post = document.createElement("div");
  post.classList.add("post");
  post.innerHTML = `<div>
  <div href="/post/index.html?id=${postData.id}" class="post text-primary" id=${postData.id}>${postData.title}</div>
  </div>`;

  const idInput = document.querySelector("#idInput");
  idInput.value = postData.id;

  if (postData.media) {
    const img = document.createElement("img");
    img.classList.add("image-size");
    img.src = postData.media;
    img.alt = `Image of ${postData.title}`;
    post.append(img);
  }
  if (postData.body) {
    const body = document.createElement("p");
    body.innerText = postData.body;

    post.append(body);
  }

  return post;
}

function renderPostTemplate(postData, parent) {
  parent.append(postTemplateA(postData));
}

async function template() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  const post = await postMethods.getPost(id);
  const container = document.querySelector("#singlePost");
  renderPostTemplate(post, container);
}

template();
