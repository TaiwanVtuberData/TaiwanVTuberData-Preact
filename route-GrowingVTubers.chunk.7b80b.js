(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+Ox3":function(t,e,n){"use strict";var r=n("hosL"),o="profileImg__DvgtD";e.a=function(t){var e;return Object(r.g)("img",{class:o,src:null!==(e=t.imgUrl)&&void 0!==e?e:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy"})}},"2G8U":function(t,e,n){"use strict";var r=n("hosL"),o="YouTubeImg__LvwUa",i="TwitchImg__ckBvR";e.a=function(t){var e=function(t,e,n){return void 0===n?null:Object(r.g)("a",{href:e+n,target:"_blank",rel:"noopener noreferrer"},Object(r.g)("img",{class:t}))};return Object(r.g)("div",null,e(o,"https://www.youtube.com/channel/",t.YouTubeId),e(i,"https://www.twitch.tv/",t.TwitchId))}},Dy4S:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=function(t){return t>0?"+".concat(t):t<0?"".concat(t):"0"},o=function(t){return(100*t).toFixed(2)},i=function(t,e){switch(t.recordType){case"none":return e.noRecord;case"partial":return"".concat(e.atLeast," ").concat(r(t.diff)," (").concat(o(t.percentage),"%)");case"full":return"".concat(r(t.diff)," (").concat(o(t.percentage),"%)")}}},L9Wd:function(t,e,n){"use strict";var r=n("hosL"),o="textField__bDpXR",i="button__maFzS";e.a=function(t){return Object(r.g)("div",null,Object(r.g)("input",{type:"text",class:o,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(r.g)("button",{type:"button",class:i,onClick:t.onClear},"X"))}},L9y4:function(t,e){"use strict";e.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(248, 148, 6, 0.9)",color:"white","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,n){"use strict";var r=n("L9y4");e.a=function(){return{columns:[],data:[],conditionalRowStyles:r.a}}},UBrP:function(t,e,n){"use strict";function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.r(e);var s=n("hosL"),b=n("QRet"),f=n("OhSV"),d=n("ENxA"),p=n("jUMG"),g=n("2G8U"),h=n("+Ox3"),y=n("L9Wd"),w=n("drLk"),O=n("LftB"),v=(n("GFNa"),n("uZiY")),j=n("L9y4"),m=function(t,e){var n=t._7DaysGrowth.percentage,r=e._7DaysGrowth.percentage;return n>r?1:r>n?-1:0},A=function(t,e){var n=t._30DaysGrowth.percentage,r=e._30DaysGrowth.percentage;return n>r?1:r>n?-1:0},T=n("Dy4S"),x=n("y7vS"),_=n("Ud9u");e.default=function(t){document.title="".concat(t.dictionary.header.growingVTubers," | ").concat(t.dictionary.header.title);var e=[{name:"",width:"75px",cell:function(t){return t.profileImg}},{name:Object(s.g)(f.c,{id:"table.displayName"},"Name"),wrap:!0,selector:function(t){return t.name}},{name:Object(s.g)(f.c,{id:"table.links"},"Links"),minWidth:"50px",maxWidth:"150px",cell:function(t){return t.channelLinks}},{name:Object(s.g)(f.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),selector:function(t){return t.YouTubeSubscriberCount},right:!0,sortable:!0},{name:Object(s.g)(f.c,{id:"table._7DaysGrowth"},"7 Days Growth (Percent)"),cell:function(e){return Object(T.a)(e._7DaysGrowth,t.dictionary.table)},right:!0,sortable:!0,sortFunction:m},{name:Object(s.g)(f.c,{id:"table._30DaysGrowth"},"30 Days Growth (Percent)"),cell:function(e){return Object(T.a)(e._30DaysGrowth,t.dictionary.table)},right:!0,sortable:!0,sortFunction:A},{name:Object(s.g)(f.c,{id:"table.popularVideo"},"Popular Video"),cell:function(e){return void 0!==e.popularVideo?Object(s.g)("input",{type:"button",value:t.dictionary.text.showVideo,onClick:function(){return Object(_.a)(e.popularVideo)}}):null}},{name:Object(s.g)(f.c,{id:"table.group"},"Group"),cell:function(t){return""!==t.group?Object(s.g)("a",{class:v.a.groupLink,href:"".concat(p.a,"/group/").concat(t.group)},t.group):null}},{name:Object(s.g)(f.c,{id:"table.nationality"},"Nationality"),minWidth:"25px",maxWidth:"100px",selector:function(t){var e;return null!==(e=t.nationality)&&void 0!==e?e:""}}],n=u(Object(b.k)([]),2),i=n[0],c=n[1],l=u(Object(b.k)(""),2),D=l[0],G=l[1],L=u(Object(b.k)(""),2),S=L[0],k=L[1],C=u(Object(b.k)(!1),2),P=C[0],I=C[1],Y=i.filter((function(t){return t.name&&t.name.toLowerCase().includes(D.toLowerCase())})).filter((function(t){return void 0===t.group||t.group.toLowerCase().includes(S.toLowerCase())})),B=Object(b.h)((function(){return Object(s.g)("div",{class:v.a.searchBarGroup},Object(s.g)(y.a,{placeholderText:t.dictionary.table.searchByDisplayName,onFilter:function(t){return G(t.target.value)},onClear:function(){D&&(I(!P),G(""))},filterText:D}),Object(s.g)(y.a,{placeholderText:t.dictionary.table.searchByGroup,onFilter:function(t){return k(t.target.value)},onClear:function(){S&&(I(!P),k(""))},filterText:S}))}),[D,S,P,t.dictionary]),V=function(t,e){return a(a({},t),{},{percentage:void 0!==e&&0!==e?t.diff/e:0})},U=u(Object(b.k)(!0),2),F=U[0],R=U[1],z=function(){var t,e=(t=function*(){yield w.e("100").then((function(t){c(t.data.VTubers.map((function(t){return t})).map((function(t){return function(t){var e,n,r,o;return{id:t.id,profileImg:Object(h.a)({imgUrl:t.imgUrl}),name:t.name,channelLinks:Object(g.a)({YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,TwitchId:null===(n=t.Twitch)||void 0===n?void 0:n.id}),YouTubeSubscriberCount:null!==(r=t.YouTube.subscriberCount)&&void 0!==r?r:0,_7DaysGrowth:V(t.YouTube._7DaysGrowth,t.YouTube.subscriberCount),_30DaysGrowth:V(t.YouTube._30DaysGrowth,t.YouTube.subscriberCount),popularVideo:t.popularVideo,group:null!==(o=t.group)&&void 0!==o?o:"",nationality:t.nationality,activity:t.activity}}(t)})).sort((function(t,e){return e._7DaysGrowth.percentage-t._7DaysGrowth.percentage}))),R(!1)}))},function(){var e=this,n=arguments;return new Promise((function(r,i){function a(t){o(u,r,i,a,c,"next",t)}function c(t){o(u,r,i,a,c,"throw",t)}var u=t.apply(e,n);a(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(b.d)((function(){z()}),[]),Object(s.g)(s.b,null,Object(s.g)("h1",null,Object(s.g)(f.c,{id:"header.growingVTubers"},"Growing VTubers"),Object(s.g)(x.a,{width:"300px",fontSize:"13px",text:Object(s.g)(f.c,{id:"toolTip.growingVTubers"},"tooltip text")})),Object(s.g)(d.a,r({},O.a,{columns:e,data:Y,conditionalRowStyles:j.a,fixedHeader:!0,pagination:!0,paginationComponentOptions:t.dictionary.table.paginationOptions,progressComponent:Object(s.g)(f.c,{id:"table.loading"},"Loading..."),progressPending:F,subHeader:!0,subHeaderComponent:B})))}},qO1o:function(t,e,n){"use strict";var r=n("hosL"),o="tooltip__vtGmz",i="tooltipText__pA-zc";e.a=function(t){return Object(r.g)("div",{class:o},t.children,Object(r.g)("span",{class:i,style:{width:t.width,fontSize:t.fontSize}},t.text))}},uZiY:function(t,e){"use strict";e.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},y7vS:function(t,e,n){"use strict";var r=n("hosL"),o=n("qO1o"),i="questionMark__RT3wD";e.a=function(t){return Object(r.g)(o.a,{text:t.text,width:t.width,fontSize:t.fontSize},Object(r.g)("img",{class:i}))}}}]);
//# sourceMappingURL=route-GrowingVTubers.chunk.7b80b.js.map