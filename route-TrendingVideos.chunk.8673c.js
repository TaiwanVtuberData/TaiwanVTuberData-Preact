(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+Ox3":function(t,e,n){"use strict";var r=n("hosL"),i="profileImg__DvgtD";e.a=function(t){var e;return Object(r.g)("img",{class:i,src:null!==(e=t.imgUrl)&&void 0!==e?e:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy"})}},L9Wd:function(t,e,n){"use strict";var r=n("hosL"),i="textField__bDpXR",o="button__maFzS";e.a=function(t){return Object(r.g)("div",null,Object(r.g)("input",{type:"text",class:i,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(r.g)("button",{type:"button",class:o,onClick:t.onClear},"X"))}},L9y4:function(t,e){"use strict";e.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(248, 148, 6, 0.9)",color:"white","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,n){"use strict";var r=n("L9y4");e.a=function(){return{columns:[],data:[],conditionalRowStyles:r.a}}},uZiY:function(t,e){"use strict";e.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},zKu3:function(t,e,n){"use strict";function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function i(t,e,n,r,i,o,a){try{var l=t[o](a),c=l.value}catch(t){return void n(t)}l.done?e(c):Promise.resolve(c).then(r,i)}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,l=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(t){l=!0,i=t}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.r(e);var l=n("hosL"),c=n("QRet"),u=n("OhSV"),d=n("ENxA"),s=n("drLk"),p=n("L9Wd"),f=n("LftB"),g=(n("GFNa"),n("uZiY")),b=n("+Ox3"),v="thumbnail__BdvoG",h=function(t){return Object(l.g)("a",{href:t.videoUrl,target:"_blank",rel:"noopener noreferrer"},Object(l.g)("img",{class:v,src:t.thumbnailUrl,loading:"lazy"}))},m=n("8r9F"),y="tipText__4DHD3",O="dropDown__6WU99",w=function(t){return Object(l.g)("div",null,Object(l.g)("span",{class:y},t.tipText),Object(l.g)("select",{class:O,value:t.value,onChange:t.onChange},void 0!==t.optionValue?t.optionValue.map((function(t){return Object(l.g)("option",{key:t.value,value:t.value},t.option)})):null))},j=n("jUMG");e.default=function(t){document.title="".concat(t.dictionary.header.trendingVideos," | ").concat(t.dictionary.header.title);var e=[{name:"#",width:"70px",wrap:!1,selector:function(t){return t.ranking},sortable:!0},{name:"",width:"75px",cell:function(t){return t.profileImg}},{name:Object(l.g)(u.c,{id:"table.displayName"},"Name"),maxWidth:"150px",wrap:!0,selector:function(t){return t.name}},{name:Object(l.g)(u.c,{id:"table.title"},"Title"),selector:function(t){return t.title},wrap:!0},{name:Object(l.g)(u.c,{id:"table.video"},"Video"),width:"200px",cell:function(t){return t.videoLink}},{name:Object(l.g)(u.c,{id:"table.viewCount"},"View Count"),selector:function(t){return t.viewCount},width:"80px",right:!0,sortable:!0},{name:Object(l.g)(u.c,{id:"table.uploadTime"},"Upload Time"),width:"175px",selector:function(t){return Object(m.a)(t.uploadTime)},sortable:!0}],n=o(Object(c.k)([]),2),a=n[0],v=n[1],y=o(Object(c.k)(""),2),O=y[0],A=y[1],x=o(Object(c.k)(""),2),C=x[0],L=x[1],T=o(Object(c.k)(!1),2),k=T[0],U=T[1],B=a.filter((function(t){return t.name&&t.name.toLowerCase().includes(O.toLowerCase())})).filter((function(t){return void 0===t.title||t.title.toLowerCase().includes(C.toLowerCase())})),_=Object(c.h)((function(){var e=[{option:Object(l.g)(u.c,{id:"table.noDuplicate"},"One video per VTuber"),value:"no-duplicate"},{option:Object(l.g)(u.c,{id:"table.allVideos"},"All videos"),value:"all"}];return Object(l.g)("div",{class:g.a.searchBarGroup},Object(l.g)(w,{tipText:t.dictionary.table.options,value:t.modifier,optionValue:e,onChange:function(t){console.log("e",t.target.value),window.location.href="".concat(j.a,"/trending-videos/").concat(t.target.value)}}),Object(l.g)(p.a,{placeholderText:t.dictionary.table.searchByDisplayName,onFilter:function(t){return A(t.target.value)},onClear:function(){O&&(U(!k),A(""))},filterText:O}),Object(l.g)(p.a,{placeholderText:t.dictionary.table.searchByTitle,onFilter:function(t){return L(t.target.value)},onClear:function(){C&&(U(!k),L(""))},filterText:C}))}),[O,C,k,t.modifier,t.dictionary]),D=o(Object(c.k)(!0),2),V=D[0],F=D[1],I=function(){var e,n=(e=function*(){yield s.g(t.modifier).then((function(t){v(t.data.videos.map((function(t){return t})).sort((function(t,e){return e.viewCount-t.viewCount})).map((function(t,e){return function(t,e){return{id:t.id,profileImg:Object(b.a)({imgUrl:t.imgUrl}),name:t.name,title:t.title,videoLink:h({thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl}),viewCount:t.viewCount,uploadTime:new Date(t.uploadTime),ranking:e}}(t,e+1)}))),F(!1)}))},function(){var t=this,n=arguments;return new Promise((function(r,o){function a(t){i(c,r,o,a,l,"next",t)}function l(t){i(c,r,o,a,l,"throw",t)}var c=e.apply(t,n);a(void 0)}))});return function(){return n.apply(this,arguments)}}();Object(c.d)((function(){I()}),[t.modifier]);return Object(l.g)(l.b,null,Object(l.g)("h1",null,Object(l.g)(u.c,{id:"header.trendingVideos"},"Trending Videos")),Object(l.g)(d.a,r({},f.a,{columns:e,data:B,customStyles:{table:{style:{maxHeight:"80vh"}},rows:{style:{minHeight:"36px"}},headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}},fixedHeader:!0,pagination:!0,paginationComponentOptions:t.dictionary.table.paginationOptions,progressComponent:Object(l.g)(u.c,{id:"table.loading"},"Loading..."),progressPending:V,subHeader:!0,subHeaderComponent:_})))}}}]);
//# sourceMappingURL=route-TrendingVideos.chunk.8673c.js.map