"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[277],{7605:function(n,t,r){r.r(t),r.d(t,{default:function(){return m}});var e,a,i,c=r(885),o=r(2791),u=r(6871),s=r(8183),p=r(168),f=r(2499),d=f.Z.ul(e||(e=(0,p.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 18px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin: 30px;\n  \n"]))),l=f.Z.li(a||(a=(0,p.Z)(["\n  text-align: center;\n  font-size: 18px;\n   font-family:Verdana, Geneva, Tahoma, sans-serif\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),x=f.Z.img(i||(i=(0,p.Z)(["\n  width: 100%;\n  height: 260px;\n  object-fit: contain;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),h=r(184);function m(){var n=(0,o.useState)(null),t=(0,c.Z)(n,2),r=t[0],e=t[1],a=(0,u.UO)();return(0,o.useEffect)((function(){(0,s.IQ)(a.id).then(e)}),[a.id]),(0,h.jsx)(h.Fragment,{children:r&&(0,h.jsx)(d,{children:r.cast.map((function(n){return(0,h.jsxs)(l,{children:[(0,h.jsx)(x,{src:n.profile_path?"https://image.tmdb.org/t/p/w200/".concat(n.profile_path):"https://st4.depositphotos.com/14953852/22772/v/200/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg",alt:n.original_name}),(0,h.jsx)("p",{children:n.original_name}),(0,h.jsx)("p",{children:n.character})]},n.id)}))})})}},8183:function(n,t,r){r.d(t,{IQ:function(){return l},TP:function(){return f},Tn:function(){return d},e2:function(){return s},gH:function(){return p}});var e=r(5861),a=r(7757),i=r.n(a),c=r(4569),o=r.n(c);o().defaults.baseURL="https://api.themoviedb.org/3";var u="342eb2d403c7b59809d73aa477ec348f",s=function(){var n=(0,e.Z)(i().mark((function n(){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/trending/movie/day?page=1&api_key=".concat(u));case 2:return t=n.sent,r=t.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/search/movie?api_key=".concat(u,"&query=").concat(t));case 2:return r=n.sent,e=r.data.results,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(t,"?api_key=").concat(u));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(t,"/reviews?api_key=").concat(u));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=cast.376b9667.chunk.js.map