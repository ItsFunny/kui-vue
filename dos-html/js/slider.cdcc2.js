/*! kui-vue v1.7.8 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"/cOK":function(t,e,n){"use strict";n.r(e);var i=n("7aTK"),s=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e.default=s.a},"7aTK":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(n("xgGv")),s=o(n("C8VU"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={components:{Demo:s.default},data:function(){return{code:i.default}}}},BybE:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[n("div",{ref:"demo",staticClass:"k-demo-main"},[n("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),n("div",{staticClass:"k-desc"},[n("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),n("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[n("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),n("div",{staticClass:"k-demo-line"}),t._v(" "),n("Collapse",[n("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},C8VU:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,s=n("z7BB"),o=(i=s)&&i.__esModule?i:{default:i};e.default=o.default},"NH+W":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Slider 滑块")]),t._v(" "),n("p",[t._v("滑动型输入器，展示当前值和可选范围。")]),t._v(" "),n("h3",[t._v("代码示例")]),t._v(" "),n("Demo",{attrs:{title:"基础"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Slider")],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"}),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"})])],1)},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},"U9/v":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(n("YEIV")),s=r(n("cF/K")),o=r(n("Ff65")),a=r(n("7+I9"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={directives:{resize:a.default},components:{Code:s.default,Collapse:o.default},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"code-working":"code"},classes:function(){return["k-demo",(0,i.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}},nkfH:function(t,e,n){"use strict";n.r(e);var i=n("NH+W"),s=n("/cOK");for(var o in s)"default"!==o&&function(t){n.d(e,t,function(){return s[t]})}(o);var a=n("KHd+"),r=Object(a.a)(s.default,i.a,i.b,!1,null,null,null);e.default=r.exports},sOOp:function(t,e,n){"use strict";n.r(e);var i=n("U9/v"),s=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e.default=s.a},xgGv:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={base:""};e.default=i},z7BB:function(t,e,n){"use strict";n.r(e);var i=n("BybE"),s=n("sOOp");for(var o in s)"default"!==o&&function(t){n.d(e,t,function(){return s[t]})}(o);var a=n("KHd+"),r=Object(a.a)(s.default,i.a,i.b,!1,null,null,null);e.default=r.exports}}]);