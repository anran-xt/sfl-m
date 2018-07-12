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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
/* 2 */
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
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// 头部与尾部的html模板
const headTpl = __webpack_require__(7)
const footerTpl = __webpack_require__(1)

// 引入各个模块的constroller
const bannerController = __webpack_require__(8)
const navController = __webpack_require__(10)
const proOneController = __webpack_require__(12)
const proTwoController = __webpack_require__(14)
const brandController = __webpack_require__(16)
const indexSwiper = __webpack_require__(18)

const scrollY = __webpack_require__(0)

const footerEventController = __webpack_require__(3)

// 渲染banner并启动绑定的函数
; (async () => {
    await bannerController.render()

    //用controller渲染各部分的数据
    await navController.render()
    await proOneController.render()
    await proTwoController.render()
    await brandController.render()



    //添加头部与尾部的模板到文档
    document.getElementById('headWrap').innerHTML = headTpl
    document.getElementById('footerWrap').innerHTML = footerTpl


    // let scrollEle=scrollY("#mainWrap");
    // 未解决，无法判断整个文档的图片 是否真的加载完毕
    setTimeout(function(){
        // console.log("ok")       
        // scrollEle.refresh()
    },1500)


    //轮播事件
    new indexSwiper("#banner", "#banner .bannerList li", "#banner .lines .line")
    //给尾部绑定事件
    footerEventController.footerAction()
})()










/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<div id=\"head\">    <div class=\"topHead\">        <i class=\"logo\"></i>        <span class=\"title\"></span>        <a href=\"#\" class=\"login\">登录</a>    </div>    <div class=\"search\">        <span class=\"searchBtn\"></span>        <span class=\"searchWord\">口红</span>    </div></div>"

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

const bannerdTpl=__webpack_require__(9)
const bannerData=__webpack_require__(2)

const  bannerController={
    async render(){
        let data = await bannerData.findData("banner")
        // console.log(data.data)
        let html=template.render(bannerdTpl,data)
        $("#bannerWrap").html(html)
        // console.log(html)
    }
}

module.exports = bannerController

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<div id=\"banner\">    <ul class=\"bannerList\">        {{each data.bannerSrc}}        <li><img src=\"{{$value}}\" alt=\"\"></li>        {{/each}}    </ul>    <div class=\"lines\">        {{each data.bannerSrc}}                <span class=\"line\"></span>        {{/each}}    </div>    </div>"

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

const navTpl=__webpack_require__(11)
const navData=__webpack_require__(2)

const navController={
    async render(){
        let data = await navData.findData("nav")
        // console.log(data)
        let html=template.render(navTpl,data)
        $("#nav").html(html)
        // return html
    }
}

module.exports = navController

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<div class=\"itemList\">    {{each data}}    <div class=\"item\">        <a href=\"#\">            <img src=\"{{$value.src}}\" alt=\"\">            <em>{{$value.title}}</em>        </a>    </div>        {{/each}}</div>"

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

const proOneTpl=__webpack_require__(13)
const proOneData=__webpack_require__(2)

const proOneController={
    async render(){
        let data = await proOneData.findData("proOne")
        // console.log(data)
        let html = template.render(proOneTpl,data)
        // console.log(html)        
        $("#advertisePart").html(html)
        // return html
        // console.log("over")
        

    }
}

module.exports = proOneController

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "{{each data}}<div class=\"adverItem\">    <div class=\"advertisement\">        <img src=\"{{$value.advertise}}\" alt=\"\">    </div>    <div class=\"goodsList\">        {{each $value.list}}            <div class=\"item\">                <img src=\"{{$value.proSrc}}\" alt=\"\">                <div class=\"brandName\">{{$value.brand}}</div>                <div class=\"line\"></div>                <div class=\"goodDes\">{{$value.goodDes}}</div>                <div class=\"price\">                    <label>¥</label>                    <em class=\"big_price\">{{$value.price}}</em>                    <em class=\"small_price\">.00</em>                </div>            </div>        {{/each}}    </div></div>{{/each}}"

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

const proTwoTpl=__webpack_require__(15)
const proTwoData=__webpack_require__(2)

const proTwoController={
    async render(){
        let data = await proTwoData.findData("proTwo")
        
        // console.log(data)
        let html = template.render(proTwoTpl,data)
        // console.log(html)        
        $("#proWrap").html(html)
        // console.log("over")
        return html

    }
}

