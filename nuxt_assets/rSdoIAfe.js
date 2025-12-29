import{k as E,a4 as V,a5 as k,a6 as A,d as H,h as y,m as L,a7 as O,F as x,u as j,a8 as S,c as F,a9 as T,p as v,q as $,s as q,C as I,y as s,A as K,x as i,aa as M}from"#entry";let w=!1;function W(){if(E&&window.CSS&&!w&&(w=!0,"registerProperty"in window?.CSS))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function D(e){const{heightSmall:n,heightMedium:a,heightLarge:t,borderRadius:r}=e;return{color:"#eee",colorEnd:"#ddd",borderRadius:r,heightSmall:n,heightMedium:a,heightLarge:t}}const G={common:V,self:D},J=k([A("skeleton",`
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
 `)]),Q=Object.assign(Object.assign({},S.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),g=H({name:"Skeleton",inheritAttrs:!1,props:Q,setup(e){W();const{mergedClsPrefixRef:n}=j(e),a=S("Skeleton","-skeleton",J,G,e,n);return{mergedClsPrefix:n,style:F(()=>{var t,r;const l=a.value,{common:{cubicBezierEaseInOut:_}}=l,f=l.self,{color:C,colorEnd:B,borderRadius:z}=f;let c;const{circle:d,sharp:P,round:N,width:o,height:u,size:p,text:b,animated:R}=e;p!==void 0&&(c=f[T("height",p)]);const h=d?(t=o??u)!==null&&t!==void 0?t:c:o,m=(r=d?o??u:u)!==null&&r!==void 0?r:c;return{display:b?"inline-block":"",verticalAlign:b?"-0.125em":"",borderRadius:d?"50%":N?"4096px":P?"":z,width:typeof h=="number"?v(h):h,height:typeof m=="number"?v(m):m,animation:R?"":"none","--n-bezier":_,"--n-color-start":C,"--n-color-end":B}})}},render(){const{repeat:e,style:n,mergedClsPrefix:a,$attrs:t}=this,r=y("div",L({class:`${a}-skeleton`,style:n},t));return e>1?y(x,null,O(e,null).map(l=>[r,`
`])):r}}),X={__name:"Skeleton",setup(e){return(n,a)=>(q(),$(x,null,I(3,t=>s(i(M),{key:t,class:"mb-5"},{default:K(()=>[s(i(g),{text:"",style:{width:"30%"}}),s(i(g),{text:"",repeat:3}),s(i(g),{text:"",style:{width:"60%"}})]),_:1})),64))}};export{X as _};
