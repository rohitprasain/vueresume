(function(t){function e(e){for(var r,n,c=e[0],o=e[1],l=e[2],p=0,m=[];p<c.length;p++)n=c[p],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&m.push(s[n][0]),s[n]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,c=1;c<a.length;c++){var o=a[c];0!==s[o]&&(r=!1)}r&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},s={app:0},i=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("b3c3")},"0e21":function(t,e,a){},"0e58":function(t,e,a){},1798:function(t,e,a){},"343c":function(t,e,a){"use strict";a("51c6")},4444:function(t,e,a){"use strict";a("ce1c")},"459e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mainexperience"},[t._m(0),t._m(1),a("h4",[t._v("Gallery")]),a("div",{staticClass:"slider"},[a("q-carousel",{attrs:{animated:"",navigation:"","control-color":"black",infinite:"",autoplay:t.autoplay,arrows:"","transition-prev":"slide-right","transition-next":"slide-left",height:"600px"},on:{mouseenter:function(e){t.autoplay=!1},mouseleave:function(e){t.autoplay=!0}},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[a("q-carousel-slide",{attrs:{name:1,"img-src":"/images/c6.jpg"}}),a("q-carousel-slide",{attrs:{name:2,"img-src":"/images/c5.jpg"}}),a("q-carousel-slide",{attrs:{name:3,"img-src":"/images/c4.jpg"}}),a("q-carousel-slide",{attrs:{name:4,"img-src":"/images/c3.jpg"}}),a("q-carousel-slide",{attrs:{name:5,"img-src":"/images/c2.jpg"}}),a("q-carousel-slide",{attrs:{name:6,"img-src":"/images/c1.jpg"}})],1)],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info"},[a("h4",[t._v("Experience/Education")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"description"},[a("ul",[a("h5",[a("li",[t._v("Intern at ITGlance (Full Stack)")])]),a("h5",[a("li",[t._v("One year experience as web developer")])]),a("h5",[a("li",[t._v("Bsc. CSIT from Tribhuvan University")])]),a("h5",[a("li",[t._v("+2 Science")])])])])}],i={data:function(){return{slide:1,autoplay:!0}},created:function(){document.documentElement.scrollTop=0}},n=i,c=(a("343c"),a("2877")),o=a("880c"),l=a("62cd"),u=a("93dc"),p=a.n(u),m=Object(c["a"])(n,r,s,!1,null,"fdd68186",null);e["default"]=m.exports;p()(m,"components",{QCarousel:o["a"],QCarouselSlide:l["a"]})},"51c6":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{staticClass:" bg-grey-2",attrs:{elevated:""}},[a("q-toolbar",[a("q-toolbar-title",{staticClass:"text-center text-black main"},[a("router-link",{attrs:{to:"/"}},[t._v(" Hello 👋 ")])],1),a("q-btn",{staticClass:"text-black",attrs:{flat:"",dense:"",round:"","aria-label":"Menu",icon:"menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}})],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-2",width:250},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-black text-center ",attrs:{header:""}},[a("router-link",{attrs:{to:"/"}},[a("q-avatar",{attrs:{size:"75px"}},[a("img",{attrs:{src:"images/logo.png"}})])],1)],1),a("router-link",{attrs:{to:"/"}},[a("q-item",{attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"home"}})],1),a("q-item-section",[a("q-item-label",[t._v("Home")])],1)],1)],1),a("router-link",{attrs:{to:"/about"}},[a("q-item",{attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"people"}})],1),a("q-item-section",[a("q-item-label",[t._v("About")])],1)],1)],1),a("router-link",{attrs:{to:"/projects"}},[a("q-item",{attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"website"}})],1),a("q-item-section",[a("q-item-label",[t._v("Projects")])],1)],1)],1),a("router-link",{attrs:{to:"/experience"}},[a("q-item",{attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"computer"}})],1),a("q-item-section",[a("q-item-label",[t._v("Experience")])],1)],1)],1),a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://github.com/rohitprasain?tab=repositories"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"code"}})],1),a("q-item-section",[a("q-item-label",[t._v("Github")]),a("q-item-label",{attrs:{caption:""}},[t._v("@rohitprasain")])],1)],1),a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://www.linkedin.com/in/rohit-prasain-33799118b/"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"linkedin"}})],1),a("q-item-section",[a("q-item-label",[t._v("LinkedIn")]),a("q-item-label",{attrs:{caption:""}},[t._v("@rohitprasain")])],1)],1),a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://twitter.com/rohitprasain99"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"rss_feed"}})],1),a("q-item-section",[a("q-item-label",[t._v("Twitter")]),a("q-item-label",{attrs:{caption:""}},[t._v("@rohitprasain99")])],1)],1),a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://www.facebook.com/hawa.manche.925/"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"facebook"}})],1),a("q-item-section",[a("q-item-label",[t._v("Facebook")]),a("q-item-label",{attrs:{caption:""}},[t._v("@rohitprasain")])],1)],1),a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://cswithrohit1.blogspot.com/"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"book"}})],1),a("q-item-section",[a("q-item-label",[t._v("Blogs")]),a("q-item-label",{attrs:{caption:""}},[t._v("@blogspot")])],1)],1)],1)],1),a("q-page-container",{staticClass:"views"},[a("router-view")],1)],1)},i=[],n={name:"App",components:{},created:function(){document.documentElement.scrollTop=0},data:function(){return{leftDrawerOpen:!1}}},c=n,o=(a("034f"),a("2877")),l=a("4d5a"),u=a("e359"),p=a("65c6"),m=a("6ac5"),v=a("9c40"),d=a("9404"),f=a("1c1c"),g=a("0170"),h=a("cb32"),b=a("66e5"),_=a("4074"),q=a("0016"),k=a("09e3"),C=a("93dc"),x=a.n(C),w=Object(o["a"])(c,s,i,!1,null,null,null),y=w.exports;x()(w,"components",{QLayout:l["a"],QHeader:u["a"],QToolbar:p["a"],QToolbarTitle:m["a"],QBtn:v["a"],QDrawer:d["a"],QList:f["a"],QItemLabel:g["a"],QAvatar:h["a"],QItem:b["a"],QItemSection:_["a"],QIcon:q["a"],QPageContainer:k["a"]});a("d3b7"),a("3ca3"),a("ddb0");var j=a("8c4f"),z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[t._m(0),a("div",{},[a("About")],1),a("div",{staticClass:"extra"},[a("Project")],1),a("div",{staticClass:"extra"},[a("Experience")],1)])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"intro"},[a("div",{staticClass:"innerintro"},[a("h4",[t._v("I'm")]),a("h4",{staticClass:"name"},[t._v("Rohit Prasain")]),a("h5",[t._v("Full stack developer")]),a("h5",[t._v("Kathmandu,Nepal")])])])}],O=(a("5ac3"),a("f820")),P=a("acca"),V=a("459e"),Q={name:"Home",components:{About:O["default"],Project:P["default"],Experience:V["default"]},data:function(){return{}},created:function(){document.documentElement.scrollTop=0}},S=Q,T=(a("f70a"),Object(o["a"])(S,z,E,!1,null,"151f0242",null)),$=T.exports;r["a"].use(j["a"]);var H=[{path:"/",name:"Home",component:$},{path:"/about",name:"About",component:function(){return Promise.resolve().then(a.bind(null,"f820"))}},{path:"/projects",name:"Projects",component:function(){return Promise.resolve().then(a.bind(null,"acca"))}},{path:"/experience",name:"Experience",component:function(){return Promise.resolve().then(a.bind(null,"459e"))}}],A=new j["a"]({mode:"history",base:"/",routes:H}),I=A,L=a("2f62");r["a"].use(L["a"]);var D=new L["a"].Store({state:{},mutations:{},actions:{},modules:{}}),F=(a("0e21"),a("e54f"),a("b05d"));r["a"].use(F["a"],{config:{},plugins:{}}),r["a"].config.productionTip=!1,new r["a"]({router:I,store:D,render:function(t){return t(y)}}).$mount("#app")},"5ac3":function(t,e,a){},acca:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[t._m(0),a("div",{staticClass:"aboutproject"},[a("section",[t._m(1),a("div",{staticClass:"projectdescription"},[a("h5",[t._v("AdhikariClothing")]),a("h6",[t._v("Website for a clothing shop")]),a("p",[t._v("Laravel(full stack) and Heroku(deployment)")]),a("a",{attrs:{href:"http://adhikariclothing.herokuapp.com/",target:"_blank"}},[a("q-btn",{staticClass:"btn",attrs:{color:"cyan-6",label:"View Project"}})],1)])]),a("section",[t._m(2),a("div",{staticClass:"projectdescription"},[a("h5",[t._v("Agrotech Nepal")]),a("h6",[t._v("Website to buy agriculture tools")]),a("p",[t._v("React, Graphql(Hasura) and Heroku")]),a("a",{attrs:{href:"http://agrotechnepal.herokuapp.com/",target:"_blank"}},[a("q-btn",{staticClass:"btn",attrs:{color:"cyan-6",label:"View Project"}})],1)])]),a("section",[t._m(3),a("div",{staticClass:"projectdescription"},[a("h5",[t._v("Color changing snake")]),a("h6",[t._v("Snake change color after eating")]),a("p",[t._v("C++ (OOP)")]),a("a",{attrs:{href:"snakegame.exe",download:""}},[a("q-btn",{staticClass:"btn",attrs:{color:"cyan-6",label:"View Project"}})],1)])]),a("section",[t._m(4),a("div",{staticClass:"projectdescription"},[a("h5",[t._v("Kaji Creation")]),a("h6",[t._v("Responsive landing page for company")]),a("p",[t._v("Figma(for design) , Html ,CSS and JavaScript")]),a("a",{attrs:{href:"https://rohitprasain.github.io/webdesign-garmentdesign/",target:"_blank"}},[a("q-btn",{staticClass:"btn",attrs:{color:"cyan-6",label:"View Project"}})],1)])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project"},[a("h4",[t._v("My Projects")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project_image"},[a("img",{attrs:{src:"images/adhikariclothing.png",alt:"no"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project_image"},[a("img",{attrs:{src:"images/agrotech_nepal.png",alt:"no"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project_image"},[a("img",{attrs:{src:"images/snake_game.png",alt:"no"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project_image"},[a("img",{attrs:{src:"images/kaji_creation.png",alt:"no"}})])}],i={data:function(){return{}},created:function(){document.documentElement.scrollTop=0}},n=i,c=(a("e657"),a("2877")),o=a("9c40"),l=a("93dc"),u=a.n(l),p=Object(c["a"])(n,r,s,!1,null,"cac4daf6",null);e["default"]=p.exports;u()(p,"components",{QBtn:o["a"]})},b3c3:function(t,e,a){},ce1c:function(t,e,a){},e657:function(t,e,a){"use strict";a("1798")},f70a:function(t,e,a){"use strict";a("0e58")},f820:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mainproject"},[t._m(0),a("h5",[t._v("Frontend")]),a("div",{staticClass:"frontend"},[a("div",{staticClass:"skills"},[a("q-circular-progress",{staticClass:"q-ma-md",attrs:{"show-value":"","font-size":"10px",value:t.vueValue,size:"72px",thickness:.15,color:"green","track-color":"grey-3"}},[a("q-avatar",{attrs:{size:"58px"}},[a("img",{attrs:{src:"images/vue.png"}})])],1),a("p",[t._v("Vue")])],1),a("div",{staticClass:"skills"},[a("q-circular-progress",{staticClass:"q-ma-md",attrs:{"show-value":"","font-size":"10px",value:t.reactValue,size:"72px",thickness:.15,color:"blue-7","track-color":"grey-3"}},[a("q-avatar",{attrs:{size:"60px"}},[a("img",{attrs:{src:"images/react.png"}})])],1),a("p",[t._v("React")])],1)]),a("h5",[t._v("Backend")]),a("div",{staticClass:"backend"},[a("div",{staticClass:"skills"},[a("q-circular-progress",{staticClass:"q-ma-md",attrs:{"show-value":"","font-size":"10px",value:t.laravelValue,size:"72px",thickness:.15,color:"red-7","track-color":"grey-3"}},[a("q-avatar",{attrs:{size:"60px"}},[a("img",{attrs:{src:"images/laravel.svg"}})])],1),a("p",[t._v("Laravel")])],1),a("div",{staticClass:"skills"},[a("q-circular-progress",{staticClass:"q-ma-md",attrs:{"show-value":"","font-size":"10px",value:t.nodeValue,size:"72px",thickness:.15,color:"green-7","track-color":"grey-3"}},[a("q-avatar",{attrs:{size:"60px"}},[a("img",{attrs:{src:"images/nodejs.png"}})])],1),a("p",[t._v("NodeJS")])],1)]),a("h5",[t._v("Languages")]),a("div",{staticClass:"familiar"},[a("div",{staticClass:"language"},[a("q-circular-progress",{staticClass:"q-ma-md",attrs:{"show-value":"","font-size":"10px",value:t.cValue,size:"72px",thickness:.15,color:"blue-8","track-color":"grey-3"}},[a("q-avatar",{attrs:{size:"50px"}},[a("img",{attrs:{src:"images/c.png"}})])],1),a("p",[t._v("C")])],1),a("div",{staticClass:"language"},[a("q-circular-progress",{staticClass:"q-ma-md",attrs:{"show-value":"","font-size":"10px",value:t.pythonValue,size:"72px",thickness:.15,color:"yellow-10","track-color":"grey-3"}},[a("q-avatar",{attrs:{size:"50px"}},[a("img",{attrs:{src:"images/python.png"}})])],1),a("p",[t._v("Python")])],1),a("div",{staticClass:"language"},[a("q-circular-progress",{staticClass:"q-ma-md",attrs:{"show-value":"","font-size":"10px",value:t.cplusValue,size:"72px",thickness:.15,color:"blue-8","track-color":"grey-3"}},[a("q-avatar",{attrs:{size:"50px"}},[a("img",{attrs:{src:"images/cplus.png"}})])],1),a("p",[t._v("C++")])],1),a("div",{staticClass:"language"},[a("q-circular-progress",{staticClass:"q-ma-md",attrs:{"show-value":"","font-size":"10px",value:t.jsValue,size:"72px",thickness:.15,color:"yellow-8","track-color":"grey-3"}},[a("q-avatar",{attrs:{size:"50px"}},[a("img",{attrs:{src:"images/js.png"}})])],1),a("p",[t._v("Javascript")])],1),a("div",{staticClass:"language"},[a("q-circular-progress",{staticClass:"q-ma-md",attrs:{"show-value":"","font-size":"10px",value:t.javaValue,size:"72px",thickness:.15,color:"blue-5","track-color":"grey-3"}},[a("q-avatar",{attrs:{size:"50px"}},[a("img",{attrs:{src:"images/java.png"}})])],1),a("p",[t._v("Java")])],1)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topic"},[a("h4",[t._v("Technical Skills")])])}],i={name:"Home",components:{},data:function(){return{vueValue:85,reactValue:70,laravelValue:90,nodeValue:60,cValue:80,cplusValue:80,pythonValue:80,jsValue:80,javaValue:80}},created:function(){document.documentElement.scrollTop=0}},n=i,c=(a("4444"),a("2877")),o=a("58ea"),l=a("cb32"),u=a("93dc"),p=a.n(u),m=Object(c["a"])(n,r,s,!1,null,"1337a859",null);e["default"]=m.exports;p()(m,"components",{QCircularProgress:o["a"],QAvatar:l["a"]})}});
//# sourceMappingURL=app.e2806132.js.map