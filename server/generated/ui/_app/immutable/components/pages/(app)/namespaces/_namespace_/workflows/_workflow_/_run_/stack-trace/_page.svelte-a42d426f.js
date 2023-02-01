import{S as B,i as O,s as U,k as S,l as E,m as R,h as _,b as d,g as z,t as k,d as A,f as $,J as P,w,x as v,y as T,z as y,V as Q,e as q,Y as j,q as h,r as b,K as g,u as F,B as J,a as D,c as I,n as N}from"../../../../../../../../../chunks/index-3630b6f8.js";import{p as K}from"../../../../../../../../../chunks/stores-4e1b824b.js";import{w as G}from"../../../../../../../../../chunks/workflow-run-1501c275.js";import{b as V}from"../../../../../../../../../chunks/query-service-fb156314.js";import{C as H}from"../../../../../../../../../chunks/code-block-515e41fb.js";import{B as M}from"../../../../../../../../../chunks/button-7d6db6c5.js";import{E as Y}from"../../../../../../../../../chunks/empty-state-088a7e43.js";import{L as X}from"../../../../../../../../../chunks/loading-19d04033.js";import{L as Z}from"../../../../../../../../../chunks/link-314c48be.js";import{a as x}from"../../../../../../../../../chunks/auth-user-53cdc41c.js";import{P as ee}from"../../../../../../../../../chunks/page-title-e9267ce5.js";function te(c){let t,r;return t=new Y({props:{title:"No Stack Traces Found",dataCy:"query-stack-trace-empty",$$slots:{default:[ae]},$$scope:{ctx:c}}}),{c(){w(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const n={};a&4105&&(n.$$scope={dirty:a,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){k(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}function re(c){let t,r,e,a={ctx:c,current:null,token:null,hasCatch:!0,pending:ce,then:le,catch:oe,value:10,error:11,blocks:[,,,]};return Q(r=c[2],a),{c(){t=q(),a.block.c()},l(n){t=q(),a.block.l(n)},m(n,o){d(n,t,o),a.block.m(n,a.anchor=o),a.mount=()=>t.parentNode,a.anchor=t,e=!0},p(n,o){c=n,a.ctx=c,o&4&&r!==(r=c[2])&&Q(r,a)||j(a,c,o)},i(n){e||($(a.block),e=!0)},o(n){for(let o=0;o<3;o+=1){const l=a.blocks[o];k(l)}e=!1},d(n){n&&_(t),a.block.d(n),a.token=null,a=null}}}function W(c){var p;let t,r,e,a,n=((p=c[0])==null?void 0:p.taskQueue)+"",o,l,s;return e=new Z({props:{href:"https://docs.temporal.io/workflows#stack-trace-query",$$slots:{default:[ne]},$$scope:{ctx:c}}}),{c(){t=S("p"),r=h("To enable "),w(e.$$.fragment),a=h(", run a Worker on the "),o=h(n),l=h(" Task Queue.")},l(i){t=E(i,"P",{});var f=R(t);r=b(f,"To enable "),v(e.$$.fragment,f),a=b(f,", run a Worker on the "),o=b(f,n),l=b(f," Task Queue."),f.forEach(_)},m(i,f){d(i,t,f),g(t,r),T(e,t,null),g(t,a),g(t,o),g(t,l),s=!0},p(i,f){var u;const m={};f&4096&&(m.$$scope={dirty:f,ctx:i}),e.$set(m),(!s||f&1)&&n!==(n=((u=i[0])==null?void 0:u.taskQueue)+"")&&F(o,n)},i(i){s||($(e.$$.fragment,i),s=!0)},o(i){k(e.$$.fragment,i),s=!1},d(i){i&&_(t),y(e)}}}function ne(c){let t;return{c(){t=h("stack traces")},l(r){t=b(r,"stack traces")},m(r,e){d(r,t,e)},d(r){r&&_(t)}}}function ae(c){var a,n,o;let t,r,e=((a=c[0])==null?void 0:a.isRunning)&&((o=(n=c[3])==null?void 0:n.pollers)==null?void 0:o.length)===0&&W(c);return{c(){e&&e.c(),t=q()},l(l){e&&e.l(l),t=q()},m(l,s){e&&e.m(l,s),d(l,t,s),r=!0},p(l,s){var p,i,f;(p=l[0])!=null&&p.isRunning&&((f=(i=l[3])==null?void 0:i.pollers)==null?void 0:f.length)===0?e?(e.p(l,s),s&9&&$(e,1)):(e=W(l),e.c(),$(e,1),e.m(t.parentNode,t)):e&&(z(),k(e,1,1,()=>{e=null}),A())},i(l){r||($(e),r=!0)},o(l){k(e),r=!1},d(l){e&&e.d(l),l&&_(t)}}}function oe(c){let t,r;return t=new Y({props:{title:"An Error Occured",content:"Please make sure you have at least one worker running."}}),{c(){w(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p:J,i(e){r||($(t.$$.fragment,e),r=!0)},o(e){k(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}function le(c){let t,r,e,a,n,o=c[1].toLocaleTimeString()+"",l,s,p,i,f;return r=new M({props:{icon:"retry",loading:ue,$$slots:{default:[se]},$$scope:{ctx:c}}}),r.$on("click",c[4]),i=new H({props:{content:c[10],language:"text",dataCy:"query-stack-trace"}}),{c(){t=S("div"),w(r.$$.fragment),e=D(),a=S("p"),n=h("Stack Trace at "),l=h(o),s=D(),p=S("div"),w(i.$$.fragment),this.h()},l(m){t=E(m,"DIV",{class:!0});var u=R(t);v(r.$$.fragment,u),e=I(u),a=E(u,"P",{});var C=R(a);n=b(C,"Stack Trace at "),l=b(C,o),C.forEach(_),u.forEach(_),s=I(m),p=E(m,"DIV",{class:!0});var L=R(p);v(i.$$.fragment,L),L.forEach(_),this.h()},h(){N(t,"class","flex items-center gap-4"),N(p,"class","flex items-start h-full")},m(m,u){d(m,t,u),T(r,t,null),g(t,e),g(t,a),g(a,n),g(a,l),d(m,s,u),d(m,p,u),T(i,p,null),f=!0},p(m,u){const C={};u&4096&&(C.$$scope={dirty:u,ctx:m}),r.$set(C),(!f||u&2)&&o!==(o=m[1].toLocaleTimeString()+"")&&F(l,o);const L={};u&4&&(L.content=m[10]),i.$set(L)},i(m){f||($(r.$$.fragment,m),$(i.$$.fragment,m),f=!0)},o(m){k(r.$$.fragment,m),k(i.$$.fragment,m),f=!1},d(m){m&&_(t),y(r),m&&_(s),m&&_(p),y(i)}}}function se(c){let t;return{c(){t=h("Refresh")},l(r){t=b(r,"Refresh")},m(r,e){d(r,t,e)},d(r){r&&_(t)}}}function ce(c){let t,r,e,a,n,o;return r=new X({}),{c(){t=S("div"),w(r.$$.fragment),e=D(),a=S("p"),n=h("(This will fail if you have no workers running.)"),this.h()},l(l){t=E(l,"DIV",{class:!0});var s=R(t);v(r.$$.fragment,s),e=I(s),a=E(s,"P",{});var p=R(a);n=b(p,"(This will fail if you have no workers running.)"),p.forEach(_),s.forEach(_),this.h()},h(){N(t,"class","text-center")},m(l,s){d(l,t,s),T(r,t,null),g(t,e),g(t,a),g(a,n),o=!0},p:J,i(l){o||($(r.$$.fragment,l),o=!0)},o(l){k(r.$$.fragment,l),o=!1},d(l){l&&_(t),y(r)}}}function ie(c){let t,r,e,a;const n=[re,te],o=[];function l(s,p){var i,f,m;return(i=s[0])!=null&&i.isRunning&&((m=(f=s[3])==null?void 0:f.pollers)==null?void 0:m.length)>0?0:1}return r=l(c),e=o[r]=n[r](c),{c(){t=S("section"),e.c()},l(s){t=E(s,"SECTION",{});var p=R(t);e.l(p),p.forEach(_)},m(s,p){d(s,t,p),o[r].m(t,null),a=!0},p(s,[p]){let i=r;r=l(s),r===i?o[r].p(s,p):(z(),k(o[i],1,1,()=>{o[i]=null}),A(),e=o[r],e?e.p(s,p):(e=o[r]=n[r](s),e.c()),$(e,1),e.m(t,null))},i(s){a||($(e),a=!0)},o(s){k(e),a=!1},d(s){s&&_(t),o[r].d()}}}let ue=!1;function fe(c,t,r){let e,a,n,o,l;P(c,x,u=>r(6,n=u)),P(c,K,u=>r(7,o=u)),P(c,G,u=>r(5,l=u));const{namespace:s}=o.params;let p=new Date;const i=()=>{var u;return V({workflow:e,namespace:s},(u=o.data)===null||u===void 0?void 0:u.settings,n==null?void 0:n.accessToken)};let f;const m=()=>{var u;r(2,f=V({workflow:e,namespace:s},(u=o.data)===null||u===void 0?void 0:u.settings,n==null?void 0:n.accessToken)),f.then(()=>{r(1,p=new Date)})};return c.$$.update=()=>{c.$$.dirty&32&&r(0,{workflow:e,workers:a}=l,e,(r(3,a),r(5,l))),c.$$.dirty&1&&e.isRunning&&r(2,f=i())},[e,p,f,a,m,l]}class me extends B{constructor(t){super(),O(this,t,fe,ie,U,{})}}function pe(c){let t,r,e,a;return t=new ee({props:{title:`Stack Trace | ${c[1]}`,url:c[0].url.href}}),e=new me({}),{c(){w(t.$$.fragment),r=D(),w(e.$$.fragment)},l(n){v(t.$$.fragment,n),r=I(n),v(e.$$.fragment,n)},m(n,o){T(t,n,o),d(n,r,o),T(e,n,o),a=!0},p(n,[o]){const l={};o&1&&(l.url=n[0].url.href),t.$set(l)},i(n){a||($(t.$$.fragment,n),$(e.$$.fragment,n),a=!0)},o(n){k(t.$$.fragment,n),k(e.$$.fragment,n),a=!1},d(n){y(t,n),n&&_(r),y(e,n)}}}function _e(c,t,r){let e;P(c,K,n=>r(0,e=n));const a=e.params.workflow;return[e,a]}class Ee extends B{constructor(t){super(),O(this,t,_e,pe,U,{})}}export{Ee as default};