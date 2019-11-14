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
      
      if (firstColumn.classList.contains('content__images-column')) {
        listItems = document.getElementsByClassName('content__image-wrapper');
      } else if (firstColumn.classList.contains('blog__content-column')) {
        listItems = document.getElementsByClassName('blog__post');
      }
      
      if (thirdColumn.classList.contains('blog__content-column_sidebar')) {
        sidebarAnimation = true;
      } else {
        sidebarAnimation = false;
      }
      
      for (let i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];
        
        if (sidebarAnimation) {
          if (isPartiallyVisible(thirdColumn)) {
            thirdColumn.classList.add('active');
          } else {
            thirdColumn.classList.remove('active');
          }
        }
        
        if (isPartiallyVisible(listItem)) {
          listItem.classList.add('active');
        } else {
          listItem.classList.remove('active');
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
