(function () {
  var shareButton = document.getElementById('share__button'),
    shareSocialNetworks = document.getElementById('share__social-networks');

  shareButton.addEventListener('click', function () {
    shareSocialNetworks.classList.toggle('open');
  })
}())