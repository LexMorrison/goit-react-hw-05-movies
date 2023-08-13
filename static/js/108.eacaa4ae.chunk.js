"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[108],{5108:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r,i,o,a,s=t(5861),c=t(9439),u=t(4687),p=t.n(u),l=t(2791),d=t(1087),x=t(1686),h=t.n(x),f=t(6718),m=t(168),g=t(1109),v=g.Z.form(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n"]))),b=g.Z.input(i||(i=(0,m.Z)(["\n  top: -30px;\n  position: relative;\n  padding: 10px;\n  width: 300px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  font-size: 16px;\n  margin-bottom: 10px;\n"]))),Z=g.Z.button(o||(o=(0,m.Z)(["\n  position: relative;\n  top: -25px;\n  padding: 5px 10px;\n  background-color: #333;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  &:hover {\n    background-color: white;\n    color: black;\n  }\n"]))),y=t(7322),w=t(184),j=function(n){var e=n.pushForm,t=(0,l.useState)(""),r=(0,c.Z)(t,2),i=r[0],o=r[1];return(0,w.jsxs)(v,{onSubmit:function(n){n.preventDefault(),e(i.trim()),o("")},children:[(0,w.jsx)(b,{type:"text",placeholder:"type something",name:"search",value:i,onChange:function(n){o(n.target.value)}}),(0,w.jsxs)(Z,{type:"submit",children:["Search",(0,w.jsx)(y.D5o,{size:"2rem"})]})]})},k=t(7047),_=t(854),S=g.Z.h3(a||(a=(0,m.Z)(["\n  margin-left: 16px;\n"]))),q=function(){var n=(0,l.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1],i=(0,l.useState)(null),o=(0,c.Z)(i,2),a=o[0],u=o[1],x=(0,l.useState)(!1),m=(0,c.Z)(x,2),g=m[0],v=m[1],b=(0,d.lr)(""),Z=(0,c.Z)(b,2),y=Z[0],q=Z[1],z=y.get("query"),C="";(0,l.useEffect)((function(){v(!0);var n=function(){var n=(0,s.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.r)("/search/movie",1,z);case 3:e=n.sent,r(e.data.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),u("error");case 10:return n.prev=10,v(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[z,y]);return C=0===t.length?"There isnt anything":"Movie list:",(0,w.jsxs)("div",{children:[g&&(0,w.jsx)(_.Z,{}),a&&(0,w.jsx)("p",{children:"Oops, something went wrong!"}),(0,w.jsx)(j,{pushForm:function(n){""!==n?q({query:n}):h().Notify.warning("Please, type your search query!")}}),z&&(0,w.jsx)(S,{children:C}),0!==t.length&&(0,w.jsx)(k.Z,{movieList:t})]})}},6718:function(n,e,t){t.d(e,{r:function(){return u}});var r=t(5861),i=t(4687),o=t.n(i),a=t(1686),s=t.n(a),c=t(1243);function u(n){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(o().mark((function n(e){var t,r,i,a,u=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:1,r=u.length>2&&void 0!==u[2]?u[2]:"",n.prev=2,i="https://api.themoviedb.org/3"+e+"?api_key=".concat("e001340a26371433e04561724452dcfa"),r&&(i+="&query=".concat(r.trim())),t&&(i+="&page=".concat(t)),n.next=10,c.Z.get(i);case 10:return a=n.sent,n.abrupt("return",a);case 14:n.prev=14,n.t0=n.catch(2),s().Notify.failure(n.t0.message);case 17:case"end":return n.stop()}}),n,null,[[2,14]])}))),p.apply(this,arguments)}},854:function(n,e,t){var r=t(8593),i=t(184);e.Z=function(){return(0,i.jsx)("div",{children:(0,i.jsx)(r.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},7047:function(n,e,t){t.d(e,{Z:function(){return v}});var r,i,o,a,s,c=t(7689),u=t(168),p=t(1109),l=t(1087),d=p.Z.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  gap: 40px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-bottom: 25px;\n"]))),x=p.Z.img(i||(i=(0,u.Z)(["\n  width: 300px;\n  height: 450px;\n  border-bottom: 2px solid black;\n\n  transition: transform 0.3s ease-in-out;\n  &:hover {\n    border: 2px solid black;\n    border-radius: 2px;\n    transform: scale(1.1);\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  }\n"]))),h=(0,p.Z)(l.rU)(o||(o=(0,u.Z)(["\n  text-decoration: none;\n  color: white;\n"]))),f=p.Z.li(a||(a=(0,u.Z)(["\n  max-width: 300px;\n  border: 2px solid;\n  border-radius: 2px;\n  background-color: gray;\n"]))),m=p.Z.p(s||(s=(0,u.Z)(["\n  font-size: 20px;\n\n  text-align: center;\n"]))),g=t(184),v=function(n){var e=n.movieList,t=(0,c.TH)();return(0,g.jsx)(d,{children:e.map((function(n){var e=n.id,r=n.title,i=n.name,o=n.poster_path;return(0,g.jsx)(f,{children:(0,g.jsxs)(h,{to:"/movies/".concat(e),state:{from:t},children:[(0,g.jsx)(x,{src:o?"https://image.tmdb.org/t/p/w500/"+o:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:r||i}),(0,g.jsx)(m,{children:r||i})]})},e)}))})}}}]);
//# sourceMappingURL=108.eacaa4ae.chunk.js.map