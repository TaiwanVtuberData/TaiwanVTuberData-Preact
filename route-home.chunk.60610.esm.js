(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+Ox3":function(t,e,n){"use strict";var r=n("hosL"),i="profileImg__DvgtD";e.a=t=>{var e;return Object(r.h)("img",{class:i,src:null!==(e=t.imgUrl)&&void 0!==e?e:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy"})}},"2G8U":function(t,e,n){"use strict";var r=n("hosL"),i="YouTubeImg__LvwUa",a="TwitchImg__ckBvR";e.a=t=>{const e=(t,e,n)=>void 0===n?null:Object(r.h)("a",{href:e+n,target:"_blank",rel:"noopener noreferrer"},Object(r.h)("img",{class:t}));return Object(r.h)("div",null,e(i,"https://www.youtube.com/channel/",t.YouTubeId),e(a,"https://www.twitch.tv/",t.TwitchId))}},"8i/u":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("2G8U"),i=n("+Ox3");const a=(t,e)=>{var n,a,o,u,c,l;return{id:t.id,profileImg:Object(i.a)({imgUrl:t.imgUrl}),name:t.name,channelLinks:Object(r.a)({YouTubeId:null===(n=t.YouTube)||void 0===n?void 0:n.id,TwitchId:null===(a=t.Twitch)||void 0===a?void 0:a.id}),hasYouTube:void 0!==t.YouTube,YouTubeSubscriberCount:null===(o=t.YouTube)||void 0===o?void 0:o.subscriberCount,hasTwitch:void 0!==t.Twitch,TwitchFollowerCount:null!==(u=null===(c=t.Twitch)||void 0===c?void 0:c.followerCount)&&void 0!==u?u:0,group:null!==(l=t.group)&&void 0!==l?l:"",nationality:t.nationality,activity:t.activity,popularity:t.popularity,ranking:e}}},"8r9F":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a}));const r=t=>t.toString().padStart(2,"0"),i=(t,e)=>{const n=t.getTimezoneOffset()/60+e;return t.setTime(t.getTime()+60*n*60*1e3),t.getFullYear()+"-"+r(t.getMonth()+1)+"-"+r(t.getDate())},a=t=>t.getFullYear()+"-"+r(t.getMonth()+1)+"-"+r(t.getDate())+" "+r(t.getHours())+":"+r(t.getMinutes())+":"+r(t.getSeconds())},Dy4S:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));const r=t=>t>0?`+${t}`:t<0?`${t}`:"0",i=t=>(100*t).toFixed(2),a=(t,e)=>{switch(t.recordType){case"none":return e.noRecord;case"partial":return`${e.atLeast} ${r(t.diff)} (${i(t.percentage)}%)`;case"full":return`${r(t.diff)} (${i(t.percentage)}%)`}}},FDtd:function(t,e,n){"use strict";function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(){return c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c.apply(this,arguments)}function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l.apply(this,arguments)}n.r(e);var b=n("hosL"),s=n("OhSV"),d=n("QRet"),h=n("ENxA"),p=n("drLk"),g=n("LftB"),O=(n("GFNa"),n("L9y4")),j=n("8r9F"),m=n("TToT"),v=n("lRrp");var w=()=>{const t=[{name:Object(b.h)(s.b,{id:"table.debutDate"},"Debut Date"),width:"100px",selector:t=>t.debutDate,sortable:!0},{name:"",width:"75px",cell:t=>t.profileImg},{name:Object(b.h)(s.b,{id:"table.displayName"},"Name"),wrap:!0,selector:t=>t.name},{name:Object(b.h)(s.b,{id:"table.links"},"Links"),minWidth:"50px",maxWidth:"150px",cell:t=>t.channelLinks}],[e,n]=Object(d.j)([]),[i,a]=Object(d.j)(!0);return Object(d.d)((()=>{(async()=>{const t=Object(j.b)(new Date,8);await p.a("next-7-days").then((e=>{n(e.data.VTubers.map((t=>t)).sort(((t,e)=>t.debutDate.localeCompare(e.debutDate))).map((e=>Object(v.a)(e,t)))),a(!1)}))})()}),[]),Object(b.h)(b.Fragment,null,Object(b.h)("h3",null,Object(b.h)(s.b,{id:"header.debutVTubers"},"Debut VTubers")),Object(b.h)(h.a,r({},g.a,{columns:t,data:e,conditionalRowStyles:O.a.concat(m.a),fixedHeader:!0,progressPending:i,progressComponent:Object(b.h)(s.b,{id:"table.loading"},"Loading...")})))},T=n("2G8U"),y=n("+Ox3"),f=n("Dy4S");var Y=t=>{const e=[{name:"",width:"75px",cell:t=>t.profileImg},{name:Object(b.h)(s.b,{id:"table.displayName"},"Name"),wrap:!0,selector:t=>t.name},{name:Object(b.h)(s.b,{id:"table.links"},"Links"),minWidth:"50px",maxWidth:"150px",cell:t=>t.channelLinks},{name:Object(b.h)(s.b,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),selector:t=>t.YouTubeSubscriberCount,right:!0},{name:Object(b.h)(s.b,{id:"table._7DaysGrowth"},"7 Days Growth (Percent)"),cell:e=>Object(f.a)(e._7DaysGrowth,t.dictionary.table),right:!0}],[n,r]=Object(d.j)([]),a=(t,e)=>o(o({},t),{},{percentage:void 0!==e&&0!==e?t.diff/e:0}),[u,c]=Object(d.j)(!0),l=async()=>{await p.e("10").then((t=>{r(t.data.VTubers.map((t=>t)).map((t=>(t=>{var e,n,r,i;return{id:t.id,profileImg:Object(y.a)({imgUrl:t.imgUrl}),name:t.name,channelLinks:Object(T.a)({YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,TwitchId:null===(n=t.Twitch)||void 0===n?void 0:n.id}),YouTubeSubscriberCount:null!==(r=t.YouTube.subscriberCount)&&void 0!==r?r:0,_7DaysGrowth:a(t.YouTube._7DaysGrowth,t.YouTube.subscriberCount),_30DaysGrowth:a(t.YouTube._30DaysGrowth,t.YouTube.subscriberCount),group:null!==(i=t.group)&&void 0!==i?i:"",nationality:t.nationality,activity:t.activity}})(t))).sort(((t,e)=>e._7DaysGrowth.percentage-t._7DaysGrowth.percentage))),c(!1)}))};return Object(d.d)((()=>{l()}),[]),Object(b.h)(b.Fragment,null,Object(b.h)("h3",null,Object(b.h)(s.b,{id:"header.growingVTubers"},"Growing VTubers"),Object(b.h)(b.Fragment,null," "),Object(b.h)(s.b,{id:"header.top10"},"Top 10")),Object(b.h)(h.a,i({},g.a,{columns:e,data:n,conditionalRowStyles:O.a,fixedHeader:!0,progressComponent:Object(b.h)(s.b,{id:"table.loading"},"Loading..."),progressPending:u})))},D=n("gJSz");var A=()=>{const t=[{name:"",width:"75px",cell:t=>t.profileImg},{name:Object(b.h)(s.b,{id:"table.displayName"},"Name"),wrap:!0,selector:t=>t.name},{name:Object(b.h)(s.b,{id:"table.links"},"Links"),minWidth:"50px",maxWidth:"150px",cell:t=>t.channelLinks},{name:Object(b.h)(s.b,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),cell:t=>{var e;return t.hasYouTube?null!==(e=t.YouTubeSubscriberCount)&&void 0!==e?e:Object(b.h)(s.b,{id:"table.hiddenCount"},"hidden"):null},right:!0},{name:Object(b.h)(s.b,{id:"table.TwitchFollowerCount"},"Twitch Followers"),selector:t=>t.hasTwitch?t.TwitchFollowerCount:"",right:!0}],[e,n]=Object(d.j)([]),[r,i]=Object(d.j)(!0);return Object(d.d)((()=>{(async()=>{await p.h("10").then((t=>{n(t.data.VTubers.map((t=>Object(D.a)(t)))),i(!1)}))})()}),[]),Object(b.h)(b.Fragment,null,Object(b.h)("h3",null,Object(b.h)(s.b,{id:"header.YouTubeSubPlusTwitchFollowers"},"YouTube Subscribers + Twitch Followers"),Object(b.h)(b.Fragment,null," "),Object(b.h)(s.b,{id:"header.top10"},"Top 10")),Object(b.h)(h.a,c({},g.a,{columns:t,data:e,conditionalRowStyles:O.a,fixedHeader:!0,progressComponent:Object(b.h)(s.b,{id:"table.loading"},"Loading..."),progressPending:r})))},C=n("8i/u");var L=()=>{const t=[{name:"",width:"75px",cell:t=>t.profileImg},{name:Object(b.h)(s.b,{id:"table.displayName"},"Name"),wrap:!0,selector:t=>t.name},{name:Object(b.h)(s.b,{id:"table.links"},"Links"),minWidth:"50px",maxWidth:"150px",cell:t=>t.channelLinks},{name:Object(b.h)(s.b,{id:"table.popularity"},"Popularity"),selector:t=>t.popularity,right:!0}],[e,n]=Object(d.j)([]),[r,i]=Object(d.j)(!0);return Object(d.d)((()=>{(async()=>{await p.f("10").then((t=>{n(t.data.VTubers.map((t=>t)).sort(((t,e)=>e.popularity-t.popularity)).map(((t,e)=>Object(C.a)(t,e+1)))),i(!1)}))})()}),[]),Object(b.h)(b.Fragment,null,Object(b.h)("h3",null,Object(b.h)(s.b,{id:"header.trendingVTubers"},"Trending VTubers"),Object(b.h)(b.Fragment,null," "),Object(b.h)(s.b,{id:"header.top10"},"Top 10")),Object(b.h)(h.a,l({},g.a,{columns:t,data:e,conditionalRowStyles:O.a,fixedHeader:!0,progressComponent:Object(b.h)(s.b,{id:"table.loading"},"Loading..."),progressPending:r})))},k="tableGrid__Ju0u9",x="tableItem__iikA+";e.default=t=>(document.title=`${t.dictionary.header.title}`,Object(b.h)(b.Fragment,null,Object(b.h)("h1",null,Object(b.h)(s.b,{id:"header.title"},"Taiwan VTuber Data")),Object(b.h)("div",{class:k},Object(b.h)("div",{class:x},Object(b.h)(L,null)),Object(b.h)("div",{class:x},Object(b.h)(w,null)),Object(b.h)("div",{class:x},Object(b.h)(Y,{dictionary:t.dictionary})),Object(b.h)("div",{class:x},Object(b.h)(A,null)))))},L9y4:function(t,e){"use strict";e.a=[{when:t=>"preparing"===t.activity,style:{backgroundColor:"rgba(248, 148, 6, 0.9)",color:"white","&:hover":{cursor:"pointer"}}},{when:t=>"graduate"===t.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,n){"use strict";var r=n("L9y4");e.a=()=>({columns:[],data:[],conditionalRowStyles:r.a})},TToT:function(t,e){"use strict";e.a=[{when:t=>t.isToday,style:{color:"mediumblue"}}]},drLk:function(t,e,n){"use strict";n.d(e,"h",(function(){return u})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"f",(function(){return b})),n.d(e,"e",(function(){return s})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return h})),n.d(e,"g",(function(){return p}));var r=n("czhI"),i=n.n(r);let a;const o=async t=>(void 0===a&&await(async()=>{await i.a.get("https://api.github.com/repos/nh60211as/TaiwanVtuberTrackingDataJson/commits/master").then((t=>{a={sha:t.data.sha,date:t.data.commit.author.date}})).catch((()=>{a={sha:"master"}})),i.a.defaults.baseURL=`https://cdn.statically.io/gh/nh60211as/TaiwanVtuberTrackingDataJson/${a.sha}/api/v0`})(),i.a.get(t)),u=t=>o(`/vtubers/${t}.json`),c=t=>o(`/groups/${t}/vtubers.json`),l=()=>o("/groups.json"),b=t=>o(`/trending-vtubers/${t}.json`),s=t=>o(`/growing-vtubers/${t}.json`),d=t=>o(`/debut-vtubers/${t}.json`),h=t=>o(`/graduate-vtubers/${t}.json`),p=t=>o(`/trending-videos/${t}.json`)},gJSz:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("2G8U"),i=n("+Ox3");const a=t=>{var e,n,a,o,u,c;return{id:t.id,profileImg:Object(i.a)({imgUrl:t.imgUrl}),name:t.name,channelLinks:Object(r.a)({YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,TwitchId:null===(n=t.Twitch)||void 0===n?void 0:n.id}),hasYouTube:void 0!==t.YouTube,YouTubeSubscriberCount:null===(a=t.YouTube)||void 0===a?void 0:a.subscriberCount,hasTwitch:void 0!==t.Twitch,TwitchFollowerCount:null!==(o=null===(u=t.Twitch)||void 0===u?void 0:u.followerCount)&&void 0!==o?o:0,group:null!==(c=t.group)&&void 0!==c?c:"",nationality:t.nationality,activity:t.activity}}},lRrp:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("2G8U"),i=n("+Ox3");const a=(t,e)=>{var n,a,o,u,c,l;return{id:t.id,isToday:t.debutDate===e,debutDate:t.debutDate,profileImg:Object(i.a)({imgUrl:t.imgUrl}),name:t.name,channelLinks:Object(r.a)({YouTubeId:null===(n=t.YouTube)||void 0===n?void 0:n.id,TwitchId:null===(a=t.Twitch)||void 0===a?void 0:a.id}),hasYouTube:void 0!==t.YouTube,YouTubeSubscriberCount:null===(o=t.YouTube)||void 0===o?void 0:o.subscriberCount,hasTwitch:void 0!==t.Twitch,TwitchFollowerCount:null!==(u=null===(c=t.Twitch)||void 0===c?void 0:c.followerCount)&&void 0!==u?u:0,group:null!==(l=t.group)&&void 0!==l?l:"",nationality:t.nationality,activity:t.activity}}}}]);
//# sourceMappingURL=route-home.chunk.60610.esm.js.map