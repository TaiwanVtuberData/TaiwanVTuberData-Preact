(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"49Dv":function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"a",(function(){return c}));var r=e("5Sdp"),o=e("8r9F"),u=function(t){return null==t?{hasDebutInfo:!1}:c(t)},c=function(t){return{hasDebutInfo:!0,debutDate:t,isToday:t===r.c,isRecentlyDebut:Object(o.a)(Object(o.b)(t,r.a),r.b)<30}}},"4BB4":function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r={headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}}},"4RMJ":function(t,n,e){"use strict";e.d(n,"b",(function(){return c})),e.d(n,"a",(function(){return a}));var r=e("qjhZ"),o=function(t,n){var e=void 0!==t.YouTubeSubscriber,o=void 0!==n.YouTubeSubscriber;return e||o?o?e?t.YouTubeSubscriber&&n.YouTubeSubscriber?-1*Object(r.a)(t.YouTubeSubscriber,n.YouTubeSubscriber):0:1:-1:0},u=function(t,n){var e=void 0!==t.TwitchFollower,o=void 0!==n.TwitchFollower;return e||o?o?e?t.TwitchFollower&&n.TwitchFollower?-1*Object(r.a)(t.TwitchFollower,n.TwitchFollower):0:1:-1:0},c=function(t,n){var e,o,u,c,i=(null!==(e=Object(r.b)(t.YouTubeSubscriber))&&void 0!==e?e:0)+(null!==(o=Object(r.b)(t.TwitchFollower))&&void 0!==o?o:0),a=(null!==(u=Object(r.b)(n.YouTubeSubscriber))&&void 0!==u?u:0)+(null!==(c=Object(r.b)(n.TwitchFollower))&&void 0!==c?c:0);return i>a?1:a>i?-1:0},i=function(t,n){return-1*c(t,n)},a=function(t){switch(t){case"YouTube+Twitch":return i;case"YouTube":return o;case"Twitch":return u}}},"5Sdp":function(t,n,e){"use strict";e.d(n,"a",(function(){return u})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return i}));var r=e("8r9F"),o=e("Dy4S"),u=Object(o.b)(void 0,8),c=Object(r.d)(new Date,u),i=Object(r.g)(c,u)},"69ZN":function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e("hosL"),o=e("OhSV"),u=e("CGiE"),c=function(){return{name:Object(r.h)(o.c,{id:"table.displayName"},"Name"),cell:function(t){return Object(r.h)(u.a,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name})}}}},"7Asn":function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e("hosL"),o=e("OhSV"),u=e("Wcfx"),c=function(){return{name:Object(r.h)(o.c,{id:"table.group"},"Group"),cell:function(t){return void 0!==t.group?Object(r.h)("a",{href:Object(u.b)({type:"group",name:t.group})},t.group):null}}}},"7DLW":function(t,n,e){"use strict";var r=e("hosL"),o=e("WbG0"),u="noWrap__BzT1O",c="YouTubeRed__1JOkf",i="TwitchPurple__qQQlw";n.a=function(t){var n=function(t){return Object(r.h)("span",{class:"".concat(u," ").concat(c)},Object(r.h)(o.a,{countType:t}))},e=function(t){return Object(r.h)("span",{class:"".concat(u," ").concat(i)},Object(r.h)(o.a,{countType:t}))};return Object(r.h)(r.Fragment,null,Object(r.h)((function(t){return t.YouTubeCount&&t.TwitchCount?Object(r.h)(r.Fragment,null,n(t.YouTubeCount),Object(r.h)("span",{class:u}," + "),e(t.TwitchCount)):t.YouTubeCount?Object(r.h)(r.Fragment,null,n(t.YouTubeCount)):t.TwitchCount?Object(r.h)(r.Fragment,null,e(t.TwitchCount)):null}),t))}},CGiE:function(t,n,e){"use strict";var r=e("hosL"),o=e("+Ox3"),u="container__vr1DG",c="profileImageFlex__4VERG",i="nameFlex__WFOO9";n.a=function(t){return Object(r.h)("div",{class:u},Object(r.h)("div",{class:c},Object(r.h)(o.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl,clickBehavior:"popup"})),Object(r.h)("span",{class:i},t.name))}},Dy4S:function(t,n,e){"use strict";e.d(n,"a",(function(){return u})),e.d(n,"b",(function(){return c}));var r=function(t){return t>0?"+".concat(t):t<0?"".concat(t):"0"},o=function(t){return(100*t).toFixed(2)},u=function(t,n){if(t.percentage)switch(t.recordType){case"none":return n.noRecord;case"partial":return"".concat(n.atLeast," ").concat(r(t.diff)," (").concat(o(t.percentage),"%)");case"full":return"".concat(r(t.diff)," (").concat(o(t.percentage),"%)")}switch(t.recordType){case"none":return n.noRecord;case"partial":return"".concat(n.atLeast," ").concat(r(t.diff));case"full":return"".concat(r(t.diff))}},c=function(t,n){if(void 0!==t){var e=parseInt(t,10);if(!1===isNaN(e))return e}return n}},GHZf:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e("hosL"),o=e("OhSV"),u=e("7DLW"),c=function(t){if(t)return{tag:"has",count:t}},i=function(){return{name:Object(r.h)(o.c,{id:"table.popularity"},"Popularity"),cell:function(t){return Object(r.h)(u.a,{YouTubeCount:c(t.YouTubePopularity),TwitchCount:c(t.TwitchPopularity)})}}}},HSXE:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e("hosL"),o=e("OhSV"),u=e("7DLW"),c=function(){return{name:Object(r.h)(o.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),cell:function(t){return Object(r.h)(u.a,{YouTubeCount:t.YouTubeSubscriber,TwitchCount:t.TwitchFollower})}}}},"JY+X":function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e("hosL"),o=e("OhSV"),u=function(){return{name:Object(r.h)(o.c,{id:"table.nationality"},"Nationality"),selector:function(t){var n;return null!==(n=t.nationality)&&void 0!==n?n:""}}}},"L4T+":function(t,n,e){"use strict";function r(t,n){return!Object.entries(n).map((function(n){var e=t[n[0]],r=n[1];return null===r||null!=e&&""!==e&&e.toLowerCase().includes(r.toLowerCase())})).some((function(t){return!1===t}))}e.d(n,"a",(function(){return r}))},L9Wd:function(t,n,e){"use strict";var r=e("hosL"),o="container__1lsi6",u="textField__bDpXR",c="button__maFzS";n.a=function(t){var n;return Object(r.h)("div",{class:o},Object(r.h)("input",{type:"text",class:u,placeholder:t.placeholderText,value:null!==(n=t.filterText)&&void 0!==n?n:"",onChange:t.onFilter}),Object(r.h)("button",{type:"button",class:c,onClick:t.onClear},"X"))}},L9y4:function(t,n){"use strict";n.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:function(t){return"active"===t.activity&&void 0!==t.debutInfo&&!0===t.debutInfo.hasDebutInfo&&!0===t.debutInfo.isRecentlyDebut},style:{backgroundColor:"rgba(156, 205, 196, 0.5)","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,n,e){"use strict";var r=e("L9y4");n.a=function(){return{columns:[],data:[],conditionalRowStyles:r.a}}},MJ1U:function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return c}));var r=e("hosL"),o=e("OhSV"),u=e("GKGp"),c=function(){var n=Object(u.a)();switch(n){case"TW":case"HK":case"MY":return Object(r.h)(t,null," ","(",Object(r.h)(o.c,{id:"text.onlyShowing"},"only showing "),Object(r.h)(o.c,{id:"nationalityTitle.".concat(n)},"placeholder")," ","VTuber)");default:return null}}}).call(this,e("hosL").Fragment)},PzPG:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o}));var r=function(t,n){var e,r,o,u,c=(null!==(e=t.YouTubePopularity)&&void 0!==e?e:0)+(null!==(r=t.TwitchPopularity)&&void 0!==r?r:0),i=(null!==(o=n.YouTubePopularity)&&void 0!==o?o:0)+(null!==(u=n.TwitchPopularity)&&void 0!==u?u:0);return c>i?1:i>c?-1:0},o=function(t,n){return-1*r(t,n)}},QV1m:function(t,n,e){"use strict";e.r(n),function(t){function r(){return r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},r.apply(this,arguments)}function o(t,n,e,r,o,u,c){try{var i=t[u](c),a=i.value}catch(t){return void e(t)}i.done?n(a):Promise.resolve(a).then(r,o)}function u(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,u=[],c=!0,i=!1;try{for(e=e.call(t);!(c=(r=e.next()).done)&&(u.push(r.value),!n||u.length!==n);c=!0);}catch(t){i=!0,o=t}finally{try{c||null==e.return||e.return()}finally{if(i)throw o}}return u}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return c(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var s=e("drLk"),b=e("hosL"),f=e("OhSV"),d=e("QRet"),h=e("ENxA"),p=e("4BB4"),O=e("7Asn"),y=e("69ZN"),v=e("JY+X"),j=e("GHZf"),w=e("sKFU"),g=e("HSXE"),T=e("LftB"),m=e("MJ1U"),S=e("PzPG"),P=e("4RMJ"),x=e("enE3"),Y=e("y7vS"),L=e("uZiY"),C=e("pmH6"),F=e("L9y4"),D=e("Wfbs"),_=e("L4T+");n.default=function(n){document.title="".concat(n.dictionary.header.trendingVTubers," | ").concat(n.dictionary.header.title);var e=[a(a({},Object(C.a)()),{},{sortable:!0,width:"40px"}),Object(y.a)(),a(a({},Object(j.a)()),{},{sortFunction:S.a,sortable:!0}),a(a({},Object(g.a)()),{},{sortFunction:P.b,sortable:!0}),Object(w.a)(),Object(O.a)(),Object(v.a)()],c=u(Object(d.l)([]),2),i=c[0],l=c[1],V=u(Object(d.l)({name:null,YouTubeId:null,TwitchId:null,group:null,nationality:null}),2),I=V[0],k=V[1],G=i.filter((function(t){return Object(_.a)(t,I)})),R=Object(d.i)((function(){var t=new Map([["name",n.dictionary.table.searchByDisplayName],["YouTubeId",n.dictionary.table.searchByYouTubeId],["TwitchId",n.dictionary.table.searchByTwitchId],["group",n.dictionary.table.searchByGroup],["nationality",n.dictionary.table.searchByNationality]]);return Object(b.h)("div",{class:L.a.searchBarGroup},Object(b.h)(D.a,{filterModel:I,fieldPlaceHolderMappings:t,openSearchText:n.dictionary.text.openSearch,closeSearchText:n.dictionary.text.closeSearch,onChange:function(t){k(t)}}))}),[I,n.dictionary]),A=u(Object(d.l)(!0),2),B=A[0],E=A[1],H=function(){var t,n=(t=function*(){yield s.h("100").then((function(t){l(t.data.VTubers.map((function(t){return t})).map((function(t,n){return Object(x.a)(t,n+1)})).sort(S.b).map((function(t,n){return a(a({},t),{},{ranking:n+1})}))),E(!1)}))},function(){var n=this,e=arguments;return new Promise((function(r,u){function c(t){o(a,r,u,c,i,"next",t)}function i(t){o(a,r,u,c,i,"throw",t)}var a=t.apply(n,e);c(void 0)}))});return function(){return n.apply(this,arguments)}}();return Object(d.d)((function(){H()}),[]),Object(b.h)(t,null,Object(b.h)("h1",null,Object(b.h)(f.c,{id:"header.trendingVTubers"},"Trending VTubers"),Object(m.a)(),Object(b.h)(Y.a,{width:"300px",fontSize:"13px",text:Object(b.h)(f.c,{id:"toolTip.trendingVTubers"},"tooltip text")})),Object(b.h)(h.b,r({},T.a,{columns:e,data:G,conditionalRowStyles:F.a,customStyles:p.a,fixedHeader:!0,pagination:!0,paginationComponentOptions:n.dictionary.table.paginationOptions,progressComponent:Object(b.h)(f.c,{id:"text.loading"},"Loading..."),progressPending:B,subHeader:!0,subHeaderComponent:R})))}}.call(this,e("hosL").Fragment)},Wfbs:function(t,n,e){"use strict";function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){u(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function c(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,u=[],c=!0,i=!1;try{for(e=e.call(t);!(c=(r=e.next()).done)&&(u.push(r.value),!n||u.length!==n);c=!0);}catch(t){i=!0,o=t}finally{try{c||null==e.return||e.return()}finally{if(i)throw o}}return u}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var a=e("hosL"),l=e("QRet"),s=e("L9Wd"),b="floating__uhu4Y",f="floatingHidden__mvSUQ",d="floatingShowing__nwzm5";n.a=function(t){var n=c(Object(l.l)(!1),2),e=n[0],r=n[1],i=c(Object(l.l)(t.filterModel),2),h=i[0],p=i[1],O=function(n){var e=n,r=function(n){var r=function(t){if(null==t)return null;var n=t.trim();return""===n?null:n}(n);p(o(o({},h),{},u({},e,r))),function(n){null!=t.onChange&&t.onChange(n)}(o(o({},h),{},u({},e,r)))};return Object(a.h)(s.a,{key:n,placeholderText:t.fieldPlaceHolderMappings.get(e),filterText:h[e],onFilter:function(t){return r(t.target.value)},onClear:function(){return r(null)}})},y=Object.keys(t.filterModel).map((function(t){return O(t)}));return Object(a.h)("div",null,Object(a.h)((function(){return Object(a.h)("input",{type:"button",value:!0===e?t.closeSearchText:t.openSearchText,onClick:function(){return r(!e)}})}),null),!0===e?Object(a.h)("div",{class:e?"".concat(b," ").concat(d):"".concat(b," ").concat(f)},y):null)}},enE3:function(t,n,e){"use strict";function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){u(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",(function(){return i}));var c=e("sPVG"),i=function(t,n){var e,r;return o(o({},Object(c.a)(t)),{},{YouTubePopularity:null===(e=t.YouTube)||void 0===e?void 0:e.popularity,TwitchPopularity:null===(r=t.Twitch)||void 0===r?void 0:r.popularity,ranking:n})}},pmH6:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r=function(){return{name:"#",selector:function(t){return t.ranking},wrap:!1}}},qO1o:function(t,n,e){"use strict";var r=e("hosL"),o="tooltip__vtGmz",u="tooltipText__pA-zc";n.a=function(t){return Object(r.h)("div",{class:o},t.children,Object(r.h)("span",{class:u,style:{width:t.width,fontSize:t.fontSize}},t.text))}},qjhZ:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return o}));var r=function(t){if(void 0===t)return null;switch(t.tag){case"has":return t.count;case"hidden":case"no":return null}},o=function(t,n){switch(t.tag){case"has":switch(n.tag){case"has":return t.count-n.count;case"hidden":case"no":return 1}case"hidden":switch(n.tag){case"has":return-1;case"hidden":return 0;case"no":return 1}case"no":switch(n.tag){case"has":case"hidden":return-1;case"no":return 0}}}},sKFU:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e("hosL"),o=e("OhSV"),u=e("0yJK"),c=function(){return{name:Object(r.h)(o.c,{id:"table.popularVideo"},"Popular Video"),cell:function(t){return void 0!==t.popularVideo?Object(r.h)(u.a,{popularVideo:t.popularVideo}):null}}}},sPVG:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e("49Dv"),o=function(t){var n,e,o,u;return{id:t.id,activity:t.activity,name:t.name,imgUrl:t.imgUrl,YouTubeId:null===(n=t.YouTube)||void 0===n?void 0:n.id,YouTubeSubscriber:null===(e=t.YouTube)||void 0===e?void 0:e.subscriber,TwitchId:null===(o=t.Twitch)||void 0===o?void 0:o.id,TwitchFollower:null===(u=t.Twitch)||void 0===u?void 0:u.follower,popularVideo:t.popularVideo,group:t.group,nationality:t.nationality,debutInfo:Object(r.b)(t.debutDate)}}},uZiY:function(t,n){"use strict";n.a={searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},y7vS:function(t,n,e){"use strict";var r=e("hosL"),o=e("qO1o"),u="questionMark__RT3wD";n.a=function(t){return Object(r.h)(o.a,{text:t.text,width:t.width,fontSize:t.fontSize},Object(r.h)("img",{class:u}))}}}]);
//# sourceMappingURL=route-TrendingVTubers.chunk.54960.js.map