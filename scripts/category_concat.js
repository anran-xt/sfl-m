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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function(selector){
    return new IScroll(selector,{
        probeType:3,
        mouseWheel:true,
        // scrollbars:true
    })
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "<div id=\"category\">    <div class=\"item homeItem active\">        <span class=\"icon\"></span>        <span class=\"text\">首页</span>    </div>    <div class=\"item kindItem\">        <span class=\"icon\"></span>        <span class=\"text\">分类</span>    </div>    <div class=\"item discountItem\">        <span class=\"icon\"></span>        <span class=\"text\">优惠专享</span>    </div>    <div class=\"item shoppingCartItem\">        <span class=\"icon\"></span>        <span class=\"text\">购物车</span>    </div>    <div class=\"item mineItem\">        <span class=\"icon\"></span>        <span class=\"text\">我的</span>    </div></div>"

/***/ }),
/* 2 */,
/* 3 */
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


/***/ }),
/* 4 */
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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const rightTpl=__webpack_require__(23)
const rightData=__webpack_require__(4)

const rightConstroller={
    //按照下标获取数据
    async render(index){
        let data = await  rightData.findData("rightData")
        // console.log(data.data.dataList[index])        
        let html = template.render(rightTpl,data.data.dataList[index])
        // console.log(html)
        $("#rightContentWrap").html(html)
    }
}

module.exports=rightConstroller

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

const footer=__webpack_require__(1)
$("#footerWrap").html(footer)


const footerEventController=__webpack_require__(3)
const leftSideController=__webpack_require__(20)
const leftEventController=__webpack_require__(22)

const rightController=__webpack_require__(5)

const scrollController=__webpack_require__(0)

footerEventController.footerAction()

;(async () => {   
    //页面第一次加载渲染数据
    await rightController.render(0)
    let scrollEle=scrollController("#rightContentWrap")
    //右侧滚动事件
    setTimeout(function(){
        scrollEle.refresh()
    },500)    

    //左侧渲染与事件添加
    await leftSideController.render()
    leftEventController.addEvent()

})()




/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

const leftSideTpl=__webpack_require__(21)
const leftSideData=__webpack_require__(4)

const leftSideController={
    async render(){
        let data = await leftSideData.findData("leftSide")
        // console.log(data)
        let html= template.render(leftSideTpl,data)
        $("#leftSideWrap").html(html)

        //激活第一个li
        $("#leftSideWrap .leftSide li").eq(0).addClass("active")
        
    }
}
module.exports=leftSideController

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "<div class=\"leftSide\">    <ul>        {{each data}}        <li>            <a href=\"#\">{{$value}}</a>        </li>        {{/each}}    </ul></div>"

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

const rightController=__webpack_require__(5)
const scrollController=__webpack_require__(0)


const leftEventController={
    addEvent(){
        // console.log(scrollEle.refresh,"fafa")
        // 添加点击事件，替换数据
        let lis=$("#leftSideWrap .leftSide li")
        $(lis).eq(0).addClass("active")
        $(lis).on("click",async function(){
            $(lis).removeClass("active")
            $(this).addClass("active")
            await rightController.render($(this).index())
            
            let scrollEle=scrollController("#rightContentWrap")
            //右侧滚动事件
            setTimeout(function(){
                scrollEle.refresh()
            },500)    

        })
    }    
}

module.exports=leftEventController



/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "<div class=\"rightContent\">    <div class=\"topImg\">        <img src=\"{{detail.topImg}}\" alt=\"\">    </div>    {{each detail.itemArr}}    <div class=\"categoryItem {{$value.itemClass}}\">        <div class=\"title\">            <span class=txt>{{$value.des}}</span>            <span class=\"moreIcon\"></span>        </div>        <div class=\"list\">            {{each $value.itemDataArr}}            <div class=\"listItem\">                <img src=\"{{$value.src}}\" alt=\"\">                <span>{{$value.proname}}</span>            </div>            {{/each}}        </div>    </div>    {{/each}}</div>"

/***/ })
/******/ ]);