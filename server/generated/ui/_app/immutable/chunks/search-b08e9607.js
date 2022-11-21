import{S as oe,i as re,s as le,J as fe,l as y,m as W,n as I,h as u,p as T,b as g,U as z,K as ie,L as ue,M as ce,f as E,t as C,X as Ie,D as de,x as R,y as M,z as O,A as ot,B as rt,C as Q,j as mt,W as Ce,a0 as De,a8 as He,a9 as Ae,e as te,g as Y,d as Z,O as Ne,P as _t,r as L,a as N,u as B,c as P,N as v,F as ee,v as G,V as Pe,as as Te,I as dt,Q as bt,w as Xe,H as ft}from"./index-22b4dbf5.js";import{p as it}from"./stores-d81762c0.js";import{T as ut,a as ct,b as Ue}from"./table-row-09e0e55f.js";import{c as ht,W as kt}from"./core-user-fd1eb3ef.js";import{f as x}from"./format-date-c1755997.js";import{q as wt,s as pt,u as gt,v as Ge}from"./format-time-d031c2bc.js";import{n as Tt}from"./route-for-ec0d3387.js";import{u as vt}from"./pagination-55b37e70.js";import{t as Ye}from"./workflow-service-84f7c4fa.js";import{c as Et,d as Be,e as St,f as yt,g as Wt}from"./is-44021919.js";import{I as qe}from"./icon-3482eca4.js";import{c as It}from"./copy-to-clipboard-1a2bdded.js";import{B as Ct}from"./button-101bd85d.js";function Dt(n){let e,s,t,l;const f=n[3].default,a=fe(f,n,n[2],null);return{c(){e=y("button"),a&&a.c(),this.h()},l(r){e=W(r,"BUTTON",{"data-cy":!0,class:!0});var o=I(e);a&&a.l(o),o.forEach(u),this.h()},h(){T(e,"data-cy",n[0]),e.disabled=n[1],T(e,"class","bulk-action-button svelte-1u0at90")},m(r,o){g(r,e,o),a&&a.m(e,null),s=!0,t||(l=z(e,"click",n[4]),t=!0)},p(r,[o]){a&&a.p&&(!s||o&4)&&ie(a,f,r,r[2],s?ce(f,r[2],o,null):ue(r[2]),null),(!s||o&1)&&T(e,"data-cy",r[0]),(!s||o&2)&&(e.disabled=r[1])},i(r){s||(E(a,r),s=!0)},o(r){C(a,r),s=!1},d(r){r&&u(e),a&&a.d(r),t=!1,l()}}}function Ht(n,e,s){let{$$slots:t={},$$scope:l}=e,{dataCy:f=null}=e,{disabled:a=!0}=e;function r(o){Ie.call(this,n,o)}return n.$$set=o=>{"dataCy"in o&&s(0,f=o.dataCy),"disabled"in o&&s(1,a=o.disabled),"$$scope"in o&&s(2,l=o.$$scope)},[f,a,l,t,r]}class At extends oe{constructor(e){super(),re(this,e,Ht,Dt,le,{dataCy:0,disabled:1})}}const Nt=n=>({}),Ze=n=>({}),Pt=n=>({}),$e=n=>({});function Ft(n){let e;const s=n[8].default,t=fe(s,n,n[10],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,f){t&&t.m(l,f),e=!0},p(l,f){t&&t.p&&(!e||f&1024)&&ie(t,s,l,l[10],e?ce(s,l[10],f,null):ue(l[10]),null)},i(l){e||(E(t,l),e=!0)},o(l){C(t,l),e=!1},d(l){t&&t.d(l)}}}function Lt(n){let e;const s=n[8]["default-headers"],t=fe(s,n,n[10],Ze);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,f){t&&t.m(l,f),e=!0},p(l,f){t&&t.p&&(!e||f&1024)&&ie(t,s,l,l[10],e?ce(s,l[10],f,Nt):ue(l[10]),Ze)},i(l){e||(E(t,l),e=!0)},o(l){C(t,l),e=!1},d(l){t&&t.d(l)}}}function Bt(n){let e;const s=n[8]["bulk-action-headers"],t=fe(s,n,n[10],$e);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,f){t&&t.m(l,f),e=!0},p(l,f){t&&t.p&&(!e||f&1024)&&ie(t,s,l,l[10],e?ce(s,l[10],f,Pt):ue(l[10]),$e)},i(l){e||(E(t,l),e=!0)},o(l){C(t,l),e=!1},d(l){t&&t.d(l)}}}function Ut(n){let e,s,t,l;const f=[Bt,Lt],a=[];function r(o,i){return o[0].length>0?0:1}return e=r(n),s=a[e]=f[e](n),{c(){s.c(),t=te()},l(o){s.l(o),t=te()},m(o,i){a[e].m(o,i),g(o,t,i),l=!0},p(o,i){let m=e;e=r(o),e===m?a[e].p(o,i):(Y(),C(a[m],1,1,()=>{a[m]=null}),Z(),s=a[e],s?s.p(o,i):(s=a[e]=f[e](o),s.c()),E(s,1),s.m(t.parentNode,t))},i(o){l||(E(s),l=!0)},o(o){C(s),l=!1},d(o){a[e].d(o),o&&u(t)}}}function qt(n){let e,s,t;function l(a){n[9](a)}let f={slot:"headers",selectable:!0,checkboxLabel:n[0].length>0?null:n[2],indeterminate:n[4],$$slots:{default:[Ut]},$$scope:{ctx:n}};return n[1]!==void 0&&(f.selected=n[1]),e=new ct({props:f}),De.push(()=>He(e,"selected",l)),e.$on("change",n[5]),{c(){R(e.$$.fragment)},l(a){M(e.$$.fragment,a)},m(a,r){O(e,a,r),t=!0},p(a,r){const o={};r&5&&(o.checkboxLabel=a[0].length>0?null:a[2]),r&16&&(o.indeterminate=a[4]),r&1025&&(o.$$scope={dirty:r,ctx:a}),!s&&r&2&&(s=!0,o.selected=a[1],Ae(()=>s=!1)),e.$set(o)},i(a){t||(E(e.$$.fragment,a),t=!0)},o(a){C(e.$$.fragment,a),t=!1},d(a){Q(e,a)}}}function Rt(n){let e,s;const t=[{variant:"fancy"},{id:n[3]},{class:n[6].class},n[6]];let l={$$slots:{headers:[qt],default:[Ft]},$$scope:{ctx:n}};for(let f=0;f<t.length;f+=1)l=de(l,t[f]);return e=new ut({props:l}),{c(){R(e.$$.fragment)},l(f){M(e.$$.fragment,f)},m(f,a){O(e,f,a),s=!0},p(f,[a]){const r=a&72?ot(t,[t[0],a&8&&{id:f[3]},a&64&&{class:f[6].class},a&64&&rt(f[6])]):{};a&1047&&(r.$$scope={dirty:a,ctx:f}),e.$set(r)},i(f){s||(E(e.$$.fragment,f),s=!0)},o(f){C(e.$$.fragment,f),s=!1},d(f){Q(e,f)}}}function Ot(n,e,s){let t,{$$slots:l={},$$scope:f}=e,{items:a}=e,{checkboxLabel:r=null}=e,{allSelected:o=!1}=e,{selectedItems:i=[]}=e,{id:m=null}=e;const b=k=>{s(1,o=!o),s(0,i=k.detail.checked?a:[])};mt("selectable-table-context",{handleSelectRow:(k,w)=>{const{checked:S}=k.detail;S?(i.push(w),s(0,i)):s(0,i=i.filter(A=>A.id!==w.id)),s(1,o=i.length===a.length)}});function _(k){o=k,s(1,o)}return n.$$set=k=>{s(6,e=de(de({},e),Ce(k))),"items"in k&&s(7,a=k.items),"checkboxLabel"in k&&s(2,r=k.checkboxLabel),"allSelected"in k&&s(1,o=k.allSelected),"selectedItems"in k&&s(0,i=k.selectedItems),"id"in k&&s(3,m=k.id),"$$scope"in k&&s(10,f=k.$$scope)},n.$$.update=()=>{n.$$.dirty&129&&s(4,t=i.length!==0&&i.length!==a.length)},e=Ce(e),[i,o,r,m,t,b,e,a,l,_,f]}class Qt extends oe{constructor(e){super(),re(this,e,Ot,Rt,le,{items:7,checkboxLabel:2,allSelected:1,selectedItems:0,id:3})}}function jt(n){let e,s;return e=new ut({props:{class:"w-full md:table-fixed",updating:n[3],$$slots:{headers:[Kt],default:[Mt]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){O(e,t,l),s=!0},p(t,l){const f={};l&8&&(f.updating=t[3]),l&16384&&(f.$$scope={dirty:l,ctx:t}),e.$set(f)},i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){Q(e,t)}}}function zt(n){let e,s,t,l;function f(o){n[12](o)}function a(o){n[13](o)}let r={id:"workflows-table-with-bulk-actions",class:"w-full md:table-fixed",items:n[4],updating:n[3],$$slots:{"bulk-action-headers":[$t],"default-headers":[Xt],default:[Jt]},$$scope:{ctx:n}};return n[1]!==void 0&&(r.allSelected=n[1]),n[0]!==void 0&&(r.selectedItems=n[0]),e=new Qt({props:r}),De.push(()=>He(e,"allSelected",f)),De.push(()=>He(e,"selectedItems",a)),{c(){R(e.$$.fragment)},l(o){M(e.$$.fragment,o)},m(o,i){O(e,o,i),l=!0},p(o,i){const m={};i&16&&(m.items=o[4]),i&8&&(m.updating=o[3]),i&16481&&(m.$$scope={dirty:i,ctx:o}),!s&&i&2&&(s=!0,m.allSelected=o[1],Ae(()=>s=!1)),!t&&i&1&&(t=!0,m.selectedItems=o[0],Ae(()=>t=!1)),e.$set(m)},i(o){l||(E(e.$$.fragment,o),l=!0)},o(o){C(e.$$.fragment,o),l=!1},d(o){Q(e,o)}}}function Mt(n){let e;const s=n[11].default,t=fe(s,n,n[14],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,f){t&&t.m(l,f),e=!0},p(l,f){t&&t.p&&(!e||f&16384)&&ie(t,s,l,l[14],e?ce(s,l[14],f,null):ue(l[14]),null)},i(l){e||(E(t,l),e=!0)},o(l){C(t,l),e=!1},d(l){t&&t.d(l)}}}function Vt(n){let e,s,t,l,f,a,r,o,i,m,b,H,_,k,w,S,A;return{c(){e=y("th"),s=L("Status"),t=N(),l=y("th"),f=L("Workflow ID"),a=N(),r=y("th"),o=L("Type"),i=N(),m=y("th"),b=L("Start"),H=N(),_=y("th"),k=L("End"),w=N(),S=y("th"),A=L("Summary"),this.h()},l(c){e=W(c,"TH",{class:!0});var h=I(e);s=B(h,"Status"),h.forEach(u),t=P(c),l=W(c,"TH",{class:!0});var U=I(l);f=B(U,"Workflow ID"),U.forEach(u),a=P(c),r=W(c,"TH",{class:!0});var j=I(r);o=B(j,"Type"),j.forEach(u),i=P(c),m=W(c,"TH",{class:!0});var d=I(m);b=B(d,"Start"),d.forEach(u),H=P(c),_=W(c,"TH",{class:!0});var D=I(_);k=B(D,"End"),D.forEach(u),w=P(c),S=W(c,"TH",{class:!0,colspan:!0});var q=I(S);A=B(q,"Summary"),q.forEach(u),this.h()},h(){T(e,"class","hidden w-32 md:table-cell"),T(l,"class","hidden md:table-cell md:w-60 xl:w-auto"),T(r,"class","hidden md:table-cell md:w-60 xl:w-80"),T(m,"class","hidden xl:table-cell xl:w-60"),T(_,"class","hidden xl:table-cell xl:w-60"),T(S,"class","table-cell md:hidden"),T(S,"colspan","3")},m(c,h){g(c,e,h),v(e,s),g(c,t,h),g(c,l,h),v(l,f),g(c,a,h),g(c,r,h),v(r,o),g(c,i,h),g(c,m,h),v(m,b),g(c,H,h),g(c,_,h),v(_,k),g(c,w,h),g(c,S,h),v(S,A)},p:ee,d(c){c&&u(e),c&&u(t),c&&u(l),c&&u(a),c&&u(r),c&&u(i),c&&u(m),c&&u(H),c&&u(_),c&&u(w),c&&u(S)}}}function Kt(n){let e,s;return e=new ct({props:{slot:"headers",$$slots:{default:[Vt]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){O(e,t,l),s=!0},p(t,l){const f={};l&16384&&(f.$$scope={dirty:l,ctx:t}),e.$set(f)},i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){Q(e,t)}}}function Jt(n){let e;const s=n[11].default,t=fe(s,n,n[14],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,f){t&&t.m(l,f),e=!0},p(l,f){t&&t.p&&(!e||f&16384)&&ie(t,s,l,l[14],e?ce(s,l[14],f,null):ue(l[14]),null)},i(l){e||(E(t,l),e=!0)},o(l){C(t,l),e=!1},d(l){t&&t.d(l)}}}function Xt(n){let e,s,t,l,f,a,r,o,i,m,b,H,_,k,w,S,A;return{c(){e=y("th"),s=L("Status"),t=N(),l=y("th"),f=L("Workflow ID"),a=N(),r=y("th"),o=L("Type"),i=N(),m=y("th"),b=L("Start"),H=N(),_=y("th"),k=L("End"),w=N(),S=y("th"),A=L("Summary"),this.h()},l(c){e=W(c,"TH",{class:!0});var h=I(e);s=B(h,"Status"),h.forEach(u),t=P(c),l=W(c,"TH",{class:!0});var U=I(l);f=B(U,"Workflow ID"),U.forEach(u),a=P(c),r=W(c,"TH",{class:!0});var j=I(r);o=B(j,"Type"),j.forEach(u),i=P(c),m=W(c,"TH",{class:!0});var d=I(m);b=B(d,"Start"),d.forEach(u),H=P(c),_=W(c,"TH",{class:!0});var D=I(_);k=B(D,"End"),D.forEach(u),w=P(c),S=W(c,"TH",{class:!0,colspan:!0});var q=I(S);A=B(q,"Summary"),q.forEach(u),this.h()},h(){T(e,"class","hidden w-32 md:table-cell"),T(l,"class","hidden h-10 md:table-cell md:w-60 xl:w-auto"),T(r,"class","hidden md:table-cell md:w-60 xl:w-80"),T(m,"class","hidden xl:table-cell xl:w-60"),T(_,"class","hidden xl:table-cell xl:w-60"),T(S,"class","table-cell md:hidden"),T(S,"colspan","3")},m(c,h){g(c,e,h),v(e,s),g(c,t,h),g(c,l,h),v(l,f),g(c,a,h),g(c,r,h),v(r,o),g(c,i,h),g(c,m,h),v(m,b),g(c,H,h),g(c,_,h),v(_,k),g(c,w,h),g(c,S,h),v(S,A)},p:ee,d(c){c&&u(e),c&&u(t),c&&u(l),c&&u(a),c&&u(r),c&&u(i),c&&u(m),c&&u(H),c&&u(_),c&&u(w),c&&u(S)}}}function Gt(n){let e,s;return{c(){e=y("span"),s=L("No bulk actions available for selected workflows."),this.h()},l(t){e=W(t,"SPAN",{class:!0});var l=I(e);s=B(l,"No bulk actions available for selected workflows."),l.forEach(u),this.h()},h(){T(e,"class","whitespace-nowrap italic")},m(t,l){g(t,e,l),v(e,s)},p:ee,i:ee,o:ee,d(t){t&&u(e)}}}function Yt(n){let e,s;return e=new At({props:{dataCy:"bulk-terminate-button",disabled:n[6],$$slots:{default:[Zt]},$$scope:{ctx:n}}}),e.$on("click",n[7]),{c(){R(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){O(e,t,l),s=!0},p(t,l){const f={};l&64&&(f.disabled=t[6]),l&16384&&(f.$$scope={dirty:l,ctx:t}),e.$set(f)},i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){Q(e,t)}}}function Zt(n){let e;return{c(){e=L("Terminate")},l(s){e=B(s,"Terminate")},m(s,t){g(s,e,t)},d(s){s&&u(e)}}}function $t(n){let e,s,t=n[0].length+"",l,f,a,r,o,i,m,b,H,_,k,w,S,A,c;const h=[Yt,Gt],U=[];function j(d,D){return d[5]>0?0:1}return o=j(n),i=U[o]=h[o](n),{c(){e=y("th"),s=y("span"),l=L(t),f=L(" selected"),a=N(),r=y("th"),i.c(),m=N(),b=y("th"),H=N(),_=y("th"),k=N(),w=y("th"),S=N(),A=y("th"),this.h()},l(d){e=W(d,"TH",{class:!0});var D=I(e);s=W(D,"SPAN",{class:!0});var q=I(s);l=B(q,t),f=B(q," selected"),q.forEach(u),D.forEach(u),a=P(d),r=W(d,"TH",{class:!0});var V=I(r);i.l(V),V.forEach(u),m=P(d),b=W(d,"TH",{class:!0}),I(b).forEach(u),H=P(d),_=W(d,"TH",{class:!0}),I(_).forEach(u),k=P(d),w=W(d,"TH",{class:!0}),I(w).forEach(u),S=P(d),A=W(d,"TH",{class:!0,colspan:!0}),I(A).forEach(u),this.h()},h(){T(s,"class","font-semibold"),T(e,"class","inline-block w-32 md:table-cell"),T(r,"class","h-10 md:w-60 xl:w-auto"),T(b,"class","hidden md:table-cell md:w-60 xl:w-80"),T(_,"class","hidden xl:table-cell xl:w-60"),T(w,"class","hidden xl:table-cell xl:w-60"),T(A,"class","table-cell md:hidden"),T(A,"colspan","3")},m(d,D){g(d,e,D),v(e,s),v(s,l),v(s,f),g(d,a,D),g(d,r,D),U[o].m(r,null),g(d,m,D),g(d,b,D),g(d,H,D),g(d,_,D),g(d,k,D),g(d,w,D),g(d,S,D),g(d,A,D),c=!0},p(d,D){(!c||D&1)&&t!==(t=d[0].length+"")&&G(l,t);let q=o;o=j(d),o===q?U[o].p(d,D):(Y(),C(U[q],1,1,()=>{U[q]=null}),Z(),i=U[o],i?i.p(d,D):(i=U[o]=h[o](d),i.c()),E(i,1),i.m(r,null))},i(d){c||(E(i),c=!0)},o(d){C(i),c=!1},d(d){d&&u(e),d&&u(a),d&&u(r),U[o].d(),d&&u(m),d&&u(b),d&&u(H),d&&u(_),d&&u(k),d&&u(w),d&&u(S),d&&u(A)}}}function xt(n){let e,s,t,l;const f=[zt,jt],a=[];function r(o,i){return o[2]?0:1}return e=r(n),s=a[e]=f[e](n),{c(){s.c(),t=te()},l(o){s.l(o),t=te()},m(o,i){a[e].m(o,i),g(o,t,i),l=!0},p(o,[i]){let m=e;e=r(o),e===m?a[e].p(o,i):(Y(),C(a[m],1,1,()=>{a[m]=null}),Z(),s=a[e],s?s.p(o,i):(s=a[e]=f[e](o),s.c()),E(s,1),s.m(t.parentNode,t))},i(o){l||(E(s),l=!0)},o(o){C(s),l=!1},d(o){a[e].d(o),o&&u(t)}}}function el(n,e,s){let t,l,f;Ne(n,it,h=>s(9,l=h));let{$$slots:a={},$$scope:r}=e;const o=_t();let{bulkActionsEnabled:i=!1}=e,{updating:m=!1}=e,{visibleWorkflows:b=[]}=e,{selectedWorkflows:H=[]}=e,{terminableWorkflowCount:_=0}=e,{allSelected:k=!1}=e;const w=()=>{o("terminateWorkflows")};let S=ht();Ne(n,S,h=>s(10,f=h));function A(h){k=h,s(1,k)}function c(h){H=h,s(0,H)}return n.$$set=h=>{"bulkActionsEnabled"in h&&s(2,i=h.bulkActionsEnabled),"updating"in h&&s(3,m=h.updating),"visibleWorkflows"in h&&s(4,b=h.visibleWorkflows),"selectedWorkflows"in h&&s(0,H=h.selectedWorkflows),"terminableWorkflowCount"in h&&s(5,_=h.terminableWorkflowCount),"allSelected"in h&&s(1,k=h.allSelected),"$$scope"in h&&s(14,r=h.$$scope)},n.$$.update=()=>{n.$$.dirty&1536&&s(6,t=f.namespaceWriteDisabled(l.params.namespace))},[H,k,i,m,b,_,t,w,S,l,f,a,A,c,r]}class Pl extends oe{constructor(e){super(),re(this,e,el,xt,le,{bulkActionsEnabled:2,updating:3,visibleWorkflows:4,selectedWorkflows:0,terminableWorkflowCount:5,allSelected:1})}}const tl=n=>{const e=[],s=()=>{t&&(e.push(t),t="")};let t="",l=0;for(;l<n.length;){const f=n[l];if(Et(f)){t+=f,s(),l++;continue}if(Be(f)){const a=`${n[l]}${n[l+1]}`,r=`${n[l]}${n[l+1]}${n[l+2]}`;if(Be(r)){s(),t+=r,l+=3;continue}else if(Be(a)){s(),t+=a,l+=2;continue}else{s(),t+=f,l++;continue}}if(St(f)||yt(f)){s(),l++;continue}t+=f,l++}return s(),e},Fe=n=>e=>e.toLowerCase()===n.toLowerCase(),We=(n,e)=>n[e+2],ll=n=>{if(!!n){for(const e of gt)if(n[e])return{[e]:n[e]}}},sl=Fe("WorkflowType"),nl=Fe("WorkflowId"),al=Fe("StartTime"),ol=Fe("ExecutionStatus"),rl=n=>{const e=tl(n),s={workflowId:"",workflowType:"",executionStatus:null,timeRange:null};return e.forEach((t,l)=>{if(nl(t)&&(s.workflowId=We(e,l)),sl(t)&&(s.workflowType=We(e,l)),ol(t)){const f=We(e,l);Wt(f)&&(s.executionStatus=f)}if(al(t)){const f=We(e,l);try{const a=wt(f),r=ll(a);s.timeRange=pt(r)}catch(a){console.error("Error parsing StartTime from query",a)}}}),s};function xe(n){let e,s,t,l,f,a=n[1]&&et(n),r=n[2]&&lt(n);return{c(){e=y("div"),a&&a.c(),s=N(),r&&r.c(),this.h()},l(o){e=W(o,"DIV",{class:!0});var i=I(e);a&&a.l(i),s=P(i),r&&r.l(i),i.forEach(u),this.h()},h(){T(e,"class","copy-or-filter svelte-uzo6ow")},m(o,i){g(o,e,i),a&&a.m(e,null),v(e,s),r&&r.m(e,null),t=!0,l||(f=z(e,"click",Pe(Te(ee))),l=!0)},p(o,i){o[1]?a?(a.p(o,i),i&2&&E(a,1)):(a=et(o),a.c(),E(a,1),a.m(e,s)):a&&(Y(),C(a,1,1,()=>{a=null}),Z()),o[2]?r?(r.p(o,i),i&4&&E(r,1)):(r=lt(o),r.c(),E(r,1),r.m(e,null)):r&&(Y(),C(r,1,1,()=>{r=null}),Z())},i(o){t||(E(a),E(r),t=!0)},o(o){C(a),C(r),t=!1},d(o){o&&u(e),a&&a.d(),r&&r.d(),l=!1,f()}}}function et(n){let e,s=n[5],t,l,f,a=tt(n);return{c(){e=y("button"),a.c()},l(r){e=W(r,"BUTTON",{});var o=I(e);a.l(o),o.forEach(u)},m(r,o){g(r,e,o),a.m(e,null),t=!0,l||(f=z(e,"click",Pe(Te(function(){dt(n[4])&&n[4].apply(this,arguments)}))),l=!0)},p(r,o){n=r,o&32&&le(s,s=n[5])?(Y(),C(a,1,1,ee),Z(),a=tt(n),a.c(),E(a,1),a.m(e,null)):a.p(n,o)},i(r){t||(E(a),t=!0)},o(r){C(a),t=!1},d(r){r&&u(e),a.d(r),l=!1,f()}}}function tt(n){let e,s;return e=new qe({props:{name:"filter",class:"h-4 w-4 rounded-sm "+(n[5]?"bg-gray-900 text-white":"")}}),{c(){R(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){O(e,t,l),s=!0},p(t,l){const f={};l&32&&(f.class="h-4 w-4 rounded-sm "+(t[5]?"bg-gray-900 text-white":"")),e.$set(f)},i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){Q(e,t)}}}function lt(n){let e,s,t,l,f;return s=new qe({props:{name:n[6]?"checkmark":"copy",stroke:"#000"}}),{c(){e=y("button"),R(s.$$.fragment)},l(a){e=W(a,"BUTTON",{});var r=I(e);M(s.$$.fragment,r),r.forEach(u)},m(a,r){g(a,e,r),O(s,e,null),t=!0,l||(f=z(e,"click",Pe(Te(n[9]))),l=!0)},p(a,r){const o={};r&64&&(o.name=a[6]?"checkmark":"copy"),s.$set(o)},i(a){t||(E(s.$$.fragment,a),t=!0)},o(a){C(s.$$.fragment,a),t=!1},d(a){a&&u(e),Q(s),l=!1,f()}}}function fl(n){let e,s,t=n[0]&&xe(n);return{c(){t&&t.c(),e=te()},l(l){t&&t.l(l),e=te()},m(l,f){t&&t.m(l,f),g(l,e,f),s=!0},p(l,[f]){l[0]?t?(t.p(l,f),f&1&&E(t,1)):(t=xe(l),t.c(),E(t,1),t.m(e.parentNode,e)):t&&(Y(),C(t,1,1,()=>{t=null}),Z())},i(l){s||(E(t),s=!0)},o(l){C(t),s=!1},d(l){t&&t.d(l),l&&u(e)}}}function il(n,e,s){let t,{show:l=!1}=e,{filterable:f=!0}=e,{copyable:a=!0}=e,{content:r}=e,{onFilter:o=ee}=e,{filtered:i=!1}=e;const{copy:m,copied:b}=It(700);Ne(n,b,_=>s(6,t=_));const H=_=>m(_,r);return n.$$set=_=>{"show"in _&&s(0,l=_.show),"filterable"in _&&s(1,f=_.filterable),"copyable"in _&&s(2,a=_.copyable),"content"in _&&s(3,r=_.content),"onFilter"in _&&s(4,o=_.onFilter),"filtered"in _&&s(5,i=_.filtered)},[l,f,a,r,o,i,t,m,b,H]}class st extends oe{constructor(e){super(),re(this,e,il,fl,le,{show:0,filterable:1,copyable:2,content:3,onFilter:4,filtered:5})}}function ul(n){let e;const s=n[4].default,t=fe(s,n,n[7],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,f){t&&t.m(l,f),e=!0},p(l,f){t&&t.p&&(!e||f&128)&&ie(t,s,l,l[7],e?ce(s,l[7],f,null):ue(l[7]),null)},i(l){e||(E(t,l),e=!0)},o(l){C(t,l),e=!1},d(l){t&&t.d(l)}}}function cl(n){let e,s,t;const l=[{selectable:!0},n[2]];function f(r){n[5](r)}let a={$$slots:{default:[ul]},$$scope:{ctx:n}};for(let r=0;r<l.length;r+=1)a=de(a,l[r]);return n[0]!==void 0&&(a.selected=n[0]),e=new Ue({props:a}),De.push(()=>He(e,"selected",f)),e.$on("change",n[1]),e.$on("click",n[6]),{c(){R(e.$$.fragment)},l(r){M(e.$$.fragment,r)},m(r,o){O(e,r,o),t=!0},p(r,[o]){const i=o&4?ot(l,[l[0],rt(r[2])]):{};o&128&&(i.$$scope={dirty:o,ctx:r}),!s&&o&1&&(s=!0,i.selected=r[0],Ae(()=>s=!1)),e.$set(i)},i(r){t||(E(e.$$.fragment,r),t=!0)},o(r){C(e.$$.fragment,r),t=!1},d(r){Q(e,r)}}}function ml(n,e,s){let{$$slots:t={},$$scope:l}=e,{item:f}=e,{selected:a}=e;const{handleSelectRow:r}=bt("selectable-table-context"),o=b=>{r(b,f)};function i(b){a=b,s(0,a)}function m(b){Ie.call(this,n,b)}return n.$$set=b=>{s(2,e=de(de({},e),Ce(b))),"item"in b&&s(3,f=b.item),"selected"in b&&s(0,a=b.selected),"$$scope"in b&&s(7,l=b.$$scope)},e=Ce(e),[a,o,e,f,t,i,m,l]}class nt extends oe{constructor(e){super(),re(this,e,ml,cl,le,{item:3,selected:0})}}function _l(n){var Oe,Qe,je;let e,s,t,l,f,a=n[2].id+"",r,o,i,m,b,H=x(n[2].startTime,n[3])+"",_,k,w,S,A,c,h,U=n[2].name+"",j,d,D,q,V,se=x(n[2].endTime,n[3])+"",me,ve,ne,be,he=x(n[2].startTime,n[3])+"",Ee,Se,ae,ke,we=x(n[2].endTime,n[3])+"",ye,J,Le,Re;return s=new kt({props:{status:n[2].status,delay:Ge(n[2].startTime)}}),i=new st({props:{show:n[4],content:n[2].id,filterable:!1}}),D=new st({props:{show:n[4],content:n[2].name,onFilter:n[14],filtered:(je=(Qe=(Oe=n[6].url)==null?void 0:Oe.searchParams)==null?void 0:Qe.get("query"))==null?void 0:je.includes(n[2].name)}}),{c(){e=y("td"),R(s.$$.fragment),t=N(),l=y("td"),f=y("span"),r=L(a),o=N(),R(i.$$.fragment),m=N(),b=y("p"),_=L(H),k=N(),w=y("td"),S=y("h3"),A=L("Workflow Name:"),c=N(),h=y("span"),j=L(U),d=N(),R(D.$$.fragment),q=N(),V=y("p"),me=L(se),ve=N(),ne=y("td"),be=y("p"),Ee=L(he),Se=N(),ae=y("td"),ke=y("p"),ye=L(we),this.h()},l(p){e=W(p,"TD",{});var F=I(e);M(s.$$.fragment,F),F.forEach(u),t=P(p),l=W(p,"TD",{class:!0});var X=I(l);f=W(X,"SPAN",{class:!0});var _e=I(f);r=B(_e,a),_e.forEach(u),o=P(X),M(i.$$.fragment,X),m=P(X),b=W(X,"P",{class:!0});var $=I(b);_=B($,H),$.forEach(u),X.forEach(u),k=P(p),w=W(p,"TD",{class:!0});var K=I(w);S=W(K,"H3",{class:!0});var pe=I(S);A=B(pe,"Workflow Name:"),pe.forEach(u),c=P(K),h=W(K,"SPAN",{class:!0});var ge=I(h);j=B(ge,U),ge.forEach(u),d=P(K),M(D.$$.fragment,K),q=P(K),V=W(K,"P",{class:!0});var ze=I(V);me=B(ze,se),ze.forEach(u),K.forEach(u),ve=P(p),ne=W(p,"TD",{class:!0});var Me=I(ne);be=W(Me,"P",{});var Ve=I(be);Ee=B(Ve,he),Ve.forEach(u),Me.forEach(u),Se=P(p),ae=W(p,"TD",{class:!0});var Ke=I(ae);ke=W(Ke,"P",{});var Je=I(ke);ye=B(Je,we),Je.forEach(u),Ke.forEach(u),this.h()},h(){T(f,"class","table-link svelte-si1lto"),T(b,"class","inline-time-cell svelte-si1lto"),T(l,"class","relative truncate"),T(S,"class","md:hidden"),T(h,"class","table-link svelte-si1lto"),T(V,"class","inline-time-cell svelte-si1lto"),T(w,"class","relative truncate"),T(ne,"class","time-cell svelte-si1lto"),T(ae,"class","time-cell svelte-si1lto")},m(p,F){g(p,e,F),O(s,e,null),g(p,t,F),g(p,l,F),v(l,f),v(f,r),v(l,o),O(i,l,null),v(l,m),v(l,b),v(b,_),g(p,k,F),g(p,w,F),v(w,S),v(S,A),v(w,c),v(w,h),v(h,j),v(w,d),O(D,w,null),v(w,q),v(w,V),v(V,me),g(p,ve,F),g(p,ne,F),v(ne,be),v(be,Ee),g(p,Se,F),g(p,ae,F),v(ae,ke),v(ke,ye),J=!0,Le||(Re=[z(l,"mouseover",n[9]),z(l,"focus",n[10]),z(l,"mouseleave",n[11]),z(l,"blur",n[12]),z(h,"click",Pe(Te(n[13]))),z(w,"mouseover",n[15]),z(w,"focus",n[16]),z(w,"mouseleave",n[17]),z(w,"blur",n[18])],Le=!0)},p(p,F){var K,pe,ge;const X={};F&4&&(X.status=p[2].status),F&4&&(X.delay=Ge(p[2].startTime)),s.$set(X),(!J||F&4)&&a!==(a=p[2].id+"")&&G(r,a);const _e={};F&16&&(_e.show=p[4]),F&4&&(_e.content=p[2].id),i.$set(_e),(!J||F&12)&&H!==(H=x(p[2].startTime,p[3])+"")&&G(_,H),(!J||F&4)&&U!==(U=p[2].name+"")&&G(j,U);const $={};F&16&&($.show=p[4]),F&4&&($.content=p[2].name),F&4&&($.onFilter=p[14]),F&68&&($.filtered=(ge=(pe=(K=p[6].url)==null?void 0:K.searchParams)==null?void 0:pe.get("query"))==null?void 0:ge.includes(p[2].name)),D.$set($),(!J||F&12)&&se!==(se=x(p[2].endTime,p[3])+"")&&G(me,se),(!J||F&12)&&he!==(he=x(p[2].startTime,p[3])+"")&&G(Ee,he),(!J||F&12)&&we!==(we=x(p[2].endTime,p[3])+"")&&G(ye,we)},i(p){J||(E(s.$$.fragment,p),E(i.$$.fragment,p),E(D.$$.fragment,p),J=!0)},o(p){C(s.$$.fragment,p),C(i.$$.fragment,p),C(D.$$.fragment,p),J=!1},d(p){p&&u(e),Q(s),p&&u(t),p&&u(l),Q(i),p&&u(k),p&&u(w),Q(D),p&&u(ve),p&&u(ne),p&&u(Se),p&&u(ae),Le=!1,ft(Re)}}}function dl(n){let e,s,t;var l=n[0]?nt:Ue;function f(a){return{props:{item:a[2],selected:a[1],href:a[5],class:"workflow-summary-row",$$slots:{default:[_l]},$$scope:{ctx:a}}}}return l&&(e=Xe(l,f(n))),{c(){e&&R(e.$$.fragment),s=te()},l(a){e&&M(e.$$.fragment,a),s=te()},m(a,r){e&&O(e,a,r),g(a,s,r),t=!0},p(a,[r]){const o={};if(r&4&&(o.item=a[2]),r&2&&(o.selected=a[1]),r&32&&(o.href=a[5]),r&524380&&(o.$$scope={dirty:r,ctx:a}),l!==(l=a[0]?nt:Ue)){if(e){Y();const i=e;C(i.$$.fragment,1,0,()=>{Q(i,1)}),Z()}l?(e=Xe(l,f(a)),R(e.$$.fragment),E(e.$$.fragment,1),O(e,s.parentNode,s)):e=null}else l&&e.$set(o)},i(a){t||(e&&E(e.$$.fragment,a),t=!0)},o(a){e&&C(e.$$.fragment,a),t=!1},d(a){a&&u(s),e&&Q(e,a)}}}function bl(n,e,s){let t,l;Ne(n,it,d=>s(6,l=d));let{bulkActionsEnabled:f=!1}=e,{selected:a=!1}=e,{namespace:r}=e,{workflow:o}=e,{timeFormat:i}=e,m=!1;const b=d=>{const D=Ye({timeRange:"All"}),q=l.url.searchParams.get("query"),V=rl(q!=null?q:D),se=(V==null?void 0:V.workflowType)===d?"":d,me=Ye({...V,workflowType:se});vt({url:l.url,parameter:"query",value:me,allowEmpty:!0})},H=()=>s(4,m=!0),_=()=>s(4,m=!0),k=()=>s(4,m=!1),w=()=>s(4,m=!1),S=()=>b(o.name),A=()=>b(o.name),c=()=>s(4,m=!0),h=()=>s(4,m=!0),U=()=>s(4,m=!1),j=()=>s(4,m=!1);return n.$$set=d=>{"bulkActionsEnabled"in d&&s(0,f=d.bulkActionsEnabled),"selected"in d&&s(1,a=d.selected),"namespace"in d&&s(8,r=d.namespace),"workflow"in d&&s(2,o=d.workflow),"timeFormat"in d&&s(3,i=d.timeFormat)},n.$$.update=()=>{n.$$.dirty&260&&s(5,t=Tt({namespace:r,workflow:o.id,run:o.runId}))},[f,a,o,i,m,t,l,b,r,H,_,k,w,S,A,c,h,U,j]}class Fl extends oe{constructor(e){super(),re(this,e,bl,dl,le,{bulkActionsEnabled:0,selected:1,namespace:8,workflow:2,timeFormat:3})}}var Ll=hl;function hl(n,e,s,t){var l,f,a;return function(){if(a=this,f=Array.prototype.slice.call(arguments),l&&(s||t))return;if(!s)return i(),l=setTimeout(o,e),l;l=setTimeout(i,e),n.apply(a,f);function o(){i(),n.apply(a,f)}function i(){clearTimeout(l),l=null}}}function at(n){let e,s;return e=new qe({props:{name:"search",class:"ml-4 flex items-center text-gray-700"}}),{c(){R(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){O(e,t,l),s=!0},i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){Q(e,t)}}}function kl(n){let e;return{c(){e=L(n[2])},l(s){e=B(s,n[2])},m(s,t){g(s,e,t)},p(s,t){t&4&&G(e,s[2])},d(s){s&&u(e)}}}function wl(n){let e,s,t,l,f,a,r,o,i,m,b,H,_=n[4]&&at();return i=new Ct({props:{class:"m-2",type:"submit",$$slots:{default:[kl]},$$scope:{ctx:n}}}),{c(){e=y("form"),_&&_.c(),s=N(),t=y("label"),l=L(n[2]),f=N(),a=y("input"),r=N(),o=y("div"),R(i.$$.fragment),this.h()},l(k){e=W(k,"FORM",{class:!0});var w=I(e);_&&_.l(w),s=P(w),t=W(w,"LABEL",{for:!0,class:!0});var S=I(t);l=B(S,n[2]),S.forEach(u),f=P(w),a=W(w,"INPUT",{id:!0,type:!0,class:!0,name:!0,placeholder:!0,autocomplete:!0}),r=P(w),o=W(w,"DIV",{});var A=I(o);M(i.$$.fragment,A),A.forEach(u),w.forEach(u),this.h()},h(){T(t,"for",n[5]),T(t,"class","hidden"),T(a,"id",n[5]),T(a,"type","text"),T(a,"class","w-full rounded-l-lg px-4 focus:outline-none"),T(a,"name",n[3]),a.value=n[1],T(a,"placeholder",n[0]),T(a,"autocomplete","off"),T(e,"class","relative flex items-center rounded-lg border-2 transition-colors focus-within:border-blue-700")},m(k,w){g(k,e,w),_&&_.m(e,null),v(e,s),v(e,t),v(t,l),v(e,f),v(e,a),v(e,r),v(e,o),O(i,o,null),m=!0,b||(H=[z(a,"input",n[7]),z(e,"submit",Te(n[6]))],b=!0)},p(k,[w]){k[4]?_?w&16&&E(_,1):(_=at(),_.c(),E(_,1),_.m(e,s)):_&&(Y(),C(_,1,1,()=>{_=null}),Z()),(!m||w&4)&&G(l,k[2]),(!m||w&32)&&T(t,"for",k[5]),(!m||w&32)&&T(a,"id",k[5]),(!m||w&8)&&T(a,"name",k[3]),(!m||w&2&&a.value!==k[1])&&(a.value=k[1]),(!m||w&1)&&T(a,"placeholder",k[0]);const S={};w&260&&(S.$$scope={dirty:w,ctx:k}),i.$set(S)},i(k){m||(E(_),E(i.$$.fragment,k),m=!0)},o(k){C(_),C(i.$$.fragment,k),m=!1},d(k){k&&u(e),_&&_.d(),Q(i),b=!1,ft(H)}}}function pl(n,e,s){let{placeholder:t=""}=e,{value:l=""}=e,{label:f="Search"}=e,{name:a="query"}=e,{icon:r=!1}=e,{id:o=`${f.toLocaleUpperCase()}-input`}=e;function i(b){Ie.call(this,n,b)}function m(b){Ie.call(this,n,b)}return n.$$set=b=>{"placeholder"in b&&s(0,t=b.placeholder),"value"in b&&s(1,l=b.value),"label"in b&&s(2,f=b.label),"name"in b&&s(3,a=b.name),"icon"in b&&s(4,r=b.icon),"id"in b&&s(5,o=b.id)},[t,l,f,a,r,o,i,m]}class Bl extends oe{constructor(e){super(),re(this,e,pl,wl,le,{placeholder:0,value:1,label:2,name:3,icon:4,id:5})}}export{Bl as S,Pl as W,Fl as a,Ll as j,rl as t};
