(function () {
  var navMenuItemSearch = document.getElementsByClassName('nav-menu__item_search')[0];
  var navSearch = document.getElementsByClassName('nav-search')[0];

  var navSearchInputWidth = document.getElementsByClassName('nav-menu__menu')[0].offsetWidth - 45;
  document.getElementsByClassName('nav-search__input')[0].style.width = navSearchInputWidth + 'px';


  navMenuItemSearch.onclick = function () {
    navSearch.classList.toggle('nav-search_open');
  }
}())
