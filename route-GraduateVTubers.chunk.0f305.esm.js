(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+IGI":function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var o=r("hosL"),n=r("OhSV");const c=()=>({name:Object(o.h)(n.c,{id:"table.graduateDate"},"Graduation Date"),selector:e=>e.graduateDate})},"4RMJ":function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return u}));var o=r("qjhZ");const n=(e,t)=>{const r=void 0!==e.YouTubeSubscriber,n=void 0!==t.YouTubeSubscriber;return r||n?n?r?e.YouTubeSubscriber&&t.YouTubeSubscriber?-1*Object(o.a)(e.YouTubeSubscriber,t.YouTubeSubscriber):0:1:-1:0},c=(e,t)=>{const r=void 0!==e.TwitchFollower,n=void 0!==t.TwitchFollower;return r||n?n?r?e.TwitchFollower&&t.TwitchFollower?-1*Object(o.a)(e.TwitchFollower,t.TwitchFollower):0:1:-1:0},a=(e,t)=>{var r,n,c,a;const i=(null!==(r=Object(o.b)(e.YouTubeSubscriber))&&void 0!==r?r:0)+(null!==(n=Object(o.b)(e.TwitchFollower))&&void 0!==n?n:0),u=(null!==(c=Object(o.b)(t.YouTubeSubscriber))&&void 0!==c?c:0)+(null!==(a=Object(o.b)(t.TwitchFollower))&&void 0!==a?a:0);return i>u?1:u>i?-1:0},i=(e,t)=>-1*a(e,t),u=e=>{switch(e){case"YouTube+Twitch":return i;case"YouTube":return n;case"Twitch":return c}}},"69ZN":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("hosL"),n=r("OhSV"),c=r("CGiE");const a=()=>({name:Object(o.h)(n.c,{id:"table.displayName"},"Name"),cell:e=>Object(o.h)(c.a,{VTuberId:e.id,imgUrl:e.imgUrl,name:e.name})})},"7Asn":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("hosL"),n=r("OhSV"),c=r("Wcfx");const a=()=>({name:Object(o.h)(n.c,{id:"table.group"},"Group"),cell:e=>void 0!==e.group?Object(o.h)("a",{href:Object(c.b)({type:"group",name:e.group})},e.group):null})},"7DLW":function(e,t,r){"use strict";var o=r("hosL"),n=r("WbG0"),c="noWrap__BzT1O",a="YouTubeRed__1JOkf",i="TwitchPurple__qQQlw";t.a=e=>{const t=e=>Object(o.h)("span",{class:`${c} ${a}`},Object(o.h)(n.a,{countType:e})),r=e=>Object(o.h)("span",{class:`${c} ${i}`},Object(o.h)(n.a,{countType:e}));return Object(o.h)(o.Fragment,null,Object(o.h)((e=>e.YouTubeCount&&e.TwitchCount?Object(o.h)(o.Fragment,null,t(e.YouTubeCount),Object(o.h)("span",{class:c}," + "),r(e.TwitchCount)):e.YouTubeCount?Object(o.h)(o.Fragment,null,t(e.YouTubeCount)):e.TwitchCount?Object(o.h)(o.Fragment,null,r(e.TwitchCount)):null),e))}},"8et+":function(e,t,r){"use strict";function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return i}));var a=r("sPVG");const i=(e,t)=>n(n({},Object(a.a)(e)),{},{graduateDate:e.graduateDate,isToday:e.graduateDate===t})},CGiE:function(e,t,r){"use strict";var o=r("hosL"),n=r("+Ox3"),c="container__vr1DG",a="profileImageFlex__4VERG",i="nameFlex__WFOO9";t.a=e=>Object(o.h)("div",{class:c},Object(o.h)("div",{class:a},Object(o.h)(n.a,{VTuberId:e.VTuberId,imgUrl:e.imgUrl,clickBehavior:"popup"})),Object(o.h)("span",{class:i},e.name))},HSXE:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("hosL"),n=r("OhSV"),c=r("7DLW");const a=()=>({name:Object(o.h)(n.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),cell:e=>Object(o.h)(c.a,{YouTubeCount:e.YouTubeSubscriber,TwitchCount:e.TwitchFollower})})},"JY+X":function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var o=r("hosL"),n=r("OhSV");const c=()=>({name:Object(o.h)(n.c,{id:"table.nationality"},"Nationality"),selector:e=>{var t;return null!==(t=e.nationality)&&void 0!==t?t:""}})},L9Wd:function(e,t,r){"use strict";var o=r("hosL"),n="container__1lsi6",c="textField__bDpXR",a="button__maFzS";t.a=e=>Object(o.h)("div",{class:n},Object(o.h)("input",{type:"text",class:c,placeholder:e.placeholderText,value:e.filterText,onChange:e.onFilter}),Object(o.h)("button",{type:"button",class:a,onClick:e.onClear},"X"))},L9y4:function(e,t){"use strict";t.a=[{when:e=>"preparing"===e.activity,style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:e=>"graduate"===e.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(e,t,r){"use strict";var o=r("L9y4");t.a=()=>({columns:[],data:[],conditionalRowStyles:o.a})},MJ1U:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return a}));var o=r("hosL"),n=r("OhSV"),c=r("GKGp");const a=()=>{const t=Object(c.a)();switch(t){case"TW":case"HK":case"MY":return Object(o.h)(e,null," ","(",Object(o.h)(n.c,{id:"text.onlyShowing"},"only showing "),Object(o.h)(n.c,{id:`nationalityTitle.${t}`},"placeholder")," ","VTuber)");default:return null}}}).call(this,r("hosL").Fragment)},TToT:function(e,t){"use strict";t.a=[{when:e=>e.isToday,style:{color:"mediumblue"}}]},qO1o:function(e,t,r){"use strict";var o=r("hosL"),n="tooltip__vtGmz",c="tooltipText__pA-zc";t.a=e=>Object(o.h)("div",{class:n},e.children,Object(o.h)("span",{class:c,style:{width:e.width,fontSize:e.fontSize}},e.text))},qjhZ:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return n}));const o=e=>{if(void 0===e)return null;switch(e.tag){case"has":return e.count;case"hidden":case"no":return null}},n=(e,t)=>{switch(e.tag){case"has":switch(t.tag){case"has":return e.count-t.count;case"hidden":case"no":return 1}break;case"hidden":switch(t.tag){case"has":return-1;case"hidden":return 0;case"no":return 1}break;case"no":switch(t.tag){case"has":case"hidden":return-1;case"no":return 0}}}},sKFU:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("hosL"),n=r("OhSV"),c=r("0yJK");const a=()=>({name:Object(o.h)(n.c,{id:"table.popularVideo"},"Popular Video"),cell:e=>void 0!==e.popularVideo?Object(o.h)(c.a,{popularVideo:e.popularVideo}):null})},sPVG:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));const o=e=>{var t,r,o,n;return{id:e.id,activity:e.activity,name:e.name,imgUrl:e.imgUrl,YouTubeId:null===(t=e.YouTube)||void 0===t?void 0:t.id,YouTubeSubscriber:null===(r=e.YouTube)||void 0===r?void 0:r.subscriber,TwitchId:null===(o=e.Twitch)||void 0===o?void 0:o.id,TwitchFollower:null===(n=e.Twitch)||void 0===n?void 0:n.follower,popularVideo:e.popularVideo,group:e.group,nationality:e.nationality}}},uZiY:function(e,t){"use strict";t.a={searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},ueNj:function(e,t,r){"use strict";r.r(t),function(e){function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},o.apply(this,arguments)}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=r("drLk"),u=r("hosL"),s=r("OhSV"),l=r("QRet"),b=r("ENxA"),h=r("y7vS"),d=r("L9Wd"),O=r("L9y4"),p=r("TToT"),j=r("+IGI"),f=r("7Asn"),w=r("69ZN"),T=r("JY+X"),g=r("sKFU"),v=r("HSXE"),y=r("8r9F"),m=r("LftB"),S=r("MJ1U"),L=r("4RMJ"),C=r("8et+"),F=r("uZiY");t.default=t=>{document.title=`${t.dictionary.header.graduateVTubers} | ${t.dictionary.header.title}`;const r=[c(c({},Object(j.a)()),{},{sortable:!0}),Object(w.a)(),c(c({},Object(v.a)()),{},{sortable:!0,sortFunction:L.b}),Object(g.a)(),Object(f.a)(),Object(T.a)()],[n,a]=Object(l.k)([]),[V,Y]=Object(l.k)(""),[x,D]=Object(l.k)(""),[P,_]=Object(l.k)(""),[k,G]=Object(l.k)(!1),U=n.filter((e=>e.graduateDate&&e.graduateDate.toLowerCase().includes(V.toLowerCase()))).filter((e=>e.name&&e.name.toLowerCase().includes(x.toLowerCase()))).filter((e=>""===P||void 0!==e.group&&e.group.toLowerCase().includes(P.toLowerCase()))),z=Object(l.h)((()=>Object(u.h)("div",{class:F.a.searchBarGroup},Object(u.h)(d.a,{placeholderText:t.dictionary.table.searchByDate,onFilter:e=>Y(e.target.value),onClear:()=>{V&&(G(!k),Y(""))},filterText:V}),Object(u.h)(d.a,{placeholderText:t.dictionary.table.searchByDisplayName,onFilter:e=>D(e.target.value),onClear:()=>{x&&(G(!k),D(""))},filterText:x}),Object(u.h)(d.a,{placeholderText:t.dictionary.table.searchByGroup,onFilter:e=>_(e.target.value),onClear:()=>{P&&(G(!k),_(""))},filterText:P}))),[V,x,P,k,t.dictionary]),[B,E]=Object(l.k)(!0);return Object(l.d)((()=>{(async()=>{const e=Object(y.c)(new Date,8);await i.c("recent").then((t=>{a(t.data.VTubers.map((e=>e)).sort(((e,t)=>t.graduateDate.localeCompare(e.graduateDate))).map((t=>Object(C.a)(t,e)))),E(!1)}))})()}),[]),Object(u.h)(e,null,Object(u.h)("h1",null,Object(u.h)(s.c,{id:"header.graduateVTubers"},"Graduate VTubers"),Object(S.a)(),Object(u.h)(h.a,{width:"300px",fontSize:"13px",text:Object(u.h)(s.c,{id:"toolTip.graduateVTubers"},"tooltip text")})),Object(u.h)(b.b,o({},m.a,{columns:r,data:U,conditionalRowStyles:O.a.concat(p.a),fixedHeader:!0,pagination:!0,paginationComponentOptions:t.dictionary.table.paginationOptions,progressComponent:Object(u.h)(s.c,{id:"text.loading"},"Loading..."),progressPending:B,subHeader:!0,subHeaderComponent:z})))}}.call(this,r("hosL").Fragment)},y7vS:function(e,t,r){"use strict";var o=r("hosL"),n=r("qO1o"),c="questionMark__RT3wD";t.a=e=>Object(o.h)(n.a,{text:e.text,width:e.width,fontSize:e.fontSize},Object(o.h)("img",{class:c}))}}]);
//# sourceMappingURL=route-GraduateVTubers.chunk.0f305.esm.js.map