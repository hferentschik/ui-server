import{S as a,i as u,s as c,w as f,x as g,y as _,f as l,t as y,B as E,N as s}from"../../../../../../../../chunks/index-8e660855.js";import{p as $}from"../../../../../../../../chunks/stores-8ff78576.js";import{a as d}from"../../../../../../../../chunks/import-events-e7144445.js";import{E as h}from"../../../../../../../../chunks/event-summary-75da134f.js";import"../../../../../../../../chunks/index-71be9f1c.js";import"../../../../../../../../chunks/event-view-865ecd31.js";import"../../../../../../../../chunks/persist-store-09ca1357.js";import"../../../../../../../../chunks/is-function-45497f08.js";import"../../../../../../../../chunks/settings-26160864.js";import"../../../../../../../../chunks/version-check-ee13dce7.js";import"../../../../../../../../chunks/is-6159121b.js";import"../../../../../../../../chunks/pagination-bfae1b04.js";import"../../../../../../../../chunks/navigation-fbe70647.js";import"../../../../../../../../chunks/singletons-eca981c1.js";import"../../../../../../../../chunks/simple-select-9ab7cf79.js";import"../../../../../../../../chunks/icon-f15e3c1c.js";import"../../../../../../../../chunks/index-77c8c021.js";import"../../../../../../../../chunks/get-event-categorization-2cfb578f.js";import"../../../../../../../../chunks/time-format-bdd9716f.js";import"../../../../../../../../chunks/index-9319d41b.js";import"../../../../../../../../chunks/has-ae9b6b71.js";import"../../../../../../../../chunks/format-date-2e95557a.js";import"../../../../../../../../chunks/format-event-attributes-514017fa.js";import"../../../../../../../../chunks/route-for-62d7d3b1.js";import"../../../../../../../../chunks/get-public-path-6c4a8950.js";import"../../../../../../../../chunks/code-block-e41441df.js";import"../../../../../../../../chunks/copy-to-clipboard-2ccea087.js";import"../../../../../../../../chunks/link-510f40bd.js";import"../../../../../../../../chunks/copyable-b802495d.js";import"../../../../../../../../chunks/empty-state-80058665.js";function v(o){let r,m;return r=new h({props:{items:o[1],groups:o[0],compact:!0}}),{c(){f(r.$$.fragment)},l(t){g(r.$$.fragment,t)},m(t,e){_(r,t,e),m=!0},p(t,[e]){const p={};e&2&&(p.items=t[1]),e&1&&(p.groups=t[0]),r.$set(p)},i(t){m||(l(r.$$.fragment,t),m=!0)},o(t){y(r.$$.fragment,t),m=!1},d(t){E(r,t)}}}function G(o,r,m){let t,e,p,n;return s(o,d,i=>m(0,p=i)),s(o,$,i=>m(3,n=i)),o.$$.update=()=>{o.$$.dirty&8&&m(2,t=n.url.searchParams.get("category")),o.$$.dirty&5&&m(1,e=p.filter(i=>t?i.category===t:i))},[p,e,t,n]}class Z extends a{constructor(r){super(),u(this,r,G,v,c,{})}}export{Z as default};