import{S as A,i as D,s as F,w as C,k as _,e as d,t as P,x as N,m as h,c as b,a as v,h as q,d as p,b as x,y as B,g as y,M as l,q as H,o as I,B as O,N as M}from"../../chunks/index-1da60d19.js";import{f as T}from"../../chunks/settings-service-0698b0c5.js";import{o as U}from"../../chunks/route-for-ef692dd7.js";import{B as V}from"../../chunks/button-bb025b66.js";import{p as j}from"../../chunks/stores-bed2f46e.js";import{g as z}from"../../chunks/navigation-6709cf39.js";import{N as G,H as J}from"../../chunks/hamburger-header-11544101.js";import"../../chunks/settings-6c50d1a6.js";import"../../chunks/index-6843fe21.js";import"../../chunks/route-for-api-e0dd5afe.js";import"../../chunks/notifications-121124a6.js";import"../../chunks/is-network-error-ac7c8caf.js";import"../../chunks/is-function-b969a126.js";import"../../chunks/index-c656f9dc.js";import"../../chunks/badge-8b9f8ded.js";import"../../chunks/singletons-d1fb5791.js";import"../../chunks/data-encoder-status-931dba77.js";import"../../chunks/data-converter-config-8eec1cd7.js";import"../../chunks/persist-store-f0d328df.js";import"../../chunks/is-http-3ee99468.js";import"../../chunks/tooltip-91189a24.js";import"../../chunks/copyable-f967cb90.js";import"../../chunks/copy-to-clipboard-4893348d.js";import"../../chunks/modal-de829d7d.js";import"../../chunks/index-ad10ae27.js";function K(i){let e;return{c(){e=P("Continue to SSO")},l(n){e=q(n,"Continue to SSO")},m(n,r){y(n,e,r)},d(n){n&&p(e)}}}function Q(i){let e,n,r,c,o,a,S,k,f,w,E,u,m,$;return e=new G({props:{href:"/",user:void 0}}),r=new J({props:{href:"/",user:void 0}}),m=new V({props:{classes:"",login:!0,name:"lock",$$slots:{default:[K]},$$scope:{ctx:i}}}),m.$on("click",i[2]),{c(){C(e.$$.fragment),n=_(),C(r.$$.fragment),c=_(),o=d("section"),a=d("h1"),S=P("Welcome back."),k=_(),f=d("p"),w=P("Let's get you signed in."),E=_(),u=d("div"),C(m.$$.fragment),this.h()},l(t){N(e.$$.fragment,t),n=h(t),N(r.$$.fragment,t),c=h(t),o=b(t,"SECTION",{class:!0});var s=v(o);a=b(s,"H1",{class:!0});var g=v(a);S=q(g,"Welcome back."),g.forEach(p),k=h(s),f=b(s,"P",{class:!0});var L=v(f);w=q(L,"Let's get you signed in."),L.forEach(p),E=h(s),u=b(s,"DIV",{class:!0});var W=v(u);N(m.$$.fragment,W),W.forEach(p),s.forEach(p),this.h()},h(){x(a,"class","text-8xl font-semibold"),x(f,"class","my-7"),x(u,"class","mx-auto"),x(o,"class","my-[20vh] text-center")},m(t,s){B(e,t,s),y(t,n,s),B(r,t,s),y(t,c,s),y(t,o,s),l(o,a),l(a,S),l(o,k),l(o,f),l(f,w),l(o,E),l(o,u),B(m,u,null),$=!0},p(t,[s]){const g={};s&8&&(g.$$scope={dirty:s,ctx:t}),m.$set(g)},i(t){$||(H(e.$$.fragment,t),H(r.$$.fragment,t),H(m.$$.fragment,t),$=!0)},o(t){I(e.$$.fragment,t),I(r.$$.fragment,t),I(m.$$.fragment,t),$=!1},d(t){O(e,t),t&&p(n),O(r,t),t&&p(c),t&&p(o),O(m)}}}const yt=async function({fetch:i}){const e=await T(i);return e.auth.enabled?{props:{settings:e},stuff:{settings:e}}:{status:404}};function R(i,e,n){let r;M(i,j,a=>n(1,r=a));let{settings:c}=e;const o=()=>{z(U({settings:c,searchParams:r.url.searchParams,originUrl:r.url.origin}))};return i.$$set=a=>{"settings"in a&&n(0,c=a.settings)},[c,r,o]}class St extends A{constructor(e){super(),D(this,e,R,Q,F,{settings:0})}}export{St as default,yt as load};