import * as postMethods from "../api/posts/index.mjs";

function postTemplateA(postData) {
  const form = document.querySelector("#editPost");

  form.title.value = postData.title;
  form.body.value = postData.body;
  form.id.value = postData.id;
  form.media.value = postData.media;

  const post = document.createElement("div");
  post.classList.add("post-img");

  form.body.value = postData.body;
  if (postData.media) {
    const img = document.createElement("img");
    img.classList.add("image-size");
    img.src = postData.media;
    img.alt = `Image of ${postData.title}`;
    post.append(img);
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
