import{S as A,i as F,s as M,w as B,a as y,l as _,r as k,x as H,c as x,m as $,n as b,u as P,h as l,p as d,y as O,b as E,M as c,f as D,t as L,B as V,N as T,E as U}from"../../chunks/index-8e660855.js";import{f as z}from"../../chunks/settings-service-72ab5c5a.js";import{p as G}from"../../chunks/route-for-62d7d3b1.js";import{B as J}from"../../chunks/button-8f2dcb01.js";import{p as K}from"../../chunks/stores-8ff78576.js";import{g as Q}from"../../chunks/navigation-fbe70647.js";import{N as R,H as X}from"../../chunks/hamburger-header-d0ec46b9.js";import{p as q}from"../../chunks/get-public-path-6c4a8950.js";import"../../chunks/settings-7aeda309.js";import"../../chunks/index-71be9f1c.js";import"../../chunks/route-for-api-8b02736a.js";import"../../chunks/user-b3ac4393.js";import"../../chunks/persist-store-4b4c2e6c.js";import"../../chunks/notifications-faca15d4.js";import"../../chunks/is-network-error-5f9e2367.js";import"../../chunks/icon-39b683f1.js";import"../../chunks/badge-b5d60de0.js";import"../../chunks/singletons-eca981c1.js";import"../../chunks/has-ae9b6b71.js";import"../../chunks/is-6159121b.js";import"../../chunks/data-encoder-status-96e3cbe6.js";import"../../chunks/data-converter-config-7e60fe97.js";import"../../chunks/is-http-9a6dffcd.js";import"../../chunks/tooltip-bdf6848f.js";import"../../chunks/copyable-46fdb031.js";import"../../chunks/copy-to-clipboard-2ccea087.js";import"../../chunks/modal-8cd20322.js";import"../../chunks/index-77c8c021.js";function Y(n){let e;return{c(){e=k("Continue to SSO")},l(s){e=P(s,"Continue to SSO")},m(s,a){E(s,e,a)},d(s){s&&l(e)}}}function Z(n){let e,s,a;return{c(){e=_("div"),s=_("p"),a=k(n[2]),this.h()},l(i){e=$(i,"DIV",{class:!0});var r=b(e);s=$(r,"P",{class:!0});var m=b(s);a=P(m,n[2]),m.forEach(l),r.forEach(l),this.h()},h(){d(s,"class","rounded-md border-2 border-orange-500 bg-orange-100 p-5 text-center"),d(e,"class","my-12 flex flex-col items-center justify-start gap-2")},m(i,r){E(i,e,r),c(e,s),c(s,a)},p:U,d(i){i&&l(e)}}}function tt(n){let e,s,a,i,r,m,u,w,g,C,I,h,p,N,S;e=new R({props:{href:q+"/",user:void 0}}),a=new X({props:{href:q+"/",user:void 0}}),p=new J({props:{dataCy:"login-button",variant:"login",icon:"lock",$$slots:{default:[Y]},$$scope:{ctx:n}}}),p.$on("click",n[3]);let f=n[2]&&Z(n);return{c(){B(e.$$.fragment),s=y(),B(a.$$.fragment),i=y(),r=_("section"),m=_("h1"),u=k("Welcome back."),w=y(),g=_("p"),C=k("Let's get you signed in."),I=y(),h=_("div"),B(p.$$.fragment),N=y(),f&&f.c(),this.h()},l(t){H(e.$$.fragment,t),s=x(t),H(a.$$.fragment,t),i=x(t),r=$(t,"SECTION",{class:!0});var o=b(r);m=$(o,"H1",{class:!0,"data-cy":!0});var v=b(m);u=P(v,"Welcome back."),v.forEach(l),w=x(o),g=$(o,"P",{class:!0,"data-cy":!0});var W=b(g);C=P(W,"Let's get you signed in."),W.forEach(l),I=x(o),h=$(o,"DIV",{class:!0});var j=b(h);H(p.$$.fragment,j),j.forEach(l),N=x(o),f&&f.l(o),o.forEach(l),this.h()},h(){d(m,"class","text-8xl font-semibold"),d(m,"data-cy","login-title"),d(g,"class","my-7"),d(g,"data-cy","login-info"),d(h,"class","mx-auto"),d(r,"class","my-[20vh] text-center")},m(t,o){O(e,t,o),E(t,s,o),O(a,t,o),E(t,i,o),E(t,r,o),c(r,m),c(m,u),c(r,w),c(r,g),c(g,C),c(r,I),c(r,h),O(p,h,null),c(r,N),f&&f.m(r,null),S=!0},p(t,[o]){const v={};o&16&&(v.$$scope={dirty:o,ctx:t}),p.$set(v),t[2]&&f.p(t,o)},i(t){S||(D(e.$$.fragment,t),D(a.$$.fragment,t),D(p.$$.fragment,t),S=!0)},o(t){L(e.$$.fragment,t),L(a.$$.fragment,t),L(p.$$.fragment,t),S=!1},d(t){V(e,t),t&&l(s),V(a,t),t&&l(i),t&&l(r),V(p),f&&f.d()}}}const Nt=async function({fetch:n}){const e=await z(n);return e.auth.enabled?{props:{settings:e},stuff:{settings:e}}:{status:404}};function et(n,e,s){let a;T(n,K,u=>s(1,a=u));const i=a.url.searchParams.get("error");let{settings:r}=e;const m=()=>{Q(G({settings:r,searchParams:a.url.searchParams,originUrl:a.url.origin}))};return n.$$set=u=>{"settings"in u&&s(0,r=u.settings)},[r,a,i,m]}class Bt extends A{constructor(e){super(),F(this,e,et,tt,M,{settings:0})}}export{Bt as default,Nt as load};
