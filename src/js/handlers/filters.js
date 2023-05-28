//                SEARCH FORM

const searchBarr = document.getElementById("searchBar");
const postCards = document.getElementsByClassName("posts");

const searchPosts = () => {
  const searchTerm = searchBarr.value.toLowerCase();

  Array.from(postCards).forEach((card) => {
    const postTitle = card
      .querySelector(".post-title")
      .textContent.toLowerCase();
    const postBody = card.querySelector(".post-body").textContent.toLowerCase();

    if (postTitle.includes(searchTerm) || postBody.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};

searchBarr.addEventListener("input", searchPosts);

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
