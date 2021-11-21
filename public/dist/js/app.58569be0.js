(function(e){function t(t){for(var a,s,i=t[0],c=t[1],u=t[2],l=0,p=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);m&&m(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},o=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e91ce":"ec163539"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=n[e]=[t,a]}));t.push(r[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e);var u=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(l);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,r[1](u)}n[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var m=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"17be":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("navbar"),r("div",{staticClass:"row"},[r("b-col",{attrs:{col:"8",md:"9"}},[r("div",{staticClass:"row"},[r("h1",{staticStyle:{color:"#6b9fcf","font-size":"40","text-align":"center"}},[e._v("Campaigns")]),e._l(e.camps,(function(t,a){return r("div",{key:a,staticStyle:{color:"#fff",width:"40%",padding:"10%"}},[r("h3",{staticStyle:{color:"Black"}},[e._v(e._s(t.Topic))]),r("img",{attrs:{src:"http://localhost:3000/"+t.image}}),r("p",{staticStyle:{"font-style":"italic",color:"Black"}},[e._v("Posted By: "+e._s(t.PostedBy)+" on "+e._s(new Date(t.PostedDate).toLocaleString())+" ")]),r("p",{staticStyle:{color:"Black","font-weight":"Bold"}},[e._v(e._s(t.Message))])])}))],2)]),r("b-col",{attrs:{col:"4",md:"3"}},[r("div",{staticStyle:{"background-color":"#6b9fcf"}},[r("h1",{staticStyle:{color:"white","text-align":"center"}},[e._v("Advertisements")])]),e._l(e.ads,(function(e,t){return r("div",{key:t,staticStyle:{padding:"5%",width:"100%","background-color":"#6b9fcf",color:"white"}},[r("img",{attrs:{src:"http://localhost:3000/"+e.imageUrl}})])}))],2)],1)],1)},n=[],o=r("1da1"),s=(r("96cf"),r("4de4"),r("4da1")),i=r("48ac"),c=r.n(i),u=r("d178"),l={name:"camps",components:{Navbar:u["a"]},data:function(){return{camps:[],user:{},ads:[]}},methods:{onDestroy:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=window.confirm("Are you sure?"),a){r.next=3;break}return r.abrupt("return");case 3:return r.next=5,s["a"].deletecamp(e);case 5:t.flash("Campaign deleted sucessfully!","success"),n=t.camps.filter((function(t){return t._id!==e})),t.camps=n;case 8:case"end":return r.stop()}}),r)})))()},getUserDetails:function(){var e=localStorage.getItem("jwt"),t=c.a.decode(e);this.user=t},logUserOut:function(){localStorage.removeItem("jwt"),this.$router.push("/")}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s["a"].getads();case 2:return e.ads=t.sent,t.next=5,s["a"].getcampaigns();case 5:r=t.sent,e.camps=r,console.log(r),e.getUserDetails(),console.log(e.ads);case 10:case"end":return t.stop()}}),t)})))()}},m=l,p=(r("b8c9"),r("2877")),d=Object(p["a"])(m,a,n,!1,null,null,null);t["default"]=d.exports},"1a12":function(e,t,r){},2106:function(e,t,r){},"3bce":function(e,t,r){"use strict";r("2106")},4366:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],on:{click:function(t){e.modalShow=!e.modalShow}}},[e._v("Create Campaign")]),r("b-modal",{attrs:{id:"modal-1",title:"Campaign"},model:{value:e.modalShow,callback:function(t){e.modalShow=t},expression:"modalShow"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",[r("form",{staticClass:"text-center border border-warning p-5",staticStyle:{"margin-top":"50px","padding-top":"50px !important"},on:{submit:e.onSubmit}},[r("h1",[e._v(" New Campaign ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.Title,expression:"form.Title"}],staticClass:"form-control mb-5",attrs:{type:"text",id:"Title",placeholder:"Title",required:""},domProps:{value:e.form.Title},on:{input:function(t){t.target.composing||e.$set(e.form,"Title",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.Message,expression:"form.Message"}],staticClass:"form-control mb-5",attrs:{type:"text",id:"Message",placeholder:"Description",required:""},domProps:{value:e.form.Message},on:{input:function(t){t.target.composing||e.$set(e.form,"Message",t.target.value)}}}),r("b-form-file",{attrs:{state:Boolean(e.form.image),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}}),r("div",{staticClass:"mt-3"},[e._v("Selected file: "+e._s(e.form.image?e.form.image.name:""))]),r("center",[r("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Create Campaign")])],1)],1)])])])])],1)},n=[],o=r("1da1"),s=(r("96cf"),r("4da1")),i=r("48ac"),c=r.n(i),u={name:"new_campaign",props:{method:{type:Function}},data:function(){return{form:{Title:"",Message:"",image:null,PostedBy:null},modalShow:!1}},methods:{onSubmit:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.preventDefault(),a=new FormData,a.append("Title",t.form.Title),a.append("Message",t.form.Message),a.append("PostedBy",t.form.PostedBy),a.append("image",t.form.image),r.next=8,s["a"].createcamp(a);case 8:return r.sent,t.form={Title:"",Message:"",image:null,PostedBy:null},r.next=12,s["a"].getcampaigns();case 12:n=r.sent,t.$emit("new-campaign",n),t.modalShow=!1;case 15:case"end":return r.stop()}}),r)})))()},onReset:function(e){e.preventDefault(),this.form={Title:"",Message:"",image:null}}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s["a"].getcampaigns();case 2:return e.camps=t.sent,t.next=5,s["a"].getads();case 5:e.ads=t.sent,r=localStorage.getItem("jwt"),a=c.a.decode(r),e.form.PostedBy=a.fname;case 9:case"end":return t.stop()}}),t)})))()}},l=u,m=r("2877"),p=Object(m["a"])(l,a,n,!1,null,null,null);t["default"]=p.exports},"4da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var a,n=r("ade3"),o=r("1da1"),s=(r("96cf"),r("99af"),r("bc3a")),i=r.n(s),c=r("2b0e"),u=r("d00d"),l=r.n(u);r("f59c");c["default"].use(l.a,{messageOptions:{timeout:3e3,pauseOnInteract:!0}});var m=new c["default"],p="http://localhost:3000/user/campaigns/",d="http://localhost:3000/user/ads/",f=function(e){return function(){return e.apply(void 0,arguments).catch((function(e){m.flash("".concat(e.response.status,": ").concat(e.response.statusText),"error")}))}},g=(a={getcamp:f(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.a.get(p+t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),getcampaigns:f(Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.a.get(p);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),getAllCampaigns:f(Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.a.get(p+"all");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)}))))},Object(n["a"])(a,"getcampaigns",f(Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.a.get(p);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)}))))),Object(n["a"])(a,"deletecamp",f(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.a.delete(p+t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),Object(n["a"])(a,"createcamp",f(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={header:{"Content-Type":"multipart/form-data"}},e.next=3,i.a.post(p,t,r);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),Object(n["a"])(a,"updatecamp",f(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.a.put(p+t._id,t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),Object(n["a"])(a,"getAdv",f(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.a.get(d+t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),Object(n["a"])(a,"getads",f(Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.a.get(d);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)}))))),Object(n["a"])(a,"deleteAdv",f(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.a.delete(d+t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),Object(n["a"])(a,"createAdv",f(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.a.post(d,t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),Object(n["a"])(a,"updateAdv",f(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.a.put(d+t._id,t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),a)},"517f":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{height:"100vh"},attrs:{id:"app"}},[r("div",{staticClass:"bgc"},[r("div",{staticClass:"ui one column grid"},[r("div",{staticClass:"column"},[r("router-view")],1)])])])},o=[],s=(r("48ac"),r("d178")),i={components:{Navbar:s["a"]},name:"app"},c=i,u=(r("034f"),r("2877")),l=Object(u["a"])(c,n,o,!1,null,null,null),m=l.exports,p=r("bc3a"),d=r.n(p),f=r("1dce"),g=r.n(f),v=r("5f5b"),h=r("b1e0"),b=r("bd8c"),w=r.n(b),y=(r("f9e3"),r("2dd8"),r("87ee"),r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),x=r("17be");r("dd7b"),r("7803"),r("d632");a["default"].use(y["a"]);var _=[{path:"/Campaigns",name:"Campaigns",component:x["default"],meta:{disallowAuthed:!0}},{path:"/",name:"Campaigns",component:function(){return Promise.resolve().then(r.bind(null,"17be"))}},{path:"/register",name:"register",component:function(){return Promise.resolve().then(r.bind(null,"7803"))}},{path:"/login",name:"login",component:function(){return Promise.resolve().then(r.bind(null,"dd7b"))}},{path:"/Usercampaign",name:"Usercampaign",component:function(){return Promise.resolve().then(r.bind(null,"d632"))},meta:{requiresAuth:!0}},{path:"/manage",name:"Manage",component:function(){return r.e("chunk-2d0e91ce").then(r.bind(null,"8bc1"))},meta:{requiresAuth:!0}},{path:"/new_campaign",name:"new_campaign",component:function(){return Promise.resolve().then(r.bind(null,"4366"))},meta:{requiresAuth:!0}}],k=new y["a"]({mode:"history",base:"/",routes:_});k.beforeEach((function(e,t,r){e.matched.some((function(e){return e.meta.requiresAuth}))&&null==localStorage.getItem("jwt")?r({path:"/"}):r()}));var S=k;a["default"].use(v["a"]),a["default"].use(h["a"]),a["default"].use(w.a),a["default"].use(g.a);var C=d.a.create({baseURL:"http://localhost:3000"});a["default"].prototype.$http=C,a["default"].config.productionTip=!1,new a["default"]({router:S,render:function(e){return e(m)}}).$mount("#app")},"5dfc":function(e,t,r){"use strict";r("1a12")},7803:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register"},[r("navbar"),r("register")],1)},n=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container",staticStyle:{height:"100vh"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6 offset-lg-3 col-sm-10 offset-sm-1"},[r("form",{staticClass:"text-center border border-warning p-5",staticStyle:{"margin-top":"50px","padding-top":"100px !important"},on:{submit:function(t){return t.preventDefault(),e.registerUser.apply(null,arguments)}}},[r("p",{staticStyle:{float:"right"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),r("img",{staticStyle:{height:"20%",width:"20%"},attrs:{src:"Dogoodlogo.ico"}}),r("h1",{staticStyle:{color:"Black"}},[e._v(" Register ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.fname,expression:"register.fname"}],staticClass:"form-control mb-5",attrs:{type:"text",id:"fname",placeholder:"First Name",required:""},domProps:{value:e.register.fname},on:{input:function(t){t.target.composing||e.$set(e.register,"fname",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.lname,expression:"register.lname"}],staticClass:"form-control mb-5",attrs:{type:"text",id:"lname",placeholder:"Last Name",required:""},domProps:{value:e.register.lname},on:{input:function(t){t.target.composing||e.$set(e.register,"lname",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.email,expression:"register.email"}],staticClass:"form-control mb-5",attrs:{type:"email",id:"email",placeholder:"Email",required:""},domProps:{value:e.register.email},on:{input:function(t){t.target.composing||e.$set(e.register,"email",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.password,expression:"register.password"}],staticClass:"form-control mb-5",attrs:{type:"password",id:"password",placeholder:"Password",required:""},domProps:{value:e.register.password},on:{input:function(t){t.target.composing||e.$set(e.register,"password",t.target.value)}}}),r("p",{staticStyle:{color:"Black"}},[e._v(" Already have an account??"),r("router-link",{attrs:{to:"/login"}},[e._v("click here")]),r("center",[r("button",{staticClass:"btn btn-warning btn-block w-75 my-4",attrs:{type:"submit"}},[e._v(" Register ")])])],1)])])])])},s=[],i=r("1da1"),c=(r("96cf"),r("1940")),u=r.n(c),l={data:function(){return{register:{fname:"",lname:"",email:"",password:""}}},methods:{registerUser:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.post("/user/register",e.register);case 3:r=t.sent,console.log(r),a=r.data.token,a?(localStorage.setItem("jwt",a),e.$router.push("/login"),u()("Success","Registration Was successful","success")):u()("Error","Something Went Wrong","error"),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),n=t.t0.response,409==n.status?u()("Error",n.data.message,"error"):u()("Error",n.data.err.message,"error");case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},m=l,p=r("2877"),d=Object(p["a"])(m,o,s,!1,null,null,null),f=d.exports,g=r("d178"),v={components:{register:f,Navbar:g["a"]}},h=v,b=Object(p["a"])(h,a,n,!1,null,null,null);t["default"]=b.exports},"85ec":function(e,t,r){},b8c9:function(e,t,r){"use strict";r("517f")},d178:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar navbar-expand navbar-brand bgcolor"},[e._m(0),r("h1",{staticClass:"Appname"},[e._v(" DOGOOD ")]),r("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNav"}},[r("ul",{staticClass:"navbar-nav"},[e.user?e._e():r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",on:{click:e.registerpage}},[e._v(" Register")])]),e.user?e._e():r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",on:{click:e.loginpage}},[e._v(" Login")])]),e.user?r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",on:{click:e.usercampaignpage}},[e._v(" Home")])]):e._e(),e.user?r("li",{staticClass:"nav-item"},["admin"===e.user.role?r("a",{staticClass:"nav-link",on:{click:e.managepage}},[e._v(" Manage Campaign")]):e._e()]):e._e(),e.user?r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",on:{click:e.logUserOut}},[e._v(" Logout")])]):e._e()])])])},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{attrs:{href:"/Usercampaign"}},[r("img",{staticStyle:{width:"100px"},attrs:{src:"Dogoodlogo.ico"}})])}],o=r("1da1"),s=(r("96cf"),r("48ac")),i=r.n(s),c={name:"Navbar",data:function(){return{user:null}},methods:{getUserDetails:function(){var e=localStorage.getItem("jwt"),t=i.a.decode(e);console.log(t),this.user=t},logUserOut:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:localStorage.removeItem("jwt"),e.$router.push("/");case 2:case"end":return t.stop()}}),t)})))()},registerpage:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$router.push("/register");case 1:case"end":return t.stop()}}),t)})))()},managepage:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$router.push("/manage");case 1:case"end":return t.stop()}}),t)})))()},loginpage:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$router.push("/login");case 1:case"end":return t.stop()}}),t)})))()},usercampaignpage:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$router.push("/Usercampaign");case 1:case"end":return t.stop()}}),t)})))()}},created:function(){this.getUserDetails()}},u=c,l=(r("5dfc"),r("2877")),m=Object(l["a"])(u,a,n,!1,null,null,null);t["a"]=m.exports},d632:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("navbar"),r("div",{staticStyle:{"background-color":"#fefce7"}},[r("h1",{staticStyle:{"padding-right":"1%",color:"Black","text-align":"right"}},[e._v(" Welcome "+e._s(e.user.fname)+" ")])]),e._m(0),r("div",{staticClass:"row"},[r("b-col",{attrs:{col:"8",md:"9"}},[r("div",{staticClass:"row"},[r("h1",{staticStyle:{color:"#6b9fcf","font-size":"40","text-align":"center"}},[e._v("Campaigns")]),r("div",{staticStyle:{"padding-left":"3%"}},[r("new-campaign",{on:{"new-campaign":e.campaignCreated}})],1),e._l(e.camps,(function(t,a){return r("div",{key:a,staticStyle:{color:"#fff",width:"50%",padding:"3%","padding-bottom":"10%"}},[r("h3",{staticStyle:{color:"Black"}},[e._v(e._s(t.Topic))]),r("img",{attrs:{src:"http://localhost:3000/"+t.image}}),r("p",{staticStyle:{"font-style":"italic",color:"Black"}},[e._v("Posted By: "+e._s(t.PostedBy)+" on "+e._s(new Date(t.PostedDate).toLocaleString())+" ")]),r("h3",{staticStyle:{color:"Black"}},[e._v(e._s(t.Message))]),r("ShareNetwork",{staticStyle:{padding:"10px"},attrs:{network:"facebook",url:e.location,title:t.Topic}},[r("b-icon",{attrs:{icon:"facebook","aria-hidden":"true"}})],1),r("ShareNetwork",{staticStyle:{padding:"10px"},attrs:{network:"twitter",url:e.location,title:t.Topic}},[r("b-icon",{attrs:{icon:"twitter","aria-hidden":"true"}})],1),r("ShareNetwork",{staticStyle:{padding:"10px"},attrs:{network:"whatsapp",url:e.location,title:t.Topic}},[r("b-icon",{attrs:{icon:"chat-text","aria-hidden":"true"}})],1)],1)}))],2)]),r("b-col",{attrs:{col:"4",md:"3"}},[r("div",{staticStyle:{"background-color":"#6b9fcf"}},[r("h1",{staticStyle:{color:"white","text-align":"center"}},[e._v("Advertisements")]),r("div",{staticStyle:{"text-align":"right","padding-right":"5%"}},[r("create-adv")],1)]),e._l(e.ads,(function(e,t){return r("div",{key:t,staticStyle:{padding:"5%",width:"100%","background-color":"#6b9fcf",color:"white"}},[r("img",{attrs:{src:"http://localhost:3000/"+e.imageUrl}})])}))],2)],1)],1)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{"padding-left":"2%"}},[r("br")])}],o=r("1da1"),s=(r("96cf"),r("4de4"),r("4da1")),i=r("48ac"),c=r.n(i),u=r("4366"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-2",modifiers:{"modal-2":!0}}],on:{click:function(t){e.modal=!e.modal}}},[e._v("Create Advertisment")]),r("b-modal",{attrs:{id:"modal-2",title:"New Ad"},model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",[r("form",{staticClass:"text-center border border-warning p-5",staticStyle:{"margin-top":"50px","padding-top":"50px !important"},on:{submit:e.onSubmit}},[r("h1",[e._v(" New Advertisment ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.Title,expression:"form.Title"}],staticClass:"form-control mb-5",attrs:{type:"text",id:"Title",placeholder:"Title",required:""},domProps:{value:e.form.Title},on:{input:function(t){t.target.composing||e.$set(e.form,"Title",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.Message,expression:"form.Message"}],staticClass:"form-control mb-5",attrs:{type:"text",id:"Message",placeholder:"Description",required:""},domProps:{value:e.form.Message},on:{input:function(t){t.target.composing||e.$set(e.form,"Message",t.target.value)}}}),r("b-form-file",{attrs:{state:Boolean(e.form.image),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}}),r("div",{staticClass:"mt-3"},[e._v("Selected file: "+e._s(e.form.image?e.form.image.name:""))]),r("center",[r("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Create Advertisement")])],1)],1)])])])])],1)},m=[],p={name:"create_adv",props:{method:{type:Function}},data:function(){return{form:{Title:"",Message:"",image:null,PostedBy:null},modal:!1}},methods:{onSubmit:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.preventDefault(),a=new FormData,a.append("Title",t.form.Title),a.append("Message",t.form.Message),a.append("PostedBy",t.form.PostedBy),a.append("image",t.form.image),r.next=8,s["a"].createAdv(a);case 8:n=r.sent,t.form={Title:"",Message:"",image:null,PostedBy:null},t.$emit("create-adv",n),t.modal=!1;case 12:case"end":return r.stop()}}),r)})))()},onReset:function(e){e.preventDefault(),this.form={Title:"",Message:"",image:null}}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s["a"].getads();case 2:e.ads=t.sent,r=localStorage.getItem("jwt"),a=c.a.decode(r),e.form.PostedBy=a.fname;case 6:case"end":return t.stop()}}),t)})))()}},d=p,f=r("2877"),g=Object(f["a"])(d,l,m,!1,null,null,null),v=g.exports,h=r("d178"),b={name:"camps",components:{NewCampaign:u["default"],CreateAdv:v,Navbar:h["a"]},data:function(){return{camps:[],user:{},ads:[],location:location.href}},methods:{onDestroy:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=window.confirm("Are you sure?"),a){r.next=3;break}return r.abrupt("return");case 3:return r.next=5,s["a"].deletecamp(e);case 5:t.flash("Campaign deleted sucessfully!","success"),n=t.camps.filter((function(t){return t._id!==e})),t.camps=n;case 8:case"end":return r.stop()}}),r)})))()},getUserDetails:function(){var e=localStorage.getItem("jwt"),t=c.a.decode(e);this.user=t},logUserOut:function(){localStorage.removeItem("jwt"),this.$router.push("/")},campaignCreated:function(e){this.camps=e}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s["a"].getcampaigns();case 2:return r=t.sent,e.camps=r,console.log(r),e.getUserDetails(),t.next=8,s["a"].getads();case 8:e.ads=t.sent,console.log(e.ads);case 10:case"end":return t.stop()}}),t)})))()}},w=b,y=(r("3bce"),Object(f["a"])(w,a,n,!1,null,null,null));t["default"]=y.exports},dd7b:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("navbar"),r("login")],1)},n=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container",staticStyle:{height:"100vh"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6 offset-lg-3 col-sm-10 offset-sm-1"},[r("form",{staticClass:"text-center border border-warning p-5",staticStyle:{"margin-top":"50px","padding-top":"50px !important"},on:{submit:function(t){return t.preventDefault(),e.loginUser.apply(null,arguments)}}},[r("img",{staticStyle:{height:"20%",width:"20%"},attrs:{src:"Dogoodlogo.ico"}}),r("p",{staticStyle:{float:"right"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),r("h1",{staticStyle:{color:"Black"}},[e._v(" Login ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.login.email,expression:"login.email"}],staticClass:"form-control mb-5",attrs:{type:"email",id:"email",placeholder:"Email",required:""},domProps:{value:e.login.email},on:{input:function(t){t.target.composing||e.$set(e.login,"email",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.login.password,expression:"login.password"}],staticClass:"form-control mb-5",attrs:{type:"password",id:"password",placeholder:"Password",required:""},domProps:{value:e.login.password},on:{input:function(t){t.target.composing||e.$set(e.login,"password",t.target.value)}}}),r("p",{staticStyle:{color:"Black"}},[e._v(" Dont have an account??"),r("router-link",{attrs:{to:"/register"}},[e._v("click here")])],1),r("center",[r("button",{staticClass:"btn btn-warning btn-block w-75 my-4",attrs:{type:"submit"}},[e._v(" Sign in ")])])],1)])])])},s=[],i=r("1da1"),c=(r("96cf"),r("1940")),u=r.n(c),l={components:{},data:function(){return{login:{email:"",password:""}}},methods:{loginUser:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.post("/user/login",e.login);case 3:r=t.sent,console.log(r),a=r.data.token,localStorage.setItem("jwt",a),a&&(u()("Success","Login Successful","Error"),e.$router.push("/Usercampaign")),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](0),u()("Error","Something Went Wrong","error"),console.log(t.t0.response);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}},m=l,p=r("2877"),d=Object(p["a"])(m,o,s,!1,null,null,null),f=d.exports,g=r("d178"),v={components:{login:f,Navbar:g["a"]}},h=v,b=Object(p["a"])(h,a,n,!1,null,null,null);t["default"]=b.exports}});
//# sourceMappingURL=app.58569be0.js.map