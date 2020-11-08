let isScrolling = false;

window.addEventListener('scroll', throttleScroll, false);
document.addEventListener('DOMContentLoaded', scrolling, false);

function throttleScroll() {
	!isScrolling 
		?
			window.requestAnimationFrame(() => {
				scrolling();
				isScrolling = false;
			})
		: 
			isScrolling = true;
}

// Переменные для scrolling()
const columnsContainer = document.getElementById('columns-container');

const firstColumn = document.getElementById('first-column'),
	  secondColumn = document.getElementById('second-column'),
	  thirdColumn = document.getElementById('third-column');

function scrolling() {
    if (isPartiallyVisible(columnsContainer)) {
        let listItems = document.querySelectorAll('.products__item');

		listItems.forEach = [].forEach;

		listItems.forEach(el => {				
			isPartiallyVisible(el) 
				?
					el.classList.add('active')
				:
					el.classList.remove('active')
		});
    }
}

// Функция проверяет виден ли элемент частично
function isPartiallyVisible(el) {
  let { top, bottom, height } = el.getBoundingClientRect();

  return (top + height >= 0) && (height + window.innerHeight >= bottom);
}

// Функция проверяет виден ли элемент полностью
function isFullyVisible(el) {
  let { top, bottom } = el.getBoundingClientRect();

  return (top >= 0) && (bottom <= window.innerHeight);
}