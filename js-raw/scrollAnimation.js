(function () {

  var isScrolling = false;

  window.addEventListener("scroll", throttleScroll, false);

  function throttleScroll(e) {
    if (isScrolling == false) {
      window.requestAnimationFrame(function () {
        scrolling(e);
        isScrolling = false;
      });
    }
    isScrolling = true;
  }

  document.addEventListener("DOMContentLoaded", scrolling, false);

  // Переменные для scrolling()
  var columnsContainer = document.getElementById('columns-container');

  var firstColumn = document.getElementById('first-column'),
    secondColumn = document.getElementById('second-column'),
    thirdColumn = document.getElementById('third-column');


  function scrolling(e) {

    if (isPartiallyVisible(columnsContainer)) {
      var listItems,
        sidebarAnimation;

      if (firstColumn.classList.contains('products__column')) {
        listItems = document.getElementsByClassName('products__item');
      } else if (firstColumn.classList.contains('blog__posts-column')) {
        listItems = document.getElementsByClassName('blog__post');
      }

      if (thirdColumn.classList.contains('blog__posts-column_sidebar')) {
        sidebarAnimation = true;
        var widgets = thirdColumn.getElementsByClassName('blog__widget');
      } else {
        sidebarAnimation = false;
      }

      for (let i = 0; i < listItems.length; i++) {

        if (isPartiallyVisible(listItems[i])) {
          listItems[i].classList.add('active');
        } else {
          listItems[i].classList.remove('active');
        }
      }

      if (sidebarAnimation) {
        for (let i = 0; i < widgets.length; i++) {

          if (isPartiallyVisible(thirdColumn)) {
            thirdColumn.classList.add('active');
          } else {
            thirdColumn.classList.remove('active');
          }
          
          if (isPartiallyVisible(thirdColumn.getElementsByClassName('blog__search')[0])) {
            thirdColumn.getElementsByClassName('blog__search')[0].classList.add('active');
          } else {
            thirdColumn.getElementsByClassName('blog__search')[0].classList.remove('active');
          }

          if (isPartiallyVisible(widgets[i])) {
            widgets[i].classList.add('active');
          } else {
            widgets[i].classList.remove('active');
          }
        }
      }

    }

  }
  // Функция проверяет виден ли элемент частично
  function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
  }
  // Функция проверяет виден ли элемент полностью
  function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
  }
}())
