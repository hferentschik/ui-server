import{S as A,i as B,s as N,N as V,e as W,c as S,a as E,d as p,b as P,a3 as L,g as w,O as z,P as G,Q as X,q as _,o as h,t as T,h as I,T as q,E as d,I as Y,J as Z,ap as D,w as $,k as M,l as v,x as k,m as R,y as b,K as x,aq as ee,B as y,n as O,p as Q,M as te}from"../../../../chunks/index-4f955b1f.js";import{b as re}from"../../../../chunks/workflow-status-fe93457a.js";import{W as ae,a as oe,b as ne}from"../../../../chunks/_workflow-filters-76cd10e1.js";import{E as se}from"../../../../chunks/empty-state-2dcd34e2.js";import{P as le}from"../../../../chunks/pagination-05247e47.js";import"../../../../chunks/route-for-api-e1a4b7e2.js";import"../../../../chunks/navigation-3f1ea447.js";import"../../../../chunks/singletons-d1fb5791.js";import"../../../../chunks/index-eae5a65e.js";import"../../../../chunks/notifications-2d1c3827.js";import"../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../chunks/route-for-d606e623.js";import"../../../../chunks/simplify-attributes-7a858880.js";import"../../../../chunks/format-date-0917cdb3.js";import"../../../../chunks/table-link-8c74cb5c.js";import"../../../../chunks/stores-8f54f2cb.js";import"../../../../chunks/select-7cfdb92d.js";import"../../../../chunks/index.es-3f7bba01.js";function ie(s){let e,r,t;const a=s[2].default,n=V(a,s,s[1],null);return{c(){e=W("div"),n&&n.c(),this.h()},l(o){e=S(o,"DIV",{class:!0});var i=E(e);n&&n.l(i),i.forEach(p),this.h()},h(){P(e,"class",r=L(`${s[0]}     
        rounded-sm
        text-center 
        inline-block
        px-1
        ml-1
        text-sm
        align-middle`)+" svelte-1agj3i6")},m(o,i){w(o,e,i),n&&n.m(e,null),t=!0},p(o,[i]){n&&n.p&&(!t||i&2)&&z(n,a,o,o[1],t?X(a,o[1],i,null):G(o[1]),null),(!t||i&1&&r!==(r=L(`${o[0]}     
        rounded-sm
        text-center 
        inline-block
        px-1
        ml-1
        text-sm
        align-middle`)+" svelte-1agj3i6"))&&P(e,"class",r)},i(o){t||(_(n,o),t=!0)},o(o){h(n,o),t=!1},d(o){o&&p(e),n&&n.d(o)}}}function ce(s,e,r){let{$$slots:t={},$$scope:a}=e,{type:n}=e;return s.$$set=o=>{"type"in o&&r(0,n=o.type),"$$scope"in o&&r(1,a=o.$$scope)},[n,a,t]}class fe extends A{constructor(e){super(),B(this,e,ce,ie,N,{type:0})}}function me(s){let e,r,t;return{c(){e=W("tr"),r=W("td"),t=T("Loading"),this.h()},l(a){e=S(a,"TR",{});var n=E(e);r=S(n,"TD",{colspan:!0,class:!0});var o=E(r);t=I(o,"Loading"),o.forEach(p),n.forEach(p),this.h()},h(){P(r,"colspan","5"),P(r,"class","m-auto p-12 text-center font-extralight text-2xl")},m(a,n){w(a,e,n),q(e,r),q(r,t)},p:d,i:d,o:d,d(a){a&&p(e)}}}class ue extends A{constructor(e){super(),B(this,e,null,me,N,{})}}function H(s){s[1]=s[6].workflows}function J(s,e,r){const t=s.slice();return t[8]=e[r],t}function _e(s){let e;return{c(){e=T("Beta")},l(r){e=I(r,"Beta")},m(r,t){w(r,e,t)},d(r){r&&p(e)}}}function pe(s){return{c:d,l:d,m:d,p:d,i:d,o:d,d}}function he(s){H(s);let e,r,t,a;const n=[ge,de],o=[];function i(l,f){return l[1].length?0:1}return e=i(s),r=o[e]=n[e](s),{c(){r.c(),t=v()},l(l){r.l(l),t=v()},m(l,f){o[e].m(l,f),w(l,t,f),a=!0},p(l,f){H(l);let g=e;e=i(l),e===g?o[e].p(l,f):(O(),h(o[g],1,1,()=>{o[g]=null}),Q(),r=o[e],r?r.p(l,f):(r=o[e]=n[e](l),r.c()),_(r,1),r.m(t.parentNode,t))},i(l){a||(_(r),a=!0)},o(l){h(r),a=!1},d(l){o[e].d(l),l&&p(t)}}}function de(s){let e,r;return e=new se({props:{title:"No Workflows Found",content:s[3]}}),{c(){$(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,a){b(e,t,a),r=!0},p:d,i(t){r||(_(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function ge(s){let e,r;return e=new le({props:{items:s[1],$$slots:{default:[$e,({visibleItems:t})=>({7:t}),({visibleItems:t})=>t?128:0]},$$scope:{ctx:s}}}),{c(){$(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,a){b(e,t,a),r=!0},p(t,a){const n={};a&2&&(n.items=t[1]),a&2181&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(_(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function K(s){let e,r;return e=new ne({props:{workflow:s[8],namespace:s[0],timeFormat:s[2]}}),{c(){$(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,a){b(e,t,a),r=!0},p(t,a){const n={};a&128&&(n.workflow=t[8]),a&1&&(n.namespace=t[0]),a&4&&(n.timeFormat=t[2]),e.$set(n)},i(t){r||(_(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function we(s){let e,r,t=s[7],a=[];for(let o=0;o<t.length;o+=1)a[o]=K(J(s,t,o));const n=o=>h(a[o],1,1,()=>{a[o]=null});return{c(){for(let o=0;o<a.length;o+=1)a[o].c();e=v()},l(o){for(let i=0;i<a.length;i+=1)a[i].l(o);e=v()},m(o,i){for(let l=0;l<a.length;l+=1)a[l].m(o,i);w(o,e,i),r=!0},p(o,i){if(i&133){t=o[7];let l;for(l=0;l<t.length;l+=1){const f=J(o,t,l);a[l]?(a[l].p(f,i),_(a[l],1)):(a[l]=K(f),a[l].c(),_(a[l],1),a[l].m(e.parentNode,e))}for(O(),l=t.length;l<a.length;l+=1)n(l);Q()}},i(o){if(!r){for(let i=0;i<t.length;i+=1)_(a[i]);r=!0}},o(o){a=a.filter(Boolean);for(let i=0;i<a.length;i+=1)h(a[i]);r=!1},d(o){te(a,o),o&&p(e)}}}function $e(s){let e,r;return e=new oe({props:{$$slots:{default:[we]},$$scope:{ctx:s}}}),{c(){$(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,a){b(e,t,a),r=!0},p(t,a){const n={};a&2181&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(_(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function ke(s){let e,r;return e=new ue({}),{c(){$(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,a){b(e,t,a),r=!0},p:d,i(t){r||(_(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function be(s){let e,r,t,a,n,o,i,l,f,g;t=new fe({props:{type:"beta",$$slots:{default:[_e]},$$scope:{ctx:s}}});function U(c){s[5](c)}let j={};s[2]!==void 0&&(j.timeFormat=s[2]),n=new ae({props:j}),Y.push(()=>Z(n,"timeFormat",U));let u={ctx:s,current:null,token:null,hasCatch:!1,pending:ke,then:he,catch:pe,value:6,blocks:[,,,]};return D(f=s[1],u),{c(){e=W("h2"),r=T("Workflows "),$(t.$$.fragment),a=M(),$(n.$$.fragment),i=M(),l=v(),u.block.c(),this.h()},l(c){e=S(c,"H2",{class:!0});var m=E(e);r=I(m,"Workflows "),k(t.$$.fragment,m),m.forEach(p),a=R(c),k(n.$$.fragment,c),i=R(c),l=v(),u.block.l(c),this.h()},h(){P(e,"class","text-2xl")},m(c,m){w(c,e,m),q(e,r),b(t,e,null),w(c,a,m),b(n,c,m),w(c,i,m),w(c,l,m),u.block.m(c,u.anchor=m),u.mount=()=>l.parentNode,u.anchor=l,g=!0},p(c,[m]){s=c;const F={};m&2048&&(F.$$scope={dirty:m,ctx:s}),t.$set(F);const C={};!o&&m&4&&(o=!0,C.timeFormat=s[2],x(()=>o=!1)),n.$set(C),u.ctx=s,m&2&&f!==(f=s[1])&&D(f,u)||ee(u,s,m)},i(c){g||(_(t.$$.fragment,c),_(n.$$.fragment,c),_(u.block),g=!0)},o(c){h(t.$$.fragment,c),h(n.$$.fragment,c);for(let m=0;m<3;m+=1){const F=u.blocks[m];h(F)}g=!1},d(c){c&&p(e),y(t),c&&p(a),y(n,c),c&&p(i),c&&p(l),u.block.d(c),u.token=null,u=null}}}const He=async function({params:s,url:e}){const r=e.searchParams.has("query");!e.searchParams.has("time-range")&&!r&&e.searchParams.set("time-range","24 hours");const{namespace:t}=s,a=e.searchParams.get("workflow-id"),n=e.searchParams.get("workflow-type"),o=e.searchParams.get("time-range"),i=e.searchParams.get("status"),l=e.searchParams.get("query"),g=await re(t,{workflowId:a,workflowType:n,timeRange:o,executionStatus:i,query:l},fetch);return{props:{namespace:t,workflows:g,isAdvancedSearch:r}}};function ye(s,e,r){let{namespace:t}=e,{workflows:a}=e,{isAdvancedSearch:n}=e,o="UTC";const i=n?"Please check your syntax and try again.":"If you have filters applied, try adjusting them.";function l(f){o=f,r(2,o)}return s.$$set=f=>{"namespace"in f&&r(0,t=f.namespace),"workflows"in f&&r(1,a=f.workflows),"isAdvancedSearch"in f&&r(4,n=f.isAdvancedSearch)},[t,a,o,i,n,l]}class Je extends A{constructor(e){super(),B(this,e,ye,be,N,{namespace:0,workflows:1,isAdvancedSearch:4})}}export{Je as default,He as load};