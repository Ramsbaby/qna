(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{12:function(e,t,c){},35:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(28),a=c.n(s),r=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))},l=c(3),o=c(13),i=c.n(o),j=c(15),d=c(2),u=c(10),b=(c(35),c(0)),h=function(e){var t=e.headersName,c=e.children;return Object(b.jsxs)("table",{className:"common-table",children:[Object(b.jsx)("thead",{children:Object(b.jsx)("tr",{children:t.map((function(e,t){return Object(b.jsx)("td",{className:"common-table-header-column",children:e},t)}))})}),Object(b.jsx)("tbody",{children:c})]})},O=function(e){var t=e.children;return Object(b.jsx)("td",{className:"common-table-column",children:t})},x=function(e){var t=e.children;return Object(b.jsx)("tr",{className:"common-table-row",children:t})},p=c(5),m=c.n(p),v=(c(12),function(e){var t=Object(n.useState)([]),c=Object(d.a)(t,2),s=c[0],a=c[1],r=JSON.parse(localStorage.getItem("userInfo")),l=function(){alert("\uc774\ubbf8 \ub2f4\ub2f9\uc790\uac00 \uc9c0\uc815\ub41c \ubb38\uc758\uac74\uc785\ub2c8\ub2e4.")};Object(n.useEffect)((function(){o()}),[]),function(e,t){var c=Object(n.useRef)();Object(n.useEffect)((function(){c.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){c.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){o()}),1e4);var o=function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://localhost:8000/api/inquerys").then((function(e){a(e.data.response)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{className:"logoutBtn",onClick:function(){localStorage.removeItem("userInfo"),e.history.push("/")},children:"\ub85c\uadf8\uc544\uc6c3"}),Object(b.jsx)("div",{className:"title",children:"\uace0\uac1d \ubb38\uc758 \ubaa9\ub85d (\uc0c1\ub2f4\uc0ac \uc804\uc6a9)"}),Object(b.jsx)(h,{headersName:["\uae00\ubc88\ud638","\uace0\uac1dID","\uc81c\ubaa9","\uc0c1\ub2f4\uc0acID","\ub4f1\ub85d\uc77c","\ub2f5\ubcc0\ub4f1\ub85d","\ub2f5\ubcc0\ub4f1\ub85d\uc5ec\ubd80"],children:s?s.map((function(e,t){return Object(b.jsxs)(x,{children:[Object(b.jsx)(O,{children:e.id}),Object(b.jsx)(O,{children:e.userId}),Object(b.jsx)(O,{children:Object(b.jsx)(u.b,{to:{pathname:"/PostView",state:{userId:e.userId,title:e.title,content:e.content,counselorId:e.counselorId,createdAt:e.createdAt,updatedAt:e.updatedAt}},children:e.title})}),Object(b.jsx)(O,{children:null==e.counselorId?Object(b.jsx)("button",{onClick:function(){return t={inqueryId:e.id},void(window.confirm("\ud574\ub2f9 \ubb38\uc758\uae00\uc758 \uc9c0\uc815 \uc0c1\ub2f4\uc0ac\ub85c \uc120\ud0dd\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&m.a.patch("http://localhost:8000/api/inqueryChoice/".concat(t.inqueryId),{inqueryId:t.inqueryId,conselorId:r.id},{headers:{"X-USER-ID":r.id}}).then((function(e){o()})).catch((function(e){console.log(e)})));var t},children:"\uc5c6\uc74c"}):Object(b.jsx)("div",{onClick:l,children:e.counselorId})}),Object(b.jsx)(O,{children:e.createdAt}),Object(b.jsx)(O,{children:null!==r&&e.counselorId===r.id?Object(b.jsx)(u.b,{to:{pathname:"/PostRegistCounselor",state:{inqueryId:e.id,userId:e.userId,title:e.title,content:e.content,counselorId:e.counselorId,createdAt:e.createdAt,updatedAt:e.updatedAt}},children:"\ub4f1\ub85d"}):"\ub4f1\ub85d\ubd88\uac00"}),Object(b.jsx)(O,{children:e.isAnswered})]},t)})):""})]})}),f=function(e){var t=Object(n.useState)([]),c=Object(d.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(""),l=Object(d.a)(r,2),o=l[0],i=l[1],j=function(){m.a.get("http://localhost:8000/api/myInquerys",{headers:{"X-USER-ID":o}}).then((function(e){a(e.data.response)})).catch((function(e){console.log(e)}))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"topBtnDiv",children:[Object(b.jsx)("button",{onClick:function(){e.history.push("/")},children:"\uba54\uc778\ud654\uba74\uc73c\ub85c"}),Object(b.jsx)("button",{onClick:function(){e.history.push("/PostRegistCustomer")},children:"\ubb38\uc758\uae00 \ub4f1\ub85d"})]}),Object(b.jsxs)("div",{className:"topBtnDiv",children:[Object(b.jsx)("input",{value:o,onChange:function(e){i(e.target.value)},onKeyPress:j,placeholder:"\uac80\uc0c9\ud560 ID\ub97c \uc785\ub825\ud558\uc138\uc694"}),Object(b.jsx)("button",{onClick:j,children:"\ubb38\uc758\uae00 \uac80\uc0c9"})]}),Object(b.jsx)("div",{className:"title",children:"\uace0\uac1d \ubb38\uc758 \ubaa9\ub85d (\uace0\uac1d \uc804\uc6a9)"}),Object(b.jsx)(h,{headersName:["\uae00\ubc88\ud638","\uace0\uac1dID","\uc81c\ubaa9","\uc0c1\ub2f4\uc0acID","\ub4f1\ub85d\uc77c","\uc0c1\ub2f4\uc0ac \ub2f5\ubcc0"],children:s?s.map((function(e,t){return Object(b.jsxs)(x,{children:[Object(b.jsx)(O,{children:e.id}),Object(b.jsx)(O,{children:e.userId}),Object(b.jsx)(O,{children:Object(b.jsx)(u.b,{to:{pathname:"/PostView",state:{id:e.id,userId:e.userId,title:e.title,content:e.content,counselorId:e.counselorId,createdAt:e.createdAt,updatedAt:e.updatedAt}},children:e.title})}),Object(b.jsx)(O,{children:null==e.counselorId?"\uc5c6\uc74c":e.counselorId}),Object(b.jsx)(O,{children:e.createdAt}),Object(b.jsx)(O,{children:"N"===e.isAnswered?"\ub2f5\ubcc0\uc5c6\uc74c":Object(b.jsx)(u.b,{to:{pathname:"/PostViewAnswer",state:{id:e.id,userId:e.userId,counselorId:e.counselorId}},children:"\ub2f5\ubcc0\ubcf4\uae30"})})]},t)})):""})]})},g=function(e){var t=e.history,c=e.location.state,s=(e.match,Object(n.useState)({})),a=Object(d.a)(s,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){l(c),console.log(c)}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{align:"center",children:"\uac8c\uc2dc\uae00 \uc0c1\uc138\uc815\ubcf4"}),Object(b.jsxs)("div",{className:"post-view-wrapper",children:[r?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\uac8c\uc2dc\uae00 \ubc88\ud638"}),Object(b.jsx)("label",{children:r.id})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\uc81c\ubaa9"}),Object(b.jsx)("label",{children:r.title})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\uc791\uc131\uc790 ID"}),Object(b.jsx)("label",{children:r.userId})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\uc0c1\ub2f4\uc0ac ID"}),Object(b.jsx)("label",{children:r.counselorId})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\uc791\uc131\uc77c"}),Object(b.jsx)("label",{children:r.createdAt})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\ubb38\uc758\ub0b4\uc6a9"}),Object(b.jsx)("textarea",{value:r.content,readOnly:!0})]})]}):"\ud574\ub2f9 \uac8c\uc2dc\uae00\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",Object(b.jsx)("button",{className:"post-view-go-list-btn",onClick:function(){return t.goBack()},children:"\ubaa9\ub85d\uc73c\ub85c \ub3cc\uc544\uac00\uae30"})]})]})},w=function(e){var t=e.history,c=e.location.state,s=(e.match,Object(n.useState)({})),a=Object(d.a)(s,2),r=a[0],l=a[1],o=Object(n.useState)(""),i=Object(d.a)(o,2),j=(i[0],i[1],Object(n.useState)("")),u=Object(d.a)(j,2);u[0],u[1];console.log(c);return Object(n.useEffect)((function(){l(c),m.a.get("http://localhost:8000/api/myAnswer/".concat(c.id),{headers:{"X-USER-ID":c.counselorId}}).then((function(e){console.log(e.data.response),l(e.data.response)})).catch((function(e){}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{align:"center",children:"\uac8c\uc2dc\uae00 \uc0c1\uc138\uc815\ubcf4"}),Object(b.jsxs)("div",{className:"post-view-wrapper",children:[r?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\uac8c\uc2dc\uae00 \ubc88\ud638"}),Object(b.jsx)("label",{children:c.id})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\ub2f5\ubcc0 \uc81c\ubaa9"}),Object(b.jsx)("label",{children:r.title})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\uc791\uc131\uc790 ID"}),Object(b.jsx)("label",{children:c.userId})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\uc0c1\ub2f4\uc0ac ID"}),Object(b.jsx)("label",{children:r.counselorId})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\uc791\uc131\uc77c"}),Object(b.jsx)("label",{children:r.createdAt})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\ub2f5\ubcc0\ub0b4\uc6a9"}),Object(b.jsx)("textarea",{value:r.content,readOnly:!0})]})]}):"\ud574\ub2f9 \uac8c\uc2dc\uae00\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",Object(b.jsx)("button",{className:"post-view-go-list-btn",onClick:function(){return t.goBack()},children:"\ubaa9\ub85d\uc73c\ub85c \ub3cc\uc544\uac00\uae30"})]})]})},I=function(e){var t=e.history,c=e.location.state,s=Object(n.useState)({}),a=Object(d.a)(s,2),r=a[0],l=a[1],o=JSON.parse(localStorage.getItem("userInfo")),i=Object(n.useState)(""),j=Object(d.a)(i,2),u=j[0],h=j[1],O=Object(n.useState)(""),x=Object(d.a)(O,2),p=x[0],v=x[1];return Object(n.useEffect)((function(){l(c),m.a.get("http://localhost:8000/api/myAnswer/".concat(c.inqueryId),{headers:{"X-USER-ID":o.id}}).then((function(e){console.log(e),h(e.data.response.title),v(e.data.response.content)})).catch((function(e){}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{align:"center",children:"\ub2f5\ubcc0 \uc791\uc131 \ud398\uc774\uc9c0"}),Object(b.jsxs)("div",{className:"post-view-wrapper",children:[r?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\uac8c\uc2dc\uae00 \ubc88\ud638"}),Object(b.jsx)("label",{children:r.inqueryId})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\ubb38\uc758\uae00 \uc81c\ubaa9"}),Object(b.jsx)("label",{children:r.title})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\uc791\uc131\uc790 ID"}),Object(b.jsx)("label",{children:r.userId})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\ubb38\uc758\uae00 \uc791\uc131\uc77c"}),Object(b.jsx)("label",{children:r.createdAt})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\ubb38\uc758 \ub0b4\uc6a9"}),Object(b.jsx)("textarea",{value:r.content,readOnly:!0})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\ub2f5\ubcc0 \uc81c\ubaa9"}),Object(b.jsx)("input",{value:u,onChange:function(e){h(e.target.value)}})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\ub2f5\ubcc0 \ub0b4\uc6a9"}),Object(b.jsx)("textarea",{value:p,onChange:function(e){v(e.target.value)}})]})]}):"\ud574\ub2f9 \uac8c\uc2dc\uae00\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",Object(b.jsxs)("div",{className:"btnDiv",children:[Object(b.jsx)("button",{className:"post-view-go-list-btn",onClick:function(){""!==u?""!==p?m.a.post("http://localhost:8000/api/answers",{inqueryId:r.inqueryId,counselorId:o.id,title:u,content:p},{headers:{"X-USER-ID":o.id}}).then((function(e){console.log(e),e.data.success?(alert("\ub2f5\ubcc0 \ub4f1\ub85d\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),t.goBack()):alert(e.data.error.message)})).catch((function(e){e.response.data.success||alert(e.response.data.error.message)})):alert("\ub2f5\ubcc0 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4."):alert("\ub2f5\ubcc0 \uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4.")},children:"\ub4f1\ub85d"}),Object(b.jsx)("button",{className:"post-view-go-list-btn",onClick:function(){return t.goBack()},children:"\ubaa9\ub85d\uc73c\ub85c \ub3cc\uc544\uac00\uae30"})]})]})]})},N=function(e){var t=e.history,c=(e.location.state,e.match,Object(n.useState)("")),s=Object(d.a)(c,2),a=s[0],r=s[1],l=Object(n.useState)(""),o=Object(d.a)(l,2),i=o[0],j=o[1],u=Object(n.useState)(""),h=Object(d.a)(u,2),O=h[0],x=h[1];return Object(n.useEffect)((function(){}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{align:"center",children:"\ubb38\uc758\uae00 \uc791\uc131"}),Object(b.jsxs)("div",{className:"post-view-wrapper",children:[Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\uc791\uc131\uc790 ID"}),Object(b.jsx)("input",{value:a,onChange:function(e){r(e.target.value)}})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\uc81c\ubaa9"}),Object(b.jsx)("input",{value:i,onChange:function(e){j(e.target.value)}})]}),Object(b.jsxs)("div",{className:"post-view-row",children:[Object(b.jsx)("label",{children:"\ub0b4\uc6a9"}),Object(b.jsx)("textarea",{value:O,onChange:function(e){x(e.target.value)}})]})]}),Object(b.jsxs)("div",{className:"btnDiv",children:[Object(b.jsx)("button",{className:"post-view-go-list-btn",onClick:function(){""!==a?""!==i?""!==O?m.a.post("http://localhost:8000/api/inquery",{userId:a,title:i,content:O}).then((function(e){console.log(e),e.data.success?(alert("\ubb38\uc758\uae00 \ub4f1\ub85d\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),t.goBack()):alert(e.data.error.message)})).catch((function(e){e.response.data.success||alert(e.response.data.error.message)})):alert("\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4."):alert("\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4."):alert("\uc791\uc131\uc790 ID\ub97c \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4.")},children:"\ub4f1\ub85d"}),Object(b.jsx)("button",{className:"post-view-go-list-btn",onClick:function(){return t.goBack()},children:"\ubaa9\ub85d\uc73c\ub85c \ub3cc\uc544\uac00\uae30"})]})]})]})},C=(c(63),function(e){return Object(b.jsxs)("div",{className:"homepage",children:[Object(b.jsx)("h2",{children:"QnA \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4. \uc774\uc6a9\ud558\uc2e4 \uad8c\ud55c\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."}),Object(b.jsx)("button",{className:"customerBtn",onClick:function(){return e.history.push("/postMainCustomer")},children:"\uace0\uac1d"}),Object(b.jsx)("button",{className:"consultantBtn",onClick:function(){return e.history.push("/login")},children:"\uc0c1\ub2f4\uc0ac"})]})}),y=(c(64),function(e){var t=Object(n.useState)(""),c=Object(d.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(""),l=Object(d.a)(r,2),o=l[0],i=l[1],j=function(){console.log(e),m.a.post(" http://localhost:8000/api/userLogin",{id:s,password:o}).then((function(t){console.log(t),t.data.success?(alert("\ub85c\uadf8\uc778 \uc131\uacf5"),localStorage.setItem("userInfo",JSON.stringify(t.data.response)),e.history.push("/PostMainCounselor")):alert(t.data.error.message)})).catch((function(e){e.response.data.success||alert(e.response.data.error.message)}))};return Object(b.jsxs)("div",{className:"loginpage",children:[Object(b.jsx)("h2",{children:"\ub85c\uadf8\uc778"}),Object(b.jsxs)("div",{children:["\uc544\uc774\ub514 :"," ",Object(b.jsx)("input",{className:"inputId",value:s,onChange:function(e){a(e.target.value)}})]}),Object(b.jsxs)("div",{children:["\ube44\ubc00\ubc88\ud638 :"," ",Object(b.jsx)("input",{className:"inputPw",type:"password",value:o,onChange:function(e){i(e.target.value)},onKeyPress:function(){13===window.event.keyCode&&j()}})]}),Object(b.jsx)("button",{className:"cancelBtn",onClick:function(){return e.history.push("/")},children:"\ucde8\uc18c"}),Object(b.jsx)("button",{className:"loginBtn",onClick:j,children:"\ub85c\uadf8\uc778"}),Object(b.jsx)("button",{className:"signUpBtn",onClick:function(){console.log(e),e.history.push("/signUp")},children:"\ud68c\uc6d0\uac00\uc785"})]})}),S=(c(65),function(e){var t=Object(n.useState)(""),c=Object(d.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(""),l=Object(d.a)(r,2),o=l[0],u=l[1],h=Object(n.useState)(""),O=Object(d.a)(h,2),x=O[0],p=O[1],v=Object(n.useState)(""),f=Object(d.a)(v,2),g=f[0],w=f[1],I=Object(n.useState)(!1),N=Object(d.a)(I,2),C=N[0],y=N[1],S=Object(n.useState)(!1),k=Object(d.a)(S,2),A=k[0],D=k[1],B=Object(n.useState)(!1),F=Object(d.a)(B,2),E=F[0],q=F[1],R=function(){var t=Object(j.a)(i.a.mark((function t(){var c,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(y(!1),D(!1),q(!1),c=new RegExp("^[a-zA-Z0-9]{4,12}$"),n=new RegExp("^(?=.*[0-9])(?=.*[a-zA-z]).{8,15}$"),console.log(s),c.test(s)){t.next=10;break}return y(!0),console.log(s),t.abrupt("return");case 10:if(n.test(x)){t.next=13;break}return D(!0),t.abrupt("return");case 13:if(x===g){t.next=16;break}return q(!0),t.abrupt("return");case 16:m.a.post("http://localhost:8000/api/user",{id:s,name:o,role:"C",password:x}).then((function(t){console.log(t),t.data.success?(alert("\ud68c\uc6d0\uac00\uc785\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),e.history.push("/login")):alert(t.data.error.message)})).catch((function(e){e.response.data.success||alert(e.response.data.error.message)}));case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"signuppage",children:[Object(b.jsx)("h2",{children:"\ud68c\uc6d0\uac00\uc785"}),Object(b.jsxs)("form",{onSubmit:function(){console.log("handlesubmit")},children:[Object(b.jsxs)("div",{children:["\uc544\uc774\ub514 ",Object(b.jsx)("input",{value:s,onChange:function(e){a(e.target.value)}})]}),C?Object(b.jsx)("span",{className:"redText",children:"\uc544\uc774\ub514\ub294 4~12\uc790\uc758 \uc601\ubb38 \ub300\uc18c\ubb38\uc790\uc640 \uc22b\uc790\ub85c\ub9cc \uc785\ub825\ud574 \uc8fc\uc138\uc694."}):Object(b.jsx)(b.Fragment,{}),Object(b.jsxs)("div",{children:["\ub2c9\ub124\uc784",Object(b.jsx)("input",{value:o,onChange:function(e){u(e.target.value)}})]}),Object(b.jsxs)("div",{children:["\ube44\ubc00\ubc88\ud638"," ",Object(b.jsx)("input",{type:"password",value:x,onChange:function(e){p(e.target.value)}})]}),A?Object(b.jsx)("span",{className:"redText",children:"\ube44\ubc00\ubc88\ud638\ub294 \uc601\ubb38, \uc22b\uc790 \uc870\ud569\uc73c\ub85c 8~15\uc790\ub9ac\ub85c \uc785\ub825\ud574 \uc8fc\uc138\uc694."}):Object(b.jsx)(b.Fragment,{}),Object(b.jsxs)("div",{children:["\ube44\ubc00\ubc88\ud638 \ud655\uc778"," ",Object(b.jsx)("input",{type:"password",value:g,onChange:function(e){w(e.target.value)}})]}),E?Object(b.jsx)("span",{className:"redText",children:"\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}):Object(b.jsx)(b.Fragment,{})]}),Object(b.jsx)("button",{className:"cancelBtn",onClick:function(){e.history.push("/login")},children:"\ucde8\uc18c"}),Object(b.jsx)("button",{className:"signupBtn",onClick:R,children:"\ud68c\uc6d0\uac00\uc785"})]})});var k=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(l.a,{exact:!0,path:"/",component:C}),Object(b.jsx)(l.a,{exact:!0,path:"/login",component:y}),Object(b.jsx)(l.a,{exact:!0,path:"/signUp",component:S}),Object(b.jsx)(l.a,{exact:!0,path:"/postMainCounselor",component:v}),Object(b.jsx)(l.a,{exact:!0,path:"/postMainCustomer",component:f}),Object(b.jsx)(l.a,{exact:!0,path:"/postView",component:g}),Object(b.jsx)(l.a,{exact:!0,path:"/postViewAnswer",component:w}),Object(b.jsx)(l.a,{exact:!0,path:"/postRegistCounselor",component:I}),Object(b.jsx)(l.a,{exact:!0,path:"/postRegistCustomer",component:N})]})};a.a.render(Object(b.jsx)(u.a,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),r()}},[[66,1,2]]]);
//# sourceMappingURL=main.3194cd5e.chunk.js.map