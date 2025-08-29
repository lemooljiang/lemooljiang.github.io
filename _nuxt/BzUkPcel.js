import{v as E,x as H,y as k,z as L,A as V,C as y,D as A,E as O,F as x,G as j,H as S,I as F,J as I,K as v,c as K,o as T,e as $,a,d as D,u as i,L as G}from"./D81w4fj2.js";let w=!1;function J(){if(E&&window.CSS&&!w&&(w=!0,"registerProperty"in window?.CSS))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function M(e){const{heightSmall:n,heightMedium:s,heightLarge:t,borderRadius:r}=e;return{color:"#eee",colorEnd:"#ddd",borderRadius:r,heightSmall:n,heightMedium:s,heightLarge:t}}const W={common:H,self:M},q=k([L("skeleton",`
 height: 1em;
 width: 100%;
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),k("@keyframes skeleton-loading",`
 0% {
 background: var(--n-color-start);
 }
 40% {
 background: var(--n-color-end);
 }
 80% {
 background: var(--n-color-start);
 }
 100% {
 background: var(--n-color-start);
 }
 `)]),Q=Object.assign(Object.assign({},S.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),g=V({name:"Skeleton",inheritAttrs:!1,props:Q,setup(e){J();const{mergedClsPrefixRef:n}=j(e),s=S("Skeleton","-skeleton",q,W,e,n);return{mergedClsPrefix:n,style:F(()=>{var t,r;const l=s.value,{common:{cubicBezierEaseInOut:_}}=l,f=l.self,{color:C,colorEnd:z,borderRadius:B}=f;let c;const{circle:d,sharp:P,round:N,width:o,height:u,size:p,text:b,animated:R}=e;p!==void 0&&(c=f[I("height",p)]);const h=d?(t=o??u)!==null&&t!==void 0?t:c:o,m=(r=d?o??u:u)!==null&&r!==void 0?r:c;return{display:b?"inline-block":"",verticalAlign:b?"-0.125em":"",borderRadius:d?"50%":N?"4096px":P?"":B,width:typeof h=="number"?v(h):h,height:typeof m=="number"?v(m):m,animation:R?"":"none","--n-bezier":_,"--n-color-start":C,"--n-color-end":z}})}},render(){const{repeat:e,style:n,mergedClsPrefix:s,$attrs:t}=this,r=y("div",A({class:`${s}-skeleton`,style:n},t));return e>1?y(x,null,O(e,null).map(l=>[r,`
`])):r}}),X={__name:"Skeleton",setup(e){return(n,s)=>(T(),K(x,null,$(3,t=>a(i(G),{key:t,class:"mb-5"},{default:D(()=>[a(i(g),{text:"",style:{width:"30%"}}),a(i(g),{text:"",repeat:3}),a(i(g),{text:"",style:{width:"60%"}})]),_:2},1024)),64))}};export{X as _};
