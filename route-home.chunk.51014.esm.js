(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"0kGK":function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return u}));var c=r("sPVG");const a=(t,e)=>i(i({},t),{},{percentage:void 0!==e&&0!==e?t.diff/e:0}),u=t=>i(i({},Object(c.a)(t)),{},{YouTubeSubscriber:t.YouTube.subscriber,_7DaysGrowth:a(t.YouTube._7DaysGrowth,t.YouTube.subscriber.count),_30DaysGrowth:a(t.YouTube._30DaysGrowth,t.YouTube.subscriber.count)})},"49Dv":function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return c}));var n=r("5Sdp"),i=r("8r9F");const o=t=>null==t?{hasDebutInfo:!1}:c(t),c=t=>({hasDebutInfo:!0,debutDate:t,isToday:t===n.c,isRecentlyDebut:Object(i.a)(Object(i.b)(t,n.a),n.b)<30})},"4BB4":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));const n={headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}}},"5Sdp":function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return a}));var n=r("8r9F"),i=r("Dy4S");const o=Object(i.b)(void 0,8),c=Object(n.d)(new Date,o),a=Object(n.g)(c,o)},"69ZN":function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("hosL"),i=r("OhSV"),o=r("CGiE");const c=()=>({name:Object(n.h)(i.c,{id:"table.displayName"},"Name"),cell:t=>Object(n.h)(o.a,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name})})},"6i5z":function(t,e,r){"use strict";(function(t){function n(){return n=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a=r("drLk"),u=r("hosL"),l=r("OhSV"),b=r("QRet"),s=r("ENxA"),d=r("L9y4"),O=r("4BB4"),f=r("69ZN"),h=r("sKFU"),p=r("U2b0"),j=r("76Fs"),y=r("LftB"),v=r("0kGK"),g=r("y7vS"),m=r("Wcfx");e.a=e=>{const r=[Object(f.a)(),Object(p.a)(),Object(j.a)(e.dictionary.table),o(o({},Object(h.a)()),{},{hide:s.a.SM})],[i,c]=Object(b.l)([]),[w,T]=Object(b.l)(!0);return Object(b.d)((()=>{(async()=>{await a.f("10").then((t=>{c(t.data.VTubers.map((t=>t)).map((t=>Object(v.a)(t))).sort(((t,e)=>e._7DaysGrowth.percentage-t._7DaysGrowth.percentage))),T(!1)}))})()}),[]),Object(u.h)(t,null,Object(u.h)("h3",null,Object(u.h)("a",{href:Object(m.b)({type:"growing-vtubers"})},Object(u.h)(l.c,{id:"header.growingVTubers"},"Growing VTubers"),Object(u.h)(t,null," "),Object(u.h)(l.c,{id:"header.top10"},"Top 10")),Object(u.h)(g.a,{width:"300px",fontSize:"13px",text:Object(u.h)(l.c,{id:"toolTip.growingVTubers"},"tooltip text")})),Object(u.h)(s.b,n({},y.a,{columns:r,data:i,conditionalRowStyles:d.a,customStyles:O.a,progressComponent:Object(u.h)(l.c,{id:"text.loading"},"Loading..."),progressPending:w})))}}).call(this,r("hosL").Fragment)},"76Fs":function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("hosL"),i=r("OhSV"),o=r("Dy4S");const c=t=>({name:Object(n.h)(i.c,{id:"table._7DaysGrowth"},"7 Days Growth (Percent)"),cell:e=>Object(o.a)(e._7DaysGrowth,t)})},"7DLW":function(t,e,r){"use strict";var n=r("hosL"),i=r("WbG0"),o="noWrap__BzT1O",c="YouTubeRed__1JOkf",a="TwitchPurple__qQQlw";e.a=t=>{const e=t=>Object(n.h)("span",{class:`${o} ${c}`},Object(n.h)(i.a,{countType:t})),r=t=>Object(n.h)("span",{class:`${o} ${a}`},Object(n.h)(i.a,{countType:t}));return Object(n.h)(n.Fragment,null,Object(n.h)((t=>t.YouTubeCount&&t.TwitchCount?Object(n.h)(n.Fragment,null,e(t.YouTubeCount),Object(n.h)("span",{class:o}," + "),r(t.TwitchCount)):t.YouTubeCount?Object(n.h)(n.Fragment,null,e(t.YouTubeCount)):t.TwitchCount?Object(n.h)(n.Fragment,null,r(t.TwitchCount)):null),t))}},CGiE:function(t,e,r){"use strict";var n=r("hosL"),i=r("+Ox3"),o="container__vr1DG",c="profileImageFlex__4VERG",a="nameFlex__WFOO9";e.a=t=>Object(n.h)("div",{class:o},Object(n.h)("div",{class:c},Object(n.h)(i.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl,clickBehavior:"popup"})),Object(n.h)("span",{class:a},t.name))},Dy4S:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return c}));const n=t=>t>0?`+${t}`:t<0?`${t}`:"0",i=t=>(100*t).toFixed(2),o=(t,e)=>{if(t.percentage)switch(t.recordType){case"none":return e.noRecord;case"partial":return`${e.atLeast} ${n(t.diff)} (${i(t.percentage)}%)`;case"full":return`${n(t.diff)} (${i(t.percentage)}%)`}switch(t.recordType){case"none":return e.noRecord;case"partial":return`${e.atLeast} ${n(t.diff)}`;case"full":return`${n(t.diff)}`}},c=(t,e)=>{if(void 0!==t){const e=parseInt(t,10);if(!1===isNaN(e))return e}return e}},GHZf:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("hosL"),i=r("OhSV"),o=r("7DLW");const c=t=>{if(t)return{tag:"has",count:t}},a=()=>({name:Object(n.h)(i.c,{id:"table.popularity"},"Popularity"),cell:t=>Object(n.h)(o.a,{YouTubeCount:c(t.YouTubePopularity),TwitchCount:c(t.TwitchPopularity)})})},HSXE:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("hosL"),i=r("OhSV"),o=r("7DLW");const c=()=>({name:Object(n.h)(i.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),cell:t=>Object(n.h)(o.a,{YouTubeCount:t.YouTubeSubscriber,TwitchCount:t.TwitchFollower})})},L9y4:function(t,e){"use strict";e.a=[{when:t=>"preparing"===t.activity,style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:t=>"active"===t.activity&&void 0!==t.debutInfo&&!0===t.debutInfo.hasDebutInfo&&!0===t.debutInfo.isRecentlyDebut,style:{backgroundColor:"rgba(156, 205, 196, 0.5)","&:hover":{cursor:"pointer"}}},{when:t=>"graduate"===t.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LUqa:function(t,e,r){"use strict";(function(t){var n=r("hosL"),i=r("oeP6");e.a=e=>Object(n.h)(t,null,e.data.map(((t,r)=>Object(n.h)(i.a,{divPrefix:e.divPrefix,id:r,key:r,VTuberId:t.VTuberId,imgUrl:t.imgUrl,name:t.name,thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl,startTime:t.startTime,now:e.now}))))}).call(this,r("hosL").Fragment)},LftB:function(t,e,r){"use strict";var n=r("L9y4");e.a=()=>({columns:[],data:[],conditionalRowStyles:n.a})},MJ1U:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return c}));var n=r("hosL"),i=r("OhSV"),o=r("GKGp");const c=()=>{const e=Object(o.a)();switch(e){case"TW":case"HK":case"MY":return Object(n.h)(t,null," ","(",Object(n.h)(i.c,{id:"text.onlyShowing"},"only showing "),Object(n.h)(i.c,{id:`nationalityTitle.${e}`},"placeholder")," ","VTuber)");default:return null}}}).call(this,r("hosL").Fragment)},NF43:function(t,e,r){"use strict";(function(t){function n(){return n=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a=r("drLk"),u=r("hosL"),l=r("OhSV"),b=r("QRet"),s=r("ENxA"),d=r("4BB4"),O=r("69ZN"),f=r("GHZf"),h=r("HSXE"),p=r("LftB"),j=r("PzPG"),y=r("enE3"),v=r("y7vS"),g=r("sKFU"),m=r("pmH6"),w=r("L9y4"),T=r("Wcfx");e.a=()=>{const e=[o(o({},Object(m.a)()),{},{width:"30px"}),Object(O.a)(),Object(f.a)(),Object(h.a)(),o(o({},Object(g.a)()),{},{hide:s.a.SM})],[r,i]=Object(b.l)([]),[c,P]=Object(b.l)(!0);return Object(b.d)((()=>{(async()=>{await a.h({sortBy:"livestream",count:"10"}).then((t=>{i(t.data.VTubers.map((t=>t)).map(((t,e)=>Object(y.a)(t,e+1))).sort(j.b).map(((t,e)=>o(o({},t),{},{ranking:e+1})))),P(!1)}))})()}),[]),Object(u.h)(t,null,Object(u.h)("h3",null,Object(u.h)("a",{href:Object(T.b)({type:"trending-vtubers",sortOrder:"livestream"})},Object(u.h)(l.c,{id:"header.trendingVTubers"},"Trending VTubers"),Object(u.h)(t,null," "),Object(u.h)(l.c,{id:"header.top10"},"Top 10")),Object(u.h)(v.a,{width:"300px",fontSize:"13px",text:Object(u.h)(l.c,{id:"toolTip.trendingVTubers"},"tooltip text")})),Object(u.h)(s.b,n({},p.a,{columns:e,data:r,conditionalRowStyles:w.a,customStyles:d.a,progressComponent:Object(u.h)(l.c,{id:"text.loading"},"Loading..."),progressPending:c})))}}).call(this,r("hosL").Fragment)},OPsQ:function(t,e,r){"use strict";r.r(e);var n=r("hosL"),i=r("OhSV"),o=r("paJy"),c=r("6i5z"),a=r("drLk"),u=r("QRet"),l=r("8r9F"),b=r("v6a3"),s=r("LUqa"),d="horizontalFlex__qr4MR";var O=t=>{const[e,r]=Object(u.l)(),[o,c]=Object(u.l)(!0),O=Object(u.k)(null);Object(u.d)((()=>{(async()=>{await a.g(t.modifier).then((e=>{const n=e.data.livestreams.map((t=>t)).map(((t,e)=>Object(b.a)(t,e))).sort(((t,e)=>t.startTime.getTime()-e.startTime.getTime()));r(n),c(!1),setTimeout((()=>{var e,r,i,o;const c=new Date(t.now);c.setHours(c.getHours()-1);const a=Object(l.c)(n,c),u=document.getElementById(`${t.divPrefix}-${Math.min(n.length-1,a)}`),b=(null!==(e=null==u?void 0:u.offsetLeft)&&void 0!==e?e:0)-(null!==(r=null===(i=O.current)||void 0===i?void 0:i.offsetLeft)&&void 0!==r?r:0);null===(o=O.current)||void 0===o||o.scrollTo({left:b,behavior:"smooth"})}),t.delayMs)}))})()}),[]);return Object(n.h)((()=>o?Object(n.h)("div",{style:{textAlign:"center"}},Object(n.h)("span",null,Object(n.h)(i.c,{id:"text.loading"},"Loading..."))):void 0===e||0===e.length?Object(n.h)("div",{style:{textAlign:"center"}},Object(n.h)("span",null,Object(n.h)(i.c,{id:"text.noData"},"No Data"))):Object(n.h)("div",{ref:O,class:d},Object(n.h)(s.a,{divPrefix:t.divPrefix,data:e,now:t.now}))),null)},f=r("shcR"),h=r("NF43"),p=(r("GFNa"),r("MJ1U")),j=r("Wcfx"),y="tableGrid__Ju0u9",v="tableItem__iikA+",g="streamingSection__unwHH";e.default=t=>{"undefined"!=typeof window&&(document.title=`${t.dictionary.header.title}`);return Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,Object(n.h)(i.c,{id:"header.title"},"Taiwan VTuber Data"),Object(p.a)()),Object(n.h)((()=>{const t=new Date;return Object(n.h)("div",{class:g},Object(n.h)("div",null,Object(n.h)("h3",null,Object(n.h)("a",{href:Object(j.b)({type:"livestreams"})},Object(n.h)(i.c,{id:"header.debutToday"},"Debut Today"))),Object(n.h)(O,{divPrefix:"debut",delayMs:200,modifier:"debut-no-title",now:t})),Object(n.h)("div",null,Object(n.h)("h3",null,Object(n.h)("a",{href:Object(j.b)({type:"livestreams"})},Object(n.h)(i.c,{id:"header.livestreaming"},"Streaming Now"))),Object(n.h)(O,{divPrefix:"all",delayMs:200,modifier:"all-no-title",now:t})))}),null),Object(n.h)("div",{class:y},Object(n.h)("div",{class:v},Object(n.h)(h.a,null)),Object(n.h)("div",{class:v},Object(n.h)(o.a,null)),Object(n.h)("div",{class:v},Object(n.h)(c.a,{dictionary:t.dictionary})),Object(n.h)("div",{class:v},Object(n.h)(f.a,null))))}},PzPG:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return i}));const n=(t,e)=>{var r,n,i,o;const c=(null!==(r=t.YouTubePopularity)&&void 0!==r?r:0)+(null!==(n=t.TwitchPopularity)&&void 0!==n?n:0),a=(null!==(i=e.YouTubePopularity)&&void 0!==i?i:0)+(null!==(o=e.TwitchPopularity)&&void 0!==o?o:0);return c>a?1:a>c?-1:0},i=(t,e)=>-1*n(t,e)},TToT:function(t,e){"use strict";e.a=[{when:t=>!0===t.debutInfo.hasDebutInfo&&t.debutInfo.isToday,style:{color:"mediumblue"}}]},U2b0:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("hosL"),i=r("OhSV");const o=()=>({name:Object(n.h)(i.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),selector:t=>t.YouTubeSubscriber.count})},YRVu:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("hosL"),i=r("OhSV");const o=()=>({name:Object(n.h)(i.c,{id:"table.debutDate"},"Debut Date"),selector:t=>t.debutInfo.debutDate})},enE3:function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return a}));var c=r("sPVG");const a=(t,e)=>{var r,n;return i(i({},Object(c.a)(t)),{},{YouTubePopularity:null===(r=t.YouTube)||void 0===r?void 0:r.popularity,TwitchPopularity:null===(n=t.Twitch)||void 0===n?void 0:n.popularity,ranking:e})}},oeP6:function(t,e,r){"use strict";var n=r("hosL"),i=r("8r9F"),o=r("CGiE"),c=r("wnwi"),a="verticalFlex__i3ZgG";e.a=t=>Object(n.h)("div",{id:`${t.divPrefix}-${t.id}`,class:a},Object(n.h)(o.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl,name:t.name}),Object(n.h)(c.a,{thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl}),Object(n.h)("div",null,Object(n.h)("span",null,Object(i.f)(t.startTime,t.now))))},paJy:function(t,e,r){"use strict";(function(t){function n(){return n=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a=r("drLk"),u=r("hosL"),l=r("OhSV"),b=r("QRet"),s=r("ENxA"),d=r("L9y4"),O=r("4BB4"),f=r("TToT"),h=r("69ZN"),p=r("sKFU"),j=r("HSXE"),y=r("LftB"),v=r("qM+f"),g=r("YRVu"),m=r("Wcfx");e.a=()=>{const e=[Object(g.a)(),Object(h.a)(),Object(j.a)(),o(o({},Object(p.a)()),{},{hide:s.a.SM})],[r,i]=Object(b.l)([]),[c,w]=Object(b.l)(!0);return Object(b.d)((()=>{(async()=>{await a.b("next-7-days").then((t=>{i(t.data.VTubers.map((t=>t)).sort(((t,e)=>t.debutDate.localeCompare(e.debutDate))).map((t=>Object(v.a)(t)))),w(!1)}))})()}),[]),Object(u.h)(t,null,Object(u.h)("h3",null,Object(u.h)("a",{href:Object(m.b)({type:"debut-vtubers"})},Object(u.h)(l.c,{id:"header.debutVTubersIn7Days"},"VTubers Debut in 7 days"))),Object(u.h)(s.b,n({},y.a,{columns:e,data:r,conditionalRowStyles:d.a.concat(f.a),customStyles:O.a,progressPending:c,progressComponent:Object(u.h)(l.c,{id:"text.loading"},"Loading...")})))}}).call(this,r("hosL").Fragment)},pmH6:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));const n=()=>({name:"#",selector:t=>t.ranking,wrap:!1})},"qM+f":function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return u}));var c=r("sPVG"),a=r("49Dv");const u=t=>i(i({},Object(c.a)(t)),{},{debutInfo:Object(a.a)(t.debutDate)})},qO1o:function(t,e,r){"use strict";var n=r("hosL"),i="tooltip__vtGmz",o="tooltipText__pA-zc";e.a=t=>Object(n.h)("div",{class:i},t.children,Object(n.h)("span",{class:o,style:{width:t.width,fontSize:t.fontSize}},t.text))},sKFU:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("hosL"),i=r("OhSV"),o=r("0yJK");const c=()=>({name:Object(n.h)(i.c,{id:"table.popularVideo"},"Popular Video"),cell:t=>void 0!==t.popularVideo?Object(n.h)(o.a,{popularVideo:t.popularVideo}):null})},sPVG:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("49Dv");const i=t=>{var e,r,i,o;return{id:t.id,activity:t.activity,name:t.name,imgUrl:t.imgUrl,YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,YouTubeSubscriber:null===(r=t.YouTube)||void 0===r?void 0:r.subscriber,TwitchId:null===(i=t.Twitch)||void 0===i?void 0:i.id,TwitchFollower:null===(o=t.Twitch)||void 0===o?void 0:o.follower,popularVideo:t.popularVideo,group:t.group,nationality:t.nationality,debutInfo:Object(n.b)(t.debutDate)}}},shcR:function(t,e,r){"use strict";(function(t){function n(){return n=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}var i=r("drLk"),o=r("hosL"),c=r("OhSV"),a=r("QRet"),u=r("ENxA"),l=r("L9y4"),b=r("4BB4"),s=r("69ZN"),d=r("sKFU"),O=r("HSXE"),f=r("LftB"),h=r("sPVG"),p=r("Wcfx");e.a=()=>{const e=[Object(s.a)(),Object(O.a)(),Object(d.a)()],[r,j]=Object(a.l)([]),[y,v]=Object(a.l)(!0);return Object(a.d)((()=>{(async()=>{await i.l("10").then((t=>{j(t.data.VTubers.map((t=>Object(h.a)(t)))),v(!1)}))})()}),[]),Object(o.h)(t,null,Object(o.h)("h3",null,Object(o.h)("a",{href:Object(p.b)({type:"all-vtubers"})},Object(o.h)(c.c,{id:"header.YouTubeSubPlusTwitchFollowers"},"YouTube Subscribers + Twitch Followers"),Object(o.h)(t,null," "),Object(o.h)(c.c,{id:"header.top10"},"Top 10"))),Object(o.h)(u.b,n({},f.a,{columns:e,data:r,conditionalRowStyles:l.a,customStyles:b.a,progressComponent:Object(o.h)(c.c,{id:"text.loading"},"Loading..."),progressPending:y})))}}).call(this,r("hosL").Fragment)},v6a3:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));const n=(t,e)=>({id:e,VTuberId:t.id,name:t.name,imgUrl:t.imgUrl,title:t.title,thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl,startTime:new Date(t.startTime)})},y7vS:function(t,e,r){"use strict";var n=r("hosL"),i=r("qO1o"),o="questionMark__RT3wD";e.a=t=>Object(n.h)(i.a,{text:t.text,width:t.width,fontSize:t.fontSize},Object(n.h)("img",{class:o}))}}]);
//# sourceMappingURL=route-home.chunk.51014.esm.js.map