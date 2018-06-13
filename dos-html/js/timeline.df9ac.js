/*! kui-vue v1.7.9 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{BybE:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"resize",rawName:"v-resize",value:e.setHeight,expression:"setHeight"}],ref:"dom",class:e.classes,style:e.styles},[i("div",{ref:"demo",staticClass:"k-demo-main"},[i("div",{staticClass:"k-content"},[e._t("content")],2),e._v(" "),i("div",{staticClass:"k-desc"},[i("a",{staticClass:"k-desc-title"},[e._v(e._s(e.title))]),e._v(" "),i("div",{staticClass:"k-desc-content"},[e._t("desc")],2),e._v(" "),i("a",{staticClass:"k-code-expan",on:{click:e.toggle}},[i("Icon",{attrs:{type:e.icons}})],1)])]),e._v(" "),i("div",{staticClass:"k-demo-line"}),e._v(" "),i("Collapse",[i("Code",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"expand"}],ref:"code",attrs:{lang:e.lang}},[e._t("code")],2)],1)],1)},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},C8VU:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=i("z7BB"),s=(n=o)&&n.__esModule?n:{default:n};t.default=s.default},"U9/v":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(i("YEIV")),o=c(i("cF/K")),s=c(i("Ff65")),r=c(i("7+I9"));function c(e){return e&&e.__esModule?e:{default:e}}t.default={directives:{resize:r.default},components:{Code:o.default,Collapse:s.default},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"code-working":"code"},classes:function(){return["k-demo",(0,n.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var e=this.expand;this.expand=!e,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}},VxNB:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h2",[e._v("TimeLine 时间轴")]),e._v(" "),i("h3",[e._v("代码示例")]),e._v(" "),i("Demo",{attrs:{title:"基础"}},[i("div",{attrs:{slot:"content"},slot:"content"},[i("TimeLine",[i("TimeLineItem",[e._v("发布1.0版本")]),e._v(" "),i("TimeLineItem",[e._v("发布1.0版本")]),e._v(" "),i("TimeLineItem",[e._v("发布1.0版本")])],1)],1),e._v(" "),i("div",{attrs:{slot:"desc"},slot:"desc"},[i("code",[e._v("TimeLine")]),e._v("内部必须包含\n      "),i("code",[e._v("TimeLineItem")])]),e._v(" "),i("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.base))])]),e._v(" "),i("Demo",{attrs:{title:"图标"}},[i("div",{attrs:{slot:"content"},slot:"content"},[i("TimeLine",[i("TimeLineItem",{attrs:{icon:"ribbon-b"}},[e._v("发布2.0版本")]),e._v(" "),i("TimeLineItem",{attrs:{icon:"bug"}},[e._v("修复bug")]),e._v(" "),i("TimeLineItem",[e._v("发布1.0版本")])],1)],1),e._v(" "),i("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("给\n      "),i("code",[e._v("TimeLineItem")]),e._v("设置\n      "),i("code",[e._v("icon")]),e._v("可以改变图标展示")]),e._v(" "),i("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.withIcon))])]),e._v(" "),i("Demo",{attrs:{title:"颜色"}},[i("div",{attrs:{slot:"content"},slot:"content"},[i("TimeLine",[i("TimeLineItem",{attrs:{icon:"ribbon-b",color:"#cba302"}},[e._v("发布2.0版本")]),e._v(" "),i("TimeLineItem",{attrs:{icon:"bug",color:"red"}},[e._v("修复bug")]),e._v(" "),i("TimeLineItem",[e._v("发布1.0版本")])],1)],1),e._v(" "),i("div",{attrs:{slot:"desc"},slot:"desc"},[i("code",[e._v("color")]),e._v("可以改变图标的颜色")]),e._v(" "),i("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.color))])]),e._v(" "),i("h3",[e._v("API")]),e._v(" "),e._m(0)],1)},o=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"table-border"},[i("table",[i("tr",[i("th",[e._v("属性")]),e._v(" "),i("th",[e._v("说明")]),e._v(" "),i("th",[e._v("类型")]),e._v(" "),i("th",[e._v("默认值")])]),e._v(" "),i("tr",[i("td",[e._v("icon")]),e._v(" "),i("td",[e._v("时间轴item 图标")]),e._v(" "),i("td",[e._v("String")]),e._v(" "),i("td",[e._v("-")])]),e._v(" "),i("tr",[i("td",[e._v("color")]),e._v(" "),i("td",[e._v("时间轴item 颜色")]),e._v(" "),i("td",[e._v("String")]),e._v(" "),i("td",[e._v("-")])]),e._v(" "),i("tr",[i("td",[e._v("dot")]),e._v(" "),i("td",[e._v("自定义时间轴点")]),e._v(" "),i("td",[e._v("slot")]),e._v(" "),i("td",[e._v("-")])])])])}];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},WhO8:function(e,t,i){"use strict";i.r(t);var n=i("iLmI"),o=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);t.default=o.a},aecv:function(e,t,i){"use strict";i.r(t);var n=i("VxNB"),o=i("WhO8");for(var s in o)"default"!==s&&function(e){i.d(t,e,function(){return o[e]})}(s);var r=i("KHd+"),c=Object(r.a)(o.default,n.a,n.b,!1,null,null,null);t.default=c.exports},iLmI:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(i("nPK5")),o=s(i("C8VU"));function s(e){return e&&e.__esModule?e:{default:e}}t.default={components:{Demo:o.default},data:function(){return{code:n.default}}}},nPK5:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={base:"<TimeLine>\n   <TimeLineItem>发布1.0版本</TimeLineItem>\n   <TimeLineItem>发布1.0版本</TimeLineItem>\n   <TimeLineItem>发布1.0版本</TimeLineItem>\n</TimeLine>",withIcon:'<TimeLine>\n   <TimeLineItem icon="ribbon-b">发布2.0版本</TimeLineItem>\n   <TimeLineItem icon="bug">修复bug</TimeLineItem>\n   <TimeLineItem>发布1.0版本</TimeLineItem>\n</TimeLine>',color:'<TimeLine>\n   <TimeLineItem icon="ribbon-b" color="#cba302">发布2.0版本</TimeLineItem>\n   <TimeLineItem icon="bug" color="red">修复bug</TimeLineItem>\n   <TimeLineItem>发布1.0版本</TimeLineItem>\n</TimeLine>'};t.default=n},sOOp:function(e,t,i){"use strict";i.r(t);var n=i("U9/v"),o=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);t.default=o.a},z7BB:function(e,t,i){"use strict";i.r(t);var n=i("BybE"),o=i("sOOp");for(var s in o)"default"!==s&&function(e){i.d(t,e,function(){return o[e]})}(s);var r=i("KHd+"),c=Object(r.a)(o.default,n.a,n.b,!1,null,null,null);t.default=c.exports}}]);