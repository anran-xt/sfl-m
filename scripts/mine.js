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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = function(selector){
    return new IScroll(selector,{
        probeType:3,
        mouseWheel:true,
        // scrollbars:true
    })
}


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = "<div id=\"category\">    <div class=\"item homeItem active\">        <span class=\"icon\"></span>        <span class=\"text\">首页</span>    </div>    <div class=\"item kindItem\">        <span class=\"icon\"></span>        <span class=\"text\">分类</span>    </div>    <div class=\"item discountItem\">        <span class=\"icon\"></span>        <span class=\"text\">优惠专享</span>    </div>    <div class=\"item shoppingCartItem\">        <span class=\"icon\"></span>        <span class=\"text\">购物车</span>    </div>    <div class=\"item mineItem\">        <span class=\"icon\"></span>        <span class=\"text\">我的</span>    </div></div>"

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

const footerTpl = __webpack_require__(1)
$('#footerWrap').html(footerTpl)

const footerController = __webpack_require__(3)
const scrollController = __webpack_require__(0)

//添加尾部导航事件
footerController.footerAction()
//为中间内容主体添加IScroll
new scrollController("#contentWrap")

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

const footerEventController={
    footerAction(){
        const pageList=["index.html","category.html","discount.html","purchaseCar.html","mine.html"]
        $("#category .item ").on("click",function(){
            location.href=pageList[$(this).index()]
        })
        let pathname=location.pathname.slice(1)
        let curIndex=pageList.indexOf(pathname)
        curIndex=curIndex>0?curIndex:0
        console.log()
        $("#category .item")
            .eq(curIndex)
            .addClass("active")
            .siblings()
            .removeClass("active")
    }
}
module.exports = footerEventController


/***/ })

/******/ });