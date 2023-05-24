export function postTemplateA(postData) {
  const post = document.createElement("div");
  post.classList.add("post");
  post.innerHTML = `<div href="/post/index.html?id=${postData.id}" class="post" id=${postData.id}>${postData.title}</div>`;

  if (postData.media) {
    const img = document.createElement("img");
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

export function postTemplateB(postData) {
  const posts = document.createElement("div");
  posts.classList.add("posts");

  posts.innerHTML = `<a href="/post/index.html?id=${postData.id}" class="post" id=${postData.id}>${postData.title}</a>`;

  if (postData.media) {
    const img = document.createElement("img");
    img.src = postData.media;
    img.alt = `Image of ${postData.title}`;
    posts.append(img);
  }

  return posts;
}

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplateA(postData));
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplateB));
}
