(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+Ox3":function(t,e,n){"use strict";var r=n("hosL"),o=n("jUMG"),i="fixedSize__iw3af",c="profileImg__DvgtD";e.a=function(t){var e,n,a;return Object(r.h)("a",{href:"".concat(o.a,"/vtuber/").concat(t.id)},Object(r.h)("img",{class:"".concat(t.size?i:c),src:null!==(e=t.imgUrl)&&void 0!==e?e:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy",width:null!==(n=t.size)&&void 0!==n?n:void 0,height:null!==(a=t.size)&&void 0!==a?a:void 0}))}},Dy4S:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=function(t){return t>0?"+".concat(t):t<0?"".concat(t):"0"},o=function(t){return(100*t).toFixed(2)},i=function(t,e){if(t.percentage)switch(t.recordType){case"none":return e.noRecord;case"partial":return"".concat(e.atLeast," ").concat(r(t.diff)," (").concat(o(t.percentage),"%)");case"full":return"".concat(r(t.diff)," (").concat(o(t.percentage),"%)")}switch(t.recordType){case"none":return e.noRecord;case"partial":return"".concat(e.atLeast," ").concat(r(t.diff));case"full":return"".concat(r(t.diff))}}},L9Wd:function(t,e,n){"use strict";var r=n("hosL"),o="container__1lsi6",i="textField__bDpXR",c="button__maFzS";e.a=function(t){return Object(r.h)("div",{class:o},Object(r.h)("input",{type:"text",class:i,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(r.h)("button",{type:"button",class:c,onClick:t.onClear},"X"))}},L9y4:function(t,e){"use strict";e.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,n){"use strict";var r=n("L9y4");e.a=function(){return{columns:[],data:[],conditionalRowStyles:r.a}}},UBrP:function(t,e,n){"use strict";function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,o)}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],c=!0,a=!1;try{for(n=n.call(t);!(c=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);c=!0);}catch(t){a=!0,o=t}finally{try{c||null==n.return||n.return()}finally{if(a)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.r(e);var s=n("hosL"),b=n("QRet"),d=n("OhSV"),h=n("ENxA"),f=n("jUMG"),p=n("L9Wd"),y=n("drLk"),g=n("LftB"),v=(n("GFNa"),n("uZiY")),O=n("L9y4"),w=function(t,e){var n=t._7DaysGrowth.percentage,r=e._7DaysGrowth.percentage;return n>r?1:r>n?-1:0},j=function(t,e){var n=t._30DaysGrowth.percentage,r=e._30DaysGrowth.percentage;return n>r?1:r>n?-1:0},m=n("Dy4S"),_=n("y7vS"),x=n("Ud9u"),A=n("sviv");e.default=function(t){document.title="".concat(t.dictionary.header.growingVTubers," | ").concat(t.dictionary.header.title);var e=[{name:Object(s.h)(d.c,{id:"table.displayName"},"Name"),compact:!0,cell:function(t){return Object(s.h)(A.a,t)}},{name:Object(s.h)(d.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),selector:function(t){return t.YouTubeSubscriberCount},compact:!0,right:!0,sortable:!0},{name:Object(s.h)(d.c,{id:"table._7DaysGrowth"},"7 Days Growth (Percent)"),sortFunction:w,cell:function(e){return Object(m.a)(e._7DaysGrowth,t.dictionary.table)},compact:!0,right:!0,sortable:!0,width:"150px",maxWidth:"250px"},{name:Object(s.h)(d.c,{id:"table._30DaysGrowth"},"30 Days Growth (Percent)"),cell:function(e){return Object(m.a)(e._30DaysGrowth,t.dictionary.table)},sortFunction:j,compact:!0,right:!0,sortable:!0,width:"150px",maxWidth:"250px"},{name:Object(s.h)(d.c,{id:"table.popularVideo"},"Popular Video"),cell:function(e){return void 0!==e.popularVideo?Object(s.h)("input",{type:"button",value:t.dictionary.text.showVideo,onClick:function(){return Object(x.a)(e.popularVideo)}}):null},width:"100px"},{name:Object(s.h)(d.c,{id:"table.group"},"Group"),cell:function(t){return""!==t.group?Object(s.h)("a",{class:v.a.groupLink,href:"".concat(f.a,"/group/").concat(t.group)},t.group):null},compact:!0,maxWidth:"100px"},{name:Object(s.h)(d.c,{id:"table.nationality"},"Nationality"),selector:function(t){var e;return null!==(e=t.nationality)&&void 0!==e?e:""},compact:!0,minWidth:"25px",maxWidth:"100px"}],n=u(Object(b.k)([]),2),i=n[0],a=n[1],l=u(Object(b.k)(""),2),T=l[0],D=l[1],G=u(Object(b.k)(""),2),L=G[0],S=G[1],C=u(Object(b.k)(!1),2),P=C[0],k=C[1],V=i.filter((function(t){return t.name&&t.name.toLowerCase().includes(T.toLowerCase())})).filter((function(t){return void 0===t.group||t.group.toLowerCase().includes(L.toLowerCase())})),z=Object(b.h)((function(){return Object(s.h)("div",{class:v.a.searchBarGroup},Object(s.h)(p.a,{placeholderText:t.dictionary.table.searchByDisplayName,onFilter:function(t){return D(t.target.value)},onClear:function(){T&&(k(!P),D(""))},filterText:T}),Object(s.h)(p.a,{placeholderText:t.dictionary.table.searchByGroup,onFilter:function(t){return S(t.target.value)},onClear:function(){L&&(k(!P),S(""))},filterText:L}))}),[T,L,P,t.dictionary]),B=function(t,e){return c(c({},t),{},{percentage:void 0!==e&&0!==e?t.diff/e:0})},F=u(Object(b.k)(!0),2),I=F[0],Y=F[1],U=function(){var t,e=(t=function*(){yield y.f("100").then((function(t){a(t.data.VTubers.map((function(t){return t})).map((function(t){return function(t){var e,n,r;return{id:t.id,name:t.name,imgUrl:t.imgUrl,YouTubeId:t.YouTube.id,TwitchId:null===(e=t.Twitch)||void 0===e?void 0:e.id,YouTubeSubscriberCount:null!==(n=t.YouTube.subscriberCount)&&void 0!==n?n:0,_7DaysGrowth:B(t.YouTube._7DaysGrowth,t.YouTube.subscriberCount),_30DaysGrowth:B(t.YouTube._30DaysGrowth,t.YouTube.subscriberCount),popularVideo:t.popularVideo,group:null!==(r=t.group)&&void 0!==r?r:"",nationality:t.nationality,activity:t.activity}}(t)})).sort((function(t,e){return e._7DaysGrowth.percentage-t._7DaysGrowth.percentage}))),Y(!1)}))},function(){var e=this,n=arguments;return new Promise((function(r,i){function c(t){o(u,r,i,c,a,"next",t)}function a(t){o(u,r,i,c,a,"throw",t)}var u=t.apply(e,n);c(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(b.d)((function(){U()}),[]),Object(s.h)(s.Fragment,null,Object(s.h)("h1",null,Object(s.h)(d.c,{id:"header.growingVTubers"},"Growing VTubers"),Object(s.h)(_.a,{width:"300px",fontSize:"13px",text:Object(s.h)(d.c,{id:"toolTip.growingVTubers"},"tooltip text")})),Object(s.h)(h.a,r({},g.a,{columns:e,data:V,conditionalRowStyles:O.a,fixedHeader:!0,pagination:!0,paginationComponentOptions:t.dictionary.table.paginationOptions,progressComponent:Object(s.h)(d.c,{id:"table.loading"},"Loading..."),progressPending:I,subHeader:!0,subHeaderComponent:z})))}},qO1o:function(t,e,n){"use strict";var r=n("hosL"),o="tooltip__vtGmz",i="tooltipText__pA-zc";e.a=function(t){return Object(r.h)("div",{class:o},t.children,Object(r.h)("span",{class:i,style:{width:t.width,fontSize:t.fontSize}},t.text))}},sviv:function(t,e,n){"use strict";var r=n("hosL"),o="container__ajzPI",i="YouTubeImg__LvwUa",c="TwitchImg__ckBvR",a=function(t){var e=function(t,e,n){return void 0===n?null:Object(r.h)("a",{href:e+n,target:"_blank",rel:"noopener noreferrer"},Object(r.h)("img",{class:t}))};return Object(r.h)("div",{class:o},e(i,"https://www.youtube.com/channel/",t.YouTubeId),e(c,"https://www.twitch.tv/",t.TwitchId))},u=n("+Ox3"),l="container__VQnrV",s="profileImageFlex__NQP5p",b="nameFlex__DDBDq",d="channelLinksFlex__AtHrx";e.a=function(t){return Object(r.h)("div",{class:l},Object(r.h)("div",{class:s},Object(r.h)(u.a,{id:t.id,imgUrl:t.imgUrl})),Object(r.h)("span",{class:b},t.name),Object(r.h)("div",{class:d},Object(r.h)(a,t)))}},uZiY:function(t,e){"use strict";e.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},y7vS:function(t,e,n){"use strict";var r=n("hosL"),o=n("qO1o"),i="questionMark__RT3wD";e.a=function(t){return Object(r.h)(o.a,{text:t.text,width:t.width,fontSize:t.fontSize},Object(r.h)("img",{class:i}))}}}]);
//# sourceMappingURL=route-GrowingVTubers.chunk.cd0ea.js.map