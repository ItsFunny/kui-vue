/*! kui-vue v1.7.8 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"2WXr":function(t,n,e){"use strict";e.r(n);var o=e("Qj+o"),i=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(n,t,function(){return o[t]})}(s);n.default=i.a},BorE:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={useInRouter:"import kui from 'kui-vue';\nVue.use(kui);\n\nrouter.beforeEach((to, from, next) => {\n  kui.Loading.start();\n  next();\n});\n\nrouter.afterEach(route => {\n  kui.Loading.finish();\n});",useInAjax:"<script>\n// 以jQuery的Ajax为例，部分代码省略\nimport $ from 'jquery';\nexport default {\n  methods: {\n    getData () {\n      this.$Loading.start();\n      $.ajax({\n        url: '/api/someurl',\n        type: 'get',\n        success: () => {\n          this.$Loading.finish();\n        }\n        error: () => {\n          this.$Loading.error();\n        }\n      });\n    }\n  }\n}\n<\/script>",test:'<Button @click="start()">start</Button>\n<Button @click="finish">finish</Button>\n<Button @click="error">error</Button>\n<Button @click="config">config</Button>\n<Button @click="upload(30)">upload 30</Button>\n<Button @click="upload(80)">upload 80</Button>\n<script>\n  methods: {\n    config() {\n      this.$Loading.config({\n      type: "line",\n      color: "orange",\n      height: 10\n      });\n    },\n    upload(percent){\n      this.$Loading.upload(percent);\n    },\n    start() {\n      this.$Loading.start();\n    },\n    finish() {\n      this.$Loading.finish();\n    },\n    error() {\n      this.$Loading.error();\n    }\n  }\n<\/script>',theme:"<Button @click=\"loading('flip')\">flip</Button>\n<Button @click=\"loading('bounce')\">bounce</Button>\n<Button @click=\"loading('zoom')\">zoom</Button>\n<Button @click=\"loading('rotate')\">rotate</Button>\n<script>\n...\nmethods: {\n  loading(type) {\n    this.$Loading.start(type);\n    setTimeout(() => {\n      this.$Loading.finish();\n    }, 3000);\n  },\n}\n...\n<\/script>"};n.default=o},BybE:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[e("div",{ref:"demo",staticClass:"k-demo-main"},[e("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),e("div",{staticClass:"k-desc"},[e("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),e("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[e("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),e("div",{staticClass:"k-demo-line"}),t._v(" "),e("Collapse",[e("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},i=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i})},C8VU:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,i=e("z7BB"),s=(o=i)&&o.__esModule?o:{default:o};n.default=s.default},HoEy:function(t,n,e){"use strict";e.r(n);var o=e("X27w"),i=e("2WXr");for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);var r=e("KHd+"),a=Object(r.a)(i.default,o.a,o.b,!1,null,null,null);n.default=a.exports},"Qj+o":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=r(e("BorE")),i=r(e("C8VU")),s=r(e("cF/K"));function r(t){return t&&t.__esModule?t:{default:t}}n.default={components:{Demo:i.default,Code:s.default},data:function(){return{code:o.default}},methods:{config:function(){this.$Loading.config({type:"line",color:"orange",height:10})},upload:function(t){this.$Loading.upload(t)},start:function(t){this.$Loading.start(t)},loading:function(t){var n=this;this.$Loading.start(t),setTimeout(function(){n.finish()},3e3)},finish:function(){this.$Loading.finish()},error:function(){this.$Loading.error()}}}},"U9/v":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=a(e("YEIV")),i=a(e("cF/K")),s=a(e("Ff65")),r=a(e("7+I9"));function a(t){return t&&t.__esModule?t:{default:t}}n.default={directives:{resize:r.default},components:{Code:i.default,Collapse:s.default},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"code-working":"code"},classes:function(){return["k-demo",(0,o.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}},X27w:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",[t._v("LoadingBar 加载进度")]),t._v(" "),e("h3",[t._v("用处")]),t._v(" "),e("p",[t._v("全局创建一个显示页面加载、异步请求、文件上传等的加载 或 进度条")]),t._v(" "),e("h3",[t._v("在路由中使用")]),t._v(" "),e("Code",{attrs:{lang:"javascript"}},[t._v(t._s(t.code.useInRouter))]),t._v(" "),e("h3",[t._v("在异步请求中使用")]),t._v(" "),e("Code",{attrs:{lang:"javascript"}},[t._v(t._s(t.code.useInAjax))]),t._v(" "),e("Demo",{attrs:{title:"模拟请求"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Button",{on:{click:function(n){t.start("line")}}},[t._v("start")]),t._v(" "),e("Button",{on:{click:t.finish}},[t._v("finish")]),t._v(" "),e("Button",{on:{click:t.error}},[t._v("error")]),t._v(" "),e("Button",{on:{click:t.config}},[t._v("config")]),t._v(" "),e("Button",{on:{click:function(n){t.upload(30)}}},[t._v("upload 30")]),t._v(" "),e("Button",{on:{click:function(n){t.upload(80)}}},[t._v("upload 80")])],1),t._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[e("code",[t._v("start")]),t._v("触发开始，\n      "),e("code",[t._v("finish")]),t._v("结束，\n      "),e("code",[t._v("upload")]),t._v("可以手动更新进度\n    ")]),t._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.test))])]),t._v(" "),e("Demo",{attrs:{title:"主题"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Button",{on:{click:function(n){t.loading("flip")}}},[t._v("flip")]),t._v(" "),e("Button",{on:{click:function(n){t.loading("bounce")}}},[t._v("bounce")]),t._v(" "),e("Button",{on:{click:function(n){t.loading("zoom")}}},[t._v("zoom")]),t._v(" "),e("Button",{on:{click:function(n){t.loading("rotate")}}},[t._v("rotate")])],1),t._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("用\n      "),e("code",[t._v("Loading")]),t._v("来 表示异步加载，不只是单纯的加载进度，很多种情况下，在异步加载的时候，不允许用户再一次进行操作，所以这种情况，建议使用以下几种方式进行模拟，在此种模拟方式的时候，默认会弹出透明浮层，直到\n      "),e("code",[t._v("finish")]),t._v(" 才可以进行第二操作。")]),t._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.theme))])]),t._v(" "),e("h3",[t._v("API")]),t._v(" "),e("p",[t._v("通过直接调用以下方法来使用组件：")]),t._v(" "),e("Code",{attrs:{lang:"js"}},[t._v("\n    this.$Loading.start() this.$Loading.finish() this.$Loading.error() this.$Loading.update(percent)\n  ")]),t._v(" "),e("p",[t._v("另外提供了全局配置和全局销毁的方法：")]),t._v(" "),e("Code",{attrs:{lang:"js"}},[t._v("\n    this.$Loading.config(options) this.$Loading.destroy()\n  ")]),t._v(" "),t._m(0)],1)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"table-border"},[e("table",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])]),t._v(" "),e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("进度的主题，可取值为 line，zoom，flip，bounce，rotate")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("line")])]),t._v(" "),e("tr",[e("td",[t._v("loading-text")]),t._v(" "),e("td",[t._v("加载中的文字提示，type为line无效")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("空")])]),t._v(" "),e("tr",[e("td",[t._v("color")]),t._v(" "),e("td",[t._v("进度条的颜色，type为line 有效")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("默认为主题颜色")])]),t._v(" "),e("tr",[e("td",[t._v("height")]),t._v(" "),e("td",[t._v("进度条的高度，type为line 有效 ")]),t._v(" "),e("td",[t._v("String，Number")]),t._v(" "),e("td",[t._v("2")])]),t._v(" "),e("tr",[e("td",[t._v("start")]),t._v(" "),e("td",[t._v("开始从 0 显示进度条，并自动加载进度，type为line有效，可传参[type,loading-text] ")]),t._v(" "),e("td",[t._v("Function")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("finish")]),t._v(" "),e("td",[t._v("结束进度条，自动补全剩余进度，type为line有效")]),t._v(" "),e("td",[t._v("Function")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("error")]),t._v(" "),e("td",[t._v("以错误的类型结束进度条，自动补全剩余进度 ，type为line有效")]),t._v(" "),e("td",[t._v("Function")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("update")]),t._v(" "),e("td",[t._v("精确加载到指定的进度，type为line有效")]),t._v(" "),e("td",[t._v("Function")]),t._v(" "),e("td",[t._v("-")])])])])}];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i})},sOOp:function(t,n,e){"use strict";e.r(n);var o=e("U9/v"),i=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(n,t,function(){return o[t]})}(s);n.default=i.a},z7BB:function(t,n,e){"use strict";e.r(n);var o=e("BybE"),i=e("sOOp");for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);var r=e("KHd+"),a=Object(r.a)(i.default,o.a,o.b,!1,null,null,null);n.default=a.exports}}]);