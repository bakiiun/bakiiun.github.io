(function(t){function i(i){for(var a,r,s=i[0],c=i[1],l=i[2],d=0,p=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(i);while(p.length)p.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,i=0;i<o.length;i++){for(var e=o[i],a=!0,s=1;s<e.length;s++){var c=e[s];0!==n[c]&&(a=!1)}a&&(o.splice(i--,1),t=r(r.s=e[0]))}return t}var a={},n={app:0},o=[];function r(i){if(a[i])return a[i].exports;var e=a[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=a,r.d=function(t,i,e){r.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,i){if(1&i&&(t=r(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var a in t)r.d(e,a,function(i){return t[i]}.bind(null,a));return e},r.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(i,"a",i),i},r.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=i,s=s.slice();for(var l=0;l<s.length;l++)i(s[l]);var u=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},"034f":function(t,i,e){"use strict";var a=e("8a23"),n=e.n(a);n.a},1771:function(t,i,e){var a={"./Pipe_Rolling.png":"38d4","./bakiiun.jpg":"1fdc","./logo.png":"cf05","./logo.svg":"9b19","./project1.jpg":"5945"};function n(t){var i=o(t);return e(i)}function o(t){if(!e.o(a,t)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=o,t.exports=n,n.id="1771"},"1fdc":function(t,i,e){t.exports=e.p+"img/bakiiun.5777168e.jpg"},"38d4":function(t,i,e){t.exports=e.p+"img/Pipe_Rolling.16feafe0.png"},"56d7":function(t,i,e){"use strict";e.r(i);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-app",[e("v-btn",{staticClass:"ma-3 hold",attrs:{icon:""},on:{click:function(){return t.$vuetify.theme.dark=!t.$vuetify.theme.dark}}},[1==t.$vuetify.theme.dark?e("v-icon",[t._v("mdi-brightness-5")]):e("v-icon",[t._v("mdi-brightness-4")])],1),e("v-app-bar",{attrs:{flat:"","max-height":"50",color:"transparent"}}),e("v-container",[e("v-content",[e("Home",{attrs:{about:t.about,pList:t.projectList,cList:t.contactList}})],1)],1)],1)},o=[],r=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("div",{attrs:{align:"center"}},[a("v-avatar",{attrs:{size:t.sizer()}},[a("v-img",{attrs:{src:e("1fdc")}})],1),a("v-flex",{staticClass:"display-3 mt-7",attrs:{id:"Hello"}},[a("v-icon",{staticClass:"mb-2 mr-1",attrs:{size:"40",color:"light-blue darken-2"}},[t._v("mdi-pound")]),t._v("Hello ")],1),a("v-card",{staticClass:"body-1 mt-5",attrs:{"max-width":"800",flat:"",color:"transparent"}},[t._v(t._s(t.about))]),a("v-flex",{staticClass:"display-3 mt-7 mb-5",attrs:{id:"Projects"}},[a("v-icon",{staticClass:"mb-2 mr-1",attrs:{size:"40",color:"light-blue darken-2"}},[t._v("mdi-pound")]),t._v("Projects ")],1)],1),a("v-row",{staticClass:"d-flex justify-space-around"},t._l(t.pList,(function(i){return a("v-col",{key:i.id,attrs:{cols:"12",md:"4"}},[a("v-card",{attrs:{width:"350",tile:""}},[a("v-card",{staticClass:"pa-3",attrs:{flat:"",tile:""}},[a("v-card",{attrs:{flat:"",tile:""}},[a("v-img",{staticClass:"mb-3",attrs:{height:"200px",src:t.logo(i.logo)}}),a("v-btn",{attrs:{small:"",fab:"",bottom:"",right:"",color:"grey darken-3",target:"_blank",absolute:"",href:i.link}},[a("v-icon",{attrs:{size:"20",color:"white"}},[t._v("mdi-launch")])],1)],1),a("v-chip",{staticClass:"mb-1",attrs:{small:"",pill:"",color:i.color,"text-color":"white"}},[a("v-icon",{staticClass:"mr-1",attrs:{color:"white",small:""}},[t._v(t._s(i.tagicon))]),t._v(" "+t._s(i.tag)+" ")],1),a("div",{staticClass:"mb-1 title"},[t._v(t._s(i.name))]),a("div",{staticClass:"body-2"},[t._v(t._s(i.description))]),a("div",{staticClass:"mt-3 mb-1 title"},[t._v("Used Tech")]),a("v-row",t._l(i.techs,(function(i){return a("div",{key:i.id},[a("v-card",{staticClass:"text-center",attrs:{width:"80",height:"80",flat:""}},[a("v-avatar",[a("v-icon",[t._v(t._s(i.icon))])],1),a("div",{staticClass:"caption"},[t._v(t._s(i.name))])],1)],1)})),0)],1)],1)],1)})),1),a("div",{staticClass:"display-3 mt-7 mb-5",attrs:{id:"Contact",align:"center"}},[a("v-icon",{staticClass:"mb-2 mr-1",attrs:{size:"40",color:"light-blue darken-2"}},[t._v("mdi-pound")]),t._v("Contact ")],1),a("v-row",t._l(t.cList,(function(i){return a("v-col",{key:i.id,attrs:{cols:"12",md:"4"}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[a("v-card",{attrs:{width:"350",elevation:n?16:2,shaped:"",target:"_blank",href:i.link}},[a("v-container",[a("v-flex",{staticClass:"d-flex"},[a("v-avatar",{staticClass:"my-auto",attrs:{icon:""}},[a("v-icon",{attrs:{large:""}},[t._v(t._s(i.icon))])],1),a("v-flex",{staticClass:"my-auto"},[a("v-card-title",[t._v(t._s(i.title))]),a("v-card-subtitle",[t._v(t._s(i.subtitle))])],1)],1)],1)],1)]}}],null,!0)})],1)})),1),a("v-footer",{attrs:{color:"transparent"}},[a("div",{staticClass:"mx-auto"},[t._v(" "+t._s((new Date).getFullYear())+" — © "),a("strong",[t._v("bakiiun")])])])],1)},s=[],c={props:{about:{default:function(){return{}}},pList:{default:function(){return{}}},cList:{default:function(){return{}}}},methods:{sizer:function(){return window.screen.width<=600?"200":"400"},logo:function(t){return e("1771")("./"+t)}}},l=c,u=e("2877"),d=e("6544"),p=e.n(d),v=e("8212"),m=e("8336"),f=e("b0af"),b=e("99d9"),g=e("cc20"),h=e("62ad"),_=e("a523"),k=e("0e8f"),y=e("553a"),w=e("ce87"),C=e("132d"),x=e("adda"),j=e("0fd9"),V=Object(u["a"])(l,r,s,!1,null,null,null),O=V.exports;p()(V,{VAvatar:v["a"],VBtn:m["a"],VCard:f["a"],VCardSubtitle:b["a"],VCardTitle:b["b"],VChip:g["a"],VCol:h["a"],VContainer:_["a"],VFlex:k["a"],VFooter:y["a"],VHover:w["a"],VIcon:C["a"],VImg:x["a"],VRow:j["a"]});var P={name:"App",components:{Home:O},data:function(){return{about:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi nostrum architecto placeat est id, repellat debitis voluptate culpa dignissimos reprehenderit ipsa nulla optio reiciendis aperiam itaque consequuntur in, quia fugit?",projectList:[{id:"1",name:"Portfolio With VueJS",tag:"Software Web Project",tagicon:"mdi-checkbox-marked-circle",color:"light-blue darken-2",link:"https://github.com/bakiiun/VueJSPortfolio",logo:"project1.jpg",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi nostrum architecto placeat est id, repellat debitis voluptate culpa dignissimos reprehenderit ipsa nulla optio reiciendis aperiam itaque consequuntur in, quia fugit?",techs:[{id:"1",name:"VueJS",icon:"mdi-vuejs"},{id:"2",name:"Vuetify",icon:"mdi-vuetify"}]},{id:"2",name:"ANSYS Pipe Rolling",tag:"Mechanical Analyze",tagicon:"mdi-checkbox-marked-circle",color:"light-blue darken-2",link:"./src/other/Pipe_Rolling.html",logo:"Pipe_Rolling.png",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi nostrum architecto placeat est id, repellat debitis voluptate culpa dignissimos reprehenderit ipsa nulla optio reiciendis aperiam itaque consequuntur in, quia fugit?",techs:[{id:"1",name:"SolidWORKS",icon:"mdi-alpha-s-box"},{id:"2",name:"ANSYS",icon:"mdi-adobe"}]}],contactList:[{id:"1",subtitle:"Linkedin",title:"bakiiun",icon:"mdi-linkedin",link:"https://www.linkedin.com/in/bakiiun/"},{id:"2",subtitle:"GitHub",title:"bakiiun",icon:"mdi-github",link:"https://github.com/bakiiun"},{id:"3",subtitle:"E-Mail",title:"bakiiun@icloud.com",icon:"mdi-email-outline",link:"mailto:bakiiun@icloud.com"},{id:"4",subtitle:"Instagram",title:"bakiiun",icon:"mdi-instagram",link:"https://www.instagram.com/bakiiun/"},{id:"5",subtitle:"This is my CV. If you want more information of me.",title:"My CV",icon:"mdi-card-account-details-outline",link:"/cvlink"}]}}},S=P,L=(e("034f"),e("7496")),M=e("40dc"),q=e("a75b"),z=Object(u["a"])(S,n,o,!1,null,null,null),A=z.exports;p()(z,{VApp:L["a"],VAppBar:M["a"],VBtn:m["a"],VContainer:_["a"],VContent:q["a"],VIcon:C["a"]});var R=e("f309");a["a"].use(R["a"]);var T=new R["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:T,render:function(t){return t(A)}}).$mount("#app")},5945:function(t,i,e){t.exports=e.p+"img/project1.fd970c4d.jpg"},"8a23":function(t,i,e){},"9b19":function(t,i,e){t.exports=e.p+"img/logo.63a7d78d.svg"},cf05:function(t,i,e){t.exports=e.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.84af7372.js.map