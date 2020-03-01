(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return m}));var a=n(1),r=n(6),l=(n(0),n(122)),i=n(137),o=n(135),c=n(136),s={id:"validate-models",title:"Plugin Validate Models"},u={id:"plugins/validate-models",title:"Plugin Validate Models",description:"import {CodeGenerator} from '../../src/components/codeGenerator';\r",source:"@site/docs\\plugins\\validate-models.md",permalink:"/docs/plugins/validate-models",editUrl:"https://github.com/schema-first-rest/schema-first-rest.github.io/edit/master/docs/plugins/validate-models.md",sidebar:"someSidebar",previous:{title:"Plugin Models",permalink:"/docs/plugins/models"},next:{title:"Plugin Raw Fetch",permalink:"/docs/plugins/raw-fetch"}},d=[{value:"Install",id:"install",children:[]},{value:"Code Generation",id:"code-generation",children:[]},{value:"Directives",id:"directives",children:[]},{value:"Dependencies",id:"dependencies",children:[]}],p={rightToc:d};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This plugin is used to generate a series of ",Object(l.b)("inlineCode",{parentName:"p"},"typescript")," functions that can be used to validate a JSON model. It can be used as a first step to make sure that the JSON sent over the wire matches your schema. "),Object(l.b)("h2",{id:"install"},"Install"),Object(l.b)(o.a,{defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @sfr/validate-models\n"))),Object(l.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install @sfr/validate-models\n")))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"code-generation"},"Code Generation"),Object(l.b)(i.a,{plugin:"validate-models",mdxType:"CodeGenerator"}),Object(l.b)("h2",{id:"directives"},"Directives"),Object(l.b)("p",null,"This plugin does not include any directives."),Object(l.b)("h2",{id:"dependencies"},"Dependencies"),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/plugins/controller"}),"@sfr/controller")))}m.isMDXComponent=!0},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return n?r.a.createElement(b,o({ref:t},s,{components:n})):r.a.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},135:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(125),i=n.n(l),o=n(85),c=n.n(o);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:o}=e,[d,p]=Object(a.useState)(l),m=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},o.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":d===e,className:i()("tab-item",c.a.tabItem,{"tab-item--active":d===e}),key:e,ref:e=>m.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(m,e.target,e),onFocus:()=>p(e),onClick:()=>p(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===d)[0]))}},136:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},137:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return O}));n(157),n(158),n(159);var a=n(0),r=n.n(a),l=n(149),i=n(175);n(84);e.hrtime=function(){return 1};var o=n(161).processPlugin,c=n(168),s=(c.plugin,c.config,n(169)),u=s.plugin,d=(s.config,n(172)),p=d.plugin,m=(d.config,n(173)),b=m.classesPlugin,f=m.handlersPlugin,h=n(174),v=h.plugin,g=(h.config,[{value:"models",label:"Models"},{value:"validate-models",label:"Validate Models"},{value:"raw-fetch",label:"Raw-Fetch"},{value:"serverless-api-base",label:"Serverless API Base"}]);function O(e){var t=e.plugin,n=Object(a.useState)(t||null),c=n[0],s=n[1],d=Object(a.useState)('type User @controller(path: "user") {\n  login(request: LoginRequest!): LoginResponse!\n    @request(method: POST, path: "login")\n}\n\ntype LoginRequest @model {\n  username: String!\n}\ntype LoginResponse @model {\n  authorized: Boolean!\n  jwt: String!\n}'),m=d[0],h=d[1],O=Object(a.useState)("var x=12;"),y=O[0],j=O[1];return Object(a.useEffect)((function(){try{var e=[];switch(c){case"raw-fetch":e.push({name:"@sfr/raw-fetch",method:"index",body:{plugin:p}});break;case"models":e.push({name:"@sfr/models",method:"index",body:{plugin:u}});break;case"serverless-api-base":e.push({name:"@sfr/serverless-api-base",method:"index",body:{plugin:b}}),e.push({name:"@sfr/serverless-api-base",method:"index",body:{plugin:f}}),e.push({name:"@sfr/models",method:"index",body:{plugin:u}});break;case"validate-models":e.push({name:"@sfr/validate-models",method:"index",body:{plugin:v}});break;default:return void j("Select a plugin above")}var t=o("directive @request(method: Method, path: String) on FIELD_DEFINITION\ndirective @controller(path: String) on OBJECT\ndirective @model on OBJECT | UNION | ENUM | INTERFACE | INPUT_OBJECT\n\ndirective @auth on FIELD_DEFINITION\n\nenum Method {\n  POST\n  GET\n  DELETE\n  PUT\n}\n\r\n"+m,e,{config:{}},!0,{tabWidth:2,singleQuote:!0,printWidth:120,bracketSpacing:!1,trailingComma:"es5",jsxBracketSameLine:!0});j(t)}catch(n){j(n.toString())}}),[m,c]),r.a.createElement(r.a.Fragment,null,!t&&r.a.createElement("div",null,r.a.createElement(i.a,{style:{width:"100%"},value:g.find((function(e){return e.value===c})),onChange:function(e){s(e.value)},options:g,placeholder:"Select Plugin"})),r.a.createElement("div",{className:"rowIfScreen"},r.a.createElement("div",{style:{flex:1}},r.a.createElement("div",{className:"code-header"},"GraphQL Schema"),r.a.createElement(l.ControlledEditor,{height:"50vh",theme:"dark",language:"graphql",value:m,onChange:function(e,t){return h(t)},options:{lineNumbers:"off",minimap:{enabled:!1}}})),r.a.createElement("div",{style:{flex:1}},r.a.createElement("div",{className:"code-header"},"Generated Code"),r.a.createElement(l.ControlledEditor,{height:"50vh",theme:"dark",language:"typescript",value:y,options:{lineNumbers:"off",readOnly:!0,minimap:{enabled:!1}}}))))}}).call(this,n(129))},153:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=153},171:function(e,t){}}]);