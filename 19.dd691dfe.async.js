(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"4tgR":function(e,t,i){"use strict";var a=i("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("exa0");var l=a(i("KiF4"));i("vC5o");var r=a(i("TGLo")),n=a(i("zAuD"));i("SMEU");var s=a(i("xc0u"));i("Mf8d");var o=a(i("4OHk"));i("Gcrx");var d=a(i("Wyac"));i("26gd");var c=a(i("1GiV"));i("vJ22");var u=a(i("BPQb")),h=a(i("xwgP")),p=u.default.Group;class f extends h.default.Component{constructor(e){super(e),this.propsData=(()=>{var e=this;return{onRemove:t=>{e.setState({file:null})},method:"get",beforeUpload:t=>{if("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"!==t.type)return c.default.error("\u6587\u4ef6\u7c7b\u578b\u9519\u8bef\uff0c\u8bf7\u4e0a\u4f20xlsx\u6587\u4ef6"),!1;var i=t.size/1024/1024<=50;return i||c.default.error("\u4e0a\u4f20\u6587\u4ef6\u4e0d\u80fd\u5927\u4e8e50MB"),e.setState(e=>({file:i?t:null})),!1}}}),this.download=(()=>{var e=this.props.local,t="en"===e?"/Device Serial Number Template.xlsx":"/\u8bbe\u5907\u5e8f\u5217\u53f7\u6a21\u677f.xlsx";window.location=t}),this.onChange=(e=>{this.setState({custom:e.target.value})}),this.onOk=(()=>{var e=this.props.onSubmit,t=this.state,i=t.file,a=t.custom;i&&a?e(i,a):c.default.warn("\u8bf7\u9009\u62e9\u4e0a\u4f20\u6a21\u677f\u548c\u9009\u62e9\u5ba2\u6237\u8fdb\u884c\u64cd\u4f5c\uff01")}),this.onCancel=(()=>{var e=this.props.onCancel;e&&(e(),this.setState({file:null,custom:""}))}),this.state={custom:"",file:null}}render(){var e=this.props,t=e.visible,i=e.customer,a=e.loading,c=e.fetchCusLoading,f=this.state.file,m=f?[f]:[];return h.default.createElement(l.default,{title:"\u6279\u91cf\u5212\u5206",visible:t,onOk:this.onOk,onCancel:this.onCancel,confirmLoading:a},h.default.createElement(d.default,{spinning:c},h.default.createElement("div",null,"\u8bf7\u9009\u62e9\u5ba2\u6237"),h.default.createElement("div",{style:{height:200,overflowY:"auto",padding:"15px 0",border:"1px solid #e6e6e6"}},h.default.createElement(p,{onChange:this.onChange,value:this.state.custom},i.map((e,t)=>{return h.default.createElement(u.default,{key:"".concat(e.name).concat(t),value:e.id,style:{marginLeft:15,marginBottom:10,border:"1px solid #e6e6e6",lineHeight:"24px",padding:"0 10px"}},e.name)})))),h.default.createElement("div",{style:{marginTop:30}},"\u8bf7\u4e0a\u4f20\u6587\u4ef6"),h.default.createElement("div",{style:{height:120,overflowY:"auto",padding:"15px 10px",border:"1px solid #e6e6e6"}},h.default.createElement("div",{style:{marginTop:20,display:"flex",flexDirection:"row",justifyContent:"center"}},h.default.createElement(r.default,(0,n.default)({},this.propsData(),{headers:{"Api-Req":!0},fileList:m}),h.default.createElement(s.default,null,h.default.createElement(o.default,{type:"upload"}),"\u9009\u62e9\u6587\u4ef6\u4e0a\u4f20")),h.default.createElement(s.default,{type:"primary",onClick:this.download,style:{marginLeft:20}},"\u4e0b\u8f7d\u5bfc\u5165\u6a21\u677f"))))}}t.default=f},BdfB:function(e,t,i){"use strict";var a=i("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=v(i("xwgP"));i("Gcrx");var r=a(i("Wyac"));i("SMEU");var n=a(i("xc0u")),s=i("8ur3"),o=a(i("Dtsi")),d=a(i("bj82")),c=a(i("KmYD")),u=a(i("4tgR")),h=a(i("GnJS")),p=a(i("VDAU")),f=a(i("MGL0")),m=a(i("I/zQ"));function g(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(g=function(e){return e?i:t})(e)}function v(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var i=g(t);if(i&&i.has(e))return i.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var n=l?Object.getOwnPropertyDescriptor(e,r):null;n&&(n.get||n.set)?Object.defineProperty(a,r,n):a[r]=e[r]}return a.default=e,i&&i.set(e,a),a}class b extends l.Component{constructor(e){super(e),this.componentDidMount=(()=>{window.addEventListener("scroll",this.handleScroll)}),this.componentWillUnmount=(()=>{var e=this.props.dispatch;window.removeEventListener("scroll",this.handleScroll),e({type:"distribute/clearState"})}),this.handleScroll=(e=>{var t=this.props,i=t.dispatch,a=t.distribute,l=e.target.scrollingElement.scrollTop,r=document.getElementById("normal"),n=r.childNodes,s=n[2].offsetHeight+n[3].offsetHeight,o=document.body.clientHeight,d=s-o;if(Math.trunc(l)===d&&0!==l){this.setState({showLoading:!0});var c=a.devList.filter,u=a.devList.pageNo+1,h=a.devList.pageSize;i({type:"distribute/scrollFetch",payload:{filter:c,pageNo:u,pageSize:h}}).then(()=>{this.setState({showLoading:!1})})}}),this.filterQuery=(e=>{var t=e.sn,i=this.props.dispatch,a=this.state.selectArr;i({type:"distribute/fetch",payload:{filter:{sn:t},selectArr:a}}),this.setState({cleanInput:!1,isSearch:!0})}),this.addSn=(e=>{var t=this.props,i=t.dispatch,a=t.distribute,l=this.state.selectArr,r=l.findIndex(t=>t===e);r>=0?l.splice(r,1):l.push(e),a.devList.filter&&a.devList.filter.sn&&(i({type:"distribute/resetFilter",payload:l}),this.setState({cleanInput:!0})),this.setState({selectArr:l,isSearch:!1})}),this.election=(()=>{var e=this.state.electionStatus,t=this.props.distribute.devList.list,i=[];e&&t.forEach(e=>{i.push(e.sn)}),this.setState({selectArr:i,electionStatus:!this.state.electionStatus})}),this.getOneSn=(e=>{var t=this.state.selectArr;return l.default.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"}},e.map((e,i)=>{var a=t.find(t=>t===e.sn);return l.default.createElement("div",{onClick:()=>this.addSn(e.sn),key:"".concat(e.sn).concat(i),style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"8px 10px",cursor:"pointer",width:60}},a?l.default.createElement("img",{src:p.default,alt:"",style:{width:40,height:40}}):l.default.createElement("img",{src:h.default,alt:"",style:{width:40,height:40}}),l.default.createElement("span",{style:{marginTop:5,color:"#13c2c2",transform:"scale(0.8)"}},e.sn))}))}),this.showModal=(()=>{var e=this.props.dispatch;e({type:"distribute/fetchCustomer"}),this.setState({modalVisible:!0})}),this.hideModal=(()=>{this.setState({modalVisible:!1})}),this.onDivideSuccess=(()=>{this.hideModal(),this.setState({selectArr:[]})}),this.modalSubmit=(e=>{var t=this.props.dispatch,i=this.state.selectArr;t({type:"distribute/divideCustom",payload:{custom:e,selectArr:i},callback:{onSuccess:this.onDivideSuccess}})}),this.showBatchModal=(()=>{var e=this.props.dispatch;e({type:"distribute/fetchCustomer"}),this.setState({batchVisible:!0})}),this.hideBatchModal=(()=>{this.setState({batchVisible:!1})}),this.handleBatchTag=((e,t)=>{var i=this.props.dispatch;i({type:"distribute/batchDivideCustom",payload:{file:e,custom:t},callback:{onSuccess:this.hideBatchModal}})}),this.state={selectArr:[],modalVisible:!1,batchVisible:!1,cleanInput:!1,electionStatus:!0,showLoading:!1,isSearch:!1}}render(){var e=this.props,t=(e.loading,e.fetchCusLoading),i=e.distributeLoading,a=e.batchLoading,s=e.distribute,h=s.devList,p=s.customer,g=s.searchDev,v=e.app,b=v.language,E=(v.user,this.state),y=E.modalVisible,A=E.selectArr,w=E.batchVisible,R=E.cleanInput,S=E.electionStatus,M=E.showLoading,I=E.isSearch;return l.default.createElement(r.default,{spinning:M},l.default.createElement("div",{style:{position:"relative"}},l.default.createElement(d.default,{filterQuery:this.filterQuery,cleanInput:R}),l.default.createElement("div",{style:{position:"absolute",top:4,right:0}},2!=sessionStorage.getItem("roleId")?l.default.createElement("div",null,l.default.createElement(n.default,{onClick:this.election,type:"default",style:{marginRight:20}},S?"\u5168\u9009":"\u53d6\u6d88\u5168\u9009"),l.default.createElement(n.default,{onClick:this.showBatchModal,disabled:0!==A.length},"\u6279\u91cf\u5212\u5206"),l.default.createElement(n.default,{onClick:this.showModal,disabled:0===A.length,style:{margin:"0 20px"}},"\u8bbe\u5907\u5212\u5206"),l.default.createElement(o.default,{to:"/customer/record/"},l.default.createElement(n.default,null,"\u5212\u5206\u8bb0\u5f55"))):l.default.createElement("div",null,l.default.createElement(o.default,{to:"/customer/record/"},l.default.createElement(n.default,null,"\u5212\u5206\u8bb0\u5f55")))),l.default.createElement("div",{style:{marginTop:40}},this.getOneSn(I&&h.filter&&h.filter.sn?g:h.list)),l.default.createElement("div",{style:{background:"transparent",position:"fixed",bottom:25,height:75,padding:25}},l.default.createElement("div",{style:{display:"inline-block",marginRight:25}},l.default.createElement("img",{src:f.default,alt:"",style:{width:25,height:25}}),l.default.createElement("span",{style:{marginLeft:10,fontSize:16,color:"#666"}},"\u5f85\u5206\u8bbe\u5907")),l.default.createElement("div",{style:{display:"inline-block"}},l.default.createElement("img",{src:m.default,alt:"",style:{width:25,height:25}}),l.default.createElement("span",{style:{marginLeft:10,fontSize:16,color:"#666"}},"\u5df2\u9009\u8bbe\u5907"))),l.default.createElement("div",{style:{height:75}}),l.default.createElement(c.default,{visible:y,onClose:this.hideModal,onSubmit:this.modalSubmit,customer:p,loading:i,fetchCusLoading:t}),l.default.createElement(u.default,{onCancel:this.hideBatchModal,visible:w,onSubmit:this.handleBatchTag,customer:p,loading:a,local:b,fetchCusLoading:t})))}}function E(e){var t=e.app,i=e.distribute,a=e.loading;return{app:t,distribute:i,loading:a.models.distribute,fetchCusLoading:a.effects["distribute/fetchCustomer"],distributeLoading:a.effects["distribute/divideCustom"],batchLoading:a.effects["distribute/batchDivideCustom"]}}var y=(0,s.connect)(E)(b);t.default=y},"I/zQ":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlCNUY2NTQwNUNGRDExRUE5REQ4REUxRThBRUZDMDNEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlCNUY2NTQxNUNGRDExRUE5REQ4REUxRThBRUZDMDNEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUI1RjY1M0U1Q0ZEMTFFQTlERDhERTFFOEFFRkMwM0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUI1RjY1M0Y1Q0ZEMTFFQTlERDhERTFFOEFFRkMwM0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7ZGJ4gAAAB9klEQVR42qyWSyiEURTHhwZjQyyUBbKiMMozS4UFI1YsLIjyWFnZ2wqFLFgo2bFSmBoWJFGe5ZFZ2AyKKHkU4xX/oz+N6bv3+z7m1K+v7uP8z73fuefeqPzVJofG4kA5qAdlIAMkgjsQABtgFiyDZ5UTp6a9FfSCVIN+EXKTDnAF+sAoeAkfHG3gIAvsgHGFgJGlgEGwBbLNRIrBOiP8i7k5v1QlIhEsgWTH/ywJ+EJX9C0SA6a510Y2AG5tCImfGfr9EenWbNE7t+CI/+nSolAe/X6JuECPZvAJyGGqVjKbpG0PPIEPzVzx6xIRD7PDoVmJjHtkQDFc1T4YAecmWVcrk2tMlp0JjkERWAFtoA40cxUfJvOr5dAVmgyKB7ESEVeTbjPbipwWJ01qqoOZpTk1aSu2C25MkmKNZ6JAlc4icg8SDDrlYFZZiHSC30VmX7jdy48/U0z22dwW1fhzJ4tajkGnVNZ2GyIPivZNEfGCFoPOQ0WVtmteEZlj1OEHMhfM23DmMWi7Fv8iEgT9JNSmIrAK8Rn83o5hlolI2gEYCq3Cr6CRd3ckTPw00O+vH+sHFfw//7Ernhe/6vrd5hW8+0cBKf8lPBbah8Qp7+gucGHRuYzrpEDA6pPoDYyxMHp4HRTy3ZXAUhTgq2aBqR5URfApwAATOmgvxFDxHgAAAABJRU5ErkJggg=="},KmYD:function(e,t,i){"use strict";var a=i("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(i("xwgP"));i("exa0");var r=a(i("KiF4"));i("Gcrx");var n=a(i("Wyac"));i("26gd");var s=a(i("1GiV"));i("vJ22");var o=a(i("BPQb"));function d(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(d=function(e){return e?i:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var i=d(t);if(i&&i.has(e))return i.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var n=l?Object.getOwnPropertyDescriptor(e,r):null;n&&(n.get||n.set)?Object.defineProperty(a,r,n):a[r]=e[r]}return a.default=e,i&&i.set(e,a),a}var u=o.default.Group;class h extends l.Component{constructor(e){super(e),this.onChange=(e=>{this.setState({value:e.target.value})}),this.onSubmit=(()=>{var e=this.props.onSubmit,t=this.state.value;t||s.default.warn("\u8bf7\u9009\u62e9\u5ba2\u6237"),e&&t&&(e(t),this.setState({value:""}))}),this.onCancel=(()=>{var e=this.props.onClose;e&&(e(),this.setState({value:""}))}),this.render=(()=>{var e=this.props,t=e.visible,i=e.customer,a=e.loading,s=e.fetchCusLoading;return l.default.createElement(r.default,{title:"\u8bbe\u5907\u5212\u5206",onCancel:this.onCancel,visible:t,onOk:this.onSubmit,confirmLoading:a},l.default.createElement(n.default,{spinning:s},l.default.createElement("div",null,"\u8bf7\u9009\u62e9\u5ba2\u6237"),l.default.createElement("div",{style:{height:200,overflowY:"auto",padding:"15px 0"}},l.default.createElement(u,{onChange:this.onChange,value:this.state.value},i.map((e,t)=>{return l.default.createElement(o.default,{key:"".concat(e.name).concat(t),value:e.id,style:{marginLeft:15,marginBottom:10,border:"1px solid #e6e6e6",lineHeight:"24px",padding:"0 10px"}},e.name)})))))}),this.state={value:""}}}t.default=h},MGL0:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkwRDE0NDE3NUNGRDExRUFBNUVERTYwRUEwNzE2RTBDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkwRDE0NDE4NUNGRDExRUFBNUVERTYwRUEwNzE2RTBDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTBEMTQ0MTU1Q0ZEMTFFQUE1RURFNjBFQTA3MTZFMEMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTBEMTQ0MTY1Q0ZEMTFFQUE1RURFNjBFQTA3MTZFMEMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6CzXQHAAAB7UlEQVR42qyWOyxDURjHb6WlFg2DxEBjIvEYKGKUYPAIEyMh8ZhMdqswicUmNiYJmpSBQUg8E48wWEoTUoloJZRG+H/yb9I299xXfclvOfec738e3+O67qM/moEVgDbQD1qBH/hADITBIVgHu+BT5cSlEHGDETADyjRzi4JZsAi+rIhUgTVQr9m3CzAIbtMH87ImNYEDhwIa18n6FpVINdgBJVpuVgxC9Jch4gGrfFQ9mwevNoR8vHJPusiUwRV98wquwRJ4sihUR79/Il4wbTD5DtQwVDvAOMfOwQcwygHx6xWRHlBqMPGbm3nnhjw8lUTSAogYrBW/vbK42+TYleAGBMAeGAV9YIin+DFZ3yVJ12gyqRDky454mgqb0RZwW1y0zCrgxMrdBmErdgZeTIJinznRoApnKStS7Ip0PkpidtrY8TajL9vi8vAPikUhm9eimh+R6zpmHuhV1jEbIm+K8SMRCYJhnY9XOgXUiQVFZIO7zk7IWrBpw1mPztiz+BeRBJgj6bbyD6cQn4lU05JScZJDH9GzSyZ6MnXnSXa02D8JiJ8B+s14WGmZ7XyfXCzKfLlVtd8TtuAzhwJS/puZFsoeL3bPHj0JHi06l3kTFAhb/SVKmZeh2c1H9LMExensFGwx1BMqJ78CDABcR3P8yHKYRQAAAABJRU5ErkJggg=="},bj82:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("xwgP")),l=i("pG04");function r(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(r=function(e){return e?i:t})(e)}function n(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var i=r(t);if(i&&i.has(e))return i.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var s=l?Object.getOwnPropertyDescriptor(e,n):null;s&&(s.get||s.set)?Object.defineProperty(a,n,s):a[n]=e[n]}return a.default=e,i&&i.set(e,a),a}class s extends a.Component{constructor(e){super(e),this.getFilter=(()=>{return[{text:"\u8bbe\u5907",name:"sn",type:"input",placeholder:"\u8bf7\u8f93\u5165\u8bbe\u5907\u5e8f\u5217\u53f7"}]}),this.render=(()=>{var e=this.props.filterQuery;return a.default.createElement(this.Form,{inline:!0,isGrid:!0,canelBtn:!1,card:!1,okText:"\u67e5\u8be2",fields:this.getFilter(),onSubmit:e,wrappedComponentRef:e=>this.filterForm=e})}),this.Form=(0,l.Form)()}UNSAFE_componentWillReceiveProps(e){if(e.cleanInput){var t=this.filterForm.props.form;t&&t.setFieldsValue&&t.setFieldsValue({sn:void 0})}}}t.default=s}}]);