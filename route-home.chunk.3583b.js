(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"0kGK":function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return a}));var i=n("sPVG"),u=function(t,e){return o(o({},t),{},{percentage:void 0!==e&&0!==e?t.diff/e:0})},a=function(t){return o(o({},Object(i.a)(t)),{},{YouTubeSubscriber:t.YouTube.subscriber,_7DaysGrowth:u(t.YouTube._7DaysGrowth,t.YouTube.subscriber.count),_30DaysGrowth:u(t.YouTube._30DaysGrowth,t.YouTube.subscriber.count)})}},"49Dv":function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return i}));var r=n("5Sdp"),o=n("8r9F"),c=function(t){return null==t?{hasDebutInfo:!1}:i(t)},i=function(t){return{hasDebutInfo:!0,debutDate:t,isToday:t===r.c,isRecentlyDebut:Object(o.a)(Object(o.b)(t,r.a),r.b)<30}}},"4BB4":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}}},"5Sdp":function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u}));var r=n("8r9F"),o=n("Dy4S"),c=Object(o.b)(void 0,8),i=Object(r.d)(new Date,c),u=Object(r.g)(i,c)},"69ZN":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("hosL"),o=n("OhSV"),c=n("CGiE"),i=function(){return{name:Object(r.h)(o.c,{id:"table.displayName"},"Name"),cell:function(t){return Object(r.h)(c.a,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name})}}}},"6i5z":function(t,e,n){"use strict";(function(t){function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e,n,r,o,c,i){try{var u=t[c](i),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,c=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(c.push(r.value),!e||c.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=n("drLk"),s=n("hosL"),f=n("OhSV"),h=n("QRet"),d=n("ENxA"),O=n("L9y4"),p=n("4BB4"),y=n("69ZN"),j=n("sKFU"),v=n("U2b0"),m=n("76Fs"),g=n("LftB"),w=n("0kGK"),T=n("y7vS"),P=n("Wcfx");e.a=function(e){var n=[Object(y.a)(),Object(v.a)(),Object(m.a)(e.dictionary.table),a(a({},Object(j.a)()),{},{hide:d.a.SM})],i=c(Object(h.l)([]),2),u=i[0],l=i[1],S=c(Object(h.l)(!0),2),D=S[0],x=S[1],L=function(){var t,e=(t=function*(){yield b.f("10").then((function(t){l(t.data.VTubers.map((function(t){return t})).map((function(t){return Object(w.a)(t)})).sort((function(t,e){return e._7DaysGrowth.percentage-t._7DaysGrowth.percentage}))),x(!1)}))},function(){var e=this,n=arguments;return new Promise((function(r,c){function i(t){o(a,r,c,i,u,"next",t)}function u(t){o(a,r,c,i,u,"throw",t)}var a=t.apply(e,n);i(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(h.d)((function(){L()}),[]),Object(s.h)(t,null,Object(s.h)("h3",null,Object(s.h)("a",{href:Object(P.b)({type:"growing-vtubers"})},Object(s.h)(f.c,{id:"header.growingVTubers"},"Growing VTubers"),Object(s.h)(t,null," "),Object(s.h)(f.c,{id:"header.top10"},"Top 10")),Object(s.h)(T.a,{width:"300px",fontSize:"13px",text:Object(s.h)(f.c,{id:"toolTip.growingVTubers"},"tooltip text")})),Object(s.h)(d.b,r({},g.a,{columns:n,data:u,conditionalRowStyles:O.a,customStyles:p.a,progressComponent:Object(s.h)(f.c,{id:"text.loading"},"Loading..."),progressPending:D})))}}).call(this,n("hosL").Fragment)},"76Fs":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("hosL"),o=n("OhSV"),c=n("Dy4S"),i=function(t){return{name:Object(r.h)(o.c,{id:"table._7DaysGrowth"},"7 Days Growth (Percent)"),cell:function(e){return Object(c.a)(e._7DaysGrowth,t)}}}},"7DLW":function(t,e,n){"use strict";var r=n("hosL"),o=n("WbG0"),c="noWrap__BzT1O",i="YouTubeRed__1JOkf",u="TwitchPurple__qQQlw";e.a=function(t){var e=function(t){return Object(r.h)("span",{class:"".concat(c," ").concat(i)},Object(r.h)(o.a,{countType:t}))},n=function(t){return Object(r.h)("span",{class:"".concat(c," ").concat(u)},Object(r.h)(o.a,{countType:t}))};return Object(r.h)(r.Fragment,null,Object(r.h)((function(t){return t.YouTubeCount&&t.TwitchCount?Object(r.h)(r.Fragment,null,e(t.YouTubeCount),Object(r.h)("span",{class:c}," + "),n(t.TwitchCount)):t.YouTubeCount?Object(r.h)(r.Fragment,null,e(t.YouTubeCount)):t.TwitchCount?Object(r.h)(r.Fragment,null,n(t.TwitchCount)):null}),t))}},CGiE:function(t,e,n){"use strict";var r=n("hosL"),o=n("+Ox3"),c="container__vr1DG",i="profileImageFlex__4VERG",u="nameFlex__WFOO9";e.a=function(t){return Object(r.h)("div",{class:c},Object(r.h)("div",{class:i},Object(r.h)(o.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl,clickBehavior:"popup"})),Object(r.h)("span",{class:u},t.name))}},Dy4S:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return i}));var r=function(t){return t>0?"+".concat(t):t<0?"".concat(t):"0"},o=function(t){return(100*t).toFixed(2)},c=function(t,e){if(t.percentage)switch(t.recordType){case"none":return e.noRecord;case"partial":return"".concat(e.atLeast," ").concat(r(t.diff)," (").concat(o(t.percentage),"%)");case"full":return"".concat(r(t.diff)," (").concat(o(t.percentage),"%)")}switch(t.recordType){case"none":return e.noRecord;case"partial":return"".concat(e.atLeast," ").concat(r(t.diff));case"full":return"".concat(r(t.diff))}},i=function(t,e){if(void 0!==t){var n=parseInt(t,10);if(!1===isNaN(n))return n}return e}},GHZf:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("hosL"),o=n("OhSV"),c=n("7DLW"),i=function(t){if(t)return{tag:"has",count:t}},u=function(){return{name:Object(r.h)(o.c,{id:"table.popularity"},"Popularity"),cell:function(t){return Object(r.h)(c.a,{YouTubeCount:i(t.YouTubePopularity),TwitchCount:i(t.TwitchPopularity)})}}}},HSXE:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("hosL"),o=n("OhSV"),c=n("7DLW"),i=function(){return{name:Object(r.h)(o.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),cell:function(t){return Object(r.h)(c.a,{YouTubeCount:t.YouTubeSubscriber,TwitchCount:t.TwitchFollower})}}}},L9y4:function(t,e){"use strict";e.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:function(t){return"active"===t.activity&&void 0!==t.debutInfo&&!0===t.debutInfo.hasDebutInfo&&!0===t.debutInfo.isRecentlyDebut},style:{backgroundColor:"rgba(156, 205, 196, 0.5)","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LUqa:function(t,e,n){"use strict";(function(t){var r=n("hosL"),o=n("oeP6");e.a=function(e){return Object(r.h)(t,null,e.data.map((function(t,n){return Object(r.h)(o.a,{divPrefix:e.divPrefix,id:n,key:n,VTuberId:t.VTuberId,imgUrl:t.imgUrl,name:t.name,thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl,startTime:t.startTime,now:e.now})})))}}).call(this,n("hosL").Fragment)},LftB:function(t,e,n){"use strict";var r=n("L9y4");e.a=function(){return{columns:[],data:[],conditionalRowStyles:r.a}}},MJ1U:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return i}));var r=n("hosL"),o=n("OhSV"),c=n("GKGp"),i=function(){var e=Object(c.a)();switch(e){case"TW":case"HK":case"MY":return Object(r.h)(t,null," ","(",Object(r.h)(o.c,{id:"text.onlyShowing"},"only showing "),Object(r.h)(o.c,{id:"nationalityTitle.".concat(e)},"placeholder")," ","VTuber)");default:return null}}}).call(this,n("hosL").Fragment)},NF43:function(t,e,n){"use strict";(function(t){function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e,n,r,o,c,i){try{var u=t[c](i),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,c=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(c.push(r.value),!e||c.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=n("drLk"),s=n("hosL"),f=n("OhSV"),h=n("QRet"),d=n("ENxA"),O=n("4BB4"),p=n("69ZN"),y=n("GHZf"),j=n("HSXE"),v=n("LftB"),m=n("PzPG"),g=n("enE3"),w=n("y7vS"),T=n("sKFU"),P=n("pmH6"),S=n("L9y4"),D=n("Wcfx");e.a=function(){var e=[a(a({},Object(P.a)()),{},{width:"30px"}),Object(p.a)(),Object(y.a)(),Object(j.a)(),a(a({},Object(T.a)()),{},{hide:d.a.SM})],n=c(Object(h.l)([]),2),i=n[0],u=n[1],l=c(Object(h.l)(!0),2),x=l[0],L=l[1],V=function(){var t,e=(t=function*(){yield b.h("10").then((function(t){u(t.data.VTubers.map((function(t){return t})).map((function(t,e){return Object(g.a)(t,e+1)})).sort(m.b).map((function(t,e){return a(a({},t),{},{ranking:e+1})}))),L(!1)}))},function(){var e=this,n=arguments;return new Promise((function(r,c){function i(t){o(a,r,c,i,u,"next",t)}function u(t){o(a,r,c,i,u,"throw",t)}var a=t.apply(e,n);i(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(h.d)((function(){V()}),[]),Object(s.h)(t,null,Object(s.h)("h3",null,Object(s.h)("a",{href:Object(D.b)({type:"trending-vtubers"})},Object(s.h)(f.c,{id:"header.trendingVTubers"},"Trending VTubers"),Object(s.h)(t,null," "),Object(s.h)(f.c,{id:"header.top10"},"Top 10")),Object(s.h)(w.a,{width:"300px",fontSize:"13px",text:Object(s.h)(f.c,{id:"toolTip.trendingVTubers"},"tooltip text")})),Object(s.h)(d.b,r({},v.a,{columns:e,data:i,conditionalRowStyles:S.a,customStyles:O.a,progressComponent:Object(s.h)(f.c,{id:"text.loading"},"Loading..."),progressPending:x})))}}).call(this,n("hosL").Fragment)},OPsQ:function(t,e,n){"use strict";function r(t,e,n,r,o,c,i){try{var u=t[c](i),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,c=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(c.push(r.value),!e||c.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.r(e);var i=n("hosL"),u=n("OhSV"),a=n("paJy"),l=n("6i5z"),b=n("drLk"),s=n("QRet"),f=n("8r9F"),h=n("v6a3"),d=n("LUqa"),O="horizontalFlex__qr4MR",p=function(t){var e=o(Object(s.l)(),2),n=e[0],c=e[1],a=o(Object(s.l)(!0),2),l=a[0],p=a[1],y=Object(s.k)(null),j=function(){var e,n=(e=function*(){yield b.g(t.modifier).then((function(e){var n=e.data.livestreams.map((function(t){return t})).map((function(t,e){return Object(h.a)(t,e)})).sort((function(t,e){return t.startTime.getTime()-e.startTime.getTime()}));c(n),p(!1),setTimeout((function(){var e,r,o,c,i=new Date(t.now);i.setHours(i.getHours()-1);var u=Object(f.c)(n,i),a=document.getElementById("".concat(t.divPrefix,"-").concat(Math.min(n.length-1,u))),l=(null!==(e=null==a?void 0:a.offsetLeft)&&void 0!==e?e:0)-(null!==(r=null===(o=y.current)||void 0===o?void 0:o.offsetLeft)&&void 0!==r?r:0);null===(c=y.current)||void 0===c||c.scrollTo({left:l,behavior:"smooth"})}),t.delayMs)}))},function(){var t=this,n=arguments;return new Promise((function(o,c){function i(t){r(a,o,c,i,u,"next",t)}function u(t){r(a,o,c,i,u,"throw",t)}var a=e.apply(t,n);i(void 0)}))});return function(){return n.apply(this,arguments)}}();Object(s.d)((function(){j()}),[]);return Object(i.h)((function(){return l?Object(i.h)("div",{style:{textAlign:"center"}},Object(i.h)("span",null,Object(i.h)(u.c,{id:"text.loading"},"Loading..."))):void 0===n||0===n.length?Object(i.h)("div",{style:{textAlign:"center"}},Object(i.h)("span",null,Object(i.h)(u.c,{id:"text.noData"},"No Data"))):Object(i.h)("div",{ref:y,class:O},Object(i.h)(d.a,{divPrefix:t.divPrefix,data:n,now:t.now}))}),null)},y=n("shcR"),j=n("NF43"),v=(n("GFNa"),n("MJ1U")),m=n("Wcfx"),g="tableGrid__Ju0u9",w="tableItem__iikA+",T="streamingSection__unwHH";e.default=function(t){"undefined"!=typeof window&&(document.title="".concat(t.dictionary.header.title));return Object(i.h)(i.Fragment,null,Object(i.h)("h1",null,Object(i.h)(u.c,{id:"header.title"},"Taiwan VTuber Data"),Object(v.a)()),Object(i.h)((function(){var t=new Date;return Object(i.h)("div",{class:T},Object(i.h)("div",null,Object(i.h)("h3",null,Object(i.h)("a",{href:Object(m.b)({type:"livestreams"})},Object(i.h)(u.c,{id:"header.debutToday"},"Debut Today"))),Object(i.h)(p,{divPrefix:"debut",delayMs:200,modifier:"debut-no-title",now:t})),Object(i.h)("div",null,Object(i.h)("h3",null,Object(i.h)("a",{href:Object(m.b)({type:"livestreams"})},Object(i.h)(u.c,{id:"header.livestreaming"},"Streaming Now"))),Object(i.h)(p,{divPrefix:"all",delayMs:200,modifier:"all-no-title",now:t})))}),null),Object(i.h)("div",{class:g},Object(i.h)("div",{class:w},Object(i.h)(j.a,null)),Object(i.h)("div",{class:w},Object(i.h)(a.a,null)),Object(i.h)("div",{class:w},Object(i.h)(l.a,{dictionary:t.dictionary})),Object(i.h)("div",{class:w},Object(i.h)(y.a,null))))}},PzPG:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(t,e){var n,r,o,c,i=(null!==(n=t.YouTubePopularity)&&void 0!==n?n:0)+(null!==(r=t.TwitchPopularity)&&void 0!==r?r:0),u=(null!==(o=e.YouTubePopularity)&&void 0!==o?o:0)+(null!==(c=e.TwitchPopularity)&&void 0!==c?c:0);return i>u?1:u>i?-1:0},o=function(t,e){return-1*r(t,e)}},TToT:function(t,e){"use strict";e.a=[{when:function(t){return!0===t.debutInfo.hasDebutInfo&&t.debutInfo.isToday},style:{color:"mediumblue"}}]},U2b0:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("hosL"),o=n("OhSV"),c=function(){return{name:Object(r.h)(o.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),selector:function(t){return t.YouTubeSubscriber.count}}}},YRVu:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("hosL"),o=n("OhSV"),c=function(){return{name:Object(r.h)(o.c,{id:"table.debutDate"},"Debut Date"),selector:function(t){return t.debutInfo.debutDate}}}},enE3:function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return u}));var i=n("sPVG"),u=function(t,e){var n,r;return o(o({},Object(i.a)(t)),{},{YouTubePopularity:null===(n=t.YouTube)||void 0===n?void 0:n.popularity,TwitchPopularity:null===(r=t.Twitch)||void 0===r?void 0:r.popularity,ranking:e})}},oeP6:function(t,e,n){"use strict";var r=n("hosL"),o=n("8r9F"),c=n("CGiE"),i=n("wnwi"),u="verticalFlex__i3ZgG";e.a=function(t){return Object(r.h)("div",{id:"".concat(t.divPrefix,"-").concat(t.id),class:u},Object(r.h)(c.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl,name:t.name}),Object(r.h)(i.a,{thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl}),Object(r.h)("div",null,Object(r.h)("span",null,Object(o.f)(t.startTime,t.now))))}},paJy:function(t,e,n){"use strict";(function(t){function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e,n,r,o,c,i){try{var u=t[c](i),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,c=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(c.push(r.value),!e||c.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=n("drLk"),s=n("hosL"),f=n("OhSV"),h=n("QRet"),d=n("ENxA"),O=n("L9y4"),p=n("4BB4"),y=n("TToT"),j=n("69ZN"),v=n("sKFU"),m=n("HSXE"),g=n("LftB"),w=n("qM+f"),T=n("YRVu"),P=n("Wcfx");e.a=function(){var e=[Object(T.a)(),Object(j.a)(),Object(m.a)(),a(a({},Object(v.a)()),{},{hide:d.a.SM})],n=c(Object(h.l)([]),2),i=n[0],u=n[1],l=c(Object(h.l)(!0),2),S=l[0],D=l[1],x=function(){var t,e=(t=function*(){yield b.b("next-7-days").then((function(t){u(t.data.VTubers.map((function(t){return t})).sort((function(t,e){return t.debutDate.localeCompare(e.debutDate)})).map((function(t){return Object(w.a)(t)}))),D(!1)}))},function(){var e=this,n=arguments;return new Promise((function(r,c){function i(t){o(a,r,c,i,u,"next",t)}function u(t){o(a,r,c,i,u,"throw",t)}var a=t.apply(e,n);i(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(h.d)((function(){x()}),[]),Object(s.h)(t,null,Object(s.h)("h3",null,Object(s.h)("a",{href:Object(P.b)({type:"debut-vtubers"})},Object(s.h)(f.c,{id:"header.debutVTubersIn7Days"},"VTubers Debut in 7 days"))),Object(s.h)(d.b,r({},g.a,{columns:e,data:i,conditionalRowStyles:O.a.concat(y.a),customStyles:p.a,progressPending:S,progressComponent:Object(s.h)(f.c,{id:"text.loading"},"Loading...")})))}}).call(this,n("hosL").Fragment)},pmH6:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){return{name:"#",selector:function(t){return t.ranking},wrap:!1}}},"qM+f":function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return a}));var i=n("sPVG"),u=n("49Dv"),a=function(t){return o(o({},Object(i.a)(t)),{},{debutInfo:Object(u.a)(t.debutDate)})}},qO1o:function(t,e,n){"use strict";var r=n("hosL"),o="tooltip__vtGmz",c="tooltipText__pA-zc";e.a=function(t){return Object(r.h)("div",{class:o},t.children,Object(r.h)("span",{class:c,style:{width:t.width,fontSize:t.fontSize}},t.text))}},sKFU:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("hosL"),o=n("OhSV"),c=n("0yJK"),i=function(){return{name:Object(r.h)(o.c,{id:"table.popularVideo"},"Popular Video"),cell:function(t){return void 0!==t.popularVideo?Object(r.h)(c.a,{popularVideo:t.popularVideo}):null}}}},sPVG:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("49Dv"),o=function(t){var e,n,o,c;return{id:t.id,activity:t.activity,name:t.name,imgUrl:t.imgUrl,YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,YouTubeSubscriber:null===(n=t.YouTube)||void 0===n?void 0:n.subscriber,TwitchId:null===(o=t.Twitch)||void 0===o?void 0:o.id,TwitchFollower:null===(c=t.Twitch)||void 0===c?void 0:c.follower,popularVideo:t.popularVideo,group:t.group,nationality:t.nationality,debutInfo:Object(r.b)(t.debutDate)}}},shcR:function(t,e,n){"use strict";(function(t){function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e,n,r,o,c,i){try{var u=t[c](i),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,c=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(c.push(r.value),!e||c.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var u=n("drLk"),a=n("hosL"),l=n("OhSV"),b=n("QRet"),s=n("ENxA"),f=n("L9y4"),h=n("4BB4"),d=n("69ZN"),O=n("sKFU"),p=n("HSXE"),y=n("LftB"),j=n("sPVG"),v=n("Wcfx");e.a=function(){var e=[Object(d.a)(),Object(p.a)(),Object(O.a)()],n=c(Object(b.l)([]),2),i=n[0],m=n[1],g=c(Object(b.l)(!0),2),w=g[0],T=g[1],P=function(){var t,e=(t=function*(){yield u.l("10").then((function(t){m(t.data.VTubers.map((function(t){return Object(j.a)(t)}))),T(!1)}))},function(){var e=this,n=arguments;return new Promise((function(r,c){function i(t){o(a,r,c,i,u,"next",t)}function u(t){o(a,r,c,i,u,"throw",t)}var a=t.apply(e,n);i(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(b.d)((function(){P()}),[]),Object(a.h)(t,null,Object(a.h)("h3",null,Object(a.h)("a",{href:Object(v.b)({type:"all-vtubers"})},Object(a.h)(l.c,{id:"header.YouTubeSubPlusTwitchFollowers"},"YouTube Subscribers + Twitch Followers"),Object(a.h)(t,null," "),Object(a.h)(l.c,{id:"header.top10"},"Top 10"))),Object(a.h)(s.b,r({},y.a,{columns:e,data:i,conditionalRowStyles:f.a,customStyles:h.a,progressComponent:Object(a.h)(l.c,{id:"text.loading"},"Loading..."),progressPending:w})))}}).call(this,n("hosL").Fragment)},v6a3:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t,e){return{id:e,VTuberId:t.id,name:t.name,imgUrl:t.imgUrl,title:t.title,thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl,startTime:new Date(t.startTime)}}},y7vS:function(t,e,n){"use strict";var r=n("hosL"),o=n("qO1o"),c="questionMark__RT3wD";e.a=function(t){return Object(r.h)(o.a,{text:t.text,width:t.width,fontSize:t.fontSize},Object(r.h)("img",{class:c}))}}}]);
//# sourceMappingURL=route-home.chunk.3583b.js.map