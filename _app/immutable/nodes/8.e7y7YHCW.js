import{s as H,a as S,e as v,t as A,l as N,f as h,g as q,c as g,b,d as D,o as $,i as j,h as p,j as P,n as y,v as T,k as U}from"../chunks/scheduler.CjaO5lo1.js";import{e as x}from"../chunks/each.D6YF6ztN.js";import{S as V,i as z}from"../chunks/index.BT6mGTgk.js";import{$ as B}from"../chunks/runtime.CPoaif1E.js";import{b as F}from"../chunks/paths.CKWtuP-N.js";const C={"/":!0,"/about":!1,"/faq":!1,"/inspire":!1,"/legal":!1,"/showcase":!1,"/sitemap":!1,"/support":!1,"/training":!1};function L(n,s,o){const l=n.slice();return l[1]=s[o],l}function w(n){let s,o,l=n[1]+"",i;return{c(){s=v("li"),o=v("a"),i=A(l),this.h()},l(r){s=g(r,"LI",{});var c=b(s);o=g(c,"A",{href:!0});var m=b(o);i=D(m,l),m.forEach(h),c.forEach(h),this.h()},h(){$(o,"href",F+n[1])},m(r,c){j(r,s,c),p(s,o),p(o,i)},p:y,d(r){r&&h(s)}}}function G(n){let s,o,l,i,r,c=n[0]("sitemap.title")+"",m,E,u;document.title=s=n[0]("sitemap.title");let d=x(Object.keys(C)),a=[];for(let e=0;e<d.length;e+=1)a[e]=w(L(n,d,e));return{c(){o=S(),l=v("div"),i=v("section"),r=v("h1"),m=A(c),E=S(),u=v("ul");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){N("svelte-225e99",document.head).forEach(h),o=q(e),l=g(e,"DIV",{class:!0});var t=b(l);i=g(t,"SECTION",{class:!0});var _=b(i);r=g(_,"H1",{});var I=b(r);m=D(I,c),I.forEach(h),E=q(_),u=g(_,"UL",{});var O=b(u);for(let k=0;k<a.length;k+=1)a[k].l(O);O.forEach(h),_.forEach(h),t.forEach(h),this.h()},h(){$(i,"class","sitemap"),$(l,"class","sitemap")},m(e,f){j(e,o,f),j(e,l,f),p(l,i),p(i,r),p(r,m),p(i,E),p(i,u);for(let t=0;t<a.length;t+=1)a[t]&&a[t].m(u,null)},p(e,[f]){if(f&1&&s!==(s=e[0]("sitemap.title"))&&(document.title=s),f&1&&c!==(c=e[0]("sitemap.title")+"")&&P(m,c),f&0){d=x(Object.keys(C));let t;for(t=0;t<d.length;t+=1){const _=L(e,d,t);a[t]?a[t].p(_,f):(a[t]=w(_),a[t].c(),a[t].m(u,null))}for(;t<a.length;t+=1)a[t].d(1);a.length=d.length}},i:y,o:y,d(e){e&&(h(o),h(l)),T(a,e)}}}function J(n,s,o){let l;return U(n,B,i=>o(0,l=i)),[l]}class X extends V{constructor(s){super(),z(this,s,J,G,H,{})}}export{X as component};
