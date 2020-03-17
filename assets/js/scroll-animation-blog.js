let isScrolling = false;

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
let columnsContainer = document.getElementById('columns-container');

let firstColumn = document.getElementById('first-column'),
  secondColumn = document.getElementById('second-column'),
  thirdColumn = document.getElementById('third-column');

function scrolling(e) {

  if (isPartiallyVisible(columnsContainer)) {
    let listItems = document.getElementsByClassName('blog__post'),
      widgets = thirdColumn.getElementsByClassName('blog__widget');

    for (let i = 0; i < listItems.length; i++) {

      if (isPartiallyVisible(listItems[i])) {
        listItems[i].classList.add('active');
      } else {
        listItems[i].classList.remove('active');
      }
    }
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

// Функция проверяет виден ли элемент частично
function isPartiallyVisible(el) {
  let elementBoundary = el.getBoundingClientRect();

  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;
  let height = elementBoundary.height;

  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}
// Функция проверяет виден ли элемент полностью
function isFullyVisible(el) {
  let elementBoundary = el.getBoundingClientRect();

  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;

  return ((top >= 0) && (bottom <= window.innerHeight));
}