(function(e){function t(t){for(var n,c,o=t[0],f=t[1],j=t[2],b=0,d=[];b<o.length;b++)c=o[b],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(e[n]=f[n]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,j||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,c=1;c<s.length;c++){var f=s[c];0!==a[f]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},a={app:0},r=[];function c(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8365b65c"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(e){var t=[],s=a[e];if(0!==s)if(s)t.push(s[2]);else{var n=new Promise((function(t,n){s=a[e]=[t,n]}));t.push(s[2]=n);var r,f=document.createElement("script");f.charset="utf-8",f.timeout=120,o.nc&&f.setAttribute("nonce",o.nc),f.src=c(e);var j=new Error;r=function(t){f.onerror=f.onload=null,clearTimeout(b);var s=a[e];if(0!==s){if(s){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;j.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",j.name="ChunkLoadError",j.type=n,j.request=r,s[1](j)}a[e]=void 0}};var b=setTimeout((function(){r({type:"timeout",target:f})}),12e4);f.onerror=f.onload=r,document.head.appendChild(f)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],j=f.push.bind(f);f.push=t,f=f.slice();for(var b=0;b<f.length;b++)t(f[b]);var u=j;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("cd49")},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return s(t)}function r(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="4678"},5776:function(e,t,s){"use strict";s("c27f")},"5c0b":function(e,t,s){"use strict";s("9c0c")},"9c0c":function(e,t,s){},c27f:function(e,t,s){},cd49:function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),s("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),s("router-view")],1)},r=[],c=(s("5c0b"),s("2877")),o={},f=Object(c["a"])(o,a,r,!1,null,null,null),j=f.exports,b=(s("d3b7"),s("3ca3"),s("ddb0"),s("8c4f")),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("HelloWorld")],1)},d=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},[s("h1",{staticClass:"text-green"},[e._v("THE STOX")])])}],m=s("d4ec"),p=s("262e"),h=s("2caf"),v=s("9ab4"),y=s("1b40"),g=function(e){Object(p["a"])(s,e);var t=Object(h["a"])(s);function s(){return Object(m["a"])(this,s),t.apply(this,arguments)}return s}(y["c"]);Object(v["a"])([Object(y["b"])()],g.prototype,"msg",void 0),g=Object(v["a"])([y["a"]],g);var k=g,w=k,O=(s("5776"),Object(c["a"])(w,i,l,!1,null,"9cde24a4",null)),z=O.exports,_={name:"Home",components:{HelloWorld:z}},x=_,E=Object(c["a"])(x,u,d,!1,null,null,null),P=E.exports;n["a"].use(b["a"]);var T=[{path:"/",name:"Home",component:P},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],S=new b["a"]({mode:"history",base:"/",routes:T}),C=S,H=s("2f62");n["a"].use(H["a"]);var M=new H["a"].Store({state:{},mutations:{},actions:{}}),$=s("89e8"),q=s("870d"),A=s("0f45"),L=s("d5bc"),D=s("f5dfd"),J=(s("e7eb"),s("c1df")),N=s.n(J);n["a"].prototype.moment=N.a,n["a"].use($["a"]),n["a"].config.productionTip=!1,new n["a"]({router:C,store:M,render:function(e){return e(q["a"],[e(A["a"],[e(L["a"],[e(D["a"]),e(j)])])])}}).$mount("#app")},e7eb:function(e,t,s){}});
//# sourceMappingURL=app.8218028a.js.map