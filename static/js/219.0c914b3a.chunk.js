"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[219],{219:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,c,u,i=t(861),s=t(439),p=t(757),o=t.n(p),d=t(75),l=t(791),f=t(168),h=t(444),x=h.ZP.ul(r||(r=(0,f.Z)(["\n  padding: 30px 0;\n  margin: 0;\n  list-style: none;\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n"]))),g=(h.ZP.div(a||(a=(0,f.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),h.ZP.p(c||(c=(0,f.Z)(["\n  text-align: center;\n  padding: 5px 0;\n  margin: 0;\n"])))),v=h.ZP.div(u||(u=(0,f.Z)(["\n  width: 200px;\n"]))),m=t(537),k=t(184),w=t(87).useParams,y=function(){var n=w().movieId,e=(0,l.useState)(null),t=(0,s.Z)(e,2),r=t[0],a=t[1],c=(0,l.useState)("idle"),u=(0,s.Z)(c,2),p=u[0],f=u[1];return(0,l.useEffect)((function(){function e(){return e=(0,i.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,f("pending"),n.next=4,(0,d.Me)(e);case 4:t=n.sent,a(t),f("responded"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),f("rejected");case 12:case"end":return n.stop()}}),n,null,[[0,9]])}))),e.apply(this,arguments)}!function(n){e.apply(this,arguments)}(n)}),[n]),(0,k.jsxs)(k.Fragment,{children:["responded"===p&&(0,k.jsx)(x,{children:r.map((function(n){var e=n.character,t=n.name,r=n.profile_path,a=n.cast_id;return(0,k.jsx)("li",{children:(0,k.jsxs)("div",{children:[(0,k.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w200".concat(r):"https://kartinkin.net/uploads/posts/2022-03/1647018833_14-kartinkin-net-p-anonim-kartinki-20.jpg",width:"200",alt:t}),(0,k.jsxs)(v,{children:[(0,k.jsxs)(g,{children:[t," "]}),(0,k.jsxs)(g,{children:[" ",e]})]})]})},a)}))}),"pending"===p&&(0,k.jsx)(m.a,{}),"rejected"===p&&(0,k.jsx)("h2",{children:"Sorry we didn't find this page"})]})}},75:function(n,e,t){t.d(e,{L_:function(){return g},Me:function(){return h},_k:function(){return s},jC:function(){return l},pg:function(){return o}});var r=t(861),a=t(757),c=t.n(a),u=t(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="1e395e29306fb63d59de4db5fab63c08";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/all/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function o(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US&external_source=imdb_id"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=219.0c914b3a.chunk.js.map