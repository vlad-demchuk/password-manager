(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),c=n(11),r=n.n(c),o=(n(16),n(5)),j=n(2),i=(n(17),n(1)),b=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o.b,{to:"/authorization",children:Object(i.jsx)("button",{type:"button",children:"Log in"})}),Object(i.jsx)(o.b,{to:"/registration",children:Object(i.jsx)("button",{type:"button",children:"Create new account"})})]})},l=n(3),u=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(""),r=Object(l.a)(c,2),o=r[0],b=r[1],u=Object(s.useState)(!1),O=Object(l.a)(u,2),d=O[0],p=O[1],h=Object(s.useState)(!1),g=Object(l.a)(h,2),x=g[0],m=g[1];return console.log(x),Object(i.jsxs)("div",{className:"registration",children:[Object(i.jsx)("h1",{children:"Authorization"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=localStorage.getItem(n);null!==t?JSON.parse(t).userPassword===o?(m(!0),p(!1)):p(!0):p(!0)},children:[Object(i.jsxs)("label",{htmlFor:"login",children:["Login",Object(i.jsx)("input",{type:"text",name:"login",value:n,onChange:function(e){a(e.target.value)}})]}),Object(i.jsxs)("label",{htmlFor:"login",children:["Password",Object(i.jsx)("input",{type:"password",name:"password",value:o,onChange:function(e){b(e.target.value)}})]}),Object(i.jsx)("button",{type:"submit",children:"Submit"})]}),d&&"Something was wrong",x&&Object(i.jsx)(j.a,{to:"/passwordManager",replace:!0})]})},O=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("h1",{children:"Password manager"})})},d=n(10),p=n(8),h=function(e){var t=e.addNewPassword,n=Object(s.useState)(""),a=Object(l.a)(n,2),c=a[0],r=a[1],o=Object(s.useState)(""),j=Object(l.a)(o,2),b=j[0],u=j[1],O=Object(s.useState)(""),d=Object(l.a)(O,2),p=d[0],h=d[1];return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={id:Date.now(),nameOfApp:c,userLogin:b,userPassword:p};t(n)},children:[Object(i.jsxs)("label",{htmlFor:"nameOfApp",children:["nameOfApp",Object(i.jsx)("input",{type:"text",name:"nameOfApp",value:c,onChange:function(e){r(e.target.value)}})]}),Object(i.jsxs)("label",{htmlFor:"login",children:["Login",Object(i.jsx)("input",{type:"text",name:"login",value:b,onChange:function(e){u(e.target.value)}})]}),Object(i.jsxs)("label",{htmlFor:"login",children:["Password",Object(i.jsx)("input",{type:"password",name:"password",value:p,onChange:function(e){h(e.target.value)}})]}),Object(i.jsx)("button",{type:"submit",children:"Add"})]})},g=function(e){var t=e.userLogin,n=Object(s.useState)("vlad"),c=Object(l.a)(n,1)[0],r=Object(s.useState)(null),o=Object(l.a)(r,2),j=o[0],b=o[1],u=function(){var e=JSON.parse(localStorage.getItem(c)||"");b(e)};Object(s.useEffect)((function(){u()}),[]);return console.log(t,c,j),Object(i.jsxs)("div",{children:[Object(i.jsx)(h,{addNewPassword:function(e){var t=Object(p.a)(Object(p.a)({},j),{},{savedPasswords:[].concat(Object(d.a)(j.savedPasswords),[e])});localStorage.setItem(c,JSON.stringify(t)),u()}}),Object(i.jsxs)("div",{children:["Passwords",Object(i.jsx)("ul",{children:null===j||void 0===j?void 0:j.savedPasswords.map((function(e){return Object(i.jsxs)(a.a.Fragment,{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("p",{children:e.nameOfApp}),Object(i.jsx)("p",{children:e.userLogin}),Object(i.jsx)("p",{children:e.userPassword})]}),Object(i.jsx)("button",{type:"button",onClick:function(){!function(e){var t=Object(p.a)(Object(p.a)({},j),{},{savedPasswords:Object(d.a)(j.savedPasswords).filter((function(t){return e!==t.id}))});localStorage.setItem(c,JSON.stringify(t)),u()}(e.id)},children:"X"})]},e.id)}))})]})]})},x=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(""),r=Object(l.a)(c,2),o=r[0],b=r[1],u=Object(s.useState)(!1),O=Object(l.a)(u,2),d=O[0],p=O[1];return Object(i.jsxs)("div",{className:"registration",children:[Object(i.jsx)("h1",{children:"Registration"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={userLogin:n,userPassword:o,savedPasswords:[]};localStorage.setItem(t.userLogin,JSON.stringify(t)),p(!0)},children:[Object(i.jsxs)("label",{htmlFor:"login",children:["Login",Object(i.jsx)("input",{type:"text",name:"login",value:n,onChange:function(e){a(e.target.value)}})]}),Object(i.jsxs)("label",{htmlFor:"login",children:["Password",Object(i.jsx)("input",{type:"password",name:"password",value:o,onChange:function(e){b(e.target.value)}})]}),Object(i.jsx)("button",{type:"submit",children:"Submit"})]}),d&&Object(i.jsx)(j.a,{to:"/passwordManager",replace:!0})]})};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsxs)(o.a,{children:[Object(i.jsx)(O,{}),Object(i.jsxs)(j.d,{children:[Object(i.jsx)(j.b,{path:"/",element:Object(i.jsx)(b,{})}),Object(i.jsx)(j.b,{path:"/authorization",element:Object(i.jsx)(u,{})}),Object(i.jsx)(j.b,{path:"/registration",element:Object(i.jsx)(x,{})}),Object(i.jsx)(j.b,{path:"/passwordManager",element:Object(i.jsx)(g,{userLogin:""})})]})]})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.943f556a.chunk.js.map