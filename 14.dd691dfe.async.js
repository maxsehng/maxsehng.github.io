(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"0DaV":function(e,t,a){"use strict";var n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("exa0");var l=n(a("KiF4"));a("26gd");var r=n(a("1GiV")),i=n(a("xwgP")),s=a("8ur3"),o=n(a("pwW9")),d=n(a("UJUA")),c=n(a("aWU1")),u=n(a("N1TV"));class p extends i.default.Component{constructor(){super(...arguments),this.componentDidMount=(()=>{window.html2canvas||(0,u.default)("/js/html2canvas.min.js",()=>{window.html2canvas||r.default.error("\u52a0\u8f7dJS\u5931\u8d25")})}),this.render=(()=>{var e=this.props,t=e.visible,a=e.language,n=e.user,r=e.close;return i.default.createElement(l.default,{closable:!1,visible:t,onCancel:this.onCancel,footer:null,width:"90%",bodyStyle:{padding:0}},i.default.createElement("div",{style:{width:"100%",height:34,backgroundColor:"#0f1922",borderTopLeftRadius:4,borderTopRightRadius:4,display:"flex",justifyContent:"space-between"}},i.default.createElement("span",{style:{color:"#909fa8",display:"block",height:34,lineHeight:"34px",marginLeft:24}},"\u5730\u56fe\u663e\u793a"),i.default.createElement("img",{src:c.default,style:{marginRight:12,cursor:"pointer",width:9,height:9,marginTop:12},onClick:r,alt:"\u5173\u95ed"})),i.default.createElement("div",{style:{width:"100%",height:700}},"zh-CN"===a?i.default.createElement(o.default,{center:n.location.BPiont}):i.default.createElement(d.default,{center:n.location.GPiont})))})}}function h(e){var t=e.app,a=t.language,n=t.user;return{language:a,user:n}}var m=(0,s.connect)(h)(p);t.default=m},"6KE6":function(e,t,a){"use strict";var n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("vJ22");var l=n(a("BPQb"));a("NWD0");var r=n(a("2L3m"));a("4ADO");var i=n(a("wty1"));a("d+vH");var s=n(a("ijLx"));a("6/yB");var o=n(a("SE39"));a("iRon");var d=n(a("B0Ox"));a("0rfI");var c=n(a("vyZY"));a("26gd");var u=n(a("1GiV")),p=n(a("xwgP")),h=a("8ur3"),m=n(a("TyJR")),f=a("t3Un"),g=n(a("fihk"));class v extends p.default.Component{constructor(e){super(e),this.onChange=(e=>{var t=this.props.data.filter;t.remind="remind"===e.target.value;var a=this.props.dispatch;a({type:"app/currentFault",payload:{filter:t,change:!0}})}),this.remindSwitch=(e=>{var t=this.props.dispatch;t({type:"app/remindSwitch",payload:{id:e.id,remind:!e.remind}})}),this.manualClear=(e=>{var t=this.props.dispatch;t({type:"app/manualClear",payload:{id:e}})}),this.manualRestoration=(e=>{var t=this.props.dispatch;t({type:"app/manualRestoration",payload:{sn:e.sn,type:e.type}})}),this.componentDidMount=(()=>{window.addEventListener("scroll",this.handleScroll)}),this.componentWillUnmount=(()=>{window.removeEventListener("scroll",this.handleScroll)}),this.handleScroll=(e=>{var t=this.props,a=t.dispatch,n=t.data,l=e.target.scrollingElement.scrollTop,r=document.getElementById("normal"),i=r.childNodes,s=i[2].offsetHeight+i[3].offsetHeight,o=document.body.clientHeight,d=s-o;if(l===d&&0!==l){this.setState({showLoading:!0});var c=n.filter,u=n.pageNo+1,p=n.pageSize;a({type:"app/currentFault",payload:{filter:c,pageNo:u,pageSize:p}}).then(()=>{this.setState({showLoading:!1})})}}),this.stopUseHandler=(e=>{var t=this.props,a=t.dispatch,n=t.data;(0,f.post)("/dev/editAssertState",{sn:e,assertState:"DISABELED"}).then(t=>{t.success?(u.default.success("\u505c\u7528\u8bbe\u5907\u6210\u529f"),n.list.forEach(t=>{t.sn===e&&(t.assertState="DISABELED")}),a({type:"app/updateFault",payload:{currentFaults:n,change:!0}})):u.default.error(t.message)})}),this.useHandler=(e=>{var t=this.props,a=t.dispatch,n=t.data;(0,f.post)("/dev/editAssertState",{sn:e,assertState:"NORMAL"}).then(t=>{t.success?(u.default.success("\u542f\u7528\u8bbe\u5907\u6210\u529f"),n.list.forEach(t=>{t.sn===e&&(t.assertState="NORMAL")}),a({type:"app/updateFault",payload:{currentFaults:n,change:!0}})):u.default.error(t.message)})}),this.content=(e=>{var t=this.props.recoveryScripts;return p.default.createElement(d.default,null,p.default.createElement(d.default.Item,null,p.default.createElement(c.default,{title:e.remind?"\u786e\u8ba4\u5173\u95ed":"\u786e\u8ba4\u5f00\u542f",onConfirm:()=>{this.remindSwitch(e)}},p.default.createElement("a",{style:{fontSize:12,fontWeight:"normal",color:"#36cfc9"}},e.remind?"\u5173\u95ed\u63d0\u9192":"\u5f00\u542f\u63d0\u9192"))),p.default.createElement(d.default.Item,{style:{display:this.clearType[e.type]?"block":"none"}},p.default.createElement(c.default,{title:"\u786e\u8ba4\u6d88\u9664",onConfirm:()=>{this.manualClear(e.id)}},p.default.createElement("a",{style:{fontSize:12,fontWeight:"normal",color:"#36cfc9"}},"\u4eba\u5de5\u6d88\u9664"))),p.default.createElement(d.default.Item,{style:{display:0===t.indexOf(e.type)?"block":"none"}},p.default.createElement(c.default,{title:"\u786e\u8ba4\u6062\u590d",onConfirm:()=>{this.manualRestoration(e)}},p.default.createElement("a",{style:{fontSize:12,fontWeight:"normal",color:"#36cfc9"}},"\u811a\u672c\u6062\u590d"))),p.default.createElement(d.default.Item,{style:{display:this.stopUse[e.type]&&e.assertState&&"UNREGISTER"!==e.assertState?"block":"none"}},p.default.createElement(c.default,{title:"NORMAL"===e.assertState?"\u786e\u8ba4\u505c\u7528":"\u786e\u8ba4\u542f\u7528",onConfirm:()=>{"NORMAL"===e.assertState?this.stopUseHandler(e.sn):this.useHandler(e.sn)}},p.default.createElement("a",{style:{fontSize:12,fontWeight:"normal",color:"#36cfc9"}},"NORMAL"===e.assertState?"\u505c\u7528\u8bbe\u5907":"\u542f\u7528\u8bbe\u5907"))))}),this.getSimFlowOverrunDesc=(e=>{if(e.policyParamObj){var t,a,n=e.policyParamObj,l=n.threshold;return"MIDPERCENT"===e.noticeLevel?a="\u5373\u5c06\u8d85\u8fc7\u9600\u503c":(e.noticeLevel="FULLPERCENT")&&(a="\u5df2\u8d85\u8fc7\u9600\u503c"),n.threshold&&n.firstAlarm&&"MIDPERCENT"===e.noticeLevel&&(l=(n.threshold*n.firstAlarm/100).toFixed(2)),0==n.statTime?t="\u5f53\u5929":1==n.statTime&&(t="\u5f53\u6708"),l&&t&&a?p.default.createElement("div",{style:{lineHeight:"24px",marginTop:5,overflow:"hidden",color:e.remind?"#666":"#b2b5b8",fontSize:12}},p.default.createElement("span",null,"\u63cf\u8ff0:"),p.default.createElement("span",{style:{marginLeft:5}},"".concat(t,"\u6d41\u91cf\u4f7f\u7528\u5927\u4e8e").concat(l,"MB\uff0c").concat(a))):void 0}}),this.getNetSwitchCause=(e=>{if(e.causeStr)return p.default.createElement("div",{style:{lineHeight:"24px",marginTop:5,overflow:"hidden",color:e.remind?"#666":"#b2b5b8",fontSize:12}},p.default.createElement("span",null,"\u539f\u56e0:"),p.default.createElement("span",{style:{marginLeft:5}},e.causeStr))}),this.getDevName=(e=>{return p.default.createElement(o.default,{title:e.devName},p.default.createElement("div",{style:{marginTop:4,width:"260px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",fontSize:16.4,color:e.remind?"#666":"#b2b5b8"}},e.devName))}),this.createCol=((e,t)=>{return p.default.createElement(i.default,{span:6,key:e.id},p.default.createElement("div",{className:g.default.alarmCard,style:{height:228,marginBottom:60,padding:"22px 22px 22px 26px",backgroundColor:"#ffffff",borderLeft:e.remind?"3px solid #36cfc9":"3px solid #b2b5b8",borderRadius:"0 0 15px 0",boxShadow:"0px 5px 18px 0px rgba(170, 175, 192, 0.3)",overflow:"auto"}},p.default.createElement("div",{style:{overflow:"hidden"}},p.default.createElement("span",{style:{float:"left",color:e.remind?"#666":"#b2b5b8",marginTop:4,fontSize:16.4}},e.sn),2!=sessionStorage.getItem("roleId")&&p.default.createElement(s.default,{overlay:this.content(e),trigger:["click"]},p.default.createElement("div",{style:{float:"right",textAlign:"center",width:66,height:26,borderRadius:13,border:"1px solid #36cfc9"}},p.default.createElement("a",{style:{fontSize:12,fontWeight:"normal",color:"#36cfc9"}},"\u64cd\u4f5c")))),e.devName?this.getDevName(e):null,p.default.createElement("div",{style:{marginTop:14,fontSize:24,lineHeight:"28px",color:e.remind?"#333":"#b2b5b8"}},this.props.type[e.type]),p.default.createElement("div",{style:{marginTop:5}},p.default.createElement("img",{style:{width:16,height:16},alt:"",src:m.default}),p.default.createElement("span",{style:{marginLeft:4,fontSize:12,color:e.remind?"#666":"#b2b5b8"}},e.createTime)),"SIM_FLOW_OVERRUN"===e.type||"ARREARS"===e.type&&e.imsi&&p.default.createElement("div",{style:{lineHeight:"24px",marginTop:5,overflow:"hidden",color:e.remind?"#666":"#b2b5b8",fontSize:12}},p.default.createElement("span",null,"IMSI:"),p.default.createElement("span",{style:{marginLeft:5}},e.imsi)),"SIM_FLOW_OVERRUN"===e.type&&this.getSimFlowOverrunDesc(e),"SIM_CHANGE"===e.type&&this.getSimChangeDesc(e),"NET_SIM_SWITCH"===e.type&&this.getNetSwitchDesc(e),"NET_SIM_SWITCH"===e.type&&this.getNetSwitchCause(e),p.default.createElement("div",{style:{lineHeight:"24px",marginTop:5,overflow:"hidden",color:e.remind?"#666":"#b2b5b8",fontSize:12}},p.default.createElement("span",null,"\u5730\u5740:"),p.default.createElement("span",{style:{marginLeft:5}},e.location?e.location:"\u6682\u65e0\u5730\u5740"))))}),this.render=(()=>{var e=this.props,t=e.data,a=e.app.user;this.state.showLoading;return p.default.createElement("div",{style:{marginTop:20}},p.default.createElement(r.default,{gutter:36},t.list&&0!==t.list.length?t.list.map(e=>{return this.createCol(e,a)}):p.default.createElement("span",{style:{fontSize:20,fontWeight:700,paddingLeft:700}},"\u5f53\u524d\u65e0\u6545\u969c")),p.default.createElement("div",{style:{position:"fixed",bottom:10,fontSize:14,lineHeight:"30px",backgroundColor:"white"}},p.default.createElement("span",null,"\u603b\u6570\uff1a".concat(t.total)),p.default.createElement(l.default.Group,{defaultValue:"remind",buttonStyle:"solid",size:"small",style:{marginLeft:15},onChange:this.onChange},p.default.createElement(l.default.Button,{value:"remind"},"\u5df2\u5f00\u542f\u63d0\u9192\uff1a".concat(t.totalRemind)),p.default.createElement(l.default.Button,{value:"notremind"},"\u5df2\u5173\u95ed\u63d0\u9192\uff1a".concat(t.total-t.totalRemind)))))}),this.state={remind:!0,showLoading:!1,change:!1},this.clearType={SIM_CHANGE:"SIM\u5361\u66f4\u6362",UNIT_TIME_FLOW_OVERRUN:"\u5355\u4f4d\u65f6\u95f4\u6d41\u91cf\u8d85\u9650",SIM_FLOW_OVERRUN:"SIM\u5361\u6d41\u91cf\u8d85\u9650",ARREARS:"\u6b20\u8d39"},this.stopUse={LONG_TERM_OFFLINE:"\u957f\u671f\u79bb\u7ebf"}}getSimChangeDesc(e){if(e.policyParamObj){var t=e.policyParamObj,a=t.before.length+t.after.length;return p.default.createElement("div",{style:{lineHeight:"24px",marginTop:5,overflow:"hidden",color:e.remind?"#666":"#b2b5b8",fontSize:12}},p.default.createElement("div",{style:{display:"inline-block"}},"\u63cf\u8ff0:"),t.before.map((e,t)=>{return p.default.createElement(o.default,{title:e,key:t},p.default.createElement("div",{style:{marginLeft:5,width:"calc((100% - 70px - ".concat(5*(a+1),"px)/").concat(a," - 7px)"),display:"inline-block",whiteSpace:"nowrap",overflowX:"hidden",verticalAlign:"bottom",textOverflow:"ellipsis",border:"1px solid #d9d9d9",borderRadius:"2px",backgroundColor:"#fafafa",padding:"0px 7px"}},e))}),p.default.createElement("div",{style:{display:"inline-block",marginLeft:5}}),t.after.map((e,t)=>{return p.default.createElement(o.default,{title:e,key:t},p.default.createElement("div",{style:{marginLeft:5,width:"calc((100% - 60px - ".concat(5*(a+1),"px)/").concat(a," - 7px)"),display:"inline-block",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",verticalAlign:"bottom",border:"1px solid #d9d9d9",borderRadius:"2px",backgroundColor:"#edf7fa",padding:"0px 7px"}},e))}))}}getNetSwitchDesc(e){if(e.policyParamObj){var t=e.policyParamObj;return p.default.createElement("div",{style:{lineHeight:"24px",marginTop:5,overflow:"hidden",color:e.remind?"#666":"#b2b5b8",fontSize:12}},p.default.createElement("span",{style:{display:"inline-block"}},"\u63cf\u8ff0:"),p.default.createElement(o.default,{title:t.origin},p.default.createElement("div",{style:{marginLeft:5,width:"calc((100% - 60px - ".concat(15,"px)/",2," - 7px)"),display:"inline-block",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",verticalAlign:"bottom",border:"1px solid #d9d9d9",borderRadius:"2px",backgroundColor:"#fafafa",padding:"0px 7px"}},t.origin)),p.default.createElement("div",{style:{display:"inline-block",marginLeft:5}}),p.default.createElement(o.default,{title:t.current},p.default.createElement("div",{style:{marginLeft:5,width:"calc((100% - 60px - ".concat(15,"px)/",2," - 7px)"),display:"inline-block",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",verticalAlign:"bottom",border:"1px solid #d9d9d9",borderRadius:"2px",backgroundColor:"#edf7fa",padding:"0px 7px"}},t.current)))}}}function w(e){return{app:e.app,type:e.app.constants.alarm,data:e.app.currentFaults,recoveryScripts:e.fault.recoveryScripts}}var y=(0,h.connect)(w)(v);t.default=y},QoOk:function(e,t,a){"use strict";var n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("xwgP")),r=a("8ur3"),i=a("pG04"),s=n(a("aESv")),o=n(a("J1Jx")),d=n(a("pOAv"));class c extends l.default.Component{constructor(e){super(e),this.refersh=((e,t,a)=>{var n=this.props.dispatch;n({type:"app/currentFault",payload:{filter:e,pageNo:t,pageSize:a,change:!0}})}),this.render=(()=>{return l.default.createElement("div",null,l.default.createElement(this.QueryForm,{isGrid:!0,initNums:2,fields:this.filterItems,inline:!0,card:!1,canelBtn:!1,okText:"\u67e5\u8be2",onSubmit:this.refersh}))}),this.filterItems=[{text:"\u8bbe\u5907\u5e8f\u5217\u53f7",name:"sn",type:"input"},{text:"\u544a\u8b66\u7c7b\u578b",name:"type",component:l.default.createElement(i.Form.LimitSelet,{dataUrl:"/abnormal/types",textName:"value",valueName:"key",searchName:"value",width:174})},{text:"\u5730\u533a",name:"area",component:l.default.createElement(o.default,null)},{text:"\u6807\u7b7e",name:"tag",component:l.default.createElement(d.default,null)}],this.QueryForm=(0,s.default)()}}function u(){return{}}var p=(0,r.connect)(u)(c);t.default=p},TyJR:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU3QzAzQjI3NjY1NTExRTlCQTMyQTU4RjExMENBRTUyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU3QzAzQjI4NjY1NTExRTlCQTMyQTU4RjExMENBRTUyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTdDMDNCMjU2NjU1MTFFOUJBMzJBNThGMTEwQ0FFNTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTdDMDNCMjY2NjU1MTFFOUJBMzJBNThGMTEwQ0FFNTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7h2PAyAAABF0lEQVR42mI8c+YMAxrQAuIUIPYAYiWo2D0g3gHEc4D4GrJiJiQ2BxBPAeKLQFwIxJpAzA7FmlCxi1A1HDBNLFCaE4g3AbELA34AUp8NxOpA7AvEP2Au6Mah+SEQf8YiDlLbA/MCyM8ZOGwMBuIuHHIgPVpM0ABjxqHoFxD/wSEH0pPCBA1tcoEHC1JU4QIfoNEIA7JAzAplK4NcwIhHMyh2ZoAUIuEiZC+CXHAXGs/YwEYgfoomporEfsACTWG4DJCAYlxgNxM0ef4lIwBBeuYwQdP2DDIMAOm5BkuJpUC8hwTNILUlyJnpOzRtT8OTcBigctNg+QA9N/6AZhR9IO4H4ptA/BuIvwLxVaiYPlTND5gmgAADAFieNl+vdadiAAAAAElFTkSuQmCC"},UJUA:function(e,t,a){"use strict";var n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("SMEU");var l=n(a("xc0u"));a("nPjb");var r=n(a("nKmx"));a("26gd");var i=n(a("1GiV")),s=n(a("xwgP")),o=n(a("z9WB")),d=a("t3Un"),c=n(a("N1TV")),u=n(a("d78K"));class p extends s.default.Component{constructor(e){super(e),this.loadMarkerCluster=(()=>{window.MarkerClusterer?this.onLoadClusterSuccess():(0,c.default)("/js/markerclusterer.js",()=>{this.onLoadClusterSuccess()})}),this.onLoadClusterSuccess=(()=>{var e=this.map;this.markerCluster||(this.markerCluster=new window.MarkerClusterer(e,[],{imagePath:"/img/dashboard/m"})),window.google.maps.event.addListener(e,"idle",()=>this.boundsChanged())}),this.onMapInit=(e=>{var t,a=this.props.center;this.map=e,t=a||{lng:104.07,lat:30.67},e.setCenter(t),this.loadMarkerCluster()}),this.onMarkerClick=(e=>{for(var t in e.windowInfo||(e.windowInfo=new window.google.maps.InfoWindow({content:"\u8bbe\u5907\u5e8f\u5217\u53f7\uff1a"+e.sn})),this.markers)this.markers[t]&&this.markers[t].windowInfo&&this.markers[t].windowInfo.close();e.windowInfo.open(this.map,e)}),this.boundsChanged=(()=>{var e=this.state.searchValue,t=this.map.getBounds(),a=this;if(t){var n=t.getNorthEast().lng(),l=t.getNorthEast().lat(),r=t.getSouthWest().lng(),i=t.getSouthWest().lat();(0,d.post)("/abnormal/listByRange",{maxLng:n,maxLat:l,minLng:r,minLat:i,language:"en",sn:e}).then(e=>{var t=[];for(var n in this.markers){var l=this.markers[n],r=e[n];r||(this.markers[n]=null,delete this.markers[n],t.push(l))}var i=[];for(var s in e){var o=e[s],d=this.markers[s];d||function(){var e=new window.google.maps.Marker({position:{lat:o.lat,lng:o.lng},map:a.map,icon:u.default});e.lat=o.lat,e.lng=o.lng,e.sn=o.sn,a.markers[e.sn]=e,e.addListener("click",()=>{a.onMarkerClick(e)}),i.push(e)}()}this.markerCluster.removeMarkers(t),this.markerCluster.addMarkers(i)}).catch(()=>{})}}),this.searchChange=(e=>{this.setState({searchValue:e.target.value})}),this.search=(()=>{var e=this.state.searchValue;(0,d.post)("/abnormal/search",{sn:e}).then(e=>{if(e.success){var t=e.result;if("COORDINATE"===t.type){var a=new window.google.maps.LatLng({lat:t.lat,lng:t.lng});this.map.setZoom(15),this.map.panTo(a)}else if("BOUNDS"===t.type){var n=new window.google.maps.LatLng({lat:t.minLat,lng:t.minLng}),l=new window.google.maps.LatLng({lat:t.maxLat,lng:t.maxLng}),r=new window.google.maps.LatLngBounds(n,l);this.map.fitBounds(r)}}else i.default.info(e.message)}).catch(()=>{})}),this.savePic=(()=>{window.html2canvas(document.getElementById("AlarmGMap"),{useCORS:!0,allowTaint:!1,taintTest:!0}).then(e=>{for(var t=e.toDataURL("image/png"),a=t.split(";base64,"),n=a[0].split(":")[1],l=window.atob(a[1]),r=l.length,i=new Uint8Array(r),s=0;s<r;++s)i[s]=l.charCodeAt(s);var o=document.createElement("a"),d=new Blob([i],{type:n});o.download="picture.png",o.target="_blank",o.href=URL.createObjectURL(d),o.click()})}),this.render=(()=>{return s.default.createElement("div",{style:{height:"100%",width:"100%"}},s.default.createElement("div",{style:{display:"flex",justifyContent:"flex-start",position:"absolute",top:58,left:22,zIndex:999}},s.default.createElement(r.default,{onChange:this.searchChange,style:{width:316,marginRight:16},placeholder:"\u8bf7\u8f93\u5165SN"}),s.default.createElement(l.default,{onClick:this.search,type:"primary"},"\u67e5\u8be2")),s.default.createElement(l.default,{type:"primary",onClick:this.savePic,style:{position:"absolute",top:58,right:24,zIndex:999}},"\u4fdd\u5b58\u622a\u56fe"),s.default.createElement(o.default,{id:"AlarmGMap",onMapInit:this.onMapInit}))}),this.state={searchValue:null},this.markers={}}}var h=p;t.default=h},W5XB:function(e,t,a){"use strict";var n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a("xwgP"));a("WguZ");var r=n(a("spxj")),i=a("8ur3"),s=n(a("WBAG")),o=n(a("gjmm")),d=n(a("L0Kt"));function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(c=function(e){return e?a:t})(e)}function u(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=c(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=l?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}return n.default=e,a&&a.set(e,n),n}var p=r.default.TabPane;class h extends l.Component{constructor(e){super(e),this.componentWillUnmount=(()=>{var e=this.props.dispatch;e({type:"app/cleanCurrentFault"})}),this.onChange=(e=>{var t=this.props.dispatch;if("curFault"===e)t({type:"app/currentFault"});else if("historyFault"===e){var a={start:(0,d.default)().subtract(1,"month"),end:(0,d.default)()};t({type:"fault/fetch",payload:{filter:{date:a}}})}this.setState({showTab:e})}),this.state={showTab:"curFault"}}render(){var e=this.state.showTab;return l.default.createElement("div",null,l.default.createElement(r.default,{defaultActiveKey:e,onChange:this.onChange},l.default.createElement(p,{tab:"\u5b9e\u65f6\u544a\u8b66",key:"curFault"},l.default.createElement(s.default,null)),l.default.createElement(p,{tab:"\u5386\u53f2\u544a\u8b66",key:"historyFault"},l.default.createElement(o.default,null))))}}function m(e){var t=e.fault,a=e.loading;return{fault:t,loading:a.models.logs}}var f=(0,i.connect)(m)(h);t.default=f},WBAG:function(e,t,a){"use strict";var n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Gcrx");var l=n(a("Wyac"));a("SMEU");var r=n(a("xc0u")),i=n(a("xwgP")),s=a("8ur3"),o=n(a("6KE6")),d=n(a("QoOk")),c=n(a("0DaV")),u=n(a("4zaf"));class p extends i.default.Component{constructor(e){super(e),this.componentDidMount=(()=>{var e=this.props.dispatch;e({type:"fault/recoveryScripts"})}),this.close=(()=>{this.setState({mapModalShow:!1})}),this.show=(()=>{this.setState({mapModalShow:!0})}),this.hideExportModal=(()=>{this.setState({exportVisible:!1})}),this.showExportModal=(()=>{this.setState({exportVisible:!0})}),this.export=(e=>{var t=this.props.filter;window.open("/abnormal/currentFaultexport?remind=".concat(!t.remind||t.remind,"&state=").concat(!!t.state&&t.state).concat(t.sn?"&sn="+t.sn:"").concat(t.type?"&type="+t.type:"").concat(t.area?"&area="+t.area:"").concat(t.tag?"&tag="+t.tag:"","&fileType=").concat(e.fileType))}),this.render=(()=>{var e=this.state,t=e.mapModalShow,a=e.exportVisible,n=this.props.loading;return i.default.createElement(l.default,{spinning:n},i.default.createElement("div",null,i.default.createElement("div",{style:{position:"relative"}},i.default.createElement(d.default,null),i.default.createElement("div",{style:{position:"absolute",right:0,top:0,fontSize:14,color:"#333",lineHeight:"30px"}},i.default.createElement(r.default,{size:"small",icon:"dribbble",onClick:this.show},"\u8bbe\u5907\u4f4d\u7f6e"))),i.default.createElement(r.default,{icon:"download",size:"small",style:{marginTop:10},onClick:this.showExportModal},"\u5bfc\u51fa"),i.default.createElement(c.default,{visible:t,close:this.close}),i.default.createElement(o.default,null)),i.default.createElement(u.default,{visible:a,title:"\u65e5\u5fd7\u5bfc\u51fa",onCancel:this.hideExportModal,onSubmit:this.export}))}),this.state={mapModalShow:!1,exportVisible:!1}}}function h(e){return{total:e.app.currentFaults.total,filter:e.app.currentFaults.filter,loading:e.loading.effects["app/currentFault"]}}var m=(0,s.connect)(h)(p);t.default=m},aWU1:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNDRDA4NDAzNTAzODExRTlBNzlDRUQwRjk0Rjg3QzkyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNDRDA4NDA0NTAzODExRTlBNzlDRUQwRjk0Rjg3QzkyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0NEMDg0MDE1MDM4MTFFOUE3OUNFRDBGOTRGODdDOTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0NEMDg0MDI1MDM4MTFFOUE3OUNFRDBGOTRGODdDOTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7DXbABAAAAjUlEQVR42mKcMH/FLQYGhhlA3MeACSqBOJQJSEwH4l4gLkZTUAXErUA8nwVI9AMxMxD3QCV7oQpagLgAiCezQCV6kGhnIPaAKpgEEmRBMh6kwAmIPYF4I0wBCDChOdIDqsAfiIvQFcEcCbIiAIhLkT0Dsq4CyZGTsLjxP0hRHBDng3yBFgRgBUAcAxBgAKexHWQxMyE3AAAAAElFTkSuQmCC"},fihk:function(e,t,a){e.exports={alarmCard:"alarmCard___16xnj"}},gjmm:function(e,t,a){"use strict";var n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a("xwgP")),r=a("8ur3"),i=a("pG04"),s=n(a("J1Jx")),o=n(a("pOAv")),d=n(a("4zaf"));function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(c=function(e){return e?a:t})(e)}function u(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=c(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=l?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}return n.default=e,a&&a.set(e,n),n}class p extends l.Component{constructor(e){var t;super(e),t=this,this.filterItems=(()=>{var e=this.props.fault.date;return[{text:"\u8bbe\u5907\u5e8f\u5217\u53f7",name:"sn",type:"input"},{text:"\u544a\u8b66\u7c7b\u578b",name:"type",component:l.default.createElement(i.Form.LimitSelet,{dataUrl:"/abnormal/types",textName:"value",valueName:"key",searchName:"value",width:174})},{text:"\u72b6\u6001",name:"state",type:"select",allowClear:!0,options:[{value:"true",text:"\u5df2\u6d88\u9664"},{value:"false",text:"\u672a\u6d88\u9664"}],style:{width:100}},{text:"\u65f6\u95f4",name:"date",value:e,type:"daterange"},{text:"\u5730\u533a",name:"area",component:l.default.createElement(s.default,null)},{text:"\u6807\u7b7e",name:"tag",component:l.default.createElement(o.default,null)}]}),this.refersh=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,l=t.props.dispatch;l({type:"fault/fetch",payload:{filter:e,pageNo:a,pageSize:n}})},this.hideExportModal=(()=>{this.setState({exportVisible:!1})}),this.showExportModal=(()=>{this.setState({exportVisible:!0})}),this.logsExport=(e=>{var t=this.props.fault.filter,a=t&&t.sn?t.sn:"",n=t&&t.type?t.type:"",l=t&&t.start?t.start:"",r=t&&t.end?t.end:"",i=t&&t.area?t.area:"",s=t&&t.tag?t.tag:"",o=t&&t.state?t.state:"";window.open("/abnormal/export?sn=".concat(a,"&type=").concat(n,"&start=").concat(l,"&end=").concat(r,"&area=").concat(i,"&tag=").concat(s,"&state=").concat(o,"&fileType=").concat(e.fileType))}),this.state={showTab:"curFault",exportVisible:!1},this.columns=[{title:"\u8bbe\u5907\u5e8f\u5217\u53f7",dataIndex:"sn"},{title:"\u8bbe\u5907\u540d\u79f0",dataIndex:"devName",render:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"-";return e}},{title:"\u544a\u8b66\u7c7b\u578b",dataIndex:"type",render:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.props.type[e]}},{title:"\u544a\u8b66\u65f6\u95f4",dataIndex:"createTime"},{title:"\u5904\u7406\u65f6\u95f4",dataIndex:"clearTime",render:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"-";return e}},{title:"\u63cf\u8ff0",dataIndex:"desc"}]}render(){var e=this.props,t=e.loading,a=e.fault,n=this.state.exportVisible;return l.default.createElement("div",null,l.default.createElement(i.Grid,{formprop:{initNums:4},filterItems:this.filterItems(),filterInline:!0,columns:this.columns,loading:t,data:a,refersh:this.refersh,toolBtns:[{icon:"download",text:"\u65e5\u5fd7\u5bfc\u51fa",handler:this.showExportModal}]}),l.default.createElement(d.default,{visible:n,title:"\u65e5\u5fd7\u5bfc\u51fa",onCancel:this.hideExportModal,onSubmit:this.logsExport}))}}function h(e){var t=e.app,a=e.fault,n=e.loading;return{type:t.constants.alarm,fault:a,loading:n.models.fault}}var m=(0,r.connect)(h)(p);t.default=m},pwW9:function(e,t,a){"use strict";var n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("SMEU");var l=n(a("xc0u"));a("nPjb");var r=n(a("nKmx"));a("26gd");var i=n(a("1GiV")),s=n(a("xwgP")),o=n(a("wRRY")),d=a("t3Un"),c=n(a("N1TV")),u=n(a("d78K"));class p extends s.default.Component{constructor(e){super(e),this.loadMarkerCluster=(()=>{window.BMapLib&&window.BMapLib.TextIconOverlay||(0,c.default)("http://api.map.baidu.com/library/TextIconOverlay/1.2/src/TextIconOverlay_min.js",()=>{window.BMapLib&&window.BMapLib.MarkerClusterer||(0,c.default)("/js/BDMarkerClusterer.js",()=>{this.onLoadClusterSuccess()})}),window.BMapLib&&window.BMapLib.MarkerClusterer&&this.onLoadClusterSuccess()}),this.onLoadClusterSuccess=(()=>{var e=this.map;this.markerCluster||(this.markerCluster=new window.BMapLib.MarkerClusterer(e,{markers:[],styles:(()=>{for(var e="/img/dashboard/m",t=[],a=[53,56,66,78,90],n=0;n<a.length;n++)t.push({url:e+(n+1)+".png",size:new window.BMap.Size(a[n],a[n])});return t})()})),this.boundsChanged(),e.addEventListener("zoomend",()=>{this.boundsChanged()}),e.addEventListener("moveend",()=>{this.boundsChanged()})}),this.onMapInit=(e=>{var t,a=this.props.center;this.map=e,t=a?new window.BMap.Point(a.lng,a.lat):new window.BMap.Point(104.07,30.67),e.centerAndZoom(t,13),this.loadMarkerCluster()}),this.onMarkerClick=(e=>{var t=e.target,a={width:100,height:60},n=new window.BMap.InfoWindow("\u8bbe\u5907\u5e8f\u5217\u53f7\uff1a"+t.sn,a);setTimeout(()=>{t.openInfoWindow(n)},700)}),this.boundsChanged=(()=>{var e=this.state.searchValue,t=this.map.getBounds(),a=this;if(t){var n=t.getNorthEast().lng,l=t.getNorthEast().lat,r=t.getSouthWest().lng,i=t.getSouthWest().lat;(0,d.post)("/abnormal/listByRange",{maxLng:n,maxLat:l,minLng:r,minLat:i,language:"zh-CN",sn:e}).then(e=>{var t=[];for(var n in this.markers){var l=this.markers[n],r=e[n];r||(this.markers[n]=null,delete this.markers[n],t.push(l))}var i=[];for(var s in e){var o=e[s],d=this.markers[s];if(!d){var c=new window.BMap.Icon(u.default,new window.BMap.Size(33,42));d=new window.BMap.Marker(new window.BMap.Point(o.lng,o.lat),{icon:c}),d.lat=o.lat,d.lng=o.lng,d.sn=o.sn,d.addEventListener("click",a.onMarkerClick),this.markers[d.sn]=d,i.push(d)}}this.markerCluster.addAndRemoveMarkers(i,t)}).catch(()=>{})}}),this.searchChange=(e=>{this.setState({searchValue:e.target.value})}),this.search=(()=>{var e=this.state.searchValue;(0,d.post)("/abnormal/search",{sn:e}).then(e=>{if(e.success){var t=e.result;if("COORDINATE"===t.type){var a=new window.BMap.Point(t.bdLng,t.bdLat);this.map.setViewport([a]),this.map.setZoom(15),this.map.panTo(a)}else if("BOUNDS"===t.type){var n=new window.BMap.Point(t.bdMinLng,t.bdMinLat),l=new window.BMap.Point(t.bdMaxLng,t.bdMaxLat);this.map.setViewport([n,l])}}else i.default.info(e.message)}).catch(()=>{})}),this.savePic=(()=>{window.html2canvas(document.getElementById("AlarmBDMap"),{useCORS:!0,allowTaint:!1,taintTest:!0}).then(e=>{for(var t=e.toDataURL("image/png"),a=t.split(";base64,"),n=a[0].split(":")[1],l=window.atob(a[1]),r=l.length,i=new Uint8Array(r),s=0;s<r;++s)i[s]=l.charCodeAt(s);var o=document.createElement("a"),d=new Blob([i],{type:n});o.download="picture.png",o.target="_blank",o.href=URL.createObjectURL(d),o.click()})}),this.render=(()=>{return s.default.createElement("div",{style:{height:"100%"}},s.default.createElement("div",{style:{display:"flex",justifyContent:"flex-start",position:"absolute",left:22,top:58,zIndex:999}},s.default.createElement(r.default,{onChange:this.searchChange,style:{width:180,marginRight:16},placeholder:"\u8bf7\u8f93\u5165SN"}),s.default.createElement(l.default,{onClick:this.search,type:"primary"},"\u67e5\u8be2")),s.default.createElement(l.default,{type:"primary",onClick:this.savePic,style:{position:"absolute",top:58,right:24,zIndex:999}},"\u4fdd\u5b58\u622a\u56fe"),s.default.createElement(o.default,{id:"AlarmBDMap",onMapInit:this.onMapInit}))}),this.state={searchValue:null},this.markers={}}}var h=p;t.default=h}}]);