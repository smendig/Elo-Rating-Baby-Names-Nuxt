webpackJsonp([7],{"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}}},"2dGh":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[r("img",{staticClass:"imgnino bebeAnimado",attrs:{src:n("IY4p")}}),404===t.error.statusCode?r("h1",{staticClass:"title"},[t._v("\n    Esta página no existe\n  ")]):r("h1",{staticClass:"title"},[t._v("\n    "+t._s(t.error.statusCode)+"\n  ")]),r("h2",{staticClass:"infoo"},[t._v("\n    Ha habido algún error o esta página no existe, esto ha sido un proyecto hecho rápido es posible que haya muuuchos fallos\n  ")]),404===t.error.statusCode?r("nuxt-link",{staticClass:"button",attrs:{to:"/"}},[t._v("\n    Volver al principio\n  ")]):t._e()],1)};r._withStripped=!0;var a={render:r,staticRenderFns:[]};e.a=a},"87CO":function(t,e,n){"use strict";var r=n("/5sW"),a=n("3EgV"),o=n.n(a);r.default.use(o.a,{theme:{primary:"#7986CB",secondary:"#F48FB1",accent:"#37474F",error:"#FF1744",warning:"#ffeb3b",info:"#2196f3",success:"#4caf50"}})},"8s+A":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".container[data-v-f418cc52]{text-align:center}.title[data-v-f418cc52]{margin-top:15px;font-size:5em}.infoo[data-v-f418cc52]{font-weight:300;color:#000;margin:10px;padding:10px;border:1px solid #000}.button[data-v-f418cc52]{margin-top:50px;color:#000}.bebeAnimado[data-v-f418cc52]{position:relative;width:200px;margin:auto;height:auto;-webkit-animation-name:babymovement-data-v-f418cc52;animation-name:babymovement-data-v-f418cc52;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-duration:4s;animation-duration:4s}@-webkit-keyframes babymovement-data-v-f418cc52{0%{left:0;-webkit-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{left:-4px;-webkit-transform:rotateX(25deg) rotate(4deg);transform:rotateX(25deg) rotate(4deg)}50%{left:4px;-webkit-transform:rotateX(-20deg) rotate(-4deg);transform:rotateX(-20deg) rotate(-4deg)}to{left:0;-webkit-transform:rotateX(0deg) rotate(0deg);transform:rotateX(0deg) rotate(0deg)}}@keyframes babymovement-data-v-f418cc52{0%{left:0;-webkit-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{left:-4px;-webkit-transform:rotateX(25deg) rotate(4deg);transform:rotateX(25deg) rotate(4deg)}50%{left:4px;-webkit-transform:rotateX(-20deg) rotate(-4deg);transform:rotateX(-20deg) rotate(-4deg)}to{left:0;-webkit-transform:rotateX(0deg) rotate(0deg);transform:rotateX(0deg) rotate(0deg)}}",""])},F88d:function(t,e,n){"use strict";var r=n("vGNT"),a=n("srTi"),o=!1;var i=function(t){o||n("u/U8")},s=n("VU/8")(r.a,a.a,!1,i,null,null);s.options.__file=".nuxt\\components\\nuxt-loading.vue",e.a=s.exports},"FQs/":function(t,e,n){var r=n("8s+A");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("rjj0").default)("e40c0c5a",r,!1,{sourceMap:!1})},"HBB+":function(t,e,n){"use strict";e.a={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,o=e.data,i=e.props;o.nuxtChild=!0;for(var s=n,u=n.$nuxt.nuxt.transitions,c=n.$nuxt.nuxt.defaultTransition,f=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&f++,n=n.$parent;o.nuxtChildDepth=f;var l=u[f]||c,d={};r.forEach(function(t){void 0!==l[t]&&(d[t]=l[t])});var p={};a.forEach(function(t){"function"==typeof l[t]&&(p[t]=l[t].bind(s))});var h=p.beforeEnter;p.beforeEnter=function(t){if(window.$nuxt.$emit("triggerScroll"),h)return h.call(s,t)};var m=[t("router-view",o)];return void 0!==i.keepAlive&&(m=[t("keep-alive",m)]),t("transition",{props:d,on:p},m)}};var r=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],a=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"]},"Hot+":function(t,e,n){"use strict";var r=n("/5sW"),a=n("HBB+"),o=n("To1F"),i=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:a.a,NuxtError:o.a}}},IY4p:function(t,e,n){t.exports=n.p+"img/boy.954fe10.svg"},J2Ti:function(t,e,n){"use strict";n.d(e,"a",function(){return w});var r=n("woOf"),a=n.n(r),o=n("BO1k"),i=n.n(o),s=n("/5sW"),u=n("NYxO");s.default.use(u.default);var c=n("QA5y"),f=c.keys(),l={},d=void 0;if(f.forEach(function(t){-1!==t.indexOf("./index.")&&(d=t)}),d&&(l=k(d)),"function"!=typeof l){l.modules||(l.modules={});var p=!0,h=!1,m=void 0;try{for(var v,x=i()(f);!(p=(v=x.next()).done);p=!0){var g=v.value,y=g.replace(/^\.\//,"").replace(/\.(js)$/,"");if("index"!==y){var b=y.split(/\//);(t=_(l,b))[y=b.pop()]=k(g),t[y].namespaced=!0}}}catch(t){h=!0,m=t}finally{try{!p&&x.return&&x.return()}finally{if(h)throw m}}}var w=l instanceof Function?l:function(){return new u.default.Store(a()({strict:!1},l,{state:l.state instanceof Function?l.state():{}}))};function k(t){var e=c(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function _(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},_(t.modules[n],e)}},QA5y:function(t,e,n){var r={"./index.js":"vdRI"};function a(t){return n(o(t))}function o(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id="QA5y"},R2N8:function(t,e,n){"use strict";var r=n("424j");e.a=function(t){var e=t.store;Object(r.a)({paths:["per"]})(e)}},T23V:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,a,o,i=n("pFYg"),s=n.n(i),u=n("//Fk"),c=n.n(u),f=n("Xxa5"),l=n.n(f),d=n("mvHQ"),p=n.n(d),h=n("exGp"),m=n.n(h),v=n("fZjL"),x=n.n(v),g=n("woOf"),y=n.n(g),b=n("/5sW"),w=n("unZF"),k=n("qcny"),_=n("YLfZ"),C=(r=m()(l.a.mark(function t(e,n,r){var a,o,i=this;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!j.nuxt.err||n.path!==e.path,this._queryChanged=p()(e.query)!==p()(n.query),this._diffQuery=this._queryChanged?Object(_.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,Object(_.k)(e);case 7:a=t.sent,!this._pathChanged&&this._queryChanged&&a.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},o=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:o,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])})),function(t,e,n){return r.apply(this,arguments)}),$=(a=m()(l.a.mark(function t(e,n,r){var a,o,i,s,u,f,d,p,h=this;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return a=!1,o=function(t){if(n.path===t.path&&h.$loading.finish&&h.$loading.finish(),n.path!==t.path&&h.$loading.pause&&h.$loading.pause(),!a){a=!0;var e=[];E=Object(_.e)(n,e).map(function(t,r){return Object(_.b)(n.matched[e[r]].path)(n.params)}),r(t)}},t.next=6,Object(_.m)(j,{route:e,from:n,next:o.bind(this)});case 6:if(this._dateLastError=j.nuxt.dateErr,this._hadError=!!j.nuxt.err,i=[],(s=Object(_.e)(e,i)).length){t.next=24;break}return t.next=13,X.call(this,s,j.context);case 13:if(!a){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof k.a.layout?k.a.layout(j.context):k.a.layout);case 17:return u=t.sent,t.next=20,X.call(this,s,j.context,u);case 20:if(!a){t.next=22;break}return t.abrupt("return");case 22:return j.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 24:return s.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(F(s,e,n)),t.prev=26,t.next=29,X.call(this,s,j.context);case 29:if(!a){t.next=31;break}return t.abrupt("return");case 31:if(!j.context._errored){t.next=33;break}return t.abrupt("return",r());case 33:return"function"==typeof(f=s[0].options.layout)&&(f=f(j.context)),t.next=37,this.loadLayout(f);case 37:return f=t.sent,t.next=40,X.call(this,s,j.context,f);case 40:if(!a){t.next=42;break}return t.abrupt("return");case 42:if(!j.context._errored){t.next=44;break}return t.abrupt("return",r());case 44:if(d=!0,s.forEach(function(t){d&&"function"==typeof t.options.validate&&(d=t.options.validate({params:e.params||{},query:e.query||{},store:O}))}),d){t.next=49;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 49:return t.next=51,c.a.all(s.map(function(t,n){if(t._path=Object(_.b)(e.matched[i[n]].path)(e.params),t._dataRefresh=!1,h._pathChanged&&t._path!==E[n])t._dataRefresh=!0;else if(!h._pathChanged&&h._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return h._diffQuery[t]}))}if(!h._hadError&&h._isMounted&&!t._dataRefresh)return c.a.resolve();var a=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,s=!!t.options.fetch,u=o&&s?30:45;if(o){var f=Object(_.j)(t.options.asyncData,j.context).then(function(e){Object(_.a)(t,e),h.$loading.increase&&h.$loading.increase(u)});a.push(f)}if(s){var l=t.options.fetch(j.context);l&&(l instanceof c.a||"function"==typeof l.then)||(l=c.a.resolve(l)),l.then(function(t){h.$loading.increase&&h.$loading.increase(u)}),a.push(l)}return c.a.all(a)}));case 51:a||(this.$loading.finish&&this.$loading.finish(),E=s.map(function(t,n){return Object(_.b)(e.matched[i[n]].path)(e.params)}),r()),t.next=66;break;case 54:return t.prev=54,t.t0=t.catch(26),t.t0||(t.t0={}),E=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(p=k.a.layout)&&(p=p(j.context)),t.next=63,this.loadLayout(p);case 63:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 66:case"end":return t.stop()}},t,this,[[26,54]])})),function(t,e,n){return a.apply(this,arguments)}),R=(o=m()(l.a.mark(function t(e){var n,r,a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return j=e.app,T=e.router,O=e.store,t.next=5,c.a.all(N(T));case 5:if(n=t.sent,r=new b.default(j),a=function(){r.$mount("#__nuxt"),b.default.nextTick(function(){I(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(F(n,T.currentRoute)),E=T.currentRoute.matched.map(function(t){return Object(_.b)(t.path)(T.currentRoute.params)})),r.$loading={},A.error&&r.error(A.error),T.beforeEach(C.bind(r)),T.beforeEach($.bind(r)),T.afterEach(q),T.afterEach(U.bind(r)),!A.serverRendered){t.next=19;break}return a(),t.abrupt("return");case 19:$.call(r,T.currentRoute,T.currentRoute,function(t){if(!t)return q(T.currentRoute,T.currentRoute),M.call(r,T.currentRoute),void a();T.push(t,function(){return a()},function(t){if(!t)return a();console.error(t)})});case 20:case"end":return t.stop()}},t,this)})),function(t){return o.apply(this,arguments)}),E=[],j=void 0,T=void 0,O=void 0,A=window.__NUXT__||{},S=b.default.config.errorHandler;function F(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,a=Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return n.apply(void 0,a)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=y()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var a=r(n.matched[0].components.default);x()(a).filter(function(t){return a[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=a[t]})}return e})}function L(t,e){return A.serverRendered&&e&&Object(_.a)(t,e),t._Ctor=t,t}function N(t){var e,n=this,r=Object(_.d)(t.options.base,t.options.mode);return Object(_.c)(t.match(r),(e=m()(l.a.mark(function t(e,r,a,o,i){var s;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return s=L(Object(_.l)(e),A.data?A.data[i]:null),a.components[o]=s,t.abrupt("return",s);case 7:case"end":return t.stop()}},t,n)})),function(t,n,r,a,o){return e.apply(this,arguments)}))}function X(t,e,n){var r=this,a=[],o=!1;if(void 0!==n&&(a=[],n.middleware&&(a=a.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(a=a.concat(t.options.middleware))})),a=a.map(function(t){return"function"==typeof t?t:("function"!=typeof w.a[t]&&(o=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),w.a[t])}),!o)return Object(_.i)(a,e)}function q(t,e){Object(_.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":s()(t))||t.options||((t=b.default.extend(t))._Ctor=t,n.components[r]=t),t})}function M(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?k.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(j.context)),this.setLayout(e)}function U(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||b.default.nextTick(function(){Object(_.f)(t,[]).forEach(function(t,e){if(t&&t.constructor._dataRefresh&&E[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)b.default.set(t.$data,r,n[r])}}),M.call(n,t)})}function I(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),T.afterEach(function(e,n){b.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}b.default.config.errorHandler=function(t,e,n){var r={statusCode:t.statusCode||t.name||"Whoops!",message:t.message||t.toString()};if(e&&e.$root&&e.$root.$nuxt&&e.$root.$nuxt.error&&"render function"!==n&&e.$root.$nuxt.error(r),"function"==typeof S)return S.apply(void 0,arguments);console.error(t.message||r.message)},Object(k.b)().then(R).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},To1F:function(t,e,n){"use strict";var r=n("Wm8r"),a=n("2dGh"),o=!1;var i=function(t){o||n("FQs/")},s=n("VU/8")(r.a,a.a,!1,i,"data-v-f418cc52",null);s.options.__file="layouts\\error.vue",e.a=s.exports},WRRc:function(t,e,n){"use strict";e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},Wm8r:function(t,e,n){"use strict";e.a={props:["error"]}},XSDV:function(t,e,n){var r=n("jAb+");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("rjj0").default)("dd5b8424",r,!1,{sourceMap:!1})},YLfZ:function(t,e,n){"use strict";e.a=function(t,e){var n=t.options.data||g;if(!e&&t.options.hasAsyncData)return;t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),v()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)},e.l=y,e.e=b,e.f=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))},e.c=w,e.k=k,n.d(e,"h",function(){return $}),n.d(e,"m",function(){return R}),e.i=function t(e,n){if(!e.length||n._redirected||n._errored)return d.a.resolve();return E(e[0],n).then(function(){return t(e.slice(1),n)})},e.j=E,e.d=function(t,e){var n=window.location.pathname;if("hash"===e)return window.location.hash.replace(/^#\//,"");t&&0===n.indexOf(t)&&(n=n.slice(t.length));return(n||"/")+window.location.search+window.location.hash},e.b=function(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===i()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},s=r||{},u=s.pretty?T:encodeURIComponent,c=0;c<t.length;c++){var f=t[c];if("string"!=typeof f){var l,d=i[f.name];if(null==d){if(f.optional){f.partial&&(o+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(d)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+a()(d)+"`");if(0===d.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var p=0;p<d.length;p++){if(l=u(d[p]),!e[c].test(l))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+a()(l)+"`");o+=(0===p?f.prefix:f.delimiter)+l}}else{if(l=f.asterisk?encodeURI(d).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):u(d),!e[c].test(l))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+l+'"');o+=f.prefix+l}}else o+=f}return o}}(function(t,e){var n,r=[],a=0,o=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=j.exec(t));){var u=n[0],c=n[1],f=n.index;if(i+=t.slice(o,f),o=f+u.length,c)i+=c[1];else{var l=t[o],d=n[2],p=n[3],h=n[4],m=n[5],v=n[6],x=n[7];i&&(r.push(i),i="");var g=null!=d&&null!=l&&l!==d,y="+"===v||"*"===v,b="?"===v||"*"===v,w=n[2]||s,k=h||m;r.push({name:p||a++,prefix:d||"",delimiter:w,optional:b,repeat:y,partial:g,asterisk:!!x,pattern:k?A(k):x?".*":"[^"+O(w)+"]+?"})}}o<t.length&&(i+=t.substr(o));i&&r.push(i);return r}(t,e))},e.g=function(t,e){var n={},r=v()({},t,e);for(var a in r)String(t[a])!==String(e[a])&&(n[a]=!0);return n};var r=n("mvHQ"),a=n.n(r),o=n("pFYg"),i=n.n(o),s=n("Xxa5"),u=n.n(s),c=n("exGp"),f=n.n(c),l=n("//Fk"),d=n.n(l),p=n("fZjL"),h=n.n(p),m=n("Dd8w"),v=n.n(m),x=n("/5sW"),g=function(){return{}};function y(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=x.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function b(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function w(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function k(t){var e,n=this;return d.a.all(w(t,(e=f()(u.a.mark(function t(e,r,a,o){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",a.components[o]=y(e));case 5:case"end":return t.stop()}},t,n)})),function(t,n,r,a){return e.apply(this,arguments)})))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var _,C,$=(_=f()(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e);case 2:return t.abrupt("return",v()({},e,{meta:b(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)})),function(t){return _.apply(this,arguments)}),R=(C=f()(u.a.mark(function t(e,n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context){t.next=14;break}t.t0=!0,t.t1=e,t.t2=e.store,t.t3=n.payload,t.t4=n.error,t.t5={},e.context={get isServer(){return console.warn("context.isServer has been deprecated, please use process.server instead."),!1},get isClient(){return console.warn("context.isClient has been deprecated, please use process.client instead."),!0},isStatic:t.t0,isDev:!1,isHMR:!1,app:t.t1,store:t.t2,payload:t.t3,error:t.t4,base:"/",env:t.t5},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var a=void 0===n?"undefined":i()(n);if("number"==typeof t||"undefined"!==a&&"object"!==a||(r=n||{},a=void 0===(n=t)?"undefined":i()(n),t=302),"object"===a&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=S(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__;case 14:if(e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=22;break}return t.next=21,$(n.route);case 21:e.context.route=t.sent;case 22:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=28;break}return t.next=27,$(n.from);case 27:e.context.from=t.sent;case 28:case"end":return t.stop()}},t,this)})),function(t,e){return C.apply(this,arguments)});function E(t,e){var n=void 0;return(n=2===t.length?new d.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof d.a||"function"==typeof n.then)||(n=d.a.resolve(n)),n}var j=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function T(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function O(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function A(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function S(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var o=t.split("/"),i=(n?n+"://":"//")+o.shift(),s=o.filter(Boolean).join("/"),u=void 0;return 2===(o=s.split("#")).length&&(s=o[0],u=o[1]),i+=s?"/"+s:"",e&&"{}"!==a()(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return h()(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=u?"#"+u:""}},bM5T:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;-webkit-transition:width .2s,opacity .4s;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}",""])},"jAb+":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"*{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}body{font-family:Roboto,sans-serif;background-color:#d9deff}.flexcenter{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.application--wrap{background-color:#d9deff}.slide-fade-enter-active{-webkit-transition:all .3s ease;transition:all .3s ease}.slide-fade-leave-active{-webkit-transition:all .8s cubic-bezier(1,.5,.8,1);transition:all .8s cubic-bezier(1,.5,.8,1)}.slide-fade-enter,.slide-fade-leave-to{-webkit-transform:translateX(10px);transform:translateX(10px);opacity:0}.slideup-fade-enter-active{-webkit-transition:all .3s ease;transition:all .3s ease}.slideup-fade-leave-active{-webkit-transition:all .8s cubic-bezier(1,.5,.8,1);transition:all .8s cubic-bezier(1,.5,.8,1)}.slideup-fade-enter,.slideup-fade-leave-to{-webkit-transform:translateY(10px);transform:translateY(10px);opacity:0}.fade-enter-active{-webkit-transition:all .3s ease;transition:all .3s ease}.fade-leave-active{-webkit-transition:all .8s;transition:all .8s}.fade-enter,.fade-leave-to{opacity:0}.fadeoutfast-enter-active{-webkit-transition:all .5s ease;transition:all .5s ease}.fadeoutfast-leave-active{-webkit-transition:all .3s;transition:all .3s}.fadeoutfast-enter,.fadeoutfast-leave-to{opacity:0}",""])},mtxM:function(t,e,n){"use strict";e.a=function(){return new i.default({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:l,routes:[{path:"/resultados",component:s,name:"resultados"},{path:"/elige",component:u,name:"elige"},{path:"/aniadirnombre",component:c,name:"aniadirnombre"},{path:"/",component:f,name:"index"}],fallback:!1})};var r=n("//Fk"),a=n.n(r),o=n("/5sW"),i=n("/ocq");o.default.use(i.default);var s=function(){return n.e(0).then(n.bind(null,"RLz4")).then(function(t){return t.default||t})},u=function(){return n.e(3).then(n.bind(null,"296u")).then(function(t){return t.default||t})},c=function(){return n.e(2).then(n.bind(null,"ch+S")).then(function(t){return t.default||t})},f=function(){return n.e(1).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})};window.history.scrollRestoration="manual";var l=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new a.a(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})}},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return O});var r=n("Xxa5"),a=n.n(r),o=n("//Fk"),i=(n.n(o),n("C4MV")),s=n.n(i),u=n("woOf"),c=n.n(u),f=n("Dd8w"),l=n.n(f),d=n("exGp"),p=n.n(d),h=n("MU8w"),m=(n.n(h),n("/5sW")),v=n("p3jY"),x=n.n(v),g=n("mtxM"),y=n("0F0d"),b=n("HBB+"),w=n("WRRc"),k=n("To1F"),_=n("Hot+"),C=n("yTq1"),$=n("YLfZ"),R=n("J2Ti"),E=n("87CO"),j=n("R2N8");n.d(e,"a",function(){return k.a});var T,O=(T=p()(a.a.mark(function t(e){var n,r,o,i,u,f,d;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(g.a)(e),(r=Object(R.a)(e)).$router=n,o=l()({router:n,store:r,nuxt:{defaultTransition:A,transitions:[A],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},A,{name:t}):c()({},A,t):A}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,o.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},C.a),r.app=o,i=e?e.next:function(t){return o.router.push(t)},u=void 0,e?u=n.resolve(e.url).route:(f=Object($.d)(n.options.base),u=n.resolve(f).route),t.next=10,Object($.m)(o,{route:u,next:i,error:o.nuxt.error.bind(o),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 10:if(d=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");o[t="$"+t]=e,r[t]=o[t];var n="__nuxt_"+t+"_installed__";m.default[n]||(m.default[n]=!0,m.default.use(function(){m.default.prototype.hasOwnProperty(t)||s()(m.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),"function"!=typeof E.default){t.next=15;break}return t.next=15,Object(E.default)(o.context,d);case 15:if("function"!=typeof j.a){t.next=19;break}return t.next=19,Object(j.a)(o.context,d);case 19:t.next=22;break;case 22:return t.abrupt("return",{app:o,router:n,store:r});case 23:case"end":return t.stop()}},t,this)})),function(t){return T.apply(this,arguments)});m.default.component(y.a.name,y.a),m.default.component(b.a.name,b.a),m.default.component(w.a.name,w.a),m.default.component(_.a.name,_.a),m.default.use(x.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var A={name:"page",mode:"out-in",appear:!0,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},srTi:function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};r._withStripped=!0;var a={render:r,staticRenderFns:[]};e.a=a},"u/U8":function(t,e,n){var r=n("bM5T");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("rjj0").default)("3f8853d8",r,!1,{sourceMap:!1})},unZF:function(t,e,n){"use strict";e.a={}},vGNT:function(t,e,n){"use strict";var r=n("/5sW");e.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#3B8070",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},vdRI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("NYxO");e.default=function(){return new r.default.Store({state:{per:{username:null,localRanking:{},prevu:""},nameList:[],ultimoVoto:{user:null,b:null,time:null},ultimoAniadido:{user:null,name:null,time:null},nedry:!1},getters:{},mutations:{setNamelist:function(t,e){t.nameList=e},setUsername:function(t,e){t.per.username=e,e&&!t.per.localRanking.hasOwnProperty(e)&&(t.per.localRanking[e]=[])},setLocalRanking:function(t,e){var n=e.u,r=e.r;t.per.localRanking[n]=r},resetLocalRanking:function(t,e){t.per.localRanking={},e&&(t.per.localRanking[e]=[])},resetUserLocalRanking:function(t,e){e&&(t.per.localRanking[e]=[])},setPushToLocalRanking:function(t,e){var n=e.u,r=e.r;t.per.localRanking[n].push(r)},addPrevu:function(t,e){t.per.prevu+="||"+e},setUltimoVoto:function(t,e){t.ultimoVoto=e},setUltimoAniadido:function(t,e){t.ultimoAniadido=e},setNedry:function(t,e){t.nedry=e}},actions:{updateList:function(t,e){(0,t.commit)("setNamelist",JSON.parse('[{"i":84,"name":"Liher","rating":1570,"s":36},{"i":94,"name":"Igor","rating":1432,"s":33},{"i":114,"name":"Alain","rating":1623,"s":63},{"i":105,"name":"Oihan","rating":1704,"s":60},{"i":102,"name":"Kaiet","rating":1270,"s":27},{"i":111,"name":"Kepa","rating":1498,"s":43},{"i":145,"name":"Luken","rating":1662,"s":72},{"rating":1418,"name":"Manex","i":110,"s":33},{"rating":1638,"name":"Jon","i":82,"s":50},{"rating":1654,"name":"Aner","i":109,"s":60},{"rating":1620,"name":"Izei","i":97,"s":45},{"rating":1703,"name":"Eki","i":94,"s":52},{"rating":1569,"name":"Ibai","i":110,"s":55},{"rating":1603,"name":"Paul","i":106,"s":60},{"rating":1573,"name":"Mikel","i":97,"s":56},{"rating":1361,"name":"Hugo","i":26,"s":4},{"rating":1544,"name":"Unax","i":6,"s":4}]')),e&&e()},updateUltimoVoto:function(t){(0,t.commit)("setUltimoVoto",JSON.parse('{"user":"Jon Ander","b":[{"rating":1561,"name":"Ibai","i":109,"s":54},{"rating":1369,"name":"Hugo","i":25,"s":4}],"time":1526123739374}'))},updateUltimoAniadido:function(t){(0,t.commit)("setUltimoAniadido",JSON.parse('{"user":"Usta","name":"Unax","time":1524247337257}'))},localRankingCalc:function(t,e){var n=t.commit,r=t.state,a=e.u,o=e.n;r.per.localRanking[a]instanceof Array||n("setLocalRanking",{u:a,r:[]});var i=r.per.localRanking[a].find(function(t){return t.name===o[0].name}),s=r.per.localRanking[a].find(function(t){return t.name===o[1].name});i||n("setPushToLocalRanking",{u:a,r:i={rating:1500,name:o[0].name,i:0}}),s||n("setPushToLocalRanking",{u:a,r:s={rating:1500,name:o[1].name,i:0}});var u=function(t,e,n){if(-1===[0,.5,1].indexOf(n))return null;var r=1/(1+Math.pow(10,(e-t)/400));return Math.round(32*(n-r))}(i.rating,s.rating,1);i.rating+=u,s.rating-=u,i.s+=1,i.i+=1,s.i+=1}}})}},yTq1:function(t,e,n){"use strict";var r=n("//Fk"),a=n.n(r),o=n("/5sW"),i=n("F88d"),s=n("XSDV"),u=(n.n(s),{_default:function(){return n.e(5).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})},_empty:function(){return n.e(4).then(n.bind(null,"EIoS")).then(function(t){return t.default||t})}}),c={};e.a={head:{title:"RaiSabin Baby Name",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:""},{hid:"robots",name:"robots",content:"noindex,nofollow"}],link:[{rel:"shortcut icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"icon",type:"image/png",href:"/favicon.png"},{rel:"apple-touch-icon",href:"/apple-touch-icon.png"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",type:"text/css"},{rel:"stylesheet",href:"https://unpkg.com/vuetify@1.0.14/dist/vuetify.min.css",type:"text/css"}],script:[],style:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[n,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){o.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){o.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&c["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=c[e],this.layout},loadLayout:function(t){var e=this;t&&(u["_"+t]||c["_"+t])||(t="default");var n="_"+t;return c[n]?a.a.resolve(c[n]):u[n]().then(function(t){return c[n]=t,delete u[n],c[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:i.a}}}},["T23V"]);