import{D as Le,S as K,i as W,s as Q,F as qe,G as Pe,e as g,w as T,c as v,a as y,x as S,d as u,b as m,g as A,y as C,H as Re,q as b,o as k,B as L,I as F,l as U,n as ee,p as te,J as Ue,t as j,h as z,j as le,K as ne,k as q,m as P,L as d,M as se,N as oe,O as ae,P as Z,Q as fe,R as ue,T as H,U as ge,V as ie,W as ce,X as Fe,Y as je,Z as ze,_ as Ge,$ as He,a0 as Ke,a1 as We,a2 as Qe,a3 as Je,a4 as Xe,a5 as Ye,a6 as ve,a7 as be,a8 as ke,a9 as Ze,aa as xe,r as et}from"../chunks/vendor-1f328e1e.js";import{s as tt,l as rt}from"../chunks/settings-213cea3f.js";import{r as me,a as _e,n as re}from"../chunks/route-for-api-b8046903.js";import{n as Be}from"../chunks/namespace-b0e4e965.js";import{S as lt,O as nt}from"../chunks/select-19486317.js";import{g as st}from"../chunks/navigation-093db9e2.js";import{g as ot}from"../chunks/get-context-a7589b73.js";import{d as at,l as ct,p as it}from"../chunks/data-converter-config-f21dca75.js";import{p as ft}from"../chunks/stores-41b3e483.js";import{n as we}from"../chunks/notifications-7fcc13cf.js";import{E as ut}from"../chunks/error-91b29c97.js";import"../chunks/is-network-error-ac7c8caf.js";import"../chunks/singletons-a6a7384f.js";const mt=async(o=fetch)=>await me(_e("cluster"),{request:o}),Ve=Le({}),_t=async()=>{const o=await mt();Ve.set(o)},pt=async(o=fetch)=>{const e=await me(_e("user"),{request:o});return{name:e==null?void 0:e.Name,email:e==null?void 0:e.Email,picture:e==null?void 0:e.Picture}},Me=Le(null),dt=async()=>{const o=await pt();Me.set(o)};function ye(o,e,t){const r=o.slice();return r[5]=e[t],r}function ht(o){let e=o[5]+"",t;return{c(){t=j(e)},l(r){t=z(r,e)},m(r,l){A(r,t,l)},p(r,l){l&2&&e!==(e=r[5]+"")&&le(t,e)},d(r){r&&u(t)}}}function Ee(o){let e,t;return e=new nt({props:{value:o[5],$$slots:{default:[ht]},$$scope:{ctx:o}}}),{c(){T(e.$$.fragment)},l(r){S(e.$$.fragment,r)},m(r,l){C(e,r,l),t=!0},p(r,l){const n={};l&2&&(n.value=r[5]),l&258&&(n.$$scope={dirty:l,ctx:r}),e.$set(n)},i(r){t||(b(e.$$.fragment,r),t=!0)},o(r){k(e.$$.fragment,r),t=!1},d(r){L(e,r)}}}function $t(o){let e,t,r=o[1],l=[];for(let s=0;s<r.length;s+=1)l[s]=Ee(ye(o,r,s));const n=s=>k(l[s],1,1,()=>{l[s]=null});return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=U()},l(s){for(let c=0;c<l.length;c+=1)l[c].l(s);e=U()},m(s,c){for(let a=0;a<l.length;a+=1)l[a].m(s,c);A(s,e,c),t=!0},p(s,c){if(c&2){r=s[1];let a;for(a=0;a<r.length;a+=1){const i=ye(s,r,a);l[a]?(l[a].p(i,c),b(l[a],1)):(l[a]=Ee(i),l[a].c(),b(l[a],1),l[a].m(e.parentNode,e))}for(ee(),a=r.length;a<l.length;a+=1)n(a);te()}},i(s){if(!t){for(let c=0;c<r.length;c+=1)b(l[c]);t=!0}},o(s){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)k(l[c]);t=!1},d(s){Ue(l,s),s&&u(e)}}}function gt(o){let e,t,r,l;function n(c){o[3](c)}let s={dark:!0,$$slots:{default:[$t]},$$scope:{ctx:o}};return o[0]!==void 0&&(s.value=o[0]),t=new lt({props:s}),qe.push(()=>Pe(t,"value",n)),t.$on("change",o[2]),{c(){e=g("div"),T(t.$$.fragment),this.h()},l(c){e=v(c,"DIV",{class:!0});var a=y(e);S(t.$$.fragment,a),a.forEach(u),this.h()},h(){m(e,"class","w-full")},m(c,a){A(c,e,a),C(t,e,null),l=!0},p(c,[a]){const i={};a&258&&(i.$$scope={dirty:a,ctx:c}),!r&&a&1&&(r=!0,i.value=c[0],Re(()=>r=!1)),t.$set(i)},i(c){l||(b(t.$$.fragment,c),l=!0)},o(c){k(t.$$.fragment,c),l=!1},d(c){c&&u(e),L(t)}}}function vt(o,e,t){let r,l;F(o,Be,a=>t(4,l=a));let n=l;function s(){st("/namespaces/"+n)}function c(a){n=a,t(0,n)}return t(1,r=ot("namespaces").map(a=>a.namespaceInfo.name)),[n,r,s,c]}class bt extends K{constructor(e){super();W(this,e,vt,gt,Q,{})}}function kt(o){let e,t,r,l,n,s,c;const a=o[2].default,i=ne(a,o,o[1],null);return{c(){e=g("div"),i&&i.c(),t=q(),r=g("div"),l=g("div"),n=g("span"),s=j(o[0]),this.h()},l(f){e=v(f,"DIV",{class:!0});var p=y(e);i&&i.l(p),t=P(p),r=v(p,"DIV",{class:!0});var _=y(r);l=v(_,"DIV",{class:!0});var w=y(l);n=v(w,"SPAN",{class:!0});var $=y(n);s=z($,o[0]),$.forEach(u),w.forEach(u),_.forEach(u),p.forEach(u),this.h()},h(){m(n,"class","text-gray-100"),m(l,"class","bg-gray-800 inline-block px-2 py-2 rounded-lg"),m(r,"class","tooltip svelte-za0ex9"),m(e,"class","wrapper relative inline-block svelte-za0ex9")},m(f,p){A(f,e,p),i&&i.m(e,null),d(e,t),d(e,r),d(r,l),d(l,n),d(n,s),c=!0},p(f,[p]){i&&i.p&&(!c||p&2)&&se(i,a,f,f[1],c?ae(a,f[1],p,null):oe(f[1]),null),(!c||p&1)&&le(s,f[0])},i(f){c||(b(i,f),c=!0)},o(f){k(i,f),c=!1},d(f){f&&u(e),i&&i.d(f)}}}function wt(o,e,t){let{$$slots:r={},$$scope:l}=e,{text:n=""}=e;return o.$$set=s=>{"text"in s&&t(0,n=s.text),"$$scope"in s&&t(1,l=s.$$scope)},[n,l,r]}class pe extends K{constructor(e){super();W(this,e,wt,kt,Q,{text:0})}}function Ie(o){let e,t,r,l;const n=[It,Et,yt],s=[];function c(a,i){return a[1]==="notRequested"?0:a[1]==="error"?1:a[1]==="success"?2:-1}return~(e=c(o))&&(t=s[e]=n[e](o)),{c(){t&&t.c(),r=U()},l(a){t&&t.l(a),r=U()},m(a,i){~e&&s[e].m(a,i),A(a,r,i),l=!0},p(a,i){let f=e;e=c(a),e===f?~e&&s[e].p(a,i):(t&&(ee(),k(s[f],1,1,()=>{s[f]=null}),te()),~e?(t=s[e],t?t.p(a,i):(t=s[e]=n[e](a),t.c()),b(t,1),t.m(r.parentNode,r)):t=null)},i(a){l||(b(t),l=!0)},o(a){k(t),l=!1},d(a){~e&&s[e].d(a),a&&u(r)}}}function yt(o){let e,t;return e=new pe({props:{text:"Data converter succesfully converted content",$$slots:{default:[Nt]},$$scope:{ctx:o}}}),{c(){T(e.$$.fragment)},l(r){S(e.$$.fragment,r)},m(r,l){C(e,r,l),t=!0},p(r,l){const n={};l&4&&(n.$$scope={dirty:l,ctx:r}),e.$set(n)},i(r){t||(b(e.$$.fragment,r),t=!0)},o(r){k(e.$$.fragment,r),t=!1},d(r){L(e,r)}}}function Et(o){let e,t;return e=new pe({props:{text:"Data converter couldn't connect to the remote converter",$$slots:{default:[At]},$$scope:{ctx:o}}}),{c(){T(e.$$.fragment)},l(r){S(e.$$.fragment,r)},m(r,l){C(e,r,l),t=!0},p(r,l){const n={};l&4&&(n.$$scope={dirty:l,ctx:r}),e.$set(n)},i(r){t||(b(e.$$.fragment,r),t=!0)},o(r){k(e.$$.fragment,r),t=!1},d(r){L(e,r)}}}function It(o){let e,t;return e=new pe({props:{text:"Data converter is configured",$$slots:{default:[Dt]},$$scope:{ctx:o}}}),{c(){T(e.$$.fragment)},l(r){S(e.$$.fragment,r)},m(r,l){C(e,r,l),t=!0},p(r,l){const n={};l&4&&(n.$$scope={dirty:l,ctx:r}),e.$set(n)},i(r){t||(b(e.$$.fragment,r),t=!0)},o(r){k(e.$$.fragment,r),t=!1},d(r){L(e,r)}}}function Nt(o){let e,t,r,l,n;return t=new Z({props:{icon:fe,scale:1,class:"text-blue-200 block w-full h-full"}}),l=new Z({props:{icon:ue,scale:1,class:"text-blue-200 block w-full h-full"}}),{c(){e=g("div"),T(t.$$.fragment),r=q(),T(l.$$.fragment),this.h()},l(s){e=v(s,"DIV",{class:!0});var c=y(e);S(t.$$.fragment,c),r=P(c),S(l.$$.fragment,c),c.forEach(u),this.h()},h(){m(e,"class","flex")},m(s,c){A(s,e,c),C(t,e,null),d(e,r),C(l,e,null),n=!0},p:H,i(s){n||(b(t.$$.fragment,s),b(l.$$.fragment,s),n=!0)},o(s){k(t.$$.fragment,s),k(l.$$.fragment,s),n=!1},d(s){s&&u(e),L(t),L(l)}}}function At(o){let e,t,r,l,n;return t=new Z({props:{icon:fe,scale:1,class:"text-red-400 block w-full h-full"}}),l=new Z({props:{icon:ue,scale:1,class:"text-red-400 block w-full h-full"}}),{c(){e=g("div"),T(t.$$.fragment),r=q(),T(l.$$.fragment),this.h()},l(s){e=v(s,"DIV",{class:!0});var c=y(e);S(t.$$.fragment,c),r=P(c),S(l.$$.fragment,c),c.forEach(u),this.h()},h(){m(e,"class","flex")},m(s,c){A(s,e,c),C(t,e,null),d(e,r),C(l,e,null),n=!0},p:H,i(s){n||(b(t.$$.fragment,s),b(l.$$.fragment,s),n=!0)},o(s){k(t.$$.fragment,s),k(l.$$.fragment,s),n=!1},d(s){s&&u(e),L(t),L(l)}}}function Dt(o){let e,t,r,l,n;return t=new Z({props:{icon:fe,scale:1,class:"text-blue-200 block w-full h-full"}}),l=new Z({props:{icon:ue,scale:1,class:"text-blue-200 block w-full h-full"}}),{c(){e=g("div"),T(t.$$.fragment),r=q(),T(l.$$.fragment),this.h()},l(s){e=v(s,"DIV",{class:!0});var c=y(e);S(t.$$.fragment,c),r=P(c),S(l.$$.fragment,c),c.forEach(u),this.h()},h(){m(e,"class","flex")},m(s,c){A(s,e,c),C(t,e,null),d(e,r),C(l,e,null),n=!0},p:H,i(s){n||(b(t.$$.fragment,s),b(l.$$.fragment,s),n=!0)},o(s){k(t.$$.fragment,s),k(l.$$.fragment,s),n=!1},d(s){s&&u(e),L(t),L(l)}}}function Tt(o){let e,t,r=o[0]&&Ie(o);return{c(){r&&r.c(),e=U()},l(l){r&&r.l(l),e=U()},m(l,n){r&&r.m(l,n),A(l,e,n),t=!0},p(l,[n]){l[0]?r?(r.p(l,n),n&1&&b(r,1)):(r=Ie(l),r.c(),b(r,1),r.m(e.parentNode,e)):r&&(ee(),k(r,1,1,()=>{r=null}),te())},i(l){t||(b(r),t=!0)},o(l){k(r),t=!1},d(l){r&&r.d(l),l&&u(e)}}}function St(o,e,t){let r,l;return F(o,at,n=>t(0,r=n)),F(o,ct,n=>t(1,l=n)),[r,l]}class Ct extends K{constructor(e){super();W(this,e,St,Tt,Q,{})}}const Ne=o=>{const e=o==null?void 0:o.indexOf("?");return e>-1?o.slice(0,e):o},Lt=(o,e,t=!1)=>{const r=Ne(o).split("/"),l=Ne(e).split("/");if(t&&r.length!==l.length)return!1;for(let n=0;n<r.length;n++){const s=r[n],c=l[n];if(s!==c)return!1}return!0};function Bt(o){let e,t;const r=o[4].default,l=ne(r,o,o[3],null);return{c(){e=g("a"),l&&l.c(),this.h()},l(n){e=v(n,"A",{href:!0,class:!0});var s=y(e);l&&l.l(s),s.forEach(u),this.h()},h(){m(e,"href",o[0]),m(e,"class","relative svelte-1hldide"),ge(e,"active",o[1])},m(n,s){A(n,e,s),l&&l.m(e,null),t=!0},p(n,[s]){l&&l.p&&(!t||s&8)&&se(l,r,n,n[3],t?ae(r,n[3],s,null):oe(n[3]),null),(!t||s&1)&&m(e,"href",n[0]),s&2&&ge(e,"active",n[1])},i(n){t||(b(l,n),t=!0)},o(n){k(l,n),t=!1},d(n){n&&u(e),l&&l.d(n)}}}function Vt(o,e,t){let r,l;F(o,ft,a=>t(2,l=a));let{$$slots:n={},$$scope:s}=e,{href:c}=e;return o.$$set=a=>{"href"in a&&t(0,c=a.href),"$$scope"in a&&t(3,s=a.$$scope)},o.$$.update=()=>{o.$$.dirty&5&&t(1,r=Lt(c,l.url.pathname))},[c,r,l,s,n]}class Ae extends K{constructor(e){super();W(this,e,Vt,Bt,Q,{href:0})}}function Mt(o){let e;return{c(){e=j("Workflows")},l(t){e=z(t,"Workflows")},m(t,r){A(t,e,r)},d(t){t&&u(e)}}}function Ot(o){let e;return{c(){e=j("Archival")},l(t){e=z(t,"Archival")},m(t,r){A(t,e,r)},d(t){t&&u(e)}}}function De(o){let e;function t(n,s){var c;return((c=n[2])==null?void 0:c.email)?Pt:qt}let r=t(o),l=r(o);return{c(){l.c(),e=U()},l(n){l.l(n),e=U()},m(n,s){l.m(n,s),A(n,e,s)},p(n,s){r===(r=t(n))&&l?l.p(n,s):(l.d(1),l=r(n),l&&(l.c(),l.m(e.parentNode,e)))},d(n){l.d(n),n&&u(e)}}}function qt(o){let e,t,r,l;return{c(){e=g("button"),t=j("Login"),this.h()},l(n){e=v(n,"BUTTON",{class:!0});var s=y(e);t=z(s,"Login"),s.forEach(u),this.h()},h(){m(e,"class","header-button svelte-1wxl72y")},m(n,s){A(n,e,s),d(e,t),r||(l=ce(e,"click",o[4]),r=!0)},p:H,d(n){n&&u(e),r=!1,l()}}}function Pt(o){let e,t,r,l,n,s;return{c(){e=g("button"),t=j(`Logout
          `),r=g("img"),this.h()},l(c){e=v(c,"BUTTON",{class:!0});var a=y(e);t=z(a,`Logout
          `),r=v(a,"IMG",{src:!0,alt:!0,class:!0}),a.forEach(u),this.h()},h(){ie(r.src,l=o[2].picture)||m(r,"src",l),m(r,"alt","User Avatar"),m(r,"class","rounded-full h-6 w-6 ml-2.5"),m(e,"class","header-button min-w-min svelte-1wxl72y")},m(c,a){A(c,e,a),d(e,t),d(e,r),n||(s=ce(e,"click",o[3]),n=!0)},p(c,a){a&4&&!ie(r.src,l=c[2].picture)&&m(r,"src",l)},d(c){c&&u(e),n=!1,s()}}}function Rt(o){var x,de;let e,t,r,l,n,s,c,a,i,f,p,_,w,$,D,h,E,R,I,V,M;c=new bt({}),f=new Ae({props:{href:`/namespaces/${o[0]}/workflows`,$$slots:{default:[Mt]},$$scope:{ctx:o}}}),_=new Ae({props:{href:`/namespaces/${o[0]}/archival`,$$slots:{default:[Ot]},$$scope:{ctx:o}}}),h=new Ct({});let B=((de=(x=o[1])==null?void 0:x.auth)==null?void 0:de.enabled)&&De(o);return{c(){e=g("header"),t=g("div"),r=g("a"),l=g("img"),s=q(),T(c.$$.fragment),a=q(),i=g("div"),T(f.$$.fragment),p=q(),T(_.$$.fragment),w=q(),$=g("div"),D=g("div"),T(h.$$.fragment),E=q(),R=g("a"),I=j("Report Bug/Give Feedback"),V=q(),B&&B.c(),this.h()},l(N){e=v(N,"HEADER",{class:!0});var O=y(e);t=v(O,"DIV",{class:!0});var J=y(t);r=v(J,"A",{href:!0,class:!0});var Y=y(r);l=v(Y,"IMG",{src:!0,alt:!0,class:!0}),Y.forEach(u),s=P(J),S(c.$$.fragment,J),J.forEach(u),a=P(O),i=v(O,"DIV",{class:!0});var X=y(i);S(f.$$.fragment,X),p=P(X),S(_.$$.fragment,X),X.forEach(u),w=P(O),$=v(O,"DIV",{class:!0});var G=y($);D=v(G,"DIV",{class:!0});var he=y(D);S(h.$$.fragment,he),he.forEach(u),E=P(G),R=v(G,"A",{class:!0,href:!0});var $e=y(R);I=z($e,"Report Bug/Give Feedback"),$e.forEach(u),V=P(G),B&&B.l(G),G.forEach(u),O.forEach(u),this.h()},h(){ie(l.src,n="/logo.svg")||m(l,"src",n),m(l,"alt","Temporal Logo"),m(l,"class","max-h-10"),m(r,"href","/"),m(r,"class","block"),m(t,"class","flex gap-4 col-span-3"),m(i,"class","flex gap-4 col-span-4"),m(D,"class","text-right"),m(R,"class","header-button svelte-1wxl72y"),m(R,"href","https://github.com/temporalio/ui/issues/new/choose"),m($,"class","flex justify-end gap-4 col-span-5 col-end-13 items-center"),m(e,"class","grid grid-rows-1 grid-cols-12 px-10 items-center bg-gray-900 shadow-lg gap-6")},m(N,O){A(N,e,O),d(e,t),d(t,r),d(r,l),d(t,s),C(c,t,null),d(e,a),d(e,i),C(f,i,null),d(i,p),C(_,i,null),d(e,w),d(e,$),d($,D),C(h,D,null),d($,E),d($,R),d(R,I),d($,V),B&&B.m($,null),M=!0},p(N,[O]){var X,G;const J={};O&1&&(J.href=`/namespaces/${N[0]}/workflows`),O&32&&(J.$$scope={dirty:O,ctx:N}),f.$set(J);const Y={};O&1&&(Y.href=`/namespaces/${N[0]}/archival`),O&32&&(Y.$$scope={dirty:O,ctx:N}),_.$set(Y),((G=(X=N[1])==null?void 0:X.auth)==null?void 0:G.enabled)?B?B.p(N,O):(B=De(N),B.c(),B.m($,null)):B&&(B.d(1),B=null)},i(N){M||(b(c.$$.fragment,N),b(f.$$.fragment,N),b(_.$$.fragment,N),b(h.$$.fragment,N),M=!0)},o(N){k(c.$$.fragment,N),k(f.$$.fragment,N),k(_.$$.fragment,N),k(h.$$.fragment,N),M=!1},d(N){N&&u(e),L(c),L(f),L(_),L(h),B&&B.d()}}}function Ut(o,e,t){let r,l,n;return F(o,Be,a=>t(0,r=a)),F(o,tt,a=>t(1,l=a)),F(o,Me,a=>t(2,n=a)),[r,l,n,()=>window.location.assign("/auth/logout"),()=>window.location.assign("/auth/sso")]}class Ft extends K{constructor(e){super();W(this,e,Ut,Rt,Q,{})}}function Te(o,e,t){const r=o.slice();return r[4]=e[t],r}function Se(o,e){let t,r,l=e[4].message+"",n,s,c,a,i,f,p=H,_,w,$;function D(){return e[3](e[4])}return{key:o,first:null,c(){t=g("article"),r=g("p"),n=j(l),s=q(),this.h()},l(h){t=v(h,"ARTICLE",{class:!0});var E=y(t);r=v(E,"P",{});var R=y(r);n=z(R,l),R.forEach(u),s=P(E),E.forEach(u),this.h()},h(){m(t,"class",c="px-8 py-6 mb-4 opacity-90 shadow-lg "+e[4].type+" svelte-2zx94o"),this.first=t},m(h,E){A(h,t,E),d(t,r),d(r,n),d(t,s),_=!0,w||($=ce(t,"click",D),w=!0)},p(h,E){e=h,(!_||E&1)&&l!==(l=e[4].message+"")&&le(n,l),(!_||E&1&&c!==(c="px-8 py-6 mb-4 opacity-90 shadow-lg "+e[4].type+" svelte-2zx94o"))&&m(t,"class",c)},r(){f=t.getBoundingClientRect()},f(){Fe(t),p(),je(t,f)},a(){p(),p=ze(t,f,Je,{})},i(h){_||(Ge(()=>{i&&i.end(1),a=He(t,e[2],{key:e[4].id}),a.start()}),_=!0)},o(h){a&&a.invalidate(),i=Ke(t,e[1],{key:e[4].id}),_=!1},d(h){h&&u(t),h&&i&&i.end(),w=!1,$()}}}function jt(o){let e,t=[],r=new Map,l,n=o[0];const s=c=>c[4].id;for(let c=0;c<n.length;c+=1){let a=Te(o,n,c),i=s(a);r.set(i,t[c]=Se(i,a))}return{c(){e=g("section");for(let c=0;c<t.length;c+=1)t[c].c();this.h()},l(c){e=v(c,"SECTION",{class:!0});var a=y(e);for(let i=0;i<t.length;i+=1)t[i].l(a);a.forEach(u),this.h()},h(){m(e,"class","flex flex-col justify-center absolute w-1/3 top-20 right-4 z-40")},m(c,a){A(c,e,a);for(let i=0;i<t.length;i+=1)t[i].m(e,null);l=!0},p(c,[a]){if(a&1){n=c[0],ee();for(let i=0;i<t.length;i+=1)t[i].r();t=We(t,a,s,1,c,n,r,e,Xe,Se,null,Te);for(let i=0;i<t.length;i+=1)t[i].a();te()}},i(c){if(!l){for(let a=0;a<n.length;a+=1)b(t[a]);l=!0}},o(c){for(let a=0;a<t.length;a+=1)k(t[a]);l=!1},d(c){c&&u(e);for(let a=0;a<t.length;a+=1)t[a].d()}}}function zt(o,e,t){let r;F(o,we,c=>t(0,r=c));const[l,n]=Qe({duration:c=>Math.sqrt(c*100),fallback(c){const a=getComputedStyle(c),i=a.transform==="none"?"":a.transform;return{duration:600,easing:Ye,css:f=>`transform: ${i} scale(${f}); opacity: ${f}`}}});return[r,l,n,c=>we.dismiss(c.id)]}class Gt extends K{constructor(e){super();W(this,e,zt,jt,Q,{})}}const Oe=it("closedBannerId",null),Ht=o=>{Oe.set(o)};function Ce(o){let e,t,r,l,n,s,c,a,i,f;return{c(){e=g("section"),t=g("a"),r=j(o[3]),n=q(),s=g("button"),c=j("\u2715"),this.h()},l(p){e=v(p,"SECTION",{class:!0});var _=y(e);t=v(_,"A",{href:!0,target:!0});var w=y(t);r=z(w,o[3]),w.forEach(u),n=P(_),s=v(_,"BUTTON",{class:!0});var $=y(s);c=z($,"\u2715"),$.forEach(u),_.forEach(u),this.h()},h(){m(t,"href",l="https://github.com/temporalio/temporal/releases/tag/v"+o[2].versionInfo.current.version),m(t,"target","_blank"),m(s,"class","absolute top-0 right-0 mr-5 text-black-600"),m(e,"class",a=ve(`block leading-10 text-center ${o[0]}`)+" svelte-1xgik0j")},m(p,_){A(p,e,_),d(e,t),d(t,r),d(e,n),d(e,s),d(s,c),i||(f=ce(s,"click",o[12]),i=!0)},p(p,_){_&8&&le(r,p[3]),_&4&&l!==(l="https://github.com/temporalio/temporal/releases/tag/v"+p[2].versionInfo.current.version)&&m(t,"href",l),_&1&&a!==(a=ve(`block leading-10 text-center ${p[0]}`)+" svelte-1xgik0j")&&m(e,"class",a)},d(p){p&&u(e),i=!1,f()}}}function Kt(o){let e,t=o[4]&&Ce(o);return{c(){t&&t.c(),e=U()},l(r){t&&t.l(r),e=U()},m(r,l){t&&t.m(r,l),A(r,e,l)},p(r,[l]){r[4]?t?t.p(r,l):(t=Ce(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:H,o:H,d(r){t&&t.d(r),r&&u(e)}}}function Wt(o,e,t){let r,l,n,s,c,a,i,f;F(o,Oe,E=>t(11,i=E)),F(o,Ve,E=>t(2,f=E));var p,_,w,$;const D={High:"high",Medium:"medium",Low:"low"},h=()=>Ht(l.version);return o.$$.update=()=>{o.$$.dirty&36&&t(10,r=t(5,p=f==null?void 0:f.versionInfo)===null||p===void 0?void 0:p.recommended),o.$$.dirty&68&&t(1,l=t(6,_=f==null?void 0:f.versionInfo)===null||_===void 0?void 0:_.current),o.$$.dirty&388&&t(9,n=t(8,$=t(7,w=f==null?void 0:f.versionInfo)===null||w===void 0?void 0:w.alerts)===null||$===void 0?void 0:$[0]),o.$$.dirty&512&&t(0,s=n?D[n.severity]:D.Low),o.$$.dirty&2050&&t(4,c=(l==null?void 0:l.version)&&l.version!=i),o.$$.dirty&1537&&t(3,a=s==D.Low?`\u{1F4E5} v${r==null?void 0:r.version} version is available`:`\u{1F4E5} ${n==null?void 0:n.message}`)},[s,l,f,a,c,p,_,w,$,n,r,i,h]}class Qt extends K{constructor(e){super();W(this,e,Wt,Kt,Q,{})}}function Jt(o){let e;const t=o[8].default,r=ne(t,o,o[7],null);return{c(){r&&r.c()},l(l){r&&r.l(l)},m(l,n){r&&r.m(l,n),e=!0},p(l,n){r&&r.p&&(!e||n&128)&&se(r,t,l,l[7],e?ae(t,l[7],n,null):oe(l[7]),null)},i(l){e||(b(r,l),e=!0)},o(l){k(r,l),e=!1},d(l){r&&r.d(l)}}}function Xt(o){let e,t;return e=new ut({props:{error:o[2]}}),e.$on("clearError",o[3]),{c(){T(e.$$.fragment)},l(r){S(e.$$.fragment,r)},m(r,l){C(e,r,l),t=!0},p(r,l){const n={};l&4&&(n.error=r[2]),e.$set(n)},i(r){t||(b(e.$$.fragment,r),t=!0)},o(r){k(e.$$.fragment,r),t=!1},d(r){L(e,r)}}}function Yt(o){let e,t,r,l;const n=[Xt,Jt],s=[];function c(a,i){return a[1]&&a[2]?0:1}return e=c(o),t=s[e]=n[e](o),{c(){t.c(),r=U()},l(a){t.l(a),r=U()},m(a,i){s[e].m(a,i),A(a,r,i),l=!0},p(a,[i]){let f=e;e=c(a),e===f?s[e].p(a,i):(ee(),k(s[f],1,1,()=>{s[f]=null}),te(),t=s[e],t?t.p(a,i):(t=s[e]=n[e](a),t.c()),b(t,1),t.m(r.parentNode,r))},i(a){l||(b(t),l=!0)},o(a){k(t),l=!1},d(a){s[e].d(a),a&&u(r)}}}function Zt(o,e,t){let r,l,n=H,s=()=>(n(),n=be(_,h=>t(6,l=h)),_),c,a=H,i=()=>(a(),a=be($,h=>t(2,c=h)),$);F(o,re,h=>t(5,r=h)),o.$$.on_destroy.push(()=>n()),o.$$.on_destroy.push(()=>a());let{$$slots:f={},$$scope:p}=e,{error:_=null}=e;s();let{onError:w=null}=e,$;function D(){ke(_,l=null,l),t(4,w=null),i(t(1,$=null)),ke(re,r=null,r)}return o.$$set=h=>{"error"in h&&s(t(0,_=h.error)),"onError"in h&&t(4,w=h.onError),"$$scope"in h&&t(7,p=h.$$scope)},o.$$.update=()=>{o.$$.dirty&115&&(_&&l&&i(t(1,$=_)),re&&r&&i(t(1,$=re)),w&&$&&w($))},[_,$,c,D,w,r,l,p,f]}class xt extends K{constructor(e){super();W(this,e,Zt,Yt,Q,{error:0,onError:4})}}const er=Ze(xt);function tr(o){let e;const t=o[1].default,r=ne(t,o,o[2],null);return{c(){r&&r.c()},l(l){r&&r.l(l)},m(l,n){r&&r.m(l,n),e=!0},p(l,n){r&&r.p&&(!e||n&4)&&se(r,t,l,l[2],e?ae(t,l[2],n,null):oe(l[2]),null)},i(l){e||(b(r,l),e=!0)},o(l){k(r,l),e=!1},d(l){r&&r.d(l)}}}function rr(o){let e,t,r,l,n,s,c,a,i,f,p,_,w,$,D,h,E,R;return i=new Gt({}),p=new Qt({}),w=new Ft({}),E=new er({props:{onError:lr,$$slots:{default:[tr]},$$scope:{ctx:o}}}),{c(){e=g("link"),t=g("link"),r=g("meta"),l=g("meta"),n=g("meta"),s=g("meta"),c=q(),a=g("main"),T(i.$$.fragment),f=q(),T(p.$$.fragment),_=q(),T(w.$$.fragment),$=q(),D=g("section"),h=g("div"),T(E.$$.fragment),this.h()},l(I){const V=xe('[data-svelte="svelte-15ltrtv"]',document.head);e=v(V,"LINK",{rel:!0,href:!0}),t=v(V,"LINK",{rel:!0,href:!0}),r=v(V,"META",{property:!0,content:!0}),l=v(V,"META",{property:!0,content:!0}),n=v(V,"META",{property:!0,content:!0}),s=v(V,"META",{property:!0,content:!0}),V.forEach(u),c=P(I),a=v(I,"MAIN",{class:!0});var M=y(a);S(i.$$.fragment,M),f=P(M),S(p.$$.fragment,M),_=P(M),S(w.$$.fragment,M),$=P(M),D=v(M,"SECTION",{id:!0,class:!0});var B=y(D);h=v(B,"DIV",{class:!0});var x=y(h);S(E.$$.fragment,x),x.forEach(u),B.forEach(u),M.forEach(u),this.h()},h(){document.title="Temporal",m(e,"rel","manifest"),m(e,"href","/site.webmanifest"),m(t,"rel","apple-touch-icon"),m(t,"href","/apple-touch-icon.png"),m(r,"property","og:title"),m(r,"content","Temporal"),m(l,"property","og:type"),m(l,"content","website"),m(n,"property","og:url"),m(n,"content","https://temporal.io"),m(s,"property","og:image"),m(s,"content","/banner.png"),m(h,"class","flex flex-col h-full gap-4"),m(D,"id","content"),m(D,"class","h-full mx-10 mb-10 mt-8"),m(a,"class","flex flex-col h-screen")},m(I,V){d(document.head,e),d(document.head,t),d(document.head,r),d(document.head,l),d(document.head,n),d(document.head,s),A(I,c,V),A(I,a,V),C(i,a,null),d(a,f),C(p,a,null),d(a,_),C(w,a,null),d(a,$),d(a,D),d(D,h),C(E,h,null),R=!0},p(I,[V]){const M={};V&4&&(M.$$scope={dirty:V,ctx:I}),E.$set(M)},i(I){R||(b(i.$$.fragment,I),b(p.$$.fragment,I),b(w.$$.fragment,I),b(E.$$.fragment,I),R=!0)},o(I){k(i.$$.fragment,I),k(p.$$.fragment,I),k(w.$$.fragment,I),k(E.$$.fragment,I),R=!1},d(I){u(e),u(t),u(r),u(l),u(n),u(s),I&&u(c),I&&u(a),L(i),L(p),L(w),L(E)}}}const gr=async function({}){var o;const{namespaces:e}=(o=await me(_e("namespaces"),{request:fetch}))!==null&&o!==void 0?o:{namespaces:[]};return dt(),_t(),rt(),{props:{namespaces:e},stuff:{namespaces:e}}},lr=()=>{};function nr(o,e,t){let{$$slots:r={},$$scope:l}=e,{namespaces:n}=e;return et("namespaces",n),o.$$set=s=>{"namespaces"in s&&t(0,n=s.namespaces),"$$scope"in s&&t(2,l=s.$$scope)},[n,r,l]}class vr extends K{constructor(e){super();W(this,e,nr,rr,Q,{namespaces:0})}}export{vr as default,gr as load};