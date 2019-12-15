(function () {
  var navSearch = document.getElementsByClassName('nav-search')[0],
      searchCloseButton = document.getElementById('close_search_button'),
      searchOpenButton = document.getElementById('open_search_button');
  
  var dropDownNav = document.getElementsByClassName('nav__menu')[0],
      dropDownNavSearch = document.getElementsByClassName('nav-search')[0];

  document.getElementsByClassName('nav')[0].onclick = function(e) {
    if (e.target.id == 'open_search_button' || e.target.id == 'close_search_button') {
      navSearch.classList.toggle('nav-search_open');
      searchCloseButton.classList.toggle('current');
      searchOpenButton.classList.toggle('current');
    }
    
    if (e.target.id == 'trigram' || e.target.classList.contains('trigram__line')) {
      trigram.classList.toggle('open');
      dropDownNav.classList.toggle('open');
      dropDownNavSearch.classList.toggle('open');
    }
  }
}())
