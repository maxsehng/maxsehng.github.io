(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{"1C7Y":function(e,t,a){"use strict";var r=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("OmhE");var l=r(a("r8hw"));a("NWD0");var n=r(a("2L3m"));a("4ADO");var i=r(a("wty1"));a("SMEU");var s=r(a("xc0u"));a("26gd");var o=r(a("1GiV"));a("iRon");var d=r(a("B0Ox")),u=a("8ur3"),c=m(a("xwgP")),p=a("pG04"),f=r(a("aP11"));function h(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(h=function(e){return e?a:t})(e)}function m(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=h(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var i=l?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}return r.default=e,a&&a.set(e,r),r}class g extends c.Component{constructor(e){var t;super(e),t=this,this.getFilterItems=(()=>{var e=this.props.strategyId;return[{text:"\u72b6\u6001",name:"status",type:"select",allowClear:!0,style:{width:120},options:[{text:"\u5168\u90e8",value:null},{text:"\u672a\u5f00\u59cb",value:"WAITING"},{text:"\u8fdb\u884c\u4e2d",value:"CMD_SUCCESS"},{text:"\u5df2\u53d6\u6d88",value:"CANCELED"},{text:"\u5df2\u5b8c\u6210",value:"COMPLETED"},{text:"\u5df2\u5931\u8d25",value:"FAILED"}]},{text:"\u8bbe\u5907",name:"sn",type:"input"},{text:"",name:"id",type:"hide",value:e}]}),this.refresh=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,l=t.props.dispatch;l({type:"script/queryProgress",payload:{filter:e,pageNo:a,pageSize:r}})},this.onRowSelectChange=(e=>{}),this.getRebootMenu=(()=>{return[c.default.createElement(d.default.Item,{key:"all"},"\u4e00\u952e\u8865\u53d1"),c.default.createElement(d.default.Item,{key:"batch"},"\u6279\u91cf\u8865\u53d1")]}),this.rebootMenuClick=((e,t,a)=>{var r=e.key,l=this.props,n=l.dispatch,i=l.strategyId,s=l.script;s=void 0===s?{}:s;var d=s.progress;if("all"===r)n({type:"script/rebootOnce",payload:{rebootAllFailed:!0,policyId:i}});else if("batch"===r){if(!t||!t.length)return void o.default.warn("\u8bf7\u9009\u62e9\u9700\u8981\u91cd\u65b0\u4e0b\u53d1\u811a\u672c\u7684\u8bbe\u5907");var u=function(e){var a=d.list||[],r=a.find(a=>a.id===t[e]);if(r&&"FAILED"!==r.status)return o.default.warn("\u8bf7\u9009\u62e9\u672a\u4e0b\u53d1\u811a\u672c\u7684\u8bbe\u5907"),{v:void 0}};for(var c in t){var p=u(c);if("object"===typeof p)return p.v}n({type:"script/rebootOnce",payload:{rebootAllFailed:!1,policyId:i,logIds:t}})}}),this.render=(()=>{var e=this.props,t=e.loading,a=e.backFunc,r=e.script;e.app.user;return c.default.createElement("div",null,c.default.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},c.default.createElement("span",{style:{fontSize:16,fontWeight:"bold",color:"#333",marginBottom:25,lineHeight:"32px"}},"\u811a\u672c\u4e0b\u53d1\u8be6\u60c5"),c.default.createElement(s.default,{type:"primary",onClick:a},"\u8fd4\u56de")),c.default.createElement(n.default,null,c.default.createElement(i.default,{span:6},c.default.createElement("div",{style:{fontSize:16,color:"#333",textAlign:"center",marginTop:50}},"\u811a\u672c\u4e0b\u53d1\u6210\u529f\u7387"),c.default.createElement("div",{style:{position:"relative",width:90,height:90,margin:"40px auto"}},c.default.createElement(f.default,{color:"#13c2c2",finishColor:"#000",percent:0===r.finishCount?0:parseInt(r.finishCount/r.rebootCount*100,10)}),c.default.createElement("div",{style:{position:"absolute",top:33,left:0,zIndex:9999,width:"100%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}},c.default.createElement("span",{style:{fontSize:24,color:"#13c2c2",fontWeight:"bold"}},0===r.finishCount?0:parseInt(r.finishCount/r.rebootCount*100,10)),c.default.createElement("span",{style:{fontSize:12,color:"#13c2c2"}},"%"))),c.default.createElement("div",{style:{display:"flex",flexDirection:"column"}},c.default.createElement("div",{style:{fontSize:16,color:"#333",textAlign:"center",marginBottom:15}},"\u5168\u90e8: ",r.rebootCount,"\u53f0"),c.default.createElement("div",{style:{fontSize:16,color:"#333",textAlign:"center",marginBottom:15}},"\u5df2\u4e0b\u53d1: ",r.finishCount,"\u53f0"))),c.default.createElement(i.default,{span:18},c.default.createElement(p.Grid,{onRowSelectChange:2!=sessionStorage.getItem("roleId")&&this.onRowSelectChange,formprop:{initNums:3},filterInline:!0,filterItems:this.getFilterItems(),columns:this.columns,loading:t,data:r.progress,toolBtns:2!=sessionStorage.getItem("roleId")?[{text:"\u91cd\u53d1\u5e03",btnType:"menu",menuItems:this.getRebootMenu(),onMenuClick:this.rebootMenuClick,handleSelected:!0}]:[],refersh:this.refresh}))))}),this.state={showTab:"strategy"};var a=this.props.app.constants;a=void 0===a?{}:a;var r=a.state,u=void 0===r?[]:r;this.columns=[{title:"\u72b6\u6001",dataIndex:"status",render:(e,t)=>{return"RUNNING"===e?"\u8fdb\u884c\u4e2d":"CANCELED"===e?"\u5df2\u53d6\u6d88":"COMPLETED"===e?"\u5df2\u5b8c\u6210":"FAILED"===e?"\u5df2\u5931\u8d25(".concat(u["".concat(t.state)],")"):void 0}},{title:"\u5f00\u59cb\u65f6\u95f4",dataIndex:"start"},{title:"\u7ed3\u675f\u65f6\u95f4",dataIndex:"update"},{title:"\u8bbe\u5907\u5e8f\u5217\u53f7",dataIndex:"sn"},{title:"\u8fdb\u5ea6",dataIndex:"percent",render:(e,t)=>{var a=t.status;return"CANCELED"===a||"FAILED"===a?c.default.createElement(l.default,{percent:e,strokeColor:"#f76260"}):c.default.createElement(l.default,{percent:e,strokeColor:"#13c2c2"})}}]}}function v(e){var t=e.app,a=e.script,r=e.loading;return{app:t,script:a,loading:r.models.script}}var y=(0,u.connect)(v)(g);t.default=y},QKRQ:function(e,t,a){"use strict";var r=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("exa0");var l=r(a("KiF4"));a("SMEU");var n=r(a("xc0u"));a("Mf8d");var i=r(a("4OHk"));a("C1KP");var s=r(a("d6B9")),o=r(a("zAuD"));a("26gd");var d=r(a("1GiV"));a("vJ22");var u=r(a("BPQb"));a("nPjb");var c=r(a("nKmx")),p=a("8ur3"),f=y(a("xwgP")),h=r(a("J1Jx")),m=r(a("pOAv")),g=r(a("guZp"));function v(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(v=function(e){return e?a:t})(e)}function y(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=v(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var i=l?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}return r.default=e,a&&a.set(e,r),r}var E=c.default.TextArea,b=0,I=u.default.Group,C={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},x={wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}};class w extends f.Component{constructor(e){super(e),this.remove=(e=>{var t=this.props.form,a=t.getFieldValue("keys");1!==a.length&&t.setFieldsValue({keys:a.filter(t=>t!==e)})}),this.add=(()=>{var e=this.props.form,t=e.getFieldValue("keys");if(t.length>=6)d.default.error("\u4e00\u6b21\u6700\u591a\u8bbe\u7f6e6\u4e2a\u6761\u76ee");else{var a=t.concat(b++);e.setFieldsValue({keys:a})}}),this.onClose=(()=>{var e=this.props,t=e.onClose,a=e.form,r=e.changerangeValue,l=e.changeScript;a&&a.resetFields(),this.setState({rangeValue:void 0,snData:void 0}),t&&(t(),r(),l())}),this.handleOk=(e=>{var t=this.props,a=t.onSubmit,r=t.edit,l=t.rowData;e.preventDefault(),this.props.form.validateFields((e,t)=>{if(!e){var n=[],i={};"1"===t.type?(i.password=t.password,delete t.password):"2"===t.type?(i.shareKey=t.shareKey,i.peerId=t.peerId,i.oldPeerId=t.oldPeerId,delete t.shareKey,delete t.peerId,delete t.oldPeerId):"3"===t.type&&(i.customConfig=t.customConfig,delete t.customConfig);var s=!1;if("adds"===t.range){if(!t.adds)return void d.default.error("\u8bf7\u5148\u6dfb\u52a0\u5730\u533a");for(var o=Object.values(t.adds),u=function(e){var a={},r=void 0;r=Array.isArray(o[e])?o[e]:o[e].split(","),a.country=r[0],a.region=r[1],a.locality=r[2];var l=n.find(e=>e.country===a.country&&e.region===a.region&&e.locality===a.locality);if(l)return d.default.error("\u5b58\u5728\u76f8\u540c\u7684\u5730\u533a\uff0c\u8bf7\u4fee\u6539!"),s=!0,{v:void 0};n.push(a),delete t.adds},c=0;c<o.length;c++){var p=u(c);if("object"===typeof p)return p.v}}else if("label"===t.range){if(!t.labels)return void d.default.error("\u8bf7\u5148\u6dfb\u52a0\u6807\u7b7e");for(var f=Object.values(t.labels),h=function(e){var t={};t.title=f[e][0],t.content=f[e][1];var a=n.find(e=>e.title===t.title&&e.content===t.content);if(a)return d.default.error("\u5b58\u5728\u76f8\u540c\u7684\u6807\u7b7e\uff0c\u8bf7\u4fee\u6539!"),s=!0,{v:void 0};n.push(t)},m=0;m<f.length;m++){var g=h(m);if("object"===typeof g)return g.v}delete t.labels}else n=t.sn;s||(delete t.keys,t.rangeValue=JSON.stringify(n),t.config=JSON.stringify(i),l&&l.id?(t.id=l&&l.id,r(t,this.onClose)):a&&a(t,this.onClose))}})}),this.labelOnChange=(e=>{var t=this.props,a=t.form,r=t.changerangeValue,l=t.rowData,n=[];if(l&&l.range&&l.range.type===e.target.value&&l.range.value&&l.range.value.length)for(var i=0;i<l.range.value.length;i++)n.push(l.range.value[i]);a.setFieldsValue({keys:n}),r(e.target.value),this.setState({snData:void 0})}),this.scriptOnChange=(e=>{var t=this.props.changeScript;t(e.target.value)}),this.formFixedItems=(e=>{var t=this.props.form.getFieldDecorator;return f.default.createElement(f.Fragment,null,f.default.createElement(s.default.Item,(0,o.default)({},C,{label:"\u8303\u56f4",required:!0,key:"\u8303\u56f4"}),t("range",{initialValue:e&&e.all?"all":e.range?e.range.type:"",validateTrigger:["onChange","onBlur"],rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8303\u56f4\u7c7b\u578b"}]})(f.default.createElement(I,{onChange:this.labelOnChange},f.default.createElement(u.default,{value:"all"},"\u6240\u6709\u8bbe\u5907"),f.default.createElement(u.default,{value:"sn"},"\u8bbe\u5907"),f.default.createElement(u.default,{value:"adds"},"\u5730\u533a"),f.default.createElement(u.default,{value:"label"},"\u6807\u7b7e")))))}),this.formScriptItems=(e=>{var t=this.props.form.getFieldDecorator,a=this.props.detail;return f.default.createElement(f.Fragment,null,f.default.createElement(s.default.Item,(0,o.default)({},C,{label:"\u914d\u7f6e",required:!0,key:"\u914d\u7f6e"}),t("type",{initialValue:e&&e.type,validateTrigger:["onChange","onBlur"],rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u914d\u7f6e\u7c7b\u578b"}]})(f.default.createElement(I,{disabled:a,onChange:this.scriptOnChange},f.default.createElement(u.default,{value:"1"},"\u5bc6\u7801\u8bbe\u7f6e"),f.default.createElement(u.default,{value:"2"},"Ipsec\u914d\u7f6e"),f.default.createElement(u.default,{value:"3"},"\u81ea\u5b9a\u4e49\u914d\u7f6e")))))}),this.snFormItems=(e=>{this.state.snData;var t=this.props.form.getFieldDecorator,a=this.props.app.user;return f.default.createElement(s.default.Item,(0,o.default)({},C,{label:"\u8bbe\u5907\uff1a",required:!0,key:"\u8bbe\u5907"}),t("sn",{initialValue:e&&!e.all&&"sn"===e.range.type?e.range.value:"",validateTrigger:["onChange","onBlur"],rules:[{validator:(e,t,a)=>{t&&""!=t&&0!=t.length?t.length>50?a("\u4e00\u6b21\u6700\u591a\u9009\u62e950\u53f0\u8bbe\u5907"):a():a("\u8bf7\u9009\u62e9\u8bbe\u5907")}}]})(f.default.createElement(g.default,{dataUrl:a.companyUser?"/dev/list":"/dev/list?companyId=-1",textName:"sn",valueName:"sn",searchName:"sn",formProps:{mode:"multiple",placeholder:"\u8bf7\u9009\u62e9\u8bbe\u5907"}})))}),this.addsFormItems=(e=>{var t=this.props.form,a=t.getFieldValue,r=t.getFieldDecorator;e&&e.range?r("keys",{initialValue:"adds"===e.range.type?e.range.value:[]}):r("keys",{initialValue:[]});var l=a("keys"),n=l.map((t,a)=>f.default.createElement(f.Fragment,{key:"\u5730\u533a".concat(t).concat(a)},f.default.createElement(s.default.Item,(0,o.default)({},0===a?C:x,{label:0===a?"\u5730\u533a\uff1a":"",required:!0,key:"\u5730\u533a".concat(a)}),r("adds[".concat(t,"]"),{initialValue:e&&!e.all&&"adds"===e.range.type?Number.isInteger(t)?"":t:"",validateTrigger:["onChange","onBlur"],rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5730\u533a"}]})(f.default.createElement(h.default,null)),f.default.createElement(i.default,{style:{marginLeft:10},className:"dynamic-delete-button",type:"minus-circle-o",onClick:()=>this.remove(t)}))));return n}),this.labelFormItems=(e=>{var t=this.props.form,a=t.getFieldValue,r=t.getFieldDecorator;e&&e.range?r("keys",{initialValue:"label"===e.range.type?e.range.value:[]}):r("keys",{initialValue:[]});var l=a("keys"),n=l.map((t,a)=>f.default.createElement(f.Fragment,{key:"\u6807\u7b7e".concat(t).concat(a)},f.default.createElement(s.default.Item,(0,o.default)({},0===a?C:x,{label:0===a?"\u6807\u7b7e\uff1a":"",required:!0,key:"\u6807\u7b7e".concat(a)}),r("labels[".concat(t,"]"),{initialValue:e&&!e.all&&"label"===e.range.type?Number.isInteger(t)?"":t:"",validateTrigger:["onChange","onBlur"],rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6807\u7b7e"}]})(f.default.createElement(m.default,{width:452})),f.default.createElement(i.default,{style:{marginLeft:10},className:"dynamic-delete-button",type:"minus-circle-o",onClick:()=>this.remove(t)}))));return n}),this.customForm=(e=>{var t,a=this.props.form.getFieldDecorator,r=this.props.detail;return e&&(t=JSON.parse(e.config)),f.default.createElement(s.default.Item,(0,o.default)({},C,{label:"\u81ea\u5b9a\u4e49\u914d\u7f6e\uff1a",key:"\u81ea\u5b9a\u4e49\u914d\u7f6e"}),a("customConfig",{initialValue:t&&t.customConfig,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u914d\u7f6e"}]})(f.default.createElement(E,{disabled:r,style:{height:300}})))}),this.loginAcount=(e=>{var t;e&&(t=JSON.parse(e.config));var a=this.props.form.getFieldDecorator,r=this.props.detail;return f.default.createElement(s.default,null,f.default.createElement(s.default.Item,(0,o.default)({},C,{label:"\u5bc6\u7801\uff1a"}),a("password",{initialValue:t&&t.password,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"},{whitespace:!0,message:"\u8bf7\u4e0d\u8981\u8f93\u5165\u7a7a\u683c"}]})(f.default.createElement(c.default,{disabled:r,placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",style:{width:"70%"}}))))}),this.gateWay=(e=>{var t,a=this.props.form.getFieldDecorator,r=this.state.isRequire,l=this.props.detail;return e&&(t=JSON.parse(e.config)),f.default.createElement(s.default,null,f.default.createElement(s.default.Item,(0,o.default)({},C,{label:"\u5bf9\u7aefID(\u65e7)\uff1a"}),a("oldPeerId",{initialValue:t&&t.oldPeerId,validateTrigger:["onChange","onBlur"],rules:[{required:r,message:"\u8bf7\u8f93\u5165\u65e7\u7684\u5bf9\u7aefID"},{pattern:/^[^\s]*$/,message:"\u8bf7\u4e0d\u8981\u8f93\u5165\u7a7a\u683c"}]})(f.default.createElement(c.default,{disabled:l,style:{width:"70%"}}))),f.default.createElement(s.default.Item,(0,o.default)({},C,{label:"\u5bf9\u7aefID\uff1a"}),a("peerId",{initialValue:t&&t.peerId,validateTrigger:["onChange","onBlur"],rules:[{required:r,message:"\u8bf7\u8f93\u5165\u5bf9\u7aefID"},{pattern:/^[^\s]*$/,message:"\u8bf7\u4e0d\u8981\u8f93\u5165\u7a7a\u683c"}]})(f.default.createElement(c.default,{disabled:l,style:{width:"70%"}}))),f.default.createElement(s.default.Item,(0,o.default)({},C,{label:"\u5bc6\u94a5"}),a("shareKey",{initialValue:t&&t.shareKey,validateTrigger:["onChange","onBlur"],rules:[{required:r,message:"\u8bf7\u8f93\u5165\u5bc6\u94a5"},{pattern:/^[^\s]*$/,message:"\u8bf7\u4e0d\u8981\u8f93\u5165\u7a7a\u683c"}]})(f.default.createElement(c.default,{disabled:l,style:{width:"70%"}}))))}),this.render=(()=>{var e=this.props,t=e.visible,a=e.loading,r=e.addModalTitle,s=e.rowData,o=e.scriptValue,d=e.rangeValue,u=e.detail,c=this.state.snData,p=this.props.form.getFieldDecorator;return p("keys",{initialValue:[]}),f.default.createElement(l.default,{title:r,visible:t,onOk:this.handleOk,onCancel:this.onClose,width:650,confirmLoading:a,footer:u?null:[f.default.createElement(n.default,{key:"back",onClick:this.onClose},"\u53d6\u6d88"),f.default.createElement(n.default,{key:"submit",type:"primary",onClick:this.handleOk},"\u786e\u8ba4")]},f.default.createElement("div",{style:{height:500,overflowY:"auto"}},u?"":f.default.createElement("div",null,this.formFixedItems(s),"sn"===d||c?this.snFormItems(s):"adds"===d?this.addsFormItems(s):"label"===d?this.labelFormItems(s):null,"adds"===d||"label"===d?f.default.createElement(n.default,{type:"dashed",onClick:this.add,style:{width:"60%",marginLeft:"20%"}},f.default.createElement(i.default,{type:"plus"})," \u6dfb\u52a0"):null),this.formScriptItems(s),"1"===o?this.loginAcount(s):"2"===o?this.gateWay(s):"3"===o?this.customForm(s):null))}),this.state={rangeValue:void 0,snData:void 0,scriptValue:"",isRequire:!0}}}function k(e){var t=e.app;return{app:t}}var D=(0,p.connect)(k)(s.default.create()(w));t.default=D},ecwA:function(e,t,a){"use strict";var r=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("U2gH");var l=r(a("kT6h")),n=a("8ur3"),i=c(a("xwgP")),s=a("pG04"),o=r(a("QKRQ")),d=r(a("1C7Y"));function u(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var i=l?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}return r.default=e,a&&a.set(e,r),r}class p extends i.Component{constructor(e){var t;super(e),t=this,this.snContent=(e=>{return i.default.createElement("div",{style:{width:302,minHeight:100}},e.map((e,t)=>{return i.default.createElement("span",{key:"".concat(e).concat(t),style:{display:"inline-block",padding:"6px 10px",border:"1px solid #e6e6e6",marginRight:8,marginBottom:8}},e)}))}),this.addsContent=(e=>{return i.default.createElement("div",{style:{width:302,minHeight:100}},e.map((e,t)=>{return i.default.createElement("span",{key:"".concat(e).concat(t),style:{display:"inline-block",padding:"6px 10px",border:"1px solid #e6e6e6",marginRight:8,marginBottom:8}},"".concat(e[0]).concat(e.length>1&&e[1]?"/".concat(e[1]):"").concat(e.length>2&&e[2]?"/".concat(e[2]):""))}))}),this.rangeDiv=(e=>{return e?"sn"===e.type?i.default.createElement(l.default,{content:this.snContent(e.value),title:"\u8bbe\u5907\u5e8f\u5217\u53f7"},e.value.map((e,t)=>{return t<3?i.default.createElement("span",{key:"".concat(e),style:{padding:"6px 10px",border:"1px solid #e6e6e6",marginRight:6}},e):3===t?i.default.createElement("span",{key:"".concat(e)},"..."):null})):"adds"===e.type||"label"===e.type?i.default.createElement(l.default,{content:this.addsContent(e.value),title:"adds"===e.type?"\u5730\u533a":"\u6807\u7b7e"},e.value.map((e,t)=>{return t<1?i.default.createElement("span",{key:"".concat(e),style:{padding:"6px 10px",border:"1px solid #e6e6e6",marginRight:6}},"".concat(e[0]).concat(e.length>1&&e[1]?"/".concat(e[1]):"").concat(e.length>2&&e[2]?"/".concat(e[2]):"")):1===t?i.default.createElement("span",{key:"".concat(e)},"..."):null})):void 0:i.default.createElement("span",{key:"all",style:{padding:"6px 10px",border:"1px solid #e6e6e6",marginRight:6}},"\u6240\u6709\u8bbe\u5907")}),this.getFilterItems=(e=>{return[{text:"\u72b6\u6001",name:"rebootState",value:e.rebootState,type:"select",allowClear:!0,style:{width:150},options:[{text:"\u5168\u90e8",value:""},{text:"\u51c6\u5907\u4e2d",value:"WAITING"},{text:"\u4e0b\u53d1\u4e2d",value:"RUNNING"},{text:"\u5df2\u53d6\u6d88",value:"CANCELED"},{text:"\u5df2\u5b8c\u6210",value:"COMPLETED"}]},{text:"\u8bbe\u5907\u5e8f\u5217\u53f7",name:"sn",value:e.sn,type:"input"},{text:"\u65f6\u95f4",name:"date",value:e.date,type:"daterange"}]}),this.add=((e,t)=>{var a=this.props.dispatch;a({type:"script/add",payload:{values:e},callback:{onSuccess:t}})}),this.edit=((e,t)=>{var a=this.props.dispatch;a({type:"script/editValue",payload:{values:e},callback:{onSuccess:t}})}),this.refresh=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,l=t.props.dispatch;l({type:"script/fetch",payload:{filter:e,pageNo:a,pageSize:r}})},this.sendReboot=(e=>{var t=e.id,a=this.props.dispatch;a({type:"script/sendReboot",payload:{id:t}})}),this.cancelSend=(e=>{var t=e.id,a=this.props.dispatch;a({type:"script/cancelReboot",payload:{id:t}})}),this.queryRate=(e=>{var t=e.id,a=e.state,r=this.props.dispatch;r({type:"script/queryProgress",payload:{filter:{id:t}}}),this.setState({progress:!0,strategyId:t,rebootState:a})}),this.showFormModal=(()=>{this.setState({addModalVisible:!0,addModalTitle:"\u6279\u91cf\u4e0b\u53d1\u811a\u672c"})}),this.hideFormModal=(()=>{this.setState({addModalVisible:!1,rowData:"",detail:!1})}),this.backPage=(()=>{var e=this.props.dispatch;e({type:"script/clearProgress"}),this.setState({progress:!1,strategyId:"",rebootState:{}})}),this.showEditFormModal=(e=>{this.setState({addModalVisible:!0,addModalTitle:"\u7f16\u8f91",rowData:e,scriptValue:e.type,rangeValue:e.all?"all":e.range.type})}),this.showDetailFormModal=(e=>{this.setState({addModalVisible:!0,addModalTitle:"\u811a\u672c\u914d\u7f6e\u9879",rowData:e,scriptValue:e.type,rangeValue:e.all?"all":e.range.type,detail:!0})}),this.changeScript=(e=>{this.setState({scriptValue:e})}),this.changerangeValue=(e=>{this.setState({rangeValue:e})}),this.render=(()=>{var e=this.props,t=e.loading,a=e.script,r=e.addLoading,l=(e.app.user,this.state),n=l.addModalVisible,u=l.progress,c=l.strategyId,p=l.rebootState,f=l.addModalTitle,h=l.rowData,m=l.rangeValue,g=l.scriptValue,v=l.detail;return i.default.createElement("div",null,u?i.default.createElement(d.default,{backFunc:this.backPage,strategyId:c,rebootState:p}):i.default.createElement(i.default.Fragment,null,i.default.createElement(s.Grid,{formprop:{initNums:4,wrappedComponentRef:e=>this.QueryForm=e},filterInline:!0,filterItems:this.getFilterItems(a.filter),wrappedComponentRef:e=>this.filterForm=e,columns:this.columns,loading:t,data:a,edit:2!=sessionStorage.getItem("roleId")&&this.showEditFormModal,editModal:!1,editAction:e=>{return"WAITING"===e.state},refersh:this.refresh,toolBtns:2!=sessionStorage.getItem("roleId")?[{icon:"reload",text:"\u6279\u91cf\u4e0b\u53d1\u811a\u672c",handler:this.showFormModal}]:[],actions:2!=sessionStorage.getItem("roleId")?[{text:"\u67e5\u770b",check:e=>{return"COMPLETED"===e.state||"RUNNING"===e.state},handler:e=>{this.showDetailFormModal(e)}},{text:"\u8fdb\u5ea6\u67e5\u8be2",check:e=>{return"CANCELED"===e.state?e.total>0:"WAITING"!==e.state},handler:this.queryRate},{text:"\u811a\u672c\u4e0b\u53d1",confirm:"\u8bf7\u786e\u8ba4\u4e0b\u53d1\u811a\u672c!",check:e=>{return"WAITING"===e.state},handler:this.sendReboot},{text:"\u53d6\u6d88",confirm:"\u8bf7\u786e\u8ba4\u53d6\u6d88!",check:e=>{return"COMPLETED"===e.state?e.success!==e.total:"CANCELED"!==e.state},handler:this.cancelSend}]:[{text:"\u67e5\u770b",check:e=>{return"COMPLETED"===e.state||"RUNNING"===e.state},handler:e=>{this.showDetailFormModal(e)}},{text:"\u8fdb\u5ea6\u67e5\u8be2",check:e=>{return"CANCELED"===e.state?e.total>0:"WAITING"!==e.state},handler:this.queryRate}]}),i.default.createElement(o.default,{visible:n,onSubmit:this.add,onClose:this.hideFormModal,loading:r,addModalTitle:f,rowData:h,edit:this.edit,scriptValue:g,rangeValue:m,changeScript:this.changeScript,changerangeValue:this.changerangeValue,detail:v})))}),this.state={addModalVisible:!1,progress:!1,addModalTitle:"",rowData:"",scriptValue:"",rangeValue:"",detail:!1},this.columns=[{title:"\u72b6\u6001",dataIndex:"state",render:e=>{return"WAITING"===e?"\u51c6\u5907\u4e2d":"RUNNING"===e?"\u4e0b\u53d1\u4e2d":"CANCELED"===e?"\u5df2\u53d6\u6d88":"\u5df2\u5b8c\u6210"}},{title:"\u8fdb\u5ea6",dataIndex:"rate",render:(e,t)=>{return"WAITING"===t.state?i.default.createElement("span",null,"\u51c6\u5907\u4e2d"):"CANCELED"===t.state&&0===t.total?i.default.createElement("span",null,"\u5df2\u53d6\u6d88"):i.default.createElement("span",null,t.success,"/",t.total)}},{title:"\u8303\u56f4",dataIndex:"range",render:e=>{return this.rangeDiv(e)}},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"createAt"},{title:"\u5f00\u59cb\u65f6\u95f4",dataIndex:"start",render:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"-";return e}}]}}function f(e){var t=e.script,a=e.loading,r=e.app;return{app:r,script:t,loading:a.models.script,addLoading:a.effects["script/add"]}}var h=(0,n.connect)(f)(p);t.default=h}}]);