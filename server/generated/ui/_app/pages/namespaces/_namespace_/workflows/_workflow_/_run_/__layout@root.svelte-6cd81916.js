var je=Object.defineProperty;var Ae=Object.getOwnPropertySymbols;var Le=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable;var De=(r,e,t)=>e in r?je(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,me=(r,e)=>{for(var t in e||(e={}))Le.call(e,t)&&De(r,t,e[t]);if(Ae)for(var t of Ae(e))qe.call(e,t)&&De(r,t,e[t]);return r};import{S as ae,i as re,s as oe,e as w,k as P,w as N,c as g,a as k,d as i,m as Q,x as W,b as d,g as D,M as u,y as F,N as Ce,J as _e,K as pe,L as de,q as h,o as v,B as C,l as ce,n as He,p as Me,P as Be,I as he,t as j,h as L,E as se,j as ie,af as Pe,O as ke,X as Qe,f as Ue}from"../../../../../../chunks/index-e3f4fa3b.js";import{r as we,a as ge,h as Je}from"../../../../../../chunks/route-for-api-ed44df29.js";import{W as Ke,f as Ye}from"../../../../../../chunks/workflow-status-54f4d43b.js";import{F as Oe,f as Xe,m as ze,n as Ge}from"../../../../../../chunks/index.es-3f26c051.js";import{e as Se,f as Ze,g as xe,h as et,i as tt}from"../../../../../../chunks/route-for-46a9c4b7.js";import{n as nt}from"../../../../../../chunks/notifications-736aa513.js";import{B as ue}from"../../../../../../chunks/button-142c5c64.js";import{p as Re}from"../../../../../../chunks/stores-1c428733.js";import{f as st}from"../../../../../../chunks/events-service-254165f9.js";import{e as at}from"../../../../../../chunks/event-view-type-f41db6ca.js";import"../../../../../../chunks/index-d28ebc24.js";import"../../../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../../../chunks/simplify-attributes-6710d3ed.js";import"../../../../../../chunks/format-date-4b1bc9ef.js";import"../../../../../../chunks/index-a440048f.js";import"../../../../../../chunks/data-converter-config-888a4b59.js";import"../../../../../../chunks/persist-store-789d3dc3.js";import"../../../../../../chunks/atob-5f9d7101.js";import"../../../../../../chunks/index-a8ee0a5c.js";import"../../../../../../chunks/get-event-categorization-b2bce139.js";async function rt(r,e=fetch){const t=await we(ge("task-queue",r),{request:e,params:{taskQueueType:"1"}}),n=await we(ge("task-queue",r),{request:e,params:{taskQueueType:"2"}});n.pollers.forEach(a=>{a.taskQueueTypes=["ACTIVITY"]}),t.pollers.forEach(a=>{a.taskQueueTypes=["WORKFLOW"]});const s=a=>(o,f)=>{const l=o[f.identity]||{lastAccessTime:void 0,taskQueueTypes:[]};return o[f.identity]={lastAccessTime:!l.lastAccessTime||l.lastAccessTime<f.lastAccessTime?f.lastAccessTime:l.lastAccessTime,taskQueueTypes:l.taskQueueTypes.concat([a])},o};return n.pollers.filter(a=>t.pollers.some(o=>{if(a.identity===o.identity)return a.taskQueueTypes=[...o.taskQueueTypes,...a.taskQueueTypes],a})),n.pollers.reduce(s("ACTIVITY"),t.pollers.reduce(s("WORKFLOW"),{})),{pollers:n.pollers,taskQueueStatus:n.taskQueueStatus}}async function ot({workflow:r,namespace:e,reason:t}){return await we(ge("workflow.terminate",{namespace:e,workflowId:r.id,runId:r.runId}),{options:{method:"POST",body:JSON.stringify({reason:t})},shouldRetry:!1})}const lt=r=>({}),Ve=r=>({}),ft=r=>({}),Ne=r=>({});function We(r){let e,t,n,s,a,o,f,l,_,E,S,p,$,q,b,V,z,B;o=new Oe({props:{icon:Xe}});const G=r[4].title,y=he(G,r,r[8],Ne),I=y||it(),Z=r[4].content,O=he(Z,r,r[8],Ve),H=O||ct();return $=new ue({props:{secondary:!0,$$slots:{default:[ut]},$$scope:{ctx:r}}}),$.$on("click",r[6]),b=new ue({props:{destroy:!0,disabled:r[2],$$slots:{default:[mt]},$$scope:{ctx:r}}}),b.$on("click",r[7]),{c(){e=w("div"),t=w("div"),n=P(),s=w("div"),a=w("div"),N(o.$$.fragment),f=P(),l=w("div"),I&&I.c(),_=P(),E=w("div"),H&&H.c(),S=P(),p=w("div"),N($.$$.fragment),q=P(),N(b.$$.fragment),this.h()},l(c){e=g(c,"DIV",{class:!0});var T=k(e);t=g(T,"DIV",{class:!0}),k(t).forEach(i),n=Q(T),s=g(T,"DIV",{class:!0});var A=k(s);a=g(A,"DIV",{class:!0});var U=k(a);W(o.$$.fragment,U),U.forEach(i),f=Q(A),l=g(A,"DIV",{class:!0});var J=k(l);I&&I.l(J),J.forEach(i),_=Q(A),E=g(A,"DIV",{class:!0});var K=k(E);H&&H.l(K),K.forEach(i),S=Q(A),p=g(A,"DIV",{class:!0});var x=k(p);W($.$$.fragment,x),q=Q(x),W(b.$$.fragment,x),x.forEach(i),A.forEach(i),T.forEach(i),this.h()},h(){d(t,"class","overlay svelte-p12tlm"),d(a,"class","float-right cursor-pointer p-6"),d(l,"class","title svelte-p12tlm"),d(E,"class","content svelte-p12tlm"),d(p,"class","flex justify-end items-center p-6 space-x-2"),d(s,"class","body svelte-p12tlm"),d(e,"class","modal svelte-p12tlm")},m(c,T){D(c,e,T),u(e,t),u(e,n),u(e,s),u(s,a),F(o,a,null),u(s,f),u(s,l),I&&I.m(l,null),u(s,_),u(s,E),H&&H.m(E,null),u(s,S),u(s,p),F($,p,null),u(p,q),F(b,p,null),V=!0,z||(B=Ce(a,"click",r[5]),z=!0)},p(c,T){y&&y.p&&(!V||T&256)&&_e(y,G,c,c[8],V?de(G,c[8],T,ft):pe(c[8]),Ne),O&&O.p&&(!V||T&256)&&_e(O,Z,c,c[8],V?de(Z,c[8],T,lt):pe(c[8]),Ve);const A={};T&256&&(A.$$scope={dirty:T,ctx:c}),$.$set(A);const U={};T&4&&(U.disabled=c[2]),T&258&&(U.$$scope={dirty:T,ctx:c}),b.$set(U)},i(c){V||(h(o.$$.fragment,c),h(I,c),h(H,c),h($.$$.fragment,c),h(b.$$.fragment,c),V=!0)},o(c){v(o.$$.fragment,c),v(I,c),v(H,c),v($.$$.fragment,c),v(b.$$.fragment,c),V=!1},d(c){c&&i(e),C(o),I&&I.d(c),H&&H.d(c),C($),C(b),z=!1,B()}}}function it(r){let e,t;return{c(){e=w("h3"),t=j("Title")},l(n){e=g(n,"H3",{});var s=k(e);t=L(s,"Title"),s.forEach(i)},m(n,s){D(n,e,s),u(e,t)},p:se,d(n){n&&i(e)}}}function ct(r){let e,t;return{c(){e=w("span"),t=j("Content")},l(n){e=g(n,"SPAN",{});var s=k(e);t=L(s,"Content"),s.forEach(i)},m(n,s){D(n,e,s),u(e,t)},p:se,d(n){n&&i(e)}}}function ut(r){let e;return{c(){e=j("Cancel")},l(t){e=L(t,"Cancel")},m(t,n){D(t,e,n)},d(t){t&&i(e)}}}function mt(r){let e;return{c(){e=j(r[1])},l(t){e=L(t,r[1])},m(t,n){D(t,e,n)},p(t,n){n&2&&ie(e,t[1])},d(t){t&&i(e)}}}function _t(r){let e,t,n=r[0]&&We(r);return{c(){n&&n.c(),e=ce()},l(s){n&&n.l(s),e=ce()},m(s,a){n&&n.m(s,a),D(s,e,a),t=!0},p(s,[a]){s[0]?n?(n.p(s,a),a&1&&h(n,1)):(n=We(s),n.c(),h(n,1),n.m(e.parentNode,e)):n&&(He(),v(n,1,1,()=>{n=null}),Me())},i(s){t||(h(n),t=!0)},o(s){v(n),t=!1},d(s){n&&n.d(s),s&&i(e)}}}function pt(r,e,t){let{$$slots:n={},$$scope:s}=e,{open:a=!1}=e,{confirmText:o="Confirm"}=e,{confirmDisabled:f=!1}=e;const l=Be(),_=()=>l("cancelModal",{}),E=()=>l("cancelModal",{}),S=()=>l("confirmModal",{});return r.$$set=p=>{"open"in p&&t(0,a=p.open),"confirmText"in p&&t(1,o=p.confirmText),"confirmDisabled"in p&&t(2,f=p.confirmDisabled),"$$scope"in p&&t(8,s=p.$$scope)},[a,o,f,l,n,_,E,S,s]}class dt extends ae{constructor(e){super(),re(this,e,pt,_t,oe,{open:0,confirmText:1,confirmDisabled:2})}}function Fe(r){let e,t,n,s;return e=new ue({props:{destroy:!0,$$slots:{default:[ht]},$$scope:{ctx:r}}}),e.$on("click",r[3]),n=new dt({props:{open:r[2],confirmText:"Terminate",$$slots:{content:[gt],title:[wt]},$$scope:{ctx:r}}}),n.$on("cancelModal",r[4]),n.$on("confirmModal",r[6]),{c(){N(e.$$.fragment),t=P(),N(n.$$.fragment)},l(a){W(e.$$.fragment,a),t=Q(a),W(n.$$.fragment,a)},m(a,o){F(e,a,o),D(a,t,o),F(n,a,o),s=!0},p(a,o){const f={};o&1024&&(f.$$scope={dirty:o,ctx:a}),e.$set(f);const l={};o&4&&(l.open=a[2]),o&1026&&(l.$$scope={dirty:o,ctx:a}),n.$set(l)},i(a){s||(h(e.$$.fragment,a),h(n.$$.fragment,a),s=!0)},o(a){v(e.$$.fragment,a),v(n.$$.fragment,a),s=!1},d(a){C(e,a),a&&i(t),C(n,a)}}}function ht(r){let e;return{c(){e=j("Terminate")},l(t){e=L(t,"Terminate")},m(t,n){D(t,e,n)},d(t){t&&i(e)}}}function wt(r){let e,t;return{c(){e=w("h3"),t=j("Terminate Workflow"),this.h()},l(n){e=g(n,"H3",{slot:!0});var s=k(e);t=L(s,"Terminate Workflow"),s.forEach(i),this.h()},h(){d(e,"slot","title")},m(n,s){D(n,e,s),u(e,t)},p:se,d(n){n&&i(e)}}}function gt(r){let e,t,n,s,a,o,f;return{c(){e=w("div"),t=w("p"),n=j(`Are you sure you want to terminate this workflow? This action cannot be
        undone.`),s=P(),a=w("input"),this.h()},l(l){e=g(l,"DIV",{slot:!0});var _=k(e);t=g(_,"P",{});var E=k(t);n=L(E,`Are you sure you want to terminate this workflow? This action cannot be
        undone.`),E.forEach(i),s=Q(_),a=g(_,"INPUT",{class:!0,placeholder:!0}),_.forEach(i),this.h()},h(){d(a,"class","block w-full border border-gray-200 rounded-md p-2 mt-4"),d(a,"placeholder","Enter a reason"),d(e,"slot","content")},m(l,_){D(l,e,_),u(e,t),u(t,n),u(e,s),u(e,a),Pe(a,r[1]),o||(f=Ce(a,"input",r[8]),o=!0)},p(l,_){_&2&&a.value!==l[1]&&Pe(a,l[1])},d(l){l&&i(e),o=!1,f()}}}function kt(r){let e=r[5](r[0]),t,n,s=e&&Fe(r);return{c(){s&&s.c(),t=ce()},l(a){s&&s.l(a),t=ce()},m(a,o){s&&s.m(a,o),D(a,t,o),n=!0},p(a,[o]){o&1&&(e=a[5](a[0])),e?s?(s.p(a,o),o&1&&h(s,1)):(s=Fe(a),s.c(),h(s,1),s.m(t.parentNode,t)):s&&(He(),v(s,1,1,()=>{s=null}),Me())},i(a){n||(h(s),n=!0)},o(a){v(s),n=!1},d(a){s&&s.d(a),a&&i(t)}}}function $t(r,e,t){let{workflow:n}=e,{namespace:s}=e,a="",o=!1;const f=()=>t(2,o=!0),l=()=>t(2,o=!1),_=$=>String($.status)==="Running",E=()=>{t(2,o=!1),t(1,a=""),nt.add("success","Workflow Terminated"),window.location.reload()},S=()=>{ot({workflow:n,namespace:s,reason:a}).then(E).catch(Je)};function p(){a=this.value,t(1,a)}return r.$$set=$=>{"workflow"in $&&t(0,n=$.workflow),"namespace"in $&&t(7,s=$.namespace)},[n,a,o,f,l,_,S,s,p]}class vt extends ae{constructor(e){super(),re(this,e,$t,kt,oe,{workflow:0,namespace:7})}}function bt(r){let e,t;return{c(){e=w("span"),t=j("Download"),this.h()},l(n){e=g(n,"SPAN",{class:!0});var s=k(e);t=L(s,"Download"),s.forEach(i),this.h()},h(){d(e,"class","hidden md:inline")},m(n,s){D(n,e,s),u(e,t)},p:se,d(n){n&&i(e)}}}function Tt(r){let e,t;return e=new ue({props:{secondary:!0,icon:ze,$$slots:{default:[bt]},$$scope:{ctx:r}}}),e.$on("click",r[0]),{c(){N(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,s){F(e,n,s),t=!0},p(n,[s]){const a={};s&32&&(a.$$scope={dirty:s,ctx:n}),e.$set(a)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){v(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Et(r,e,t){let n;ke(r,Re,l=>t(1,n=l));const{workflow:s,run:a,namespace:o}=n.params;return[async()=>{const l=await st({namespace:o,workflowId:s,runId:a}),_=JSON.stringify({events:l},null,2);E(_,`${a}/events.json`,"text/plain");function E(S,p,$){const q=document.createElement("a"),b=new Blob([S],{type:$});q.href=URL.createObjectURL(b),q.download=p,q.click()}}]}class yt extends ae{constructor(e){super(),re(this,e,Et,Tt,oe,{})}}function It(r){let e;return{c(){e=j(r[1])},l(t){e=L(t,r[1])},m(t,n){D(t,e,n)},p(t,n){n&2&&ie(e,t[1])},d(t){t&&i(e)}}}function At(r){let e,t,n,s;return{c(){e=j(r[1]),t=P(),n=w("span"),s=j(r[2]),this.h()},l(a){e=L(a,r[1]),t=Q(a),n=g(a,"SPAN",{class:!0});var o=k(n);s=L(o,r[2]),o.forEach(i),this.h()},h(){d(n,"class","px-2 text-blue-700 bg-blue-100 rounded-sm")},m(a,o){D(a,e,o),D(a,t,o),D(a,n,o),u(n,s)},p(a,o){o&2&&ie(e,a[1]),o&4&&ie(s,a[2])},d(a){a&&i(e),a&&i(t),a&&i(n)}}}function Dt(r){let e;function t(a,o){return a[2]||a[2]===0?At:It}let n=t(r),s=n(r);return{c(){e=w("a"),s.c(),this.h()},l(a){e=g(a,"A",{class:!0,href:!0});var o=k(e);s.l(o),o.forEach(i),this.h()},h(){d(e,"class","block text-sm md:text-base border-b-2 whitespace-nowrap svelte-sf1jtj"),d(e,"href",r[0]),Qe(e,"active",r[3])},m(a,o){D(a,e,o),s.m(e,null)},p(a,[o]){n===(n=t(a))&&s?s.p(a,o):(s.d(1),s=n(a),s&&(s.c(),s.m(e,null))),o&1&&d(e,"href",a[0]),o&8&&Qe(e,"active",a[3])},i:se,o:se,d(a){a&&i(e),s.d()}}}function Pt(r,e,t){let n,s;ke(r,Re,l=>t(4,s=l));let{href:a}=e,{label:o}=e,{amount:f=null}=e;return r.$$set=l=>{"href"in l&&t(0,a=l.href),"label"in l&&t(1,o=l.label),"amount"in l&&t(2,f=l.amount)},r.$$.update=()=>{r.$$.dirty&17&&t(3,n=s.url.pathname.includes(a))},[a,o,f,n,s]}class fe extends ae{constructor(e){super(),re(this,e,Pt,Dt,oe,{href:0,label:1,amount:2})}}function Qt(r){var x,$e,ve,be,Te;let e,t,n,s,a,o,f,l,_,E,S,p=r[1].id+"",$,q,b,V,z,B,G,y,I,Z,O,H,c,T,A,U,J,K;return s=new Oe({props:{icon:Ge}}),_=new Ke({props:{status:(x=r[1])==null?void 0:x.status}}),V=new yt({}),B=new vt({props:{workflow:r[1],namespace:r[0]}}),I=new fe({props:{label:"History",href:Se(me({view:r[3]},r[4])),amount:($e=r[1])==null?void 0:$e.historyEvents}}),O=new fe({props:{label:"Workers",href:Ze(r[4]),amount:(be=(ve=r[2])==null?void 0:ve.pollers)==null?void 0:be.length}}),c=new fe({props:{label:"Pending Activities",href:xe(r[4]),amount:(Te=r[1].pendingActivities)==null?void 0:Te.length}}),A=new fe({props:{label:"Stack Trace",href:et(r[4])}}),J=new fe({props:{label:"Queries",href:tt(r[4])}}),{c(){e=w("header"),t=w("main"),n=w("a"),N(s.$$.fragment),o=P(),f=w("div"),l=w("h1"),N(_.$$.fragment),E=P(),S=w("span"),$=j(p),q=P(),b=w("div"),N(V.$$.fragment),z=P(),N(B.$$.fragment),G=P(),y=w("nav"),N(I.$$.fragment),Z=P(),N(O.$$.fragment),H=P(),N(c.$$.fragment),T=P(),N(A.$$.fragment),U=P(),N(J.$$.fragment),this.h()},l(m){e=g(m,"HEADER",{class:!0});var M=k(e);t=g(M,"MAIN",{class:!0});var Y=k(t);n=g(Y,"A",{href:!0,class:!0,style:!0});var ne=k(n);W(s.$$.fragment,ne),ne.forEach(i),o=Q(Y),f=g(Y,"DIV",{class:!0});var X=k(f);l=g(X,"H1",{class:!0});var ee=k(l);W(_.$$.fragment,ee),E=Q(ee),S=g(ee,"SPAN",{class:!0});var le=k(S);$=L(le,p),le.forEach(i),ee.forEach(i),q=Q(X),b=g(X,"DIV",{class:!0});var te=k(b);W(V.$$.fragment,te),z=Q(te),W(B.$$.fragment,te),te.forEach(i),X.forEach(i),G=Q(Y),y=g(Y,"NAV",{class:!0});var R=k(y);W(I.$$.fragment,R),Z=Q(R),W(O.$$.fragment,R),H=Q(R),W(c.$$.fragment,R),T=Q(R),W(A.$$.fragment,R),U=Q(R),W(J.$$.fragment,R),R.forEach(i),Y.forEach(i),M.forEach(i),this.h()},h(){d(n,"href",a="/namespaces/"+r[0]+"/workflows"),d(n,"class","absolute top-2 back-to-workflows"),Ue(n,"left","-1.5rem"),d(S,"class","font-medium select-all"),d(l,"class","text-2xl flex relative items-center gap-4"),d(b,"class","ml-8 flex justify-end items-center gap-4"),d(f,"class","flex justify-between items-center mb-8"),d(y,"class","flex gap-6 flex-wrap"),d(t,"class","flex flex-col gap-1 relative"),d(e,"class","flex flex-col gap-4")},m(m,M){D(m,e,M),u(e,t),u(t,n),F(s,n,null),u(t,o),u(t,f),u(f,l),F(_,l,null),u(l,E),u(l,S),u(S,$),u(f,q),u(f,b),F(V,b,null),u(b,z),F(B,b,null),u(t,G),u(t,y),F(I,y,null),u(y,Z),F(O,y,null),u(y,H),F(c,y,null),u(y,T),F(A,y,null),u(y,U),F(J,y,null),K=!0},p(m,[M]){var te,R,Ee,ye,Ie;(!K||M&1&&a!==(a="/namespaces/"+m[0]+"/workflows"))&&d(n,"href",a);const Y={};M&2&&(Y.status=(te=m[1])==null?void 0:te.status),_.$set(Y),(!K||M&2)&&p!==(p=m[1].id+"")&&ie($,p);const ne={};M&2&&(ne.workflow=m[1]),M&1&&(ne.namespace=m[0]),B.$set(ne);const X={};M&8&&(X.href=Se(me({view:m[3]},m[4]))),M&2&&(X.amount=(R=m[1])==null?void 0:R.historyEvents),I.$set(X);const ee={};M&4&&(ee.amount=(ye=(Ee=m[2])==null?void 0:Ee.pollers)==null?void 0:ye.length),O.$set(ee);const le={};M&2&&(le.amount=(Ie=m[1].pendingActivities)==null?void 0:Ie.length),c.$set(le)},i(m){K||(h(s.$$.fragment,m),h(_.$$.fragment,m),h(V.$$.fragment,m),h(B.$$.fragment,m),h(I.$$.fragment,m),h(O.$$.fragment,m),h(c.$$.fragment,m),h(A.$$.fragment,m),h(J.$$.fragment,m),K=!0)},o(m){v(s.$$.fragment,m),v(_.$$.fragment,m),v(V.$$.fragment,m),v(B.$$.fragment,m),v(I.$$.fragment,m),v(O.$$.fragment,m),v(c.$$.fragment,m),v(A.$$.fragment,m),v(J.$$.fragment,m),K=!1},d(m){m&&i(e),C(s),C(_),C(V),C(B),C(I),C(O),C(c),C(A),C(J)}}}function St(r,e,t){let n;ke(r,at,l=>t(3,n=l));let{namespace:s}=e,{workflow:a}=e,{workers:o}=e;const f={namespace:s,workflow:a.id,run:a.runId};return r.$$set=l=>{"namespace"in l&&t(0,s=l.namespace),"workflow"in l&&t(1,a=l.workflow),"workers"in l&&t(2,o=l.workers)},[s,a,o,n,f]}class Vt extends ae{constructor(e){super(),re(this,e,St,Qt,oe,{namespace:0,workflow:1,workers:2})}}function Nt(r){let e,t,n,s;t=new Vt({props:{namespace:r[1],workflow:r[0],workers:r[2]}});const a=r[4].default,o=he(a,r,r[3],null);return{c(){e=w("main"),N(t.$$.fragment),n=P(),o&&o.c(),this.h()},l(f){e=g(f,"MAIN",{class:!0});var l=k(e);W(t.$$.fragment,l),n=Q(l),o&&o.l(l),l.forEach(i),this.h()},h(){d(e,"class","flex flex-col gap-6 h-full")},m(f,l){D(f,e,l),F(t,e,null),u(e,n),o&&o.m(e,null),s=!0},p(f,[l]){const _={};l&2&&(_.namespace=f[1]),l&1&&(_.workflow=f[0]),l&4&&(_.workers=f[2]),t.$set(_),o&&o.p&&(!s||l&8)&&_e(o,a,f,f[3],s?de(a,f[3],l,null):pe(f[3]),null)},i(f){s||(h(t.$$.fragment,f),h(o,f),s=!0)},o(f){v(t.$$.fragment,f),v(o,f),s=!1},d(f){f&&i(e),C(t),o&&o.d(f)}}}const nn=async function({params:r,fetch:e}){const{workflow:t,run:n,namespace:s}=r,a={namespace:s,workflowId:decodeURIComponent(t),runId:n},o=await Ye(a,e),{taskQueue:f}=o,l=await rt({queue:f,namespace:s});return{props:{workflow:o,namespace:s,workers:l},stuff:{workflow:o,workers:l}}};function Wt(r,e,t){let{$$slots:n={},$$scope:s}=e,{workflow:a}=e,{namespace:o}=e,{workers:f}=e;return r.$$set=l=>{"workflow"in l&&t(0,a=l.workflow),"namespace"in l&&t(1,o=l.namespace),"workers"in l&&t(2,f=l.workers),"$$scope"in l&&t(3,s=l.$$scope)},[a,o,f,s,n]}class sn extends ae{constructor(e){super(),re(this,e,Wt,Nt,oe,{workflow:0,namespace:1,workers:2})}}export{sn as default,nn as load};