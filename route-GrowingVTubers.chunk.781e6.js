(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0kGK":function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return a}));var i=n("sPVG"),u=function(t,e){return o(o({},t),{},{percentage:void 0!==e&&0!==e?t.diff/e:0})},a=function(t){return o(o({},Object(i.a)(t)),{},{YouTubeSubscriber:t.YouTube.subscriber,_7DaysGrowth:u(t.YouTube._7DaysGrowth,t.YouTube.subscriber.count),_30DaysGrowth:u(t.YouTube._30DaysGrowth,t.YouTube.subscriber.count)})}},"4BB4":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}}},"69ZN":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("hosL"),o=n("OhSV"),c=n("CGiE"),i=function(){return{name:Object(r.h)(o.c,{id:"table.displayName"},"Name"),cell:function(t){return Object(r.h)(c.a,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name})}}}},"76Fs":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("hosL"),o=n("OhSV"),c=n("Dy4S"),i=function(t){return{name:Object(r.h)(o.c,{id:"table._7DaysGrowth"},"7 Days Growth (Percent)"),cell:function(e){return Object(c.a)(e._7DaysGrowth,t)}}}},"7Asn":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("hosL"),o=n("OhSV"),c=n("Wcfx"),i=function(){return{name:Object(r.h)(o.c,{id:"table.group"},"Group"),cell:function(t){return void 0!==t.group?Object(r.h)("a",{href:Object(c.b)({type:"group",name:t.group})},t.group):null}}}},A0ue:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("hosL"),o=n("OhSV"),c=n("Dy4S"),i=function(t){return{name:Object(r.h)(o.c,{id:"table._30DaysGrowth"},"30 Days Growth (Percent)"),cell:function(e){return Object(c.a)(e._30DaysGrowth,t)}}}},CGiE:function(t,e,n){"use strict";var r=n("hosL"),o=n("+Ox3"),c="container__vr1DG",i="profileImageFlex__4VERG",u="nameFlex__WFOO9";e.a=function(t){return Object(r.h)("div",{class:c},Object(r.h)("div",{class:i},Object(r.h)(o.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl,clickBehavior:"popup"})),Object(r.h)("span",{class:u},t.name))}},Dy4S:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=function(t){return t>0?"+".concat(t):t<0?"".concat(t):"0"},o=function(t){return(100*t).toFixed(2)},c=function(t,e){if(t.percentage)switch(t.recordType){case"none":return e.noRecord;case"partial":return"".concat(e.atLeast," ").concat(r(t.diff)," (").concat(o(t.percentage),"%)");case"full":return"".concat(r(t.diff)," (").concat(o(t.percentage),"%)")}switch(t.recordType){case"none":return e.noRecord;case"partial":return"".concat(e.atLeast," ").concat(r(t.diff));case"full":return"".concat(r(t.diff))}}},It6v:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));var r=function(t,e){var n=t._7DaysGrowth.percentage,r=e._7DaysGrowth.percentage;return n>r?1:r>n?-1:0},o=function(t,e){var n=t._30DaysGrowth.percentage,r=e._30DaysGrowth.percentage;return n>r?1:r>n?-1:0}},"JY+X":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("hosL"),o=n("OhSV"),c=function(){return{name:Object(r.h)(o.c,{id:"table.nationality"},"Nationality"),selector:function(t){var e;return null!==(e=t.nationality)&&void 0!==e?e:""}}}},L9Wd:function(t,e,n){"use strict";var r=n("hosL"),o="container__1lsi6",c="textField__bDpXR",i="button__maFzS";e.a=function(t){return Object(r.h)("div",{class:o},Object(r.h)("input",{type:"text",class:c,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(r.h)("button",{type:"button",class:i,onClick:t.onClear},"X"))}},L9y4:function(t,e){"use strict";e.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,n){"use strict";var r=n("L9y4");e.a=function(){return{columns:[],data:[],conditionalRowStyles:r.a}}},MJ1U:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return i}));var r=n("hosL"),o=n("OhSV"),c=n("GKGp"),i=function(){var e=Object(c.a)();switch(e){case"TW":case"HK":case"MY":return Object(r.h)(t,null," ","(",Object(r.h)(o.c,{id:"text.onlyShowing"},"only showing "),Object(r.h)(o.c,{id:"nationalityTitle.".concat(e)},"placeholder")," ","VTuber)");default:return null}}}).call(this,n("hosL").Fragment)},U2b0:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("hosL"),o=n("OhSV"),c=function(){return{name:Object(r.h)(o.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),selector:function(t){return t.YouTubeSubscriber.count}}}},UBrP:function(t,e,n){"use strict";n.r(e),function(t){function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e,n,r,o,c,i){try{var u=t[c](i),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,c=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(c.push(r.value),!e||c.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=n("drLk"),f=n("hosL"),b=n("OhSV"),d=n("QRet"),h=n("ENxA"),p=n("y7vS"),O=n("L9Wd"),y=n("4BB4"),v=n("7Asn"),g=n("69ZN"),j=n("JY+X"),w=n("sKFU"),m=n("U2b0"),T=n("A0ue"),S=n("76Fs"),x=n("LftB"),G=n("MJ1U"),L=n("0kGK"),_=n("uZiY"),D=n("It6v"),V=n("L9y4");e.default=function(e){document.title="".concat(e.dictionary.header.growingVTubers," | ").concat(e.dictionary.header.title);var n=[a(a({},Object(g.a)()),{},{width:"200px"}),a(a({},Object(m.a)()),{},{sortable:!0}),a(a({},Object(S.a)(e.dictionary.table)),{},{right:!0,sortable:!0,sortFunction:D.b}),a(a({},Object(T.a)(e.dictionary.table)),{},{right:!0,sortable:!0,sortFunction:D.a}),a(a({},Object(w.a)()),{},{width:"100px"}),a(a({},Object(v.a)()),{},{width:"100px"}),a(a({},Object(j.a)()),{},{width:"100px"})],i=c(Object(d.k)([]),2),u=i[0],s=i[1],P=c(Object(d.k)(""),2),C=P[0],F=P[1],Y=c(Object(d.k)(""),2),k=Y[0],U=Y[1],B=c(Object(d.k)(!1),2),A=B[0],I=B[1],R=u.filter((function(t){return t.name&&t.name.toLowerCase().includes(C.toLowerCase())})).filter((function(t){return""===k||void 0!==t.group&&t.group.toLowerCase().includes(k.toLowerCase())})),z=Object(d.h)((function(){return Object(f.h)("div",{class:_.a.searchBarGroup},Object(f.h)(O.a,{placeholderText:e.dictionary.table.searchByDisplayName,onFilter:function(t){return F(t.target.value)},onClear:function(){C&&(I(!A),F(""))},filterText:C}),Object(f.h)(O.a,{placeholderText:e.dictionary.table.searchByGroup,onFilter:function(t){return U(t.target.value)},onClear:function(){k&&(I(!A),U(""))},filterText:k}))}),[C,k,A,e.dictionary]),E=c(Object(d.k)(!0),2),J=E[0],K=E[1],N=function(){var t,e=(t=function*(){yield l.f("100").then((function(t){s(t.data.VTubers.map((function(t){return t})).map((function(t){return Object(L.a)(t)})).sort((function(t,e){return e._7DaysGrowth.percentage-t._7DaysGrowth.percentage}))),K(!1)}))},function(){var e=this,n=arguments;return new Promise((function(r,c){function i(t){o(a,r,c,i,u,"next",t)}function u(t){o(a,r,c,i,u,"throw",t)}var a=t.apply(e,n);i(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(d.d)((function(){N()}),[]),Object(f.h)(t,null,Object(f.h)("h1",null,Object(f.h)(b.c,{id:"header.growingVTubers"},"Growing VTubers"),Object(G.a)(),Object(f.h)(p.a,{width:"300px",fontSize:"13px",text:Object(f.h)(b.c,{id:"toolTip.growingVTubers"},"tooltip text")})),Object(f.h)(h.b,r({},x.a,{columns:n,data:R,conditionalRowStyles:V.a,customStyles:y.a,fixedHeader:!0,pagination:!0,paginationComponentOptions:e.dictionary.table.paginationOptions,progressComponent:Object(f.h)(b.c,{id:"text.loading"},"Loading..."),progressPending:J,subHeader:!0,subHeaderComponent:z})))}}.call(this,n("hosL").Fragment)},qO1o:function(t,e,n){"use strict";var r=n("hosL"),o="tooltip__vtGmz",c="tooltipText__pA-zc";e.a=function(t){return Object(r.h)("div",{class:o},t.children,Object(r.h)("span",{class:c,style:{width:t.width,fontSize:t.fontSize}},t.text))}},sKFU:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("hosL"),o=n("OhSV"),c=n("0yJK"),i=function(){return{name:Object(r.h)(o.c,{id:"table.popularVideo"},"Popular Video"),cell:function(t){return void 0!==t.popularVideo?Object(r.h)(c.a,{popularVideo:t.popularVideo}):null}}}},sPVG:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){var e,n,r,o;return{id:t.id,activity:t.activity,name:t.name,imgUrl:t.imgUrl,YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,YouTubeSubscriber:null===(n=t.YouTube)||void 0===n?void 0:n.subscriber,TwitchId:null===(r=t.Twitch)||void 0===r?void 0:r.id,TwitchFollower:null===(o=t.Twitch)||void 0===o?void 0:o.follower,popularVideo:t.popularVideo,group:t.group,nationality:t.nationality}}},uZiY:function(t,e){"use strict";e.a={searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},y7vS:function(t,e,n){"use strict";var r=n("hosL"),o=n("qO1o"),c="questionMark__RT3wD";e.a=function(t){return Object(r.h)(o.a,{text:t.text,width:t.width,fontSize:t.fontSize},Object(r.h)("img",{class:c}))}}}]);
//# sourceMappingURL=route-GrowingVTubers.chunk.781e6.js.map