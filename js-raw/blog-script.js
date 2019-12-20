(function() {
  var blog = document.getElementsByClassName('blog')[0],
      sidebar = document.getElementsByClassName('blog__posts-column_sidebar')[0];
  
  blog.onclick = function(e) {
    var target = e.target;
    
    while (target != this) {
      
      if (target.classList.contains('blog__sidebar-open-button')) {
        target.classList.toggle('open');
        sidebar.classList.toggle('open');
      }
      
      target = target.parentElement;
    }
  }
}())