(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{103:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(6),i=(r(0),r(122)),o={id:"cli",title:"CLI Commands"},c={id:"api-reference/cli",title:"CLI Commands",description:"`sfr init`\r",source:"@site/docs\\api-reference\\cli.md",permalink:"/docs/api-reference/cli",editUrl:"https://github.com/schema-first-rest/schema-first-rest.github.io/edit/master/docs/api-reference/cli.md",sidebar:"someSidebar",previous:{title:"Express",permalink:"/docs/examples/express"}},l=[],p={rightToc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"sfr init")),Object(i.b)("p",null,"Initializes the directory with an ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction/configuration"}),"sfr.yaml")," file."),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"sfr")),Object(i.b)("p",null,"Runs the generator and outputs the files specified"),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"sfr emit --schema=./base.graphql")),Object(i.b)("p",null,"Emits the base graphql for all of your plugins. This is primarily used for better IDE support in your schema files, otherwise it may say it cannot find the directives."),Object(i.b)("p",null,"This will also update your ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction/configuration"}),"sfr.yaml")," to ignore this file. If you do not do this, you will get errors about duplicate directives during generation."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Options"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"schema")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The location you want to emit the graphql to")))))}b.isMDXComponent=!0},122:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(r),f=n,m=u["".concat(o,".").concat(f)]||u[f]||s[f]||i;return r?a.a.createElement(m,c({ref:t},p,{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);