module.exports = proTwoController

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "{{each data}}<div class=\"proItem {{$value.proItemClass}}\">        <div class=\"topTitle\">            <h2></h2>            <div class=\"more\"></div>        </div>        <div class=\"content\">            <div class=\"categoryImg\">                <img src=\"{{$value.categoryImg}}\" alt=\"\">            </div>            <div class=\"categoryList\">                <div class=\"leftC\">                    <img src=\"{{$value.leftC.src}}\" alt=\"\">                    <div class=\"brandName\">{{$value.leftC.brand}}</div>                    <div class=\"line\"></div>                    <div class=\"goodDes\">{{$value.leftC.goodDes}}</div>                    <div class=\"price\">                        <label>¥</label>                        <em class=\"big_price\">{{$value.leftC.price}}</em>                        <em class=\"small_price\">.00</em>                    </div>                </div>                <div class=\"rightC\">                    {{each $value.rightC}}                    <div class=\"item {{$value.itemClass}}\">                            <img src=\"{{$value.src}}\" alt=\"\">                            <div class=\"brandName\">{{$value.brand}}</div>                            <div class=\"goodDes\">{{$value.goodDes}}</div>                            <div class=\"price\">                                <label>¥</label>                                <em class=\"big_price\">{{$value.price}}</em>                                <em class=\"small_price\">.00</em>                            </div>                    </div>                    {{/each}}                                    </div>            </div>        </div></div>{{/each}}"

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

const brandTpl=__webpack_require__(17)
const brandData=__webpack_require__(2)

const  brandController={
    async render(){
        let data = await brandData.findData("brand")
        // console.log(data)
        let html=template.render(brandTpl,data)
        $("#brandWrap").html(html)
        // return html
        // console.log("over")
        
    }
}

module.exports = brandController

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<div class=\"allBrands\">        <div class=\"topTitle\">            <h2></h2>            <div class=\"more\"></div>        </div>        <div class=\"content\">            <div class=\"picPart\">                {{each data.brandAdver}}                <a href=\"#\"><img src=\"{{$value}}\" alt=\"\"></a>                {{/each}}            </div>            <div class=\"brandList\">                {{each data.brandSrc}}                <a href=\"#\" class=\"item {{$value.bor}}\">                    <img src=\"{{$value.src}}\" alt=\"\">                </a>                {{/each}}                           </div>        </div>    </div>"

/***/ }),
/* 18 */
/***/ (function(module, exports) {

function mySwiper(contanier,items,dots){
    // console.log("in")
    this.contanier=$(contanier)
    this.items=$(items)
    this.dots=$(dots)
    this.nowIndex=0
    this.nextIndex=1

    this.moving=false

    this.init()
}
mySwiper.prototype={
    constructor:mySwiper,
    init(){
        $(this.dots[this.nowIndex]).addClass("active")
        $(this.contanier).on("click",function(){
            clearInterval(this.timer)
            // console.log(this.moving)
            if(!this.moving){
                this.move()
                this.changIndex()
            }            
            
        }.bind(this))
        this.autoPlay()
    },
    changIndex(){
        this.nowIndex=this.nextIndex
        if(this.nowIndex==this.items.length-1){
            this.nextIndex=0;
        }else{
            this.nextIndex=this.nowIndex+1
        }
        // console.log(this.nowIndex,this.nextIndex)
    },
    move(){
        this.moving=true
        $(this.items).css("zIndex",0);
        $(this.items[this.nowIndex]).css("zIndex",1)
        $(this.items[this.nextIndex]).css("zIndex",1)

        $(this.items[this.nextIndex]).css("left",750)

        $(this.dots).removeClass("active")
        $(this.dots[this.nextIndex]).addClass("active")

        $(this.items[this.nowIndex])
        .animate({
            "left":-750,
        },500,'ease-out')
        $(this.items[this.nextIndex])
        .animate({
            "left":0,
        },500,"ease-out")
        setTimeout(function(){
            this.autoPlay()
            this.moving=false;
            // console.log("over")
        }.bind(this),600)      
    },
    autoPlay(){
        clearInterval(this.timer)
        this.timer=setInterval(function(){
            this.move()
            this.changIndex()
        }.bind(this),2000)
    }
}

module.exports=mySwiper

/***/ })
/******/ ]);