(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{3845:function(t,n,e){"use strict";var i=e(5318);n.Z=void 0;var r=i(e(4938)),o=e(5893),a=(0,r.default)((0,o.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");n.Z=a},9548:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/competitions",function(){return e(6855)}])},1541:function(t,n,e){"use strict";e.d(n,{e:function(){return l},r:function(){return h}});var i=e(8520),r=e.n(i),o=e(5295),a=e(6967),c=e(7686),s=e(546);function u(t,n,e,i,r,o,a){try{var c=t[o](a),s=c.value}catch(u){return void e(u)}c.done?n(s):Promise.resolve(s).then(i,r)}function d(t){return function(){var n=this,e=arguments;return new Promise((function(i,r){var o=t.apply(n,e);function a(t){u(o,i,r,a,c,"next",t)}function c(t){u(o,i,r,a,c,"throw",t)}a(void 0)}))}}var l=(0,o.hg)("admin/competitions/",d(r().mark((function t(n,e){var i,o;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=e.dispatch)((0,c.kv)(!1)),i((0,c.hb)(null)),i((0,c.LK)(null)),t.prev=4,t.next=7,a.Z.get("/competition/result/");case 7:o=t.sent.data,i((0,c.LK)(o)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),i((0,c.hb)(s.L.ERROR_500));case 14:return t.prev=14,i((0,c.kv)(!0)),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[4,11,14,17]])})))),h=(0,o.hg)("admin/competition/participation",d(r().mark((function t(n,e){var i,o;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=e.dispatch)((0,c.bC)(!1)),i((0,c.Nu)(null)),i((0,c.Kr)(null)),t.prev=4,t.next=7,a.Z.get("/competition/result/".concat(n));case 7:o=t.sent.data,i((0,c.Nu)(o)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),i((0,c.Kr)(s.L.ERROR_500));case 14:return t.prev=14,i((0,c.bC)(!0)),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[4,11,14,17]])}))))},8531:function(t,n,e){"use strict";var i=e(5893),r=e(6242),o=e(4267),a=e(5861),c=e(7357),s=e(1057),u=e(9874),d=e(3730),l=e(6010),h=e(3845),p=e(2344),f=e(8582),m=(0,u.Z)({card:{height:p.W.card.height,width:"100%",background:p.W.card.background,display:"grid",gridTemplateColumns:"auto 1fr"},img:{width:p.W.img.width,height:"100%",objectFit:"cover"},cardContent:{width:"100%",position:"relative",padding:(0,d.B)(10,14),"&:last-child":{padding:(0,d.B)(10,14)}},authorTitle:{margin:"".concat((0,d.B)(5,6)," 0")},buttonHolder:{display:"flex",alignItems:"center",gridColumnGap:p.W.buttonHolder.gridColumnGap,marginTop:(0,d.B)(3,5)},button:{fontSize:(0,d.B)(10,12),borderRadius:"3px",padding:"".concat((0,d.B)(2,3)," ").concat((0,d.B)(4,5)),textTransform:"none"},questionCountBtn:{borderRadius:"3px"},passTheTestBtn:{borderRadius:"3px"},lockIcon:{fontSize:(0,d.B)(22,24),position:"absolute",right:4,bottom:4,color:"#C8C8C8"}});n.Z=function(t){var n=t.item,e=t.isAvailable,u=t.showDate,p=t.handleStartTest,g=t.buttonText,x=void 0===g?"\u0422\u0435\u0441\u0442 \u0442\u0430\u043f\u0448\u044b\u0440\u0443\u0443":g,v=m();return(0,i.jsxs)(r.Z,{className:v.card,children:[(0,i.jsx)("img",{src:n.book.poster,className:v.img}),(0,i.jsxs)(o.Z,{className:v.cardContent,children:[(0,i.jsx)(a.Z,{component:"h4",fontSize:(0,d.B)(12,14),fontWeight:"600",children:n.book.title}),(0,i.jsxs)(a.Z,{className:v.authorTitle,component:"p",fontSize:(0,d.B)(10,12),fontWeight:"400",children:["\u0410\u0432\u0442\u043e\u0440: ",n.book.author]}),(0,i.jsxs)(c.Z,{className:v.buttonHolder,children:[(0,i.jsxs)(s.Z,{variant:"contained",className:(0,l.Z)(v.questionCountBtn,v.button),children:[n.questions_count," \u0441\u0443\u0440\u043e\u043e"]}),(0,i.jsx)(s.Z,{onClick:p,variant:"outlined",className:(0,l.Z)(v.questionCountBtn,v.button),children:x})]}),u?(0,i.jsxs)(a.Z,{marginTop:(0,d.B)(5,7),fontSize:(0,d.B)(10,12),fontWeight:"500",color:"quaternary",children:["\u0414\u0430\u0442\u0430: ",(0,f.Z)(new Date(n.startTime),"yyyy-MM-dd")]}):null,e?n.participation?(0,i.jsx)(h.Z,{className:v.lockIcon}):null:(0,i.jsx)(h.Z,{className:v.lockIcon})]})]})}},9649:function(t,n,e){"use strict";var i=e(5893),r=e(6242),o=e(8078),a=e(4267),c=e(7357),s=e(9874),u=e(2344),d=(0,s.Z)({card:{width:"100%",height:u.W.card.height,background:u.W.card.background,display:"grid",gridTemplateColumns:"auto 1fr"}});n.Z=function(){var t=d();return(0,i.jsxs)(r.Z,{className:t.card,children:[(0,i.jsx)(o.Z,{variant:"rectangular",width:u.W.img.width,height:"100%"}),(0,i.jsxs)(a.Z,{sx:{width:"100%",height:"100%"},children:[(0,i.jsx)(o.Z,{variant:"rectangular",width:"60%",height:20}),(0,i.jsx)(o.Z,{sx:{my:"5px"},variant:"rectangular",width:"70%",height:20}),(0,i.jsxs)(c.Z,{sx:{display:"flex",gridColumnGap:u.W.buttonHolder.gridColumnGap},children:[(0,i.jsx)(o.Z,{width:65,height:40}),(0,i.jsx)(o.Z,{width:100,height:40})]})]})]})}},2344:function(t,n,e){"use strict";e.d(n,{W:function(){return r}});var i=e(3730),r={card:{height:(0,i.B)(120,140),background:"#028FA30D"},img:{width:(0,i.B)(80,100)},buttonHolder:{gridColumnGap:(0,i.B)(4,6)}}},5306:function(t,n,e){"use strict";var i=e(5893),r=e(3730),o=e(9769),a=e(7357),c=e(5861);n.Z=function(t){var n=t.message;return(0,i.jsxs)(a.Z,{sx:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"".concat((0,r.B)(20,30)," ").concat((0,r.B)(10,15))},children:[(0,i.jsx)(o.Z,{sx:{fontSize:(0,r.B)(40,60),color:"primary.main"}}),(0,i.jsx)(c.Z,{sx:{mt:(0,r.B)(4,6)},textAlign:"center",fontWeight:"400",fontSize:(0,r.B)(15,17),color:"quaternary",children:n})]})}},9470:function(t,n,e){"use strict";var i=e(5893),r=e(5617),o=e(4373),a=e(7294),c=e(1163),s=e(5282);n.Z=function(t){var n=t.Children,e=(0,c.useRouter)(),u=(0,r.v9)(o.H);return u.profile.is_staff?((0,a.useEffect)((function(){u.profile.is_staff||e.push(s.UI[s.Su.INDEX])}),[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n,{})})):""}},6855:function(t,n,e){"use strict";e.r(n);var i=e(5893),r=e(7948),o=e(7357),a=e(5481),c=e(9470),s=e(3730),u=e(9874),d=e(5282),l=e(6010),h=e(7294),p=e(5617),f=e(7122),m=e(8531),g=e(9649),x=e(5306),v=e(1541),b=e(1163);function Z(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function j(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},i=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),i.forEach((function(n){Z(t,n,e[n])}))}return t}var w=(0,s.B)(15,20),y=(0,s.B)(10,15),B=(0,u.Z)((function(t){return{container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",paddingTop:w,paddingBottom:w},gridWrapper:j({},d.mi,{paddingTop:y,paddingBottom:y})}})),C=function(){var t=B(),n=(0,b.useRouter)(),e=(0,p.I0)(),a=(0,p.v9)(f.R);(0,h.useEffect)((function(){e((0,v.e)())}),[]);var c=(0,h.useMemo)((function(){return{single:a.competitionsLoaded&&!a.competitionsError&&0===a.competitions.length||a.competitionsLoaded&&a.competitionsError}}),[a.competitionsLoaded,a.competitionsError,a.competitions]);return(0,i.jsx)(r.Z,{maxWidth:"lg",children:(0,i.jsx)(o.Z,{className:(0,l.Z)(t.gridWrapper,c),children:a.competitionsLoaded?a.competitionsError?(0,i.jsx)(x.Z,{message:a.competitionsError}):a.competitions.length?a.competitions.map((function(t){return(0,i.jsx)(m.Z,{buttonText:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0442\u0430\u0440",isAvailable:!0,item:t,handleStartTest:function(){n.push({pathname:"/admin/competition/[id]",query:{id:t.id}})}},t.id)})):(0,i.jsx)(x.Z,{message:"\u041a\u043e\u043d\u043a\u0443\u0440\u0441\u0442\u0430\u0440 \u0436\u043e\u043a"}):Array(10).fill(0).map((function(t,n){return(0,i.jsx)(g.Z,{},n)}))})})},k=function(){return(0,i.jsx)(c.Z,{Children:C})};n.default=function(){return(0,i.jsx)(a.Z,{Child:k})}},7122:function(t,n,e){"use strict";e.d(n,{R:function(){return i}});var i=function(t){return t.admin}}},function(t){t.O(0,[562,386,481,774,888,179],(function(){return n=9548,t(t.s=n);var n}));var n=t.O();_N_E=n}]);