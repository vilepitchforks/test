_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"20a2":function(e,t,n){e.exports=n("nOHt")},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,c=l.length;u<c;u++){var s=l[u];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var d=a.props[s],f=r[s]||new Set;f.has(d)?o=!1:(f.add(d),r[s]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,a,o,i){try{var u=e[o](i),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function u(e){r(i,a,o,u,c,"next",e)}function c(e){r(i,a,o,u,c,"throw",e)}u(void 0)}))}}n.d(t,"a",(function(){return a}))},HylS:function(e,t,n){e.exports={formContainer:"LoginForm_formContainer__34eQ_",loginForm:"LoginForm_loginForm__DY5hu",inputEmail:"LoginForm_inputEmail__1pK4x",inputButton:"LoginForm_inputButton__Y3GV9",invalidCreds:"LoginForm_invalidCreds__1mmc0"}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},SGa5:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("g4pe"),o=n.n(a),i=n("o0o1"),u=n.n(i),c=n("HaE+"),s=n("20a2"),d=n.n(s),f=n("q1tI"),l=n("HylS"),p=n.n(l),m=n("zgqH"),h=function(){var e=Object(f.useState)(""),t=e[0],n=e[1],a=Object(f.useState)(""),o=a[0],i=a[1],s=function(){var e=Object(c.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),i(""),e.next=4,Object(m.a)({email:t});case 4:e.sent?d.a.replace("/"):i("Invalid credentials");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:p.a.formContainer,children:Object(r.jsxs)("form",{className:p.a.loginForm,onSubmit:s,children:[Object(r.jsx)("input",{className:p.a.inputEmail,required:!0,name:"email",type:"email",placeholder:"Email",onInput:function(e){return n(e.target.value)}}),Object(r.jsx)("button",{className:"".concat(p.a.inputButton," green3"),type:"submit",children:"Enter"}),Object(r.jsx)("div",{className:p.a.invalidCreds,children:o})]})})};t.default=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o.a,{children:Object(r.jsx)("title",{children:"Login"})}),Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"column",children:Object(r.jsx)(h,{})})})})]})}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),u=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),f=function(e){i(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=f},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},u6Hu:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n("SGa5")}])},zgqH:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return c}));var r=n("o0o1"),a=n.n(r),o=n("HaE+"),i=function(e){var t=e.method,n=e.endpoint,r=e.format;return function(){var e=Object(o.a)(a.a.mark((function e(o){var i,u,c,s,d,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.email,u=o.query,c=o.body,e.prev=1,n=n.split("?")[0],n=u?n+"?"+u:n,s={method:t,credentials:"same-origin",headers:{}},i&&(s.headers.Authorization="Basic "+btoa(i)),c&&(s.body=JSON.stringify(c)),e.next=9,fetch(n,s).then((function(e){return d=e.status,e[r]()}));case 9:if(f=e.sent,200!==d&&201!==d){e.next=14;break}return e.abrupt("return",f);case 14:return e.abrupt("return",!1);case 15:e.next=21;break;case 17:return e.prev=17,e.t0=e.catch(1),console.warn("driver err",e.t0),e.abrupt("return",!1);case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}()},u=i({method:"POST",endpoint:"/api/auth",format:"text"}),c=(i({method:"GET",endpoint:"/api/scan",format:"json"}),i({method:"GET",endpoint:"/api/slug",format:"json"}))}},[["u6Hu",0,2,1,3]]]);