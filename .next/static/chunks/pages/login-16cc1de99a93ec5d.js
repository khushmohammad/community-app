(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6429:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return a(4754)}])},4754:function(e,s,a){"use strict";a.r(s);var l=a(5893),r=a(7294),n=a(3299),c=a(1163),t=a(7536),i=a(7533),d=a(4231),o=a(8193),m=a(1664),b=a.n(m);let h=d.Ry({Email:d.Z_().required().email(),Password:d.Z_().required()}).required();s.default=function(){let e=(0,c.useRouter)(),[s,a]=(0,r.useState)(null),[d,m]=(0,r.useState)(""),[u,x]=(0,r.useState)(!1),{register:p,handleSubmit:f,formState:{errors:N}}=(0,t.cI)({resolver:(0,i.X)(h)});async function j(){let s=await (0,n.getSession)();s?e.push("/"):a(!0)}(0,r.useEffect)(()=>{j()},[]);let g=e=>w(e),w=async s=>{let a=JSON.stringify(s);try{let l=await (0,n.signIn)("credentials",{userdata:a,redirect:!1,callbackUrl:"/"});l.ok?e.push("/"):m("Invalid User Name or Password")}catch(r){m("Something went wrong in api")}},y=async e=>{await (0,n.signIn)(e,{callbackUrl:"http://localhost:3000"})};return(0,l.jsx)("div",{children:s&&s?(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-sm-9 col-md-7 col-lg-5 mx-auto",children:(0,l.jsx)("div",{className:"card border-0 shadow rounded-3 my-5",children:(0,l.jsxs)("div",{className:"card-body p-4 p-sm-5",children:[(0,l.jsx)("h5",{className:"card-title text-center mb-5 fw-light fs-5",children:"Sign In"}),(0,l.jsxs)("p",{className:"my-2 text-danger",children:[" ",d]}),(0,l.jsxs)("form",{onSubmit:f(g),children:[(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)("label",{className:"form-label",children:"Email address"}),(0,l.jsx)("input",{...p("Email"),type:"text",className:"form-control",id:"email",placeholder:"name@example.com"}),N.Email&&(0,l.jsx)("p",{className:"my-2 text-danger",children:N.Email.message})]}),(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)("label",{className:"form-label",children:"Password"}),(0,l.jsxs)("div",{className:"input-group mb-3",children:[(0,l.jsx)("input",{type:u?"text":"password",autoComplete:"on",...p("Password"),className:"form-control",placeholder:"Password","aria-label":"Recipient's username","aria-describedby":"pass-addon2"}),(0,l.jsx)("div",{className:"input-group-append",children:(0,l.jsx)("button",{className:"rounded-0 rounded-end btn btn-outline-secondary",type:"button",onClick:()=>x(!u),children:u?(0,l.jsx)(o.p3W,{size:24}):(0,l.jsx)(o.w8I,{size:24})})})]}),N.Password&&(0,l.jsx)("p",{className:"my-2 text-danger",children:N.Password.message})]}),(0,l.jsxs)("div",{className:"form-check mb-3",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",id:"rememberPasswordCheck"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"rememberPasswordCheck",children:"Remember password"})]}),(0,l.jsx)("div",{className:"d-grid",children:(0,l.jsx)("button",{className:"btn btn-primary btn-login text-uppercase fw-bold",type:"submit",children:"Login"})}),(0,l.jsx)("div",{className:"form-check my-3 w-100 text-center",children:(0,l.jsx)("label",{className:"form-check-label",htmlFor:"rememberPasswordCheck",children:(0,l.jsx)(b(),{href:"forgot-password",children:" Forgot password"})})}),(0,l.jsx)("div",{className:"d-grid",children:(0,l.jsxs)(b(),{href:"signup",children:[" ",(0,l.jsx)("button",{className:"btn btn-secondary btn-login text-uppercase fw-bold w-100",type:"submit",children:"Regiter"})]})})]}),(0,l.jsx)("hr",{className:"my-4"}),(0,l.jsx)("div",{className:"d-grid mb-2",children:(0,l.jsxs)("button",{onClick:()=>y("google"),className:"btn btn-danger btn-login text-uppercase fw-bold",type:"button",children:[(0,l.jsx)("i",{className:"fab fa-google me-2"})," Sign in with Google"]})}),(0,l.jsx)("div",{className:"d-grid",children:(0,l.jsxs)("button",{onClick:()=>y("facebook"),className:"btn btn-primary btn-facebook btn-login text-uppercase fw-bold",type:"button",children:[(0,l.jsx)("i",{className:"fab fa-facebook-f me-2"})," Sign in with Facebook"]})})]})})})})}):""})}}},function(e){e.O(0,[617,289,774,888,179],function(){return e(e.s=6429)}),_N_E=e.O()}]);