(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{13:function(e,t,c){},35:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(28),a=c.n(s),r=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))},o=c(3),i=c(12),l=c.n(i),j=c(15),u=c(2),d=c(10),b=(c(35),c(0)),h=function(e){var t=e.headersName,c=e.children;return Object(b.jsxs)("table",{className:"common-table",children:[Object(b.jsx)("thead",{children:Object(b.jsx)("tr",{children:t.map((function(e,t){return Object(b.jsx)("td",{className:"common-table-header-column",children:e},t)}))})}),Object(b.jsx)("tbody",{children:c})]})},O=function(e){var t=e.children;return Object(b.jsx)("td",{className:"common-table-column",children:t})},x=function(e){var t=e.children;return Object(b.jsx)("tr",{className:"common-table-row",children:t})},p=c(5),m=c.n(p),f=(c(13),function(e){var t=Object(n.useState)([]),c=Object(u.a)(t,2),s=c[0],a=c[1],r=JSON.parse(localStorage.getItem("userInfo")),o=function(){alert("\uc774\ubbf8 \ub2f4\ub2f9\uc790\uac00 \uc9c0\uc815\ub41c \ubb38\uc758\uac74\uc785\ub2c8\ub2e4.")};Object(n.useEffect)((function(){i()}),[]),function(e,t){var c=Object(n.useRef)();Object(n.useEffect)((function(){c.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){c.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){i()}),1e4);var i=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://localhost:8000/api/inquerys").then((function(e){a(e.data.response)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{className:"logoutBtn",onClick:function(){localStorage.removeItem("userInfo"),e.history.push("/")},children:"\ub85c\uadf8\uc544\uc6c3"}),Object(b.jsx)("div",{className:"title",children:"\uace0\uac1d \ubb38\uc758 \ubaa9\ub85d (\uc0c1\ub2f4\uc0ac \uc804\uc6a9)"}),Object(b.jsx)(h,{headersName:["\uae00\ubc88\ud638","\uace0\uac1dID","\uc81c\ubaa9","\uc0c1\ub2f4\uc0acID","\ub4f1\ub85d\uc77c","\ub2f5\ubcc0\ub4f1\ub85d"],children:s?s.map((function(e,t){return Object(b.jsxs)(x,{children:[Object(b.jsx)(O,{children:e.id}),Object(b.jsx)(O,{children:e.userId}),Object(b.jsx)(O,{children:Object(b.jsx)(d.b,{to:{pathname:"/PostView",state:{userId:e.userId,title:e.title,content:e.content,counselorId:e.counselorId,createdAt:e.createdAt,updatedAt:e.updatedAt}},children:e.title})}),Object(b.jsx)(O,{children:null==e.counselorId?Object(b.jsx)("button",{onClick:function(){return t={inqueryId:e.id},void(window.confirm("\ud574\ub2f9 \ubb38\uc758\uae00\uc758 \uc9c0\uc815 \uc0c1\ub2f4\uc0ac\ub85c \uc120\ud0dd\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&m.a.patch("http://localhost:8000/api/inqueryChoice/".concat(t.inqueryId),{inqueryId:t.inqueryId,conselorId:r.id},{headers:{"X-USER-ID":r.id}}).then((function(e){i()})).catch((function(e){console.log(e)})));var t},children:"\uc5c6\uc74c"}):Object(b.jsx)("div",{onClick:o,children:e.counselorId})}),Object(b.jsx)(O,{children:e.createdAt}),Object(b.jsx)(O,{children:null!==r&&e.counselorId===r.id?Object(b.jsx)(d.b,{to:{pathname:"/PostRegistCounselor",state:{inqueryId:e.id,userId:e.userId,title:e.title,content:e.content,counselorId:e.counselorId,createdAt:e.createdAt,updatedAt:e.updatedAt}},children:"\ub4f1\ub85d"}):"\ub4f1\ub85d\ubd88\uac00"})]},t)})):""})]})}),v=function(e){var t=Object(n.useState)([]),c=Object(u.a)(t,2),s=c[0],a=c[1];Object(n.useEffect)((function(){r()}),[]);var r=function(){m.a.get("http://localhost:8000/api/inquerys").then((function(e){a(e.data.response)})).catch((function(e){console.log(e)}))},o=function(){localStorage.removeItem("userInfo"),e.history.push("/")};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"topBtnDiv",children:[Object(b.jsx)("button",{onClick:o,children:"\uba54\uc778\ud654\uba74\uc73c\ub85c"}),Object(b.jsx)("button",{onClick:o,children:"\ubb38\uc758\uae00 \ud655\uc778"}),Object(b.jsx)("button",{onClick:function(){localStorage.removeItem("userInfo"),e.history.push("/PostRegistCustomer")},children:"\ubb38\uc758\uae00 \ub4f1\ub85d"})]}),Object(b.jsx)("div",{className:"title",children:"\uace0\uac1d \ubb38\uc758 \ubaa9\ub85d (\uace0\uac1d \uc804\uc6a9)"}),Object(b.jsx)(h,{headersName:["\uae00\ubc88\ud638","\uace0\uac1dID","\uc81c\ubaa9","\uc0c1\ub2f4\uc0acID","\ub4f1\ub85d\uc77c","\uc0c1\ub2f4\uc0ac \ub2f5\ubcc0"],children:s?s.map((function(e,t){return Object(b.jsxs)(x,{children:[Object(b.jsx)(O,{children:e.id}),Object(b.jsx)(O,{children:e.userId}),Object(b.jsx)(O,{children:Object(b.jsx)(d.b,{to:{pathname:"/PostView",state:{id:e.id,userId:e.userId,title:e.title,content:e.content,counselorId:e.counselorId,createdAt:e.createdAt,updatedAt:e.updatedAt}},children:e.title})}),Object(b.jsx)(O,{children:null==e.counselorId?"\uc5c6\uc74c":e.counselorId}),Object(b.jsx)(O,{children:e.createdAt}),Object(b.jsx)(O,{children:"N"===e.isAnswered?"\ub2f5\ubcc0\uc5c6\uc74c":Object(b.jsx)(d.b,{to:{pathname:"/PostView",state:{id:e.id,userId:e.userId,title:e.title,content:e.content,counselorId:e.counselorId,createdAt:e.createdAt,updatedAt:e.updatedAt}},children:"\ub2f5\ubcc0\ubcf4\uae30"})})]},t)})):""})]})},g=function(e){var t=e.history,c=e.location.state,s=(e.match,Object(n.useState)({})),a=Object(u.a)(s,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){o(c),console.log(c)}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{align:"center",children:"\uac8c\uc2dc\uae00 \uc0c1\uc138\uc815\ubcf4"}),Object(b.jsxs)("div",{className:"post-view-wrapper",children:[r?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\uac8c\uc2dc\uae00 \ubc88\ud638"}),Object(b.jsx)("label",{children:r.id})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"`\uc81c\ubaa9`"}),Object(b.jsx)("label",{children:r.title})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\uc791\uc131\uc790 ID"}),Object(b.jsx)("label",{children:r.userId})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\uc0c1\ub2f4\uc0ac ID"}),Object(b.jsx)("label",{children:r.counselorId})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\uc791\uc131\uc77c"}),Object(b.jsx)("label",{children:r.createdAt})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\ubb38\uc758\ub0b4\uc6a9"}),Object(b.jsx)("textarea",{value:r.content,readOnly:!0})]})]}):"\ud574\ub2f9 \uac8c\uc2dc\uae00\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",Object(b.jsx)("button",{className:"post-view-go-list-btn",onClick:function(){return t.goBack()},children:"\ubaa9\ub85d\uc73c\ub85c \ub3cc\uc544\uac00\uae30"})]})]})},w=function(e){var t=e.history,c=e.location.state,s=Object(n.useState)({}),a=Object(u.a)(s,2),r=a[0],o=a[1],i=JSON.parse(localStorage.getItem("userInfo")),l=Object(n.useState)(""),j=Object(u.a)(l,2),d=j[0],h=j[1],O=Object(n.useState)(""),x=Object(u.a)(O,2),p=x[0],f=x[1];return Object(n.useEffect)((function(){o(c),m.a.get("http://localhost:8000/api/myAnswer/".concat(c.inqueryId),{headers:{"X-USER-ID":i.id}}).then((function(e){console.log(e),h(e.data.response.title),f(e.data.response.content)})).catch((function(e){}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{align:"center",children:"\ub2f5\ubcc0 \uc791\uc131 \ud398\uc774\uc9c0"}),Object(b.jsxs)("div",{className:"post-view-wrapper",children:[r?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\uac8c\uc2dc\uae00 \ubc88\ud638"}),Object(b.jsx)("label",{children:r.inqueryId})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\ubb38\uc758\uae00 \uc81c\ubaa9"}),Object(b.jsx)("label",{children:r.title})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\uc791\uc131\uc790 ID"}),Object(b.jsx)("label",{children:r.userId})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\ubb38\uc758\uae00 \uc791\uc131\uc77c"}),Object(b.jsx)("label",{children:r.createdAt})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\ubb38\uc758 \ub0b4\uc6a9"}),Object(b.jsx)("textarea",{value:r.content,readOnly:!0})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\ub2f5\ubcc0 \uc81c\ubaa9"}),Object(b.jsx)("input",{value:d,onChange:function(e){h(e.target.value)}})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\ub2f5\ubcc0 \ub0b4\uc6a9"}),Object(b.jsx)("textarea",{value:p,onChange:function(e){f(e.target.value)}})]})]}):"\ud574\ub2f9 \uac8c\uc2dc\uae00\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",Object(b.jsxs)("div",{className:"btnDiv",children:[Object(b.jsx)("button",{className:"post-view-go-list-btn",onClick:function(){m.a.post("http://localhost:8000/api/answers",{inqueryId:r.inqueryId,counselorId:i.id,title:d,content:p},{headers:{"X-USER-ID":i.id}}).then((function(e){console.log(e),e.data.success?(alert("\ub2f5\ubcc0 \ub4f1\ub85d\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),t.goBack()):alert(e.data.error.message)})).catch((function(e){e.response.data.success||alert(e.response.data.error.message)}))},children:"\ub4f1\ub85d"}),Object(b.jsx)("button",{className:"post-view-go-list-btn",onClick:function(){return t.goBack()},children:"\ubaa9\ub85d\uc73c\ub85c \ub3cc\uc544\uac00\uae30"})]})]})]})},I=function(e){var t=e.history,c=(e.location.state,e.match,Object(n.useState)("")),s=Object(u.a)(c,2),a=s[0],r=s[1],o=Object(n.useState)(""),i=Object(u.a)(o,2),l=i[0],j=i[1],d=Object(n.useState)(""),h=Object(u.a)(d,2),O=h[0],x=h[1];return Object(n.useEffect)((function(){}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{align:"center",children:"\ubb38\uc758\uae00 \uc791\uc131"}),Object(b.jsxs)("div",{className:"post-view-wrapper",children:[Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\uc791\uc131\uc790 ID"}),Object(b.jsx)("input",{value:a,onChange:function(e){r(e.target.value)}})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\uc81c\ubaa9"}),Object(b.jsx)("input",{value:l,onChange:function(e){j(e.target.value)}})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\ub0b4\uc6a9"}),Object(b.jsx)("textarea",{value:O,onChange:function(e){x(e.target.value)}})]})]}),Object(b.jsxs)("div",{className:"btnDiv",children:[Object(b.jsx)("button",{className:"post-view-go-list-btn",onClick:function(){m.a.post("http://localhost:8000/api/inquery",{userId:a,title:l,content:O}).then((function(e){console.log(e),e.data.success?(alert("\ubb38\uc758\uae00 \ub4f1\ub85d\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),t.goBack()):alert(e.data.error.message)})).catch((function(e){e.response.data.success||alert(e.response.data.error.message)}))},children:"\ub4f1\ub85d"}),Object(b.jsx)("button",{className:"post-view-go-list-btn",onClick:function(){return t.goBack()},children:"\ubaa9\ub85d\uc73c\ub85c \ub3cc\uc544\uac00\uae30"})]})]})]})},N=(c(63),function(e){return Object(b.jsxs)("div",{className:"homepage",children:[Object(b.jsx)("button",{className:"customerBtn",onClick:function(){return e.history.push("/postMainCustomer")},children:"\uace0\uac1d"}),Object(b.jsx)("button",{className:"consultantBtn",onClick:function(){return e.history.push("/login")},children:"\uc0c1\ub2f4\uc0ac"})]})}),C=(c(64),function(e){var t=Object(n.useState)(""),c=Object(u.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(""),o=Object(u.a)(r,2),i=o[0],l=o[1],j=function(){console.log(e),m.a.post(" http://localhost:8000/api/userLogin",{id:s,password:i}).then((function(t){console.log(t),t.data.success?(alert("\ub85c\uadf8\uc778 \uc131\uacf5"),localStorage.setItem("userInfo",JSON.stringify(t.data.response)),e.history.push("/PostMainCounselor")):alert(t.data.error.message)})).catch((function(e){e.response.data.success||alert(e.response.data.error.message)}))};return Object(b.jsxs)("div",{className:"loginpage",children:[Object(b.jsx)("h2",{children:"\ub85c\uadf8\uc778"}),Object(b.jsxs)("div",{children:["\uc544\uc774\ub514 :"," ",Object(b.jsx)("input",{className:"inputId",value:s,onChange:function(e){a(e.target.value)}})]}),Object(b.jsxs)("div",{children:["\ube44\ubc00\ubc88\ud638 :"," ",Object(b.jsx)("input",{className:"inputPw",type:"password",value:i,onChange:function(e){l(e.target.value)},onKeyPress:function(){13===window.event.keyCode&&j()}})]}),Object(b.jsx)("button",{className:"cancelBtn",onClick:function(){return e.history.push("/")},children:"\ucde8\uc18c"}),Object(b.jsx)("button",{className:"loginBtn",onClick:j,children:"\ub85c\uadf8\uc778"}),Object(b.jsx)("button",{className:"signUpBtn",onClick:function(){console.log(e),e.history.push("/signUp")},children:"\ud68c\uc6d0\uac00\uc785"})]})}),y=(c(65),function(e){var t=Object(n.useState)(""),c=Object(u.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(""),o=Object(u.a)(r,2),i=o[0],d=o[1],h=Object(n.useState)(""),O=Object(u.a)(h,2),x=O[0],p=O[1],f=Object(n.useState)(""),v=Object(u.a)(f,2),g=v[0],w=v[1],I=Object(n.useState)(!1),N=Object(u.a)(I,2),C=N[0],y=N[1],S=Object(n.useState)(!1),k=Object(u.a)(S,2),A=k[0],B=k[1],D=Object(n.useState)(!1),F=Object(u.a)(D,2),q=F[0],E=F[1],P=function(){var t=Object(j.a)(l.a.mark((function t(){var c,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(y(!1),B(!1),E(!1),c=new RegExp("^[a-zA-Z0-9]{4,12}$"),n=new RegExp("^(?=.*[0-9])(?=.*[a-zA-z]).{8,15}$"),console.log(s),c.test(s)){t.next=10;break}return y(!0),console.log(s),t.abrupt("return");case 10:if(n.test(x)){t.next=13;break}return B(!0),t.abrupt("return");case 13:if(x===g){t.next=16;break}return E(!0),t.abrupt("return");case 16:m.a.post("http://localhost:8000/api/user",{id:s,name:i,role:"C",password:x}).then((function(t){console.log(t),t.data.success?(alert("\ud68c\uc6d0\uac00\uc785\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),e.history.push("/login")):alert(t.data.error.message)})).catch((function(e){e.response.data.success||alert(e.response.data.error.message)}));case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"signuppage",children:[Object(b.jsx)("h2",{children:"\ud68c\uc6d0\uac00\uc785"}),Object(b.jsxs)("form",{onSubmit:function(){console.log("handlesubmit")},children:[Object(b.jsxs)("div",{children:["\uc544\uc774\ub514 ",Object(b.jsx)("input",{value:s,onChange:function(e){a(e.target.value)}})]}),C?Object(b.jsx)("span",{className:"redText",children:"\uc544\uc774\ub514\ub294 4~12\uc790\uc758 \uc601\ubb38 \ub300\uc18c\ubb38\uc790\uc640 \uc22b\uc790\ub85c\ub9cc \uc785\ub825\ud574 \uc8fc\uc138\uc694."}):Object(b.jsx)(b.Fragment,{}),Object(b.jsxs)("div",{children:["\ub2c9\ub124\uc784",Object(b.jsx)("input",{value:i,onChange:function(e){d(e.target.value)}})]}),Object(b.jsxs)("div",{children:["\ube44\ubc00\ubc88\ud638"," ",Object(b.jsx)("input",{type:"password",value:x,onChange:function(e){p(e.target.value)}})]}),A?Object(b.jsx)("span",{className:"redText",children:"\ube44\ubc00\ubc88\ud638\ub294 \uc601\ubb38, \uc22b\uc790 \uc870\ud569\uc73c\ub85c 8~15\uc790\ub9ac\ub85c \uc785\ub825\ud574 \uc8fc\uc138\uc694."}):Object(b.jsx)(b.Fragment,{}),Object(b.jsxs)("div",{children:["\ube44\ubc00\ubc88\ud638 \ud655\uc778"," ",Object(b.jsx)("input",{type:"password",value:g,onChange:function(e){w(e.target.value)}})]}),q?Object(b.jsx)("span",{className:"redText",children:"\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}):Object(b.jsx)(b.Fragment,{})]}),Object(b.jsx)("button",{className:"cancelBtn",onClick:function(){e.history.push("/login")},children:"\ucde8\uc18c"}),Object(b.jsx)("button",{className:"signupBtn",onClick:P,children:"\ud68c\uc6d0\uac00\uc785"})]})});var S=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(o.a,{exact:!0,path:"/",component:N}),Object(b.jsx)(o.a,{exact:!0,path:"/login",component:C}),Object(b.jsx)(o.a,{exact:!0,path:"/signUp",component:y}),Object(b.jsx)(o.a,{exact:!0,path:"/postMainCounselor",component:f}),Object(b.jsx)(o.a,{exact:!0,path:"/postMainCustomer",component:v}),Object(b.jsx)(o.a,{exact:!0,path:"/postView",component:g}),Object(b.jsx)(o.a,{exact:!0,path:"/postRegistCounselor",component:w}),Object(b.jsx)(o.a,{exact:!0,path:"/postRegistCustomer",component:I})]})};a.a.render(Object(b.jsx)(d.a,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),r()}},[[66,1,2]]]);
//# sourceMappingURL=main.8d1466cd.chunk.js.map