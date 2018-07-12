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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
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

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

const proItemController = __webpack_require__(25)
const guessItemController = __webpack_require__(27)
const scrollController = __webpack_require__(0)




;(async () => {
    await proItemController.render()
    await guessItemController.render()

    new scrollController("#contentWrap")
})()





/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

const proItemTpl=__webpack_require__(26)
const proItemData=__webpack_require__(4)

const proItemController={
    async render(){
        let data = await proItemData.findData("proListData")    
        // console.log(data)

        let html = template.render(proItemTpl,data)
        // console.log(html)
        $("#proList").html(html)

    }
}

module.exports = proItemController

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = "{{each data.proList}}<div class=\"item\">    <div class=\"leftChose\">        <div class=\"ifChosed\"></div>    </div>    <div class=\"goodImg\">        <img src=\"{{$value.src}}\" alt=\"goodImg\">    </div>    <div class=\"rightDetail\">        <div class=\"infoBox\">            <span class=\"brand\">{{$value.brand}}</span>            <span class=\"detailName\">{{$value.detailName}}</span>        </div>        <div class=\"specWrap\">            <span class=\"spec\">规格：</span>            <span class=\"nowSpec\">{{$value.nowSpec}}</span>        </div>        <div class=\"priCount\">            <div class=\"pri\">                <span>￥                    <span class=\"price\">{{$value.price}}</span>.00</span>            </div>            <div class=\"count\">                <span class=\"iconC reduce\">-</span>                <span class=\"numIpt\">{{$value.numIpt}}</span>                <span class=\"iconC add\">+</span>            </div>        </div>        <div class=\"edit\">编辑</div>    </div></div>{{/each}}"

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

const guessItemTpl = __webpack_require__(28)
const guessItemData = __webpack_require__(4)

const guessItemConstroller = {
    async render(){
        let data = await guessItemData.findData("guessListData")
        // console.log(data)
        let html = template.render(guessItemTpl,data)
        // console.log(html)

        $("#guessProList").html(html)

    }
}
module.exports = guessItemConstroller

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = "{{each data.guessList}}<div class=\"guessItem {{$value.guessClass}}\">    <div class=\"img\">        <img src=\"{{$value.src}}\" alt=\"img\">    </div>    <div class=\"brand\">{{$value.brand}}</div>    <div class=\"proName\">{{$value.proName}}</div>    <div class=\"price\">        ￥        <span class=\"priNum\">{{$value.priNum}}</span>.00    </div></div>{{/each}}"

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

const model={
    findData(url){
        return fetch('/api/'+url)
        .then(response => response.json())
        .then(result => {
            return result
        })
    }
}

module.exports=model

/***/ })

/******/ });