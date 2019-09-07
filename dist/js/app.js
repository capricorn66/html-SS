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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/app.js":
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/script.js */ "./app/js/script.js");
/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_script_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_src_swiper_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/src/swiper.scss */ "./node_modules/swiper/src/swiper.scss");
/* harmony import */ var swiper_src_swiper_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_src_swiper_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_select_sass_bootstrap_select_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-select/sass/bootstrap-select.scss */ "./node_modules/bootstrap-select/sass/bootstrap-select.scss");
/* harmony import */ var bootstrap_select_sass_bootstrap_select_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_select_sass_bootstrap_select_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/app.scss */ "./app/scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./app/js/script.js":
/*!**************************!*\
  !*** ./app/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// JavaScript Document
var rwdMedia = {
  bs4_xs: function bs4_xs() {
    return document.getElementsByClassName("bs4-xs")[0].offsetParent ? !null : null;
  },
  bs4_sm: function bs4_sm() {
    return document.getElementsByClassName("bs4-sm")[0].offsetParent ? !null : null;
  },
  bs4_md: function bs4_md() {
    return document.getElementsByClassName("bs4-md")[0].offsetParent ? !null : null;
  },
  bs4_lg: function bs4_lg() {
    return document.getElementsByClassName("bs4-lg")[0].offsetParent ? !null : null;
  },
  bs4_xl: function bs4_xl() {
    return document.getElementsByClassName("bs4-xl")[0].offsetParent ? !null : null;
  },
  bs4_xxl: function bs4_xxl() {
    return document.getElementsByClassName("bs4-xxl")[0].offsetParent ? !null : null;
  }
};
$(document).ready(function (e) {
  var testimonials = new Swiper('.testimonials .swiper-container', {
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.testimonials .swiper-button-next',
      prevEl: '.testimonials .swiper-button-prev'
    },
    pagination: {
      el: '.testimonials .swiper-pagination'
    }
  });
  $('.jumbotron').flurry({
    character: "❅❆",
    height: 700,
    small: 18,
    large: 88,
    speed: 8000,
    frequency: 800,
    zIndex: 3
  });
}); // JQ extras

(function ($) {
  // jQuery plugin to scroll to an element on the page
  // Usage: $('.callBack').scrollTo();
  //    or: $('.callBack').scrollTo(750);
  var $window = $(window),
      $document = $(document),
      $documentWrapper = $('body, html');

  $.fn.scrollTo = function (speed) {
    if (speed === undefined) speed = 300;
    $documentWrapper.animate({
      scrollTop: Math.min(this.offset().top - 10, $document.height() - $window.height())
    }, speed);
    return this;
  };

  $.fn.hasAttr = function (name) {
    return this.attr(name) !== undefined;
  };
})(jQuery);

/***/ }),

/***/ "./app/scss/app.scss":
/*!***************************!*\
  !*** ./app/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/bootstrap-select/sass/bootstrap-select.scss":
/*!******************************************************************!*\
  !*** ./node_modules/bootstrap-select/sass/bootstrap-select.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/swiper/src/swiper.scss":
/*!*********************************************!*\
  !*** ./node_modules/swiper/src/swiper.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.js.map