(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c89e138"],{"00ac":function(e,t,c){"use strict";c("64c4")},"0829":function(e,t,c){},2958:function(e,t,c){},"471e":function(e,t,c){},"4ec3":function(e,t,c){},"5ad7":function(e,t,c){},"616f":function(e,t,c){},"64c4":function(e,t,c){},7836:function(e,t,c){},"8b5d":function(e,t,c){"use strict";c("5ad7")},"94dc":function(e,t,c){"use strict";c("471e")},"981d":function(e,t,c){"use strict";var o=c("7a23"),n=c("5502"),a=c("f6f2");const r=Object(o["createTextVNode"])("Sign out ");var l=Object(o["defineComponent"])({__name:"TheSignOutMenuItem",setup(e){const t=Object(n["b"])(),c="aeq";function l(){t.dispatch(c+"/user/signOut")}return(e,t)=>{const c=Object(o["resolveComponent"])("el-icon"),n=Object(o["resolveComponent"])("el-menu-item");return Object(o["openBlock"])(),Object(o["createBlock"])(n,{onClick:l},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(a["a"]))]),_:1}),r]),_:1})}}});const i=l;t["a"]=i},"9a10":function(e,t,c){"use strict";c("7836")},"9b17":function(e,t,c){"use strict";c("0829")},"9d4f":function(e,t,c){"use strict";c("4ec3")},ca3d:function(e,t,c){"use strict";c("2958")},e2ca:function(e,t,c){"use strict";var o=c("7a23"),n=c("4360"),a=c("b215"),r=c("c834"),l=c("4ac1");class i{constructor(e,t){this.storeNamespace=null,this.veridaStore=null,this.userStore=null,this.account=null,this.isAutoAccount=null,this._profile=null,this._context=null,this.msgInstance={},this.isAutoAccount=t,this.storeNamespace=n["a"].state[e],this.veridaStore=Object(o["computed"])(()=>this.storeNamespace.verida),this.userStore=Object(o["computed"])(()=>this.storeNamespace.user.profile)}async initialize(){this._context=await this.connectContext(),this._profile=await this.connectProfile()}async connectContext(){return this.isAutoAccount?this.account=new l["AutoAccount"]({defaultDatabaseServer:{type:"VeridaDatabase",endpointUri:this.veridaStore.value.veridaTestnetDefaultServer},defaultMessageServer:{type:"VeridaMessage",endpointUri:this.veridaStore.value.veridaTestnetDefaultServer}},{privateKey:this.userStore.value.mnemonic,didServerUrl:this.veridaStore.value.veridaTestnetDidServer,environment:this.veridaStore.value.environmentType}):this.account=new r["VaultAccount"]({request:{logoUrl:this.veridaStore.value.logoUrl}}),a["Network"].connect({client:{environment:this.veridaStore.value.environmentType},account:this.account,context:{name:this.veridaStore.value.contextName}})}async connectProfile(){const e=await this.context.getClient(),t=await this.context.account.did(),c=await e.openPublicProfile(t,this.veridaStore.value.contextName,"basicProfile"),{name:o,avatar:n,description:a,country:r}=await c.getMany();return{did:t,name:o,description:a,country:r}}get context(){return this._context}get profile(){return this._profile}}const s="aeq",d=!0,u=new i(s,d);u.initialize(),t["a"]=u},f311:function(e,t,c){"use strict";c("616f")},fe79:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),n=c("5502"),a=c("981d");const r=e=>(Object(o["pushScopeId"])("data-v-5ecdcfe4"),e=e(),Object(o["popScopeId"])(),e),l={style:{margin:"0px 10px","line-height":"0px"}},i=["src"],s={class:"tagline"},d=r(()=>Object(o["createElementVNode"])("div",{class:"flex-grow"},null,-1)),u=["src"],b=r(()=>Object(o["createElementVNode"])("div",null,"Signed in as:",-1));var O=Object(o["defineComponent"])({__name:"TheSignOutProfileMenu",setup(e){function t(e){return e.avatar.uri?e.avatar.uri:c("1771")("./"+e.avatar)}function r(e){return`${e.substring(0,13)}...${e.slice(-4)}`}const O=Object(n["b"])(),j="fedpol",p=O.state[j],f=Object(o["computed"])(()=>p.user.profile),m=Object(o["computed"])(()=>p.company.profile),h=m.value.name;return(e,n)=>{const O=Object(o["resolveComponent"])("el-avatar"),j=Object(o["resolveComponent"])("el-menu-item"),p=Object(o["resolveComponent"])("el-divider"),v=Object(o["resolveComponent"])("el-sub-menu"),C=Object(o["resolveComponent"])("el-menu"),w=Object(o["resolveComponent"])("el-col"),V=Object(o["resolveComponent"])("el-row");return Object(o["openBlock"])(),Object(o["createBlock"])(V,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(w,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(C,{mode:"horizontal",ellipsis:!1,style:{"align-items":"center",padding:"5px","border-bottom":"4px solid #dc0018"},"background-color":"white","text-color":"black"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",l,[Object(o["createElementVNode"])("img",{width:"30",src:c("1771")("./"+Object(o["unref"])(m).logo)},null,8,i)]),Object(o["createElementVNode"])("div",s,Object(o["toDisplayString"])(Object(o["unref"])(h)),1),d,Object(o["createVNode"])(v,{index:"0"},{title:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{size:30},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("img",{src:t(Object(o["unref"])(f))},null,8,u)]),_:1})]),default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{index:"0-1",class:"submenu-header no-hover"},{default:Object(o["withCtx"])(()=>[b,Object(o["createElementVNode"])("strong",null,Object(o["toDisplayString"])(Object(o["unref"])(f).name),1),Object(o["createElementVNode"])("i",null,Object(o["toDisplayString"])(r(Object(o["unref"])(f).did)),1)]),_:1}),Object(o["createVNode"])(p,{class:"submenu-divider"}),Object(o["createVNode"])(a["a"])]),_:1})]),_:1})]),_:1})]),_:1})}}}),j=(c("9d4f"),c("6b0d")),p=c.n(j);const f=p()(O,[["__scopeId","data-v-5ecdcfe4"]]);var m=f,h=c("c9a1"),v=c("2295"),C=c("f6f2");const w={id:"toolbar"},V={key:0},N={key:1,class:"not-selected-text"};var g=Object(o["defineComponent"])({__name:"TheRequestsToolbar",setup(e){const t="Please select a request to start reviewing",c=Object(n["b"])(),a="fedpol",r=c.state[a],l=Object(o["computed"])(()=>c.getters[a+"/requests/selected"]),i=Object(o["computed"])(()=>r.requests.tableData);function s(){c.dispatch(a+"/requests/remove")}function d(){c.dispatch(a+"/requests/showViewModal")}function u(){c.dispatch(a+"/requests/clear")}function b(){h["a"].confirm("Request will permanently be remove. Continue?","Remove request",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"error",icon:Object(o["markRaw"])(C["e"])}).then(()=>{Object(v["a"])({message:"Request removed successfully",icon:Object(o["markRaw"])(C["j"]),position:"top-right",duration:3e3}),s()})}return(e,c)=>{const n=Object(o["resolveComponent"])("el-button"),a=Object(o["resolveComponent"])("el-tooltip"),r=Object(o["resolveComponent"])("el-card");return Object(o["unref"])(i).length?(Object(o["openBlock"])(),Object(o["createBlock"])(r,{key:0,shadow:"never",class:"card","body-style":{padding:"5px"}},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",w,[Object(o["unref"])(l)?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",V,[Object(o["createVNode"])(a,{content:"Remove",placement:"bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{type:"danger",size:"default",circle:"",plain:"",icon:Object(o["unref"])(C["e"]),onClick:b},null,8,["icon"])]),_:1}),Object(o["createVNode"])(a,{content:"View",placement:"bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{size:"default",circle:"",plain:"",icon:Object(o["unref"])(C["p"]),onClick:d},null,8,["icon"])]),_:1}),Object(o["createVNode"])(a,{content:"Clear",placement:"bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{size:"default",circle:"",plain:"",icon:Object(o["unref"])(C["b"]),onClick:u},null,8,["icon"])]),_:1})])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",N,Object(o["toDisplayString"])(t)))])]),_:1})):Object(o["createCommentVNode"])("",!0)}}});c("f311");const x=p()(g,[["__scopeId","data-v-708ed0ea"]]);var _=x,y=(c("caad"),c("1e49"));const k={style:{"line-height":"20px",color:"#2c3e50"}};var S=Object(o["defineComponent"])({__name:"TheRequestsTable",setup(e){const t="No request matching your search criteria was found",c="No requests to show yet",a=Object(n["b"])(),r="fedpol",l=a.state[r],i=Object(o["computed"])(()=>l.requests.tableData),s=Object(o["ref"])(""),d=Object(o["computed"])(()=>i.value.filter(e=>!s.value||e.type.toLowerCase().includes(s.value.toLowerCase()))),u=Object(o["ref"])(),b=Object(o["computed"])(()=>a.getters[r+"/requests/selected"]);function O(e){let t="";switch(e){case"Approved":t="success";break;case"Rejected":t="danger";break;case"Processing":t="info";break;default:t="info";break}return t}function j(e){a.dispatch(r+"/requests/setSelected",e)}function p(){a.dispatch(r+"/requests/showViewModal")}return Object(o["watch"])(b,e=>{null==e&&u.value.setCurrentRow()}),(e,n)=>{const a=Object(o["resolveComponent"])("el-input"),r=Object(o["resolveComponent"])("el-icon"),l=Object(o["resolveComponent"])("el-table-column"),b=Object(o["resolveComponent"])("el-tag"),f=Object(o["resolveComponent"])("el-card");return Object(o["openBlock"])(),Object(o["createBlock"])(f,{shadow:"never",class:"card","body-style":{padding:"5px 5px"}},{default:Object(o["withCtx"])(()=>[Object(o["unref"])(i).length?(Object(o["openBlock"])(),Object(o["createBlock"])(a,{key:0,modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=e=>s.value=e),placeholder:"Search all types",clearable:"","prefix-icon":Object(o["unref"])(C["k"]),size:"default","input-style":{color:"#2c3e50",padding:"5px"}},null,8,["modelValue","prefix-icon"])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(Object(o["unref"])(y["a"]),{ref_key:"tableRef",ref:u,data:Object(o["unref"])(d),"show-header":!!Object(o["unref"])(i).length,"table-layout":"auto","highlight-current-row":!0,"default-sort":{prop:"type",order:"ascending"},"header-cell-style":{background:"#e4e4e4",color:"#2c3e50"},"row-style":{cursor:"pointer"},height:100,onRowClick:j,onRowDblclick:p},Object(o["createSlots"])({default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,{prop:"type",label:"Type",sortable:""}),Object(o["createVNode"])(l,{prop:"requester",label:"Requester",sortable:""}),Object(o["createVNode"])(l,{prop:"status",label:"Status",sortable:""},{default:Object(o["withCtx"])(e=>[Object(o["createVNode"])(b,{type:O(e.row.status),effect:"plain",style:{width:"80px"}},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.row.status),1)]),_:2},1032,["type"])]),_:1})]),_:2},[Object(o["unref"])(i).length?{name:"empty",fn:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",k,[Object(o["createVNode"])(r,{size:50},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(C["l"]))]),_:1}),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(t))])])])}:{name:"empty",fn:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",{style:{"line-height":"20px",color:"#2c3e50"}},[Object(o["createVNode"])(r,{size:50},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(C["f"]))]),_:1}),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("strong",null,Object(o["toDisplayString"])(c))])])])}]),1032,["data","show-header"])]),_:1})}}});c("94dc");const q=p()(S,[["__scopeId","data-v-1e6be0b7"]]);var B=q;const E=Object(o["createElementVNode"])("strong",null,"View request",-1),T=Object(o["createElementVNode"])("p",{style:{"font-size":"var(--el-font-size-small)"}},"Please find the request details below",-1),D=Object(o["createTextVNode"])(" Close ");var R=Object(o["defineComponent"])({__name:"TheViewRequestModal",setup(e){const t=Object(n["b"])(),c="fedpol",a=Object(o["computed"])(()=>t.getters[c+"/requests/selected"]),r=Object(o["ref"])(!1),l=Object(o["computed"])(()=>t.getters[c+"/requests/isViewModalVisible"]);function i(){t.dispatch(c+"/requests/closeViewModal")}function s(e){i(),e()}function d(e){let t="";switch(e){case"Approved":t="success";break;case"Rejected":t="danger";break;case"Processing":t="info";break;default:t="info";break}return t}return Object(o["watch"])(l,e=>{r.value=e}),(e,t)=>{const c=Object(o["resolveComponent"])("el-descriptions-item"),n=Object(o["resolveComponent"])("el-tag"),l=Object(o["resolveComponent"])("el-descriptions"),u=Object(o["resolveComponent"])("el-button"),b=Object(o["resolveComponent"])("el-dialog");return Object(o["openBlock"])(),Object(o["createBlock"])(b,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),"before-close":s,width:"40%"},{header:Object(o["withCtx"])(()=>[E,T]),footer:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u,{onClick:i},{default:Object(o["withCtx"])(()=>[D]),_:1})]),default:Object(o["withCtx"])(()=>[null!==Object(o["unref"])(a)?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:0,direction:"vertical",column:2,border:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{label:"Type"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(Object(o["unref"])(a).type),1)]),_:1}),Object(o["createVNode"])(c,{label:"Status"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{type:d(Object(o["unref"])(a).status),effect:"plain"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(Object(o["unref"])(a).status),1)]),_:1},8,["type"])]),_:1}),Object(o["createVNode"])(c,{label:"Requester"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(Object(o["unref"])(a).requester),1)]),_:1})]),_:1})):Object(o["createCommentVNode"])("",!0)]),_:1},8,["modelValue"])}}});const I=R;var A=I;const z={id:"requests"};var P=Object(o["defineComponent"])({__name:"TheRequests",setup(e){const t="Requests";return(e,c)=>{const n=Object(o["resolveComponent"])("el-col"),a=Object(o["resolveComponent"])("el-row");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("div",z,[Object(o["createVNode"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("h2",{class:"heading"},Object(o["toDisplayString"])(t))]),_:1})]),_:1}),Object(o["createVNode"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(_)]),_:1})]),_:1}),Object(o["createVNode"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(B)]),_:1})]),_:1})]),Object(o["createVNode"])(A)],64)}}});c("00ac");const M=p()(P,[["__scopeId","data-v-732548d6"]]);var U=M;const L=e=>(Object(o["pushScopeId"])("data-v-06312062"),e=e(),Object(o["popScopeId"])(),e),F=L(()=>Object(o["createElementVNode"])("div",null,"© 2022 Federal Office of Police",-1));function J(e,t){const c=Object(o["resolveComponent"])("el-divider"),n=Object(o["resolveComponent"])("el-col"),a=Object(o["resolveComponent"])("el-row");return Object(o["openBlock"])(),Object(o["createBlock"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{"border-style":"none",class:"aeq-divider"}),Object(o["createVNode"])(n,{class:"aeq-footer"},{default:Object(o["withCtx"])(()=>[F]),_:1})]),_:1})}c("ca3d");const W={},$=p()(W,[["render",J],["__scopeId","data-v-06312062"]]);var H=$,K=c("e2ca");const G=Object(o["createTextVNode"])(" Sign in ");var Q=Object(o["defineComponent"])({__name:"TheSignInButton",setup(e){const t=Object(o["ref"])(!1),c=Object(n["b"])(),a="fedpol",r=Object(o["computed"])(()=>c.getters[a+"/user/isAuthenticated"]);async function l(){t.value=!0,await K["a"].initialize();const e=K["a"].context;if(e){const e=K["a"].profile;c.dispatch(a+"/user/setProfile",e),c.dispatch(a+"/user/signIn")}t.value=!1}return Object(o["onMounted"])(()=>{r.value&&l()}),(e,c)=>{const n=Object(o["resolveComponent"])("el-button"),a=Object(o["resolveDirective"])("loading");return Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createBlock"])(n,{"element-loading-background":"rgba(0, 0, 0, 0.5)",size:"default",color:"#9e1510",round:"",class:"aeq-button",onClick:l},{default:Object(o["withCtx"])(()=>[G]),_:1})),[[a,t.value]])}}});c("8b5d");const X=p()(Q,[["__scopeId","data-v-e56ffa60"]]);var Y=X;const Z=e=>(Object(o["pushScopeId"])("data-v-399f4a2d"),e=e(),Object(o["popScopeId"])(),e),ee=["src"],te={class:"title"},ce=Z(()=>Object(o["createElementVNode"])("h2",{class:"title",style:{"margin-top":"15px",height:"1px"}},[Object(o["createElementVNode"])("span",{class:"underline"},"Who")],-1)),oe=Z(()=>Object(o["createElementVNode"])("p",{class:"tagline"},"Aequivalent is Switzerland’s leading digital platform for employment screening (background checks). Through our secure online solution, our team verifies and delivers relevant information to help employers reduce the risk of inappropriate employment.",-1)),ne=Z(()=>Object(o["createElementVNode"])("div",null,"© Copyright 2020 - 2022 | All Rights Reserved to Aequivalent SA",-1));var ae=Object(o["defineComponent"])({__name:"TheLanding",setup(e){const t=Object(n["b"])(),a="fedpol",r=t.state[a],l=Object(o["computed"])(()=>r.company.profile);return(e,t)=>{const n=Object(o["resolveComponent"])("el-col"),a=Object(o["resolveComponent"])("el-row"),r=Object(o["resolveComponent"])("el-divider");return Object(o["openBlock"])(),Object(o["createBlock"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{class:"header"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("img",{alt:"company logo",src:c("1771")("./"+Object(o["unref"])(l).homeLogo)},null,8,ee)]),_:1})]),_:1}),Object(o["createVNode"])(a,{class:"body body-background"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{xs:18,sm:18},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("h2",te,"Who is "+Object(o["toDisplayString"])(Object(o["unref"])(l).name)+"?",1),ce,oe,Object(o["createVNode"])(r,{"border-style":"none"}),Object(o["createVNode"])(Y)]),_:1})]),_:1}),Object(o["createVNode"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{class:"footer"},{default:Object(o["withCtx"])(()=>[ne]),_:1})]),_:1})]),_:1})]),_:1})}}});c("9a10");const re=p()(ae,[["__scopeId","data-v-399f4a2d"]]);var le=re;const ie={key:0,id:"home"},se={key:1};var de=Object(o["defineComponent"])({__name:"TheHome",setup(e){const t=Object(n["b"])(),c="fedpol",a=t.state[c],r=Object(o["computed"])(()=>a.user.isAuthenticated);return(e,t)=>Object(o["unref"])(r)?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",ie,[Object(o["createVNode"])(m),Object(o["createVNode"])(U),Object(o["createVNode"])(H)])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",se,[Object(o["createVNode"])(le)]))}});c("9b17");const ue=p()(de,[["__scopeId","data-v-45a1e203"]]);t["default"]=ue}}]);
//# sourceMappingURL=chunk-6c89e138.85f1df7f.js.map