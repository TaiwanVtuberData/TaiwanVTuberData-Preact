(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+Ox3":function(t,e,n){"use strict";var r=n("hosL"),o="profileImg__DvgtD";e.a=function(t){var e;return Object(r.g)("img",{class:o,src:null!==(e=t.imgUrl)&&void 0!==e?e:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy"})}},"8r9F":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i}));var r=function(t){return t.toString().padStart(2,"0")},o=function(t,e){var n=t.getTimezoneOffset()/60+e;return t.setTime(t.getTime()+60*n*60*1e3),t.getFullYear()+"-"+r(t.getMonth()+1)+"-"+r(t.getDate())},i=function(t){return t.getFullYear()+"-"+r(t.getMonth()+1)+"-"+r(t.getDate())+" "+r(t.getHours())+":"+r(t.getMinutes())+":"+r(t.getSeconds())}},L9Wd:function(t,e,n){"use strict";var r=n("hosL"),o="textField__bDpXR",i="button__maFzS";e.a=function(t){return Object(r.g)("div",null,Object(r.g)("input",{type:"text",class:o,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(r.g)("button",{type:"button",class:i,onClick:t.onClear},"X"))}},L9y4:function(t,e){"use strict";e.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(248, 148, 6, 0.9)",color:"white","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,n){"use strict";var r=n("L9y4");e.a=function(){return{columns:[],data:[],conditionalRowStyles:r.a}}},drLk:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){function a(t){r(c,o,i,a,u,"next",t)}function u(t){r(c,o,i,a,u,"throw",t)}var c=t.apply(e,n);a(void 0)}))}}n.d(e,"h",(function(){return s})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"f",(function(){return g})),n.d(e,"e",(function(){return p})),n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return v})),n.d(e,"g",(function(){return h}));var i,a=n("czhI"),u=n.n(a),c=function(){var t=o((function*(){yield u.a.get("https://api.github.com/repos/nh60211as/TaiwanVtuberTrackingDataJson/commits/master").then((function(t){i={sha:t.data.sha,date:t.data.commit.author.date}})).catch((function(){i={sha:"master"}})),u.a.defaults.baseURL="https://cdn.statically.io/gh/nh60211as/TaiwanVtuberTrackingDataJson/".concat(i.sha,"/api/v0")}));return function(){return t.apply(this,arguments)}}(),l=function(){var t=o((function*(t){return void 0===i&&(yield c()),u.a.get(t)}));return function(e){return t.apply(this,arguments)}}(),s=function(){return l("/vtubers.json")},d=function(t){return l("/groups/".concat(t,"/vtubers.json"))},f=function(){return l("/groups.json")},g=function(){return l("/popular-vtubers.json")},p=function(){return l("/growing-vtubers.json")},b=function(){return l("/debut-vtubers.json")},v=function(){return l("/graduate-vtubers.json")},h=function(t){return l("/trending-videos/".concat(t,".json"))}},uZiY:function(t,e){"use strict";e.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},zKu3:function(t,e,n){"use strict";function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.r(e);var u=n("hosL"),c=n("QRet"),l=n("OhSV"),s=n("ENxA"),d=n("drLk"),f=n("L9Wd"),g=n("LftB"),p=(n("GFNa"),n("uZiY")),b=n("+Ox3"),v="thumbnail__BdvoG",h=function(t){return Object(u.g)("a",{href:t.videoUrl,target:"_blank",rel:"noopener noreferrer"},Object(u.g)("img",{class:v,src:t.thumbnailUrl,loading:"lazy"}))},m=n("8r9F"),y="tipText__4DHD3",j="dropDown__6WU99",w=function(t){return Object(u.g)("div",null,Object(u.g)("span",{class:y},t.tipText),Object(u.g)("select",{class:j,value:t.value,onChange:t.onChange},void 0!==t.optionValue?t.optionValue.map((function(t){return Object(u.g)("option",{key:t.value,value:t.value},t.option)})):null))},O=n("jUMG");e.default=function(t){document.title="".concat(t.dictionary.header.trendingVideos," | ").concat(t.dictionary.header.title);var e=[{name:"#",width:"70px",wrap:!1,selector:function(t){return t.ranking},sortable:!0},{name:"",width:"75px",cell:function(t){return t.profileImg}},{name:Object(u.g)(l.b,{id:"table.displayName"},"Name"),maxWidth:"150px",wrap:!0,selector:function(t){return t.name}},{name:Object(u.g)(l.b,{id:"table.title"},"Title"),selector:function(t){return t.title},wrap:!0},{name:Object(u.g)(l.b,{id:"table.video"},"Video"),width:"200px",cell:function(t){return t.videoLink}},{name:Object(u.g)(l.b,{id:"table.viewCount"},"View Count"),selector:function(t){return t.viewCount},width:"80px",right:!0,sortable:!0},{name:Object(u.g)(l.b,{id:"table.uploadTime"},"Upload Time"),width:"175px",selector:function(t){return Object(m.a)(t.uploadTime)},sortable:!0}],n=i(Object(c.j)([]),2),a=n[0],v=n[1],y=i(Object(c.j)(""),2),j=y[0],A=y[1],x=i(Object(c.j)(""),2),T=x[0],C=x[1],L=i(Object(c.j)(!1),2),k=L[0],D=L[1],U=a.filter((function(t){return t.name&&t.name.toLowerCase().includes(j.toLowerCase())})).filter((function(t){return void 0===t.title||t.title.toLowerCase().includes(T.toLowerCase())})),V=Object(c.g)((function(){var e=[{option:Object(u.g)(l.b,{id:"table.noDuplicate"},"One video per VTuber"),value:"no-duplicate"},{option:Object(u.g)(l.b,{id:"table.allVideos"},"All videos"),value:"all"}];return Object(u.g)("div",{class:p.a.searchBarGroup},Object(u.g)(w,{tipText:"選項",value:t.modifier,optionValue:e,onChange:function(t){console.log("e",t.target.value),window.location.href="".concat(O.a,"/trending-videos/").concat(t.target.value)}}),Object(u.g)(f.a,{placeholderText:t.dictionary.table.searchByDisplayName,onFilter:function(t){return A(t.target.value)},onClear:function(){j&&(D(!k),A(""))},filterText:j}),Object(u.g)(f.a,{placeholderText:t.dictionary.table.searchByTitle,onFilter:function(t){return C(t.target.value)},onClear:function(){T&&(D(!k),C(""))},filterText:T}))}),[j,T,k,t.modifier,t.dictionary]),B=i(Object(c.j)(!0),2),_=B[0],F=B[1],S=function(){var e,n=(e=function*(){yield d.g(t.modifier).then((function(t){v(t.data.videos.map((function(t){return t})).sort((function(t,e){return e.viewCount-t.viewCount})).map((function(t,e){return function(t,e){return{id:t.id,profileImg:Object(b.a)({imgUrl:t.imgUrl}),name:t.name,title:t.title,videoLink:h({thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl}),viewCount:t.viewCount,uploadTime:new Date(t.uploadTime),ranking:e}}(t,e+1)}))),F(!1)}))},function(){var t=this,n=arguments;return new Promise((function(r,i){function a(t){o(c,r,i,a,u,"next",t)}function u(t){o(c,r,i,a,u,"throw",t)}var c=e.apply(t,n);a(void 0)}))});return function(){return n.apply(this,arguments)}}();Object(c.d)((function(){S()}),[t.modifier]);return Object(u.g)(u.b,null,Object(u.g)("h1",null,Object(u.g)(l.b,{id:"header.trendingVideos"},"Trending Videos")),Object(u.g)(s.a,r({},g.a,{columns:e,data:U,customStyles:{table:{style:{maxHeight:"80vh"}},rows:{style:{minHeight:"36px"}},headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}},fixedHeader:!0,progressComponent:t.dictionary.table.loading,progressPending:_,subHeader:!0,subHeaderComponent:V})))}}}]);
//# sourceMappingURL=route-TrendingVideos.chunk.5f657.js.map