import{S as Oe,i as Fe,s as He,e as d,t as H,k as V,c as m,a as p,h as L,d as _,m as C,b as w,g as Ve,L as a,j as fe,o as A,p as re,q as x,w as G,x as J,y as U,T as X,B as Z,a1 as Le,n as ae,at as Pe,P as ne,aC as Ce,aH as We}from"../../../../../../chunks/vendor-9a5c5afd.js";import{r as Ee,a as Ie}from"../../../../../../chunks/route-for-api-01fa3ce9.js";import{f as Qe}from"../../../../../../chunks/format-date-6527f144.js";import{E as Se}from"../../../../../../chunks/empty-state-785090b6.js";import"../../../../../../chunks/navigation-093db9e2.js";import"../../../../../../chunks/singletons-a6a7384f.js";import"../../../../../../chunks/notifications-db2a548d.js";import"../../../../../../chunks/is-network-error-ac7c8caf.js";async function qe(u,e=fetch){const l=await Ee(Ie("task-queue",u),{request:e,params:{taskQueueType:"1"}}),t=await Ee(Ie("task-queue",u),{request:e,params:{taskQueueType:"2"}});t.pollers.forEach(c=>{c.taskQueueTypes=["ACTIVITY"]}),l.pollers.forEach(c=>{c.taskQueueTypes=["WORKFLOW"]});const r=c=>(o,k)=>{const h=o[k.identity]||{lastAccessTime:void 0,taskQueueTypes:[]};return o[k.identity]={lastAccessTime:!h.lastAccessTime||h.lastAccessTime<k.lastAccessTime?k.lastAccessTime:h.lastAccessTime,taskQueueTypes:h.taskQueueTypes.concat([c])},o};return t.pollers.filter(c=>l.pollers.some(o=>{if(c.identity===o.identity)return c.taskQueueTypes=[...o.taskQueueTypes,...c.taskQueueTypes],c})),t.pollers.reduce(r("ACTIVITY"),l.pollers.reduce(r("WORKFLOW"),{})),{pollers:t.pollers,taskQueueStatus:t.taskQueueStatus}}function Ae(u,e,l){const t=u.slice();return t[2]=e[l],t}function xe(u){let e,l;return e=new Se({props:{title:"No Workers Found"}}),{c(){G(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,r){U(e,t,r),l=!0},p:X,i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function Re(u){let e,l;return e=new ne({props:{icon:Ce,color:"black"}}),{c(){G(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,r){U(e,t,r),l=!0},p:X,i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function Ke(u){let e,l;return e=new ne({props:{icon:We,color:"blue"}}),{c(){G(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,r){U(e,t,r),l=!0},p:X,i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function Ne(u){let e,l;return e=new ne({props:{icon:Ce,color:"black"}}),{c(){G(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,r){U(e,t,r),l=!0},p:X,i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function Ye(u){let e,l;return e=new ne({props:{icon:We,color:"blue"}}),{c(){G(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,r){U(e,t,r),l=!0},p:X,i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function De(u,e){let l,t,r,c,o,k,h,T,D,i,n,s,v,P,b,R,j=e[2].identity+"",ee,oe,K,B,M,z=Qe(e[2].lastAccessTime)+"",te,ce,S,le,$,y,ie,q,se,E,I,ue,N;const _e=[Ke,Re],W=[];function de(g,f){return f&1&&(le=null),le==null&&(le=!!g[2].taskQueueTypes.includes("WORKFLOW")),le?0:1}$=de(e,-1),y=W[$]=_e[$](e);const me=[Ye,Ne],O=[];function pe(g,f){return f&1&&(se=null),se==null&&(se=!!g[2].taskQueueTypes.includes("ACTIVITY")),se?0:1}return E=pe(e,-1),I=O[E]=me[E](e),{key:u,first:null,c(){l=d("section"),t=d("div"),r=d("div"),c=H("ID"),o=V(),k=d("div"),h=H("Last Accessed"),T=V(),D=d("div"),i=H("Workflow Task Handler"),n=V(),s=d("div"),v=H("Activity Handler"),P=V(),b=d("article"),R=d("div"),ee=H(j),oe=V(),K=d("div"),B=d("h3"),M=d("p"),te=H(z),ce=V(),S=d("div"),y.c(),ie=V(),q=d("div"),I.c(),ue=V(),this.h()},l(g){l=m(g,"SECTION",{class:!0});var f=p(l);t=m(f,"DIV",{class:!0});var Q=p(t);r=m(Q,"DIV",{class:!0});var Y=p(r);c=L(Y,"ID"),Y.forEach(_),o=C(Q),k=m(Q,"DIV",{class:!0});var ke=p(k);h=L(ke,"Last Accessed"),ke.forEach(_),T=C(Q),D=m(Q,"DIV",{class:!0});var he=p(D);i=L(he,"Workflow Task Handler"),he.forEach(_),n=C(Q),s=m(Q,"DIV",{class:!0});var ve=p(s);v=L(ve,"Activity Handler"),ve.forEach(_),Q.forEach(_),P=C(f),b=m(f,"ARTICLE",{class:!0});var F=p(b);R=m(F,"DIV",{class:!0});var ge=p(R);ee=L(ge,j),ge.forEach(_),oe=C(F),K=m(F,"DIV",{class:!0});var we=p(K);B=m(we,"H3",{});var Te=p(B);M=m(Te,"P",{});var be=p(M);te=L(be,z),be.forEach(_),Te.forEach(_),we.forEach(_),ce=C(F),S=m(F,"DIV",{class:!0});var $e=p(S);y.l($e),$e.forEach(_),ie=C(F),q=m(F,"DIV",{class:!0});var ye=p(q);I.l(ye),ye.forEach(_),F.forEach(_),ue=C(f),f.forEach(_),this.h()},h(){w(r,"class","w-3/12 text-left"),w(k,"class","w-3/12 text-left"),w(D,"class","w-3/12 text-left"),w(s,"class","w-2/12 text-left"),w(t,"class","bg-gray-200 flex flex-row p-2"),w(R,"class","links w-3/12 text-left"),w(K,"class","links w-3/12 text-left"),w(S,"class","w-3/12 text-left"),w(q,"class","w-3/12 text-left"),w(b,"class","w-full h-full flex flex-row border-b-2 last:border-b-0 no-underline p-2"),w(l,"class","flex flex-col border-2 border-gray-300 w-full rounded-lg"),this.first=l},m(g,f){Ve(g,l,f),a(l,t),a(t,r),a(r,c),a(t,o),a(t,k),a(k,h),a(t,T),a(t,D),a(D,i),a(t,n),a(t,s),a(s,v),a(l,P),a(l,b),a(b,R),a(R,ee),a(b,oe),a(b,K),a(K,B),a(B,M),a(M,te),a(b,ce),a(b,S),W[$].m(S,null),a(b,ie),a(b,q),O[E].m(q,null),a(l,ue),N=!0},p(g,f){e=g,(!N||f&1)&&j!==(j=e[2].identity+"")&&fe(ee,j),(!N||f&1)&&z!==(z=Qe(e[2].lastAccessTime)+"")&&fe(te,z);let Q=$;$=de(e,f),$===Q?W[$].p(e,f):(ae(),A(W[Q],1,1,()=>{W[Q]=null}),re(),y=W[$],y?y.p(e,f):(y=W[$]=_e[$](e),y.c()),x(y,1),y.m(S,null));let Y=E;E=pe(e,f),E===Y?O[E].p(e,f):(ae(),A(O[Y],1,1,()=>{O[Y]=null}),re(),I=O[E],I?I.p(e,f):(I=O[E]=me[E](e),I.c()),x(I,1),I.m(q,null))},i(g){N||(x(y),x(I),N=!0)},o(g){A(y),A(I),N=!1},d(g){g&&_(l),W[$].d(),O[E].d()}}}function je(u){let e,l,t,r,c,o=[],k=new Map,h,T=u[0].pollers;const D=n=>n[2].identity;for(let n=0;n<T.length;n+=1){let s=Ae(u,T,n),v=D(s);k.set(v,o[n]=De(v,s))}let i=null;return T.length||(i=xe()),{c(){e=d("section"),l=d("h3"),t=H("Task Queue: "),r=H(u[1]),c=V();for(let n=0;n<o.length;n+=1)o[n].c();i&&i.c(),this.h()},l(n){e=m(n,"SECTION",{class:!0});var s=p(e);l=m(s,"H3",{class:!0});var v=p(l);t=L(v,"Task Queue: "),r=L(v,u[1]),v.forEach(_),c=C(s);for(let P=0;P<o.length;P+=1)o[P].l(s);i&&i.l(s),s.forEach(_),this.h()},h(){w(l,"class","text-lg font-medium"),w(e,"class","flex flex-col gap-4")},m(n,s){Ve(n,e,s),a(e,l),a(l,t),a(l,r),a(e,c);for(let v=0;v<o.length;v+=1)o[v].m(e,null);i&&i.m(e,null),h=!0},p(n,[s]){(!h||s&2)&&fe(r,n[1]),s&1&&(T=n[0].pollers,ae(),o=Le(o,s,D,1,n,T,k,e,Pe,De,null,Ae),re(),!T.length&&i?i.p(n,s):T.length?i&&(ae(),A(i,1,1,()=>{i=null}),re()):(i=xe(),i.c(),x(i,1),i.m(e,null)))},i(n){if(!h){for(let s=0;s<T.length;s+=1)x(o[s]);h=!0}},o(n){for(let s=0;s<o.length;s+=1)A(o[s]);h=!1},d(n){n&&_(e);for(let s=0;s<o.length;s+=1)o[s].d();i&&i.d()}}}const tt=async function({params:u,stuff:e}){const{namespace:l}=u,{workflow:t}=e,{taskQueue:r}=t;return{props:{workers:await qe({queue:r,namespace:l}),taskQueue:r}}};function Be(u,e,l){let{workers:t}=e,{taskQueue:r}=e;return u.$$set=c=>{"workers"in c&&l(0,t=c.workers),"taskQueue"in c&&l(1,r=c.taskQueue)},[t,r]}class lt extends Oe{constructor(e){super();Fe(this,e,Be,je,He,{workers:0,taskQueue:1})}}export{lt as default,tt as load};
