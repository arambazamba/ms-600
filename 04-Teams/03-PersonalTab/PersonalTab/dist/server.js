!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=require("express-msteams-host")},function(e,t,r){e.exports=r(2)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(3),o=r(4),s=r(5),i=r(6),u=r(0),c=r(7),a=r(8),f=c("msteams");f("Initializing Microsoft Teams Express hosted App..."),r(9).config();const p=r(10),l=n(),d=process.env.port||process.env.PORT||3007;l.use(n.json({verify:(e,t,r,n)=>{e.rawBody=r.toString()}})),l.use(n.urlencoded({extended:!0})),l.set("views",s.join(__dirname,"/")),l.use(i("tiny")),l.use(a()),l.use("/scripts",n.static(s.join(__dirname,"web/scripts"))),l.use("/assets",n.static(s.join(__dirname,"web/assets"))),l.use(u.MsTeamsApiRouter(p)),l.use(u.MsTeamsPageRouter({root:s.join(__dirname,"web/"),components:p})),l.use("/",n.static(s.join(__dirname,"web/"),{index:"index.html"})),l.set("port",d),o.createServer(l).listen(d,()=>{f("Server running on "+d)})},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("morgan")},function(e,t){e.exports=require("debug")},function(e,t){e.exports=require("compression")},function(e,t){e.exports=require("dotenv")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.nonce={},function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(11))},function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(i=(s<3?o(i):s>3?o(t,r,i):o(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i};Object.defineProperty(t,"__esModule",{value:!0});const o=r(0);let s=class{};s=n([o.PreventIframe("/learnPersonalTab/index.html")],s),t.LearnPersonalTab=s}]);
//# sourceMappingURL=server.js.map