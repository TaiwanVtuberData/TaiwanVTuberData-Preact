(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+Ox3":function(t,e,n){"use strict";var r=n("hosL"),o=n("Wcfx"),i="fixedSize__iw3af",u="profileImg__DvgtD";e.a=function(t){var e,n,c;return Object(r.h)("a",{href:Object(o.b)({type:"vtuber",id:t.VTuberId})},Object(r.h)("img",{class:"".concat(t.size?i:u),src:null!==(e=t.imgUrl)&&void 0!==e?e:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy",width:null!==(n=t.size)&&void 0!==n?n:void 0,height:null!==(c=t.size)&&void 0!==c?c:void 0}))}},"69ZN":function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("hosL"),o=n("OhSV"),i="container__ajzPI",u="YouTubeImg__LvwUa",c="TwitchImg__ckBvR",a=function(t){var e=function(t,e,n){return void 0===n?null:Object(r.h)("a",{href:e+n,target:"_blank",rel:"noopener noreferrer"},Object(r.h)("img",{class:t}))};return Object(r.h)("div",{class:i},e(u,"https://www.youtube.com/channel/",t.YouTubeId),e(c,"https://www.twitch.tv/",t.TwitchId))},l=n("+Ox3"),s="container__VQnrV",b="profileImageFlex__NQP5p",h="nameFlex__DDBDq",d="channelLinksFlex__AtHrx",f=function(t){return Object(r.h)("div",{class:s},Object(r.h)("div",{class:b},Object(r.h)(l.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl})),Object(r.h)("span",{class:h},t.name),Object(r.h)("div",{class:d},Object(r.h)(a,t)))},p=function(){return{name:Object(r.h)(o.c,{id:"table.displayName"},"Name"),cell:function(t){return Object(r.h)(f,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name,YouTubeId:t.YouTubeId,TwitchId:t.TwitchId})}}}},"7DLW":function(t,e,n){"use strict";var r=n("hosL"),o=n("OhSV"),i=(n("GFNa"),"noWrap__BzT1O");e.a=function(t){var e=function(t){return Object(r.h)("span",{class:"".concat(i," YouTubeRed")},null!=t?t:Object(r.h)(o.c,{id:"table.hiddenCount"},"hidden"))},n=function(t){return Object(r.h)("span",{class:"".concat(i," TwitchPurple")},t)};return Object(r.h)(r.Fragment,null,Object(r.h)((function(t){return t.hasYouTube&&t.hasTwitch?Object(r.h)(r.Fragment,null,e(t.YouTubeSubscriberCount),Object(r.h)("span",{class:i}," + "),n(t.TwitchFollowerCount)):t.hasYouTube?Object(r.h)(r.Fragment,null,e(t.YouTubeSubscriberCount)):t.hasTwitch?Object(r.h)(r.Fragment,null,n(t.TwitchFollowerCount)):null}),t))}},HSXE:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("hosL"),o=n("OhSV"),i=n("7DLW"),u=function(){return{name:Object(r.h)(o.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),cell:function(t){return Object(r.h)(i.a,{hasYouTube:t.hasYouTube,YouTubeSubscriberCount:t.YouTubeSubscriberCount,hasTwitch:t.hasTwitch,TwitchFollowerCount:t.TwitchFollowerCount})}}}},JFTd:function(t,e,n){"use strict";function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e,n,r,o,i,u){try{var c=t[i](u),a=c.value}catch(t){return void n(t)}c.done?e(a):Promise.resolve(a).then(r,o)}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],u=!0,c=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(t){c=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e);var s=n("hosL"),b=n("QRet"),h=n("OhSV"),d=n("ENxA"),f=n("L9Wd"),p=n("drLk"),O=n("LftB"),v=(n("GFNa"),n("L9y4")),j=n("uZiY"),w=n("HSXE"),m=n("69ZN"),y=n("sKFU"),g=n("JY+X");e.default=function(t){document.title="".concat(t.groupName," | ").concat(t.dictionary.header.title);var e=[Object(m.a)(),Object(w.a)(),a(a({},Object(y.a)()),{},{width:"100px"}),a(a({},Object(g.a)()),{},{minWidth:"25px",maxWidth:"100px"})],n=i(Object(b.k)([]),2),u=n[0],c=n[1],l=i(Object(b.k)(""),2),T=l[0],A=l[1],_=i(Object(b.k)(!1),2),x=_[0],C=_[1],L=u.filter((function(t){return t.name&&t.name.toLowerCase().includes(T.toLowerCase())})),F=Object(b.h)((function(){return Object(s.h)("div",{class:j.a.searchBarGroup},Object(s.h)(f.a,{placeholderText:t.dictionary.table.searchByDisplayName,onFilter:function(t){return A(t.target.value)},onClear:function(){T&&(C(!x),A(""))},filterText:T}))}),[T,x,t.dictionary]),S=i(Object(b.k)(!0),2),Y=S[0],V=S[1],I=function(){var e,n=(e=function*(){yield p.d(t.groupName).then((function(t){c(t.data.VTubers.map((function(t){return function(t){var e,n,r,o,i;return{id:t.id,name:t.name,imgUrl:t.imgUrl,hasYouTube:void 0!==t.YouTube,YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,YouTubeSubscriberCount:null===(n=t.YouTube)||void 0===n?void 0:n.subscriberCount,hasTwitch:void 0!==t.Twitch,TwitchId:null===(r=t.Twitch)||void 0===r?void 0:r.id,TwitchFollowerCount:null!==(o=null===(i=t.Twitch)||void 0===i?void 0:i.followerCount)&&void 0!==o?o:0,popularVideo:t.popularVideo,nationality:t.nationality,activity:t.activity}}(t)}))),V(!1)}))},function(){var t=this,n=arguments;return new Promise((function(r,i){function u(t){o(a,r,i,u,c,"next",t)}function c(t){o(a,r,i,u,c,"throw",t)}var a=e.apply(t,n);u(void 0)}))});return function(){return n.apply(this,arguments)}}();return Object(b.d)((function(){I()}),[]),Object(s.h)(s.Fragment,null,Object(s.h)("h1",null,Object(s.h)(h.c,{id:"header.group"},"Group"),Object(s.h)("span",{class:"highlightText"}," ",t.groupName," "),Object(s.h)(h.c,{id:"header.memberList"},"members")),Object(s.h)(d.a,r({},O.a,{columns:e,data:L,fixedHeader:!0,conditionalRowStyles:v.a,progressComponent:Object(s.h)(h.c,{id:"table.loading"},"Loading..."),progressPending:Y,subHeader:!0,subHeaderComponent:F})))}},"JY+X":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("hosL"),o=n("OhSV"),i=function(){return{name:Object(r.h)(o.c,{id:"table.nationality"},"Nationality"),selector:function(t){var e;return null!==(e=t.nationality)&&void 0!==e?e:""}}}},L9Wd:function(t,e,n){"use strict";var r=n("hosL"),o="container__1lsi6",i="textField__bDpXR",u="button__maFzS";e.a=function(t){return Object(r.h)("div",{class:o},Object(r.h)("input",{type:"text",class:i,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(r.h)("button",{type:"button",class:u,onClick:t.onClear},"X"))}},L9y4:function(t,e){"use strict";e.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,n){"use strict";var r=n("L9y4");e.a=function(){return{columns:[],data:[],conditionalRowStyles:r.a}}},sKFU:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("hosL"),o=n("OhSV"),i=n("Ud9u"),u=Object(o.d)("text.showVideo")((function(t){return Object(r.h)("input",{type:"button",value:t.showVideo,onClick:function(){return Object(i.a)(t.popularVideo)}})})),c=function(){return{name:Object(r.h)(o.c,{id:"table.popularVideo"},"Popular Video"),cell:function(t){return void 0!==t.popularVideo?Object(r.h)(u,{popularVideo:t.popularVideo}):null}}}},uZiY:function(t,e){"use strict";e.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}}}]);
//# sourceMappingURL=route-Group.chunk.b4cef.js.map