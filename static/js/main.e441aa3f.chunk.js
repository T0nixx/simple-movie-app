(this["webpackJsonpreact-practice"]=this["webpackJsonpreact-practice"]||[]).push([[0],{56:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(28),r=a.n(c),i=a(8),o=a(2),l=a(1);var j=function(){return Object(l.jsx)("span",{children:"About this page: React practice project"})},u=a(17),m=a.n(u),d=a(29),p=a(11),b=a(12),h=a(14),v=a(13),O=a(30),x=a.n(O);a(56);function f(e){var t=e.id,a=e.year,n=e.title,s=e.summary,c=e.posterUrl,r=e.genres;return Object(l.jsx)("div",{className:"movie",children:Object(l.jsxs)(i.b,{to:{pathname:"/detail/:".concat(t),state:{id:t,year:a,title:n,summary:s,posterUrl:c,genres:r}},children:[Object(l.jsx)("div",{className:"movie__poster",children:Object(l.jsx)("img",{src:c,alt:"poster of ".concat(n),title:n})}),Object(l.jsxs)("div",{className:"movie__data",children:[Object(l.jsx)("h1",{className:"movie__title",children:n}),Object(l.jsx)("h3",{className:"movie__year",children:a}),Object(l.jsx)("ul",{className:"genres",children:r.map((function(e){return Object(l.jsx)("li",{className:"genres__genre",children:e},e)}))}),Object(l.jsx)("p",{className:"movie__summary",children:s})]})]})},t)}a(65);var y=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={isLoading:!0,movies:[]},n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,a=t.data.data.movies,this.setState({movies:a.map((function(e){var t=e.title,a=e.year,n=e.id,s=e.medium_cover_image;return{title:t,year:a,id:n,summary:e.summary,posterUrl:s,genres:e.genres}})),isLoading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(l.jsx)("div",{className:"movies",children:a.map(f)})})}}]),a}(s.a.Component),g=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e,t=this.props.location;return Object(l.jsx)("span",{children:null===(e=t.state)||void 0===e?void 0:e.title})}}]),a}(s.a.Component);a(66);var _=function(){return Object(l.jsxs)("div",{className:"navigation",children:[Object(l.jsx)(i.b,{to:"/",children:"Home"}),Object(l.jsx)(i.b,{to:"/about",children:"About"})]})};var N=function(){return Object(l.jsxs)(i.a,{basename:"/simple-movie-app",children:[Object(l.jsx)(_,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:y}),Object(l.jsx)(o.a,{path:"/about",component:j}),Object(l.jsx)(o.a,{path:"/detail/:id",component:g})]})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.e441aa3f.chunk.js.map