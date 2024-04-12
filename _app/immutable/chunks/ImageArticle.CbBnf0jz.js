import{s as Y,e as I,a as T,t as R,c as k,b as q,g as L,f as v,d as w,m,C as O,D as U,i as j,h,j as F,E as Z}from"./scheduler.CJDnJ8nP.js";import{S as y,i as p,t as D,g as x,e as $,b as V,c as ee,a as te,m as le,d as ae}from"./index.DzX9EHo6.js";import{e as J,I as ie}from"./Icon.CJNSCNfa.js";const re={"chevron-right":{width:1280,height:1792,paths:[{d:"M1107 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"}]}};function K(o,e,t){const i=o.slice();return i[7]=e[t],i}function Q(o){let e,t;return{c(){e=I("figcaption"),t=R(o[1])},l(i){e=k(i,"FIGCAPTION",{});var c=q(e);t=w(c,o[1]),c.forEach(v)},m(i,c){j(i,e,c),h(e,t)},p(i,c){c&2&&F(t,i[1])},d(i){i&&v(e)}}}function W(o){let e,t,i,c=o[7].label+"",d,b,u,g;return t=new ie({props:{data:re}}),{c(){e=I("a"),ee(t.$$.fragment),i=T(),d=R(c),b=T(),this.h()},l(f){e=k(f,"A",{class:!0,href:!0,role:!0});var a=q(e);te(t.$$.fragment,a),i=L(a),d=w(a,c),b=L(a),a.forEach(v),this.h()},h(){m(e,"class","iroco-ui-button iroco-ui-button--small iroco-ui-button--dark svelte-x71obz"),m(e,"href",u=o[7].href),m(e,"role","button")},m(f,a){j(f,e,a),le(t,e,null),h(e,i),h(e,d),h(e,b),g=!0},p(f,a){(!g||a&32)&&c!==(c=f[7].label+"")&&F(d,c),(!g||a&32&&u!==(u=f[7].href))&&m(e,"href",u)},i(f){g||(D(t.$$.fragment,f),g=!0)},o(f){V(t.$$.fragment,f),g=!1},d(f){f&&v(e),ae(t)}}}function ne(o){let e,t,i,c,d,b,u,g,f,a,A,G,M,z,C,_=o[1]&&Q(o),S=J(o[5]),n=[];for(let l=0;l<S.length;l+=1)n[l]=W(K(o,S,l));const X=l=>V(n[l],1,1,()=>{n[l]=null});return{c(){e=I("div"),t=I("figure"),i=I("img"),d=T(),_&&_.c(),b=T(),u=I("article"),g=I("h1"),f=R(o[3]),a=T(),A=I("p"),G=R(o[4]),M=T(),z=I("div");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=k(l,"DIV",{class:!0});var s=q(e);t=k(s,"FIGURE",{class:!0});var r=q(t);i=k(r,"IMG",{class:!0,src:!0,alt:!0}),d=L(r),_&&_.l(r),r.forEach(v),b=L(s),u=k(s,"ARTICLE",{class:!0});var E=q(u);g=k(E,"H1",{});var B=q(g);f=w(B,o[3]),B.forEach(v),a=L(E),A=k(E,"P",{});var H=q(A);G=w(H,o[4]),H.forEach(v),M=L(E),z=k(E,"DIV",{class:!0});var N=q(z);for(let P=0;P<n.length;P+=1)n[P].l(N);N.forEach(v),E.forEach(v),s.forEach(v),this.h()},h(){m(i,"class","imagearticle__figure__image svelte-x71obz"),O(i.src,c=o[0])||m(i,"src",c),m(i,"alt",o[2]),m(t,"class","imagearticle__figure svelte-x71obz"),m(z,"class","imagearticle__article__buttonGroup svelte-x71obz"),m(u,"class","imagearticle__article svelte-x71obz"),m(e,"class","imagearticle svelte-x71obz"),U(e,"reversed",o[6])},m(l,s){j(l,e,s),h(e,t),h(t,i),h(t,d),_&&_.m(t,null),h(e,b),h(e,u),h(u,g),h(g,f),h(u,a),h(u,A),h(A,G),h(u,M),h(u,z);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(z,null);C=!0},p(l,[s]){if((!C||s&1&&!O(i.src,c=l[0]))&&m(i,"src",c),(!C||s&4)&&m(i,"alt",l[2]),l[1]?_?_.p(l,s):(_=Q(l),_.c(),_.m(t,null)):_&&(_.d(1),_=null),(!C||s&8)&&F(f,l[3]),(!C||s&16)&&F(G,l[4]),s&32){S=J(l[5]);let r;for(r=0;r<S.length;r+=1){const E=K(l,S,r);n[r]?(n[r].p(E,s),D(n[r],1)):(n[r]=W(E),n[r].c(),D(n[r],1),n[r].m(z,null))}for(x(),r=S.length;r<n.length;r+=1)X(r);$()}(!C||s&64)&&U(e,"reversed",l[6])},i(l){if(!C){for(let s=0;s<S.length;s+=1)D(n[s]);C=!0}},o(l){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)V(n[s]);C=!1},d(l){l&&v(e),_&&_.d(),Z(n,l)}}}function se(o,e,t){let{imgSrc:i}=e,{figureCaption:c=void 0}=e,{alt:d}=e,{articleTitle:b}=e,{articleContent:u}=e,{buttonList:g=[]}=e,{reversed:f=!1}=e;return o.$$set=a=>{"imgSrc"in a&&t(0,i=a.imgSrc),"figureCaption"in a&&t(1,c=a.figureCaption),"alt"in a&&t(2,d=a.alt),"articleTitle"in a&&t(3,b=a.articleTitle),"articleContent"in a&&t(4,u=a.articleContent),"buttonList"in a&&t(5,g=a.buttonList),"reversed"in a&&t(6,f=a.reversed)},[i,c,d,b,u,g,f]}class ue extends y{constructor(e){super(),p(this,e,se,ne,Y,{imgSrc:0,figureCaption:1,alt:2,articleTitle:3,articleContent:4,buttonList:5,reversed:6})}}export{ue as I};
