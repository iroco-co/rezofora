import{S as x,o as K,k as Y,l as b,m as j,q as g,U as l,u as A,v as o,w as L,x as z,g as G,y as H,z as Z,A as $,B as J,R as V,C as q,D as Q,P as W,E as C,F,G as X,H as k,I as p,J as ee,K as re,M as te,N as ae}from"./utils.DhO5QomL.js";import{d as ne}from"./disclose-version.DJYIB9VQ.js";function E(f,v=null,y){if(typeof f!="object"||f===null||x in f)return f;const P=G(f);if(P!==K&&P!==Y)return f;var i=new Map,c=H(f),R=b(0);c&&i.set("length",b(f.length));var m;return new Proxy(f,{defineProperty(n,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&j();var t=i.get(e);return t===void 0?(t=b(r.value),i.set(e,t)):g(t,E(r.value,m)),!0},deleteProperty(n,e){var r=i.get(e);if(r===void 0)e in n&&i.set(e,b(l));else{if(c&&typeof e=="string"){var t=i.get("length"),a=Number(e);Number.isInteger(a)&&a<t.v&&g(t,a)}g(r,l),M(R)}return!0},get(n,e,r){var _;if(e===x)return f;var t=i.get(e),a=e in n;if(t===void 0&&(!a||(_=A(n,e))!=null&&_.writable)&&(t=b(E(a?n[e]:l,m)),i.set(e,t)),t!==void 0){var u=o(t);return u===l?void 0:u}return Reflect.get(n,e,r)},getOwnPropertyDescriptor(n,e){var r=Reflect.getOwnPropertyDescriptor(n,e);if(r&&"value"in r){var t=i.get(e);t&&(r.value=o(t))}else if(r===void 0){var a=i.get(e),u=a==null?void 0:a.v;if(a!==void 0&&u!==l)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return r},has(n,e){var u;if(e===x)return!0;var r=i.get(e),t=r!==void 0&&r.v!==l||Reflect.has(n,e);if(r!==void 0||L!==null&&(!t||(u=A(n,e))!=null&&u.writable)){r===void 0&&(r=b(t?E(n[e],m):l),i.set(e,r));var a=o(r);if(a===l)return!1}return t},set(n,e,r,t){var S;var a=i.get(e),u=e in n;if(c&&e==="length")for(var _=r;_<a.v;_+=1){var d=i.get(_+"");d!==void 0?g(d,l):_ in n&&(d=b(l),i.set(_+"",d))}a===void 0?(!u||(S=A(n,e))!=null&&S.writable)&&(a=b(void 0),g(a,E(r,m)),i.set(e,a)):(u=a.v!==l,g(a,E(r,m)));var w=Reflect.getOwnPropertyDescriptor(n,e);if(w!=null&&w.set&&w.set.call(t,r),!u){if(c&&typeof e=="string"){var N=i.get("length"),I=Number(e);Number.isInteger(I)&&I>=N.v&&g(N,I+1)}M(R)}return!0},ownKeys(n){o(R);var e=Reflect.ownKeys(n).filter(a=>{var u=i.get(a);return u===void 0||u.v!==l});for(var[r,t]of i)t.v!==l&&!(r in n)&&e.push(r);return e},setPrototypeOf(){z()}})}function M(f,v=1){g(f,f.v+v)}function U(f){for(var v=L,y=L;v!==null&&!(v.f&(J|V));)v=v.parent;try{return q(v),f()}finally{q(y)}}function ue(f,v,y,P){var B;var i=(y&ee)!==0,c=!Q||(y&W)!==0,R=(y&re)!==0,m=(y&te)!==0,n=!1,e;R?[e,n]=ne(()=>f[v]):e=f[v];var r=(B=A(f,v))==null?void 0:B.set,t=P,a=!0,u=!1,_=()=>(u=!0,a&&(a=!1,m?t=C(P):t=P),t);e===void 0&&P!==void 0&&(r&&c&&Z(),e=_(),r&&r(e));var d;if(c)d=()=>{var s=f[v];return s===void 0?_():(a=!0,u=!1,s)};else{var w=U(()=>(i?F:X)(()=>f[v]));w.f|=$,d=()=>{var s=o(w);return s!==void 0&&(t=void 0),s===void 0?t:s}}if(!(y&k))return d;if(r){var N=f.$$legacy;return function(s,h){return arguments.length>0?((!c||!h||N||n)&&r(h?d():s),s):d()}}var I=!1,S=!1,D=ae(e),O=U(()=>F(()=>{var s=d(),h=o(D);return I?(I=!1,S=!0,h):(S=!1,D.v=s)}));return i||(O.equals=p),function(s,h){if(arguments.length>0){const T=h?o(O):c&&R?E(s):s;return O.equals(T)||(I=!0,g(D,T),u&&t!==void 0&&(t=T),C(()=>o(O))),s}return o(O)}}export{E as a,ue as p};
