(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{20:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(14),c=n.n(r),o=n(7),m=n(1),u=n(9),i=(n(20),function(e){var t=e.headersName,n=e.children;return l.a.createElement("table",{className:"common-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,t.map((function(e,t){return l.a.createElement("td",{className:"common-table-header-column",key:t},e)})))),l.a.createElement("tbody",null,n))}),s=function(e){var t=e.children;return l.a.createElement("td",{className:"common-table-column"},t)},E=function(e){var t=e.children;return l.a.createElement("tr",{className:"common-table-row"},t)},d=[{no:1,title:"\uccab\ubc88\uc9f8 \uac8c\uc2dc\uae00\uc785\ub2c8\ub2e4.",content:"\uccab\ubc88\uc9f8 \uac8c\uc2dc\uae00 \ub0b4\uc6a9\uc785\ub2c8\ub2e4.",createDate:"2020-10-25",readCount:6},{no:2,title:"\ub450\ubc88\uc9f8 \uac8c\uc2dc\uae00\uc785\ub2c8\ub2e4.",content:"\ub450\ubc88\uc9f8 \uac8c\uc2dc\uae00 \ub0b4\uc6a9\uc785\ub2c8\ub2e4.",createDate:"2020-10-25",readCount:5},{no:3,title:"\uc138\ubc88\uc9f8 \uac8c\uc2dc\uae00\uc785\ub2c8\ub2e4.",content:"\uc138\ubc88\uc9f8 \uac8c\uc2dc\uae00 \ub0b4\uc6a9\uc785\ub2c8\ub2e4.",createDate:"2020-10-25",readCount:1},{no:4,title:"\ub124\ubc88\uc9f8 \uac8c\uc2dc\uae00\uc785\ub2c8\ub2e4.",content:"\ub124\ubc88\uc9f8 \uac8c\uc2dc\uae00 \ub0b4\uc6a9\uc785\ub2c8\ub2e4.",createDate:"2020-10-25",readCount:2},{no:5,title:"\ub2e4\uc12f\ubc88\uc9f8 \uac8c\uc2dc\uae00\uc785\ub2c8\ub2e4.",content:"\ub2e4\uc12f\ubc88\uc9f8 \uac8c\uc2dc\uae00 \ub0b4\uc6a9\uc785\ub2c8\ub2e4.",createDate:"2020-10-25",readCount:4}],f=function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){c(d)}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{headersName:["\uae00\ubc88\ud638","\uc81c\ubaa9","\ub4f1\ub85d\uc77c","\uc870\ud68c\uc218"]},r?r.map((function(e,t){return l.a.createElement(E,{key:t},l.a.createElement(s,null,e.no),l.a.createElement(s,null,l.a.createElement(o.b,{to:"/postView/".concat(e.no)},e.title)),l.a.createElement(s,null,e.createDate),l.a.createElement(s,null,e.readCount))})):""))},b=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null))},p=(n(29),function(e){var t=e.history,n=(e.location,e.match),r=Object(a.useState)({}),c=Object(u.a)(r,2),o=c[0],m=c[1],i=n.params.no;return Object(a.useEffect)((function(){m(function(e){var t=d.filter((function(t){return t.no==e}));return 1==t.length?t[0]:null}(i))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{align:"center"},"\uac8c\uc2dc\uae00 \uc0c1\uc138\uc815\ubcf4"),l.a.createElement("div",{className:"post-view-wrapper"},o?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"post-view-row"},l.a.createElement("label",null,"\uac8c\uc2dc\uae00 \ubc88\ud638"),l.a.createElement("label",null,o.no)),l.a.createElement("div",{className:"post-view-row"},l.a.createElement("label",null,"\uc81c\ubaa9"),l.a.createElement("label",null,o.title)),l.a.createElement("div",{className:"post-view-row"},l.a.createElement("label",null,"\uc791\uc131\uc77c"),l.a.createElement("label",null,o.createDate)),l.a.createElement("div",{className:"post-view-row"},l.a.createElement("label",null,"\uc870\ud68c\uc218"),l.a.createElement("label",null,o.readCount)),l.a.createElement("div",{className:"post-view-row"},l.a.createElement("label",null,"\ub0b4\uc6a9"),l.a.createElement("div",null,o.content))):"\ud574\ub2f9 \uac8c\uc2dc\uae00\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",l.a.createElement("button",{className:"post-view-go-list-btn",onClick:function(){return t.goBack()}},"\ubaa9\ub85d\uc73c\ub85c \ub3cc\uc544\uac00\uae30")))});var v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(o.a,null,l.a.createElement(m.a,{exact:!0,path:"/postView/:no",component:p}),l.a.createElement(m.a,{exact:!0,path:"/",component:b})))},h=function(){return l.a.createElement(o.a,null,l.a.createElement(v,null))},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),l(e),r(e),c(e)}))};c.a.render(l.a.createElement(h,null),document.getElementById("root")),w()}},[[30,1,2]]]);
//# sourceMappingURL=main.6658ded8.chunk.js.map