(this.webpackJsonpfindtheflag=this.webpackJsonpfindtheflag||[]).push([[0],{21:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(16),i=c.n(s),r=c(3),l=(c(21),c(5)),o=c.n(l),j=c(0),u=function(){return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)("h3",{children:"Loading.."}),Object(j.jsxs)("div",{id:"tria",class:"wheel",children:[Object(j.jsx)("div",{class:"circle1"}),Object(j.jsx)("div",{class:"circle2"}),Object(j.jsx)("div",{class:"circle3"})]})]})},b=function(e){var t=e.results.map((function(e,t){console.log(e);var c=e.name,n=e.flag,a=e.capital,s=e.population,i=e.region;return Object(j.jsxs)("ul",{className:"country-info",children:[Object(j.jsxs)("li",{children:["Region: ",i]}),Object(j.jsxs)("li",{children:["Capital: ",a]}),Object(j.jsxs)("li",{children:["Population: ",s]}),Object(j.jsx)("li",{children:Object(j.jsx)("img",{src:n,alt:c,className:"flag"})})]},t)}));return Object(j.jsx)(a.a.Fragment,{children:t})},d=c(41),O=function(e){var t=e.lista,c=d.getEmojiFlag("UA");console.log(c);var n=t.map((function(e,t){console.log(e);var c=e.name,n=e.flag,a=e.capital,s=e.population,i=e.region;e.languages;return Object(j.jsxs)("div",{children:[c,"\xa0 Region:\xa0 ",i," \xa0 Capital:\xa0 ",a,"\xa0 Population: \xa0",s,"\xa0",Object(j.jsx)("img",{src:n,alt:c,className:"flag"})]},t)}));return Object(j.jsx)(a.a.Fragment,{children:n})},h=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),i=Object(r.a)(s,2),l=i[0],d=i[1],h=Object(n.useState)([]),f=Object(r.a)(h,2),g=f[0],x=f[1],m=Object(n.useState)(!0),p=Object(r.a)(m,2),v=p[0],S=p[1];return Object(n.useEffect)((function(){setTimeout((function(){S(!1)}),2e3)}),[]),v?Object(j.jsx)(u,{}):Object(j.jsxs)("div",{className:"body-container",children:[Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=encodeURIComponent(c),n="https://restcountries.eu/rest/v2/name/".concat(t);o()(n).then((function(e){var t=e.data;return d(t)})).catch((function(e){return console.log("Your had an ".concat(e))}))},children:[Object(j.jsx)("input",{type:"text",value:c,onChange:function(e){a(e.target.value)},placeholder:"Write a country name"}),Object(j.jsx)("button",{type:"submit",children:"Search"})]}),Object(j.jsx)("button",{onClick:function(){var e="https://restcountries.eu/rest/v2/all";o()(e).then((function(e){var t=e.data;return x(t)})).catch((function(e){return console.log("Your had an ".concat(e))})),console.log(e)},children:"SEARCH YOUR FLAG"}),Object(j.jsx)(b,{results:l}),Object(j.jsx)("div",{className:"flag-list",children:Object(j.jsx)(O,{lista:g})}),Object(j.jsx)("div",{className:"map"})]})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.d3301b81.chunk.js.map