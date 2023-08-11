"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[782],{6718:function(t,n,e){e.d(n,{r:function(){return u}});var r=e(5861),o=e(4687),i=e.n(o),a=e(1686),s=e.n(a),c=e(1243);function u(t){return h.apply(this,arguments)}function h(){return h=(0,r.Z)(i().mark((function t(n){var e,r,o,a,u=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=u.length>1&&void 0!==u[1]?u[1]:1,r=u.length>2&&void 0!==u[2]?u[2]:"",t.prev=2,o="https://api.themoviedb.org/3"+n+"?api_key=".concat("e001340a26371433e04561724452dcfa"),r&&(o+="&query=".concat(r.trim())),e&&(o+="&page=".concat(e)),t.next=10,c.Z.get(o);case 10:return a=t.sent,t.abrupt("return",a);case 14:t.prev=14,t.t0=t.catch(2),s().Notify.failure(t.t0.message);case 17:case"end":return t.stop()}}),t,null,[[2,14]])}))),h.apply(this,arguments)}},854:function(t,n,e){var r=e(8593),o=e(184);n.Z=function(){return(0,o.jsx)("div",{children:(0,o.jsx)(r.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},7047:function(t,n,e){e.d(n,{Z:function(){return v}});var r,o,i,a,s,c=e(168),u=e(1109),h=e(1087),l=u.Z.ul(r||(r=(0,c.Z)(["\n  display: flex;\n  gap: 40px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-bottom: 25px;\n"]))),p=u.Z.img(o||(o=(0,c.Z)(["\n  width: 300px;\n  height: 450px;\n  border-bottom: 2px solid black;\n\n  transition: transform 0.3s ease-in-out;\n  &:hover {\n    border: 2px solid black;\n    border-radius: 2px;\n    transform: scale(1.1);\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  }\n"]))),d=(0,u.Z)(h.rU)(i||(i=(0,c.Z)(["\n  text-decoration: none;\n  color: white;\n"]))),f=u.Z.li(a||(a=(0,c.Z)(["\n  max-width: 300px;\n  border: 2px solid;\n  border-radius: 2px;\n  background-color: gray;\n"]))),x=u.Z.p(s||(s=(0,c.Z)(["\n  font-size: 20px;\n\n  text-align: center;\n"]))),m=e(184),v=function(t){var n=t.movieList,e=t.location,r=t.imgPoster;return(0,m.jsx)(l,{children:n.map((function(t){var n=t.id,o=t.title,i=t.name,a=t.poster_path;return(0,m.jsx)(f,{children:(0,m.jsxs)(d,{to:"/movies/".concat(n),state:{from:e},children:[(0,m.jsx)(p,{src:r+a,alt:o||i}),(0,m.jsx)(x,{children:o||i})]})},n)}))})}},9782:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var r=e(9439),o=e(2791),i=e(7689),a=e(1087),s=e(1686),c=e.n(s),u=e(6718),h=e(184),l=function(t){var n=t.pushForm,e=t.inputValue,r=t.searchText;return(0,h.jsxs)("form",{onSubmit:n,children:[(0,h.jsx)("input",{type:"text",placeholder:"type something",name:"search",value:r,onChange:e}),(0,h.jsx)("button",{type:"submit",children:"Search"})]})},p=e(7047),d=e(854),f=function(t){var n,e,s=t.imgPost,f=(0,o.useState)([]),x=(0,r.Z)(f,2),m=x[0],v=x[1],g=(0,i.TH)(),b=(0,o.useState)(!1),Z=(0,r.Z)(b,2),w=Z[0],j=Z[1],y=(0,a.lr)(),k=(0,r.Z)(y,2),_=k[0],S=k[1],C=(0,o.useState)(null!==(n=_.get("search"))&&void 0!==n?n:""),P=(0,r.Z)(C,2),T=P[0],D=P[1];(0,o.useEffect)((function(){j(!0),(0,u.r)("/search/movie",1,T).then((function(t){if(200!==t.status)throw new Error("Something went wrong!");v(t.data.results),j(!1)}))}),[T]);return(0,h.jsxs)("div",{children:[w&&(0,h.jsx)(d.Z,{}),(0,h.jsx)(l,{pushForm:function(t){t.preventDefaults();var n=_.get("search");S({search:n.trim()}),D(n.trim()),T||c().Notify.info("The search bar cannot be empty. Please type something!")},inputValue:function(t){var n=t.target.value;S({search:n})},searchText:null!==(e=_.get("search"))&&void 0!==e?e:""}),0!==m.length&&(0,h.jsx)(p.Z,{movieList:m,location:g,imgPoster:s})]})}}}]);
//# sourceMappingURL=782.30cb2c2a.chunk.js.map