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

/***/ })
/******/ ]);