(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+Ox3":function(e,t,o){"use strict";var i=o("hosL"),a="profileImg__DvgtD";t.a=e=>{var t;return Object(i.h)("img",{class:a,src:null!==(t=e.imgUrl)&&void 0!==t?t:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy"})}},"2G8U":function(e,t,o){"use strict";var i=o("hosL"),a="YouTubeImg__LvwUa",n="TwitchImg__ckBvR";t.a=e=>{const t=(e,t,o)=>void 0===o?null:Object(i.h)("a",{href:t+o,target:"_blank",rel:"noopener noreferrer"},Object(i.h)("img",{class:e}));return Object(i.h)("div",null,t(a,"https://www.youtube.com/channel/",e.YouTubeId),t(n,"https://www.twitch.tv/",e.TwitchId))}},DS9q:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));const i=(e,t)=>{const o=e.hasYouTube,i=t.hasYouTube;if(!o&&!i)return 0;if(!i)return 1;if(!o)return-1;const a=e.YouTubeSubscriberCount,n=t.YouTubeSubscriberCount;return void 0===a&&void 0===n?0:void 0===n?1:void 0===a?-1:a>n?1:n>a?-1:0}},JFTd:function(e,t,o){"use strict";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},i.apply(this,arguments)}o.r(t);var a=o("hosL"),n=o("QRet"),r=o("OhSV"),l=o("ENxA"),c=o("2G8U"),u=o("+Ox3"),d=o("L9Wd"),s=o("drLk"),b=o("LftB"),h=o("DS9q"),p=(o("GFNa"),o("uZiY"),o("L9y4")),v=o("Ud9u");t.default=e=>{document.title=`${e.groupName} | ${e.dictionary.header.title}`;const t=[{name:"",width:"75px",cell:e=>e.profileImg},{name:Object(a.h)(r.c,{id:"table.displayName"},"Name"),wrap:!0,selector:e=>e.name},{name:Object(a.h)(r.c,{id:"table.links"},"Links"),minWidth:"50px",maxWidth:"150px",cell:e=>e.channelLinks},{name:Object(a.h)(r.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),cell:e=>{var t;return e.hasYouTube?null!==(t=e.YouTubeSubscriberCount)&&void 0!==t?t:Object(a.h)(r.c,{id:"table.hiddenCount"},"hidden"):null},right:!0,sortable:!0,sortFunction:h.a},{name:Object(a.h)(r.c,{id:"table.TwitchFollowerCount"},"Twitch Followers"),selector:e=>e.hasTwitch?e.TwitchFollowerCount:"",right:!0,sortable:!0},{name:Object(a.h)(r.c,{id:"table.popularVideo"},"Popular Video"),cell:t=>void 0!==t.popularVideo?Object(a.h)("input",{type:"button",value:e.dictionary.text.showVideo,onClick:()=>Object(v.a)(t.popularVideo)}):null},{name:Object(a.h)(r.c,{id:"table.nationality"},"Nationality"),minWidth:"25px",maxWidth:"100px",selector:e=>{var t;return null!==(t=e.nationality)&&void 0!==t?t:""}}],[o,m]=Object(n.k)([]),[w,g]=Object(n.k)(""),[O,T]=Object(n.k)(!1),j=o.filter((e=>e.name&&e.name.toLowerCase().includes(w.toLowerCase()))),y=Object(n.h)((()=>Object(a.h)(a.Fragment,null,Object(a.h)(d.a,{placeholderText:e.dictionary.table.searchByDisplayName,onFilter:e=>g(e.target.value),onClear:()=>{w&&(T(!O),g(""))},filterText:w}))),[w,O,e.dictionary]),[f,A]=Object(n.k)(!0),C=async()=>{await s.c(e.groupName).then((e=>{m(e.data.VTubers.map((e=>(e=>{var t,o,i,a,n;return{id:e.id,profileImg:Object(u.a)({imgUrl:e.imgUrl}),name:e.name,channelLinks:Object(c.a)({YouTubeId:null===(t=e.YouTube)||void 0===t?void 0:t.id,TwitchId:null===(o=e.Twitch)||void 0===o?void 0:o.id}),hasYouTube:void 0!==e.YouTube,YouTubeSubscriberCount:null===(i=e.YouTube)||void 0===i?void 0:i.subscriberCount,hasTwitch:void 0!==e.Twitch,TwitchFollowerCount:null!==(a=null===(n=e.Twitch)||void 0===n?void 0:n.followerCount)&&void 0!==a?a:0,popularVideo:e.popularVideo,nationality:e.nationality,activity:e.activity}})(e)))),A(!1)}))};return Object(n.d)((()=>{C()}),[]),Object(a.h)(a.Fragment,null,Object(a.h)("h1",null,Object(a.h)(r.c,{id:"header.group"},"Group"),Object(a.h)("span",{class:"highlightText"}," ",e.groupName," "),Object(a.h)(r.c,{id:"header.memberList"},"members")),Object(a.h)(l.a,i({},b.a,{columns:t,data:j,fixedHeader:!0,conditionalRowStyles:p.a,progressComponent:Object(a.h)(r.c,{id:"table.loading"},"Loading..."),progressPending:f,subHeader:!0,subHeaderComponent:y})))}},L9Wd:function(e,t,o){"use strict";var i=o("hosL"),a="textField__bDpXR",n="button__maFzS";t.a=e=>Object(i.h)("div",null,Object(i.h)("input",{type:"text",class:a,placeholder:e.placeholderText,value:e.filterText,onChange:e.onFilter}),Object(i.h)("button",{type:"button",class:n,onClick:e.onClear},"X"))},L9y4:function(e,t){"use strict";t.a=[{when:e=>"preparing"===e.activity,style:{backgroundColor:"rgba(248, 148, 6, 0.9)",color:"white","&:hover":{cursor:"pointer"}}},{when:e=>"graduate"===e.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(e,t,o){"use strict";var i=o("L9y4");t.a=()=>({columns:[],data:[],conditionalRowStyles:i.a})},uZiY:function(e,t){"use strict";t.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}}}]);
//# sourceMappingURL=route-Group.chunk.e6f1d.esm.js.map