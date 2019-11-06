(function() {
  var blog = document.getElementsByClassName('blog')[0];
  
  blog.onclick = function(e) {
    var target = e.target;
    
    while (target != this) {
      
      if (target.classList.contains('blog__text_social-action_like')) {
        target.classList.toggle('blog__text_social-action_liked');
      }
      
      target = target.parentElement;
    }
  }
}())