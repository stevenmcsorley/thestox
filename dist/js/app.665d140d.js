(function(e){function t(t){for(var s,c,o=t[0],d=t[1],l=t[2],f=0,i=[];f<o.length;f++)c=o[f],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&i.push(n[c][0]),n[c]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(e[s]=d[s]);u&&u(t);while(i.length)i.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,c=1;c<a.length;c++){var d=a[c];0!==n[d]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},n={app:0},r=[];function c(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"aa6a8297"}[e]+".js"}function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,s){a=n[e]=[t,s]}));t.push(a[2]=s);var r,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=c(e);var l=new Error;r=function(t){d.onerror=d.onload=null,clearTimeout(f);var a=n[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",l.name="ChunkLoadError",l.type=s,l.request=r,a[1](l)}n[e]=void 0}};var f=setTimeout((function(){r({type:"timeout",target:d})}),12e4);d.onerror=d.onload=r,document.head.appendChild(d)}return Promise.all(t)},o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var f=0;f<d.length;f++)t(d[f]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},"49ef":function(e,t,a){"use strict";a("c927")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"9c0c":function(e,t,a){},c927:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),a("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),a("router-view")],1)},r=[],c=(a("5c0b"),a("2877")),o={},d=Object(c["a"])(o,n,r,!1,null,null,null),l=d.exports,f=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("HelloWorld")],1)},i=[],b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",{staticClass:"text-green"},[e._v("THE STOX")]),a("div",{staticClass:"small"},[a("p",[a("span",{class:{green:parseInt(e.datacollection.datasets[0].data[0])>10,red:parseInt(e.datacollection.datasets[0].data[0])<10}},[e._v(" "+e._s(e.datacollection.datasets[0].data[0])+" ")]),a("span",{class:{green:parseInt(e.datacollection.datasets[0].data[1])>10,red:parseInt(e.datacollection.datasets[0].data[1])<10}},[e._v(" "+e._s(e.datacollection.datasets[0].data[1])+" ")]),a("span",{class:{green:parseInt(e.datacollection.datasets[0].data[2])>10,red:parseInt(e.datacollection.datasets[0].data[2])<10}},[e._v(" "+e._s(e.datacollection.datasets[0].data[2])+" ")])])])])},j=[],m=a("d4ec"),h=a("bee2"),p=a("262e"),v=a("2caf"),g=a("9ab4"),y=a("1b40"),k=a("8e27"),O=Object(k["io"])("wss://thestox.co.uk"),w=function(e){Object(p["a"])(a,e);var t=Object(v["a"])(a);function a(){var e;return Object(m["a"])(this,a),e=t.apply(this,arguments),e.datacollection=null,e}return Object(h["a"])(a,[{key:"created",value:function(){this.getRealtimeData()}},{key:"fillData",value:function(e){this.datacollection={labels:[this.getRandomChartValues(e),this.getRandomChartValues(e),this.getRandomChartValues(e)],datasets:[{label:"Google Stock",backgroundColor:"#1A73E8",data:[this.getRandomChartValues(e),this.getRandomChartValues(e),this.getRandomChartValues(e)]},{label:"Microsoft Stock",backgroundColor:"#2b7518",data:[this.getRandomChartValues(e),this.getRandomChartValues(e),this.getRandomChartValues(e)]}]}}},{key:"getRealtimeData",value:function(){var e=this;O.on("newdata",(function(t){e.fillData(t)}))}},{key:"getRandomChartValues",value:function(e){return Math.floor(Math.random()*e)}}]),a}(y["c"]);Object(g["a"])([Object(y["b"])()],w.prototype,"msg",void 0),w=Object(g["a"])([Object(y["a"])({components:{}})],w);var z=w,_=z,C=(a("49ef"),Object(c["a"])(_,b,j,!1,null,"656b1796",null)),x=C.exports,R={name:"Home",components:{HelloWorld:x}},E=R,V=Object(c["a"])(E,u,i,!1,null,null,null),P=V.exports;s["a"].use(f["a"]);var S=[{path:"/",name:"Home",component:P},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],M=new f["a"]({mode:"history",base:"/",routes:S}),T=M,D=a("2f62");s["a"].use(D["a"]);var H=new D["a"].Store({state:{},mutations:{},actions:{}}),I=a("89e8"),A=a("870d"),$=a("0f45"),q=a("d5bc"),L=a("f5dfd"),J=(a("e7eb"),a("c1df")),N=a.n(J);s["a"].prototype.moment=N.a,s["a"].use(I["a"]),s["a"].config.productionTip=!1,new s["a"]({router:T,store:H,render:function(e){return e(A["a"],[e($["a"],[e(q["a"],[e(L["a"]),e(l)])])])}}).$mount("#app")},e7eb:function(e,t,a){}});
//# sourceMappingURL=app.665d140d.js.map