(function() {
  var shareButton = document.getElementById('share__button'),
      shareSocialNetworks = document.getElementById('share__social-networks');
  
  document.getElementsByClassName('share')[0].onclick = function(e) {
    var target = e.target;
    
    while(target != this) {
      
      if (target == shareButton) {
        shareSocialNetworks.classList.toggle('open');
      }
      
      target = target.parentNode; // Чтобы функция не повесила всю страницу
    }
  }
}())