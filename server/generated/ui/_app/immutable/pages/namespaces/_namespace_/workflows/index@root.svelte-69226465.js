import{S as _e,i as $e,s as ge,l as F,a as N,m as M,n as O,h as $,c as q,p as B,b as S,N as D,g as x,t as v,d as ee,f as w,O as Q,P as qe,r as j,u as U,U as De,ak as Pe,a0 as G,a8 as J,x as R,y as A,z as I,a9 as K,C,e as Y,a1 as Ne,ac as Be,ap as Fe,v as se,F as le,o as Me,a4 as ue,an as Oe}from"../../../../chunks/index-7e739eea.js";import{p as he}from"../../../../chunks/stores-7f07ccfb.js";import{t as ce}from"../../../../chunks/time-format-353b7e26.js";import{w as de,r as we,a as je,u as Ue,l as Le,b as Ve,c as Qe,p as ze}from"../../../../chunks/terminate-service-189a225c.js";import{l as ke}from"../../../../chunks/namespaces-c4de61fa.js";import{E as He}from"../../../../chunks/empty-state-5d27ea9d.js";import{P as Ge}from"../../../../chunks/pagination-6268f248.js";import{t as me,j as Je,S as Ke,W as Xe,a as Ye}from"../../../../chunks/search-4e04380e.js";import{I as pe,N as Ze}from"../../../../chunks/namespace-selector-3fce7f7f.js";import{B as xe}from"../../../../chunks/button-b1c22f57.js";import{I as et}from"../../../../chunks/icon-e2f06bf3.js";import{b as tt}from"../../../../chunks/table-row-88c40201.js";import{u as oe}from"../../../../chunks/update-query-parameters-0d565146.js";import{o as ne}from"../../../../chunks/format-time-d031c2bc.js";import{t as be}from"../../../../chunks/workflow-service-edf003eb.js";import{S as ie,a as Z}from"../../../../chunks/simple-select-c0ecedfb.js";import{a as rt}from"../../../../chunks/is-44021919.js";import{L as lt}from"../../../../chunks/loading-d00fcc7a.js";import{t as ve}from"../../../../chunks/toaster-6440b756.js";import{M as nt}from"../../../../chunks/modal-3bab1332.js";import{P as ot}from"../../../../chunks/page-title-5b02a0f2.js";import"../../../../chunks/persist-store-c25f6403.js";import"../../../../chunks/index-d8ed1bec.js";import"../../../../chunks/parse-with-big-int-561ccb8b.js";import"../../../../chunks/with-loading-f07bedaf.js";import"../../../../chunks/route-for-06e4a074.js";import"../../../../chunks/route-for-api-652ea8c7.js";import"../../../../chunks/auth-user-bc1ad23a.js";import"../../../../chunks/notifications-7e703e91.js";import"../../../../chunks/is-network-error-5f9e2367.js";import"../../../../chunks/v4-f2cd1a04.js";import"../../../../chunks/core-user-d7236ce4.js";import"../../../../chunks/format-date-c1755997.js";import"../../../../chunks/workflow-status-cd15e3c1.js";import"../../../../chunks/copy-to-clipboard-1ace7192.js";import"../../../../chunks/nav-open-b1183e6b.js";import"../../../../chunks/new-feature-tags-f117852f.js";import"../../../../chunks/tooltip-8a52658c.js";import"../../../../chunks/badge-16b5ec74.js";import"../../../../chunks/navigation-fbe70647.js";import"../../../../chunks/singletons-eca981c1.js";import"../../../../chunks/settings-c94c37e6.js";import"../../../../chunks/simplify-attributes-055c76f2.js";import"../../../../chunks/icon-button-4154f86e.js";import"../../../../chunks/index-126fba9a.js";import"../../../../chunks/index-b3864242.js";function Te(n,e,r){const t=n.slice();return t[16]=e[r][0],t[17]=e[r][1],t}function ye(n,e,r){const t=n.slice();return t[17]=e[r],t}function st(n){let e,r,t,l,s;return{c(){e=F("a"),r=j("Advanced Search"),this.h()},l(i){e=M(i,"A",{href:!0,class:!0});var o=O(e);r=U(o,"Advanced Search"),o.forEach($),this.h()},h(){B(e,"href",t=n[2].url.pathname+"?searchType=advanced"),B(e,"class","text-blue-700")},m(i,o){S(i,e,o),D(e,r),l||(s=De(e,"click",Pe(n[6]("advanced"))),l=!0)},p(i,o){o&4&&t!==(t=i[2].url.pathname+"?searchType=advanced")&&B(e,"href",t)},d(i){i&&$(e),l=!1,s()}}}function at(n){let e,r,t,l,s;return{c(){e=F("a"),r=j("Basic Search"),this.h()},l(i){e=M(i,"A",{href:!0,class:!0});var o=O(e);r=U(o,"Basic Search"),o.forEach($),this.h()},h(){B(e,"href",t=n[2].url.pathname+"?searchType=basic"),B(e,"class","text-blue-700")},m(i,o){S(i,e,o),D(e,r),l||(s=De(e,"click",Pe(n[6]("basic"))),l=!0)},p(i,o){o&4&&t!==(t=i[2].url.pathname+"?searchType=basic")&&B(e,"href",t)},d(i){i&&$(e),l=!1,s()}}}function ft(n){let e,r,t,l,s,i,o,a,f,h,u,_,c,m,k,b;function y(g){n[9](g)}let P={icon:"search",id:"workflow-id-filter",placeholder:"Workflow ID"};n[3].workflowId!==void 0&&(P.value=n[3].workflowId),r=new pe({props:P}),G.push(()=>J(r,"value",y)),r.$on("input",n[8]);function T(g){n[10](g)}let L={icon:"search",id:"workflow-type-filter",placeholder:"Workflow Type"};n[3].workflowType!==void 0&&(L.value=n[3].workflowType),s=new pe({props:L}),G.push(()=>J(s,"value",T)),s.$on("input",n[8]);function H(g){n[11](g)}let te={id:"time-range-filter",placeholder:"Time Range",$$slots:{default:[pt]},$$scope:{ctx:n}};n[3].timeRange!==void 0&&(te.value=n[3].timeRange),a=new ie({props:te}),G.push(()=>J(a,"value",H)),a.$on("change",n[8]);function re(g){n[12](g)}let p={id:"execution-status-filter",label:"Workflow Status",$$slots:{default:[$t]},$$scope:{ctx:n}};n[3].executionStatus!==void 0&&(p.value=n[3].executionStatus),u=new ie({props:p}),G.push(()=>J(u,"value",re)),u.$on("change",n[8]);function W(g){n[13](g)}let V={id:"filter-by-relative-time",$$slots:{default:[wt]},$$scope:{ctx:n}};return n[4]!==void 0&&(V.value=n[4]),m=new ie({props:V}),G.push(()=>J(m,"value",W)),{c(){e=F("div"),R(r.$$.fragment),l=N(),R(s.$$.fragment),o=N(),R(a.$$.fragment),h=N(),R(u.$$.fragment),c=N(),R(m.$$.fragment),this.h()},l(g){e=M(g,"DIV",{class:!0});var E=O(e);A(r.$$.fragment,E),l=q(E),A(s.$$.fragment,E),o=q(E),A(a.$$.fragment,E),h=q(E),A(u.$$.fragment,E),c=q(E),A(m.$$.fragment,E),E.forEach($),this.h()},h(){B(e,"class","grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5")},m(g,E){S(g,e,E),I(r,e,null),D(e,l),I(s,e,null),D(e,o),I(a,e,null),D(e,h),I(u,e,null),D(e,c),I(m,e,null),b=!0},p(g,E){const z={};!t&&E&8&&(t=!0,z.value=g[3].workflowId,K(()=>t=!1)),r.$set(z);const d={};!i&&E&8&&(i=!0,d.value=g[3].workflowType,K(()=>i=!1)),s.$set(d);const X={};E&4194312&&(X.$$scope={dirty:E,ctx:g}),!f&&E&8&&(f=!0,X.value=g[3].timeRange,K(()=>f=!1)),a.$set(X);const ae={};E&4194304&&(ae.$$scope={dirty:E,ctx:g}),!_&&E&8&&(_=!0,ae.value=g[3].executionStatus,K(()=>_=!1)),u.$set(ae);const fe={};E&4194304&&(fe.$$scope={dirty:E,ctx:g}),!k&&E&16&&(k=!0,fe.value=g[4],K(()=>k=!1)),m.$set(fe)},i(g){b||(w(r.$$.fragment,g),w(s.$$.fragment,g),w(a.$$.fragment,g),w(u.$$.fragment,g),w(m.$$.fragment,g),b=!0)},o(g){v(r.$$.fragment,g),v(s.$$.fragment,g),v(a.$$.fragment,g),v(u.$$.fragment,g),v(m.$$.fragment,g),b=!1},d(g){g&&$(e),C(r),C(s),C(a),C(u),C(m)}}}function ut(n){let e,r;return e=new Ke({props:{icon:!0,id:"advanced-search",placeholder:"Query\u2026",value:n[1]}}),e.$on("submit",n[7]),{c(){R(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,l){I(e,t,l),r=!0},p(t,l){const s={};l&2&&(s.value=t[1]),e.$set(s)},i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function it(n){let e;return{c(){e=j("All")},l(r){e=U(r,"All")},m(r,t){S(r,e,t)},d(r){r&&$(e)}}}function Se(n){let e,r;return e=new Z({props:{value:n[3].timeRange,$$slots:{default:[ct]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,l){I(e,t,l),r=!0},p(t,l){const s={};l&8&&(s.value=t[3].timeRange),l&4194312&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function ct(n){let e=n[3].timeRange+"",r;return{c(){r=j(e)},l(t){r=U(t,e)},m(t,l){S(t,r,l)},p(t,l){l&8&&e!==(e=t[3].timeRange+"")&&se(r,e)},d(t){t&&$(r)}}}function mt(n){let e=n[17]+"",r;return{c(){r=j(e)},l(t){r=U(t,e)},m(t,l){S(t,r,l)},p:le,d(t){t&&$(r)}}}function Ee(n){let e,r;return e=new Z({props:{value:n[17],$$slots:{default:[mt]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,l){I(e,t,l),r=!0},p(t,l){const s={};l&4194304&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function pt(n){let e,r,t=n[3].timeRange&&!ne.includes(n[3].timeRange),l,s,i;e=new Z({props:{value:null,$$slots:{default:[it]},$$scope:{ctx:n}}});let o=t&&Se(n),a=ne,f=[];for(let u=0;u<a.length;u+=1)f[u]=Ee(ye(n,a,u));const h=u=>v(f[u],1,1,()=>{f[u]=null});return{c(){R(e.$$.fragment),r=N(),o&&o.c(),l=N();for(let u=0;u<f.length;u+=1)f[u].c();s=Y()},l(u){A(e.$$.fragment,u),r=q(u),o&&o.l(u),l=q(u);for(let _=0;_<f.length;_+=1)f[_].l(u);s=Y()},m(u,_){I(e,u,_),S(u,r,_),o&&o.m(u,_),S(u,l,_);for(let c=0;c<f.length;c+=1)f[c].m(u,_);S(u,s,_),i=!0},p(u,_){const c={};if(_&4194304&&(c.$$scope={dirty:_,ctx:u}),e.$set(c),_&8&&(t=u[3].timeRange&&!ne.includes(u[3].timeRange)),t?o?(o.p(u,_),_&8&&w(o,1)):(o=Se(u),o.c(),w(o,1),o.m(l.parentNode,l)):o&&(x(),v(o,1,1,()=>{o=null}),ee()),_&0){a=ne;let m;for(m=0;m<a.length;m+=1){const k=ye(u,a,m);f[m]?(f[m].p(k,_),w(f[m],1)):(f[m]=Ee(k),f[m].c(),w(f[m],1),f[m].m(s.parentNode,s))}for(x(),m=a.length;m<f.length;m+=1)h(m);ee()}},i(u){if(!i){w(e.$$.fragment,u),w(o);for(let _=0;_<a.length;_+=1)w(f[_]);i=!0}},o(u){v(e.$$.fragment,u),v(o),f=f.filter(Boolean);for(let _=0;_<f.length;_+=1)v(f[_]);i=!1},d(u){C(e,u),u&&$(r),o&&o.d(u),u&&$(l),Ne(f,u),u&&$(s)}}}function _t(n){let e=n[16]+"",r;return{c(){r=j(e)},l(t){r=U(t,e)},m(t,l){S(t,r,l)},p:le,d(t){t&&$(r)}}}function We(n,e){let r,t,l;return t=new Z({props:{value:e[17],$$slots:{default:[_t]},$$scope:{ctx:e}}}),{key:n,first:null,c(){r=Y(),R(t.$$.fragment),this.h()},l(s){r=Y(),A(t.$$.fragment,s),this.h()},h(){this.first=r},m(s,i){S(s,r,i),I(t,s,i),l=!0},p(s,i){e=s;const o={};i&4194304&&(o.$$scope={dirty:i,ctx:e}),t.$set(o)},i(s){l||(w(t.$$.fragment,s),l=!0)},o(s){v(t.$$.fragment,s),l=!1},d(s){s&&$(r),C(t,s)}}}function $t(n){let e=[],r=new Map,t,l,s=Object.entries(n[5]);const i=o=>o[16];for(let o=0;o<s.length;o+=1){let a=Te(n,s,o),f=i(a);r.set(f,e[o]=We(f,a))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();t=Y()},l(o){for(let a=0;a<e.length;a+=1)e[a].l(o);t=Y()},m(o,a){for(let f=0;f<e.length;f+=1)e[f].m(o,a);S(o,t,a),l=!0},p(o,a){a&32&&(s=Object.entries(o[5]),x(),e=Be(e,a,i,1,o,s,r,t.parentNode,Fe,We,t,Te),ee())},i(o){if(!l){for(let a=0;a<s.length;a+=1)w(e[a]);l=!0}},o(o){for(let a=0;a<e.length;a+=1)v(e[a]);l=!1},d(o){for(let a=0;a<e.length;a+=1)e[a].d(o);o&&$(t)}}}function gt(n){let e;return{c(){e=j("Relative")},l(r){e=U(r,"Relative")},m(r,t){S(r,e,t)},d(r){r&&$(e)}}}function ht(n){let e;return{c(){e=j("UTC")},l(r){e=U(r,"UTC")},m(r,t){S(r,e,t)},d(r){r&&$(e)}}}function dt(n){let e;return{c(){e=j("Local")},l(r){e=U(r,"Local")},m(r,t){S(r,e,t)},d(r){r&&$(e)}}}function wt(n){let e,r,t,l,s,i;return e=new Z({props:{value:"relative",$$slots:{default:[gt]},$$scope:{ctx:n}}}),t=new Z({props:{value:"UTC",$$slots:{default:[ht]},$$scope:{ctx:n}}}),s=new Z({props:{value:"local",$$slots:{default:[dt]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),r=N(),R(t.$$.fragment),l=N(),R(s.$$.fragment)},l(o){A(e.$$.fragment,o),r=q(o),A(t.$$.fragment,o),l=q(o),A(s.$$.fragment,o)},m(o,a){I(e,o,a),S(o,r,a),I(t,o,a),S(o,l,a),I(s,o,a),i=!0},p(o,a){const f={};a&4194304&&(f.$$scope={dirty:a,ctx:o}),e.$set(f);const h={};a&4194304&&(h.$$scope={dirty:a,ctx:o}),t.$set(h);const u={};a&4194304&&(u.$$scope={dirty:a,ctx:o}),s.$set(u)},i(o){i||(w(e.$$.fragment,o),w(t.$$.fragment,o),w(s.$$.fragment,o),i=!0)},o(o){v(e.$$.fragment,o),v(t.$$.fragment,o),v(s.$$.fragment,o),i=!1},d(o){C(e,o),o&&$(r),C(t,o),o&&$(l),C(s,o)}}}function kt(n){let e,r,t,l,s,i;function o(c,m){return c[0]==="advanced"?at:st}let a=o(n),f=a(n);const h=[ut,ft],u=[];function _(c,m){return c[0]==="advanced"?0:1}return l=_(n),s=u[l]=h[l](n),{c(){e=F("section"),r=F("p"),f.c(),t=N(),s.c(),this.h()},l(c){e=M(c,"SECTION",{class:!0});var m=O(e);r=M(m,"P",{class:!0});var k=O(r);f.l(k),k.forEach($),t=q(m),s.l(m),m.forEach($),this.h()},h(){B(r,"class","pb-2 text-right text-xs"),B(e,"class","flex flex-col")},m(c,m){S(c,e,m),D(e,r),f.m(r,null),D(e,t),u[l].m(e,null),i=!0},p(c,[m]){a===(a=o(c))&&f?f.p(c,m):(f.d(1),f=a(c),f&&(f.c(),f.m(r,null)));let k=l;l=_(c),l===k?u[l].p(c,m):(x(),v(u[k],1,1,()=>{u[k]=null}),ee(),s=u[l],s?s.p(c,m):(s=u[l]=h[l](c),s.c()),w(s,1),s.m(e,null))},i(c){i||(w(s),i=!0)},o(c){v(s),i=!1},d(c){c&&$(e),f.d(),u[l].d()}}}function bt(n,e,r){let t,l,s,i;Q(n,he,T=>r(2,s=T)),Q(n,ce,T=>r(4,i=T));const o=qe();let{searchType:a}=e;const f=be({timeRange:"All"}),h={All:null,Running:"Running","Timed Out":"TimedOut",Completed:"Completed",Failed:"Failed","Continued as New":"ContinuedAsNew",Canceled:"Canceled",Terminated:"Terminated"},u=T=>()=>{r(0,a=T),oe({parameter:"search",value:a,url:s.url})},_=T=>{o("search");const L=new FormData(T.target);r(1,t=String(L.get("query"))),r(3,l=me(t)),oe({url:s.url,parameter:"query",value:t})},c=Je(()=>{o("search"),r(1,t=be(l)),oe({url:s.url,parameter:"query",value:t,allowEmpty:!0})},300);function m(T){n.$$.not_equal(l.workflowId,T)&&(l.workflowId=T,r(3,l),r(1,t),r(2,s))}function k(T){n.$$.not_equal(l.workflowType,T)&&(l.workflowType=T,r(3,l),r(1,t),r(2,s))}function b(T){n.$$.not_equal(l.timeRange,T)&&(l.timeRange=T,r(3,l),r(1,t),r(2,s))}function y(T){n.$$.not_equal(l.executionStatus,T)&&(l.executionStatus=T,r(3,l),r(1,t),r(2,s))}function P(T){i=T,ce.set(i)}return n.$$set=T=>{"searchType"in T&&r(0,a=T.searchType)},n.$$.update=()=>{n.$$.dirty&4&&r(1,t=s.url.searchParams.get("query")),n.$$.dirty&2&&r(3,l=me(t!=null?t:f))},[a,t,s,l,i,h,u,_,c,m,k,b,y,P]}class vt extends _e{constructor(e){super(),$e(this,e,bt,kt,ge,{searchType:0})}}const Tt=n=>rt(n)?n==="basic"||n==="advanced":!1,yt=n=>{const e=n.searchParams.get("search");return Tt(e)?e:(n.searchParams.set("search","basic"),"basic")},Re=(n,e)=>e===1?n:`${n}s`;function Ae(n,e,r){const t=n.slice();return t[28]=e[r],t}function St(n){let e,r;return{c(){e=F("h3"),r=j("Terminate Workflows"),this.h()},l(t){e=M(t,"H3",{slot:!0});var l=O(e);r=U(l,"Terminate Workflows"),l.forEach($),this.h()},h(){B(e,"slot","title")},m(t,l){S(t,e,l),D(e,r)},p:le,d(t){t&&$(e)}}}function Et(n){let e,r,t,l=n[7].length+"",s,i,o=Re("workflow",n[7].length)+"",a,f,h,u,_,c;function m(b){n[19](b)}let k={id:"bulk-terminate-reason",placeholder:"Enter a reason"};return n[3]!==void 0&&(k.value=n[3]),u=new pe({props:k}),G.push(()=>J(u,"value",m)),{c(){e=F("p"),r=j("Are you sure you want to terminate "),t=F("strong"),s=j(l),i=j(" running "),a=j(o),f=j("? This action cannot be undone."),h=N(),R(u.$$.fragment),this.h()},l(b){e=M(b,"P",{class:!0});var y=O(e);r=U(y,"Are you sure you want to terminate "),t=M(y,"STRONG",{});var P=O(t);s=U(P,l),i=U(P," running "),a=U(P,o),P.forEach($),f=U(y,"? This action cannot be undone."),y.forEach($),h=q(b),A(u.$$.fragment,b),this.h()},h(){B(e,"class","mb-2")},m(b,y){S(b,e,y),D(e,r),D(e,t),D(t,s),D(t,i),D(t,a),D(e,f),S(b,h,y),I(u,b,y),c=!0},p(b,y){(!c||y[0]&128)&&l!==(l=b[7].length+"")&&se(s,l),(!c||y[0]&128)&&o!==(o=Re("workflow",b[7].length)+"")&&se(a,o);const P={};!_&&y[0]&8&&(_=!0,P.value=b[3],K(()=>_=!1)),u.$set(P)},i(b){c||(w(u.$$.fragment,b),c=!0)},o(b){v(u.$$.fragment,b),c=!1},d(b){b&&$(e),b&&$(h),C(u,b)}}}function Wt(n){let e,r;return e=new et({props:{name:"retry"}}),{c(){R(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,l){I(e,t,l),r=!0},p:le,i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function Ie(n){let e,r;return e=new tt({props:{$$slots:{default:[It]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,l){I(e,t,l),r=!0},p(t,l){const s={};l[0]&12288|l[1]&1&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function Rt(n){let e,r;return e=new He({props:{title:"No Workflows Found",content:n[14],error:n[13]}}),{c(){R(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,l){I(e,t,l),r=!0},p(t,l){const s={};l[0]&8192&&(s.error=t[13]),e.$set(s)},i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function At(n){let e,r;return e=new lt({}),{c(){R(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,l){I(e,t,l),r=!0},p:le,i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function It(n){let e,r,t,l,s,i,o,a,f;const h=[At,Rt],u=[];function _(c,m){return c[12]?0:1}return l=_(n),s=u[l]=h[l](n),{c(){e=F("td"),r=N(),t=F("td"),s.c(),i=N(),o=F("td"),a=N(),this.h()},l(c){e=M(c,"TD",{class:!0}),O(e).forEach($),r=q(c),t=M(c,"TD",{colspan:!0});var m=O(t);s.l(m),m.forEach($),i=q(c),o=M(c,"TD",{class:!0}),O(o).forEach($),a=q(c),this.h()},h(){B(e,"class","hidden xl:table-cell"),B(t,"colspan","3"),B(o,"class","hidden xl:table-cell")},m(c,m){S(c,e,m),S(c,r,m),S(c,t,m),u[l].m(t,null),S(c,i,m),S(c,o,m),S(c,a,m),f=!0},p(c,m){let k=l;l=_(c),l===k?u[l].p(c,m):(x(),v(u[k],1,1,()=>{u[k]=null}),ee(),s=u[l],s?s.p(c,m):(s=u[l]=h[l](c),s.c()),w(s,1),s.m(t,null))},i(c){f||(w(s),f=!0)},o(c){v(s),f=!1},d(c){c&&$(e),c&&$(r),c&&$(t),u[l].d(),c&&$(i),c&&$(o),c&&$(a)}}}function Ce(n){let e,r;return e=new Ye({props:{bulkActionsEnabled:n[0],workflow:n[28],namespace:n[8].params.namespace,timeFormat:n[11],selected:n[1].includes(n[28])}}),{c(){R(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,l){I(e,t,l),r=!0},p(t,l){const s={};l[0]&1&&(s.bulkActionsEnabled=t[0]),l[0]&134217728&&(s.workflow=t[28]),l[0]&256&&(s.namespace=t[8].params.namespace),l[0]&2048&&(s.timeFormat=t[11]),l[0]&134217730&&(s.selected=t[1].includes(t[28])),e.$set(s)},i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function Ct(n){let e,r,t=n[27],l=[];for(let o=0;o<t.length;o+=1)l[o]=Ce(Ae(n,t,o));const s=o=>v(l[o],1,1,()=>{l[o]=null});let i=null;return t.length||(i=Ie(n)),{c(){for(let o=0;o<l.length;o+=1)l[o].c();e=Y(),i&&i.c()},l(o){for(let a=0;a<l.length;a+=1)l[a].l(o);e=Y(),i&&i.l(o)},m(o,a){for(let f=0;f<l.length;f+=1)l[f].m(o,a);S(o,e,a),i&&i.m(o,a),r=!0},p(o,a){if(a[0]&134248707){t=o[27];let f;for(f=0;f<t.length;f+=1){const h=Ae(o,t,f);l[f]?(l[f].p(h,a),w(l[f],1)):(l[f]=Ce(h),l[f].c(),w(l[f],1),l[f].m(e.parentNode,e))}for(x(),f=t.length;f<l.length;f+=1)s(f);ee(),!t.length&&i?i.p(o,a):t.length?i&&(x(),v(i,1,1,()=>{i=null}),ee()):(i=Ie(o),i.c(),w(i,1),i.m(e.parentNode,e))}},i(o){if(!r){for(let a=0;a<t.length;a+=1)w(l[a]);r=!0}},o(o){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)v(l[a]);r=!1},d(o){Ne(l,o),o&&$(e),i&&i.d(o)}}}function Dt(n){let e,r,t,l;function s(a){n[22](a)}function i(a){n[23](a)}let o={bulkActionsEnabled:n[0],updating:n[10],visibleWorkflows:n[27],terminableWorkflowCount:n[7].length,$$slots:{default:[Ct]},$$scope:{ctx:n}};return n[1]!==void 0&&(o.selectedWorkflows=n[1]),n[5]!==void 0&&(o.allSelected=n[5]),e=new Xe({props:o}),G.push(()=>J(e,"selectedWorkflows",s)),G.push(()=>J(e,"allSelected",i)),e.$on("terminateWorkflows",n[17]),{c(){R(e.$$.fragment)},l(a){A(e.$$.fragment,a)},m(a,f){I(e,a,f),l=!0},p(a,f){const h={};f[0]&1&&(h.bulkActionsEnabled=a[0]),f[0]&1024&&(h.updating=a[10]),f[0]&134217728&&(h.visibleWorkflows=a[27]),f[0]&128&&(h.terminableWorkflowCount=a[7].length),f[0]&134232323|f[1]&1&&(h.$$scope={dirty:f,ctx:a}),!r&&f[0]&2&&(r=!0,h.selectedWorkflows=a[1],K(()=>r=!1)),!t&&f[0]&32&&(t=!0,h.allSelected=a[5],K(()=>t=!1)),e.$set(h)},i(a){l||(w(e.$$.fragment,a),l=!0)},o(a){v(e.$$.fragment,a),l=!1},d(a){C(e,a)}}}function Pt(n){let e,r,t,l,s,i,o,a,f,h,u=n[8].params.namespace+"",_,c,m,k,b,y,P,T,L,H;e=new nt({props:{open:n[4],confirmText:"Terminate",confirmType:"destructive",confirmDisabled:n[3]==="",loading:n[6],$$slots:{content:[Et],title:[St]},$$scope:{ctx:n}}}),e.$on("cancelModal",n[20]),e.$on("confirmModal",n[18]),o=new Ze({}),k=new xe({props:{variant:"secondary",$$slots:{default:[Wt]},$$scope:{ctx:n}}}),k.$on("click",n[16]);function te(p){n[21](p)}let re={};return n[2]!==void 0&&(re.searchType=n[2]),y=new vt({props:re}),G.push(()=>J(y,"searchType",te)),y.$on("search",n[15]),L=new Ge({props:{items:n[9],$$slots:{default:[Dt,({visibleItems:p})=>({27:p}),({visibleItems:p})=>[p?134217728:0]]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),r=N(),t=F("div"),l=F("div"),s=F("h1"),i=j(`Recent Workflows
      `),R(o.$$.fragment),a=N(),f=F("div"),h=F("p"),_=j(u),c=N(),m=F("div"),R(k.$$.fragment),b=N(),R(y.$$.fragment),T=N(),R(L.$$.fragment),this.h()},l(p){A(e.$$.fragment,p),r=q(p),t=M(p,"DIV",{class:!0});var W=O(t);l=M(W,"DIV",{});var V=O(l);s=M(V,"H1",{class:!0,"data-cy":!0});var g=O(s);i=U(g,`Recent Workflows
      `),A(o.$$.fragment,g),g.forEach($),a=q(V),f=M(V,"DIV",{class:!0});var E=O(f);h=M(E,"P",{"data-cy":!0});var z=O(h);_=U(z,u),z.forEach($),E.forEach($),V.forEach($),c=q(W),m=M(W,"DIV",{});var d=O(m);A(k.$$.fragment,d),d.forEach($),W.forEach($),b=q(p),A(y.$$.fragment,p),T=q(p),A(L.$$.fragment,p),this.h()},h(){B(s,"class","text-2xl"),B(s,"data-cy","namespace-title"),B(h,"data-cy","namespace-name"),B(f,"class","flex items-center gap-2 text-sm"),B(t,"class","mb-2 flex justify-between")},m(p,W){I(e,p,W),S(p,r,W),S(p,t,W),D(t,l),D(l,s),D(s,i),I(o,s,null),D(l,a),D(l,f),D(f,h),D(h,_),D(t,c),D(t,m),I(k,m,null),S(p,b,W),I(y,p,W),S(p,T,W),I(L,p,W),H=!0},p(p,W){const V={};W[0]&16&&(V.open=p[4]),W[0]&8&&(V.confirmDisabled=p[3]===""),W[0]&64&&(V.loading=p[6]),W[0]&136|W[1]&1&&(V.$$scope={dirty:W,ctx:p}),e.$set(V),(!H||W[0]&256)&&u!==(u=p[8].params.namespace+"")&&se(_,u);const g={};W[1]&1&&(g.$$scope={dirty:W,ctx:p}),k.$set(g);const E={};!P&&W[0]&4&&(P=!0,E.searchType=p[2],K(()=>P=!1)),y.$set(E);const z={};W[0]&512&&(z.items=p[9]),W[0]&134233507|W[1]&1&&(z.$$scope={dirty:W,ctx:p}),L.$set(z)},i(p){H||(w(e.$$.fragment,p),w(o.$$.fragment,p),w(k.$$.fragment,p),w(y.$$.fragment,p),w(L.$$.fragment,p),H=!0)},o(p){v(e.$$.fragment,p),v(o.$$.fragment,p),v(k.$$.fragment,p),v(y.$$.fragment,p),v(L.$$.fragment,p),H=!1},d(p){C(e,p),p&&$(r),p&&$(t),C(o),C(k),p&&$(b),C(y,p),p&&$(T),C(L,p)}}}function Nt(n,e,r){let t,l,s,i,o,a,f,h,u,_;Q(n,de,d=>r(24,l=d)),Q(n,he,d=>r(8,s=d)),Q(n,we,d=>r(25,i=d)),Q(n,ke,d=>r(26,o=d)),Q(n,je,d=>r(9,a=d)),Q(n,Ue,d=>r(10,f=d)),Q(n,ce,d=>r(11,h=d)),Q(n,Le,d=>r(12,u=d)),Q(n,Ve,d=>r(13,_=d));let{bulkActionsEnabled:c=!1}=e,m=yt(s.url),k=[],b="",y=!1,P=!1,T=!1;const L=m==="advanced"?"Please check your syntax and try again.":"If you have filters applied, try adjusting them.";Me(()=>{ue(ke,o=s.params.namespace,o)});const H=()=>{r(5,P=!1),r(1,k=[])},te=()=>{H(),ue(we,i=Date.now(),i)},re=()=>{r(4,y=!0)},p=async()=>{r(6,T=!0);const{namespace:d}=s.params;try{const X=await Qe({namespace:d,workflowExecutions:t,reason:b});await ze({namespace:d,jobId:X})}catch{r(4,y=!1),ve.push({variant:"error",message:"Unable to terminate workflows."});return}ve.push({variant:"primary",message:`Successfully terminated ${t.length} workflows.`}),r(1,k=[]),r(5,P=!1),r(6,T=!1),r(4,y=!1),r(3,b=""),oe({parameter:"query",value:"",url:s.url})};Oe(()=>{const d=s.url.searchParams.get("query"),X=d?me(d):{};ue(de,l={parameters:X,searchType:m},l)});function W(d){b=d,r(3,b)}const V=()=>r(4,y=!1);function g(d){m=d,r(2,m)}function E(d){k=d,r(1,k)}function z(d){P=d,r(5,P)}return n.$$set=d=>{"bulkActionsEnabled"in d&&r(0,c=d.bulkActionsEnabled)},n.$$.update=()=>{n.$$.dirty[0]&2&&r(7,t=k.filter(d=>d.canBeTerminated))},[c,k,m,b,y,P,T,t,s,a,f,h,u,_,L,H,te,re,p,W,V,g,E,z]}class qt extends _e{constructor(e){super(),$e(this,e,Nt,Pt,ge,{bulkActionsEnabled:0},null,[-1,-1])}}function Bt(n){let e,r,t,l;return e=new ot({props:{title:`Workflows | ${n[0].params.namespace}`,url:n[0].url.href}}),t=new qt({}),{c(){R(e.$$.fragment),r=N(),R(t.$$.fragment)},l(s){A(e.$$.fragment,s),r=q(s),A(t.$$.fragment,s)},m(s,i){I(e,s,i),S(s,r,i),I(t,s,i),l=!0},p(s,[i]){const o={};i&1&&(o.title=`Workflows | ${s[0].params.namespace}`),i&1&&(o.url=s[0].url.href),e.$set(o)},i(s){l||(w(e.$$.fragment,s),w(t.$$.fragment,s),l=!0)},o(s){v(e.$$.fragment,s),v(t.$$.fragment,s),l=!1},d(s){C(e,s),s&&$(r),C(t,s)}}}function Ft(n,e,r){let t;return Q(n,he,l=>r(0,t=l)),[t]}class Ir extends _e{constructor(e){super(),$e(this,e,Ft,Bt,ge,{})}}export{Ir as default};