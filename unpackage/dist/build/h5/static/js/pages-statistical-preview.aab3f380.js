(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-statistical-preview"],{"16cc":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAACoUlEQVRIS7WVz2sTQRTHv+9tC7VpQamCgrR4kgYKgtBWPJR68heEzSwrKha9iAf/Aesll+o/4MWTUozispMQ0OpFwYPYCqJQSfEiVAQFexBsqjTuPJmyqduYXyjOKXkz89k33zfvO4Qmo1gsbjfGnBKRY0R0AMDueOlnEXlDRI+Y+b7rul8bIag+ODs7m0qlUlcBXAbQn5iX+HdyzzcANyqVyszU1FQlydoCLhQKw8aYIhHtB2BBNqs71Wr1eblc/mg3ptPpvcx8mIjOAjgOgETkHTO72Wx2qQbfBFuoiDwDsAvAEjOfd133ZTOpbLxYLI4aY24DGAbwhYgmavANsD1+b2/vqzjTp1EUZXzfX01CtdZD9r9SajkZD4Kgz3GcEoAjNvO1tbWDVpYNsNZ6BsC0iJS7u7vHM5mM1W7L0FqviEjV87w99XOlUqk/iqJ5EUkDuK6Umqa4+h8A9InIIc/zFhodX2ttNf+hlNrWaD4MwzEiegFglZkHSWt9EcBNEZnzPO9EM01jsCiluMWaBwAs45IFFwC4InLG87x7bcBW4z+uaG1PGIanieiuiJQs+D2AfVEUDfm+byVpOOKMW4KDIBh0HMcWd5nCMFwnoq7FxcWuXC5n/gWcy+V4ZGTkJ4B1m/E6gE7AVbuu7sPfiWg0m82+tfF6cKdSzAI4lwSLyJOBgYGjk5OTNktskaLT4rXqwGbF27huAB4qpU52AujouuXz+R09PT22kn3MPN7OH5pBY9+Y32yQuKWvAbhiW9oYM1bvE+1OYf2CmReI6HdLd2pCzeAtTSiuaNpxHGubO+PML/i+39I2gyAYZeZbcaYrURRN+L5ftrx2Rj8nInljzN8bfe2o/+VpSuoY26mfeExrPvwJwGsAj5k5aPaY/gLjwYlw/Clm3AAAAABJRU5ErkJggg=="},3736:function(t,e,n){var a=n("a1b1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("a6002e3c",a,!0,{sourceMap:!1,shadowMode:!1})},6298:function(t,e,n){"use strict";n.r(e);var a=n("8e77"),i=n("e294");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("f6cf");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"4bb36ffe",null,!1,a["a"],o);e["default"]=c.exports},6662:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c5f6");var a={name:"loadRefresh",props:{isRefresh:{type:Boolean,defaule:!0},refreshTime:{type:Number,default:800},heightReduce:{type:Number,default:0},backgroundCover:{type:String,default:"white"},pageNo:{type:Number,default:0},totalPageNo:{type:Number,default:0}},data:function(){return{startY:0,moveY:0,hasMore:!0,moving:!1,refresh:!1,loading:!1,scrollTop:-1,coverTransform:"translateY(0px)",coverTransition:"0s",playState:"paused"}},computed:{getHeight:function(){var t=uni.getSystemInfoSync().windowHeight-this.heightReduce;return"height: ".concat(t,"px;")},loadText:function(){var t=this.pageNo,e=this.totalPageNo,n=this.loading;return n?"加载中...":t<e?"上拉加载更多":"已经到底啦~"}},watch:{refresh:function(t){t&&this.$emit("refresh")}},methods:{loadMore:function(){var t=this.pageNo,e=this.totalPageNo;t<e&&(this.loading=!0,this.$emit("loadMore"))},loadOver:function(){this.loading=!1},coverTouchstart:function(t){this.isRefresh&&(this.coverTransition="transform .1s linear",this.startY=t.touches[0].clientY)},coverTouchmove:function(t){if(this.isRefresh&&!this.refresh){this.moveY=t.touches[0].clientY;var e=this.moveY-this.startY;e<0?this.moving=!1:(this.moving=!0,e>=60&&(this.refresh=!0,this.coverTransform="translateY(60px)",this.playState="running"))}},coverTouchend:function(){var t=this;this.isRefresh&&this.refresh&&setTimeout(function(){!1!==t.moving&&(t.moving=!1,t.refresh=!1,t.coverTransition="transform 0.3s cubic-bezier(.21,1.93,.53,.64)",t.coverTransform="translateY(0px)",t.playState="paused")},this.refreshTime)},runRefresh:function(){var t=this;this.scrollTop=0,this.refresh=!0,this.coverTransition="transform .1s linear",this.coverTransform="translateY(60px)",this.playState="running",setTimeout(function(){t.scrollTop=-1,t.refresh=!1,t.coverTransition="transform 0.3s cubic-bezier(.21,1.93,.53,.64)",t.coverTransform="translateY(0px)",t.playState="paused"},this.refreshTime)}}};e.default=a},"75fc":function(t,e,n){"use strict";n.r(e);var a=n("a745"),i=n.n(a);function r(t){if(i()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var o=n("774e"),s=n.n(o),c=n("c8bb"),l=n.n(c);function f(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(t){return r(t)||f(t)||u()}n.d(e,"default",function(){return d})},"8b4f":function(t,e,n){var a=n("b041");e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container .chooseBox[data-v-554561e5]{padding:15px 8px}.container .chooseBox .item[data-v-554561e5]{padding:0 8px}.container .chooseBox .item .formInput[data-v-554561e5]{padding-left:14px}.container .msgList[data-v-554561e5]{padding:0 16px}.container .msgList .con[data-v-554561e5]{border-bottom:1px solid #f7f7f7;padding:12px 6px;line-height:1.8}.container .msgList .con .content .til[data-v-554561e5]{font-size:15px;font-weight:700}.container .msgList .con .content .til span[data-v-554561e5]{width:20px;height:20px;display:inline-block;vertical-align:sub;margin-right:5px}.container .msgList .con .content .time[data-v-554561e5]{font-size:12px;color:#888;padding-left:15px;background:url('+a(n("16cc"))+") no-repeat 0;background-size:12px}",""])},"8e77":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"load-refresh"},[n("v-uni-view",{staticClass:"refresh hollow-dots-spinner"},[n("v-uni-view",{staticClass:"dot",style:[{animationPlayState:t.playState}]}),n("v-uni-view",{staticClass:"dot",style:[{animationPlayState:t.playState}]}),n("v-uni-view",{staticClass:"dot",style:[{animationPlayState:t.playState}]})],1),n("v-uni-view",{staticClass:"cover-container",style:[{background:t.backgroundCover,transform:t.coverTransform,transition:t.coverTransition}],on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.coverTouchstart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.coverTouchmove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.coverTouchend.apply(void 0,arguments)}}},[n("v-uni-scroll-view",{staticClass:"list",style:t.getHeight,attrs:{"scroll-y":!0,"show-scrollbar":"true","scroll-top":t.scrollTop},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[t._t("content-list"),n("v-uni-view",{staticClass:"load-more"},[t._v(t._s(t.loadText))])],2)],1)],1)},r=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return a})},a1b1:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.load-refresh[data-v-4bb36ffe]{margin:0;padding:0;width:100%}.load-refresh .refresh[data-v-4bb36ffe]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?120?%;width:100%}.load-refresh .hollow-dots-spinner[data-v-4bb36ffe],.load-refresh .hollow-dots-spinner *[data-v-4bb36ffe]{box-sizing:border-box}.load-refresh .hollow-dots-spinner[data-v-4bb36ffe]{height:%?100?%;width:100%}.load-refresh .hollow-dots-spinner .dot[data-v-4bb36ffe]{width:15px;height:15px;margin:0 calc(15px / 2);border:calc(15px / 5) solid #007bff;border-radius:50%;float:left;-webkit-transform:scale(0);transform:scale(0);-webkit-animation:hollow-dots-spinner-animation-data-v-4bb36ffe 1s ease infinite 0ms;animation:hollow-dots-spinner-animation-data-v-4bb36ffe 1s ease infinite 0ms}.load-refresh .hollow-dots-spinner .dot[data-v-4bb36ffe]:first-child{-webkit-animation-delay:calc(.3s * 1);animation-delay:calc(.3s * 1)}.load-refresh .hollow-dots-spinner .dot[data-v-4bb36ffe]:nth-child(2){-webkit-animation-delay:calc(.3s * 2);animation-delay:calc(.3s * 2)}.load-refresh .hollow-dots-spinner .dot[data-v-4bb36ffe]:nth-child(3){-webkit-animation-delay:calc(.3s * 3);animation-delay:calc(.3s * 3)}@-webkit-keyframes hollow-dots-spinner-animation-data-v-4bb36ffe{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}to{opacity:0}}@keyframes hollow-dots-spinner-animation-data-v-4bb36ffe{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}to{opacity:0}}.load-refresh .cover-container[data-v-4bb36ffe]{width:100%;margin-top:%?-100?%}.load-refresh .cover-container .list[data-v-4bb36ffe]{width:100%}.load-refresh .cover-container .list .load-more[data-v-4bb36ffe]{font-size:%?20?%;text-align:center;color:#aaa;padding:%?16?%}',""])},ba4c:function(t,e,n){var a=n("8b4f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("3a9ce9f9",a,!0,{sourceMap:!1,shadowMode:!1})},c690:function(t,e,n){"use strict";n.r(e);var a=n("f75d"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a},d158:function(t,e,n){"use strict";var a=n("ba4c"),i=n.n(a);i.a},e294:function(t,e,n){"use strict";n.r(e);var a=n("6662"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a},e517:function(t,e,n){"use strict";n.r(e);var a=n("ee79"),i=n("c690");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("d158");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"554561e5",null,!1,a["a"],o);e["default"]=c.exports},ee79:function(t,e,n){"use strict";var a={"load-refresh":n("6298").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"chooseBox flex"},[n("v-uni-picker",{staticClass:"item full",attrs:{value:t.yearIndex,range:t.yearList},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)}}},[n("v-uni-input",{staticClass:"uni-input formInput downIcon",attrs:{"placeholder-style":"color:#D5D5D5",disabled:!0,placeholder:"请选择提案年份"},model:{value:t.currentYear,callback:function(e){t.currentYear=e},expression:"currentYear"}})],1),n("v-uni-picker",{staticClass:"item full",attrs:{value:t.typeIndex,range:t.typeList},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange2.apply(void 0,arguments)}}},[n("v-uni-input",{staticClass:"uni-input formInput downIcon",attrs:{"placeholder-style":"color:#D5D5D5",disabled:!0,placeholder:"请选择提案类别"},model:{value:t.currentType,callback:function(e){t.currentType=e},expression:"currentType"}})],1)],1),n("load-refresh",{ref:"loadRefresh",attrs:{isRefresh:!0,refreshTime:800,heightReduce:70,backgroundCover:"#ffffff",pageNo:t.currPage,totalPageNo:t.totalPage},on:{loadMore:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)},refresh:function(e){arguments[0]=e=t.$handleEvent(e),t.refresh.apply(void 0,arguments)}}},[n("v-uni-view",{attrs:{slot:"content-list"},slot:"content-list"},[n("v-uni-view",{staticClass:"msgList"},t._l(t.messageList,function(e,a){return n("v-uni-view",{key:a,staticClass:"con clearfix",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$tools.goToPage("detail")}}},[n("div",{staticClass:"content"},[n("div",{staticClass:"til text-1"},[t._v(t._s(e.title))]),n("div",{staticClass:"time text-1"},[t._v(t._s(e.time))])])])}),1)],1)],1)],1)},r=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return a})},f6cf:function(t,e,n){"use strict";var a=n("3736"),i=n.n(a);i.a},f75d:function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("75fc")),r={data:function(){for(var t=(new Date).getFullYear(),e=[],n=0;n<5;n++)e.push(t-n);return{currentType:"",typeIndex:0,typeList:["类别1","类别2","类别3"],currentYear:"",yearIndex:0,yearList:e,messageList:[],currPage:1,totalPage:1}},mounted:function(){this.$refs.loadRefresh.runRefresh()},methods:{bindPickerChange:function(t){this.yearIndex=t.target.value,this.currentYear=this.yearList[this.yearIndex],this.$refs.loadRefresh.runRefresh()},bindPickerChange2:function(t){this.typeIndex=t.target.value,this.currentType=this.typeList[this.typeIndex],this.$refs.loadRefresh.runRefresh()},loadMore:function(){this.getList()},refresh:function(){this.getList()},getList:function(){var t=this;setTimeout(function(){t.messageList=[].concat((0,i.default)(t.messageList),[{type:1,title:"会议通知标题",time:"2020-05-15 10:10"},{type:2,title:"会议通知标题",time:"2020-05-15 10:10"},{type:3,title:"会议通知标题",time:"2020-05-15 10:10"},{type:4,title:"会议通知标题",time:"2020-05-15 10:10"},{type:1,title:"会议通知标题",time:"2020-05-15 10:10"},{type:2,title:"会议通知标题",time:"2020-05-15 10:10"},{type:3,title:"会议通知标题",time:"2020-05-15 10:10"},{type:4,title:"会议通知标题",time:"2020-05-15 10:10"}]),t.currPage=1,t.totalPage=1,t.$refs.loadRefresh.loadOver()},1e3)}},watch:{type:function(){this.page=1,this.getList()}}};e.default=r}}]);