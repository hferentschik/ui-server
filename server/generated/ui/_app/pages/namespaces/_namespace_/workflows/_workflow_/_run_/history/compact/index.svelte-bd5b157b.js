import{S as s,i,s as a,w as p,x as c,y as u,q as f,o as g,B as l}from"../../../../../../../../chunks/index-b54af4f8.js";import{b as _}from"../../../../../../../../chunks/get-event-categorization-b2bce139.js";import{E as $}from"../../../../../../../../chunks/event-summary-84d3fbb5.js";import"../../../../../../../../chunks/time-format-cc40e8ba.js";import"../../../../../../../../chunks/stores-8d1899da.js";import"../../../../../../../../chunks/index-4543480f.js";import"../../../../../../../../chunks/index.es-49fdf6ab.js";import"../../../../../../../../chunks/navigation-3f1ea447.js";import"../../../../../../../../chunks/singletons-d1fb5791.js";import"../../../../../../../../chunks/select-55faab43.js";import"../../../../../../../../chunks/persist-store-dac8aba1.js";import"../../../../../../../../chunks/index-f6579e91.js";import"../../../../../../../../chunks/event-filters-62656e1f.js";import"../../../../../../../../chunks/event-view-type-9c264099.js";import"../../../../../../../../chunks/route-for-cefdc941.js";import"../../../../../../../../chunks/index-4ded5477.js";import"../../../../../../../../chunks/format-date-4b1bc9ef.js";import"../../../../../../../../chunks/format-camel-case-e53adac1.js";import"../../../../../../../../chunks/code-block-df5d9a48.js";import"../../../../../../../../chunks/link-039c2d65.js";import"../../../../../../../../chunks/copyable-912ad4f4.js";import"../../../../../../../../chunks/empty-state-490eee68.js";function v(m){let e,o;return e=new $({props:{items:m[0],groups:m[0],compact:!0}}),{c(){p(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,r){u(e,t,r),o=!0},p(t,[r]){const n={};r&1&&(n.items=t[0]),r&1&&(n.groups=t[0]),e.$set(n)},i(t){o||(f(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){l(e,t)}}}const L=async function({stuff:m,url:e}){const o=e.searchParams.get("category"),t=_(m.eventGroups,o);return{props:{items:t},stuff:{matchingEventGroups:t}}};function y(m,e,o){let{items:t}=e;return m.$$set=r=>{"items"in r&&o(0,t=r.items)},[t]}class M extends s{constructor(e){super(),i(this,e,y,v,a,{items:0})}}export{M as default,L as load};