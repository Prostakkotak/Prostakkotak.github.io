(function () {
  if (document.body.offsetWidth <= 850) {
    document.getElementsByClassName('wrapper')[0].style.marginTop = 
      document.getElementsByClassName('nav')[0].offsetHeight + 'px';
  }

  var navSearch = document.getElementsByClassName('nav-search')[0],
    searchCloseButton = document.getElementById('close_search_button'),
    searchOpenButton = document.getElementById('open_search_button');

  bodyShadow = document.createElement('div');
  bodyShadow.classList.add('body-shadow');
  bodyShadow.id = 'body-shadow';

  document.getElementsByClassName('wrapper')[0].appendChild(bodyShadow);

  bodyShadow = document.getElementById('body-shadow');

  var dropDownNav = document.getElementsByClassName('nav__menu')[0],
    dropDownNavSearch = document.getElementsByClassName('nav-search')[0];

  document.getElementsByClassName('nav')[0].onclick = function (e) {
    if (e.target.id == 'open_search_button' || e.target.id == 'close_search_button') {
      navSearch.classList.toggle('nav-search_open');
      searchCloseButton.classList.toggle('current');
      searchOpenButton.classList.toggle('current');
    }

    if (e.target.id == 'trigram' || e.target.classList.contains('trigram__line')) {
      trigram.classList.toggle('open');
      dropDownNav.classList.toggle('open');
      bodyShadow.classList.toggle('active')

      tmpNavSearch = navSearch.cloneNode(true)

      if (dropDownNav.classList.contains('open')) {
        dropDownNav.appendChild(tmpNavSearch)

      } else {
        setTimeout(function() {
          dropDownNav.removeChild(document.getElementsByClassName('nav-search')[0])
        }, 600)
      }
    }
  }

  addEventListener('resize', function () {
    if (document.body.offsetWidth <= 850) { // Если окно <= 850px то открытая строка поиска закрывается
      if (searchCloseButton.classList.contains('current')) {
        navSearch.classList.toggle('nav-search_open');
        searchCloseButton.classList.toggle('current');
        searchOpenButton.classList.toggle('current');
      }

      if (dropDownNav.classList.contains('open')) {
        dropDownNav.appendChild(tmpNavSearch)
        bodyShadow.classList.add('active');
      }

      document.getElementsByClassName('wrapper')[0].style.marginTop = 
      document.getElementsByClassName('nav')[0].offsetHeight + 'px';
    } else {
      if (dropDownNav.getElementsByClassName('nav-search')[0]) {
        dropDownNav.getElementsByClassName('nav-search')[0].remove()
      }
      if (bodyShadow.classList.contains('active')) {
        bodyShadow.classList.remove('active');
      }

      document.getElementsByClassName('wrapper')[0].style.marginTop = '';
    }
  })
}())
