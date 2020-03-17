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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/header.js":
/*!**********************!*\
  !*** ./js/header.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (document.body.offsetWidth <= 850) {\r\n  document.getElementsByClassName('wrapper')[0].style.marginTop =\r\n    document.getElementsByClassName('nav')[0].offsetHeight + 'px';\r\n}\r\n\r\nlet navSearch = document.getElementsByClassName('nav-search')[0],\r\n  searchCloseButton = document.getElementById('close_search_button'),\r\n  searchOpenButton = document.getElementById('open_search_button');\r\n\r\nbodyShadow = document.createElement('div');\r\nbodyShadow.classList.add('body-shadow');\r\nbodyShadow.id = 'body-shadow';\r\n\r\ndocument.getElementsByClassName('wrapper')[0].appendChild(bodyShadow);\r\n\r\nbodyShadow = document.getElementById('body-shadow');\r\n\r\nlet dropDownNav = document.getElementsByClassName('nav__menu')[0],\r\n  dropDownNavSearch = document.getElementsByClassName('nav-search')[0];\r\n\r\ndocument.getElementsByClassName('nav')[0].onclick = function (e) {\r\n  if (e.target.id == 'open_search_button' || e.target.id == 'close_search_button') {\r\n    navSearch.classList.toggle('nav-search_open');\r\n    searchCloseButton.classList.toggle('current');\r\n    searchOpenButton.classList.toggle('current');\r\n  }\r\n\r\n  if (e.target.id == 'trigram' || e.target.classList.contains('trigram__line')) {\r\n    trigram.classList.toggle('open');\r\n    dropDownNav.classList.toggle('open');\r\n    bodyShadow.classList.toggle('active')\r\n\r\n    tmpNavSearch = navSearch.cloneNode(true)\r\n\r\n    if (dropDownNav.classList.contains('open')) {\r\n      dropDownNav.appendChild(tmpNavSearch)\r\n\r\n    } else {\r\n      setTimeout(function () {\r\n        dropDownNav.removeChild(document.getElementsByClassName('nav-search')[0])\r\n      }, 600)\r\n    }\r\n  }\r\n}\r\n\r\naddEventListener('resize', function () {\r\n  if (document.body.offsetWidth <= 850) { // Если окно <= 850px то открытая строка поиска закрывается\r\n    if (searchCloseButton.classList.contains('current')) {\r\n      navSearch.classList.toggle('nav-search_open');\r\n      searchCloseButton.classList.toggle('current');\r\n      searchOpenButton.classList.toggle('current');\r\n    }\r\n\r\n    if (dropDownNav.classList.contains('open')) {\r\n      dropDownNav.appendChild(tmpNavSearch)\r\n      bodyShadow.classList.add('active');\r\n    }\r\n\r\n    document.getElementsByClassName('wrapper')[0].style.marginTop =\r\n      document.getElementsByClassName('nav')[0].offsetHeight + 'px';\r\n  } else {\r\n    if (dropDownNav.getElementsByClassName('nav-search')[0]) {\r\n      dropDownNav.getElementsByClassName('nav-search')[0].remove()\r\n    }\r\n    if (bodyShadow.classList.contains('active')) {\r\n      bodyShadow.classList.remove('active');\r\n    }\r\n\r\n    document.getElementsByClassName('wrapper')[0].style.marginTop = '';\r\n  }\r\n})\n\n//# sourceURL=webpack:///./js/header.js?");

/***/ }),

