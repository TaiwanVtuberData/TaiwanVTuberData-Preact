(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0kGK":function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return u}));var i=r("sPVG");const a=(t,e)=>o(o({},t),{},{percentage:void 0!==e&&0!==e?t.diff/e:0}),u=t=>o(o({},Object(i.a)(t)),{},{YouTubeSubscriber:t.YouTube.subscriber,_7DaysGrowth:a(t.YouTube._7DaysGrowth,t.YouTube.subscriber.count),_30DaysGrowth:a(t.YouTube._30DaysGrowth,t.YouTube.subscriber.count)})},"4BB4":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));const n={headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}}},"69ZN":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("hosL"),o=r("OhSV"),c=r("CGiE");const i=()=>({name:Object(n.h)(o.c,{id:"table.displayName"},"Name"),cell:t=>Object(n.h)(c.a,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name})})},"76Fs":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("hosL"),o=r("OhSV"),c=r("Dy4S");const i=t=>({name:Object(n.h)(o.c,{id:"table._7DaysGrowth"},"7 Days Growth (Percent)"),cell:e=>Object(c.a)(e._7DaysGrowth,t)})},"7Asn":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("hosL"),o=r("OhSV"),c=r("Wcfx");const i=()=>({name:Object(n.h)(o.c,{id:"table.group"},"Group"),cell:t=>void 0!==t.group?Object(n.h)("a",{href:Object(c.b)({type:"group",name:t.group})},t.group):null})},A0ue:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("hosL"),o=r("OhSV"),c=r("Dy4S");const i=t=>({name:Object(n.h)(o.c,{id:"table._30DaysGrowth"},"30 Days Growth (Percent)"),cell:e=>Object(c.a)(e._30DaysGrowth,t)})},CGiE:function(t,e,r){"use strict";var n=r("hosL"),o=r("+Ox3"),c="container__vr1DG",i="profileImageFlex__4VERG",a="nameFlex__WFOO9";e.a=t=>Object(n.h)("div",{class:c},Object(n.h)("div",{class:i},Object(n.h)(o.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl,clickBehavior:"popup"})),Object(n.h)("span",{class:a},t.name))},Dy4S:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));const n=t=>t>0?`+${t}`:t<0?`${t}`:"0",o=t=>(100*t).toFixed(2),c=(t,e)=>{if(t.percentage)switch(t.recordType){case"none":return e.noRecord;case"partial":return`${e.atLeast} ${n(t.diff)} (${o(t.percentage)}%)`;case"full":return`${n(t.diff)} (${o(t.percentage)}%)`}switch(t.recordType){case"none":return e.noRecord;case"partial":return`${e.atLeast} ${n(t.diff)}`;case"full":return`${n(t.diff)}`}}},It6v:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return o}));const n=(t,e)=>{const r=t._7DaysGrowth.percentage,n=e._7DaysGrowth.percentage;return r>n?1:n>r?-1:0},o=(t,e)=>{const r=t._30DaysGrowth.percentage,n=e._30DaysGrowth.percentage;return r>n?1:n>r?-1:0}},"JY+X":function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("hosL"),o=r("OhSV");const c=()=>({name:Object(n.h)(o.c,{id:"table.nationality"},"Nationality"),selector:t=>{var e;return null!==(e=t.nationality)&&void 0!==e?e:""}})},L9Wd:function(t,e,r){"use strict";var n=r("hosL"),o="container__1lsi6",c="textField__bDpXR",i="button__maFzS";e.a=t=>Object(n.h)("div",{class:o},Object(n.h)("input",{type:"text",class:c,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(n.h)("button",{type:"button",class:i,onClick:t.onClear},"X"))},L9y4:function(t,e){"use strict";e.a=[{when:t=>"preparing"===t.activity,style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:t=>"graduate"===t.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,r){"use strict";var n=r("L9y4");e.a=()=>({columns:[],data:[],conditionalRowStyles:n.a})},MJ1U:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return i}));var n=r("hosL"),o=r("OhSV"),c=r("GKGp");const i=()=>{const e=Object(c.a)();switch(e){case"TW":case"HK":case"MY":return Object(n.h)(t,null," ","(",Object(n.h)(o.c,{id:"text.onlyShowing"},"only showing "),Object(n.h)(o.c,{id:`nationalityTitle.${e}`},"placeholder")," ","VTuber)");default:return null}}}).call(this,r("hosL").Fragment)},U2b0:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("hosL"),o=r("OhSV");const c=()=>({name:Object(n.h)(o.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),selector:t=>t.YouTubeSubscriber.count})},UBrP:function(t,e,r){"use strict";r.r(e),function(t){function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a=r("drLk"),u=r("hosL"),s=r("OhSV"),l=r("QRet"),b=r("ENxA"),d=r("y7vS"),h=r("L9Wd"),p=r("4BB4"),O=r("7Asn"),f=r("69ZN"),y=r("JY+X"),g=r("sKFU"),j=r("U2b0"),w=r("A0ue"),v=r("76Fs"),m=r("LftB"),T=r("MJ1U"),x=r("0kGK"),G=r("uZiY"),S=r("It6v"),L=r("L9y4");e.default=e=>{document.title=`${e.dictionary.header.growingVTubers} | ${e.dictionary.header.title}`;const r=[c(c({},Object(f.a)()),{},{width:"200px"}),c(c({},Object(j.a)()),{},{sortable:!0}),c(c({},Object(v.a)(e.dictionary.table)),{},{right:!0,sortable:!0,sortFunction:S.b}),c(c({},Object(w.a)(e.dictionary.table)),{},{right:!0,sortable:!0,sortFunction:S.a}),c(c({},Object(g.a)()),{},{width:"100px"}),c(c({},Object(O.a)()),{},{width:"100px"}),c(c({},Object(y.a)()),{},{width:"100px"})],[o,i]=Object(l.k)([]),[_,D]=Object(l.k)(""),[V,P]=Object(l.k)(""),[F,C]=Object(l.k)(!1),Y=o.filter((t=>t.name&&t.name.toLowerCase().includes(_.toLowerCase()))).filter((t=>""===V||void 0!==t.group&&t.group.toLowerCase().includes(V.toLowerCase()))),k=Object(l.h)((()=>Object(u.h)("div",{class:G.a.searchBarGroup},Object(u.h)(h.a,{placeholderText:e.dictionary.table.searchByDisplayName,onFilter:t=>D(t.target.value),onClear:()=>{_&&(C(!F),D(""))},filterText:_}),Object(u.h)(h.a,{placeholderText:e.dictionary.table.searchByGroup,onFilter:t=>P(t.target.value),onClear:()=>{V&&(C(!F),P(""))},filterText:V}))),[_,V,F,e.dictionary]),[U,B]=Object(l.k)(!0);return Object(l.d)((()=>{(async()=>{await a.f("100").then((t=>{i(t.data.VTubers.map((t=>t)).map((t=>Object(x.a)(t))).sort(((t,e)=>e._7DaysGrowth.percentage-t._7DaysGrowth.percentage))),B(!1)}))})()}),[]),Object(u.h)(t,null,Object(u.h)("h1",null,Object(u.h)(s.c,{id:"header.growingVTubers"},"Growing VTubers"),Object(T.a)(),Object(u.h)(d.a,{width:"300px",fontSize:"13px",text:Object(u.h)(s.c,{id:"toolTip.growingVTubers"},"tooltip text")})),Object(u.h)(b.b,n({},m.a,{columns:r,data:Y,conditionalRowStyles:L.a,customStyles:p.a,fixedHeader:!0,pagination:!0,paginationComponentOptions:e.dictionary.table.paginationOptions,progressComponent:Object(u.h)(s.c,{id:"text.loading"},"Loading..."),progressPending:U,subHeader:!0,subHeaderComponent:k})))}}.call(this,r("hosL").Fragment)},qO1o:function(t,e,r){"use strict";var n=r("hosL"),o="tooltip__vtGmz",c="tooltipText__pA-zc";e.a=t=>Object(n.h)("div",{class:o},t.children,Object(n.h)("span",{class:c,style:{width:t.width,fontSize:t.fontSize}},t.text))},sKFU:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("hosL"),o=r("OhSV"),c=r("0yJK");const i=()=>({name:Object(n.h)(o.c,{id:"table.popularVideo"},"Popular Video"),cell:t=>void 0!==t.popularVideo?Object(n.h)(c.a,{popularVideo:t.popularVideo}):null})},sPVG:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));const n=t=>{var e,r,n,o;return{id:t.id,activity:t.activity,name:t.name,imgUrl:t.imgUrl,YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,YouTubeSubscriber:null===(r=t.YouTube)||void 0===r?void 0:r.subscriber,TwitchId:null===(n=t.Twitch)||void 0===n?void 0:n.id,TwitchFollower:null===(o=t.Twitch)||void 0===o?void 0:o.follower,popularVideo:t.popularVideo,group:t.group,nationality:t.nationality}}},uZiY:function(t,e){"use strict";e.a={searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},y7vS:function(t,e,r){"use strict";var n=r("hosL"),o=r("qO1o"),c="questionMark__RT3wD";e.a=t=>Object(n.h)(o.a,{text:t.text,width:t.width,fontSize:t.fontSize},Object(n.h)("img",{class:c}))}}]);
//# sourceMappingURL=route-GrowingVTubers.chunk.1c363.esm.js.map