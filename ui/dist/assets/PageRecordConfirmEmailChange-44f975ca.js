import{S as z,i as G,s as I,F as J,c as S,m as L,t as v,a as y,d as R,C as M,E as N,g as _,k as W,n as Y,o as b,G as j,H as A,p as B,q as D,e as m,w as C,b as h,f as d,r as H,h as k,u as P,v as K,y as E,x as O,z as T}from"./index-71c2755e.js";function Q(r){let e,t,l,s,n,o,c,a,i,u,g,$,p=r[3]&&F(r);return o=new D({props:{class:"form-field required",name:"password",$$slots:{default:[V,({uniqueId:f})=>({8:f}),({uniqueId:f})=>f?256:0]},$$scope:{ctx:r}}}),{c(){e=m("form"),t=m("div"),l=m("h5"),s=C(`Type your password to confirm changing your email address
                    `),p&&p.c(),n=h(),S(o.$$.fragment),c=h(),a=m("button"),i=m("span"),i.textContent="Confirm new email",d(t,"class","content txt-center m-b-base"),d(i,"class","txt"),d(a,"type","submit"),d(a,"class","btn btn-lg btn-block"),a.disabled=r[1],H(a,"btn-loading",r[1])},m(f,w){_(f,e,w),k(e,t),k(t,l),k(l,s),p&&p.m(l,null),k(e,n),L(o,e,null),k(e,c),k(e,a),k(a,i),u=!0,g||($=P(e,"submit",K(r[4])),g=!0)},p(f,w){f[3]?p?p.p(f,w):(p=F(f),p.c(),p.m(l,null)):p&&(p.d(1),p=null);const q={};w&769&&(q.$$scope={dirty:w,ctx:f}),o.$set(q),(!u||w&2)&&(a.disabled=f[1]),(!u||w&2)&&H(a,"btn-loading",f[1])},i(f){u||(v(o.$$.fragment,f),u=!0)},o(f){y(o.$$.fragment,f),u=!1},d(f){f&&b(e),p&&p.d(),R(o),g=!1,$()}}}function U(r){let e,t,l,s,n;return{c(){e=m("div"),e.innerHTML=`<div class="icon"><i class="ri-checkbox-circle-line"></i></div> 
            <div class="content txt-bold"><p>Successfully changed the user email address.</p> 
                <p>You can now sign in with your new email address.</p></div>`,t=h(),l=m("button"),l.textContent="Close",d(e,"class","alert alert-success"),d(l,"type","button"),d(l,"class","btn btn-transparent btn-block")},m(o,c){_(o,e,c),_(o,t,c),_(o,l,c),s||(n=P(l,"click",r[6]),s=!0)},p:E,i:E,o:E,d(o){o&&b(e),o&&b(t),o&&b(l),s=!1,n()}}}function F(r){let e,t,l;return{c(){e=C("to "),t=m("strong"),l=C(r[3]),d(t,"class","txt-nowrap")},m(s,n){_(s,e,n),_(s,t,n),k(t,l)},p(s,n){n&8&&O(l,s[3])},d(s){s&&b(e),s&&b(t)}}}function V(r){let e,t,l,s,n,o,c,a;return{c(){e=m("label"),t=C("Password"),s=h(),n=m("input"),d(e,"for",l=r[8]),d(n,"type","password"),d(n,"id",o=r[8]),n.required=!0,n.autofocus=!0},m(i,u){_(i,e,u),k(e,t),_(i,s,u),_(i,n,u),T(n,r[0]),n.focus(),c||(a=P(n,"input",r[7]),c=!0)},p(i,u){u&256&&l!==(l=i[8])&&d(e,"for",l),u&256&&o!==(o=i[8])&&d(n,"id",o),u&1&&n.value!==i[0]&&T(n,i[0])},d(i){i&&b(e),i&&b(s),i&&b(n),c=!1,a()}}}function X(r){let e,t,l,s;const n=[U,Q],o=[];function c(a,i){return a[2]?0:1}return e=c(r),t=o[e]=n[e](r),{c(){t.c(),l=N()},m(a,i){o[e].m(a,i),_(a,l,i),s=!0},p(a,i){let u=e;e=c(a),e===u?o[e].p(a,i):(W(),y(o[u],1,1,()=>{o[u]=null}),Y(),t=o[e],t?t.p(a,i):(t=o[e]=n[e](a),t.c()),v(t,1),t.m(l.parentNode,l))},i(a){s||(v(t),s=!0)},o(a){y(t),s=!1},d(a){o[e].d(a),a&&b(l)}}}function Z(r){let e,t;return e=new J({props:{nobranding:!0,$$slots:{default:[X]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment)},m(l,s){L(e,l,s),t=!0},p(l,[s]){const n={};s&527&&(n.$$scope={dirty:s,ctx:l}),e.$set(n)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){y(e.$$.fragment,l),t=!1},d(l){R(e,l)}}}function x(r,e,t){let l,{params:s}=e,n="",o=!1,c=!1;async function a(){if(o)return;t(1,o=!0);const g=new j("../");try{const $=A(s==null?void 0:s.token);await g.collection($.collectionId).confirmEmailChange(s==null?void 0:s.token,n),t(2,c=!0)}catch($){B.errorResponseHandler($)}t(1,o=!1)}const i=()=>window.close();function u(){n=this.value,t(0,n)}return r.$$set=g=>{"params"in g&&t(5,s=g.params)},r.$$.update=()=>{r.$$.dirty&32&&t(3,l=M.getJWTPayload(s==null?void 0:s.token).newEmail||"")},[n,o,c,l,a,s,i,u]}class te extends z{constructor(e){super(),G(this,e,x,Z,I,{params:5})}}export{te as default};
