import{S as C,i as J,s as O,e as u,k as N,w as A,a0 as U,c as f,d as l,m as S,a as I,x as q,b as n,M as p,g as B,y as D,q as T,o as k,B as K,I as j,J as F,K as G,L as H}from"../../chunks/index-604742bf.js";import{f as P,N as Q,E as R}from"../../chunks/error-boundary-79132295.js";import{f as W}from"../../chunks/settings-service-acbe3a20.js";/* empty css                       */import X from"./_import-header.svelte-eb691789.js";import"../../chunks/route-for-api-f6933200.js";import"../../chunks/index-c9e619a8.js";import"../../chunks/notifications-cfed8e58.js";import"../../chunks/is-network-error-ac7c8caf.js";import"../../chunks/route-for-1f2060cd.js";import"../../chunks/index-69aa65a3.js";import"../../chunks/error-a039bd7e.js";import"../../chunks/navigation-6709cf39.js";import"../../chunks/singletons-d1fb5791.js";import"../../chunks/stores-810822a9.js";import"../../chunks/link-74db22ab.js";import"../../chunks/index-0574ae1f.js";import"../../chunks/_nav-row-56ea2046.js";import"../../chunks/persist-store-26f405dd.js";import"../../chunks/tooltip-4b9b03e7.js";import"../../chunks/copyable-6f962ac2.js";import"../../chunks/copy-to-clipboard-8832075c.js";function Y(c){let r;const s=c[0].default,e=j(s,c,c[1],null);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,a){e&&e.m(t,a),r=!0},p(t,a){e&&e.p&&(!r||a&2)&&F(e,s,t,t[1],r?H(s,t[1],a,null):G(t[1]),null)},i(t){r||(T(e,t),r=!0)},o(t){k(e,t),r=!1},d(t){e&&e.d(t)}}}function Z(c){let r,s,e,t,a,y,E,m,_,x,v,h,M,g,w,$,b;return _=new Q({}),h=new X({}),$=new R({props:{onError:tt,$$slots:{default:[Y]},$$scope:{ctx:c}}}),{c(){r=u("link"),s=u("link"),e=u("meta"),t=u("meta"),a=u("meta"),y=u("meta"),E=N(),m=u("div"),A(_.$$.fragment),x=N(),v=u("div"),A(h.$$.fragment),M=N(),g=u("section"),w=u("div"),A($.$$.fragment),this.h()},l(o){const i=U('[data-svelte="svelte-15ltrtv"]',document.head);r=f(i,"LINK",{rel:!0,href:!0}),s=f(i,"LINK",{rel:!0,href:!0}),e=f(i,"META",{property:!0,content:!0}),t=f(i,"META",{property:!0,content:!0}),a=f(i,"META",{property:!0,content:!0}),y=f(i,"META",{property:!0,content:!0}),i.forEach(l),E=S(o),m=f(o,"DIV",{class:!0});var d=I(m);q(_.$$.fragment,d),x=S(d),v=f(d,"DIV",{class:!0});var L=I(v);q(h.$$.fragment,L),L.forEach(l),M=S(d),g=f(d,"SECTION",{id:!0,class:!0});var V=I(g);w=f(V,"DIV",{class:!0});var z=I(w);q($.$$.fragment,z),z.forEach(l),V.forEach(l),d.forEach(l),this.h()},h(){document.title="Temporal",n(r,"rel","manifest"),n(r,"href","/site.webmanifest"),n(s,"rel","apple-touch-icon"),n(s,"href","/apple-touch-icon.png"),n(e,"property","og:title"),n(e,"content","Temporal"),n(t,"property","og:type"),n(t,"content","website"),n(a,"property","og:url"),n(a,"content","https://temporal.io"),n(y,"property","og:image"),n(y,"content","/banner.png"),n(v,"class","sticky top-0 z-20 h-screen w-auto"),n(w,"class","z-10 flex h-full flex-col gap-4 px-10 pb-10 pt-8"),n(g,"id","content"),n(g,"class","h-screen w-max flex-auto overflow-auto"),n(m,"class","flex h-screen w-screen flex-row")},m(o,i){p(document.head,r),p(document.head,s),p(document.head,e),p(document.head,t),p(document.head,a),p(document.head,y),B(o,E,i),B(o,m,i),D(_,m,null),p(m,x),p(m,v),D(h,v,null),p(m,M),p(m,g),p(g,w),D($,w,null),b=!0},p(o,[i]){const d={};i&2&&(d.$$scope={dirty:i,ctx:o}),$.$set(d)},i(o){b||(T(_.$$.fragment,o),T(h.$$.fragment,o),T($.$$.fragment,o),b=!0)},o(o){k(_.$$.fragment,o),k(h.$$.fragment,o),k($.$$.fragment,o),b=!1},d(o){l(r),l(s),l(e),l(t),l(a),l(y),o&&l(E),o&&l(m),K(_),K(h),K($)}}}const It=async function({fetch:c}){const r=await W(c);return{props:{user:await P(c)},stuff:{settings:r}}},tt=()=>{};function et(c,r,s){let{$$slots:e={},$$scope:t}=r;return c.$$set=a=>{"$$scope"in a&&s(1,t=a.$$scope)},[e,t]}class Tt extends C{constructor(r){super(),J(this,r,et,Z,O,{})}}export{Tt as default,It as load};