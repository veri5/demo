(function(e){function t(t){for(var a,s,r=t[0],l=t[1],c=t[2],d=0,u=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&u.push(o[s][0]),o[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);m&&m(t);while(u.length)u.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],a=!0,s=1;s<i.length;s++){var r=i[s];0!==o[r]&&(a=!1)}a&&(n.splice(t--,1),e=l(l.s=i[0]))}return e}var a={},s={app:0},o={app:0},n=[];function r(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-3027e7de":"dc7fec10","chunk-61d7529a":"1e0e7991","chunk-87b5b37a":"83cf9cb8","chunk-ca342798":"6e1ead82"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.e=function(e){var t=[],i={"chunk-61d7529a":1,"chunk-87b5b37a":1,"chunk-ca342798":1};s[e]?t.push(s[e]):0!==s[e]&&i[e]&&t.push(s[e]=new Promise((function(t,i){for(var a="css/"+({}[e]||e)+"."+{"chunk-3027e7de":"31d6cfe0","chunk-61d7529a":"6c95ab4a","chunk-87b5b37a":"a729d410","chunk-ca342798":"dd3baf11"}[e]+".css",o=l.p+a,n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var c=n[r],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===a||d===o))return t()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){c=u[r],d=c.getAttribute("data-href");if(d===a||d===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||o,n=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=a,delete s[e],m.parentNode.removeChild(m),i(n)},m.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){s[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,i){a=o[e]=[t,i]}));t.push(a[2]=n);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=r(e);var u=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(m);var i=o[e];if(0!==i){if(i){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",u.name="ChunkLoadError",u.type=a,u.request=s,i[1](u)}o[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(i,a,function(t){return e[t]}.bind(null,a));return i},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/aequivalent/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var m=d;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("cd49")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"42fd":function(e,t,i){"use strict";i("620d")},4360:function(e,t,i){"use strict";var a=i("5502");const s={name:"John Doe",did:"did:vda:0x123...4567",avatar:"john_doe.png",description:"",country:""},o={profile:s,isConnected:!1},n={setProfile(e,t){e.profile=Object.assign(e.profile,t)},setIsConnected(e,t){e.isConnected=t}},r={setProfile({commit:e},t){e("setProfile",t)},connect({commit:e}){e("setIsConnected",!0)},disconnect({commit:e}){e("setProfile",s),e("setIsConnected",!1)}},l={isConnected(e){return"true"===e.isConnected}};var c={namespaced:!0,state:o,mutations:n,actions:r,getters:l};const d={profile:{name:"Acme",logo:"acme_logo.png"}},u={},m={},p={};var v={namespaced:!0,state:d,mutations:u,actions:m,getters:p};const f=e=>{var t=Object.keys(e);return e[t[t.length*Math.random()<<0]]},b=[{did:"did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769",type:"University Diploma",element:"university_diploma",name:"Aequivalent",url:"https://www.aequivalent.ch"},{did:"did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769",type:"University Diploma (fake)",element:"university_diploma_fake",name:"Aequivalent",url:"https://www.aequivalent.com"},{did:"did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769",type:"Credit Report",element:"credit_report",name:"Experian",url:"https://www.experian.com"},{did:"did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769",type:"Score Report",element:"score_report",name:"Equifax",url:"https://www.equifax.com"},{did:"did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769",type:"eSafety (or Pink Slip)",element:"pink_slip",name:"NRMA",url:"https://www.nrma.com.au"}],h=(b.map(e=>({type:e.type,issuer:e.name,url:e.url,status:f({revoked:"Revoked",issued:"Issued"})})),{processing:"Processing",revoked:"Revoked",issued:"Issued"}),w=[{value:"aequivalent",label:"Aequivalent"},{value:"experian",label:"Experian"},{value:"equifax",label:"Equifax"},{value:"nrma",label:"NRMA"}],g=[{value:"university_diploma",label:"University diploma",upload:!0},{value:"credit_report",label:"Credit report",upload:!1},{value:"score_report",label:"Score report",upload:!1},{value:"pink_slip",label:"eSafety (or Pink slip)",upload:!1}],y={tableData:[],typeOptions:g,issuerOptions:w,isNewRequestModalVisible:!1,isViewModalVisible:!1,selected:null},V={setIsNewRequestModalVisible(e,t){e.isNewRequestModalVisible=t},setIsViewModalVisible(e,t){e.isViewModalVisible=t},confirmNewRequest(e,t){const i=b.find(({element:e})=>e==t.element),a={type:i.type,issuer:i.name,url:i.url,status:f(h)};e.tableData.push(a)},setSelected(e,t){e.selected=t},removeSelected(e){e.tableData.splice(e.tableData.indexOf(e.selected),1),e.selected=null}},M={showNewRequestModal({commit:e}){e("setIsNewRequestModalVisible",!0)},closeNewRequestModal({commit:e}){e("setIsNewRequestModalVisible",!1)},confirmNewRequest({commit:e},t){e("confirmNewRequest",t)},setSelected({commit:e},t){e("setSelected",t)},remove({commit:e}){e("removeSelected")},clear({commit:e}){e("setSelected",null)},view({commit:e}){e("setIsViewModalVisible",!0)},showViewModal({commit:e}){e("setIsViewModalVisible",!0)},closeViewModal({commit:e}){e("setIsViewModalVisible",!1)}},I={isNewRequestModalVisible(e){return!0===e.isNewRequestModalVisible},isViewModalVisible(e){return!0===e.isViewModalVisible},selected(e){return e.selected},statuses(e){return h}};var C={namespaced:!0,state:y,mutations:V,actions:M,getters:I};const _={name:"Pablo Buitrago",did:"did:vda:0x123...4567",avatar:"pablo_buitrago.jpeg",description:"",country:"",mnemonic:"canyon hover bronze mask view muscle notice where purchase save shed symbol"},O={profile:_,isAuthenticated:!1,localKey:"_verida_aeq_is-authenticated"},S={setProfile(e,t){e.profile=Object.assign(e.profile,t)},setIsAuthenticated(e,t){e.isAuthenticated=t,localStorage.setItem(e.localKey,t)}},k={setProfile({commit:e},t){e("setProfile",t)},signIn({commit:e}){e("setIsAuthenticated",!0)},signOut({commit:e}){e("setProfile",_),e("setIsAuthenticated",!1)}},j={isAuthenticated(e){return"true"===localStorage.getItem(e.localKey)}};var x={namespaced:!0,state:O,mutations:S,actions:k,getters:j};const N={profile:{name:"æquivalent",logo:"aequivalent_logo.png",homeLogo:"aequivalent_logo_noir.png"}},A={},q={},P={};var D={namespaced:!0,state:N,mutations:A,actions:q,getters:P};const R={ureview:"Under review",rejected:"Rejected",approved:"Approved"},F=(R.approved,R.ureview,R.rejected,[{value:"university_diploma",label:"University diploma - Aequivalent",upload:!0},{value:"credit_report",label:"Credit report - Experian",upload:!1},{value:"score_report",label:"Score report - Equifax",upload:!1},{value:"pink_slip",label:"eSafety (or Pink slip) - NRMA",upload:!1}]),E={tableData:[],typeOptions:F,isModalVisible:!1,isViewModalVisible:!1,selected:null},B={setIsViewModalVisible(e,t){e.isViewModalVisible=t},setSelected(e,t){e.selected=t},removeSelected(e){e.tableData.splice(e.tableData.indexOf(e.selected),1),e.selected=null}},T={setSelected({commit:e},t){e("setSelected",t)},remove({commit:e}){e("removeSelected")},clear({commit:e}){e("setSelected",null)},showViewModal({commit:e}){e("setIsViewModalVisible",!0)},closeViewModal({commit:e}){e("setIsViewModalVisible",!1)}},U={isViewModalVisible(e){return!0===e.isViewModalVisible},selected(e){return e.selected},statuses(e){return R}};var K={namespaced:!0,state:E,mutations:B,actions:T,getters:U};const L={name:"Micha Roon",did:"did:vda:0x123...4567",avatar:"micha_roon.jpeg",description:"",country:"",mnemonic:"shiver demand typical energy range absent rug face federal marine fold sauce"},z={profile:L,isAuthenticated:!1,localKey:"_verida_verifive_is-authenticated"},J={setProfile(e,t){e.profile=Object.assign(e.profile,t)},setIsAuthenticated(e,t){e.isAuthenticated=t,localStorage.setItem(e.localKey,t)}},H={setProfile({commit:e},t){e("setProfile",t)},signIn({commit:e}){e("setIsAuthenticated",!0)},signOut({commit:e}){e("setProfile",L),e("setIsAuthenticated",!1)}},G={isAuthenticated(e){return"true"===localStorage.getItem(e.localKey)}};var Q={namespaced:!0,state:z,mutations:J,actions:H,getters:G};const W={profile:{name:"Verifive",logo:"verifive_logo.png"}},X={},Y={},Z={};var $={namespaced:!0,state:W,mutations:X,actions:Y,getters:Z};const ee=[{label:"University Diploma",name:"university-diploma"},{label:"Credit Report",name:"credit-report"},{label:"Score Report",name:"score-report"},{label:"eSafety (or Pink Slip)",name:"pink-slip"}],te=[],ie=te.map(e=>({name:e.name,did:e.did,element:ee.find(({name:t})=>t===e.element).label,expiry:e.expiry})),ae=ee.map(e=>({label:e.label,value:e.name})),se={tableData:ie,elementOptions:ae,isNewIssuerModalVisible:!1,isViewModalVisible:!1,selected:null},oe={setIsNewIssuerModalVisible(e,t){e.isNewIssuerModalVisible=t},setIsViewModalVisible(e,t){e.isViewModalVisible=t},confirmNewIssuer(e,t){t.element=ee.find(({name:e})=>e===t.element).label,e.tableData.push(t)},setSelected(e,t){e.selected=t},removeSelected(e){e.tableData.splice(e.tableData.indexOf(e.selected),1),e.selected=null}},ne={showNewIssuerModal({commit:e}){e("setIsNewIssuerModalVisible",!0)},closeNewIssuerModal({commit:e}){e("setIsNewIssuerModalVisible",!1)},confirmNewIssuer({commit:e},t){e("confirmNewIssuer",t)},setSelected({commit:e},t){e("setSelected",t)},remove({commit:e}){e("removeSelected")},clear({commit:e}){e("setSelected",null)},showViewModal({commit:e}){e("setIsViewModalVisible",!0)},closeViewModal({commit:e}){e("setIsViewModalVisible",!1)}},re={isNewIssuerModalVisible(e){return!0===e.isNewIssuerModalVisible},isViewModalVisible(e){return!0===e.isViewModalVisible},selected(e){return e.selected}};var le={namespaced:!0,state:se,mutations:oe,actions:ne,getters:re},ce=i("b215");const de={logoUrl:"https://assets.verida.io/verida_login_request_logo_170x170.png",environmentType:ce["EnvironmentType"].TESTNET,veridaTestnetDefaultServer:"https://db.testnet.verida.io:5002/",veridaTestnetDidServer:"https://dids.testnet.verida.io:5001",contextName:"Verida: Vault"},ue={},me={},pe={};var ve={namespaced:!0,state:de,mutations:ue,actions:me,getters:pe};t["a"]=Object(a["a"])({modules:{verifive:{namespaced:!0,modules:{user:Q,company:$,verida:ve,issuers:le}},aeq:{namespaced:!0,modules:{user:x,company:D,verida:ve,requests:K}},acme:{namespaced:!0,modules:{user:c,company:v,verida:ve,credentials:C}}}})},5:function(e,t){},6:function(e,t){},"620d":function(e,t,i){},7:function(e,t){},8:function(e,t){},9:function(e,t){},cd49:function(e,t,i){"use strict";i.r(t);var a=i("7a23"),s=i("c3a1");i("7437");function o(e,t){const i=Object(a["resolveComponent"])("router-view"),s=Object(a["resolveComponent"])("el-col"),o=Object(a["resolveComponent"])("el-row");return Object(a["openBlock"])(),Object(a["createBlock"])(o,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(s,{xs:8,sm:8},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(i,{name:"acmeApp"})]),_:1}),Object(a["createVNode"])(s,{xs:8,sm:8},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(i,{name:"aeqApp"})]),_:1}),Object(a["createVNode"])(s,{xs:8,sm:8},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(i,{name:"verifiveApp"})]),_:1})]),_:1})}i("42fd");var n=i("6b0d"),r=i.n(n);const l={},c=r()(l,[["render",o]]);var d=c,u=i("6605");const m=[{path:"/",name:"Home",components:{acmeApp:()=>Promise.all([i.e("chunk-3027e7de"),i.e("chunk-ca342798")]).then(i.bind(null,"e2c2")),aeqApp:()=>Promise.all([i.e("chunk-3027e7de"),i.e("chunk-61d7529a")]).then(i.bind(null,"8dd1")),verifiveApp:()=>Promise.all([i.e("chunk-3027e7de"),i.e("chunk-87b5b37a")]).then(i.bind(null,"6949"))}}],p=Object(u["a"])({history:Object(u["b"])("/aequivalent/"),routes:m});var v=p,f=i("4360");Object(a["createApp"])(d).use(f["a"]).use(v).use(s["a"],{size:"small",zIndex:3e3}).mount("#app")}});
//# sourceMappingURL=app.5d70a87e.js.map