let sidebar = document.getElementsByClassName('blog__posts-column_sidebar')[0],
  sidebarOpenButton = document.getElementsByClassName('blog__sidebar-open-button')[0];


sidebarOpenButton.addEventListener('click', function () {
  sidebarOpenButton.classList.toggle('open');
  sidebar.classList.toggle('open');
})