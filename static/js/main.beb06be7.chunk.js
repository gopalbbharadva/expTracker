(this.webpackJsonpexpensetracker=this.webpackJsonpexpensetracker||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),s=n(15),r=n.n(s),a=(n(23),n(24),n(12)),j=n.n(a),l=n(18),o=n(13),b=n(16),d=n(5),u=n(17),x=n(3),p=n(9),m=n(4),O=n.p+"static/media/clock.ed2439aa.gif",h=n.p+"static/media/emptyCart.8e6c22cc.png",f=n(0),g=function(e){var t=e.id,n=e.itemName,c=e.itemAmt,i=e.time,s=e.updateExpense,r=e.deleteExpense;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"expenseItem",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{onClick:function(){return s(t)},style:{padding:0,margin:0,backgroundColor:"white"},children:Object(f.jsx)(x.a,{style:{color:"blue"},icon:m.b})}),Object(f.jsxs)("div",{style:{marginLeft:"1rem",display:"flex",flexDirection:"column",alignItems:"self-start"},children:[Object(f.jsx)("p",{style:{margin:"0"},children:n}),Object(f.jsx)("small",{children:i})]})]}),Object(f.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(f.jsxs)("small",{children:[c," ",Object(f.jsx)(x.a,{icon:m.c})]}),Object(f.jsx)("button",{onClick:function(){return r(t)},style:{backgroundColor:"red",padding:"0",margin:"0",fontSize:"larger"},children:Object(f.jsx)(x.a,{icon:m.e})})]})]})})},v=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(0),r=Object(d.a)(s,2),a=r[0],v=r[1],y=Object(c.useState)(""),k=Object(d.a)(y,2),w=k[0],S=k[1],A=Object(c.useState)(""),C=Object(d.a)(A,2),I=C[0],N=C[1],E=Object(c.useState)([]),D=Object(d.a)(E,2),F=D[0],L=D[1],T=Object(c.useState)(!1),_=Object(d.a)(T,2),z=_[0],B=_[1],P=Object(c.useState)(0),J=Object(d.a)(P,2),G=J[0],M=J[1],W=new Date;Object(c.useEffect)((function(){q()}),[F]);var q=function(){v(F.reduce((function(e,t){return e+t.expenseAmount}),0))},H=function(e){var t=F.find((function(t){return t.id===e})),n=t.expenseItem,c=t.expenseAmount;S(n),N(c),B(!0),M(e)},K=function(e){var t=F.findIndex((function(t){return t.id===e}));if(window.confirm("Are you sure you want to delete ".concat(F[t].expenseItem))){var n=F.slice();n.splice(t,1),L(n)}},Q=function(){var e=Object(b.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),w.length>0&&0!==I?(z?(c=F.map((function(e){return e.id===G?Object(o.a)(Object(o.a)({},e),{},{expenseItem:w,expenseAmount:I}):e})),L(c),B(!1)):(i(n=!0),setTimeout((function(){var e={id:Object(u.uuid)(),expenseAmount:I,expenseItem:w,time:W.toLocaleTimeString()};L([].concat(Object(l.a)(F),[e]))}),1500)),i(n=!1),N(""),S("")):alert("Plz enter item data");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"main",children:[Object(f.jsx)("header",{children:Object(f.jsx)("p",{style:{margin:0,fontSize:"larger"},children:"Expense Tracker App"})}),Object(f.jsxs)("div",{className:"main-container",children:[Object(f.jsx)("img",{style:{display:n?"block":"none",margin:"1rem auto"},src:O}),Object(f.jsxs)("div",{className:"inputDiv",children:[a>0?Object(f.jsxs)("h3",{children:["Bill : ",Object(f.jsx)("span",{style:{color:"red"},children:a})]}):null,Object(f.jsxs)("form",{onSubmit:Q,children:[Object(f.jsxs)("div",{className:"both",children:[Object(f.jsx)("input",{onChange:function(e){return N(Number(e.target.value))},value:I,type:"number",placeholder:"What's Amount?",id:"expenseAmount"}),Object(f.jsx)("div",{children:Object(f.jsx)(x.a,{icon:m.c})})]}),Object(f.jsxs)("div",{className:"both",children:[Object(f.jsx)("input",{placeholder:"which expense",onChange:function(e){return S(e.target.value)},value:w,type:"text",id:"expenseDesc"}),Object(f.jsx)("div",{children:Object(f.jsx)(x.a,{icon:m.d})})]}),Object(f.jsx)("button",{type:"submit",style:{cursor:"pointer"},children:z?Object(f.jsx)(x.a,{icon:m.f}):Object(f.jsx)(x.a,{icon:m.a})})]})]}),F.length>0?F.map((function(e){return Object(f.jsx)(g,{id:e.id,itemName:e.expenseItem,itemAmt:e.expenseAmount,time:e.time,deleteExpense:K,updateExpense:H},e.id)})):Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(f.jsx)("p",{style:{color:"red",textAlign:"center",margin:"0",fontSize:"1.2rem"},children:"Empty List"}),Object(f.jsx)("img",{style:{height:"250px",width:"250px",objectFit:"cover"},src:h,alt:"no preview available"})]})]}),Object(f.jsxs)("footer",{children:[Object(f.jsx)("p",{children:"Say hi \ud83d\udc4b"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"https://github.com/gopalbbharadva",target:"_blank",children:Object(f.jsx)(p.a,{})})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"https://twitter.com/Gopal_33_gb",target:"_blank",children:Object(f.jsx)(p.c,{})})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"https://www.linkedin.com/in/gopal-bharadva-1aa880176/",target:"_blank",children:Object(f.jsx)(p.b,{})})})]})]})]})};var y=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(v,{})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};r.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root")),k()}},[[35,1,2]]]);
//# sourceMappingURL=main.beb06be7.chunk.js.map