(function(t){function e(e){for(var i,s,o=e[0],c=e[1],u=e[2],d=0,h=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&h.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(h.length)h.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},r={app:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-carousel/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2acc":function(t,e,n){},"2d37":function(t,e,n){"use strict";n("cc88")},"31db":function(t,e,n){"use strict";n("40e5")},"40e5":function(t,e,n){},5113:function(t,e,n){"use strict";n("f975")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("image-carousel")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("carousel",{attrs:{timeout:5e3,throttle:500,thumbnails:t.thumbnails},model:{value:t.currentSlide,callback:function(e){t.currentSlide=e},expression:"currentSlide"}},t._l(t.slides,(function(e,i){return n("slide",{key:i,staticClass:"d-flex",attrs:{index:i}},t._l(e.src,(function(e,i){return n("div",{key:i,staticClass:"image-container w-100 h-100",style:{backgroundImage:t.getDarkenImage(e,.5)}},[n("shop-navigation")],1)})),0)})),1)},o=[],c=n("2909"),u=(n("d81d"),n("99af"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carousel-container w-100 h-100"},[t.navigator?n("navigator",{on:{next:t.next,previous:t.previous}}):t._e(),t._t("default"),t.indicator?n("indicator",{attrs:{index:t.index,thumbnails:t.thumbnails},on:{"thumbnail-clicked":t.jumpTo}}):t._e()],2)}),l=[],d=(n("a9e3"),n("4de4"),n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigator-container"},[n("div",{staticClass:"navigator navigator-previous",on:{click:function(){return t.$emit("previous")}}},[n("span",{staticClass:"material-icons navigator-icon"},[t._v("arrow_back_ios")])]),n("div",{staticClass:"navigator navigator-next",on:{click:function(){return t.$emit("next")}}},[n("span",{staticClass:"material-icons navigator-icon"},[t._v("arrow_forward_ios")])])])}),h=[],f={name:"Navigator"},m=f,p=(n("2d37"),n("2877")),v=Object(p["a"])(m,d,h,!1,null,"6e65e97a",null),g=v.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"indicator-container"},[n("div",{staticClass:"thumbnails-container"},t._l(t.thumbnails,(function(e,i){return n("div",{key:i,staticClass:"thumbnail d-flex",class:{active:i===t.index},on:{click:function(){return t.$emit("thumbnail-clicked",i)}}},t._l(e,(function(t,e){return n("div",{key:e,staticClass:"thumbnail-item"},[n("div",{staticClass:"thumbnail-image d-flex w-100 h-100",style:{backgroundImage:"url("+t+")"}})])})),0)})),0)])},w=[],y={name:"Indicator",props:{index:{type:Number,required:!0},thumbnails:{validator:function(t){return Array.isArray(t)&&t.every((function(t){return Array.isArray(t)}))},default:function(){return[]}}}},x=y,_=(n("5113"),Object(p["a"])(x,b,w,!1,null,"718bcd8a",null)),j=_.exports,C=n("84a2"),$=n.n(C),S={data:function(){return{touch:{startX:0,endX:0}}},mounted:function(){this.$el.addEventListener("touchstart",this.handleTouchStart),this.$el.addEventListener("touchmove",this.handleTouchMove),this.$el.addEventListener("touchend",this.handleTouchEnd)},beforeDestroy:function(){this.$el.removeEventListener("touchstart",this.handleTouchStart),this.$el.removeEventListener("touchmove",this.handleTouchMove),this.$el.removeEventListener("touchend",this.handleTouchEnd)},methods:{handleTouchStart:function(t){var e=t.touches;this.touch.startX=e[0].clientX,this.touch.endX=0},handleTouchMove:function(t){var e=t.touches;this.touch.endX=e[0].clientX}}},E={name:"Carousel",mixins:[S],components:{Navigator:g,Indicator:j},model:{prop:"index",event:"slide-changed"},data:function(){return{slideChangedTimestamp:0,slides:[],direction:"slide-right"}},props:{index:{type:Number,required:!0},navigator:{type:Boolean,default:!0},indicator:{type:Boolean,default:!0},timeout:{type:Number,default:0},throttle:{type:Number,default:2e3},swipeable:{type:Boolean,default:!0},swipeTolerance:{type:Number,default:20},thumbnails:{validator:function(t){return Array.isArray(t)&&t.every((function(t){return Array.isArray(t)}))},default:function(){return[]}}},computed:{currentSlide:function(){return this.slides[this.index]}},created:function(){var t=this;this.timeout&&setInterval((function(){return t.next(!0)}),this.timeout),this.next=$()(this.next,this.throttle),this.previous=$()(this.previous,this.throttle)},mounted:function(){this.slides=this.$children.filter((function(t){return"Slide"===t.$options.name}))},methods:{next:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t&&this.currentSlide.focused||t&&this.hasSlideRecentlyChanged()||(this.slideChangedTimestamp=performance.now(),this.direction="slide-right",this.index!==this.slides.length-1?this.$emit("slide-changed",this.index+1):this.$emit("slide-changed",0))},previous:function(){this.direction="slide-left",0!==this.index?this.$emit("slide-changed",this.index-1):this.$emit("slide-changed",this.slides.length-1)},jumpTo:function(t){t!==this.index&&(this.slideChangedTimestamp=performance.now(),this.direction=t>=this.index?"slide-right":"slide-left",this.$emit("slide-changed",t))},handleTouchEnd:function(){if(this.swipeable){var t=this.touch,e=t.endX,n=t.startX;!e||Math.abs(e-n)<this.swipeTolerance||(e<n?this.next():this.previous())}},hasSlideRecentlyChanged:function(){return performance.now()-this.slideChangedTimestamp<this.timeout}}},O=E,T=Object(p["a"])(O,u,l,!1,null,"7085b80e",null),k=T.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.direction,mode:"out-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"slide-container w-100 h-100",on:{mouseover:function(e){t.focused=!0},mouseleave:function(e){t.focused=!1}}},[t._t("default")],2)])},N=[],A={name:"Slide",data:function(){return{focused:!1}},props:{index:{type:[Number],required:!0}},computed:{visible:function(){return this.$parent.index===this.index},direction:function(){return this.$parent.direction}}},X=A,I=(n("f389"),Object(p["a"])(X,W,N,!1,null,null,null)),L=I.exports,M=[{src:["carousel/woman/4.jpg","carousel/man/4.jpg"]},{src:["carousel/woman/3.jpg","carousel/man/3.jpg"]},{src:["carousel/woman/2.jpg","carousel/man/2.jpg"]},{src:["carousel/woman/1.jpg","carousel/man/1.jpg"]}],P=[{src:["carousel/woman/4.jpg"]},{src:["carousel/man/3.jpg"]},{src:["carousel/woman/2.jpg"]},{src:["carousel/man/1.jpg"]}],D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation-container"},[n("div",{staticClass:"navigation-title"},[t._v("spring 2019")]),n("p",{staticClass:"navigation-subtitle"},[t._v(" Sed ut perspiciatis unde omnis iste natus error sit voluptatem. ")]),n("div",{staticClass:"navigation-actions-container"},[n("button",{staticClass:"navigation-btn"},[t._v("shop women")]),n("button",{staticClass:"navigation-btn"},[t._v("shop men")])])])}],B={name:"ShopNavigation"},z=B,J=(n("31db"),Object(p["a"])(z,D,q,!1,null,"d9e5d5a2",null)),R=J.exports,F={xs:340,sm:600,md:960,lg:1280,xl:1920},G={components:{Carousel:k,Slide:L,ShopNavigation:R},created:function(){window.addEventListener("resize",this.syncWindowWidth),this.syncWindowWidth()},beforeDestroy:function(){window.removeEventListener("resize",this.syncWindowWidth)},data:function(){return{currentSlide:0,windowWidth:0}},computed:{slides:function(){return this.windowWidth>=F.md?M:P},thumbnails:function(){return this.slides.map((function(t){return Object(c["a"])(t.src)}))}},methods:{syncWindowWidth:function(){this.windowWidth=window.innerWidth},getDarkenImage:function(t,e){return"linear-gradient(rgba(0, 0, 0, ".concat(e,"),rgba(0, 0, 0, ").concat(e,")) , url(").concat(t,")")}}},H=G,K=(n("e836"),Object(p["a"])(H,s,o,!1,null,null,null)),Q=K.exports,U={name:"App",components:{ImageCarousel:Q}},V=U,Y=(n("5c0b"),Object(p["a"])(V,r,a,!1,null,null,null)),Z=Y.exports;n("b329");new i["a"]({render:function(t){return t(Z)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},b329:function(t,e,n){},b34e:function(t,e,n){},cc88:function(t,e,n){},e836:function(t,e,n){"use strict";n("b34e")},f389:function(t,e,n){"use strict";n("2acc")},f975:function(t,e,n){}});
//# sourceMappingURL=app.ebe779bb.js.map