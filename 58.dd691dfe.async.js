(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[58],{jREK:function(t,e,r){"use strict";var a=r("mZ4U");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("26gd");var n=a(r("1GiV")),o=a(r("mK77")),i=l(r("kOci")),s=a(r("L0Kt")),u=l(r("aVbC"));function c(t){if("function"!==typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(c=function(t){return t?r:e})(t)}function l(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var r=c(e);if(r&&r.has(t))return r.get(t);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var i=n?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=t[o]}return a.default=t,r&&r.set(t,a),a}function f(){f=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,a){var n=e&&e.prototype instanceof p?e:p,o=Object.create(n.prototype),i=new k(a||[]);return o._invoke=function(t,e,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return L()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var s=x(i,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var u=c(t,e,r);if("normal"===u.type){if(a=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(a="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),o}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l={};function p(){}function d(){}function h(){}var y={};s(y,n,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(S([])));g&&g!==e&&r.call(g,n)&&(y=g);var m=h.prototype=p.prototype=Object.create(y);function D(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){function a(n,o,i,s){var u=c(t[n],t,o);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){a("next",t,i,s)},function(t){a("throw",t,i,s)}):e.resolve(f).then(function(t){l.value=t,i(l)},function(t){return a("throw",t,i,s)})}s(u.arg)}var n;this._invoke=function(t,r){function o(){return new e(function(e,n){a(t,r,e,n)})}return n=n?n.then(o,o):o()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var a=c(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,l;var n=a.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function Y(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function S(t){if(t){var e=t[n];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function e(){for(;++a<t.length;)if(r.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=h,s(m,"constructor",h),s(h,"constructor",d),d.displayName=s(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,s(t,i,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},D(w.prototype),s(w.prototype,o,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,a,n,o){void 0===o&&(o=Promise);var i=new w(u(e,r,a,n),o);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},D(m),s(m,i,"Generator"),s(m,n,function(){return this}),s(m,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var a=e.pop();if(a in t)return r.value=a,r.done=!1,r}return r.done=!0,r}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Y),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(r,a){return i.type="throw",i.arg=t,e.next=r,a&&(e.method="next",e.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),Y(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;Y(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}var p={namespace:"faultStat",state:{list:[],pageNo:1,pageSize:10,total:0,filter:{},date:{start:(0,s.default)().subtract(1,"month"),end:(0,s.default)()},devData:{},charData:[],typeCountData:[],abnormalTotal:0,devCount:0,areaData:{},tagData:[],hasTag:!0,contrastData:[],detailPageSize:100,faultDetails:{}},reducers:{refreshData(t,e){var r=e.payload,a=r.charData,n=r.abnormalTotal,i=r.devCount,s=r.typeCountData,u=r.filter;return(0,o.default)({},t,{charData:a,filter:u,abnormalTotal:n,devCount:i,typeCountData:s})},refreshDevData(t,e){var r=e.payload.devData;return(0,o.default)({},t,{devData:r})},refreshAreaData(t,e){var r=e.payload,a=r.areaData,n=r.hasArea;return(0,o.default)({},t,{areaData:a,hasArea:n})},refreshTagData(t,e){var r=e.payload,a=r.tagData,n=r.hasTag;return(0,o.default)({},t,{tagData:a,hasTag:n})},refreshContrast(t,e){var r=e.payload.contrastData;return(0,o.default)({},t,{contrastData:r})},saveFaultDetails(t,e){var r=e.payload,a=r.data,n=r.pageNo,i=r.pageSize,s=r.statisticsDetailsDate,u=Object.keys(a),c={};return c.keys=u,u.forEach(t=>{var e={};c[t]=e,e.list=a[t],e.filter={pageNo:n,pageSize:i}}),(0,o.default)({},t,{faultDetails:c,statisticsDetailsDate:s})},saveFaultDetailsPage(t,e){var r=e.payload,a=r.pageNo,n=r.pageSize,i=r.type,s=r.list,u=t.faultDetails,c=[...u[i].list,...s];return u[i].list=c,u[i].filter={pageNo:a,pageSize:n},(0,o.default)({},t,{faultDetails:u})},clearStatisticsDetails(t){return t.faultDetails={},(0,o.default)({},t)}},effects:{fetch(t,e){return f().mark(function r(){var a,o,u,c;return f().wrap(function(r){while(1)switch(r.prev=r.next){case 0:return a=t.payload.filter,o=e.call,u=e.put,a&&a.date&&(a.date.start&&(a.start=(0,s.default)(a.date.start).format("YYYY-MM-DD 00:00:00")),a.date.end&&(a.end=(0,s.default)(a.date.end).format("YYYY-MM-DD 23:59:59"))),r.next=5,o(i.fetch,a);case 5:if(c=r.sent,!c.success){r.next=12;break}return c.result.typeCount.forEach(t=>t.type=t.typeName),r.next=10,u({type:"refreshData",payload:{charData:c.result.chartData,abnormalTotal:c.result.abnormalTotal,devCount:c.result.devCount,typeCountData:c.result.typeCount,filter:a}});case 10:r.next=13;break;case 12:n.default.error(c.message);case 13:case"end":return r.stop()}},r)})()},statisticsFaultDetails(t,e){return f().mark(function r(){var a,n,i,c,l,p,d,h;return f().wrap(function(r){while(1)switch(r.prev=r.next){case 0:return a=t.payload.date,n=e.call,i=e.put,c=e.select,r.next=4,c(t=>t.faultStat.filter);case 4:return l=r.sent,p=(0,o.default)({},l),r.next=8,c(t=>t.faultStat.detailPageSize);case 8:return d=r.sent,p.start=(0,s.default)(a).format("YYYY-MM-DD 00:00:00"),p.end=(0,s.default)(a).format("YYYY-MM-DD 23:59:59"),p.pageSize=d,r.next=14,n(u.tatisticsFaultDetails,p);case 14:return h=r.sent,r.next=17,i({type:"saveFaultDetails",payload:{data:h,pageNo:1,pageSize:d,statisticsDetailsDate:a}});case 17:case"end":return r.stop()}},r)})()},statisticsFaultDetailsPage(t,e){return f().mark(function r(){var a,n,i,c,l,p,d,h,y,v,g,m;return f().wrap(function(r){while(1)switch(r.prev=r.next){case 0:return a=t.payload,n=a.pageNo,i=a.pageSize,c=a.type,l=e.call,p=e.put,d=e.select,r.next=4,d(t=>t.faultStat);case 4:return h=r.sent,y=h.filter,v=h.statisticsDetailsDate,g=(0,o.default)({},y),g.start=(0,s.default)(v).format("YYYY-MM-DD 00:00:00"),g.end=(0,s.default)(v).format("YYYY-MM-DD 23:59:59"),g.pageNo=n,g.pageSize=i,g.alarmType=c,r.next=15,l(u.statisticsFaultDetailsPage,g);case 15:if(m=r.sent,m.pageNo!==n){r.next=19;break}return r.next=19,p({type:"saveFaultDetailsPage",payload:{list:m.list,type:c,pageNo:n,pageSize:i}});case 19:case"end":return r.stop()}},r)})()},fetchDev(t,e){return f().mark(function r(){var a,u,c,l,p,d,h,y,v;return f().wrap(function(r){while(1)switch(r.prev=r.next){case 0:return a=t.payload,a=void 0===a?{}:a,u=a.filter,c=a.pageNo,l=void 0===c?1:c,p=a.pageSize,d=void 0===p?5:p,h=e.call,y=e.put,u&&u.date&&(u.date.start&&(u.start=(0,s.default)(u.date.start).format("YYYY-MM-DD 00:00:00")),u.date.end&&(u.end=(0,s.default)(u.date.end).format("YYYY-MM-DD 23:59:59"))),u.type="DEV",r.next=8,h(i.groupStat,u,l,d);case 8:if(v=r.sent,v.success){r.next=13;break}n.default.error(v.message),r.next=15;break;case 13:return r.next=15,y({type:"refreshDevData",payload:{devData:{total:v.result.totalCount,pageNo:v.result.pageNo,pageSize:v.result.pageSize,list:v.result.list.map(t=>{return(0,o.default)({},t,{id:t.sn})}),filter:u}}});case 15:case"end":return r.stop()}},r)})()},fetchArea(t,e){return f().mark(function r(){var a,o,u,c,l;return f().wrap(function(r){while(1)switch(r.prev=r.next){case 0:return a=t.payload.filter,o=e.call,u=e.put,a&&a.date&&(a.date.start&&(a.start=(0,s.default)(a.date.start).format("YYYY-MM-DD 00:00:00")),a.date.end&&(a.end=(0,s.default)(a.date.end).format("YYYY-MM-DD 23:59:59"))),a.type="AREA",r.next=6,o(i.groupStat,a);case 6:if(c=r.sent,c.success){r.next=11;break}n.default.error(c.message),r.next=14;break;case 11:return l=c.result.value>0,r.next=14,u({type:"refreshAreaData",payload:{hasArea:l,areaData:c.result}});case 14:case"end":return r.stop()}},r)})()},fetchTag(t,e){return f().mark(function r(){var a,u,c,l,p;return f().wrap(function(r){while(1)switch(r.prev=r.next){case 0:return a=t.payload.filter,u=e.call,c=e.put,a&&a.date&&(a.date.start&&(a.start=(0,s.default)(a.date.start).format("YYYY-MM-DD 00:00:00")),a.date.end&&(a.end=(0,s.default)(a.date.end).format("YYYY-MM-DD 23:59:59"))),a.type="TAG",r.next=6,u(i.groupStat,a);case 6:if(l=r.sent,l.success){r.next=11;break}n.default.error(l.message),r.next=14;break;case 11:return p=l.result.filter(t=>t.value>0),r.next=14,c({type:"refreshTagData",payload:{hasTag:p.length>0,tagData:l.result.map(t=>{return(0,o.default)({},t,{data:{children:t.children}})})}});case 14:case"end":return r.stop()}},r)})()},contrast(t,e){return f().mark(function r(){var a,s,u,c,l;return f().wrap(function(r){while(1)switch(r.prev=r.next){case 0:return a=t.payload.values,s=t.callback.onSuccess,u=e.call,c=e.put,r.next=4,u(i.contrast,a);case 4:if(l=r.sent,l.success){r.next=9;break}n.default.error(l.message),r.next=12;break;case 9:return s&&s(),r.next=12,c({type:"refreshContrast",payload:{contrastData:l.result.map(t=>{return(0,o.default)({},t,{result:"".concat(t.name,",").concat(t.id)})})}});case 12:case"end":return r.stop()}},r)})()},cleanData(t,e){return f().mark(function t(){var r;return f().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.put,t.next=3,r({type:"refreshContrast",payload:{contrastData:[]}});case 3:case"end":return t.stop()}},t)})()}},subscriptions:{setup(t){var e=t.dispatch,r=t.history;return r.listen(t=>{var r=t.pathname;if("/statistics/fault/"===r){var a={start:(0,s.default)().subtract(1,"month"),end:(0,s.default)()};e({type:"fetch",payload:{filter:{date:a}}}),e({type:"fetchDev",payload:{filter:{date:a}}})}})}}};e.default=p},kOci:function(t,e,r){"use strict";var a=r("mZ4U");Object.defineProperty(e,"__esModule",{value:!0}),e.contrast=u,e.fetch=i,e.groupStat=s;var n=a(r("mK77")),o=r("t3Un");function i(t){return(0,o.post)("/abnormalstat/abnormalChart",(0,n.default)({},t))}function s(t,e,r){return(0,o.post)("/abnormalstat/statisticsGroup",(0,n.default)({},t,{pageNo:e,pageSize:r}))}function u(t){return(0,o.post)("/stat/compare",{condition:t,module:"FAULT"})}}}]);