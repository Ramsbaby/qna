(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{31:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(24),s=n.n(r),a=n(9),l=n(2),o=n(11),i=(n(31),n(0)),j=function(e){var t=e.headersName,n=e.children;return Object(i.jsxs)("table",{className:"common-table",children:[Object(i.jsx)("thead",{children:Object(i.jsx)("tr",{children:t.map((function(e,t){return Object(i.jsx)("td",{className:"common-table-header-column",children:e},t)}))})}),Object(i.jsx)("tbody",{children:n})]})},d=function(e){var t=e.children;return Object(i.jsx)("td",{className:"common-table-column",children:t})},b=function(e){var t=e.children;return Object(i.jsx)("tr",{className:"common-table-row",children:t})},u=n(25),h=n.n(u),O=function(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),r=n[0],s=n[1];return Object(c.useEffect)((function(){h.a.get("http://localhost:8000/api/getInquerys").then((function(e){s(e.data.response)})).catch((function(e){console.log(e)}))}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(j,{headersName:["\uc720\uc800ID","\uc81c\ubaa9","\uc0c1\ub2f4\uc0acID","\ub4f1\ub85d\uc77c"],children:r?r.map((function(e,t){return Object(i.jsxs)(b,{children:[Object(i.jsx)(d,{children:e.userId}),Object(i.jsx)(d,{children:Object(i.jsx)(a.b,{to:{pathname:"/PostView",state:{userId:e.userId,title:e.title,content:e.content,counselorId:e.counselorId,createdAt:e.createdAt,updatedAt:e.updatedAt}},children:e.title})}),Object(i.jsx)(d,{children:null==e.counselorId?"\uc5c6\uc74c":e.counselorId}),Object(i.jsx)(d,{children:e.createdAt})]},t)})):""})})},x=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(O,{})})},m=[{no:1,title:"\uccab\ubc88\uc9f8 \uac8c\uc2dc\uae00\uc785\ub2c8\ub2e4.",content:"\uccab\ubc88\uc9f8 \uac8c\uc2dc\uae00 \ub0b4\uc6a9\uc785\ub2c8\ub2e4.",createDate:"2020-10-25",readCount:6},{no:2,title:"\ub450\ubc88\uc9f8 \uac8c\uc2dc\uae00\uc785\ub2c8\ub2e4.",content:"\ub450\ubc88\uc9f8 \uac8c\uc2dc\uae00 \ub0b4\uc6a9\uc785\ub2c8\ub2e4.",createDate:"2020-10-25",readCount:5},{no:3,title:"\uc138\ubc88\uc9f8 \uac8c\uc2dc\uae00\uc785\ub2c8\ub2e4.",content:"\uc138\ubc88\uc9f8 \uac8c\uc2dc\uae00 \ub0b4\uc6a9\uc785\ub2c8\ub2e4.",createDate:"2020-10-25",readCount:1},{no:4,title:"\ub124\ubc88\uc9f8 \uac8c\uc2dc\uae00\uc785\ub2c8\ub2e4.",content:"\ub124\ubc88\uc9f8 \uac8c\uc2dc\uae00 \ub0b4\uc6a9\uc785\ub2c8\ub2e4.",createDate:"2020-10-25",readCount:2},{no:5,title:"\ub2e4\uc12f\ubc88\uc9f8 \uac8c\uc2dc\uae00\uc785\ub2c8\ub2e4.",content:"\ub2e4\uc12f\ubc88\uc9f8 \uac8c\uc2dc\uae00 \ub0b4\uc6a9\uc785\ub2c8\ub2e4.",createDate:"2020-10-25",readCount:4}],f=(n(59),function(e){var t=e.history,n=(e.location,e.match),r=Object(c.useState)({}),s=Object(o.a)(r,2),a=s[0],l=s[1],j=n.params.no;return console.log(n),Object(c.useEffect)((function(){l(function(e){var t=m.filter((function(t){return t.no==e}));return 1==t.length?t[0]:null}(j))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{align:"center",children:"\uac8c\uc2dc\uae00 \uc0c1\uc138\uc815\ubcf4"}),Object(i.jsxs)("div",{className:"post-view-wrapper",children:[a?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"post-view-row",children:[Object(i.jsx)("label",{children:"\uac8c\uc2dc\uae00 \ubc88\ud638"}),Object(i.jsx)("label",{children:a.no})]}),Object(i.jsxs)("div",{className:"post-view-row",children:[Object(i.jsx)("label",{children:"\uc81c\ubaa9"}),Object(i.jsx)("label",{children:a.title})]}),Object(i.jsxs)("div",{className:"post-view-row",children:[Object(i.jsx)("label",{children:"\uc791\uc131\uc77c"}),Object(i.jsx)("label",{children:a.createDate})]}),Object(i.jsxs)("div",{className:"post-view-row",children:[Object(i.jsx)("label",{children:"\uc870\ud68c\uc218"}),Object(i.jsx)("label",{children:a.readCount})]}),Object(i.jsxs)("div",{className:"post-view-row",children:[Object(i.jsx)("label",{children:"\ub0b4\uc6a9"}),Object(i.jsx)("div",{children:a.content})]})]}):"\ud574\ub2f9 \uac8c\uc2dc\uae00\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",Object(i.jsx)("button",{className:"post-view-go-list-btn",onClick:function(){return t.goBack()},children:"\ubaa9\ub85d\uc73c\ub85c \ub3cc\uc544\uac00\uae30"})]})]})});var p=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(a.a,{children:[Object(i.jsx)(l.a,{exact:!0,path:"/postView",component:f}),Object(i.jsx)(l.a,{exact:!0,path:"/",component:x})]})})},v=function(){return Object(i.jsx)(a.a,{children:Object(i.jsx)(p,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};s.a.render(Object(i.jsx)(v,{}),document.getElementById("root")),g()}},[[60,1,2]]]);
//# sourceMappingURL=main.b881b18e.chunk.js.map