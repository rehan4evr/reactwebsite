(this.webpackJsonpreactlive=this.webpackJsonpreactlive||[]).push([[0],{161:function(e,a,t){e.exports=t.p+"static/media/img2.e981619f.svg"},163:function(e,a,t){e.exports=t.p+"static/media/app.70cea92a.jpeg"},164:function(e,a,t){e.exports=t.p+"static/media/android.19a2e0ea.jpeg"},165:function(e,a,t){e.exports=t.p+"static/media/digital.ac8f6f9a.jpeg"},166:function(e,a,t){e.exports=t.p+"static/media/marketing.2eed95a2.jpg"},167:function(e,a,t){e.exports=t.p+"static/media/software.43049cae.jpeg"},168:function(e,a,t){e.exports=t.p+"static/media/hero-img.619f0cc8.png"},169:function(e,a,t){e.exports=t(333)},201:function(e,a){},203:function(e,a){},211:function(e,a){},213:function(e,a){},231:function(e,a){},233:function(e,a){},261:function(e,a){},263:function(e,a){},264:function(e,a){},270:function(e,a){},272:function(e,a){},290:function(e,a){},293:function(e,a){},309:function(e,a){},312:function(e,a){},332:function(e,a,t){},333:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(160),m=t.n(r),s=(t(174),t(175),t(161)),c=t.n(s),o=t(14),i=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"header",className:"d-flex align-items-center"},l.a.createElement("div",{className:"container-fluid "},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 mx-auto"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"},l.a.createElement("h1",null,e.name,l.a.createElement("strong",{className:"brand-name"}," AftabTechnical ")),l.a.createElement("h2",{className:"my-3"},"We are the team of talented developer making websites"),l.a.createElement("div",{className:"mt-3"},l.a.createElement(o.b,{to:e.visit,className:"btn-get-started "},e.btname))),l.a.createElement("div",{className:"col-lg-6 order-1 order-lg-2 header-img"},l.a.createElement("img",{src:e.imgsrc,className:"img-fluid animated",alt:"Commom img"}))))))))},u=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{name:"Grow your business with",imgsrc:c.a,visit:"/service",btname:"Get Started"}))},d=t(83),p=t.n(d),E=t(163),g=t.n(E),h=t(164),f=t.n(h),N=t(165),v=t.n(N),b=t(166),x=t.n(b),C=t(167),w=t.n(C),F=[{imgsrc:p.a,title:"web development"},{imgsrc:g.a,title:"App development"},{imgsrc:w.a,title:"Software development"},{imgsrc:v.a,title:"Digital Marketing"},{imgsrc:f.a,title:"Android development"},{imgsrc:x.a,title:"Marketing"}],y=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-md-4 col-12 mx-auto"},l.a.createElement("div",{className:"card"},l.a.createElement("img",{src:e.imgsrc,className:"card-img-top",alt:e.imgsrc}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title font-weight-bold"},e.title),l.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),l.a.createElement(o.b,{to:"",className:"btn btn-primary"},"Check Now")))))},j=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"my-5"},l.a.createElement("h1",{className:"text-center"}," Our Services ")),l.a.createElement("div",{className:"container-fluid mb-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 mx-auto"},l.a.createElement("div",{className:"row gy-4"},F.map((function(e,a){return l.a.createElement(y,{key:a,imgsrc:e.imgsrc,title:e.title})})))))))},S=t(168),A=t.n(S),O=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{name:"Welcome to About page",imgsrc:A.a,visit:"/contact",btname:"Contact Now"}))},k=t(40),M=t(47),I=t(56),T=t(57),R=t(59),q=t(58),D=t(60),P=t(180),_=RegExp(/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),L=RegExp(/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/gm),V=function(e){Object(R.a)(t,e);var a=Object(q.a)(t);function t(e){var n;return Object(I.a)(this,t),(n=a.call(this,e)).sendEmail=function(){var e=P.createTransport({service:"smtp.gmail.com",auth:{user:"py-aftabhussain@mobiloitte.com",pass:"rehan786"}});console.log(e);e.sendMail({from:"py-aftabhussain@mobiloitte.com",to:"py-rishutiwari@mobiloitte.com",subject:"Sending Email using Node.js",text:"That was easy!"},(function(e,a){e?console.log(e):console.log("Email sent: "+a.response)}))},n.handleSubmit=function(e){e.preventDefault(),n.sendEmail();var a=Object(M.a)({},n.state.formErrors);!function(e){var a=e.formErrors,t=Object(D.a)(e,["formErrors"]),n=!0;return Object.values(a).forEach((function(e){e.length>0&&(n=!1)})),Object.values(t).forEach((function(e){null===e&&(n=!1)})),n}(n.state)?(console.error("FORM INVALID - DISPLAY ERROR MESSAGE"),null===n.state.fullName&&(a.fullName="This field is required."),null===n.state.email&&(a.email="This field is required."),null===n.state.phone&&(a.phone="This field is required."),null===n.state.message&&(a.message="This field is required."),n.setState({formErrors:a})):console.log("\n        --SUBMITTING--\n        Full Name: ".concat(n.state.fullName,"\n        Email: ").concat(n.state.email,"\n        Phone: ").concat(n.state.phone,"\n        Message: ").concat(n.state.message,"\n      "))},n.handelChangeEvent=function(e){e.preventDefault();var a=e.target,t=a.name,l=a.value;console.log(t,l);var r=Object(M.a)({},n.state.formErrors);switch(t){case"fullName":console.log("Case fullName"),r.fullName=l.length<3?"minimum 3 characaters required":"";break;case"email":r.email=_.test(l)?"":"invalid email address";break;case"phone":r.phone=L.test(l)?"":"invalid Phone no";break;case"message":r.message=l.length<10?"Minumum 10 characaters required":""}n.setState(Object(k.a)({formErrors:r},t,l),(function(){return console.log(n.state)}))},n.state={fullName:null,phone:null,email:null,message:null,formErrors:{fullName:"",phone:"",email:"",message:""}},n}return Object(T.a)(t,[{key:"render",value:function(){var e=this.state.formErrors;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"my-5"},l.a.createElement("h1",{className:"text-center"}," Contact US ")),l.a.createElement("div",{className:"container contact_div"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-10 mx-auto"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"exampleFormControlInput1",className:"form-label"},"FullName"),l.a.createElement("input",{type:"text",className:"form-control",id:"exampleFormControlInput1",name:"fullName",onChange:this.handelChangeEvent,placeholder:"Enter your name"}),e.fullName.length>0?l.a.createElement("span",{className:"errorMessage"},e.fullName):""),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"exampleFormControlInput1",className:"form-label"},"Phone"),l.a.createElement("input",{type:"number",className:"form-control",id:"exampleFormControlInput1",name:"phone",onChange:this.handelChangeEvent,placeholder:"mobile number"}),e.phone.length>0?l.a.createElement("span",{className:"errorMessage"},e.phone):""),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"exampleFormControlInput1",className:"form-label"},"Email address"),l.a.createElement("input",{type:"email",className:"form-control",id:"exampleFormControlInput1",name:"email",onChange:this.handelChangeEvent,placeholder:"name@example.com"}),e.email.length>0?l.a.createElement("span",{className:"errorMessage"},e.email):""),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label"},"Message"),l.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"3",name:"message",onChange:this.handelChangeEvent}),e.message.length>0?l.a.createElement("span",{className:"errorMessage"},e.message):""),l.a.createElement("div",{className:"col-12"},l.a.createElement("button",{className:"btn btn-outline-primary",type:"submit"},"Submit form")))))))}}]),t}(n.Component),z=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container-fluid nav_bg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 mx-auto"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(o.b,{className:"navbar-brand",to:"/"},"AftabTechnical"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav ml-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{activeClassName:"menu_active",exact:!0,className:"nav-link active","aria-current":"page",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{activeClassName:"menu_active",className:"nav-link",to:"/service"},"Services")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{activeClassName:"menu_active",className:"nav-link",to:"/about"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{activeClassName:"menu_active",className:"nav-link",to:"/contact"},"Contact"))))))))))},G=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",{className:"w-100 bg-light text-center"},l.a.createElement("p",null,"\xa9 2020 AftabTechnical. All Rights Reserved | Terms and Conditions")))},Z=RegExp(/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),$=function(e){Object(R.a)(t,e);var a=Object(q.a)(t);function t(e){var n;return Object(I.a)(this,t),(n=a.call(this,e)).handleSubmit=function(e){e.preventDefault(),!function(e){var a=e.formErrors,t=Object(D.a)(e,["formErrors"]),n=!0;return Object.values(a).forEach((function(e){e.length>0&&(n=!1)})),Object.values(t).forEach((function(e){null===e&&(n=!1)})),n}(n.state)?console.error("FORM INVALID - DISPLAY ERROR MESSAGE"):console.log("\n        --SUBMITTING--\n        First Name: ".concat(n.state.firstName,"\n        Last Name: ").concat(n.state.lastName,"\n        Email: ").concat(n.state.email,"\n        Password: ").concat(n.state.password,"\n      "))},n.handleChange=function(e){e.preventDefault();var a=e.target,t=a.name,l=a.value,r=Object(M.a)({},n.state.formErrors);switch(t){case"firstName":r.firstName=l.length<3?"minimum 3 characaters required":"";break;case"lastName":r.lastName=l.length<3?"minimum 3 characaters required":"";break;case"email":r.email=Z.test(l)?"":"invalid email address";break;case"password":r.password=l.length<6?"minimum 6 characaters required":""}n.setState(Object(k.a)({formErrors:r},t,l),(function(){return console.log(n.state)}))},n.state={firstName:null,lastName:null,email:null,password:null,formErrors:{firstName:"",lastName:"",email:"",password:""}},n}return Object(T.a)(t,[{key:"render",value:function(){var e=this.state.formErrors;return l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"form-wrapper"},l.a.createElement("h1",null,"Create Account"),l.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0},l.a.createElement("div",{className:"firstName"},l.a.createElement("label",{htmlFor:"firstName"},"First Name"),l.a.createElement("input",{className:e.firstName.length>0?"error":null,placeholder:"First Name",type:"text",name:"firstName",noValidate:!0,onChange:this.handleChange}),e.firstName.length>0&&l.a.createElement("span",{className:"errorMessage"},e.firstName)),l.a.createElement("div",{className:"lastName"},l.a.createElement("label",{htmlFor:"lastName"},"Last Name"),l.a.createElement("input",{className:e.lastName.length>0?"error":null,placeholder:"Last Name",type:"text",name:"lastName",noValidate:!0,onChange:this.handleChange}),e.lastName.length>0&&l.a.createElement("span",{className:"errorMessage"},e.lastName)),l.a.createElement("div",{className:"email"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{className:e.email.length>0?"error":null,placeholder:"Email",type:"email",name:"email",noValidate:!0,onChange:this.handleChange}),e.email.length>0&&l.a.createElement("span",{className:"errorMessage"},e.email)),l.a.createElement("div",{className:"password"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{className:e.password.length>0?"error":null,placeholder:"Password",type:"password",name:"password",noValidate:!0,onChange:this.handleChange}),e.password.length>0&&l.a.createElement("span",{className:"errorMessage"},e.password)),l.a.createElement("div",{className:"createAccount"},l.a.createElement("button",{type:"submit"},"Create Account"),l.a.createElement("small",null,"Already Have an Account?")))))}}]),t}(n.Component),B=t(8),U=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(z,null),l.a.createElement(B.d,null,l.a.createElement(B.b,{exact:!0,path:"/",component:u}),l.a.createElement(B.b,{exact:!0,path:"/about",component:O}),l.a.createElement(B.b,{exact:!0,path:"/service",component:j}),l.a.createElement(B.b,{exact:!0,path:"/contact",component:V}),l.a.createElement(B.b,{exact:!0,path:"/form",component:$}),l.a.createElement(B.a,{to:"/"})),l.a.createElement(G,null))};t(332);m.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,null,l.a.createElement(U,null))),document.getElementById("root"))},83:function(e,a,t){e.exports=t.p+"static/media/s1.1192a86d.jpg"}},[[169,1,2]]]);
//# sourceMappingURL=main.be273d79.chunk.js.map