(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[61],{"0LDT":function(t,e,r){"use strict";var a=r("mZ4U");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("26gd");var n=a(r("1GiV")),i=a(r("mK77")),o=f(r("aftQ")),s=a(r("L0Kt")),l=r("uNSo"),u=f(r("aVbC"));function c(t){if("function"!==typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(c=function(t){return t?r:e})(t)}function f(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var r=c(e);if(r&&r.has(t))return r.get(t);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&Object.prototype.hasOwnProperty.call(t,i)){var o=n?Object.getOwnPropertyDescriptor(t,i):null;o&&(o.get||o.set)?Object.defineProperty(a,i,o):a[i]=t[i]}return a.default=t,r&&r.set(t,a),a}function p(){p=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",o=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,a){var n=e&&e.prototype instanceof f?e:f,i=Object.create(n.prototype),o=new S(a||[]);return i._invoke=function(t,e,r){var a="suspendedStart";return function(n,i){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw i;return M()}for(r.method=n,r.arg=i;;){var o=r.delegate;if(o){var s=x(o,r);if(s){if(s===c)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var l=u(t,e,r);if("normal"===l.type){if(a=r.done?"completed":"suspendedYield",l.arg===c)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a="completed",r.method="throw",r.arg=l.arg)}}}(t,r,o),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var c={};function f(){}function d(){}function h(){}var g={};s(g,n,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(k([])));y&&y!==e&&r.call(y,n)&&(g=y);var m=h.prototype=f.prototype=Object.create(g);function D(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){function a(n,i,o,s){var l=u(t[n],t,i);if("throw"!==l.type){var c=l.arg,f=c.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){a("next",t,o,s)},function(t){a("throw",t,o,s)}):e.resolve(f).then(function(t){c.value=t,o(c)},function(t){return a("throw",t,o,s)})}s(l.arg)}var n;this._invoke=function(t,r){function i(){return new e(function(e,n){a(t,r,e,n)})}return n=n?n.then(i,i):i()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return c;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var a=u(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,c;var n=a.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,c):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,c)}function Y(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Y,this),this.reset(!0)}function k(t){if(t){var e=t[n];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function e(){for(;++a<t.length;)if(r.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:M}}function M(){return{value:void 0,done:!0}}return d.prototype=h,s(m,"constructor",h),s(h,"constructor",d),d.displayName=s(h,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,s(t,o,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},D(w.prototype),s(w.prototype,i,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,a,n,i){void 0===i&&(i=Promise);var o=new w(l(e,r,a,n),i);return t.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},D(m),s(m,o,"Generator"),s(m,n,function(){return this}),s(m,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var a=e.pop();if(a in t)return r.value=a,r.done=!1,r}return r.done=!0,r}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(r,a){return o.type="throw",o.arg=t,e.next=r,a&&(e.method="next",e.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,c):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),c},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),c}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;b(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),c}},t}var d={namespace:"signalstat",state:{ratioChart:{dateArr:[],signalArr:[],timeArr:[]},avgUpRatio:"",avgOnRatio:"",filter:{},shakeTime:"2",date:{start:(0,s.default)().subtract(1,"month"),end:(0,s.default)()},contrastData:[],devData:{filter:{},pageSize:5,pageNo:1,total:0,list:[]},simData:{filter:{},pageSize:5,pageNo:1,total:0,list:[]},areaData:[],tagData:[],hasTag:!0,pageSize:100,signalDetails:{strong:{list:[]},general:{list:[]},weak:{list:[]}}},reducers:{refreshData(t,e){var r=e.payload,a=r.ratioChart,n=r.filter;return(0,i.default)({},t,{ratioChart:a,filter:n})},refreshContrast(t,e){var r=e.payload.contrastData;return(0,i.default)({},t,{contrastData:r})},refreshDevData(t,e){var r=e.payload.devData;r=void 0===r?{}:r;var a=r.list,n=r.total,o=r.pageNo,s=r.pageSize,l=r.filter;return(0,i.default)({},t,{devData:{list:a,total:n,pageNo:o,pageSize:s,filter:l}})},refreshAreaData(t,e){var r=e.payload,a=r.areaData,n=r.hasArea;return(0,i.default)({},t,{areaData:a,hasArea:n})},refreshTagData(t,e){var r=e.payload,a=r.tagData,n=r.hasTag;return(0,i.default)({},t,{tagData:a,hasTag:n})},refreshSimData(t,e){var r=e.payload.simData;r=void 0===r?{}:r;var a=r.list,n=r.total,o=r.pageNo,s=r.pageSize,l=r.filter;return(0,i.default)({},t,{simData:{list:a,total:n,pageNo:o,pageSize:s,filter:l}})},saveSignalDetailsPage(t,e){var r=e.payload,a=r.pageNo,n=r.pageSize,o=r.intensity,s=r.list,l=t.signalDetails,u=[...l[o].list,...s];return l[o].list=u,l[o].filter={pageNo:a,pageSize:n},(0,i.default)({},t,{signalDetails:l})},saveSignalDetails(t,e){var r=e.payload,a=r.data,n=r.pageNo,o=r.pageSize,s=r.statisticsDetailsDate,l=Object.keys(a),u=t.signalDetails,c=[];return u.keys&&(c=u.keys),l.forEach(t=>{var e={};u[t]=e,e.list=a[t],e.filter={pageNo:n,pageSize:o},a[t].length>0&&!c.find(e=>e===t)&&c.push(t)}),u.keys=c,(0,i.default)({},t,{signalDetails:u,statisticsDetailsDate:s})},clearStatisticsDetails(t){return t.signalDetails={strong:{list:[]},general:{list:[]},weak:{list:[]}},(0,i.default)({},t)}},effects:{signalDetails(t,e){return p().mark(function r(){var a,n,o,l,c,f,d,h,g;return p().wrap(function(r){while(1)switch(r.prev=r.next){case 0:return a=t.payload.date,n=e.call,o=e.put,l=e.select,r.next=4,l(t=>t.signalstat.filter);case 4:return c=r.sent,f=(0,i.default)({},c),r.next=8,l(t=>t.signalstat.pageSize);case 8:return d=r.sent,f.start=(0,s.default)(a).format("YYYY-MM-DD 00:00:00"),f.end=(0,s.default)(a).format("YYYY-MM-DD 23:59:59"),f.pageSize=d,f.pageNo=1,h={},r.next=16,n(u.signalDetails,f);case 16:return g=r.sent,h=g,r.next=20,o({type:"saveSignalDetails",payload:{data:h,pageNo:1,pageSize:d,statisticsDetailsDate:a}});case 20:case"end":return r.stop()}},r)})()},signalDetailsPage(t,e){return p().mark(function r(){var a,n,o,l,c,f,d,h,g,v,y,m;return p().wrap(function(r){while(1)switch(r.prev=r.next){case 0:return a=t.payload,n=a.pageNo,o=a.pageSize,l=a.intensity,c=e.call,f=e.put,d=e.select,r.next=4,d(t=>t.signalstat);case 4:return h=r.sent,g=h.filter,v=h.statisticsDetailsDate,y=(0,i.default)({},g),y.start=(0,s.default)(v).format("YYYY-MM-DD 00:00:00"),y.end=(0,s.default)(v).format("YYYY-MM-DD 23:59:59"),y.pageNo=n,y.pageSize=o,y.intensity=l,r.next=15,c(u.signalDetailsPage,y);case 15:if(m=r.sent,m.pageNo!==n){r.next=19;break}return r.next=19,f({type:"saveSignalDetailsPage",payload:{list:m.list,intensity:l,pageNo:n,pageSize:o}});case 19:case"end":return r.stop()}},r)})()},fetch(t,e){return p().mark(function r(){var a,l,u,c,f,d;return p().wrap(function(r){while(1)switch(r.prev=r.next){case 0:return a=t.payload.filter,l=e.call,u=e.put,a&&a.date&&(a.date.start&&(a.start=(0,s.default)(a.date.start).format("YYYY-MM-DD 00:00:00")),a.date.end&&(a.end=(0,s.default)(a.date.end).format("YYYY-MM-DD 23:59:59"))),r.next=5,l(o.fetch,a);case 5:if(c=r.sent,c.success){r.next=10;break}n.default.error(c.message),r.next=15;break;case 10:return f=[],d=c.result,d.dateArr.forEach(t=>{f.push({time:t,num:d.signalArr[0][t]+d.signalArr[1][t]+d.signalArr[2][t]})}),r.next=15,u({type:"refreshData",payload:{ratioChart:{dateArr:d.dateArr,signalArr:d.signalArr.map(t=>{return(0,i.default)({},t,{name:"strong"===t.name?"\u4fe1\u53f7\u5f3a":"general"===t.name?"\u4fe1\u53f7\u4e00\u822c":"weak"===t.name?"\u4fe1\u53f7\u5f31":null})}),timeArr:f},filter:a}});case 15:case"end":return r.stop()}},r)})()},contrast(t,e){return p().mark(function r(){var a,s,u,c,f,d;return p().wrap(function(r){while(1)switch(r.prev=r.next){case 0:return a=t.payload.values,s=t.callback.onSuccess,u=e.call,c=e.put,r.next=4,u(o.contrast,a);case 4:if(f=r.sent,f.success){r.next=9;break}n.default.error(f.message),r.next=13;break;case 9:return s&&s(),d=f.result.map(t=>{return(0,i.default)({},t,{result:"".concat(t.name,",").concat(t.id),signal:(0,l.dbm)(t.signal)})}),r.next=13,c({type:"refreshContrast",payload:{contrastData:d}});case 13:case"end":return r.stop()}},r)})()},cleanData(t,e){return p().mark(function t(){var r;return p().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.put,t.next=3,r({type:"refreshContrast",payload:{contrastData:[]}});case 3:case"end":return t.stop()}},t)})()},fetchDev(t,e){return p().mark(function r(){var a,u,c,f,d,h,g,v,y,m;return p().wrap(function(r){while(1)switch(r.prev=r.next){case 0:return a=t.payload,a=void 0===a?{}:a,u=a.filter,c=a.pageNo,f=void 0===c?1:c,d=a.pageSize,h=void 0===d?5:d,g=e.call,v=e.put,u&&u.date&&(u.date.start&&(u.start=(0,s.default)(u.date.start).format("YYYY-MM-DD 00:00:00")),u.date.end&&(u.end=(0,s.default)(u.date.end).format("YYYY-MM-DD 23:59:59"))),u.type="DEV",r.next=8,g(o.groupStat,u,f,h);case 8:if(y=r.sent,y.success){r.next=13;break}n.default.error(y.message),r.next=16;break;case 13:return m=y.result.list.map(t=>{return(0,i.default)({},t,{id:t.sn,detail:t.detail?t.detail.map(t=>{return(0,i.default)({},t,{intensity:(0,l.dbm)(t.intensity)})}):""})}),r.next=16,v({type:"refreshDevData",payload:{devData:{total:y.result.totalCount,pageNo:y.result.pageNo,pageSize:y.result.pageSize,list:m,filter:u}}});case 16:case"end":return r.stop()}},r)})()},fetchArea(t,e){return p().mark(function r(){var a,i,l,u,c;return p().wrap(function(r){while(1)switch(r.prev=r.next){case 0:return a=t.payload.filter,i=e.call,l=e.put,a&&a.date&&(a.date.start&&(a.start=(0,s.default)(a.date.start).format("YYYY-MM-DD 00:00:00")),a.date.end&&(a.end=(0,s.default)(a.date.end).format("YYYY-MM-DD 23:59:59"))),a.type="AREA",r.next=6,i(o.groupStat,a);case 6:if(u=r.sent,u.success){r.next=11;break}n.default.error(u.message),r.next=14;break;case 11:return c=u.result.signal>0,r.next=14,l({type:"refreshAreaData",payload:{hasArea:c,areaData:u.result}});case 14:case"end":return r.stop()}},r)})()},fetchTag(t,e){return p().mark(function r(){var a,l,u,c,f;return p().wrap(function(r){while(1)switch(r.prev=r.next){case 0:return a=t.payload.filter,l=e.call,u=e.put,a&&a.date&&(a.date.start&&(a.start=(0,s.default)(a.date.start).format("YYYY-MM-DD 00:00:00")),a.date.end&&(a.end=(0,s.default)(a.date.end).format("YYYY-MM-DD 23:59:59"))),a.type="TAG",r.next=6,l(o.groupStat,a);case 6:if(c=r.sent,c.success){r.next=11;break}n.default.error(c.message),r.next=14;break;case 11:return f=c.result.filter(t=>t.general+t.strong+t.weak>0),r.next=14,u({type:"refreshTagData",payload:{hasTag:f.length>0,tagData:c.result.map((t,e)=>{var r=[];return t.children&&t.children.length&&t.children.forEach((t,e)=>{r.push((0,i.default)({},t,{id:"".concat(t.name).concat(e)}))}),(0,i.default)({},t,{id:"".concat(t.name).concat(e),children:r})})}});case 14:case"end":return r.stop()}},r)})()},fetchSim(t,e){return p().mark(function r(){var a,u,c,f,d,h,g,v,y,m;return p().wrap(function(r){while(1)switch(r.prev=r.next){case 0:return a=t.payload,a=void 0===a?{}:a,u=a.filter,c=a.pageNo,f=void 0===c?1:c,d=a.pageSize,h=void 0===d?5:d,g=e.call,v=e.put,u&&u.date&&(u.date.start&&(u.start=(0,s.default)(u.date.start).format("YYYY-MM-DD 00:00:00")),u.date.end&&(u.end=(0,s.default)(u.date.end).format("YYYY-MM-DD 23:59:59"))),u.type="SIM",r.next=8,g(o.groupStat,u,f,h);case 8:if(y=r.sent,y.success){r.next=13;break}n.default.error(y.message),r.next=16;break;case 13:return m=y.result.list.map(t=>{return(0,i.default)({},t,{id:t.imsi,detail:t.detail?t.detail.map(t=>{return(0,i.default)({},t,{intensity:(0,l.dbm)(t.intensity)})}):""})}),r.next=16,v({type:"refreshSimData",payload:{simData:{total:y.result.totalCount,pageNo:y.result.pageNo,pageSize:y.result.pageSize,list:m,filter:u}}});case 16:case"end":return r.stop()}},r)})()}},subscriptions:{setup(t){var e=t.dispatch,r=t.history;return r.listen(t=>{var r=t.pathname;if("/statistics/signal/"===r){var a={start:(0,s.default)().subtract(1,"month"),end:(0,s.default)()};e({type:"fetch",payload:{filter:{date:a}}}),e({type:"fetchDev",payload:{filter:{date:a}}})}})}}};e.default=d},aftQ:function(t,e,r){"use strict";var a=r("mZ4U");Object.defineProperty(e,"__esModule",{value:!0}),e.contrast=s,e.fetch=o,e.groupStat=l;var n=a(r("mK77")),i=r("t3Un");function o(t){return(0,i.post)("/signalstat/singalCondition",(0,n.default)({},t))}function s(t){return(0,i.post)("/stat/compare",{condition:t,module:"SIGNAL"})}function l(t,e,r){return(0,i.post)("/signalstat/groupStat",(0,n.default)({},t,{pageNo:e,pageSize:r}))}}}]);