(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[214],{3845:function(t,e,n){"use strict";var r=n(5318);e.Z=void 0;var i=r(n(4938)),a=n(5893),o=(0,i.default)((0,a.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");e.Z=o},6970:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/competitions",function(){return n(6412)}])},1819:function(t,e,n){"use strict";n.d(e,{Ru:function(){return d},GS:function(){return h},MP:function(){return m},qL:function(){return f},zQ:function(){return g},p_:function(){return x}});var r=n(8520),i=n.n(r),a=n(5295),o=n(6967),c=n(5198),s=n(546),u=n(2702);function p(t,e,n,r,i,a,o){try{var c=t[a](o),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,i)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function o(t){p(a,r,i,o,c,"next",t)}function c(t){p(a,r,i,o,c,"throw",t)}o(void 0)}))}}var d=(0,a.hg)("competition/user/",l(i().mark((function t(e,n){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=n.dispatch)((0,c.Be)(!1)),t.prev=2,t.next=5,o.Z.get("/competition/mine/");case 5:a=t.sent.data,r((0,c.N)(a)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),r((0,c.LT)(s.L.ERROR_500));case 12:return t.prev=12,r((0,c.Be)(!0)),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])})))),h=(0,a.hg)("competition/detail/",l(i().mark((function t(e,n){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=n.dispatch)((0,c.k2)(!1)),t.prev=2,t.next=5,o.Z.get("/competition/mine/".concat(e));case 5:a=t.sent.data,r((0,c.L4)(a)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),t.t0.response?404===t.t0.response.status?r((0,c.mC)(s.T.DETAIL_COMPETITION_ERROR_404)):r((0,c.mC)(s.L.ERROR_500)):(t.t0.request&&t.t0.response,r((0,c.mC)(s.L.ERROR_500)));case 12:return t.prev=12,r((0,c.k2)(!0)),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])})))),m=(0,a.hg)("participation/set/",l(i().mark((function t(e,n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=n.dispatch)((0,u.pz)(!1)),r((0,u.FY)(!1)),r((0,u.mA)(null)),t.prev=4,t.next=7,o.Z.post("/competition/participation/",e);case 7:r((0,u.FY)(!0)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),t.t0.response&&403===t.t0.response.status?r((0,u.mA)(s.T.ALREADY_PARTICIPATED)):r((0,u.mA)(s.L.ERROR_500));case 13:return t.prev=13,r((0,u.pz)(!0)),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[4,10,13,16]])})))),f=(0,a.hg)("participation/update/",l(i().mark((function t(e,n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=n.dispatch)((0,u.oX)(!1)),t.prev=2,t.next=5,o.Z.patch("/competition/participation/",e);case 5:r((0,u.pW)(!0)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),r((0,u.tf)(s.L.ERROR_500));case 11:return t.prev=11,r((0,u.oX)(!0)),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[2,8,11,14]])})))),g=(0,a.hg)("competition/public/",l(i().mark((function t(e,n){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=n.dispatch)((0,c.rQ)(!1)),r((0,c.ET)(null)),r((0,c.sW)([])),t.prev=4,t.next=7,o.Z.get(e);case 7:a=t.sent.data,r((0,c.sW)(a)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),r((0,c.ET)(s.L.ERROR_500));case 14:return t.prev=14,r((0,c.rQ)(!0)),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[4,11,14,17]])})))),x=(0,a.hg)("competition/search/",l(i().mark((function t(e,n){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=n.dispatch)((0,c.G2)(!1)),t.prev=2,t.next=5,o.Z.get("/competition/search/?search=".concat(e));case 5:a=t.sent.data,r((0,c.Bz)(a)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),r((0,c.rq)(s.L.ERROR_500));case 12:return t.prev=12,r((0,c.G2)(!0)),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])}))))},8531:function(t,e,n){"use strict";var r=n(5893),i=n(6242),a=n(4267),o=n(5861),c=n(7357),s=n(1057),u=n(9874),p=n(3730),l=n(6010),d=n(3845),h=n(2344),m=n(8582),f=(0,u.Z)({card:{height:h.W.card.height,width:"100%",background:h.W.card.background,display:"grid",gridTemplateColumns:"auto 1fr"},img:{width:h.W.img.width,height:"100%",objectFit:"cover"},cardContent:{width:"100%",position:"relative",padding:(0,p.B)(10,14),"&:last-child":{padding:(0,p.B)(10,14)}},authorTitle:{margin:"".concat((0,p.B)(5,6)," 0")},buttonHolder:{display:"flex",alignItems:"center",gridColumnGap:h.W.buttonHolder.gridColumnGap,marginTop:(0,p.B)(3,5)},button:{fontSize:(0,p.B)(10,12),borderRadius:"3px",padding:"".concat((0,p.B)(2,3)," ").concat((0,p.B)(4,5)),textTransform:"none"},questionCountBtn:{borderRadius:"3px"},passTheTestBtn:{borderRadius:"3px"},lockIcon:{fontSize:(0,p.B)(22,24),position:"absolute",right:4,bottom:4,color:"#C8C8C8"}});e.Z=function(t){var e=t.item,n=t.isAvailable,u=t.showDate,h=t.handleStartTest,g=t.buttonText,x=void 0===g?"\u0422\u0435\u0441\u0442 \u0442\u0430\u043f\u0448\u044b\u0440\u0443\u0443":g,v=f();return(0,r.jsxs)(i.Z,{className:v.card,children:[(0,r.jsx)("img",{src:e.book.poster,className:v.img}),(0,r.jsxs)(a.Z,{className:v.cardContent,children:[(0,r.jsx)(o.Z,{component:"h4",fontSize:(0,p.B)(12,14),fontWeight:"600",children:e.book.title}),(0,r.jsxs)(o.Z,{className:v.authorTitle,component:"p",fontSize:(0,p.B)(10,12),fontWeight:"400",children:["\u0410\u0432\u0442\u043e\u0440: ",e.book.author]}),(0,r.jsxs)(c.Z,{className:v.buttonHolder,children:[(0,r.jsxs)(s.Z,{variant:"contained",className:(0,l.Z)(v.questionCountBtn,v.button),children:[e.questions_count," \u0441\u0443\u0440\u043e\u043e"]}),(0,r.jsx)(s.Z,{onClick:h,variant:"outlined",className:(0,l.Z)(v.questionCountBtn,v.button),children:x})]}),u?(0,r.jsxs)(o.Z,{marginTop:(0,p.B)(5,7),fontSize:(0,p.B)(10,12),fontWeight:"500",color:"quaternary",children:["\u0414\u0430\u0442\u0430: ",(0,m.Z)(new Date(e.startTime),"yyyy-MM-dd")]}):null,n?e.participation?(0,r.jsx)(d.Z,{className:v.lockIcon}):null:(0,r.jsx)(d.Z,{className:v.lockIcon})]})]})}},9649:function(t,e,n){"use strict";var r=n(5893),i=n(6242),a=n(8078),o=n(4267),c=n(7357),s=n(9874),u=n(2344),p=(0,s.Z)({card:{width:"100%",height:u.W.card.height,background:u.W.card.background,display:"grid",gridTemplateColumns:"auto 1fr"}});e.Z=function(){var t=p();return(0,r.jsxs)(i.Z,{className:t.card,children:[(0,r.jsx)(a.Z,{variant:"rectangular",width:u.W.img.width,height:"100%"}),(0,r.jsxs)(o.Z,{sx:{width:"100%",height:"100%"},children:[(0,r.jsx)(a.Z,{variant:"rectangular",width:"60%",height:20}),(0,r.jsx)(a.Z,{sx:{my:"5px"},variant:"rectangular",width:"70%",height:20}),(0,r.jsxs)(c.Z,{sx:{display:"flex",gridColumnGap:u.W.buttonHolder.gridColumnGap},children:[(0,r.jsx)(a.Z,{width:65,height:40}),(0,r.jsx)(a.Z,{width:100,height:40})]})]})]})}},2344:function(t,e,n){"use strict";n.d(e,{W:function(){return i}});var r=n(3730),i={card:{height:(0,r.B)(120,140),background:"#028FA30D"},img:{width:(0,r.B)(80,100)},buttonHolder:{gridColumnGap:(0,r.B)(4,6)}}},5306:function(t,e,n){"use strict";var r=n(5893),i=n(3730),a=n(9769),o=n(7357),c=n(5861);e.Z=function(t){var e=t.message;return(0,r.jsxs)(o.Z,{sx:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"".concat((0,i.B)(20,30)," ").concat((0,i.B)(10,15))},children:[(0,r.jsx)(a.Z,{sx:{fontSize:(0,i.B)(40,60),color:"primary.main"}}),(0,r.jsx)(c.Z,{sx:{mt:(0,i.B)(4,6)},textAlign:"center",fontWeight:"400",fontSize:(0,i.B)(15,17),color:"quaternary",children:e})]})}},6412:function(t,e,n){"use strict";n.r(e);var r=n(5893),i=n(5481),a=n(44),o=n(7948),c=n(1703),s=n(7357),u=n(5617),p=n(9505),l=n(5282),d=n(5198),h=n(9874),m=n(3730),f=n(6010),g=n(7294),x=n(1819),v=n(8531),b=n(9649),Z=n(5306),C=n(6473);function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){w(t,e,n[e])}))}return t}var B=(0,m.B)(15,20),T=(0,m.B)(10,15),k=(0,h.Z)((function(t){return{container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",paddingTop:B,paddingBottom:B},tabs:{minHeight:0,"& .MuiTabs-indicator":{zIndex:0,height:"100%"},"& .MuiTabs-flexContainer":{gridColumnGap:(0,m.B)(7,15)}},tab:{minHeight:0,zIndex:1,border:"1px solid ".concat(t.palette.primary.main),transition:"0.3s ease",color:t.palette.primary.main,fontSize:(0,m.B)(10,13),fontWeight:"500",textTransform:"none",padding:"".concat((0,m.B)(8,10)," ").concat((0,m.B)(13,22)),"@media (max-width: 500px)":{maxWidth:"150px"},"&.Mui-selected":{color:t.palette.fivefold.main}},gridWrapper:j({},l.mi,{paddingTop:T,paddingBottom:T})}})),y=function(){var t=k(),e=(0,u.I0)(),n=(0,u.v9)(p.s);(0,g.useEffect)((function(){e((0,x.zQ)(n.selectedTab.path))}),[n.selectedTab]);var i=(0,g.useMemo)((function(){return l.P1.map((function(e){return(0,r.jsx)(a.Z,{className:t.tab,value:e.id,label:e.title},e.id)}))}),[]),h=(0,g.useMemo)((function(){return{single:n.publicCompetitionsLoaded&&!n.publicCompetitionsError&&0===n.publicCompetitions.length||n.publicCompetitionsLoaded&&n.publicCompetitionsError}}),[n.publicCompetitionsLoaded,n.publicCompetitionsError,n.publicCompetitions]);return(0,r.jsxs)(o.Z,{maxWidth:"lg",className:t.container,children:[(0,r.jsx)(c.Z,{className:t.tabs,textColor:"primary",indicatorColor:"primary",variant:"scrollable",value:n.selectedTab.id,onChange:function(t,r){if(n.publicCompetitionsLoaded){var i=l.P1.find((function(t){return t.id===r}));e((0,d.KY)(i))}},children:i}),(0,r.jsx)(s.Z,{className:(0,f.Z)(t.gridWrapper,h),children:n.publicCompetitionsLoaded?n.publicCompetitionsError?(0,r.jsx)(Z.Z,{message:"\u041a\u043e\u043d\u043a\u0443\u0440\u0441\u0442\u0430\u0440 \u0436\u043e\u043a"}):n.publicCompetitions.length?n.publicCompetitions.map((function(t){return(0,r.jsx)(v.Z,{showDate:!0,handleStartTest:function(){t.is_bought||e((0,C.dY)(!0))},item:t},t.id)})):(0,r.jsx)(Z.Z,{message:"\u041a\u043e\u043d\u043a\u0443\u0440\u0441\u0442\u0430\u0440 \u0436\u043e\u043a"}):Array(10).fill(0).map((function(t,e){return(0,r.jsx)(b.Z,{},e)}))})]})};e.default=function(){return(0,r.jsx)(i.Z,{Child:y})}},9505:function(t,e,n){"use strict";n.d(e,{s:function(){return r}});var r=function(t){return t.competition}}},function(t){t.O(0,[562,386,481,774,888,179],(function(){return e=6970,t(t.s=e);var e}));var e=t.O();_N_E=e}]);