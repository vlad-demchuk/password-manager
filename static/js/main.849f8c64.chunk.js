(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(11),r=a.n(c),o=(a(16),a(5)),l=a(2),i=(a(17),a(0)),j=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("div",{className:"App__buttons",children:[Object(i.jsx)(o.b,{to:"/authorization",children:Object(i.jsx)("button",{className:"button",type:"button",children:"Log in"})}),Object(i.jsx)(o.b,{to:"/registration",children:Object(i.jsx)("button",{className:"button",type:"button",children:"Create new account"})})]})})},b=a(3),u=(a(19),function(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(""),r=Object(b.a)(c,2),o=r[0],j=r[1],u=Object(s.useState)(!1),d=Object(b.a)(u,2),m=d[0],O=d[1],p=Object(s.useState)(!1),f=Object(b.a)(p,2),h=f[0],g=f[1];return Object(i.jsxs)("div",{className:"auth",children:[Object(i.jsx)("h2",{className:"auth__title",children:"Authorization"}),Object(i.jsxs)("form",{className:"form auth__form",onSubmit:function(e){e.preventDefault();var t=localStorage.getItem(a);null!==t?JSON.parse(t).userPassword===o?(g(!0),O(!1)):O(!0):O(!0)},children:[Object(i.jsxs)("label",{className:"form__label",htmlFor:"login",children:["Login",Object(i.jsx)("input",{className:"form__input",id:"login",type:"text",name:"login",value:a,onChange:function(e){n(e.target.value)}})]}),Object(i.jsxs)("label",{className:"form__label",htmlFor:"login",children:["Password",Object(i.jsx)("input",{className:"form__input",id:"password",type:"password",name:"password",value:o,onChange:function(e){j(e.target.value)}})]}),Object(i.jsx)("button",{className:"button",type:"submit",children:"Submit"})]}),m&&"Something was wrong",h&&Object(i.jsx)(l.a,{to:"/passwordManager",replace:!0})]})}),d=(a(20),function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("h1",{className:"title",children:"Password manager"})})}),m=a(9),O=a(6),p=function(e){var t=e.editPassword,a=e.password,n=Object(s.useState)(a.nameOfApp),c=Object(b.a)(n,2),r=c[0],o=c[1],l=Object(s.useState)(a.userLogin),j=Object(b.a)(l,2),u=j[0],d=j[1],m=Object(s.useState)(a.userPassword),O=Object(b.a)(m,2),p=O[0],f=O[1];return Object(i.jsx)("div",{className:"editor",children:Object(i.jsxs)("form",{className:"form form--editor",onSubmit:function(e){e.preventDefault();var s={id:Date.now(),nameOfApp:r,userLogin:u,userPassword:p};t(a.id,s)},children:[Object(i.jsx)("label",{className:"add-form__label",htmlFor:"nameOfApp",children:Object(i.jsx)("input",{className:"form__input",type:"text",name:"nameOfApp",value:r,onChange:function(e){o(e.target.value)}})}),Object(i.jsx)("label",{className:"add-form__label",htmlFor:"login",children:Object(i.jsx)("input",{className:"form__input",type:"text",name:"login",value:u,onChange:function(e){d(e.target.value)}})}),Object(i.jsx)("label",{className:"add-form__label",htmlFor:"login",children:Object(i.jsx)("input",{className:"form__input",type:"password",name:"password",value:p,onChange:function(e){f(e.target.value)}})}),Object(i.jsx)("button",{className:"button",type:"submit",children:"Edit"})]})})},f=(a(21),function(e){var t=e.addNewPassword,a=Object(s.useState)(""),n=Object(b.a)(a,2),c=n[0],r=n[1],o=Object(s.useState)(""),l=Object(b.a)(o,2),j=l[0],u=l[1],d=Object(s.useState)(""),m=Object(b.a)(d,2),O=m[0],p=m[1];return Object(i.jsx)("div",{className:"newPassword",children:Object(i.jsxs)("form",{className:"form newPassword__form",onSubmit:function(e){e.preventDefault();var a={id:Date.now(),nameOfApp:c,userLogin:j,userPassword:O};t(a),r(""),u(""),p("")},children:[Object(i.jsxs)("label",{className:"form__label",htmlFor:"nameOfApp",children:["App name",Object(i.jsx)("input",{className:"form__input",id:"nameOfApp",type:"text",name:"nameOfApp",value:c,onChange:function(e){r(e.target.value)}})]}),Object(i.jsxs)("label",{className:"form__label",htmlFor:"login",children:["Login",Object(i.jsx)("input",{className:"form__input",type:"text",id:"login",name:"login",value:j,onChange:function(e){u(e.target.value)}})]}),Object(i.jsxs)("label",{className:"form__label",htmlFor:"password",children:["Password",Object(i.jsx)("input",{className:"form__input",id:"password",type:"password",name:"password",value:O,onChange:function(e){p(e.target.value)}})]}),Object(i.jsx)("button",{className:"button",type:"submit",children:"Add"})]})})}),h=(a(22),function(e){var t=e.userLogin,a=Object(s.useState)("vlad"),c=Object(b.a)(a,1)[0],r=Object(s.useState)(null),l=Object(b.a)(r,2),j=l[0],u=l[1],d=Object(s.useState)(0),h=Object(b.a)(d,2),g=h[0],x=h[1],_=Object(s.useState)(0),v=Object(b.a)(_,2),w=v[0],N=v[1],S=function(){var e=JSON.parse(localStorage.getItem(c)||"");u(e)};Object(s.useEffect)((function(){S()}),[]);var y=function(e,t){if(null!==j){var a=Object(O.a)(Object(O.a)({},j),{},{savedPasswords:Object(m.a)(j.savedPasswords).map((function(a){return e===a.id?t:a}))});localStorage.setItem(c,JSON.stringify(a)),S()}};return console.log(t),Object(i.jsxs)("div",{className:"manager",children:[Object(i.jsx)(o.b,{to:"/",children:Object(i.jsx)("button",{className:"button manager__quite",type:"button",children:"Quit"})}),Object(i.jsx)(f,{addNewPassword:function(e){if(null!==j){var t=Object(O.a)(Object(O.a)({},j),{},{savedPasswords:[].concat(Object(m.a)(j.savedPasswords),[e])});localStorage.setItem(c,JSON.stringify(t)),S()}}}),Object(i.jsxs)("div",{className:"manager__passwords",children:["Passwords",Object(i.jsx)("ol",{className:"manager__list",children:null===j||void 0===j?void 0:j.savedPasswords.map((function(e){return Object(i.jsxs)(n.a.Fragment,{children:[Object(i.jsxs)("li",{className:"manager__list-item",children:[Object(i.jsx)("p",{children:"App name: ".concat(e.nameOfApp)}),Object(i.jsx)("p",{children:"Login: ".concat(e.userLogin)}),Object(i.jsx)("p",{children:w===e.id?"Password: ".concat(e.userPassword):"Password: ******"}),e.id===g&&Object(i.jsx)("div",{className:"manager__editor",children:Object(i.jsx)(p,{editPassword:y,password:e})})]}),Object(i.jsx)("button",{className:"button manager__button",type:"button",onClick:function(){g!==e.id?x(e.id):x(0)},children:"Edit"}),Object(i.jsx)("button",{className:"button manager__button",type:"button",onClick:function(){N(e.id)},children:"Show password"}),Object(i.jsx)("button",{className:"button manager__button",type:"button",onClick:function(){!function(e){if(null!==j){var t=Object(O.a)(Object(O.a)({},j),{},{savedPasswords:Object(m.a)(j.savedPasswords).filter((function(t){return e!==t.id}))});localStorage.setItem(c,JSON.stringify(t)),S()}}(e.id)},children:"Delete password"})]},e.id)}))})]})]})}),g=(a(23),function(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(""),r=Object(b.a)(c,2),o=r[0],j=r[1],u=Object(s.useState)(!1),d=Object(b.a)(u,2),m=d[0],O=d[1];return Object(i.jsxs)("div",{className:"reg",children:[Object(i.jsx)("h2",{className:"reg__title",children:"Registration"}),Object(i.jsxs)("form",{className:"form reg__form",onSubmit:function(e){e.preventDefault();var t={userLogin:a,userPassword:o,savedPasswords:[]};localStorage.setItem(t.userLogin,JSON.stringify(t)),O(!0)},children:[Object(i.jsxs)("label",{className:"form__label",htmlFor:"login",children:["Login",Object(i.jsx)("input",{className:"form__input",id:"login",type:"text",name:"login",value:a,onChange:function(e){n(e.target.value)}})]}),Object(i.jsxs)("label",{className:"form__label",htmlFor:"login",children:["Password",Object(i.jsx)("input",{className:"form__input",type:"password",name:"password",value:o,onChange:function(e){j(e.target.value)}})]}),Object(i.jsx)("button",{className:"button",type:"submit",children:"Submit"})]}),m&&Object(i.jsx)(l.a,{to:"/passwordManager",replace:!0})]})});r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsxs)(o.a,{children:[Object(i.jsx)(d,{}),Object(i.jsxs)(l.d,{children:[Object(i.jsx)(l.b,{path:"/",element:Object(i.jsx)(j,{})}),Object(i.jsx)(l.b,{path:"/authorization",element:Object(i.jsx)(u,{})}),Object(i.jsx)(l.b,{path:"/registration",element:Object(i.jsx)(g,{})}),Object(i.jsx)(l.b,{path:"/passwordManager",element:Object(i.jsx)(h,{userLogin:""})})]})]})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.849f8c64.chunk.js.map