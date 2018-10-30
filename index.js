function setPage() {
  let pageTemplate = document.getElementById('page-template').innerHTML;
  let templateFn = _.template(pageTemplate);
  let pageContainer = document.querySelector('main');
  let templateHTML = templateFn();
  pageContainer.innerHTML += templateHTML;
}

setPage();
