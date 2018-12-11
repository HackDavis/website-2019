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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scroll_entrance_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-entrance.min.js */ "./assets/js/scroll-entrance.min.js");
/* harmony import */ var _scroll_entrance_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scroll_entrance_min_js__WEBPACK_IMPORTED_MODULE_0__);

// set typed
var typed = new Typed('#typed', {
  strings: ['// code for social good'],
  typeSpeed: 30,
  backSpeed: 8,
  backDelay: 3500,
  startDelay: 1000,
  fadeOut: false,
  loop: true,
  shuffle: false,
  cursorChar: '_'
});

// faq toggle
const items = document.querySelectorAll('.accordion a.question');

function toggleAccordion(){
  this.classList.toggle('active');
  for(let item of items) {
    if(item !== this) {
      item.classList.remove('active');
      item.nextElementSibling.classList.remove('active');
    }
  }
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

// set progress bar
$(document).ready(function(){
  // init progress indicator
  $('#progressBar').addClass('flat');

  $(document).on('scroll', function(){
      var maxAttr = $('#progressBar').attr('max');
      var valueAttr = $('#progressBar').attr('value');
      var percentage = (valueAttr/maxAttr) * 100;  
  });

  console.log('Apply at https://hackdavis.typeform.com/to/taNO32')

  var getMax = function(){
    return $(document).height() - $(window).height();
  }
  
  var getValue = function(){
    return $(window).scrollTop();
  }
  
  if('max' in document.createElement('progress')){
    // Browser supports progress element
    var progressBar = $('progress');
    
    // Set the Max attr for the first time
    progressBar.attr({ max: getMax() });

    $(document).on('scroll', function(){
      // On scroll only Value attr needs to be calculated
      progressBar.attr({ value: getValue() });
    });

    $(window).resize(function(){
      // On resize, both Max/Value attr needs to be calculated
      progressBar.attr({ max: getMax(), value: getValue() });
    });   
  } else {
    var progressBar = $('.progress-bar'), 
      max = getMax(), 
      value, width;
    
    var getWidth = function(){
      // Calculate width in percentage
      value = getValue();            
      width = (value/max) * 100;
      width = width + '%';
      return width;
    }
    
    var setWidth = function(){
      progressBar.css({ width: getWidth() });
    }
    
    $(document).on('scroll', setWidth);
    $(window).on('resize', function(){
      // Need to reset the Max attr
      max = getMax();
      setWidth();
    });
  }
});

// scroll to top 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 600) {
    $('#scroll-to-top').fadeIn("fast");
  } else {
    $('#scroll-to-top').fadeOut("fast");
  }
});

$('#scroll-to-top').click(function() {
  $('body,html').animate({
    scrollTop : 0
  }, 500);
});


/***/ }),

/***/ "./assets/js/scroll-entrance.min.js":
/*!******************************************!*\
  !*** ./assets/js/scroll-entrance.min.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(){entrance={},entrance.duration="1000",entrance.distance="200",entrance.heightOffset=200,entrance.isElemInView=function(e){var t=e.getBoundingClientRect();return t.top+entrance.heightOffset>=0&&t.top+entrance.heightOffset<=window.innerHeight||t.bottom+entrance.heightOffset>=0&&t.bottom+entrance.heightOffset<=window.innerHeight||t.top+entrance.heightOffset<0&&t.bottom+entrance.heightOffset>window.innerHeight},entrance.setInitialStyles=function(e){document.body.style.overflowX="hidden";var t=e.getAttribute("data-entrance"),n=e.getAttribute("data-entrance-delay");e.style.transition="all "+entrance.duration/1e3+"s ease",n&&(e.style.transitionDelay=n/1e3+"s"),"fade"==t&&(e.style.opacity="0"),"from-left"==t&&(e.style.opacity="0",e.style.transform="translate(-"+entrance.distance+"px, 0)"),"from-right"==t&&(e.style.opacity="0",e.style.transform="translate("+entrance.distance+"px, 0)"),"from-top"==t&&(e.style.opacity="0",e.style.transform="translate(0, -"+entrance.distance+"px)"),"from-bottom"==t&&(e.style.opacity="0",e.style.transform="translate(0, "+entrance.distance+"px)")},entrance.enter=function(e){e.style.visibility="visible",e.style.opacity="1",e.style.transform="translate(0, 0)",e.className+=" has-entered"},entrance.viewportChange=function(){Array.prototype.map.call(entrance.elements,function(e){if(entrance.isElemInView(e)){var t=e.classList.contains("has-entered");t||entrance.enter(e)}})},entrance.init=function(){entrance.elements=document.querySelectorAll("[data-entrance]"),Array.prototype.map.call(entrance.elements,function(e){entrance.setInitialStyles(e),entrance.isElemInView(e)&&addEventListener("load",function(){entrance.enter(e)},!1)})},addEventListener("DOMContentLoaded",entrance.init,!1),addEventListener("scroll",entrance.viewportChange,!1),addEventListener("resize",entrance.viewportChange,!1)}();

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map