/***/ "./js/scroll-animation-index.js":
/*!**************************************!*\
  !*** ./js/scroll-animation-index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let isScrolling = false;\r\n\r\nwindow.addEventListener(\"scroll\", throttleScroll, false);\r\n\r\nfunction throttleScroll(e) {\r\n  if (isScrolling == false) {\r\n    window.requestAnimationFrame(function () {\r\n      scrolling(e);\r\n      isScrolling = false;\r\n    });\r\n  }\r\n  isScrolling = true;\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", scrolling, false);\r\n\r\n// Переменные для scrolling()\r\nlet columnsContainer = document.getElementById('columns-container');\r\n\r\nlet firstColumn = document.getElementById('first-column'),\r\n    secondColumn = document.getElementById('second-column'),\r\n    thirdColumn = document.getElementById('third-column');\r\n\r\nfunction scrolling(e) {\r\n    if (isPartiallyVisible(columnsContainer)) {\r\n        let listItems = document.getElementsByClassName('products__item');\r\n\r\n        for (let i = 0; i < listItems.length; i++) {\r\n\r\n            if (isPartiallyVisible(listItems[i])) {\r\n                listItems[i].classList.add('active');\r\n            } else {\r\n                listItems[i].classList.remove('active');\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n// Функция проверяет виден ли элемент частично\r\nfunction isPartiallyVisible(el) {\r\n  let elementBoundary = el.getBoundingClientRect();\r\n\r\n  let top = elementBoundary.top;\r\n  let bottom = elementBoundary.bottom;\r\n  let height = elementBoundary.height;\r\n\r\n  return ((top + height >= 0) && (height + window.innerHeight >= bottom));\r\n}\r\n// Функция проверяет виден ли элемент полностью\r\nfunction isFullyVisible(el) {\r\n  let elementBoundary = el.getBoundingClientRect();\r\n\r\n  let top = elementBoundary.top;\r\n  let bottom = elementBoundary.bottom;\r\n\r\n  return ((top >= 0) && (bottom <= window.innerHeight));\r\n}\n\n//# sourceURL=webpack:///./js/scroll-animation-index.js?");

/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let sliderHeader = {\r\n    container: document.getElementById('slider'),\r\n    list: document.getElementById('slider__list'),\r\n    items: document.getElementsByClassName('slider__item'),\r\n    shortList: document.getElementById('slider__short-list'),\r\n    shortListItems: document.getElementsByClassName('slider__short-list-item'),\r\n    leftButton: document.getElementById('slider__button_left'),\r\n    rightButton: document.getElementById('slider__button_right')\r\n}\r\n\r\ncreateSlider(sliderHeader);\r\n\r\nfunction createSlider(obj) {\r\n    if (obj.items.length != 1) {\r\n\r\n        for (let i = 0; i < obj.items.length; i++) {\r\n\r\n            let shortListItem = document.createElement('li')\r\n            shortListItem.classList.add('slider__short-list-item')\r\n            shortListItem.setAttribute('data-slide-number', i)\r\n\r\n            obj.shortList.appendChild(shortListItem);\r\n        }\r\n\r\n        obj.shortListItems[0].classList.add('current');\r\n\r\n        if (!obj.leftButton) obj.leftButton = '';\r\n        if (!obj.rightButton) obj.rightButton = '';\r\n\r\n        var itemWidth = obj.items[0].offsetWidth\r\n\r\n        var betweenElemsDistance = Math.abs(obj.items[0].offsetLeft + obj.items[0].offsetWidth - obj.items[1].offsetLeft);\r\n\r\n        var maxScrollWidth = -((obj.items.length - 1) * obj.items[0].offsetWidth + betweenElemsDistance);\r\n        var currentScrollWidth = 0;\r\n\r\n        obj.container.onclick = function (e) {\r\n            let target = e.target;\r\n\r\n            while (target != this) {\r\n                if (target == obj.rightButton) {\r\n                    if (currentScrollWidth > maxScrollWidth) {\r\n                        let currentItem = currentItemCalc();\r\n\r\n                        currentScrollWidth =\r\n                            currentScrollWidth - itemWidth - betweenElemsDistance;\r\n                        obj.list.style.marginLeft = currentScrollWidth + \"px\";\r\n\r\n                        obj.shortListItems[currentItem].classList.remove('current')\r\n                        obj.shortListItems[currentItem + 1].classList.add('current')\r\n                    } else {\r\n                        currentScrollWidth = 0;\r\n                        obj.list.style.marginLeft = currentScrollWidth + 'px';\r\n\r\n                        obj.shortListItems[obj.shortListItems.length - 1].classList.remove('current')\r\n                        obj.shortListItems[0].classList.add('current')\r\n                    }\r\n                } else if (target == obj.leftButton) {\r\n                    if (currentScrollWidth < 0) {\r\n                        let currentItem = currentItemCalc();\r\n\r\n                        currentScrollWidth =\r\n                            currentScrollWidth + itemWidth + betweenElemsDistance;\r\n                        obj.list.style.marginLeft = currentScrollWidth + 'px';\r\n\r\n                        obj.shortListItems[currentItem].classList.remove('current')\r\n                        obj.shortListItems[currentItem - 1].classList.add('current')\r\n                    } else {\r\n                        currentScrollWidth = maxScrollWidth;\r\n                        obj.list.style.marginLeft = currentScrollWidth + 'px';\r\n\r\n                        obj.shortListItems[0].classList.remove('current')\r\n                        obj.shortListItems[obj.shortListItems.length - 1].classList.add('current')\r\n                    }\r\n                } else if (target.classList.contains('slider__short-list-item')) {\r\n\r\n                    let currentItem = currentItemCalc();\r\n                    obj.shortListItems[currentItem].classList.remove('current')\r\n\r\n                    if (+target.getAttribute('data-slide-number') != 0) {\r\n                        currentScrollWidth =\r\n                            (-itemWidth * target.getAttribute('data-slide-number')) - betweenElemsDistance;\r\n                    } else {\r\n                        currentScrollWidth = 0\r\n                    }\r\n\r\n                    obj.shortListItems[+target.getAttribute('data-slide-number')].classList.add('current')\r\n                    obj.list.style.marginLeft = currentScrollWidth + 'px';\r\n                }\r\n\r\n                target = target.parentNode;\r\n            }\r\n        }\r\n\r\n        addEventListener(\"resize\", function () {\r\n            let currentItem = currentItemCalc();\r\n\r\n            if (currentItem > 0) {\r\n                // Если это не самый первый слайд, то идет перерасчет ширины прокрутки для новой ширины окна браузера\r\n                currentScrollWidth = -((obj.items[0].offsetWidth + betweenElemsDistance) * currentItem);\r\n            } else {\r\n                currentScrollWidth = 0;\r\n            }\r\n\r\n            obj.list.style.marginLeft = currentScrollWidth + \"px\"; // Перемещение на новую точку после перерасчета\r\n            maxScrollWidth = -((obj.items.length - 1) * obj.items[0].offsetWidth + betweenElemsDistance);\r\n            itemWidth = obj.items[0].offsetWidth; // Запоминаем новую текущую ширину одного слайда\r\n        });\r\n    }\r\n\r\n    function currentItemCalc() { // Находит индекс текущего элемента\r\n        return Math.floor(-currentScrollWidth / itemWidth)\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/slider.js?");

/***/ }),

/***/ 0:
/*!**************************************************************************!*\
  !*** multi ./js/header.js ./js/slider.js ./js/scroll-animation-index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/header.js */\"./js/header.js\");\n__webpack_require__(/*! ./js/slider.js */\"./js/slider.js\");\nmodule.exports = __webpack_require__(/*! ./js/scroll-animation-index.js */\"./js/scroll-animation-index.js\");\n\n\n//# sourceURL=webpack:///multi_./js/header.js_./js/slider.js_./js/scroll-animation-index.js?");

/***/ })

/******/ });