(function(e){function n(n){for(var t,r,s=n[0],c=n[1],u=n[2],l=0,p=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);g&&g(n);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,n=0;n<o.length;n++){for(var a=o[n],t=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(t=!1)}t&&(o.splice(n--,1),e=s(s.s=a[0]))}return e}var t={},i={index:0},o=[];function r(e){return s.p+"static/js/"+({"pages-askquestion-askquestion~pages-characterAnalysis-characterAnalysis":"pages-askquestion-askquestion~pages-characterAnalysis-characterAnalysis","pages-askquestion-askquestion":"pages-askquestion-askquestion","pages-backstage-backstage~pages-characterAnalysis-characterAnalysis":"pages-backstage-backstage~pages-characterAnalysis-characterAnalysis","pages-characterAnalysis-characterAnalysis":"pages-characterAnalysis-characterAnalysis","pages-backstage-backstage":"pages-backstage-backstage","pages-index-index":"pages-index-index"}[e]||e)+"."+{"pages-askquestion-askquestion~pages-characterAnalysis-characterAnalysis":"976d2884","pages-askquestion-askquestion":"e2a86903","pages-backstage-backstage~pages-characterAnalysis-characterAnalysis":"906c3e0e","pages-characterAnalysis-characterAnalysis":"9eee779c","pages-backstage-backstage":"edd8bb65","pages-index-index":"556e9a31"}[e]+".js"}function s(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var n=[],a=i[e];if(0!==a)if(a)n.push(a[2]);else{var t=new Promise((function(n,t){a=i[e]=[n,t]}));n.push(a[2]=t);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(e);var u=new Error;o=function(n){c.onerror=c.onload=null,clearTimeout(l);var a=i[e];if(0!==a){if(a){var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",u.name="ChunkLoadError",u.type=t,u.request=o,a[1](u)}i[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(n)},s.m=e,s.c=t,s.d=function(e,n,a){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)s.d(a,t,function(n){return e[n]}.bind(null,t));return a},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var g=u;o.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("38db")},"01e5":function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={pages:[{path:"pages/index/index",style:{navigationBarTitleText:"uni-app"}},{path:"pages/askquestion/askquestion",style:{navigationBarTitleText:"",enablePullDownRefresh:!1}},{path:"pages/characterAnalysis/characterAnalysis",style:{navigationBarTitleText:"",enablePullDownRefresh:!1}},{path:"pages/backstage/backstage",style:{navigationBarTitleText:"",enablePullDownRefresh:!1}}],globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"},uniIdRouter:{}};n.default=t},"251a":function(e,n,a){"use strict";var t=a("b5bb"),i=a.n(t);i.a},"2d31":function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=t},"38db":function(e,n,a){"use strict";var t=a("4ea4"),i=t(a("5530"));a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("7cbc"),a("1c31"),a("a9ff");var o=t(a("a33f")),r=t(a("e143"));r.default.config.productionTip=!1,r.default.prototype.$bus=new r.default,o.default.mpType="app";var s=new r.default((0,i.default)({},o.default));s.$mount()},"42c4":function(e,n,a){var t=a("24fb");n=t(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""]),e.exports=n},7579:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={appid:"__UNI__899A1B2"};n.default=t},"7cbc":function(e,n,a){"use strict";(function(e){var n=a("4ea4");a("13d5"),a("d3b7"),a("ac1f"),a("5319"),a("ddb0");var t=n(a("e143")),i={keys:function(){return[]}};e["____899A1B2____"]=!0,delete e["____899A1B2____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"},uniIdRouter:{}},e.__uniConfig.compilerVersion="3.5.3",e.__uniConfig.uniPlatform="h5",e.__uniConfig.appId="__UNI__899A1B2",e.__uniConfig.appName="性格测试",e.__uniConfig.appVersion="1.0.0",e.__uniConfig.appVersionCode="100",e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig.publicPath="/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey=void 0,e.__uniConfig.googleMapKey=void 0,e.__uniConfig.locale="",e.__uniConfig.fallbackLocale=void 0,e.__uniConfig.locales=i.keys().reduce((function(e,n){var a=n.replace(/\.\/(uni-app.)?(.*).json/,"$2"),t=i(n);return Object.assign(e[a]||(e[a]={}),t.common||t),e}),{}),e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=a.e,t.default.component("pages-index-index",(function(e){var n={component:a.e("pages-index-index").then(function(){return e(a("6711"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-askquestion-askquestion",(function(e){var n={component:Promise.all([a.e("pages-askquestion-askquestion~pages-characterAnalysis-characterAnalysis"),a.e("pages-askquestion-askquestion")]).then(function(){return e(a("40a5"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-characterAnalysis-characterAnalysis",(function(e){var n={component:Promise.all([a.e("pages-backstage-backstage~pages-characterAnalysis-characterAnalysis"),a.e("pages-askquestion-askquestion~pages-characterAnalysis-characterAnalysis"),a.e("pages-characterAnalysis-characterAnalysis")]).then(function(){return e(a("b1ff"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-backstage-backstage",(function(e){var n={component:Promise.all([a.e("pages-backstage-backstage~pages-characterAnalysis-characterAnalysis"),a.e("pages-backstage-backstage")]).then(function(){return e(a("cd33"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"uni-app"})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:44}},{path:"/pages/askquestion/askquestion",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",enablePullDownRefresh:!1})},[e("pages-askquestion-askquestion",{slot:"page"})])}},meta:{name:"pages-askquestion-askquestion",isNVue:!1,maxWidth:0,pagePath:"pages/askquestion/askquestion",windowTop:44}},{path:"/pages/characterAnalysis/characterAnalysis",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",enablePullDownRefresh:!1})},[e("pages-characterAnalysis-characterAnalysis",{slot:"page"})])}},meta:{name:"pages-characterAnalysis-characterAnalysis",isNVue:!1,maxWidth:0,pagePath:"pages/characterAnalysis/characterAnalysis",windowTop:44}},{path:"/pages/backstage/backstage",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",enablePullDownRefresh:!1})},[e("pages-backstage-backstage",{slot:"page"})])}},meta:{name:"pages-backstage-backstage",isNVue:!1,maxWidth:0,pagePath:"pages/backstage/backstage",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,a("c8ba"))},a33f:function(e,n,a){"use strict";a.r(n);var t=a("ca0b"),i=a("b113");for(var o in i)"default"!==o&&function(e){a.d(n,e,(function(){return i[e]}))}(o);a("251a");var r,s=a("f0c5"),c=Object(s["a"])(i["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],r);n["default"]=c.exports},b113:function(e,n,a){"use strict";a.r(n);var t=a("2d31"),i=a.n(t);for(var o in t)"default"!==o&&function(e){a.d(n,e,(function(){return t[e]}))}(o);n["default"]=i.a},b5bb:function(e,n,a){var t=a("42c4");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var i=a("4f06").default;i("2f29120e",t,!0,{sourceMap:!1,shadowMode:!1})},ca0b:function(e,n,a){"use strict";var t;a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){return t}));var i=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},o=[]}});