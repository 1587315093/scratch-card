"use strict";(self.webpackChunkscratch_card_react=self.webpackChunkscratch_card_react||[]).push([[779],{47336:function(V,R,n){n.r(R),n.d(R,{default:function(){return X}});var P=n(28152),b=n.n(P),T=n(77117),S=n.n(T),$=n(84875),I=n.n($),h=n(50959),k=n(13448),E=n.n(k),z=n(74815),A=n.n(z);function G(d){return new Promise(function(t,l){var c=new Image;c.src=d,c.onload=function(){return t(c)},c.onerror=l})}function U(d){return x.apply(this,arguments)}function x(){return x=A()(E()().mark(function d(t){var l;return E()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(!(t instanceof Promise)){u.next=7;break}return u.next=3,t;case 3:return l=u.sent,u.abrupt("return",l.default);case 7:return u.abrupt("return",t);case 8:case"end":return u.stop()}},d)})),x.apply(this,arguments)}var H=function(t){var l=t.canvasRef,c=t.width,u=t.height,a=t.coverColor,f=t.coverImg,m=(0,h.useRef)(!1),L=(0,h.useState)(!1),C=b()(L,2),Y=C[0],J=C[1];(0,h.useEffect)(function(){return K(),function(){Q()}},[]);var K=function(){var y=A()(E()().mark(function s(){var e,o,g,D;return E()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(e=l.current,e){i.next=3;break}return i.abrupt("return");case 3:if(e.width=c,e.height=u,o=e==null?void 0:e.getContext("2d"),o){i.next=8;break}return i.abrupt("return");case 8:if(!f){i.next=18;break}return i.next=11,U(f);case 11:return g=i.sent,i.next=14,G(g);case 14:D=i.sent,o.drawImage(D,0,0,c,u),i.next=20;break;case 18:o.fillStyle=a,o.fillRect(0,0,e.width,e.height);case 20:o.globalCompositeOperation="destination-out",e.addEventListener("mousedown",v.bind(null,!0)),e.addEventListener("touchstart",v.bind(null,!0)),e.addEventListener("mousemove",j),e.addEventListener("touchmove",j),e.addEventListener("mouseup",v.bind(null,!1)),e.addEventListener("touchend",v.bind(null,!1)),J(!0);case 28:case"end":return i.stop()}},s)}));return function(){return y.apply(this,arguments)}}(),Q=function(){var s=l.current;s&&(s.removeEventListener("mousedown",v.bind(null,!0)),s.removeEventListener("touchstart",v.bind(null,!0)),s.removeEventListener("mousemove",j),s.removeEventListener("touchmove",j),s.removeEventListener("mouseup",v.bind(null,!1)),s.removeEventListener("touchend",v.bind(null,!1)))},j=function(s){if(m.current){s.preventDefault();var e=l.current;if(e){var o=e.getContext("2d");if(o){var g=e.getClientRects()[0],D=s.clientX-g.x,F=s.clientY-g.y;o.beginPath(),o.arc(D,F,20,0,Math.PI*2),o.fill()}}}},v=function(s){m.current=s};return[m.current,Y]},W=null,r=n(11527),p="scratch-card",M={width:240,height:120,coverColor:"#ddd"},O=(0,h.forwardRef)(function(d,t){var l,c,u,a=S()(S()({},M),d),f=(0,h.useRef)(null),m=H({canvasRef:f,width:a.width,height:a.height,coverColor:a.coverColor,coverImg:a.coverImg}),L=b()(m,2),C=L[1];return(0,h.useImperativeHandle)(t,function(){return{canvasContainer:f.current,initDone:C}}),(0,r.jsxs)("div",{className:I()(p,a==null||(l=a.classNames)===null||l===void 0?void 0:l.root),style:{width:a.width,height:a.height},children:[(0,r.jsx)("canvas",{ref:f,className:I()("".concat(p,"-mask"),(c=a.classNames)===null||c===void 0?void 0:c.mask)}),(0,r.jsx)("div",{className:I()("".concat(p,"-container"),(u=a.classNames)===null||u===void 0?void 0:u.body),style:{width:a.width,height:a.height},children:C&&a.children})]})}),w=O,B=function(t){return(0,r.jsxs)("div",{style:{marginTop:20},children:[(0,r.jsx)("p",{children:t.title}),t.children]})},N=function(){return(0,r.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,r.jsx)("span",{children:"\u606D\u559C\u60A8\uFF0C\u522E\u4E2D\u4E86\u6CD5\u62C9\u52295\u5143\u4EE3\u91D1\u52B5"})})},X=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(B,{title:"\u57FA\u672C\u5C55\u793A\uFF0C\u4F1A\u6709\u9ED8\u8BA4\u5BBD\u9AD8\u548C\u989C\u8272",children:(0,r.jsx)(w,{})}),(0,r.jsx)(B,{title:"\u8BBE\u7F6E\u5BBD\u9AD8\u548C\u9EC4\u8272\u8499\u7248\u4E0E\u5E95\u90E8\u5143\u7D20",children:(0,r.jsx)(w,{classNames:{root:"customize-root",mask:"customize-mask",body:"customize-body"},width:260,height:180,coverColor:"yellow",children:(0,r.jsx)(N,{})})}),(0,r.jsx)(B,{title:"\u8BBE\u7F6E\u8499\u7248\u4E3A\u56FE\u7247",children:(0,r.jsx)(w,{width:260,height:180,coverImg:n.e(322).then(n.t.bind(n,98322,17)),children:(0,r.jsx)(N,{})})})]})}}}]);
