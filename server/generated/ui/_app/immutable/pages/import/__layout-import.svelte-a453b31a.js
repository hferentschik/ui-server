import{S as A,i as M,s as O,x as C,y as E,z as I,f as h,t as v,C as k,O as F,a as D,l as _,r as B,c as V,m as g,n as L,u as J,h as f,p as u,b as T,N as d,aq as K,J as U,K as W,L as x,M as G}from"../../chunks/index-0b369c75.js";import{g as H}from"../../chunks/auth-user-07f174b2.js";import{f as P}from"../../chunks/settings-service-dddca26f.js";import{N as Q,a as R,b as X,E as Y}from"../../chunks/error-boundary-79f7cdf0.js";/* empty css                       */import{p as Z}from"../../chunks/stores-5674b937.js";import{I as tt}from"../../chunks/icon-7d330c0b.js";import{T as et}from"../../chunks/tooltip-d45064b8.js";import{n as rt}from"../../chunks/nav-open-7bbca22b.js";import{r as nt,f as ot}from"../../chunks/route-for-8f480fc8.js";import"../../chunks/persist-store-d7e52d7e.js";import"../../chunks/index-8c6be68a.js";import"../../chunks/parse-with-big-int-9f27148a.js";import"../../chunks/settings-be4fa165.js";import"../../chunks/route-for-api-a6afbdc8.js";import"../../chunks/notifications-64e4d8bf.js";import"../../chunks/is-network-error-5f9e2367.js";import"../../chunks/index-8a8c6b93.js";import"../../chunks/error-3e0e36ab.js";import"../../chunks/navigation-fbe70647.js";import"../../chunks/singletons-eca981c1.js";import"../../chunks/link-60074c3c.js";import"../../chunks/copy-to-clipboard-2eb414b9.js";function st(a){let e,n,t;return n=new tt({props:{isCloud:a[0],name:"download"}}),{c(){e=_("div"),C(n.$$.fragment),this.h()},l(r){e=g(r,"DIV",{class:!0});var o=L(e);E(n.$$.fragment,o),o.forEach(f),this.h()},h(){u(e,"class","nav-icon svelte-1jb7rp7")},m(r,o){T(r,e,o),I(n,e,null),t=!0},p(r,o){const s={};o&1&&(s.isCloud=r[0]),n.$set(s)},i(r){t||(h(n.$$.fragment,r),t=!0)},o(r){v(n.$$.fragment,r),t=!1},d(r){r&&f(e),k(n)}}}function at(a){let e,n,t,r,o;return e=new et({props:{right:!0,hide:a[2],text:"Import",$$slots:{default:[st]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment),n=D(),t=_("div"),r=B("Import"),this.h()},l(s){E(e.$$.fragment,s),n=V(s),t=g(s,"DIV",{class:!0});var i=L(t);r=J(i,"Import"),i.forEach(f),this.h()},h(){u(t,"class","nav-title svelte-1jb7rp7")},m(s,i){I(e,s,i),T(s,n,i),T(s,t,i),d(t,r),o=!0},p(s,i){const m={};i&4&&(m.hide=s[2]),i&9&&(m.$$scope={dirty:i,ctx:s}),e.$set(m)},i(s){o||(h(e.$$.fragment,s),o=!0)},o(s){v(e.$$.fragment,s),o=!1},d(s){k(e,s),s&&f(n),s&&f(t)}}}function it(a){let e,n;return e=new R({props:{link:a[1].import,isCloud:a[0],$$slots:{default:[at]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,r){I(e,t,r),n=!0},p(t,r){const o={};r&2&&(o.link=t[1].import),r&1&&(o.isCloud=t[0]),r&13&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function lt(a){let e,n;return e=new Q({props:{isCloud:a[0],linkList:a[1],$$slots:{top:[it]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,r){I(e,t,r),n=!0},p(t,[r]){const o={};r&1&&(o.isCloud=t[0]),r&2&&(o.linkList=t[1]),r&15&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function ft(a,e,n){let t;F(a,rt,s=>n(2,t=s));let{isCloud:r}=e,{linkList:o}=e;return a.$$set=s=>{"isCloud"in s&&n(0,r=s.isCloud),"linkList"in s&&n(1,o=s.linkList)},[r,o,t]}class ut extends A{constructor(e){super(),M(this,e,ft,lt,O,{isCloud:0,linkList:1})}}function mt(a){let e,n;return e=new ut({props:{linkList:a[0],isCloud:a[1]}}),{c(){C(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,r){I(e,t,r),n=!0},p(t,[r]){const o={};r&1&&(o.linkList=t[0]),e.$set(o)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function ct(a,e,n){let t,r,o;F(a,Z,p=>n(5,o=p));var s,i;const{isCloud:m}=o.stuff.settings.runtimeEnvironment;return a.$$.update=()=>{a.$$.dirty&44&&n(4,t=n(3,i=n(2,s=o.stuff)===null||s===void 0?void 0:s.settings)===null||i===void 0?void 0:i.defaultNamespace),a.$$.dirty&16&&n(0,r={home:nt({namespace:t}),import:ot({importType:"events"})})},[r,m,s,i,t,o]}class pt extends A{constructor(e){super(),M(this,e,ct,mt,O,{})}}function $t(a){let e;const n=a[0].default,t=U(n,a,a[1],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,o){t&&t.m(r,o),e=!0},p(r,o){t&&t.p&&(!e||o&2)&&W(t,n,r,r[1],e?G(n,r[1],o,null):x(r[1]),null)},i(r){e||(h(t,r),e=!0)},o(r){v(t,r),e=!1},d(r){t&&t.d(r)}}}function dt(a){let e,n,t,r,o,s,i,m,p,q,y,b,w,N;return s=new X({}),p=new pt({}),w=new Y({props:{onError:_t,$$slots:{default:[$t]},$$scope:{ctx:a}}}),{c(){e=_("meta"),n=_("meta"),t=_("meta"),r=D(),o=_("div"),C(s.$$.fragment),i=D(),m=_("div"),C(p.$$.fragment),q=D(),y=_("section"),b=_("div"),C(w.$$.fragment),this.h()},l(l){const c=K("svelte-xqpqe2",document.head);e=g(c,"META",{property:!0,content:!0}),n=g(c,"META",{property:!0,content:!0}),t=g(c,"META",{property:!0,content:!0}),c.forEach(f),r=V(l),o=g(l,"DIV",{class:!0});var $=L(o);E(s.$$.fragment,$),i=V($),m=g($,"DIV",{class:!0});var S=L(m);E(p.$$.fragment,S),S.forEach(f),q=V($),y=g($,"SECTION",{id:!0,class:!0});var z=L(y);b=g(z,"DIV",{class:!0});var j=L(b);E(w.$$.fragment,j),j.forEach(f),z.forEach(f),$.forEach(f),this.h()},h(){document.title="Temporal",u(e,"property","og:title"),u(e,"content","Temporal"),u(n,"property","og:type"),u(n,"content","website"),u(t,"property","og:url"),u(t,"content","https://temporal.io"),u(m,"class","sticky top-0 z-20 h-screen w-auto"),u(b,"class","z-10 flex h-full flex-col gap-4 px-10 pb-10 pt-8"),u(y,"id","content"),u(y,"class","h-screen w-max flex-auto overflow-auto"),u(o,"class","flex h-screen w-screen flex-row")},m(l,c){d(document.head,e),d(document.head,n),d(document.head,t),T(l,r,c),T(l,o,c),I(s,o,null),d(o,i),d(o,m),I(p,m,null),d(o,q),d(o,y),d(y,b),I(w,b,null),N=!0},p(l,[c]){const $={};c&2&&($.$$scope={dirty:c,ctx:l}),w.$set($)},i(l){N||(h(s.$$.fragment,l),h(p.$$.fragment,l),h(w.$$.fragment,l),N=!0)},o(l){v(s.$$.fragment,l),v(p.$$.fragment,l),v(w.$$.fragment,l),N=!1},d(l){f(e),f(n),f(t),l&&f(r),l&&f(o),k(s),k(p),k(w)}}}const Jt=async function({fetch:a}){const e=await P(a);return{props:{user:H()},stuff:{settings:e}}},_t=()=>{};function gt(a,e,n){let{$$slots:t={},$$scope:r}=e;return a.$$set=o=>{"$$scope"in o&&n(1,r=o.$$scope)},[t,r]}class Kt extends A{constructor(e){super(),M(this,e,gt,dt,O,{})}}export{Kt as default,Jt as load};