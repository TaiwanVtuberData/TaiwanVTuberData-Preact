(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+Ox3":function(t,e,o){"use strict";var i=o("hosL"),n=o("Wcfx"),r="fixedSize__iw3af",u="profileImg__DvgtD";e.a=t=>{var e,o,c;return Object(i.h)("a",{href:Object(n.b)({type:"vtuber",id:t.VTuberId})},Object(i.h)("img",{class:`${t.size?r:u}`,src:null!==(e=t.imgUrl)&&void 0!==e?e:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy",width:null!==(o=t.size)&&void 0!==o?o:void 0,height:null!==(c=t.size)&&void 0!==c?c:void 0}))}},"4BB4":function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));const i={headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}}},"69ZN":function(t,e,o){"use strict";o.d(e,"a",(function(){return w}));var i=o("hosL"),n=o("OhSV"),r="container__ajzPI",u="YouTubeImg__LvwUa",c="TwitchImg__ckBvR";var a=t=>{const e=(t,e,o)=>void 0===o?null:Object(i.h)("a",{href:e+o,target:"_blank",rel:"noopener noreferrer"},Object(i.h)("img",{class:t}));return Object(i.h)("div",{class:r},e(u,"https://www.youtube.com/channel/",t.YouTubeId),e(c,"https://www.twitch.tv/",t.TwitchId))},l=o("+Ox3"),s="container__VQnrV",b="profileImageFlex__NQP5p",h="nameFlex__DDBDq",d="channelLinksFlex__AtHrx";var p=t=>Object(i.h)("div",{class:s},Object(i.h)("div",{class:b},Object(i.h)(l.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl})),Object(i.h)("span",{class:h},t.name),Object(i.h)("div",{class:d},Object(i.h)(a,t)));const w=()=>({name:Object(i.h)(n.c,{id:"table.displayName"},"Name"),cell:t=>Object(i.h)(p,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name,YouTubeId:t.YouTubeId,TwitchId:t.TwitchId})})},"7Asn":function(t,e,o){"use strict";o.d(e,"a",(function(){return c}));var i=o("hosL"),n=o("OhSV"),r=o("Wcfx"),u=o("uZiY");const c=()=>({name:Object(i.h)(n.c,{id:"table.group"},"Group"),cell:t=>""!==t.group?Object(i.h)("a",{class:u.a.groupLink,href:Object(r.b)({type:"group",name:t.group})},t.group):null})},"7DLW":function(t,e,o){"use strict";var i=o("hosL"),n=o("OhSV"),r=(o("GFNa"),"noWrap__BzT1O");e.a=t=>{const e=t=>Object(i.h)("span",{class:`${r} YouTubeRed`},null!=t?t:Object(i.h)(n.c,{id:"table.hiddenCount"},"hidden")),o=t=>Object(i.h)("span",{class:`${r} TwitchPurple`},t);return Object(i.h)(i.Fragment,null,Object(i.h)((t=>t.hasYouTube&&t.hasTwitch?Object(i.h)(i.Fragment,null,e(t.YouTubeSubscriberCount),Object(i.h)("span",{class:r}," + "),o(t.TwitchFollowerCount)):t.hasYouTube?Object(i.h)(i.Fragment,null,e(t.YouTubeSubscriberCount)):t.hasTwitch?Object(i.h)(i.Fragment,null,o(t.TwitchFollowerCount)):null),t))}},"8f/H":function(t,e,o){"use strict";o.d(e,"b",(function(){return u})),o.d(e,"a",(function(){return c}));const i=(t,e)=>{const o=t.hasYouTube,i=e.hasYouTube;if(!o&&!i)return 0;if(!i)return-1;if(!o)return 1;const n=t.YouTubeSubscriberCount,r=e.YouTubeSubscriberCount;return void 0===n&&void 0===r?0:void 0===r?-1:void 0===n?1:n>r?-1:r>n?1:0},n=(t,e)=>{const o=t.hasTwitch,i=e.hasTwitch;if(!o&&!i)return 0;if(!i)return-1;if(!o)return 1;const n=t.TwitchFollowerCount,r=e.TwitchFollowerCount;return n>r?-1:r>n?1:0},r=(t,e)=>{var o,i,n,r;const u=(null!==(o=t.YouTubeSubscriberCount)&&void 0!==o?o:0)+(null!==(i=t.TwitchFollowerCount)&&void 0!==i?i:0),c=(null!==(n=e.YouTubeSubscriberCount)&&void 0!==n?n:0)+(null!==(r=e.TwitchFollowerCount)&&void 0!==r?r:0);return u>c?-1:c>u?1:0},u=(t,e)=>{var o,i,n,r;const u=(null!==(o=t.YouTubeSubscriberCount)&&void 0!==o?o:0)+(null!==(i=t.TwitchFollowerCount)&&void 0!==i?i:0),c=(null!==(n=e.YouTubeSubscriberCount)&&void 0!==n?n:0)+(null!==(r=e.TwitchFollowerCount)&&void 0!==r?r:0);return u>c?1:c>u?-1:0},c=t=>{switch(t){case"YouTube+Twitch":return r;case"YouTube":return i;case"Twitch":return n}}},"8i/u":function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));const i=(t,e)=>{var o,i,n,r,u,c,a,l,s,b;return{id:t.id,name:t.name,imgUrl:t.imgUrl,hasYouTube:void 0!==t.YouTube,YouTubeId:null===(o=t.YouTube)||void 0===o?void 0:o.id,YouTubeSubscriberCount:null===(i=t.YouTube)||void 0===i?void 0:i.subscriberCount,hasTwitch:void 0!==t.Twitch,TwitchId:null===(n=t.Twitch)||void 0===n?void 0:n.id,TwitchFollowerCount:null!==(r=null===(u=t.Twitch)||void 0===u?void 0:u.followerCount)&&void 0!==r?r:0,popularVideo:t.popularVideo,group:null!==(c=t.group)&&void 0!==c?c:"",nationality:t.nationality,activity:t.activity,YouTubePopularity:null!==(a=null===(l=t.YouTube)||void 0===l?void 0:l.popularity)&&void 0!==a?a:0,TwitchPopularity:null!==(s=null===(b=t.Twitch)||void 0===b?void 0:b.popularity)&&void 0!==s?s:0,ranking:e}}},GHZf:function(t,e,o){"use strict";o.d(e,"a",(function(){return u}));var i=o("hosL"),n=o("OhSV"),r=o("7DLW");const u=()=>({name:Object(i.h)(n.c,{id:"table.popularity"},"Popularity"),cell:t=>Object(i.h)(r.a,{hasYouTube:t.hasYouTube,YouTubeSubscriberCount:t.YouTubePopularity,hasTwitch:t.hasTwitch,TwitchFollowerCount:t.TwitchPopularity})})},HSXE:function(t,e,o){"use strict";o.d(e,"a",(function(){return u}));var i=o("hosL"),n=o("OhSV"),r=o("7DLW");const u=()=>({name:Object(i.h)(n.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),cell:t=>Object(i.h)(r.a,{hasYouTube:t.hasYouTube,YouTubeSubscriberCount:t.YouTubeSubscriberCount,hasTwitch:t.hasTwitch,TwitchFollowerCount:t.TwitchFollowerCount})})},"JY+X":function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var i=o("hosL"),n=o("OhSV");const r=()=>({name:Object(i.h)(n.c,{id:"table.nationality"},"Nationality"),selector:t=>{var e;return null!==(e=t.nationality)&&void 0!==e?e:""}})},L9Wd:function(t,e,o){"use strict";var i=o("hosL"),n="container__1lsi6",r="textField__bDpXR",u="button__maFzS";e.a=t=>Object(i.h)("div",{class:n},Object(i.h)("input",{type:"text",class:r,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(i.h)("button",{type:"button",class:u,onClick:t.onClear},"X"))},L9y4:function(t,e){"use strict";e.a=[{when:t=>"preparing"===t.activity,style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:t=>"graduate"===t.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,o){"use strict";var i=o("L9y4");e.a=()=>({columns:[],data:[],conditionalRowStyles:i.a})},Obgd:function(t,e,o){"use strict";function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},i.apply(this,arguments)}function n(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){u(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function u(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}o.r(e);var c=o("hosL"),a=o("QRet"),l=o("OhSV"),s=o("ENxA"),b=o("drLk"),h=o("L9Wd"),d=o("LftB"),p=(o("GFNa"),o("uZiY")),w=o("L9y4"),O=o("8i/u"),T=o("y7vS"),v=o("8f/H"),f=o("iN8o"),j=o("4BB4"),g=o("69ZN"),y=o("HSXE"),m=o("sKFU"),Y=o("7Asn"),C=o("JY+X"),x=o("GHZf");e.default=t=>{document.title=`${t.dictionary.header.trendingVTubers} | ${t.dictionary.header.title}`;const e=[{name:"#",selector:t=>t.ranking,sortable:!0,wrap:!1,width:"30px"},Object(g.a)(),r(r({},Object(x.a)()),{},{sortFunction:f.a,sortable:!0,width:"150px"}),r(r({},Object(y.a)()),{},{sortFunction:v.b,sortable:!0,width:"150px"}),r(r({},Object(m.a)()),{},{width:"100px"}),r(r({},Object(Y.a)()),{},{maxWidth:"100px"}),r(r({},Object(C.a)()),{},{minWidth:"25px",maxWidth:"100px"})],[o,n]=Object(a.k)([]),[u,S]=Object(a.k)(""),[L,A]=Object(a.k)(""),[F,_]=Object(a.k)(!1),V=o.filter((t=>t.name&&t.name.toLowerCase().includes(u.toLowerCase()))).filter((t=>void 0===t.group||t.group.toLowerCase().includes(L.toLowerCase()))),P=Object(a.h)((()=>Object(c.h)("div",{class:p.a.searchBarGroup},Object(c.h)(h.a,{placeholderText:t.dictionary.table.searchByDisplayName,onFilter:t=>S(t.target.value),onClear:()=>{u&&(_(!F),S(""))},filterText:u}),Object(c.h)(h.a,{placeholderText:t.dictionary.table.searchByGroup,onFilter:t=>A(t.target.value),onClear:()=>{L&&(_(!F),A(""))},filterText:L}))),[u,L,F,t.dictionary]),[k,I]=Object(a.k)(!0);return Object(a.d)((()=>{(async()=>{await b.g("100").then((t=>{n(t.data.VTubers.map((t=>t)).map(((t,e)=>Object(O.a)(t,e+1))).sort(f.b).map(((t,e)=>r(r({},t),{},{ranking:e+1})))),I(!1)}))})()}),[]),Object(c.h)(c.Fragment,null,Object(c.h)("h1",null,Object(c.h)(l.c,{id:"header.trendingVTubers"},"Trending VTubers"),Object(c.h)(T.a,{width:"300px",fontSize:"13px",text:Object(c.h)(l.c,{id:"toolTip.trendingVTubers"},"tooltip text")})),Object(c.h)(s.a,i({},d.a,{columns:e,data:V,conditionalRowStyles:w.a,customStyles:j.a,fixedHeader:!0,pagination:!0,paginationComponentOptions:t.dictionary.table.paginationOptions,progressComponent:Object(c.h)(l.c,{id:"table.loading"},"Loading..."),progressPending:k,subHeader:!0,subHeaderComponent:P})))}},iN8o:function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"a",(function(){return n}));const i=(t,e)=>{const o=t.YouTubePopularity+t.TwitchPopularity,i=e.YouTubePopularity+e.TwitchPopularity;return o>i?-1:i>o?1:0},n=(t,e)=>{const o=t.YouTubePopularity+t.TwitchPopularity,i=e.YouTubePopularity+e.TwitchPopularity;return o>i?1:i>o?-1:0}},qO1o:function(t,e,o){"use strict";var i=o("hosL"),n="tooltip__vtGmz",r="tooltipText__pA-zc";e.a=t=>Object(i.h)("div",{class:n},t.children,Object(i.h)("span",{class:r,style:{width:t.width,fontSize:t.fontSize}},t.text))},sKFU:function(t,e,o){"use strict";o.d(e,"a",(function(){return c}));var i=o("hosL"),n=o("OhSV"),r=o("Ud9u");const u=Object(n.d)("text.showVideo")((t=>Object(i.h)("input",{type:"button",value:t.showVideo,onClick:()=>Object(r.a)(t.popularVideo)}))),c=()=>({name:Object(i.h)(n.c,{id:"table.popularVideo"},"Popular Video"),cell:t=>void 0!==t.popularVideo?Object(i.h)(u,{popularVideo:t.popularVideo}):null})},uZiY:function(t,e){"use strict";e.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},y7vS:function(t,e,o){"use strict";var i=o("hosL"),n=o("qO1o"),r="questionMark__RT3wD";e.a=t=>Object(i.h)(n.a,{text:t.text,width:t.width,fontSize:t.fontSize},Object(i.h)("img",{class:r}))}}]);
//# sourceMappingURL=route-TrendingVTubers.chunk.ae1f0.esm.js.map