function setPage() {
  let pageTemplate = document.getElementById('page-template').innerHTML;
  let templateFn = _.template(pageTemplate);
  let pageContainer = document.querySelector('main');
  let templateHTML = templateFn();
  pageContainer.innerHTML += templateHTML;
}

function createPost() {
  let postTitle = document.getElementById('postTtile').value;
  let postBody = document.getElementById('postText').value;
  let postAuthor = document.getElementById('postAuthor').value;

  let postTemplate = document.getElementById('post-template').innerHTML;
  let templateFn = _.template(postTemplate);
  let postContainer = document.getElementById('post');
  let templateHTML = templateFn({title: postTitle, body: postBody, author: postAuthor});
  postContainer.innerHTML += templateHTML;
}

setPage();
