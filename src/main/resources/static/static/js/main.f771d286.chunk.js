(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,c){},32:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(26),r=c.n(s),l=c(9),i=c(2),o=c(11),a=(c(32),c(0)),d=function(e){var t=e.headersName,c=e.children;return Object(a.jsxs)("table",{className:"common-table",children:[Object(a.jsx)("thead",{children:Object(a.jsx)("tr",{children:t.map((function(e,t){return Object(a.jsx)("td",{className:"common-table-header-column",children:e},t)}))})}),Object(a.jsx)("tbody",{children:c})]})},j=function(e){var t=e.children;return Object(a.jsx)("td",{className:"common-table-column",children:t})},b=function(e){var t=e.children;return Object(a.jsx)("tr",{className:"common-table-row",children:t})},u=c(14),h=c.n(u),O=(c(25),function(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),s=c[0],r=c[1],i=Object(n.useState)(!1),u=Object(o.a)(i,2);u[0],u[1];Object(n.useEffect)((function(){O()}),[]);var O=function(){h.a.get("http://localhost:8000/api/getInquerys").then((function(e){r(e.data.response)})).catch((function(e){console.log(e)}))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"title",children:"\uc0c1\ub2f4\uc0ac \ubb38\uc758 \ubaa9\ub85d"}),Object(a.jsx)(d,{headersName:["\uae00\ubc88\ud638","\uc720\uc800ID","\uc81c\ubaa9","\uc0c1\ub2f4\uc0acID","\ub4f1\ub85d\uc77c"],children:s?s.map((function(e,t){return Object(a.jsxs)(b,{children:[Object(a.jsx)(j,{children:e.id}),Object(a.jsx)(j,{children:e.userId}),Object(a.jsx)(j,{children:Object(a.jsx)(l.b,{to:{pathname:"/PostView",state:{userId:e.userId,title:e.title,content:e.content,counselorId:e.counselorId,createdAt:e.createdAt,updatedAt:e.updatedAt}},children:e.title})}),Object(a.jsx)(j,{children:null==e.counselorId?Object(a.jsx)("button",{onClick:function(){return t={inqueryId:e.id,counselorId:e.userId},void(window.confirm("\ud574\ub2f9 \ubb38\uc758\uae00\uc758 \uc9c0\uc815 \uc0c1\ub2f4\uc0ac\ub85c \uc120\ud0dd\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&h.a.patch("http://localhost:8000/api/inqueryChoice/".concat(t.inqueryId),{inqueryId:t.inqueryId,conselorId:t.counselorId},{headers:{"X-USER-ID":t.counselorId}}).then((function(e){O()})).catch((function(e){console.log(e)})));var t},children:"\uc5c6\uc74c"}):e.counselorId}),Object(a.jsx)(j,{children:e.createdAt})]},t)})):""})]})}),x=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(O,{})})},m=function(e){var t=e.history,c=e.location.state,s=e.match,r=Object(n.useState)({}),l=Object(o.a)(r,2),i=l[0],d=l[1];c.userId,c.title,c.content,c.counselorId,c.createdAt,c.updatedAt,s.params.no;return console.log(s),Object(n.useEffect)((function(){d(c)}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{align:"center",children:"\uac8c\uc2dc\uae00 \uc0c1\uc138\uc815\ubcf4"}),Object(a.jsxs)("div",{className:"post-view-wrapper",children:[i?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"post-view-row",children:[Object(a.jsx)("label",{children:"\uac8c\uc2dc\uae00 \ubc88\ud638"}),Object(a.jsx)("label",{children:i.id})]}),Object(a.jsxs)("div",{className:"post-view-row",children:[Object(a.jsx)("label",{children:"\uc81c\ubaa9"}),Object(a.jsx)("label",{children:i.title})]}),Object(a.jsxs)("div",{className:"post-view-row",children:[Object(a.jsx)("label",{children:"\uc791\uc131\uc790 ID"}),Object(a.jsx)("label",{children:i.userId})]}),Object(a.jsxs)("div",{className:"post-view-row",children:[Object(a.jsx)("label",{children:"\uc0c1\ub2f4\uc0ac ID"}),Object(a.jsx)("label",{children:i.counselorId})]}),Object(a.jsxs)("div",{className:"post-view-row",children:[Object(a.jsx)("label",{children:"\uc791\uc131\uc77c"}),Object(a.jsx)("label",{children:i.createdAt})]}),Object(a.jsxs)("div",{className:"post-view-row",children:[Object(a.jsx)("label",{children:"\ub0b4\uc6a9"}),Object(a.jsx)("div",{children:i.content})]})]}):"\ud574\ub2f9 \uac8c\uc2dc\uae00\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",Object(a.jsx)("button",{className:"post-view-go-list-btn",onClick:function(){return t.goBack()},children:"\ubaa9\ub85d\uc73c\ub85c \ub3cc\uc544\uac00\uae30"})]})]})};var p=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(l.a,{children:[Object(a.jsx)(i.a,{exact:!0,path:"/postView",component:m}),Object(a.jsx)(i.a,{exact:!0,path:"/",component:x})]})})},f=function(){return Object(a.jsx)(l.a,{children:Object(a.jsx)(p,{})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,l=t.getTTFB;c(e),n(e),s(e),r(e),l(e)}))};r.a.render(Object(a.jsx)(f,{}),document.getElementById("root")),v()}},[[60,1,2]]]);
//# sourceMappingURL=main.f771d286.chunk.js.map