import{k as K,I as $,b9 as ve,bM as pe,x as we,A as U,al as j,C as a,b2 as ye,aX as q,D as Ce,bH as G,a_ as L,r as H,R as Q,G as Z,bK as Se,aY as xe,a9 as $e,aZ as ze,bN as Be,bO as A,X as P,ai as Re,aj as ke,ah as Ee,y as i,bP as I,z as v,aV as x,aU as E,bQ as Te,ap as He,ao as Oe,ar as Fe,H as J,a1 as _,bR as Me,a$ as Pe,bS as Ie,b8 as T,bT as De,bU as Ne}from"./D81w4fj2.js";function X(e,t){return K(e,r=>{r!==void 0&&(t.value=r)}),$(()=>e.value===void 0?t.value:e.value)}const We=/^(\d|\.)+$/,Y=/(\d|\.)+/;function V(e,{c:t=1,offset:r=0,attachPx:u=!0}={}){if(typeof e=="number"){const s=(e+r)*t;return s===0?"0":`${s}px`}else if(typeof e=="string")if(We.test(e)){const s=(Number(e)+r)*t;return u?s===0?"0":`${s}px`:`${s}`}else{const s=Y.exec(e);return s?e.replace(Y,String((Number(s[0])+r)*t)):e}return e}function je(e){const{modalColor:t,textColor1:r,textColor2:u,boxShadow3:s,lineHeight:w,fontWeightStrong:c,dividerColor:f,closeColorHover:g,closeColorPressed:C,closeIconColor:z,closeIconColorHover:B,closeIconColorPressed:R,borderRadius:y,primaryColorHover:b}=e;return{bodyPadding:"16px 24px",borderRadius:y,headerPadding:"16px 24px",footerPadding:"16px 24px",color:t,textColor:u,titleTextColor:r,titleFontSize:"18px",titleFontWeight:c,boxShadow:s,lineHeight:w,headerBorderBottom:`1px solid ${f}`,footerBorderTop:`1px solid ${f}`,closeIconColor:z,closeIconColorHover:B,closeIconColorPressed:R,closeSize:"22px",closeIconSize:"18px",closeColorHover:g,closeColorPressed:C,closeBorderRadius:y,resizableTriggerColorHover:b}}const Ue=ve({name:"Drawer",common:we,peers:{Scrollbar:pe},self:je}),Ae=U({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentClass:String,contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=H(!!e.show),r=H(null),u=Q(A);let s=0,w="",c=null;const f=H(!1),g=H(!1),C=$(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:z,mergedRtlRef:B}=Z(e),R=Se("Drawer",B,z),y=o,b=n=>{g.value=!0,s=C.value?n.clientY:n.clientX,w=document.body.style.cursor,document.body.style.cursor=C.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",S),document.body.addEventListener("mouseleave",y),document.body.addEventListener("mouseup",o)},F=()=>{c!==null&&(window.clearTimeout(c),c=null),g.value?f.value=!0:c=window.setTimeout(()=>{f.value=!0},300)},D=()=>{c!==null&&(window.clearTimeout(c),c=null),f.value=!1},{doUpdateHeight:N,doUpdateWidth:W}=u,O=n=>{const{maxWidth:d}=e;if(d&&n>d)return d;const{minWidth:m}=e;return m&&n<m?m:n},M=n=>{const{maxHeight:d}=e;if(d&&n>d)return d;const{minHeight:m}=e;return m&&n<m?m:n};function S(n){var d,m;if(g.value)if(C.value){let p=((d=r.value)===null||d===void 0?void 0:d.offsetHeight)||0;const k=s-n.clientY;p+=e.placement==="bottom"?k:-k,p=M(p),N(p),s=n.clientY}else{let p=((m=r.value)===null||m===void 0?void 0:m.offsetWidth)||0;const k=s-n.clientX;p+=e.placement==="right"?k:-k,p=O(p),W(p),s=n.clientX}}function o(){g.value&&(s=0,g.value=!1,document.body.style.cursor=w,document.body.removeEventListener("mousemove",S),document.body.removeEventListener("mouseup",o),document.body.removeEventListener("mouseleave",y))}xe(()=>{e.show&&(t.value=!0)}),K(()=>e.show,n=>{n||o()}),$e(()=>{o()});const l=$(()=>{const{show:n}=e,d=[[L,n]];return e.showMask||d.push([ze,e.onClickoutside,void 0,{capture:!0}]),d});function h(){var n;t.value=!1,(n=e.onAfterLeave)===null||n===void 0||n.call(e)}return Be($(()=>e.blockScroll&&t.value)),P(Re,r),P(ke,null),P(Ee,null),{bodyRef:r,rtlEnabled:R,mergedClsPrefix:u.mergedClsPrefixRef,isMounted:u.isMountedRef,mergedTheme:u.mergedThemeRef,displayed:t,transitionName:$(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:h,bodyDirectives:l,handleMousedownResizeTrigger:b,handleMouseenterResizeTrigger:F,handleMouseleaveResizeTrigger:D,isDragging:g,isHoverOnResizeTrigger:f}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?j(a("div",{role:"none"},a(ye,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>a(q,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>j(a("div",Ce(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?a("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?a("div",{class:[`${t}-drawer-content-wrapper`,this.contentClass],style:this.contentStyle,role:"none"},e):a(G,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:[`${t}-drawer-content-wrapper`,this.contentClass],theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[L,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:Le,cubicBezierEaseOut:_e}=I;function Xe({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-bottom"}={}){return[i(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Le}`}),i(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${_e}`}),i(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),i(`&.${r}-transition-enter-from`,{transform:"translateY(100%)"}),i(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),i(`&.${r}-transition-leave-to`,{transform:"translateY(100%)"})]}const{cubicBezierEaseIn:Ye,cubicBezierEaseOut:Ve}=I;function Ke({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-left"}={}){return[i(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Ye}`}),i(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Ve}`}),i(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),i(`&.${r}-transition-enter-from`,{transform:"translateX(-100%)"}),i(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),i(`&.${r}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:qe,cubicBezierEaseOut:Ge}=I;function Qe({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-right"}={}){return[i(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${qe}`}),i(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Ge}`}),i(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),i(`&.${r}-transition-enter-from`,{transform:"translateX(100%)"}),i(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),i(`&.${r}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:Ze,cubicBezierEaseOut:Je}=I;function et({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-top"}={}){return[i(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Ze}`}),i(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Je}`}),i(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),i(`&.${r}-transition-enter-from`,{transform:"translateY(-100%)"}),i(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),i(`&.${r}-transition-leave-to`,{transform:"translateY(-100%)"})]}const tt=i([v("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[Qe(),Ke(),et(),Xe(),x("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),x("native-scrollbar",[v("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),E("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[x("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),v("drawer-content-wrapper",`
 box-sizing: border-box;
 `),v("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[x("native-scrollbar",[v("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),v("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),v("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),v("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[E("main",`
 flex: 1;
 `),E("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),v("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),x("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `,[E("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),x("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[E("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),x("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[E("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),x("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 `,[E("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),i("body",[i(">",[v("drawer-container",`
 position: fixed;
 `)])]),v("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[i("> *",`
 pointer-events: all;
 `)]),v("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[x("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),Te({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),rt=Object.assign(Object.assign({},J.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentClass:String,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),it=U({name:"Drawer",inheritAttrs:!1,props:rt,setup(e){const{mergedClsPrefixRef:t,namespaceRef:r,inlineThemeDisabled:u}=Z(e),s=Fe(),w=J("Drawer","-drawer",tt,Ue,e,t),c=H(e.defaultWidth),f=H(e.defaultHeight),g=X(_(e,"width"),c),C=X(_(e,"height"),f),z=$(()=>{const{placement:o}=e;return o==="top"||o==="bottom"?"":V(g.value)}),B=$(()=>{const{placement:o}=e;return o==="left"||o==="right"?"":V(C.value)}),R=o=>{const{onUpdateWidth:l,"onUpdate:width":h}=e;l&&T(l,o),h&&T(h,o),c.value=o},y=o=>{const{onUpdateHeight:l,"onUpdate:width":h}=e;l&&T(l,o),h&&T(h,o),f.value=o},b=$(()=>[{width:z.value,height:B.value},e.drawerStyle||""]);function F(o){const{onMaskClick:l,maskClosable:h}=e;h&&O(!1),l&&l(o)}function D(o){F(o)}const N=Me();function W(o){var l;(l=e.onEsc)===null||l===void 0||l.call(e),e.show&&e.closeOnEsc&&Ie(o)&&(N.value||O(!1))}function O(o){const{onHide:l,onUpdateShow:h,"onUpdate:show":n}=e;h&&T(h,o),n&&T(n,o),l&&!o&&T(l,o)}P(A,{isMountedRef:s,mergedThemeRef:w,mergedClsPrefixRef:t,doUpdateShow:O,doUpdateHeight:y,doUpdateWidth:R});const M=$(()=>{const{common:{cubicBezierEaseInOut:o,cubicBezierEaseIn:l,cubicBezierEaseOut:h},self:{color:n,textColor:d,boxShadow:m,lineHeight:p,headerPadding:k,footerPadding:ee,borderRadius:te,bodyPadding:re,titleFontSize:oe,titleTextColor:ne,titleFontWeight:ie,headerBorderBottom:se,footerBorderTop:ae,closeIconColor:le,closeIconColorHover:de,closeIconColorPressed:ce,closeColorHover:ue,closeColorPressed:he,closeIconSize:fe,closeSize:be,closeBorderRadius:me,resizableTriggerColorHover:ge}}=w.value;return{"--n-line-height":p,"--n-color":n,"--n-border-radius":te,"--n-text-color":d,"--n-box-shadow":m,"--n-bezier":o,"--n-bezier-out":h,"--n-bezier-in":l,"--n-header-padding":k,"--n-body-padding":re,"--n-footer-padding":ee,"--n-title-text-color":ne,"--n-title-font-size":oe,"--n-title-font-weight":ie,"--n-header-border-bottom":se,"--n-footer-border-top":ae,"--n-close-icon-color":le,"--n-close-icon-color-hover":de,"--n-close-icon-color-pressed":ce,"--n-close-size":be,"--n-close-color-hover":ue,"--n-close-color-pressed":he,"--n-close-icon-size":fe,"--n-close-border-radius":me,"--n-resize-trigger-color-hover":ge}}),S=u?Pe("drawer",void 0,M,e):void 0;return{mergedClsPrefix:t,namespace:r,mergedBodyStyle:b,handleOutsideClick:D,handleMaskClick:F,handleEsc:W,mergedTheme:w,cssVars:u?void 0:M,themeClass:S?.themeClass,onRender:S?.onRender,isMounted:s}},render(){const{mergedClsPrefix:e}=this;return a(Oe,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),j(a("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?a(q,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?a("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,a(Ae,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,contentClass:this.contentClass,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleOutsideClick}),this.$slots)),[[He,{zIndex:this.zIndex,enabled:this.show}]])}})}}),ot={title:String,headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],bodyClass:String,bodyStyle:[Object,String],bodyContentClass:String,bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},st=U({name:"DrawerContent",props:ot,slots:Object,setup(){const e=Q(A,null);e||Ne("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function r(){t(!1)}return{handleCloseClick:r,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:r,mergedTheme:u,bodyClass:s,bodyStyle:w,bodyContentClass:c,bodyContentStyle:f,headerClass:g,headerStyle:C,footerClass:z,footerStyle:B,scrollbarProps:R,closable:y,$slots:b}=this;return a("div",{role:"none",class:[`${t}-drawer-content`,r&&`${t}-drawer-content--native-scrollbar`]},b.header||e||y?a("div",{class:[`${t}-drawer-header`,g],style:C,role:"none"},a("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},b.header!==void 0?b.header():e),y&&a(De,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,r?a("div",{class:[`${t}-drawer-body`,s],style:w,role:"none"},a("div",{class:[`${t}-drawer-body-content-wrapper`,c],style:f,role:"none"},b)):a(G,Object.assign({themeOverrides:u.peerOverrides.Scrollbar,theme:u.peers.Scrollbar},R,{class:`${t}-drawer-body`,contentClass:[`${t}-drawer-body-content-wrapper`,c],contentStyle:f}),b),b.footer?a("div",{class:[`${t}-drawer-footer`,z],style:B,role:"none"},b.footer()):null)}}),at=""+new URL("x._8wSCWLm.png",import.meta.url).href;export{st as N,at as _,it as a,V as f,X as u};
