(this["webpackJsonprewards-store"]=this["webpackJsonprewards-store"]||[]).push([[0],{60:function(t,n,e){"use strict";e.r(n);var r=e(1),c=e(0),i=e(10),o=e.n(i),a=e(3),s=e(4),u=e(20),d=e.p+"static/media/aerolab-logo.0a8fb170.svg",l=e(8),b=e(15),j=e(16),f=e.n(j),m=e(25),p=new Headers;p.append("Authorization","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA3OTg2YzdlNzE4NzAwMjBlMzhlZGYiLCJpYXQiOjE2MTExMTA1MDh9.EUfklESmYmodtRTEvu7xMhOUAlph2DA3cfnYCorTiCM"),p.append("Content-Type","application/json"),p.append("Cookie","__cfduid=dd159e1f127ea9dc2f49dad7a94c1cde41608247239");var x="https://coding-challenge-api.aerolab.co",O=function(){var t=Object(m.a)(f.a.mark((function t(n){var e,r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={method:"GET",headers:p,redirect:"follow"},t.prev=1,t.next=4,fetch("".concat(x,"/user/me"),e);case 4:return r=t.sent,t.next=7,r.json();case 7:c=t.sent,n(c),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log("error",t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=Object(m.a)(f.a.mark((function t(n,e,r){var c,i,o,a,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=JSON.stringify({amount:n}),i={method:"POST",headers:p,body:c,redirect:"follow"},t.prev=2,t.next=5,fetch("".concat(x,"/user/points"),i);case 5:return o=t.sent,t.next=8,o.json();case 8:a=t.sent,(s=Object(b.a)({},e)).points=a["New Points"],r(s),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),console.log("error",t.t0);case 17:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(n,e,r){return t.apply(this,arguments)}}(),v=function(){var t=Object(m.a)(f.a.mark((function t(n){var e,r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={method:"GET",headers:p,redirect:"follow"},t.prev=1,t.next=4,fetch("".concat(x,"/products"),e);case 4:return r=t.sent,t.next=7,r.json();case 7:c=t.sent,n(c),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log("error",t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(n){return t.apply(this,arguments)}}(),g=function(){var t=Object(m.a)(f.a.mark((function t(n){var e,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=JSON.stringify({productId:n}),r={method:"POST",headers:p,body:e,redirect:"follow"},t.prev=2,t.next=5,fetch("".concat(x,"/redeem"),r);case 5:return t.abrupt("return",!0);case 8:return t.prev=8,t.t0=t.catch(2),console.log("error",t.t0),t.abrupt("return",!1);case 12:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(n){return t.apply(this,arguments)}}(),w=Object(c.createContext)(),y=function(t){var n=Object(c.useState)({name:"",points:0,redeemHistory:[]}),e=Object(l.a)(n,2),i=e[0],o=e[1];return Object(c.useEffect)((function(){O(o)}),[]),Object(r.jsx)(w.Provider,{value:[i,o],children:t.children})},C=e.p+"static/media/coin.4da2d7d0.svg",k={colors:{primary:"#0AD4FA",background:"#F2F2F2",boxShadow:"2px 2px 4px rgba(0, 0, 0, 0.1)",buttonBackground:"#EDEDED",backgroundGradient:"linear-gradient(180deg, rgba(10, 212, 250, 0.86) 0%, rgba(37, 187, 241, 0.86) 100%);"},fonts:{primaryColor:"#616161",secondaryColor:"#A3A3A3"},mediaQueries:{above480:"(min-width: 480px)",above600:"(min-width: 600px)",above768:"(min-width: 768px)",above900:"(min-width: 900px)",above1024:"(min-width: 1024px)",above1200:"(min-width: 1200px)"}};function z(){var t=Object(s.a)(["\n\tmargin: 0.5rem;\n\tpadding: 0.3rem;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder-radius: 1.2rem;\n\tbackground-color: ",";\n\n\tp {\n\t\tmargin: 0.1rem;\n\t}\n\n\timg {\n\t\twidth: 1.6rem;\n\t\tmargin: 0.1rem;\n\t}\n"]);return z=function(){return t},t}var I=a.c.div(z(),k.colors.buttonBackground);function Q(){var t=Object(s.a)(["\n\tpadding: 0.18rem;\n\twidth: 1.5rem;\n"]);return Q=function(){return t},t}function S(){var t=Object(s.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\n\tp {\n\t\tcolor: ",";\n\t}\n\n\t@media ","{\n\t\twidth: fit-content;\n\t})\n"]);return S=function(){return t},t}var E=a.c.div(S(),k.fonts.primaryColor,k.mediaQueries.above600),A=a.c.img(Q()),P=function(){var t=Object(c.useContext)(w),n=Object(l.a)(t,1)[0];return Object(r.jsxs)(E,{children:[Object(r.jsx)("p",{children:n.name}),Object(r.jsxs)(I,{children:[Object(r.jsx)("p",{children:n.points}),Object(r.jsx)(A,{src:C,alt:"Ilustracion de una moneda"})]})]})},D=e(37),T=e(38);function M(){var t=Object(s.a)(["\n\tpadding: 0.5rem;\n\tborder-radius: 30px;\n\ttext-decoration: none;\n\tcolor: #fff;\n\ttext-align: center;\n\tlist-style: none;\n\ttransition: all 0.3s ease-in;\n\n\t&:hover {\n\t\tcolor: ",";\n\t}\n\n\t@media "," {\n\t\tcolor: ",";\n\n\t\t&:hover {\n\t\t\tbackground-color: ",";\n\t\t\tcolor: white;\n\t\t}\n\t}\n"]);return M=function(){return t},t}function J(){var t=Object(s.a)(["\n\twidth: 100%;\n\theight: ",";\n\ttransition: ",";\n\tposition: absolute;\n\ttop: 4rem;\n\tleft: 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\toverflow: hidden;\n\tbackground-color: ",";\n\n\t@media "," {\n\t\twidth: fit-content;\n\t\theight: 100%;\n\t\tflex-direction: row;\n\t\tposition: relative;\n\t\ttop: 0;\n\t\tbackground-color: transparent;\n\t}\n"]);return J=function(){return t},t}function R(){var t=Object(s.a)(["\n\tmargin: 0.2rem;\n\twidth: 1rem;\n\tcursor: pointer;\n\n\t@media ","{\n\t\tdisplay: none\n\t})\n"]);return R=function(){return t},t}var N=a.c.div(R(),k.mediaQueries.above600),B=a.c.ul(J(),(function(t){return t.isOpen?"95%":"0"}),(function(t){return t.isOpen?"height 0.3s ease-in":"none"}),k.colors.primary,k.mediaQueries.above600),G=Object(a.c)(u.b)(M(),k.fonts.primaryColor,k.mediaQueries.above600,k.colors.primary,k.colors.primary),Y=function(){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),e=n[0],i=n[1],o=function(){return i(!1)};return Object(r.jsxs)("nav",{children:[Object(r.jsx)(N,{onClick:function(){return i(!e)},children:e?Object(r.jsx)(D.a,{icon:T.b,color:k.colors.primary,size:"lg"}):Object(r.jsx)(D.a,{icon:T.a,color:k.colors.primary,size:"lg"})}),Object(r.jsxs)(B,{isOpen:e,children:[Object(r.jsx)(G,{onClick:o,exact:!0,to:"/",children:Object(r.jsx)("li",{children:"Shop"})}),Object(r.jsx)(G,{onClick:o,to:"/redeems",children:Object(r.jsx)("li",{children:"Redeems"})}),Object(r.jsx)(G,{onClick:o,to:"/getcoins",children:Object(r.jsx)("li",{children:"Get Coins"})})]})]})};function F(){var t=Object(s.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tz-index: 100;\n"]);return F=function(){return t},t}function U(){var t=Object(s.a)(["\n\tpadding: 10px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tflex-wrap: wrap;\n"]);return U=function(){return t},t}var _=a.c.header(U()),H=a.c.div(F()),L=function(){return Object(r.jsxs)(_,{children:[Object(r.jsx)(u.b,{exact:!0,to:"/",children:Object(r.jsx)("img",{src:d,alt:"Logo de Aerolab"})}),Object(r.jsxs)(H,{children:[Object(r.jsx)(P,{}),Object(r.jsx)(Y,{})]})]})},W=Object(c.createContext)(),X=function(t){var n=Object(c.useState)([{name:"",_id:"",cost:0,category:"",img:{hdUrl:"",url:""}}]),e=Object(l.a)(n,2),i=e[0],o=e[1];return Object(c.useEffect)((function(){v(o)}),[]),Object(r.jsx)(W.Provider,{value:[i,o],children:t.children})};function V(){var t=Object(s.a)(["\n\tmargin: 0.5rem;\n\twidth: 100%;\n\theight: 1px;\n\tbackground-color: #ebe3e3;\n\tborder: #ebe3e3;\n"]);return V=function(){return t},t}function Z(){var t=Object(s.a)(["\n\tfont-size: 0.8em;\n"]);return Z=function(){return t},t}function q(){var t=Object(s.a)(["\n\tcolor: ",";\n\tfont-size: 0.8em;\n"]);return q=function(){return t},t}function K(){var t=Object(s.a)(["\n\tpadding-top: 0.5rem;\n\talign-self: flex-start;\n"]);return K=function(){return t},t}function $(){var t=Object(s.a)(["\n\twidth: 100%;\n"]);return $=function(){return t},t}function tt(){var t=Object(s.a)(["\n\tmargin: 0.5rem;\n\tpadding: 0.8rem;\n\twidth: 70%;\n\tborder: 0.5px solid #e4e1e1;\n\tborder-radius: 5px;\n\tbox-shadow: ",";\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tposition: relative;\n\tz-index: 5;\n\n\t@media "," {\n\t\twidth: 40%;\n\t}\n\n\t@media "," {\n\t\twidth: 20%;\n\t}\n"]);return tt=function(){return t},t}var nt=a.c.div(tt(),k.colors.boxShadow,k.mediaQueries.above600,k.mediaQueries.above768),et=a.c.img($()),rt=a.c.div(K()),ct=a.c.p(q(),k.fonts.secondaryColor),it=a.c.p(Z()),ot=a.c.hr(V()),at=e.p+"static/media/buy-blue.c5c4f01c.svg",st=e.p+"static/media/buy-white.9b6e6567.svg";function ut(){var t=Object(s.a)(["\n\tposition: relative;\n\tright: -0.8rem;\n\twidth: 65%;\n"]);return ut=function(){return t},t}function dt(){var t=Object(s.a)(["\n\tpadding: 0.18rem;\n\twidth: 1.5rem;\n"]);return dt=function(){return t},t}function lt(){var t=Object(s.a)(["\n\tfont-size: 0.8em;\n\tcolor: #fff;\n"]);return lt=function(){return t},t}function bt(){var t=Object(s.a)(["\n\tpadding: 0.6rem;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tborder-radius: 50px;\n\tbackground-color: ",";\n\topacity: 0.8;\n"]);return bt=function(){return t},t}function jt(){var t=Object(s.a)(["\n\talign-self: flex-end;\n\tposition: absolute;\n\ttop: 0.5rem;\n\tright: 0.3rem;\n\tz-index: 300;\n"]);return jt=function(){return t},t}var ft=function(t,n,e){var c=e?st:at;return Object(r.jsx)(mt,{children:function(t,n){return t>=n?Object(r.jsx)(ht,{src:c,alt:"icono de bolsa de compras"}):Object(r.jsxs)(pt,{children:[Object(r.jsxs)(xt,{children:["You need ",n-t]}),Object(r.jsx)(Ot,{src:C,alt:"icono de una moneda"})]})}(t,n)})},mt=a.c.div(jt()),pt=a.c.div(bt(),k.fonts.primaryColor),xt=a.c.p(lt()),Ot=a.c.img(dt()),ht=a.c.img(ut()),vt=e(80),gt=e(81),wt=e(83),yt=e(82);function Ct(){var t=Object(s.a)(["\n\tfont-weight: 500;\n"]);return Ct=function(){return t},t}function kt(){var t=Object(s.a)(["\n\twidth: 20rem;\n\tpadding: 0.5rem;\n\tborder: none;\n\tborder-radius: 20px;\n\tbackground-color: #f2f1f1;\n\tcolor: ",";\n\tfont-size: 0.9em;\n\toutline: none;\n\tcursor: pointer;\n\n\t&:hover {\n\t\tbackground-color: #c7c5c5;\n\t\tcolor: #fff;\n\t}\n\n\t@media (min-width: 600px) {\n\t\twidth: 12rem;\n\t}\n\t@media (min-width: 768px) {\n\t\twidth: 10rem;\n\t}\n"]);return kt=function(){return t},t}var zt=function(t){var n=t.redeemProduct,e=t.userPoints,i=t.productCost,o=t.productId,a=t.successRedeem,s=It(),u=Object(c.useState)(!1),d=Object(l.a)(u,2),b=d[0],j=d[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(Qt,{type:"button",onClick:function(){j(!0),n(o,i,e)},children:"Redeem now"}),Object(r.jsx)(gt.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:s.modal,open:b,onClose:function(){j(!1)},closeAfterTransition:!0,BackdropComponent:wt.a,BackdropProps:{timeout:500},children:Object(r.jsx)(yt.a,{in:b,children:Object(r.jsxs)("div",{className:s.paper,children:[Object(r.jsx)(St,{id:"transition-modal-title",children:a?"Congratulations!":"Ops... something went wrong!"}),Object(r.jsx)("p",{id:"transition-modal-description",children:a?"You've redeem the product successfully":"Please try again in a few minutes."})]})})})]})},It=Object(vt.a)((function(t){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:"#fffefe",border:"none",boxShadow:t.shadows[5],borderRadius:"10px",padding:t.spacing(2,4,3),color:"#0AD4FA",fontWeight:300,textAlign:"center",outline:"none"}}})),Qt=a.c.button(kt(),k.fonts.primaryColor),St=a.c.h3(Ct());function Et(){var t=Object(s.a)(["\n\tpadding: 0.11rem;\n\twidth: 1.8rem;\n"]);return Et=function(){return t},t}function At(){var t=Object(s.a)(["\n\tmargin: 0.3rem;\n\tfont-size: 2em;\n\tfont-weight: 300;\n\tcolor: #fff;\n"]);return At=function(){return t},t}function Pt(){var t=Object(s.a)(["\n\tdisplay: flex;\n"]);return Pt=function(){return t},t}function Dt(){var t=Object(s.a)(["\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tbottom: 0;\n\twidth: 100%;\n\tborder-radius: 5px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tz-index: 100;\n\tbackground: linear-gradient(\n\t\t180deg,\n\t\trgba(10, 212, 250, 0.86) 0%,\n\t\trgba(37, 187, 241, 0.86) 100%\n\t);\n"]);return Dt=function(){return t},t}var Tt=a.c.div(Dt()),Mt=a.c.div(Pt()),Jt=a.c.p(At()),Rt=a.c.img(Et()),Nt=function(t){var n=t.userData,e=t.setUserData,i=t.userPoints,o=t.productCost,a=t.productId,s=Object(c.useState)(!1),u=Object(l.a)(s,2),d=u[0],j=u[1];return Object(r.jsxs)(Tt,{children:[Object(r.jsxs)(Mt,{children:[Object(r.jsx)(Jt,{children:o.toLocaleString("de-DE")}),Object(r.jsx)(Rt,{src:C,alt:"icono de una moneda"})]}),i>=o&&Object(r.jsx)(zt,{redeemProduct:function(t,r,c){var i=g(t),o=c-r;e(Object(b.a)(Object(b.a)({},n),{},{points:o})),j(i)},userPoints:i,productCost:o,productId:a,successRedeem:d})]})},Bt=function(t){var n=t.name,e=t.category,i=t.img,o=t.cost,a=t._id,s=Object(c.useContext)(w),u=Object(l.a)(s,2),d=u[0],b=u[1],j=d.points,f=Object(c.useState)(!1),m=Object(l.a)(f,2),p=m[0],x=m[1];return Object(r.jsxs)(nt,{onMouseLeave:function(){return x(!1)},onMouseEnter:function(){return x(!0)},children:[p&&Object(r.jsx)(Nt,{userData:d,setUserData:b,userPoints:j,productCost:o,productId:a}),Object(r.jsx)(ft,{productCost:o,userPoints:j,hover:p}),Object(r.jsx)(et,{src:i.url,alt:"Imagen ilustrativa del producto"}),Object(r.jsx)(ot,{}),Object(r.jsxs)(rt,{children:[Object(r.jsx)(ct,{children:e}),Object(r.jsx)(it,{children:n})]})]})};function Gt(){var t=Object(s.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\n\t@media ","{\n\t\tflex-direction: row;\n\t\tjustify-content: center;\n\t\tflex-wrap: wrap;\n\t\tmax-width: 100%;\n\t})\n"]);return Gt=function(){return t},t}var Yt=function(){var t=Object(c.useContext)(W),n=Object(l.a)(t,1)[0];return Object(r.jsx)(Ft,{children:n.map((function(t){return Object(c.createElement)(Bt,Object(b.a)(Object(b.a)({},t),{},{key:t._id}))}))})},Ft=a.c.div(Gt(),k.mediaQueries.above600),Ut=e.p+"static/media/header-x1.b6f067c6.png";function _t(){var t=Object(s.a)(["\n\twidth: 80%;\n\tcolor: ",";\n\tposition: relative;\n\tfont-size: 1.3em;\n\ttop: -3rem;\n\tleft: 1.5rem;\n\n\t@media "," {\n\t\tfont-size: 1.8em;\n\t\ttop: -4rem;\n\t}\n\n\t@media "," {\n\t\tfont-size: 2em;\n\t\ttop: -5rem;\n\t}\n\n\t@media "," {\n\t\tfont-size: 2.3em;\n\t\ttop: -6rem;\n\t}\n\t@media "," {\n\t\tfont-size: 2.5em;\n\t\ttop: -7rem;\n\t}\n\t@media "," {\n\t\tfont-size: 3em;\n\t\ttop: -8rem;\n\t}\n\t@media "," {\n\t\tfont-size: 4em;\n\t\ttop: -10rem;\n\t}\n"]);return _t=function(){return t},t}function Ht(){var t=Object(s.a)(["\n\tmax-width: 100%;\n"]);return Ht=function(){return t},t}function Lt(){var t=Object(s.a)(["\n\tposition: relative;\n"]);return Lt=function(){return t},t}var Wt=a.c.div(Lt()),Xt=a.c.img(Ht()),Vt=a.c.h1(_t(),k.colors.background,k.mediaQueries.above480,k.mediaQueries.above600,k.mediaQueries.above768,k.mediaQueries.above900,k.mediaQueries.above1024,k.mediaQueries.above1200),Zt=function(){return Object(r.jsxs)(Wt,{children:[Object(r.jsx)(Xt,{src:Ut,alt:"Imagen de portada"}),Object(r.jsx)(Vt,{children:"Rewards Store"})]})},qt=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Zt,{}),Object(r.jsx)(Yt,{})]})};function Kt(){var t=Object(s.a)(["\n\tcolor: ",";\n"]);return Kt=function(){return t},t}function $t(){var t=Object(s.a)(["\n\tmargin: 3rem;\n\ttext-align: center;\n\tcolor: ",";\n"]);return $t=function(){return t},t}var tn=a.c.section($t(),k.fonts.primaryColor),nn=a.c.h2(Kt(),k.colors.primary);function en(){var t=Object(s.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tmargin: 0.5rem;\n\ttext-align: left;\n"]);return en=function(){return t},t}function rn(){var t=Object(s.a)(["\n\tmargin: 0.5rem;\n\tmax-width: 30%;\n"]);return rn=function(){return t},t}function cn(){var t=Object(s.a)(["\n\tmargin: 0.5rem;\n\tdisplay: flex;\n\tborder: 2px solid #d8d8d8;\n\tborder-radius: 15px;\n\tbox-shadow: ",";\n"]);return cn=function(){return t},t}var on=a.c.article(cn(),k.colors.boxShadow),an=a.c.img(rn()),sn=a.c.div(en()),un=function(t){return Object(r.jsxs)(on,{children:[Object(r.jsx)(an,{src:t.img.url,alt:"Imagen ilustrativa del producto"}),Object(r.jsxs)(sn,{children:[Object(r.jsx)("b",{children:t.name}),Object(r.jsxs)("p",{children:[Object(r.jsx)("b",{children:"Cost: "}),t.cost," coins"]})]})]})};function dn(){var t=Object(s.a)(["\n\tmargin: 2rem auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t@media "," {\n\t\tmargin: 0 auto;\n\t\twidth: 60%;\n\t}\n\n\t@media "," {\n\t\twidth: 40%;\n\t}\n"]);return dn=function(){return t},t}var ln=a.c.section(dn(),k.mediaQueries.above768,k.mediaQueries.above1024),bn=function(){var t=Object(c.useContext)(w),n=Object(l.a)(t,1)[0].redeemHistory;return console.log(n),Object(r.jsxs)(tn,{children:[Object(r.jsx)(nn,{children:"Redeemed products"}),Object(r.jsx)("p",{children:"History of your redeems"}),Object(r.jsx)(ln,{children:n.map((function(t){return Object(c.createElement)(un,Object(b.a)(Object(b.a)({},t),{},{key:t.createDate}))}))})]})};function jn(){var t=Object(s.a)(["\n\tmargin: 1rem;\n\tcursor: pointer;\n\n\t&:hover {\n\t\tbackground-color: ",";\n\t}\n\n\t@media "," {\n\t\twidth: 100%;\n\t}\n\n\t@media "," {\n\t\twidth: 50%;\n\t}\n"]);return jn=function(){return t},t}function fn(){var t=Object(s.a)(["\n\tmargin: 0 auto;\n\twidth: 80%;\n\n\t@media ","{\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t})\n"]);return fn=function(){return t},t}var mn=a.c.div(fn(),k.mediaQueries.above600),pn=Object(a.c)(I)(jn(),k.colors.background,k.mediaQueries.above600,k.mediaQueries.above1200),xn=function(){var t=Object(c.useContext)(w),n=Object(l.a)(t,2),e=n[0],i=n[1],o=function(t){h(t,e,i)};return Object(r.jsxs)(tn,{children:[Object(r.jsx)(nn,{children:"Get more coins"}),Object(r.jsx)("p",{children:"Choose the coins you want to add"}),Object(r.jsxs)(mn,{children:[Object(r.jsxs)(pn,{onClick:function(){o(1e3)},children:[Object(r.jsx)("p",{children:"1000"}),Object(r.jsx)("img",{src:C,alt:"Ilustration of coin"})]}),Object(r.jsxs)(pn,{onClick:function(){o(5e3)},children:[Object(r.jsx)("p",{children:"5000"}),Object(r.jsx)("img",{src:C,alt:"Ilustration of coin"})]}),Object(r.jsxs)(pn,{onClick:function(){o(7500)},children:[Object(r.jsx)("p",{children:"7500"}),Object(r.jsx)("img",{src:C,alt:"Ilustration of coin"})]})]})]})},On=e(7);var hn=function(){return Object(r.jsx)(u.a,{children:Object(r.jsx)(y,{children:Object(r.jsxs)(X,{children:[Object(r.jsx)(L,{}),Object(r.jsxs)(On.c,{children:[Object(r.jsx)(On.a,{exact:!0,path:"/",component:qt}),Object(r.jsx)(On.a,{path:"/redeems",component:bn}),Object(r.jsx)(On.a,{path:"/getcoins",component:xn})]})]})})})};function vn(){var t=Object(s.a)(["\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\tfont-family: 'Source Sans Pro', sans-serif;\n\tcolor: '#616161'\n}\n"]);return vn=function(){return t},t}var gn=Object(a.b)(vn());o.a.render(Object(r.jsxs)(a.a,{theme:k,children:[Object(r.jsx)(gn,{}),Object(r.jsx)(hn,{})]}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.c7b4304b.chunk.js.map