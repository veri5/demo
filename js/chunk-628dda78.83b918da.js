(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-628dda78"],{"0278":function(e,t,c){"use strict";c("4aaa")},"0869":function(e,t,c){"use strict";c("b9ab")},"0bff":function(e,t,c){},"0e99":function(e,t,c){},"2a6c":function(e,t,c){"use strict";c("0bff")},"2cf0":function(e,t,c){"use strict";c("daf4")},"3ca7":function(e,t,c){"use strict";c("0e99")},"445c":function(e,t,c){"use strict";c("5ead")},"4aaa":function(e,t,c){},"5ead":function(e,t,c){},"70c6":function(e,t,c){},"710c":function(e,t,c){"use strict";c("70c6")},7191:function(e,t,c){},"98f8":function(e,t,c){"use strict";c("7191")},b9ab:function(e,t,c){},bb1a:function(e,t,c){},d3a5:function(e,t,c){"use strict";c("bb1a")},daf4:function(e,t,c){},fe79:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),n=c("5502"),a=c("f6f2");const r=Object(o["createTextVNode"])("Sign out ");var l=Object(o["defineComponent"])({__name:"TheSignOutMenuItem",setup(e){const t=Object(n["b"])(),c="fedpol";function l(){t.dispatch(c+"/user/signOut")}return(e,t)=>{const c=Object(o["resolveComponent"])("el-icon"),n=Object(o["resolveComponent"])("el-menu-item");return Object(o["openBlock"])(),Object(o["createBlock"])(n,{onClick:l},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(a["a"]))]),_:1}),r]),_:1})}}});const s=l;var i=s;const d=e=>(Object(o["pushScopeId"])("data-v-3238bafa"),e=e(),Object(o["popScopeId"])(),e),b={style:{margin:"0px 10px","line-height":"0px"}},u=["src"],j={class:"tagline"},O=d(()=>Object(o["createElementVNode"])("div",{class:"flex-grow"},null,-1)),p=["src"],f=d(()=>Object(o["createElementVNode"])("div",null,"Signed in as:",-1));var m=Object(o["defineComponent"])({__name:"TheSignOutProfileMenu",setup(e){function t(e){return e.avatar.uri?e.avatar.uri:c("1771")("./"+e.avatar)}function a(e){return`${e.substring(0,13)}...${e.slice(-4)}`}const r=Object(n["b"])(),l="fedpol",s=r.state[l],d=Object(o["computed"])(()=>s.user.profile),m=Object(o["computed"])(()=>s.company.profile);return(e,n)=>{const r=Object(o["resolveComponent"])("el-avatar"),l=Object(o["resolveComponent"])("el-menu-item"),s=Object(o["resolveComponent"])("el-divider"),h=Object(o["resolveComponent"])("el-sub-menu"),v=Object(o["resolveComponent"])("el-menu"),w=Object(o["resolveComponent"])("el-col"),C=Object(o["resolveComponent"])("el-row");return Object(o["openBlock"])(),Object(o["createBlock"])(C,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(w,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(v,{mode:"horizontal",ellipsis:!1,style:{"align-items":"center",padding:"5px","border-bottom":"3px solid #dc0018"},"background-color":"white","text-color":"black"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",b,[Object(o["createElementVNode"])("img",{width:"30",src:c("1771")("./"+Object(o["unref"])(m).homeLogo)},null,8,u)]),Object(o["createElementVNode"])("div",j,Object(o["toDisplayString"])(Object(o["unref"])(m).tagline),1),O,Object(o["createVNode"])(h,{index:"0"},{title:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,{size:30},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("img",{src:t(Object(o["unref"])(d))},null,8,p)]),_:1})]),default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,{index:"0-1",class:"submenu-header no-hover"},{default:Object(o["withCtx"])(()=>[f,Object(o["createElementVNode"])("strong",null,Object(o["toDisplayString"])(Object(o["unref"])(d).name),1),Object(o["createElementVNode"])("i",null,Object(o["toDisplayString"])(a(Object(o["unref"])(d).did)),1)]),_:1}),Object(o["createVNode"])(s,{class:"submenu-divider"}),Object(o["createVNode"])(i)]),_:1})]),_:1})]),_:1})]),_:1})}}}),h=(c("710c"),c("6b0d")),v=c.n(h);const w=v()(m,[["__scopeId","data-v-3238bafa"]]);var C=w,V=c("c9a1"),g=c("2295");const N={id:"container"},x={key:0,class:"toolbar"},_={key:1,class:"toolbar"};var y=Object(o["defineComponent"])({__name:"TheRequestsToolbar",setup(e){const t=Object(n["b"])(),c="fedpol",r=Object(o["computed"])(()=>t.getters[c+"/requests/selectedRequest"]),l=Object(o["computed"])(()=>t.getters[c+"/requests/requests"]),s=Object(o["computed"])(()=>t.getters[c+"/requests/Statuses"]),i="Click on a request to show the toolbar";function d(){t.dispatch(c+"/requests/showReviewRequestModal")}function b(){t.dispatch(c+"/requests/showViewRequestModal")}function u(){t.dispatch(c+"/requests/clearSelectedRequest")}return(e,t)=>{const c=Object(o["resolveComponent"])("el-button"),n=Object(o["resolveComponent"])("el-tooltip"),j=Object(o["resolveComponent"])("el-divider"),O=Object(o["resolveComponent"])("el-card");return Object(o["unref"])(l).length?(Object(o["openBlock"])(),Object(o["createBlock"])(O,{key:0,shadow:"never",class:"card","body-style":{padding:"5px"}},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",N,[Object(o["unref"])(r)?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",x,[Object(o["unref"])(r).status!==Object(o["unref"])(s).Approved&&Object(o["unref"])(r).status!==Object(o["unref"])(s).Rejected?(Object(o["openBlock"])(),Object(o["createBlock"])(n,{key:0,content:"Review Request",placement:"bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{type:"primary",size:"default",circle:"",plain:"",icon:Object(o["unref"])(a["f"]),onClick:d},null,8,["icon"])]),_:1})):Object(o["createCommentVNode"])("",!0),Object(o["unref"])(r).status!==Object(o["unref"])(s).Approved&&Object(o["unref"])(r).status!==Object(o["unref"])(s).Rejected?(Object(o["openBlock"])(),Object(o["createBlock"])(j,{key:1,direction:"vertical",class:"menu-divider"})):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(n,{content:"View Request",placement:"bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{size:"default",circle:"",plain:"",icon:Object(o["unref"])(a["o"]),onClick:b},null,8,["icon"])]),_:1}),Object(o["createVNode"])(n,{content:"Clear Selection",placement:"bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{size:"default",circle:"",plain:"",icon:Object(o["unref"])(a["b"]),onClick:u},null,8,["icon"])]),_:1})])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",_,[Object(o["createElementVNode"])("span",{class:"not-selected-text"},Object(o["toDisplayString"])(i))]))])]),_:1})):Object(o["createCommentVNode"])("",!0)}}});c("0869");const k=v()(y,[["__scopeId","data-v-56fc9158"]]);var q=k,S=c("1e49");const R={style:{"line-height":"20px",color:"#2c3e50"}};var B=Object(o["defineComponent"])({__name:"TheRequestsTable",setup(e){const t="No request matching your search criteria was found",c="No requests to show yet",r=Object(n["b"])(),l="fedpol",s=Object(o["computed"])(()=>r.getters[l+"/requests/requests"]),i=Object(o["ref"])(),d=Object(o["computed"])(()=>r.getters[l+"/requests/selectedRequest"]);function b(e){let t="";switch(e){case"Approved":t="success";break;case"Rejected":t="danger";break;case"Under Review":t="warning";break;default:t="info";break}return t}function u(e){r.dispatch(l+"/requests/setSelectedRequest",e)}function j(){r.dispatch(l+"/requests/showViewRequestModal")}return Object(o["watch"])(d,e=>{null==e&&i.value.setCurrentRow()}),(e,n)=>{const r=Object(o["resolveComponent"])("el-icon"),l=Object(o["resolveComponent"])("el-table-column"),d=Object(o["resolveComponent"])("el-tag"),O=Object(o["resolveComponent"])("el-card");return Object(o["openBlock"])(),Object(o["createBlock"])(O,{shadow:"never",class:"card","body-style":{padding:"5px 5px"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(S["a"]),{ref_key:"tableRef",ref:i,data:Object(o["unref"])(s),"show-header":!!Object(o["unref"])(s).length,"table-layout":"auto","highlight-current-row":!0,"default-sort":{prop:"status",order:"descending"},"header-cell-style":{background:"#e4e4e4",color:"#2c3e50"},"row-style":{cursor:"pointer"},height:150,onRowClick:u,onRowDblclick:j},Object(o["createSlots"])({default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,{prop:"type",label:"Type"}),Object(o["createVNode"])(l,{prop:"requester",label:"Requester"}),Object(o["createVNode"])(l,{prop:"status",label:"Status"},{default:Object(o["withCtx"])(e=>[Object(o["createVNode"])(d,{type:b(e.row.status),effect:"plain",style:{"min-width":"90px"}},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.row.status),1)]),_:2},1032,["type"])]),_:1})]),_:2},[Object(o["unref"])(s).length?{name:"empty",fn:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",R,[Object(o["createVNode"])(r,{size:50},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(a["k"]))]),_:1}),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(t))])])])}:{name:"empty",fn:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",{style:{"line-height":"20px",color:"#2c3e50"}},[Object(o["createVNode"])(r,{size:50},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(a["e"]))]),_:1}),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("strong",null,Object(o["toDisplayString"])(c))])])])}]),1032,["data","show-header"])]),_:1})}}});c("d3a5");const T=v()(B,[["__scopeId","data-v-9d32e7aa"]]);var E=T;const D=e=>(Object(o["pushScopeId"])("data-v-1c1fd9a3"),e=e(),Object(o["popScopeId"])(),e),I=D(()=>Object(o["createElementVNode"])("strong",null,"Review Request",-1)),A=D(()=>Object(o["createElementVNode"])("p",{style:{"font-size":"var(--el-font-size-small)"}},"Please find the request details below",-1)),z=Object(o["createTextVNode"])(" Cancel "),M=Object(o["createTextVNode"])(" Approve "),P=Object(o["createTextVNode"])(" Reject ");var U=Object(o["defineComponent"])({__name:"TheReviewRequestModal",setup(e){const t=Object(n["b"])(),c="fedpol",r=Object(o["computed"])(()=>t.getters[c+"/requests/selectedRequest"]),l=Object(o["ref"])(!1),s=Object(o["computed"])(()=>t.getters[c+"/requests/isReviewRequestModalVisible"]);function i(e){let t="";switch(e){case"Approved":t="success";break;case"Rejected":t="danger";break;case"Under-Review":t="warning";break;default:t="info";break}return t}function d(){t.dispatch(c+"/requests/closeReviewRequestModal")}function b(e){d(),e()}function u(){V["a"].confirm("Your signature is being requested. Continue?","Signature request",{confirmButtonText:"Sign",cancelButtonText:"Cancel",type:"warning",icon:Object(o["markRaw"])(a["g"])}).then(()=>{t.dispatch(c+"/requests/approveSelectedRequest"),Object(g["a"])({message:"Request approved successfully",icon:Object(o["markRaw"])(a["m"]),position:"top-left",duration:3e3}),d()})}function j(){V["a"].confirm("Your signature is being requested. Continue?","Signature request",{confirmButtonText:"Sign",cancelButtonText:"Cancel",type:"warning",icon:Object(o["markRaw"])(a["g"])}).then(()=>{t.dispatch(c+"/requests/rejectSelectedRequest"),Object(g["a"])({message:"Request rejected successfully",icon:Object(o["markRaw"])(a["m"]),position:"top-left",duration:3e3}),d()})}return Object(o["watch"])(s,e=>{l.value=e}),(e,t)=>{const c=Object(o["resolveComponent"])("el-descriptions-item"),n=Object(o["resolveComponent"])("el-tag"),a=Object(o["resolveComponent"])("el-descriptions"),s=Object(o["resolveComponent"])("el-divider"),O=Object(o["resolveComponent"])("el-button"),p=Object(o["resolveComponent"])("el-dialog");return Object(o["openBlock"])(),Object(o["createBlock"])(p,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),"before-close":b,width:"40%"},{header:Object(o["withCtx"])(()=>[I,A]),footer:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{style:{margin:"0px","margin-bottom":"15px",border:"none"}}),Object(o["createVNode"])(O,{onClick:d},{default:Object(o["withCtx"])(()=>[z]),_:1}),Object(o["createVNode"])(s,{direction:"vertical",class:"menu-divider"}),Object(o["createVNode"])(O,{type:"primary",plain:"",onClick:u},{default:Object(o["withCtx"])(()=>[M]),_:1}),Object(o["createVNode"])(O,{type:"danger",plain:"",onClick:j},{default:Object(o["withCtx"])(()=>[P]),_:1})]),default:Object(o["withCtx"])(()=>[null!==Object(o["unref"])(r)?(Object(o["openBlock"])(),Object(o["createBlock"])(a,{key:0,direction:"vertical",column:2,border:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{label:"Type",span:2},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(Object(o["unref"])(r).type),1)]),_:1}),Object(o["createVNode"])(c,{label:"Requester"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(Object(o["unref"])(r).requester),1)]),_:1}),Object(o["createVNode"])(c,{label:"Status"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{type:i(Object(o["unref"])(r).status),effect:"plain"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(Object(o["unref"])(r).status),1)]),_:1},8,["type"])]),_:1})]),_:1})):Object(o["createCommentVNode"])("",!0)]),_:1},8,["modelValue"])}}});c("98f8");const F=v()(U,[["__scopeId","data-v-1c1fd9a3"]]);var L=F;const J=Object(o["createElementVNode"])("strong",null,"View request",-1),Y=Object(o["createElementVNode"])("p",{style:{"font-size":"var(--el-font-size-small)"}},"Please find the request details below",-1),$=Object(o["createTextVNode"])(" Close ");var H=Object(o["defineComponent"])({__name:"TheViewRequestModal",setup(e){const t=Object(n["b"])(),c="fedpol",a=Object(o["computed"])(()=>t.getters[c+"/requests/selectedRequest"]),r=Object(o["ref"])(!1),l=Object(o["computed"])(()=>t.getters[c+"/requests/isViewRequestModalVisible"]);function s(){t.dispatch(c+"/requests/closeViewRequestModal")}function i(e){s(),e()}function d(e){let t="";switch(e){case"Approved":t="success";break;case"Rejected":t="danger";break;case"Under Review":t="warning";break;default:t="info";break}return t}return Object(o["watch"])(l,e=>{r.value=e}),(e,t)=>{const c=Object(o["resolveComponent"])("el-descriptions-item"),n=Object(o["resolveComponent"])("el-tag"),l=Object(o["resolveComponent"])("el-descriptions"),b=Object(o["resolveComponent"])("el-divider"),u=Object(o["resolveComponent"])("el-button"),j=Object(o["resolveComponent"])("el-dialog");return Object(o["openBlock"])(),Object(o["createBlock"])(j,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),"before-close":i,width:"40%"},{header:Object(o["withCtx"])(()=>[J,Y]),footer:Object(o["withCtx"])(()=>[Object(o["createVNode"])(b,{style:{margin:"0px","margin-bottom":"15px",border:"none"}}),Object(o["createVNode"])(u,{onClick:s},{default:Object(o["withCtx"])(()=>[$]),_:1})]),default:Object(o["withCtx"])(()=>[null!==Object(o["unref"])(a)?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:0,direction:"vertical",column:2,border:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{label:"Type",span:2},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(Object(o["unref"])(a).type),1)]),_:1}),Object(o["createVNode"])(c,{label:"Requester"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(Object(o["unref"])(a).requester),1)]),_:1}),Object(o["createVNode"])(c,{label:"Status"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{type:d(Object(o["unref"])(a).status),effect:"plain",style:{"min-width":"90px"}},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(Object(o["unref"])(a).status),1)]),_:1},8,["type"])]),_:1})]),_:1})):Object(o["createCommentVNode"])("",!0)]),_:1},8,["modelValue"])}}});const K=H;var G=K;const Q={id:"requests"};var W=Object(o["defineComponent"])({__name:"TheRequests",setup(e){const t="Requests";return(e,c)=>{const n=Object(o["resolveComponent"])("el-col"),a=Object(o["resolveComponent"])("el-row");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("div",Q,[Object(o["createVNode"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("h2",{class:"heading"},Object(o["toDisplayString"])(t))]),_:1})]),_:1}),Object(o["createVNode"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(q)]),_:1})]),_:1}),Object(o["createVNode"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(E)]),_:1})]),_:1})]),Object(o["createVNode"])(L),Object(o["createVNode"])(G)],64)}}});c("445c");const X=v()(W,[["__scopeId","data-v-31e0d7cd"]]);var Z=X;const ee=e=>(Object(o["pushScopeId"])("data-v-3675a51e"),e=e(),Object(o["popScopeId"])(),e),te=ee(()=>Object(o["createElementVNode"])("div",null,"© 2022 Federal Office of Police",-1));function ce(e,t){const c=Object(o["resolveComponent"])("el-divider"),n=Object(o["resolveComponent"])("el-col"),a=Object(o["resolveComponent"])("el-row");return Object(o["openBlock"])(),Object(o["createBlock"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{class:"fedpol-divider"}),Object(o["createVNode"])(n,{class:"fedpol-footer"},{default:Object(o["withCtx"])(()=>[te]),_:1})]),_:1})}c("0278");const oe={},ne=v()(oe,[["render",ce],["__scopeId","data-v-3675a51e"]]);var ae=ne,re=c("4360"),le=c("b215"),se=c("c834"),ie=c("4ac1");class de{constructor(e,t){this.storeNamespace=null,this.veridaStore=null,this.userStore=null,this.account=null,this.isAutoAccount=null,this._profile=null,this._context=null,this.msgInstance={},this.isAutoAccount=t,this.storeNamespace=re["a"].state[e],this.veridaStore=Object(o["computed"])(()=>this.storeNamespace.verida),this.userStore=Object(o["computed"])(()=>this.storeNamespace.user.profile)}async initialize(){this._context=await this.connectContext(),this._profile=await this.connectProfile()}async connectContext(){return this.isAutoAccount?this.account=new ie["AutoAccount"]({defaultDatabaseServer:{type:"VeridaDatabase",endpointUri:this.veridaStore.value.veridaTestnetDefaultServer},defaultMessageServer:{type:"VeridaMessage",endpointUri:this.veridaStore.value.veridaTestnetDefaultServer}},{privateKey:this.userStore.value.mnemonic,didServerUrl:this.veridaStore.value.veridaTestnetDidServer,environment:this.veridaStore.value.environmentType}):this.account=new se["VaultAccount"]({request:{logoUrl:this.veridaStore.value.logoUrl}}),le["Network"].connect({client:{environment:this.veridaStore.value.environmentType},account:this.account,context:{name:this.veridaStore.value.contextName}})}async connectProfile(){const e=await this.context.getClient(),t=await this.context.account.did(),c=await e.openPublicProfile(t,this.veridaStore.value.contextName,"basicProfile"),{name:o,avatar:n,description:a,country:r}=await c.getMany();return{did:t,name:o,description:a,country:r}}get context(){return this._context}get profile(){return this._profile}}const be="fedpol",ue=!0,je=new de(be,ue);je.initialize();var Oe=je;const pe=Object(o["createTextVNode"])(" Sign in ");var fe=Object(o["defineComponent"])({__name:"TheSignInButton",setup(e){const t=Object(o["ref"])(!1),c=Object(n["b"])(),a="fedpol",r=Object(o["computed"])(()=>c.getters[a+"/user/isAuthenticated"]);async function l(){t.value=!0,await Oe.initialize();const e=Oe.context;if(e){const e=Oe.profile;c.dispatch(a+"/user/setProfile",e),c.dispatch(a+"/user/signIn")}t.value=!1}return Object(o["onMounted"])(()=>{r.value&&l()}),(e,c)=>{const n=Object(o["resolveComponent"])("el-button"),a=Object(o["resolveDirective"])("loading");return Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createBlock"])(n,{"element-loading-background":"rgba(0, 0, 0, 0.5)",size:"default",color:"#c8d2d2",class:"fedpol-button",onClick:l},{default:Object(o["withCtx"])(()=>[pe]),_:1})),[[a,t.value]])}}});c("3ca7");const me=v()(fe,[["__scopeId","data-v-befa58d2"]]);var he=me;const ve=e=>(Object(o["pushScopeId"])("data-v-72358d9f"),e=e(),Object(o["popScopeId"])(),e),we=["src"],Ce={class:"title"},Ve={class:"title",style:{"margin-top":"15px",height:"1px"}},ge={class:"underline"},Ne=ve(()=>Object(o["createElementVNode"])("p",{class:"tagline"},"The exchange of information and the identification of people and objects are central to fighting crime. fedpol develops and operates national databases, and makes these instruments available to federal and cantonal security and migration services.",-1)),xe=ve(()=>Object(o["createElementVNode"])("div",null,"© 2022 Federal Office of Police fedpol",-1));var _e=Object(o["defineComponent"])({__name:"TheLanding",setup(e){const t=Object(n["b"])(),a="fedpol",r=t.state[a],l=Object(o["computed"])(()=>r.company.profile);return(e,t)=>{const n=Object(o["resolveComponent"])("el-col"),a=Object(o["resolveComponent"])("el-row"),r=Object(o["resolveComponent"])("el-divider");return Object(o["openBlock"])(),Object(o["createBlock"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{class:"header"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("img",{alt:"company logo",src:c("1771")("./"+Object(o["unref"])(l).landingLogo)},null,8,we)]),_:1})]),_:1}),Object(o["createVNode"])(a,{class:"body body-background"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("h2",Ce,Object(o["toDisplayString"])(Object(o["unref"])(l).name),1),Object(o["createElementVNode"])("h2",Ve,[Object(o["createElementVNode"])("span",ge,Object(o["toDisplayString"])(Object(o["unref"])(l).name),1)]),Ne,Object(o["createVNode"])(r,{"border-style":"none"}),Object(o["createVNode"])(he)]),_:1})]),_:1}),Object(o["createVNode"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{class:"footer"},{default:Object(o["withCtx"])(()=>[xe]),_:1})]),_:1})]),_:1})]),_:1})}}});c("2cf0");const ye=v()(_e,[["__scopeId","data-v-72358d9f"]]);var ke=ye;const qe={key:0,id:"home"},Se={key:1};var Re=Object(o["defineComponent"])({__name:"TheHome",setup(e){const t=Object(n["b"])(),c="fedpol",a=t.state[c],r=Object(o["computed"])(()=>a.user.isAuthenticated);return(e,t)=>Object(o["unref"])(r)?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",qe,[Object(o["createVNode"])(C),Object(o["createVNode"])(Z),Object(o["createVNode"])(ae)])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Se,[Object(o["createVNode"])(ke)]))}});c("2a6c");const Be=v()(Re,[["__scopeId","data-v-50b93378"]]);t["default"]=Be}}]);
//# sourceMappingURL=chunk-628dda78.83b918da.js.map