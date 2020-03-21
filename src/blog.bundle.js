/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

if (document.body.offsetWidth <= 850) {
  document.getElementsByClassName('wrapper')[0].style.marginTop =
    document.getElementsByClassName('nav')[0].offsetHeight + 'px';
}

let navSearch = document.getElementsByClassName('nav-search')[0],
  searchCloseButton = document.getElementById('close_search_button'),
  searchOpenButton = document.getElementById('open_search_button');

bodyShadow = document.createElement('div');
bodyShadow.classList.add('body-shadow');
bodyShadow.id = 'body-shadow';

document.getElementsByClassName('wrapper')[0].appendChild(bodyShadow);

bodyShadow = document.getElementById('body-shadow');

let dropDownNav = document.getElementsByClassName('nav__menu')[0],
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
      setTimeout(function () {
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

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(8);
module.exports = __webpack_require__(9);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

let sidebar = document.getElementsByClassName('blog__posts-column_sidebar')[0],
  sidebarOpenButton = document.getElementsByClassName('blog__sidebar-open-button')[0];


sidebarOpenButton.addEventListener('click', function () {
  sidebarOpenButton.classList.toggle('open');
  sidebar.classList.toggle('open');
})

/***/ }),
/* 9 */
/***/ (function(module, exports) {

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

/***/ })
/******/ ]);