import{S as U,i as M,s as Y,l as q,r as F,a as N,w as A,m as W,n as B,u as C,h as $,c as I,x as T,p as w,b as g,M as y,y as P,Y as Z,T as z,v as me,f as v,t as k,B as S,N as O,g as V,d as j,aq as ce,$ as pe,a7 as _e,a8 as $e,e as R,a0 as ue,ab as he,am as de,E as G}from"../../../../chunks/index-0094b5a5.js";import{b as be}from"../../../../chunks/workflow-service-136f4996.js";import{j as ge,S as ve,W as ke,a as we}from"../../../../chunks/search-1ec86562.js";import{p as J}from"../../../../chunks/stores-ac1dd058.js";import{g as x}from"../../../../chunks/navigation-fbe70647.js";import{e as ee}from"../../../../chunks/format-date-2e95557a.js";import{S as ye,a as H}from"../../../../chunks/simple-select-bc88ef6e.js";import{u as Ee,F as te,P as Ae}from"../../../../chunks/pagination-c8b5fbb0.js";import{I as Te}from"../../../../chunks/icon-eae196d4.js";import{t as Q}from"../../../../chunks/time-format-619feca3.js";import{E as Pe}from"../../../../chunks/empty-state-e070d519.js";import{C as K}from"../../../../chunks/code-block-4727d002.js";import{P as Se}from"../../../../chunks/page-title-8763efe6.js";import"../../../../chunks/settings-532907d0.js";import"../../../../chunks/index-d0d31c39.js";import"../../../../chunks/simplify-attributes-34cbbe81.js";import"../../../../chunks/route-for-api-1b5af4f8.js";import"../../../../chunks/route-for-62d7d3b1.js";import"../../../../chunks/get-public-path-6c4a8950.js";import"../../../../chunks/notifications-09a021c6.js";import"../../../../chunks/is-network-error-5f9e2367.js";import"../../../../chunks/is-function-45497f08.js";import"../../../../chunks/table-row-f0cf7532.js";import"../../../../chunks/is-6159121b.js";import"../../../../chunks/workflow-status-ffa067d5.js";import"../../../../chunks/copy-to-clipboard-b744639a.js";import"../../../../chunks/button-0e2f004e.js";import"../../../../chunks/badge-6352ff9b.js";/* empty css                                                              */import"../../../../chunks/singletons-eca981c1.js";import"../../../../chunks/persist-store-d87a031b.js";function Fe(i){let e,n,t,l,o,a,r,s,c,m,p;return a=new Te({props:{name:"search",class:"flex items-center text-gray-700"}}),{c(){e=q("div"),n=q("label"),t=F(i[0]),l=N(),o=q("span"),A(a.$$.fragment),r=N(),s=q("input"),this.h()},l(d){e=W(d,"DIV",{class:!0});var f=B(e);n=W(f,"LABEL",{for:!0,class:!0});var b=B(n);t=C(b,i[0]),b.forEach($),l=I(f),o=W(f,"SPAN",{class:!0});var u=B(o);T(a.$$.fragment,u),u.forEach($),r=I(f),s=W(f,"INPUT",{class:!0,placeholder:!0,id:!0}),f.forEach($),this.h()},h(){w(n,"for",i[2]),w(n,"class","hidden"),w(o,"class","svelte-fxm0nn"),w(s,"class","block w-full focus:outline-none"),w(s,"placeholder",i[0]),w(s,"id",i[2]),w(e,"class","input-container focus-within:border-blue-700 svelte-fxm0nn")},m(d,f){g(d,e,f),y(e,n),y(n,t),y(e,l),y(e,o),P(a,o,null),y(e,r),y(e,s),Z(s,i[1]),c=!0,m||(p=z(s,"input",i[6]),m=!0)},p(d,[f]){(!c||f&1)&&me(t,d[0]),(!c||f&1)&&w(s,"placeholder",d[0]),f&2&&s.value!==d[1]&&Z(s,d[1])},i(d){c||(v(a.$$.fragment,d),c=!0)},o(d){k(a.$$.fragment,d),c=!1},d(d){d&&$(e),S(a),m=!1,p()}}}function Ce(i,e,n){let t;O(i,J,p=>n(5,t=p));let{parameter:l}=e,{name:o}=e,{value:a}=e,r=l&&t.url.searchParams.get(l)||a;const s=`${l||o}-filter`,c=ge(Ee,300);function m(){r=this.value,n(1,r)}return i.$$set=p=>{"parameter"in p&&n(3,l=p.parameter),"name"in p&&n(0,o=p.name),"value"in p&&n(4,a=p.value)},i.$$.update=()=>{i.$$.dirty&42&&c({parameter:l,value:r,url:t.url})},[o,r,s,l,a,t,m]}class le extends U{constructor(e){super(),M(this,e,Ce,Fe,Y,{parameter:3,name:0,value:4})}}function re(i,e,n){const t=i.slice();return t[7]=e[n][0],t[8]=e[n][1],t}function ae(i,e,n){const t=i.slice();return t[8]=e[n],t}function Ne(i){let e,n,t,l,o;return{c(){e=q("a"),n=F("Advanced Search"),this.h()},l(a){e=W(a,"A",{href:!0,class:!0});var r=B(e);n=C(r,"Advanced Search"),r.forEach($),this.h()},h(){w(e,"href",t=i[1].url.pathname+"?query"),w(e,"class","text-blue-700")},m(a,r){g(a,e,r),y(e,n),l||(o=z(e,"click",ce(i[5]("advanced"))),l=!0)},p(a,r){r&2&&t!==(t=a[1].url.pathname+"?query")&&w(e,"href",t)},d(a){a&&$(e),l=!1,o()}}}function Ie(i){let e,n,t,l,o;return{c(){e=q("a"),n=F("Basic Search"),this.h()},l(a){e=W(a,"A",{href:!0,class:!0});var r=B(e);n=C(r,"Basic Search"),r.forEach($),this.h()},h(){w(e,"href",t=i[1].url.pathname),w(e,"class","text-blue-700")},m(a,r){g(a,e,r),y(e,n),l||(o=z(e,"click",ce(i[5]("basic"))),l=!0)},p(a,r){r&2&&t!==(t=a[1].url.pathname)&&w(e,"href",t)},d(a){a&&$(e),l=!1,o()}}}function qe(i){let e,n,t,l,o,a,r,s,c,m,p,d;n=new le({props:{parameter:"workflow-id",name:"Workflow ID",value:Ue}}),l=new le({props:{parameter:"workflow-type",name:"Workflow Type",value:Me}}),a=new te({props:{label:"Time Range",parameter:"time-range",value:"24 hours",$$slots:{default:[De]},$$scope:{ctx:i}}}),s=new te({props:{label:"Workflow Status",parameter:"status",value:null,$$slots:{default:[Ve]},$$scope:{ctx:i}}});function f(u){i[6](u)}let b={id:"filter-by-relative-time",$$slots:{default:[Le]},$$scope:{ctx:i}};return i[2]!==void 0&&(b.value=i[2]),m=new ye({props:b}),pe.push(()=>_e(m,"value",f)),{c(){e=q("div"),A(n.$$.fragment),t=N(),A(l.$$.fragment),o=N(),A(a.$$.fragment),r=N(),A(s.$$.fragment),c=N(),A(m.$$.fragment),this.h()},l(u){e=W(u,"DIV",{class:!0});var _=B(e);T(n.$$.fragment,_),t=I(_),T(l.$$.fragment,_),o=I(_),T(a.$$.fragment,_),r=I(_),T(s.$$.fragment,_),c=I(_),T(m.$$.fragment,_),_.forEach($),this.h()},h(){w(e,"class","grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5")},m(u,_){g(u,e,_),P(n,e,null),y(e,t),P(l,e,null),y(e,o),P(a,e,null),y(e,r),P(s,e,null),y(e,c),P(m,e,null),d=!0},p(u,_){const h={};_&8192&&(h.$$scope={dirty:_,ctx:u}),a.$set(h);const E={};_&8192&&(E.$$scope={dirty:_,ctx:u}),s.$set(E);const D={};_&8192&&(D.$$scope={dirty:_,ctx:u}),!p&&_&4&&(p=!0,D.value=u[2],$e(()=>p=!1)),m.$set(D)},i(u){d||(v(n.$$.fragment,u),v(l.$$.fragment,u),v(a.$$.fragment,u),v(s.$$.fragment,u),v(m.$$.fragment,u),d=!0)},o(u){k(n.$$.fragment,u),k(l.$$.fragment,u),k(a.$$.fragment,u),k(s.$$.fragment,u),k(m.$$.fragment,u),d=!1},d(u){u&&$(e),S(n),S(l),S(a),S(s),S(m)}}}function We(i){let e,n;return e=new ve({props:{icon:!0,placeholder:"Query\u2026",value:i[1].url.searchParams.get("query")}}),e.$on("submit",i[4]),{c(){A(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){P(e,t,l),n=!0},p(t,l){const o={};l&2&&(o.value=t[1].url.searchParams.get("query")),e.$set(o)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){S(e,t)}}}function Be(i){let e=i[8]+"",n;return{c(){n=F(e)},l(t){n=C(t,e)},m(t,l){g(t,n,l)},p:G,d(t){t&&$(n)}}}function ne(i){let e,n;return e=new H({props:{value:i[8],$$slots:{default:[Be]},$$scope:{ctx:i}}}),{c(){A(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){P(e,t,l),n=!0},p(t,l){const o={};l&8192&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){S(e,t)}}}function De(i){let e,n,t=ee,l=[];for(let a=0;a<t.length;a+=1)l[a]=ne(ae(i,t,a));const o=a=>k(l[a],1,1,()=>{l[a]=null});return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=R()},l(a){for(let r=0;r<l.length;r+=1)l[r].l(a);e=R()},m(a,r){for(let s=0;s<l.length;s+=1)l[s].m(a,r);g(a,e,r),n=!0},p(a,r){if(r&0){t=ee;let s;for(s=0;s<t.length;s+=1){const c=ae(a,t,s);l[s]?(l[s].p(c,r),v(l[s],1)):(l[s]=ne(c),l[s].c(),v(l[s],1),l[s].m(e.parentNode,e))}for(V(),s=t.length;s<l.length;s+=1)o(s);j()}},i(a){if(!n){for(let r=0;r<t.length;r+=1)v(l[r]);n=!0}},o(a){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)k(l[r]);n=!1},d(a){ue(l,a),a&&$(e)}}}function Re(i){let e=i[7]+"",n;return{c(){n=F(e)},l(t){n=C(t,e)},m(t,l){g(t,n,l)},p:G,d(t){t&&$(n)}}}function se(i,e){let n,t,l;return t=new H({props:{value:e[8],$$slots:{default:[Re]},$$scope:{ctx:e}}}),{key:i,first:null,c(){n=R(),A(t.$$.fragment),this.h()},l(o){n=R(),T(t.$$.fragment,o),this.h()},h(){this.first=n},m(o,a){g(o,n,a),P(t,o,a),l=!0},p(o,a){e=o;const r={};a&8192&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(o){l||(v(t.$$.fragment,o),l=!0)},o(o){k(t.$$.fragment,o),l=!1},d(o){o&&$(n),S(t,o)}}}function Ve(i){let e=[],n=new Map,t,l,o=Object.entries(i[3]);const a=r=>r[7];for(let r=0;r<o.length;r+=1){let s=re(i,o,r),c=a(s);n.set(c,e[r]=se(c,s))}return{c(){for(let r=0;r<e.length;r+=1)e[r].c();t=R()},l(r){for(let s=0;s<e.length;s+=1)e[s].l(r);t=R()},m(r,s){for(let c=0;c<e.length;c+=1)e[c].m(r,s);g(r,t,s),l=!0},p(r,s){s&8&&(o=Object.entries(r[3]),V(),e=he(e,s,a,1,r,o,n,t.parentNode,de,se,t,re),j())},i(r){if(!l){for(let s=0;s<o.length;s+=1)v(e[s]);l=!0}},o(r){for(let s=0;s<e.length;s+=1)k(e[s]);l=!1},d(r){for(let s=0;s<e.length;s+=1)e[s].d(r);r&&$(t)}}}function je(i){let e;return{c(){e=F("Relative")},l(n){e=C(n,"Relative")},m(n,t){g(n,e,t)},d(n){n&&$(e)}}}function He(i){let e;return{c(){e=F("UTC")},l(n){e=C(n,"UTC")},m(n,t){g(n,e,t)},d(n){n&&$(e)}}}function Oe(i){let e;return{c(){e=F("Local")},l(n){e=C(n,"Local")},m(n,t){g(n,e,t)},d(n){n&&$(e)}}}function Le(i){let e,n,t,l,o,a;return e=new H({props:{value:"relative",$$slots:{default:[je]},$$scope:{ctx:i}}}),t=new H({props:{value:"UTC",$$slots:{default:[He]},$$scope:{ctx:i}}}),o=new H({props:{value:"local",$$slots:{default:[Oe]},$$scope:{ctx:i}}}),{c(){A(e.$$.fragment),n=N(),A(t.$$.fragment),l=N(),A(o.$$.fragment)},l(r){T(e.$$.fragment,r),n=I(r),T(t.$$.fragment,r),l=I(r),T(o.$$.fragment,r)},m(r,s){P(e,r,s),g(r,n,s),P(t,r,s),g(r,l,s),P(o,r,s),a=!0},p(r,s){const c={};s&8192&&(c.$$scope={dirty:s,ctx:r}),e.$set(c);const m={};s&8192&&(m.$$scope={dirty:s,ctx:r}),t.$set(m);const p={};s&8192&&(p.$$scope={dirty:s,ctx:r}),o.$set(p)},i(r){a||(v(e.$$.fragment,r),v(t.$$.fragment,r),v(o.$$.fragment,r),a=!0)},o(r){k(e.$$.fragment,r),k(t.$$.fragment,r),k(o.$$.fragment,r),a=!1},d(r){S(e,r),r&&$(n),S(t,r),r&&$(l),S(o,r)}}}function Qe(i){let e,n,t,l,o,a;function r(f,b){return f[0]?Ie:Ne}let s=r(i),c=s(i);const m=[We,qe],p=[];function d(f,b){return f[0]?0:1}return l=d(i),o=p[l]=m[l](i),{c(){e=q("section"),n=q("p"),c.c(),t=N(),o.c(),this.h()},l(f){e=W(f,"SECTION",{class:!0});var b=B(e);n=W(b,"P",{class:!0});var u=B(n);c.l(u),u.forEach($),t=I(b),o.l(b),b.forEach($),this.h()},h(){w(n,"class","text-right text-xs"),w(e,"class","flex flex-col gap-2")},m(f,b){g(f,e,b),y(e,n),c.m(n,null),y(e,t),p[l].m(e,null),a=!0},p(f,[b]){s===(s=r(f))&&c?c.p(f,b):(c.d(1),c=s(f),c&&(c.c(),c.m(n,null)));let u=l;l=d(f),l===u?p[l].p(f,b):(V(),k(p[u],1,1,()=>{p[u]=null}),j(),o=p[l],o?o.p(f,b):(o=p[l]=m[l](f),o.c()),v(o,1),o.m(e,null))},i(f){a||(v(o),a=!0)},o(f){k(o),a=!1},d(f){f&&$(e),c.d(),p[l].d()}}}let Ue="",Me="";function Ye(i,e,n){let t,l;O(i,J,m=>n(1,t=m)),O(i,Q,m=>n(2,l=m));const o={All:null,"Timed Out":"TimedOut",Completed:"Completed",Failed:"Failed","Continued as New":"ContinuedAsNew",Canceled:"Canceled",Terminated:"Terminated"};let a=t.url.searchParams.has("query");const r=m=>{const d=new FormData(m.target).get("query");t.url.searchParams.set("query",String(d)),x(t.url.toString())},s=m=>p=>{const d=p.target;n(0,a=m==="advanced"),a||t.url.searchParams.delete("query"),x(d.href)};function c(m){l=m,Q.set(l)}return[a,t,l,o,r,s,c]}class ze extends U{constructor(e){super(),M(this,e,Ye,Qe,Y,{})}}function oe(i,e,n){const t=i.slice();return t[7]=e[n],t}function Ge(i){let e,n,t,l,o,a,r,s,c,m,p,d,f,b,u;r=new K({props:{content:`tctl --namespace ${i[0]} namespace update --has enabled`,language:"text",inline:!0}});let _=!i[3]&&ie(i);return{c(){e=q("h2"),n=F("This namespace is currently not enabled for archival."),t=N(),l=q("p"),o=F("Run this command to enable Archival for Event Histories:"),a=N(),A(r.$$.fragment),s=N(),_&&_.c(),c=N(),m=q("p"),p=F("For more details, please check out "),d=q("a"),f=F("Archival documentation"),b=F("."),this.h()},l(h){e=W(h,"H2",{class:!0,"data-cy":!0});var E=B(e);n=C(E,"This namespace is currently not enabled for archival."),E.forEach($),t=I(h),l=W(h,"P",{});var D=B(l);o=C(D,"Run this command to enable Archival for Event Histories:"),D.forEach($),a=I(h),T(r.$$.fragment,h),s=I(h),_&&_.l(h),c=I(h),m=W(h,"P",{});var L=B(m);p=C(L,"For more details, please check out "),d=W(L,"A",{class:!0,href:!0,target:!0});var X=B(d);f=C(X,"Archival documentation"),X.forEach($),b=C(L,"."),L.forEach($),this.h()},h(){w(e,"class","text-2xl"),w(e,"data-cy","archived-disabled-title"),w(d,"class","text-blue-700 underline"),w(d,"href","https://docs.temporal.io/server/archive-data/"),w(d,"target","_blank")},m(h,E){g(h,e,E),y(e,n),g(h,t,E),g(h,l,E),y(l,o),g(h,a,E),P(r,h,E),g(h,s,E),_&&_.m(h,E),g(h,c,E),g(h,m,E),y(m,p),y(m,d),y(d,f),y(m,b),u=!0},p(h,E){const D={};E&1&&(D.content=`tctl --namespace ${h[0]} namespace update --has enabled`),r.$set(D),h[3]?_&&(V(),k(_,1,1,()=>{_=null}),j()):_?(_.p(h,E),E&8&&v(_,1)):(_=ie(h),_.c(),v(_,1),_.m(c.parentNode,c))},i(h){u||(v(r.$$.fragment,h),v(_),u=!0)},o(h){k(r.$$.fragment,h),k(_),u=!1},d(h){h&&$(e),h&&$(t),h&&$(l),h&&$(a),S(r,h),h&&$(s),_&&_.d(h),h&&$(c),h&&$(m)}}}function Je(i){let e,n,t,l,o,a,r,s,c,m,p,d,f,b;return r=new K({props:{content:`tctl --namespace ${i[0]} namespace update -vas enabled`,language:"text",inline:!0}}),{c(){e=q("h2"),n=F(`This namespace is currently enabled for archival but visibility is not
    enabled.`),t=N(),l=q("p"),o=F("To enable Visibility Archival:"),a=N(),A(r.$$.fragment),s=N(),c=q("p"),m=F("For more details, please check out "),p=q("a"),d=F("Archival documentation"),f=F("."),this.h()},l(u){e=W(u,"H2",{class:!0,"data-cy":!0});var _=B(e);n=C(_,`This namespace is currently enabled for archival but visibility is not
    enabled.`),_.forEach($),t=I(u),l=W(u,"P",{});var h=B(l);o=C(h,"To enable Visibility Archival:"),h.forEach($),a=I(u),T(r.$$.fragment,u),s=I(u),c=W(u,"P",{});var E=B(c);m=C(E,"For more details, please check out "),p=W(E,"A",{class:!0,href:!0,target:!0});var D=B(p);d=C(D,"Archival documentation"),D.forEach($),f=C(E,"."),E.forEach($),this.h()},h(){w(e,"class","text-2xl"),w(e,"data-cy","visibility-disabled-title"),w(p,"class","text-blue-700 underline"),w(p,"href","https://docs.temporal.io/server/archive-data/"),w(p,"target","_blank")},m(u,_){g(u,e,_),y(e,n),g(u,t,_),g(u,l,_),y(l,o),g(u,a,_),P(r,u,_),g(u,s,_),g(u,c,_),y(c,m),y(c,p),y(p,d),y(c,f),b=!0},p(u,_){const h={};_&1&&(h.content=`tctl --namespace ${u[0]} namespace update -vas enabled`),r.$set(h)},i(u){b||(v(r.$$.fragment,u),b=!0)},o(u){k(r.$$.fragment,u),b=!1},d(u){u&&$(e),u&&$(t),u&&$(l),u&&$(a),S(r,u),u&&$(s),u&&$(c)}}}function Ke(i){let e,n,t,l,o,a,r,s,c;l=new ze({});const m=[Ze,Xe],p=[];function d(f,b){var u;return(u=f[1])!=null&&u.length?0:1}return a=d(i),r=p[a]=m[a](i),{c(){e=q("h2"),n=F("Archived Workflows"),t=N(),A(l.$$.fragment),o=N(),r.c(),s=R(),this.h()},l(f){e=W(f,"H2",{class:!0,"data-cy":!0});var b=B(e);n=C(b,"Archived Workflows"),b.forEach($),t=I(f),T(l.$$.fragment,f),o=I(f),r.l(f),s=R(),this.h()},h(){w(e,"class","text-2xl"),w(e,"data-cy","archived-enabled-title")},m(f,b){g(f,e,b),y(e,n),g(f,t,b),P(l,f,b),g(f,o,b),p[a].m(f,b),g(f,s,b),c=!0},p(f,b){let u=a;a=d(f),a===u?p[a].p(f,b):(V(),k(p[u],1,1,()=>{p[u]=null}),j(),r=p[a],r?r.p(f,b):(r=p[a]=m[a](f),r.c()),v(r,1),r.m(s.parentNode,s))},i(f){c||(v(l.$$.fragment,f),v(r),c=!0)},o(f){k(l.$$.fragment,f),k(r),c=!1},d(f){f&&$(e),f&&$(t),S(l,f),f&&$(o),p[a].d(f),f&&$(s)}}}function ie(i){let e,n,t,l,o;return l=new K({props:{content:`tctl --namespace ${i[0]} namespace update -vas enabled`,language:"text",inline:!0}}),{c(){e=q("p"),n=F("To enable Visibility Archival:"),t=N(),A(l.$$.fragment)},l(a){e=W(a,"P",{});var r=B(e);n=C(r,"To enable Visibility Archival:"),r.forEach($),t=I(a),T(l.$$.fragment,a)},m(a,r){g(a,e,r),y(e,n),g(a,t,r),P(l,a,r),o=!0},p(a,r){const s={};r&1&&(s.content=`tctl --namespace ${a[0]} namespace update -vas enabled`),l.$set(s)},i(a){o||(v(l.$$.fragment,a),o=!0)},o(a){k(l.$$.fragment,a),o=!1},d(a){a&&$(e),a&&$(t),S(l,a)}}}function Xe(i){let e,n;return e=new Pe({props:{title:"No Workflows Found",content:"If you have filters applied, try adjusting them."}}),{c(){A(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){P(e,t,l),n=!0},p:G,i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){S(e,t)}}}function Ze(i){let e,n;return e=new Ae({props:{items:i[1],$$slots:{default:[et,({visibleItems:t})=>({6:t}),({visibleItems:t})=>t?64:0]},$$scope:{ctx:i}}}),{c(){A(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){P(e,t,l),n=!0},p(t,l){const o={};l&2&&(o.items=t[1]),l&1121&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){S(e,t)}}}function fe(i){let e,n;return e=new we({props:{workflow:i[7],namespace:i[0],timeFormat:i[5]}}),{c(){A(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){P(e,t,l),n=!0},p(t,l){const o={};l&64&&(o.workflow=t[7]),l&1&&(o.namespace=t[0]),l&32&&(o.timeFormat=t[5]),e.$set(o)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){S(e,t)}}}function xe(i){let e,n,t=i[6],l=[];for(let a=0;a<t.length;a+=1)l[a]=fe(oe(i,t,a));const o=a=>k(l[a],1,1,()=>{l[a]=null});return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=R()},l(a){for(let r=0;r<l.length;r+=1)l[r].l(a);e=R()},m(a,r){for(let s=0;s<l.length;s+=1)l[s].m(a,r);g(a,e,r),n=!0},p(a,r){if(r&97){t=a[6];let s;for(s=0;s<t.length;s+=1){const c=oe(a,t,s);l[s]?(l[s].p(c,r),v(l[s],1)):(l[s]=fe(c),l[s].c(),v(l[s],1),l[s].m(e.parentNode,e))}for(V(),s=t.length;s<l.length;s+=1)o(s);j()}},i(a){if(!n){for(let r=0;r<t.length;r+=1)v(l[r]);n=!0}},o(a){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)k(l[r]);n=!1},d(a){ue(l,a),a&&$(e)}}}function et(i){let e,n;return e=new ke({props:{$$slots:{default:[xe]},$$scope:{ctx:i}}}),{c(){A(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){P(e,t,l),n=!0},p(t,l){const o={};l&1121&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){S(e,t)}}}function tt(i){let e,n,t,l,o,a;e=new Se({props:{title:`Archival | ${i[0]}`,url:i[4].url.href}});const r=[Ke,Je,Ge],s=[];function c(m,p){return m[2]&&m[3]?0:m[2]?1:2}return t=c(i),l=s[t]=r[t](i),{c(){A(e.$$.fragment),n=N(),l.c(),o=R()},l(m){T(e.$$.fragment,m),n=I(m),l.l(m),o=R()},m(m,p){P(e,m,p),g(m,n,p),s[t].m(m,p),g(m,o,p),a=!0},p(m,[p]){const d={};p&1&&(d.title=`Archival | ${m[0]}`),p&16&&(d.url=m[4].url.href),e.$set(d);let f=t;t=c(m),t===f?s[t].p(m,p):(V(),k(s[f],1,1,()=>{s[f]=null}),j(),l=s[t],l?l.p(m,p):(l=s[t]=r[t](m),l.c()),v(l,1),l.m(o.parentNode,o))},i(m){a||(v(e.$$.fragment,m),v(l),a=!0)},o(m){k(e.$$.fragment,m),k(l),a=!1},d(m){S(e,m),m&&$(n),s[t].d(m),m&&$(o)}}}const Wt=async function({params:i,url:e,stuff:n}){var t,l;const{searchParams:o}=e;o.has("time-range")||o.set("time-range","1 day");const a=i.namespace,r=o.get("workflow-id"),s=o.get("workflow-type"),c=o.get("time-range"),m=o.get("status"),p={workflowId:r,workflowType:s,closeTime:c,executionStatus:m},f=n.namespaces.find(h=>h.namespaceInfo.name===a),b=((t=f==null?void 0:f.config)===null||t===void 0?void 0:t.historyArchivalState)==="Enabled",u=((l=f==null?void 0:f.config)===null||l===void 0?void 0:l.visibilityArchivalState)==="Enabled",_=b&&u?await be(a,p,fetch):null;return{props:{workflows:_?_.workflows:[],namespace:a,archivalEnabled:b,visibilityArchivalEnabled:u}}};function lt(i,e,n){let t,l;O(i,J,c=>n(4,t=c)),O(i,Q,c=>n(5,l=c));let{namespace:o}=e,{workflows:a}=e,{archivalEnabled:r=!1}=e,{visibilityArchivalEnabled:s=!1}=e;return i.$$set=c=>{"namespace"in c&&n(0,o=c.namespace),"workflows"in c&&n(1,a=c.workflows),"archivalEnabled"in c&&n(2,r=c.archivalEnabled),"visibilityArchivalEnabled"in c&&n(3,s=c.visibilityArchivalEnabled)},[o,a,r,s,t,l]}class Bt extends U{constructor(e){super(),M(this,e,lt,tt,Y,{namespace:0,workflows:1,archivalEnabled:2,visibilityArchivalEnabled:3})}}export{Bt as default,Wt as load};
