_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{0:function(t,e,n){n("GcxT"),t.exports=n("nOHt")},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("IlR1")}])},IlR1:function(t,e,n){"use strict";n.r(e);var r=n("rePB"),c=n("nKUr"),o=n("S9FO"),a=(n("zlK1"),n("xXxE"),n("rMck"),n("ZJU2"),n("o0o1")),s=n.n(a),i=n("HaE+"),u=n("1OyB"),f=n("vuIU"),d=n("4BP2"),l=n.n(d),p=function(){function t(){Object(u.a)(this,t);var e=new l.a.Db("dcc",{metadata:["scannedUrl"],dccdata:["url","timestamp"]});e.open(),e.on("blocked",(function(){console.warn("database version cannot be upgraded")})),this.db=e,this.colLabel=""}return Object(f.a)(t,[{key:"col",value:function(t){return this.colLabel=t,this}},{key:"collection",value:function(t){return this.db.collection(t)}},{key:"findAsArray",value:function(){var t=Object(i.a)(s.a.mark((function t(e,n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.db.collection(this.colLabel).find(e,n).toArray();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"remove",value:function(){var t=Object(i.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([this.db.collection("metadata").remove({scannedUrl:e}),this.db.collection("dccdata").remove({url:e})]);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),t}();function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var v=function(t,e){var n=e.url,c=e.data,o=e.timestamp;Object.keys(c).length>3&&t.dataEvents.push(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({url:n,timestamp:o},c))},O=function(){var t=Object(i.a)(s.a.mark((function t(e,n){var r,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=new EventSource("/api/stream?"+n,{withCredentials:!0}),c=(new Date).getTime(),r.onopen=function(){e.addInfoEvent("Connection with server established."),e.setScanInProgress(!0)},r.addEventListener("info",(function(t){var n=t.data;e.addInfoEvent(JSON.parse(n))})),r.addEventListener("data",(function(t){var n=t.lastEventId,r=t.data;e.addDataEvent({url:n,data:JSON.parse(r),timestamp:c})})),r.addEventListener("close",(function(t){e.addInfoEvent("Connection with server closed."),e.addInfoEvent("Processing scan data..."),e.setScanInProgress(!1),r.close()})),r.addEventListener("servererror",(function(t){var n=t.lastEventId,c=t.data;console.log("Servererror event lastEventId",n),console.log("Servererror event data",c),e.addErrorEvent("An error occurred: "+c),e.setScanInProgress(!1),r.close()})),r.onerror=function(t){console.warn("Actual error event",t),e.addErrorEvent("An es.onerror occurred"),e.setScanInProgress(!1),r.close()};case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),j=function(){var t=Object(i.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=new p,e.setDb(n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),E=Object(o.createStore)({scanUrl:"",scanCtgs:"",scanInProgress:!1,metadata:{},infoEvents:[],dataEvents:[],errorEvents:[],db:{},setScanUrl:Object(o.action)((function(t,e){return function(t,e){t.scanUrl=e}(t,e)})),setScanCtgs:Object(o.action)((function(t,e){return function(t,e){t.scanCtgs=e}(t,e)})),setScanInProgress:Object(o.action)((function(t,e){return function(t,e){t.scanInProgress=e}(t,e)})),setMetadata:Object(o.action)((function(t,e){return function(t,e){t.metadata=e}(t,e)})),reSetScanUrl:Object(o.action)((function(t){return function(t){t.scanUrl="",t.scanCtgs="",t.metadata={},t.infoEvents=[],t.dataEvents=[],t.errorEvents=[]}(t)})),addInfoEvent:Object(o.action)((function(t,e){!function(t,e){t.infoEvents.push(e)}(t,e)})),addDataEvent:Object(o.action)((function(t,e){v(t,e)})),addErrorEvent:Object(o.action)((function(t,e){!function(t,e){t.errorEvents.push(e)}(t,e)})),startStream:Object(o.thunk)((function(t,e){return O(t,e)})),setDb:Object(o.action)((function(t,e){return function(t,e){t.db=e}(t,e)})),initDb:Object(o.thunk)((function(t){return j(t)}))});function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.default=function(t){var e=t.Component,n=t.pageProps;return Object(c.jsx)(o.StoreProvider,{store:E,children:Object(c.jsx)(e,w({},n))})}},ZJU2:function(t,e,n){},rMck:function(t,e,n){},xXxE:function(t,e,n){},zlK1:function(t,e,n){}},[[0,0,2,1,3,4]]]);