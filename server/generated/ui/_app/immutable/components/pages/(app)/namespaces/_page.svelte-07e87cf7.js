import{S as j,i as G,s as L,w as g,a as x,k as N,q as A,e as T,x as d,c as q,l as y,m as E,r as B,h as m,n as v,y as b,b as h,K as P,t as _,d as J,f as u,z as w,J as H,g as K,B as Y,_ as M,u as O}from"../../../../chunks/index-9c2f34db.js";import{o as S}from"../../../../chunks/route-for-9e2a964e.js";import{p as Q}from"../../../../chunks/stores-ae349ac7.js";import{n as R}from"../../../../chunks/namespaces-00b1314a.js";import{E as U}from"../../../../chunks/empty-state-84b6ab67.js";import{P as V}from"../../../../chunks/page-title-d37abd4e.js";import{P as W}from"../../../../chunks/pagination-f32c5382.js";import{T as X,a as Z}from"../../../../chunks/table-header-row-1c4e1950.js";import{T as ee}from"../../../../chunks/table-row-6e2edc98.js";function z(f,t,r){const e=f.slice();return e[3]=t[r],e}function te(f){let t,r;return t=new U({props:{title:"No Namespaces Found",content:"You do not have access to a Namespace. Contact your Administrator for assistance."}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){b(t,e,a),r=!0},p:Y,i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function ae(f){let t,r;return t=new W({props:{items:f[1],$$slots:{default:[le,({visibleItems:e})=>({2:e}),({visibleItems:e})=>e?4:0]},$$scope:{ctx:f}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){b(t,e,a),r=!0},p(e,a){const c={};a&2&&(c.items=e[1]),a&68&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function re(f){let t,r,e=f[3].namespaceInfo.name+"",a,c,n;return{c(){t=N("td"),r=N("a"),a=A(e),n=x(),this.h()},l(s){t=y(s,"TD",{});var o=E(t);r=y(o,"A",{href:!0,class:!0});var p=E(r);a=B(p,e),p.forEach(m),o.forEach(m),n=q(s),this.h()},h(){v(r,"href",c=S({namespace:f[3].namespaceInfo.name})),v(r,"class","hover:text-blue-700 hover:underline hover:decoration-blue-700")},m(s,o){h(s,t,o),P(t,r),P(r,a),h(s,n,o)},p(s,o){o&4&&e!==(e=s[3].namespaceInfo.name+"")&&O(a,e),o&4&&c!==(c=S({namespace:s[3].namespaceInfo.name}))&&v(r,"href",c)},d(s){s&&m(t),s&&m(n)}}}function D(f){let t,r;return t=new ee({props:{$$slots:{default:[re]},$$scope:{ctx:f}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){b(t,e,a),r=!0},p(e,a){const c={};a&68&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function ne(f){let t,r,e=f[2],a=[];for(let n=0;n<e.length;n+=1)a[n]=D(z(f,e,n));const c=n=>_(a[n],1,1,()=>{a[n]=null});return{c(){for(let n=0;n<a.length;n+=1)a[n].c();t=T()},l(n){for(let s=0;s<a.length;s+=1)a[s].l(n);t=T()},m(n,s){for(let o=0;o<a.length;o+=1)a[o].m(n,s);h(n,t,s),r=!0},p(n,s){if(s&4){e=n[2];let o;for(o=0;o<e.length;o+=1){const p=z(n,e,o);a[o]?(a[o].p(p,s),u(a[o],1)):(a[o]=D(p),a[o].c(),u(a[o],1),a[o].m(t.parentNode,t))}for(K(),o=e.length;o<a.length;o+=1)c(o);J()}},i(n){if(!r){for(let s=0;s<e.length;s+=1)u(a[s]);r=!0}},o(n){a=a.filter(Boolean);for(let s=0;s<a.length;s+=1)_(a[s]);r=!1},d(n){M(a,n),n&&m(t)}}}function se(f){let t,r;return{c(){t=N("th"),r=A("Name")},l(e){t=y(e,"TH",{});var a=E(t);r=B(a,"Name"),a.forEach(m)},m(e,a){h(e,t,a),P(t,r)},p:Y,d(e){e&&m(t)}}}function oe(f){let t,r;return t=new Z({props:{slot:"headers",$$slots:{default:[se]},$$scope:{ctx:f}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){b(t,e,a),r=!0},p(e,a){const c={};a&64&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function le(f){let t,r;return t=new X({props:{variant:"fancy",class:"w-full",$$slots:{headers:[oe],default:[ne]},$$scope:{ctx:f}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){b(t,e,a),r=!0},p(e,a){const c={};a&68&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function ce(f){let t,r,e,a,c,n,s,o,p;t=new V({props:{title:"Namespaces",url:f[0].url.href}});const C=[ae,te],$=[];function F(l,i){var k;return((k=l[1])==null?void 0:k.length)>0?0:1}return n=F(f),s=$[n]=C[n](f),{c(){g(t.$$.fragment),r=x(),e=N("h1"),a=A("Namespaces"),c=x(),s.c(),o=T(),this.h()},l(l){d(t.$$.fragment,l),r=q(l),e=y(l,"H1",{"data-cy":!0,class:!0});var i=E(e);a=B(i,"Namespaces"),i.forEach(m),c=q(l),s.l(l),o=T(),this.h()},h(){v(e,"data-cy","namespace-selector-title"),v(e,"class","mb-8 text-2xl")},m(l,i){b(t,l,i),h(l,r,i),h(l,e,i),P(e,a),h(l,c,i),$[n].m(l,i),h(l,o,i),p=!0},p(l,[i]){const k={};i&1&&(k.url=l[0].url.href),t.$set(k);let I=n;n=F(l),n===I?$[n].p(l,i):(K(),_($[I],1,1,()=>{$[I]=null}),J(),s=$[n],s?s.p(l,i):(s=$[n]=C[n](l),s.c()),u(s,1),s.m(o.parentNode,o))},i(l){p||(u(t.$$.fragment,l),u(s),p=!0)},o(l){_(t.$$.fragment,l),_(s),p=!1},d(l){w(t,l),l&&m(r),l&&m(e),l&&m(c),$[n].d(l),l&&m(o)}}}function fe(f,t,r){let e,a;return H(f,Q,c=>r(0,e=c)),H(f,R,c=>r(1,a=c)),[e,a]}class be extends j{constructor(t){super(),G(this,t,fe,ce,L,{})}}export{be as default};