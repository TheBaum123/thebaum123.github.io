let siteTitle = "TheBaum's website";
window.addEventListener('blur', () => {
  siteTitle = document.title;
  document.title = 'Come back! :c';
});

window.addEventListener('focus', () => {
  document.title = siteTitle;
});