(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"4BB4":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r={headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}}},"69ZN":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("hosL"),o=n("OhSV"),i=n("CGiE");const a=()=>({name:Object(r.h)(o.c,{id:"table.displayName"},"Name"),cell:t=>Object(r.h)(i.a,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name})})},"6l12":function(t,e,n){"use strict";n.r(e),function(t){function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=n("drLk"),u=n("hosL"),l=n("OhSV"),s=n("QRet"),b=n("ENxA"),d=n("HP4b"),p=n("4BB4"),h=n("7Asn"),f=n("69ZN"),y=n("JY+X"),O=n("sKFU"),g=n("pmH6"),j=n("LftB"),w=n("MJ1U"),v=n("Dy4S"),m=n("nnvw"),T=n("Wcfx"),V=n("uZiY"),D=n("L9y4"),x=n("Wfbs"),C=n("L4T+");e.default=e=>{document.title=`${e.dictionary.header.VTubersViewCount} | ${e.dictionary.header.title}`;const n=[i(i({},Object(g.a)()),{},{sortable:!0,width:"40px"}),i(i({},Object(f.a)()),{},{width:"200px"}),{name:Object(u.h)(l.c,{id:"table.YouTubeTotalViewCount"},"YouTube Total View Count"),selector:t=>t.totalViewCount,compact:!0,sortable:!0},{name:Object(u.h)(l.c,{id:"table._7DaysViewCountGrowth"},"7 Days Growth"),cell:t=>Object(v.a)(t._7DaysGrowth,e.dictionary.table),compact:!0,right:!0},{name:Object(u.h)(l.c,{id:"table._30DaysViewCountGrowth"},"30 Days Growth"),cell:t=>Object(v.a)(t._30DaysGrowth,e.dictionary.table),compact:!0,right:!0},i(i({},Object(O.a)()),{},{width:"100px"}),i(i({},Object(h.a)()),{},{width:"150px"}),i(i({},Object(y.a)()),{},{width:"125px"})],[o,a]=Object(s.l)([]),[_,S]=Object(s.l)({name:null,YouTubeId:null,TwitchId:null,group:null,nationality:null}),G=o.filter((t=>Object(C.a)(t,_))),L=Object(s.i)((()=>{const t=[{option:Object(u.h)(l.c,{id:"table._7DaysViewCountGrowth"},"7 Days Growth"),value:"7-days"},{option:Object(u.h)(l.c,{id:"table._30DaysViewCountGrowth"},"30 Days Growth"),value:"30-days"}],n=new Map([["name",e.dictionary.table.searchByDisplayName],["YouTubeId",e.dictionary.table.searchByYouTubeId],["TwitchId",e.dictionary.table.searchByTwitchId],["group",e.dictionary.table.searchByGroup],["nationality",e.dictionary.table.searchByNationality]]);return Object(u.h)("div",{class:V.a.searchBarGroup},Object(u.h)(d.a,{tipText:e.dictionary.table.sortingMethod,value:e.modifier,optionValue:t,onChange:t=>Object(T.c)({type:"vtubers-view-count",sortOrder:t.target.value})}),Object(u.h)(x.a,{filterModel:_,fieldPlaceHolderMappings:n,openSearchText:e.dictionary.text.openSearch,closeSearchText:e.dictionary.text.closeSearch,onChange:t=>{S(t)}}))}),[_,e.modifier,e.dictionary]),[P,Y]=Object(s.l)(!0),I=(t,e)=>e.YouTube._7DaysGrowth.diff-t.YouTube._7DaysGrowth.diff,$=(t,e)=>e.YouTube._30DaysGrowth.diff-t.YouTube._30DaysGrowth.diff,k=async()=>{await c.m({sortBy:e.modifier,count:"100"}).then((t=>{a(t.data.VTubers.map((t=>t)).map((t=>t)).sort((t=>{switch(t){case"7-days":return I;case"30-days":return $}})(e.modifier)).map(((t,e)=>Object(m.a)(t,e+1)))),Y(!1)}))};return Object(s.d)((()=>{k()}),[]),Object(u.h)(t,null,Object(u.h)("h1",null,Object(u.h)(l.c,{id:"header.VTubersViewCount"},"VTubers View Count Change"),Object(w.a)()),Object(u.h)(b.b,r({},j.a,{columns:n,data:G,conditionalRowStyles:D.a,customStyles:p.a,fixedHeader:!0,pagination:!0,paginationComponentOptions:e.dictionary.table.paginationOptions,progressComponent:Object(u.h)(l.c,{id:"text.loading"},"Loading..."),progressPending:P,subHeader:!0,subHeaderComponent:L})))}}.call(this,n("hosL").Fragment)},"7Asn":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("hosL"),o=n("OhSV"),i=n("Wcfx");const a=()=>({name:Object(r.h)(o.c,{id:"table.group"},"Group"),cell:t=>void 0!==t.group?Object(r.h)("a",{href:Object(i.b)({type:"group",name:t.group})},t.group):null})},CGiE:function(t,e,n){"use strict";var r=n("hosL"),o=n("+Ox3"),i="container__vr1DG",a="profileImageFlex__4VERG",c="nameFlex__WFOO9";e.a=t=>Object(r.h)("div",{class:i},Object(r.h)("div",{class:a},Object(r.h)(o.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl,clickBehavior:"popup"})),Object(r.h)("span",{class:c},t.name))},Dy4S:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));const r=t=>t>0?`+${t}`:t<0?`${t}`:"0",o=t=>(100*t).toFixed(2),i=(t,e)=>{if(t.percentage)switch(t.recordType){case"none":return e.noRecord;case"partial":return`${e.atLeast} ${r(t.diff)} (${o(t.percentage)}%)`;case"full":return`${r(t.diff)} (${o(t.percentage)}%)`}switch(t.recordType){case"none":return e.noRecord;case"partial":return`${e.atLeast} ${r(t.diff)}`;case"full":return`${r(t.diff)}`}},a=(t,e)=>{if(void 0!==t){const e=parseInt(t,10);if(!1===isNaN(e))return e}return e}},HP4b:function(t,e,n){"use strict";var r=n("hosL"),o="tipText__4DHD3",i=n("otXJ");e.a=function(t){return Object(r.h)("div",null,Object(r.h)("span",{class:o},t.tipText),Object(r.h)("select",{class:i.a.dropDown,value:t.value,onChange:t.onChange},void 0!==t.optionValue?t.optionValue.map((t=>Object(r.h)("option",{key:t.value,value:t.value},t.option))):null))}},"JY+X":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("hosL"),o=n("OhSV");const i=()=>({name:Object(r.h)(o.c,{id:"table.nationality"},"Nationality"),selector:t=>{var e;return null!==(e=t.nationality)&&void 0!==e?e:""}})},"L4T+":function(t,e,n){"use strict";function r(t,e){return!Object.entries(e).map((e=>{const n=t[e[0]],r=e[1];return null===r||null!=n&&""!==n&&n.toLowerCase().includes(r.toLowerCase())})).some((t=>!1===t))}n.d(e,"a",(function(){return r}))},L9Wd:function(t,e,n){"use strict";var r=n("hosL"),o="container__1lsi6",i="textField__bDpXR",a="button__maFzS";e.a=t=>{var e;return Object(r.h)("div",{class:o},Object(r.h)("input",{type:"text",class:i,placeholder:t.placeholderText,value:null!==(e=t.filterText)&&void 0!==e?e:"",onChange:t.onFilter}),Object(r.h)("button",{type:"button",class:a,onClick:t.onClear},"X"))}},L9y4:function(t,e){"use strict";e.a=[{when:t=>"preparing"===t.activity,style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:t=>"active"===t.activity&&void 0!==t.debutInfo&&!0===t.debutInfo.hasDebutInfo&&!0===t.debutInfo.isRecentlyDebut,style:{backgroundColor:"rgba(156, 205, 196, 0.5)","&:hover":{cursor:"pointer"}}},{when:t=>"graduate"===t.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,n){"use strict";var r=n("L9y4");e.a=()=>({columns:[],data:[],conditionalRowStyles:r.a})},MJ1U:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a}));var r=n("hosL"),o=n("OhSV"),i=n("GKGp");const a=()=>{const e=Object(i.a)();switch(e){case"TW":case"HK":case"MY":return Object(r.h)(t,null," ","(",Object(r.h)(o.c,{id:"text.onlyShowing"},"only showing "),Object(r.h)(o.c,{id:`nationalityTitle.${e}`},"placeholder")," ","VTuber)");default:return null}}}).call(this,n("hosL").Fragment)},Wfbs:function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=n("hosL"),c=n("QRet"),u=n("L9Wd"),l="floating__uhu4Y",s="floatingHidden__mvSUQ",b="floatingShowing__nwzm5";e.a=function(t){const[e,n]=Object(c.l)(!1),[r,i]=Object(c.l)(t.filterModel),d=e=>{{const n=e,c=e=>{const a=function(t){if(null==t)return null;const e=t.trim();return""===e?null:e}(e);i(o(o({},r),{},{[n]:a})),function(e){null!=t.onChange&&t.onChange(e)}(o(o({},r),{},{[n]:a}))};return Object(a.h)(u.a,{key:e,placeholderText:t.fieldPlaceHolderMappings.get(n),filterText:r[n],onFilter:t=>c(t.target.value),onClear:()=>c(null)})}},p=Object.keys(t.filterModel).map((t=>d(t)));return Object(a.h)("div",null,Object(a.h)((()=>Object(a.h)("input",{type:"button",value:!0===e?t.closeSearchText:t.openSearchText,onClick:()=>n(!e)})),null),!0===e?Object(a.h)("div",{class:e?`${l} ${b}`:`${l} ${s}`},p):null)}},nnvw:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=(t,e)=>{var n;return{id:t.id,name:t.name,imgUrl:t.imgUrl,YouTubeId:t.YouTube.id,TwitchId:null===(n=t.Twitch)||void 0===n?void 0:n.id,totalViewCount:t.YouTube.totalViewCount,_7DaysGrowth:t.YouTube._7DaysGrowth,_30DaysGrowth:t.YouTube._30DaysGrowth,popularVideo:t.popularVideo,group:t.group,nationality:t.nationality,activity:t.activity,ranking:e}}},pmH6:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=()=>({name:"#",selector:t=>t.ranking,wrap:!1})},sKFU:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("hosL"),o=n("OhSV"),i=n("0yJK");const a=()=>({name:Object(r.h)(o.c,{id:"table.popularVideo"},"Popular Video"),cell:t=>void 0!==t.popularVideo?Object(r.h)(i.a,{popularVideo:t.popularVideo}):null})},uZiY:function(t,e){"use strict";e.a={searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}}}]);
//# sourceMappingURL=route-VTubersViewCount.chunk.8f7b5.esm.js.map